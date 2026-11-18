-- updated_at helper
create or replace function public.set_updated_at() returns trigger language plpgsql set search_path = '' as $$
begin new.updated_at = now(); return new; end $$;

-- members (approval status)
create table public.members (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text,
  status text not null default 'pending' check (status in ('pending','active','blocked')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, update, delete on public.members to authenticated;
grant all on public.members to service_role;
alter table public.members enable row level security;
create trigger members_updated_at before update on public.members for each row execute function public.set_updated_at();

-- private contact (single row)
create table public.private_contact (
  id smallint primary key default 1 check (id = 1),
  private_phone text, private_email text, private_address text,
  work_phone text, work_email text, work_address text,
  note text,
  updated_at timestamptz not null default now()
);
grant select, insert, update on public.private_contact to authenticated;
grant all on public.private_contact to service_role;
alter table public.private_contact enable row level security;
create trigger private_contact_updated_at before update on public.private_contact for each row execute function public.set_updated_at();

-- settings (single row)
create table public.app_settings (
  id smallint primary key default 1 check (id = 1),
  mfa_required_for_members boolean not null default false,
  updated_at timestamptz not null default now()
);
grant select, update on public.app_settings to authenticated;
grant all on public.app_settings to service_role;
alter table public.app_settings enable row level security;
create trigger app_settings_updated_at before update on public.app_settings for each row execute function public.set_updated_at();

-- recovery codes (server only)
create table public.mfa_recovery_codes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  code_hash text not null,
  used_at timestamptz,
  created_at timestamptz not null default now()
);
create index mfa_recovery_codes_user_idx on public.mfa_recovery_codes(user_id);
grant all on public.mfa_recovery_codes to service_role;
alter table public.mfa_recovery_codes enable row level security;

-- documents: visibility + file info
alter table public.documents
  add column if not exists is_visible boolean not null default false,
  add column if not exists file_name text,
  add column if not exists mime_type text,
  add column if not exists size_bytes bigint,
  add column if not exists updated_at timestamptz not null default now();
create trigger documents_updated_at before update on public.documents for each row execute function public.set_updated_at();

-- grants on existing tables
grant select, insert, update, delete on public.documents to authenticated;
grant select, insert, update, delete on public.app_roles to authenticated;
grant select, insert on public.audit_events to authenticated;
grant select, insert, update, delete on public.profiles to authenticated;
grant all on public.documents, public.app_roles, public.audit_events, public.profiles to service_role;

-- helper functions
create or replace function public.mfa_ok() returns boolean language sql stable security definer set search_path = '' as $$
  select case
    when coalesce((select auth.jwt() ->> 'aal'), '') = 'aal2' then true
    when exists (select 1 from public.app_roles r where r.user_id = (select auth.uid()) and r.role = 'admin') then false
    when exists (select 1 from auth.mfa_factors f where f.user_id = (select auth.uid()) and f.status = 'verified') then false
    else not coalesce((select s.mfa_required_for_members from public.app_settings s where s.id = 1), false)
  end
$$;

create or replace function public.can_view_private() returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.app_roles r where r.user_id = (select auth.uid()) and r.role = 'admin')
      or exists (select 1 from public.members m where m.user_id = (select auth.uid()) and m.status = 'active')
$$;

create or replace function public.get_my_access() returns jsonb language sql stable security definer set search_path = '' as $$
  select jsonb_build_object(
    'is_admin', exists (select 1 from public.app_roles r where r.user_id = (select auth.uid()) and r.role = 'admin'),
    'status', coalesce((select m.status from public.members m where m.user_id = (select auth.uid())), 'pending'),
    'has_mfa', exists (select 1 from auth.mfa_factors f where f.user_id = (select auth.uid()) and f.status = 'verified'),
    'mfa_required_for_members', coalesce((select s.mfa_required_for_members from public.app_settings s where s.id = 1), false)
  )
$$;

revoke execute on function public.mfa_ok() from public, anon;
revoke execute on function public.can_view_private() from public, anon;
revoke execute on function public.get_my_access() from public, anon;
grant execute on function public.mfa_ok() to authenticated;
grant execute on function public.can_view_private() to authenticated;
grant execute on function public.get_my_access() to authenticated;

-- members policies
create policy members_read_own_or_admin on public.members for select to authenticated
  using (user_id = (select auth.uid()) or public.is_hsv_admin());
