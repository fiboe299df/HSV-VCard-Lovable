import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/login.css?raw";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Anmelden | HSV Visitenkarten" }] }),
  staticData: { importedDocument: { html: { "lang": "de" }, body: { "data-react-root": "true" } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className={"flex items-center \x62g-background \x70x-4 \x70y-8 text-foreground [&]:justify-center [min-height:100vh]"}>
        <div className="w-full [max-width:28rem]">
          <div className={"mb-8 [&]:text-center"}>
            <div className={"mb-4 inline-flex h-14 w-14 items-center rounded-2xl \x62g-primary [&]:justify-center"}>
              <svg className="h-7 w-7 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" x2="3" y1="12" y2="12" />
              </svg>
            </div>
            <h1 className={"\x74ext-3xl \x66ont-bold [letter-spacing:-0.025em]"}>Welcome back</h1>
            <p className="mt-2 text-muted-foreground">Log in to your account</p>
          </div>
          <div className={"rounded-2xl \x62order \x62order-border \x62g-card p-8 text-card-foreground \x73hadow-sm"}>
            <button className={"inline-flex items-center gap-2 rounded-md transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62order \x62order-input bg-transparent \x73hadow-sm \x68over:\x62g-accent \x68over:\x74ext-accent-foreground \x70x-4 \x70y-2 mb-6 h-12 w-full \x74ext-sm \x66ont-medium [&]:justify-center [&]:whitespace-nowrap"} type="button"><svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>Continue with Google</button>
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className={"w-full \x62order-t \x62order-border"} />
              </div>
              <div className={"relative flex \x74ext-xs [&]:justify-center [&]:uppercase"}>
                <span className={"\x62g-card \x70x-3 text-muted-foreground"}>or</span>
              </div>
            </div>
            <form className={"\x73pace-y-4"}>
              <div className={"\x73pace-y-2"}>
                <label className={"\x74ext-sm \x66ont-medium \x6ceading-none \x70eer-disabled:\x63ursor-not-allowed \x70eer-disabled:\x6fpacity-70"} htmlFor="login-email">Email</label>
                <div className="relative">
                  <svg className={"absolute left-3 top-1/2 h-4 w-4 \x2dtranslate-y-1/\x32 text-muted-foreground"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <input className={"flex w-full rounded-md \x62order \x62order-input bg-transparent \x70x-3 \x70y-1 \x74ext-base \x73hadow-sm transition-colors \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm h-12 pl-10"} id="login-email" autoComplete="email" placeholder="you@example.com" required type="email" defaultValue="" />
                </div>
              </div>
              <div className={"\x73pace-y-2"}>
                <div className={"flex items-center [&]:justify-between"}>
                  <label className={"\x74ext-sm \x66ont-medium \x6ceading-none \x70eer-disabled:\x63ursor-not-allowed \x70eer-disabled:\x6fpacity-70"} htmlFor="login-password">Password</label>
                  <a className={"\x74ext-xs text-primary \x68over:\x75nderline"} href="/forgot-password?returnTo=%2Fprivat">Forgot password?</a>
                </div>
                <div className="relative">
                  <svg className={"absolute left-3 top-1/2 h-4 w-4 \x2dtranslate-y-1/\x32 text-muted-foreground"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input className={"flex w-full rounded-md \x62order \x62order-input bg-transparent \x70x-3 \x70y-1 \x74ext-base \x73hadow-sm transition-colors \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ile:\x74ext-foreground \x70laceholder:\x74ext-muted-foreground \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x63ursor-not-allowed disabled:opacity-50 \x6dd:\x74ext-sm h-12 pl-10"} id="login-password" autoComplete="current-password" placeholder="••••••••" required type="password" defaultValue="" />
                </div>
              </div>
              <button className={"inline-flex items-center gap-2 rounded-md \x74ext-sm transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x66ocus-visible:\x72ing-ring \x64isabled:\x70ointer-events-none disabled:opacity-50 [&\x5fsvg]:\x70ointer-events-none [&\x5fsvg]:\x73ize-4 [&\x5fsvg]:\x73hrink-0 \x62g-primary text-primary-foreground \x73hadow \x68over:\x62g-primary/\x390 \x70x-4 \x70y-2 h-12 w-full \x66ont-medium [&]:justify-center [&]:whitespace-nowrap"} type="submit">Log in</button>
            </form>
            <p className={"mt-6 \x74ext-sm text-muted-foreground [&]:text-center"}>Don't have an account? <a className={"\x66ont-medium text-primary \x68over:\x75nderline"} href="/register?returnTo=%2Fprivat">Create one</a></p>
          </div>
        </div>
      </div>
      <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" />
      <div style={{ position: "fixed", zIndex: "999999", bottom: "16px", right: "16px", display: "flex", alignItems: "center", gap: "8px", backgroundColor: "rgb(0, 0, 0)", color: "rgb(255, 255, 255)", padding: "8px 12px", borderRadius: "6px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px", cursor: "pointer", transition: "box-shadow 0.2s", border: "1px solid rgb(38, 38, 38)", fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontSize: "14px" }} id="base44-edit-badge" dir="ltr"><img style={{ width: "20px", height: "20px" }} src="/site-assets/13404f20d3476d50.png" alt="base44" /><span className={"[&]:whitespace-nowrap"} style={{ fontSize: "12px" }}>{"\n        "}<span id="badge-content">{"\n          "}<div className={"[&]:justify-center"} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px" }}><span>Edit with </span><span style={{ marginBottom: "2px" }}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAABECAMAAAB+vJpyAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAEVQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////Up1zwgAAABZ0Uk5TABAgMEBQX2BvcH+Aj5CfoK+wv8/f741pbhwAAAVHSURBVHja7ZvtbuwoDECNQ5ZNSZgsAd7/Ufeq6i0Ex3Y6I1WJNOdv3RlyGvAHKrx58+bNmzdvfg0v4OwAN8P5BnH16FsM/KUoxNnCffi3tDgQCKUFqxCd5OAmYCFCdHVUiE5CuAXptBDMohCdD7gBczktJBVVyP2NuNLhBHWaEB0LFwcTESKoe11IMnBtYulxvDpdiI6HS/NRCE5UpwvJqaX05ItnXIoT1elCPOwY3HqfU8QkTQhVpwtRNtsE1yUUTQhVpwtR6pdwi5I9KUJCeUUI+FKJcFUwVx+eCOHULVETomy4dIOSPSMRwqqDZ4QAEXLtjDuBLCQ1Dp4TkoQtg25ev/Jziqu30EAD81fcZIHFjDVwdginsO0xR4Rw6jw8JySXb/6DFvORSs/qgEIDU7CHNlzsAyf8UcmeUBYytn/d54QYJu1iODk7MXMuB8SBHneHgQF/kHFHIEJYdU8KsaUyCIuvzAYabBbjKsNWTimWd4EsZO1+pAqR9ad2EQKbOReYEFTD+uQB2wUSIZy6BX4shD6Q0x6THr5O6Z9PfmI4V7IjEcKqM88JMfNh0h2KwlSTvkjQfOjvyEyWT4Rw6nQhwba4OZaGjMz4bQuLDzHvYs1BlZw+42i7SA3nLcat7Bj1Sc8KVAirThWiM7a5q/J9oeESedewlT0cxcWDdusrJaNLRLGccRkhVF2E14Vke9wdWag8+u3lDncjbqVi+gFnsjVwUadTkTw8FUJLdnxdSESoZG6ZW/f5ayuoYvJ+ydhlqIonr4iQNmQhpAc+LUQtjpCdoTk2zQdo8XujgZ/bRuKeTRusEKruJSFUiWWbG9N968YEDumbpeu3+N40itMrBFGIJerOC9EzH35j2M44dN9nz7ZmfG1phJrRAyuEqntJCNneEtj1ges+dzAsjLY+ozl+0hOBF0LV6UJeN4LjFLbc59OptOQ4j4OYKbLoeOEnPcgJEdXpQrawY41Zr6CNneaYS0+sm0Gz0k7/KN1Lx6QNUQgWRt0TvYx9lBZLhzlCO1O/kFqx5B1QSVzGDSAKMaw6XYh265daG1Hv72xhSQGBjdGFjCRtsEJmou5pIbSutqRbF4WA1/OWLWdhGzVRiCPqXhBCVrzU6lsVohvZ8FkhWE7hyAo0BCGV3L+2Qy5nhYBLYt66pZC1VAzrI62LOxAC+BD0zbcU8igV/D5mK3kLkzXwh+N8b9yaCoMFvLmQbroVlxHhCyqkMox+3QplAUN+ieOSWwb3N1cWGtRnM3Z6dFZy+3npJkJSqRgYSc6R+2Cl2MPWN95CiN3/wsKvP+yFYMWwxZ6FSVoAVsxVhHQz0JV9C3AfCCv7Lk3MqZqN8JH2GkJM2J+BEFkhWyek2Rob+5x2Vy/O/IwwQwvyLHshBnmaFVv8RBNiPnLf3a1ctx5KJ2Ri20K7ux4d2QuY4dRllVS6S+ile/Q7wpoO+qsHc/m9kUrV0GtL6q5uSmrkn0yU/pqQ83tyOlr9MOeD0j0eX1mbWZib1EAbySzmakISuWXLq3duCunMgGibLP5hnDO5L166cUnwYe0M41WE0Nc+ChFkQKSQajcvM8H1hORBm+gkR+8oZbBWJiIeriOEHosLa8xWIcKDkgWrgR6uJ2Qx9VDcGB9AhIgPmh1UzEOKu5YQ2sUtzPUvFQLgtftibZS0IlxLSI6TASCLp8aOhQA+EqtYVZKDBfhdIVFgDd4NBo5wTV5Mi4VPhviXuWtwt04xwiF2aQNTcAZ+jIvfaDKXGmrgdYZx8t670ZyMdv4Pk7MIEsaO02fcYN7/Zf7mzfX5H+WZeZXgxfH6AAAAAElFTkSuQmCC" alt="Base44" height="18" width="56" /></span></div>{"\n        "}</span>{"\n      "}</span><button className={"[&]:justify-center"} style={{ padding: "2px", marginLeft: "2px", borderRadius: "9999px", background: "transparent", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", cursor: "pointer", transition: "background-color 0.2s", color: "white", display: "flex", alignItems: "center" } as CSSProperties} id="badge-close" aria-label="Close badge">{"\n        "}<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>{"\n      "}</button></div>
    </>
  );
}
