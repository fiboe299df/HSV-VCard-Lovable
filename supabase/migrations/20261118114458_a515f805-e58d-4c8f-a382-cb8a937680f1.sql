create schema if not exists private;
grant usage on schema private to authenticated, service_role;

create or replace function private.mfa_ok() returns boolean language sql stable security definer set search_path = '' as $$
  select case
    when coalesce((select auth.jwt() ->> 'aal'), '') = 'aal2' then true
    when exists (select 1 from public.app_roles r where r.user_id = (select auth.uid()) and r.role = 'admin') then false
    when exists (select 1 from auth.mfa_factors f where f.user_id = (select auth.uid()) and f.status = 'verified') then false
    else not coalesce((select s.mfa_required_for_members from public.app_settings s where s.id = 1), false)
  end
$$;

create or replace function private.can_view_private() returns boolean language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.app_roles r where r.user_id = (select auth.uid()) and r.role = 'admin')
      or exists (select 1 from public.members m where m.user_id = (select auth.uid()) and m.status = 'active')
$$;

revoke execute on function private.mfa_ok() from public, anon;
revoke execute on function private.can_view_private() from public, anon;
grant execute on function private.mfa_ok() to authenticated, service_role;
grant execute on function private.can_view_private() to authenticated, service_role;

drop policy if exists private_contact_read on public.private_contact;
drop policy if exists private_contact_mfa on public.private_contact;
drop policy if exists documents_mfa on public.documents;
drop policy if exists documents_member_read on public.documents;
drop policy if exists private_docs_mfa on storage.objects;
drop policy if exists private_files_member_read on storage.objects;

create policy private_contact_read on public.private_contact for select to authenticated using (private.can_view_private());
create policy private_contact_mfa on public.private_contact as restrictive for all to authenticated using (private.mfa_ok()) with check (private.mfa_ok());
create policy documents_mfa on public.documents as restrictive for all to authenticated using (private.mfa_ok()) with check (private.mfa_ok());
create policy documents_member_read on public.documents for select to authenticated using (is_visible and private.can_view_private());
create policy private_docs_mfa on storage.objects as restrictive for all to authenticated
  using (bucket_id <> 'Private Dokumente' or private.mfa_ok())
  with check (bucket_id <> 'Private Dokumente' or private.mfa_ok());
create policy private_files_member_read on storage.objects for select to authenticated
  using (
    bucket_id = 'Private Dokumente'
    and private.can_view_private()
    and exists (select 1 from public.documents d where d.object_path = storage.objects.name and d.is_visible)
  );

drop function if exists public.mfa_ok();
drop function if exists public.can_view_private();