create policy members_admin_update on public.members for update to authenticated
  using (public.is_hsv_admin() and (select auth.jwt() ->> 'aal') = 'aal2')
  with check (public.is_hsv_admin() and (select auth.jwt() ->> 'aal') = 'aal2');
create policy members_admin_delete on public.members for delete to authenticated
  using (public.is_hsv_admin() and (select auth.jwt() ->> 'aal') = 'aal2');

-- private contact policies
create policy private_contact_read on public.private_contact for select to authenticated using (public.can_view_private());
create policy private_contact_admin_insert on public.private_contact for insert to authenticated with check (public.is_hsv_admin());
create policy private_contact_admin_update on public.private_contact for update to authenticated using (public.is_hsv_admin()) with check (public.is_hsv_admin());
create policy private_contact_mfa on public.private_contact as restrictive for all to authenticated using (public.mfa_ok()) with check (public.mfa_ok());

-- settings policies
create policy app_settings_read on public.app_settings for select to authenticated using (true);
create policy app_settings_admin_update on public.app_settings for update to authenticated
  using (public.is_hsv_admin() and (select auth.jwt() ->> 'aal') = 'aal2')
  with check (public.is_hsv_admin() and (select auth.jwt() ->> 'aal') = 'aal2');

-- documents policies: members may read visible documents; MFA rule replaces strict aal2 rule
drop policy if exists aal2_required_documents on public.documents;
create policy documents_mfa on public.documents as restrictive for all to authenticated using (public.mfa_ok()) with check (public.mfa_ok());
create policy documents_member_read on public.documents for select to authenticated using (is_visible and public.can_view_private());

-- storage policies
drop policy if exists aal2_required_private_documents_storage on storage.objects;
create policy private_docs_mfa on storage.objects as restrictive for all to authenticated
  using (bucket_id <> 'Private Dokumente' or public.mfa_ok())
  with check (bucket_id <> 'Private Dokumente' or public.mfa_ok());
create policy private_files_member_read on storage.objects for select to authenticated
  using (
    bucket_id = 'Private Dokumente'
    and public.can_view_private()
    and exists (select 1 from public.documents d where d.object_path = storage.objects.name and d.is_visible)
  );

-- new accounts: pending member; owner becomes the only admin
create or replace function public.handle_new_member() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.members (user_id, email, display_name, status)
  values (new.id, coalesce(new.email, ''), nullif(new.raw_user_meta_data ->> 'display_name', ''),
          case when lower(new.email) = 'fiboe02@outlook.de' then 'active' else 'pending' end)
  on conflict (user_id) do nothing;
  if lower(new.email) = 'fiboe02@outlook.de' then
    insert into public.app_roles (user_id, role) values (new.id, 'admin') on conflict do nothing;
    delete from public.app_roles where role = 'admin' and user_id <> new.id;
  end if;
  return new;
end $$;
revoke execute on function public.handle_new_member() from public, anon, authenticated;
create trigger on_auth_user_created_member after insert on auth.users for each row execute function public.handle_new_member();

-- backfill existing accounts as approved members
insert into public.members (user_id, email, status)
select u.id, coalesce(u.email, ''), 'active' from auth.users u
on conflict (user_id) do nothing;

-- if the owner already exists, make them the only admin
do $$
declare owner_id uuid;
begin
  select id into owner_id from auth.users where lower(email) = 'fiboe02@outlook.de' limit 1;
  if owner_id is not null then
    insert into public.app_roles (user_id, role) values (owner_id, 'admin') on conflict do nothing;
    delete from public.app_roles where role = 'admin' and user_id <> owner_id;
  end if;
end $$;

insert into public.app_settings (id) values (1) on conflict (id) do nothing;
insert into public.private_contact (id) values (1) on conflict (id) do nothing;

update public.documents set is_visible = true, category = 'Lebenslauf', file_name = 'CV-Lasse-Boettcher-August.pdf', mime_type = 'application/pdf', size_bytes = 268532
where id = '1bfbb65a-b5ee-4241-81a3-c7a600b12c85';
update public.documents set file_name = 'HSV-PORTAL-FUNKTIONSTEST.docx', mime_type = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', size_bytes = 13641
where id = 'e1500590-8268-471f-8e6b-aba3f830951e';