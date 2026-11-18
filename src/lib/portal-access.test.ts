import { describe, expect, it } from "vitest";
import {
  createRecoveryCodes, decideGate, hashRecoveryCode, inactivityExpired, isRemembered, normalizeRecoveryCode,
  rememberExpired, rememberUntil, type Access,
} from "./portal-access";

const base: Access = { is_admin: false, status: "active", has_mfa: false, mfa_required_for_members: false };

describe("private area gate", () => {
  it("forces an admin without MFA to set it up", () => {
    expect(decideGate({ ...base, is_admin: true }, "aal1")).toBe("mfa-setup");
  });
  it("asks for the code when MFA exists but is not confirmed yet", () => {
    expect(decideGate({ ...base, has_mfa: true }, "aal1")).toBe("mfa-verify");
  });
  it("lets an approved member without MFA in while MFA is optional", () => {
    expect(decideGate(base, "aal1")).toBe("ok");
  });
  it("requires MFA for members once the admin makes it mandatory", () => {
    expect(decideGate({ ...base, mfa_required_for_members: true }, "aal1")).toBe("mfa-setup");
  });
  it("keeps new sign-ups waiting until approval", () => {
    expect(decideGate({ ...base, status: "pending" }, "aal1")).toBe("pending");
  });
  it("shuts out blocked people", () => {
    expect(decideGate({ ...base, status: "blocked", has_mfa: true }, "aal2")).toBe("blocked");
  });
});

describe("remember device and inactivity", () => {
  const now = Date.UTC(2026, 10, 18, 12);
  it("remembers a device for 30 days", () => {
    const until = rememberUntil(now);
    expect(isRemembered(until, now + 29 * 86_400_000)).toBe(true);
    expect(rememberExpired(until, now + 30 * 86_400_000)).toBe(true);
  });
  it("signs out after 20 minutes without activity", () => {
    expect(inactivityExpired(now, now + 19 * 60_000, false)).toBe(false);
    expect(inactivityExpired(now, now + 21 * 60_000, false)).toBe(true);
    expect(inactivityExpired(now, now + 21 * 60_000, true)).toBe(false);
  });
});

describe("recovery codes", () => {
  it("creates 10 different codes", () => {
    const codes = createRecoveryCodes();
    expect(codes).toHaveLength(10);
    expect(new Set(codes).size).toBe(10);
    expect(codes[0]).toMatch(/^[A-Z2-9]{5}-[A-Z2-9]{5}$/);
  });
  it("accepts codes typed with spaces or lower case", async () => {
    expect(normalizeRecoveryCode(" abcde-fghjk ")).toBe("ABCDEFGHJK");
    expect(await hashRecoveryCode("u1", "abcde fghjk")).toBe(await hashRecoveryCode("u1", "ABCDE-FGHJK"));
    expect(await hashRecoveryCode("u1", "ABCDE-FGHJK")).not.toBe(await hashRecoveryCode("u2", "ABCDE-FGHJK"));
  });
});
