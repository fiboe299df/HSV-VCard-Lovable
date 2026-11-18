/** Pure access rules for the private area (shared by browser and server). */

export type MemberStatus = "pending" | "active" | "blocked";

export type Access = {
  is_admin: boolean;
  status: MemberStatus;
  has_mfa: boolean;
  mfa_required_for_members: boolean;
};

export type Gate = "blocked" | "mfa-verify" | "mfa-setup" | "pending" | "ok";

/** Decide which screen a signed-in person sees. Admins must always use MFA. */
export function decideGate(access: Access, currentLevel: string | null | undefined): Gate {
  if (access.status === "blocked" && !access.is_admin) return "blocked";
  if (access.has_mfa && currentLevel !== "aal2") return "mfa-verify";
  if (!access.has_mfa && (access.is_admin || access.mfa_required_for_members)) return "mfa-setup";
  if (!access.is_admin && access.status !== "active") return "pending";
  return "ok";
}

export function parseAccess(raw: unknown): Access {
  const r = (raw ?? {}) as Partial<Record<keyof Access, unknown>>;
  const status = r.status === "active" || r.status === "blocked" ? r.status : "pending";
  return {
    is_admin: r.is_admin === true,
    status,
    has_mfa: r.has_mfa === true,
    mfa_required_for_members: r.mfa_required_for_members === true,
  };
}

/* ---------------------------------------------------- device + inactivity */

export const REMEMBER_DAYS = 30;
export const INACTIVITY_MINUTES = 20;
const DAY = 24 * 60 * 60 * 1000;
const MINUTE = 60 * 1000;

export function rememberUntil(now: number): number {
  return now + REMEMBER_DAYS * DAY;
}

export function isRemembered(until: number | null, now: number): boolean {
  return until !== null && until > now;
}

/** A remembered device is signed out once its 30 days are over. */
export function rememberExpired(until: number | null, now: number): boolean {
  return until !== null && until <= now;
}

/** Devices that are not remembered are signed out after 20 minutes without activity. */
export function inactivityExpired(lastActivity: number | null, now: number, remembered: boolean): boolean {
  if (remembered || lastActivity === null) return false;
  return now - lastActivity > INACTIVITY_MINUTES * MINUTE;
}

/* --------------------------------------------------------- recovery codes */

export const RECOVERY_CODE_COUNT = 10;
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O, 1/I

export function normalizeRecoveryCode(input: string): string {
  return input.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

export function formatRecoveryCode(code: string): string {
  const n = normalizeRecoveryCode(code);
  return `${n.slice(0, 5)}-${n.slice(5, 10)}`;
}

export function createRecoveryCodes(count = RECOVERY_CODE_COUNT): string[] {
  const codes = new Set<string>();
  while (codes.size < count) {
    const bytes = new Uint8Array(10);
    crypto.getRandomValues(bytes);
    const raw = Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join("");
    codes.add(formatRecoveryCode(raw));
  }
  return [...codes];
}

export async function hashRecoveryCode(userId: string, code: string): Promise<string> {
  const data = new TextEncoder().encode(`${userId}:${normalizeRecoveryCode(code)}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

export const OWNER_EMAIL = "fiboe02@outlook.de";
export const DOCS_BUCKET = "Private Dokumente";
export const DOC_CATEGORIES = ["Lebenslauf", "Zeugnis", "Zertifikat", "Bewerbung", "Sonstiges"] as const;
