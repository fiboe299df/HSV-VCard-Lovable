import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/impressum.css?raw";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [{ title: "Impressum | HSV Visitenkarten" }] }),
  staticData: { importedDocument: { html: { "lang": "de" }, body: { "data-react-root": "true" } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="hsv-backdrop min-h-screen pb-16">
        <div className={"\x6dx-auto w-full \x70x-4 \x70y-6 \x73m:\x70x-6 [&]:max-w-[860px]"}>
          <header className={"mb-5 flex items-center gap-3 [&]:justify-between"}>
            <a className="flex items-center gap-3 [text-decoration:inherit]" href="/">
              <span className={"grid h-11 w-11 place-items-center rounded-full \x62g-white p-[2px] [overflow:hidden]"}>
                <span className={"inline-block relative h-full w-full rounded-full [&]:object-cover"}>
                  <span className="block relative w-full h-full [overflow:hidden]">
                    <img className={"w-full h-full inset-0 absolute [&]:object-cover"} loading="lazy" alt="HSV-Logo" srcSet="/site-assets/3e2c79d9b64226fd.avif 1x, /site-assets/9c675eb40bb0f648.avif 2x, /site-assets/2902a65b16dc965d.avif 3x" src="/site-assets/3e2c79d9b64226fd.avif" />
                  </span>
                </span>
              </span>
              <span className={"text-[15px] \x66ont-extrabold text-white"}>Lasse Böttcher · HSV</span>
            </a>
            <a className={"inline-flex items-center gap-1.5 rounded-xl \x62order \x62order-white/\x325 \x62g-white/\x310 \x70x-3.\x35 \x70y-2.\x35 text-[13px] \x66ont-semibold text-white transition \x68over:\x62g-white/\x320 [text-decoration:inherit]"} href="/"><svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>Zurück</a>
          </header>
          <main className={"card-surface p-5 \x73m:\x70-8 [@media_print]:break-inside-avoid"}>
            <h1 className={"text-[22px] \x66ont-extrabold [letter-spacing:-0.025em]"}>Impressum</h1>
            <div className={"mt-4 \x73pace-y-3 text-[14px] \x6ceading-relaxed \x74ext-[#\x326394b] [&\x5fa]:\x66ont-semibold [&\x5fa]:\x74ext-primary [&\x5fh2]:\x6dt-6 [&\x5fh2]:\x74ext-[\x316px] [&\x5fh2]:\x66ont-extrabold [&\x5fh2]:\x74ext-[#\x3082f5c] [&\x5fli]:\x6dl-5 [&\x5fli]:\x6cist-disc [&\x5fp]:\x6dt-2"}>
              <h2>Dienstanbieter</h2>
              <p>HSV Fußball AG &amp; Co. KGaA<br />Uwe-Seeler-Allee 9<br />22525 Hamburg</p>
              <p>Telefon: <a className="underline! [text-decoration:inherit] [text-underline-offset:2px]" href="tel:+494041551887">040 4155-1887</a><br />Telefax: 040 4155-1234<br />E-Mail: <a className="underline! [text-decoration:inherit] [text-underline-offset:2px]" href="mailto:info@hsv.de">info@hsv.de</a></p>
              <p><strong>Vorsitzender des Aufsichtsrates:</strong><br />Michael Papenfuß</p>
              <p><strong>Handelsregister Amtsgericht Hamburg:</strong><br />HRB 191603</p>
              <p><strong>USt-Id-Nr.:</strong><br />DE118717273</p>
              <h2>Komplementärin</h2>
              <p>HSV Fußball Management AG<br />Vorstand: Dr. Eric Huwer, Kathleen Krüger<br />Prokuristen: Daniel Nolte, Dr. Philipp Winter, Cornelius Göbel</p>
              <p><strong>Vertretungsberechtigte:</strong><br />Zwei Vorstandsmitglieder gemeinsam oder ein Vorstandsmitglied in Gemeinschaft mit einem Prokuristen oder zwei Prokuristen gemeinsam.</p>
              <p><strong>Handelsregister Amtsgericht Hamburg:</strong><br />HRB 188040</p>
              <p><strong>USt-Id-Nr.:</strong><br />DE449793445</p>
              <h2>Verantwortlich für den Inhalt (V.i.S.d.P.)</h2>
              <p>Christian Pletz – HSV Fußball AG &amp; Co. KGaA, Uwe-Seeler-Allee 9, 22525 Hamburg</p>
              <h2>Bilder</h2>
              <p>WITTERS GmbH Sportfotografie<br />Bilser Straße 57<br />22297 Hamburg</p>
              <h2>Datendienste</h2>
              <p>HEIM:SPIEL Medien GmbH &amp; Co. KG<br />Am Stadtgraben 48<br />48143 Münster<br /><a className="underline! [text-decoration:inherit] [text-underline-offset:2px]" href="https://www.heimspiel.de" rel="noopener noreferrer" target="_blank">www.heimspiel.de</a></p>
              <h2>Copyright</h2>
              <p>Alle Rechte vorbehalten. Insbesondere dürfen Nachdruck, Aufnahme in Online-Dienste und Internet sowie Vervielfältigung auf Datenträger – auch auszugsweise – nur nach vorheriger schriftlicher Zustimmung der HSV Fußball AG &amp; Co. KGaA erfolgen.</p>
              <h2>Alternative Streitbeilegung</h2>
              <p>Der HSV nimmt nicht an einem Streitbeilegungsverfahren vor der Verbraucherschlichtungsstelle teil (vgl. § 36 VSBG).</p>
            </div>
          </main>
          <div className={"mt-5 flex gap-4 text-[12.5px] \x66ont-semibold \x74ext-white/\x375 [&]:justify-center"}>
            <a className={"\x68over:\x74ext-white underline! [text-decoration:inherit] [text-underline-offset:4px]"} href="#">Impressum</a>
            <a className={"\x68over:\x74ext-white underline! [text-decoration:inherit] [text-underline-offset:4px]"} href="/datenschutz">Datenschutz</a>
            <a className={"\x68over:\x74ext-white underline! [text-decoration:inherit] [text-underline-offset:4px]"} href="/">Visitenkarte</a>
          </div>
        </div>
      </div>
      <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" />
      <div style={{ position: "fixed", zIndex: "999999", bottom: "16px", right: "16px", display: "flex", alignItems: "center", gap: "8px", backgroundColor: "rgb(0, 0, 0)", color: "rgb(255, 255, 255)", padding: "8px 12px", borderRadius: "6px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px", cursor: "pointer", transition: "box-shadow 0.2s", border: "1px solid rgb(38, 38, 38)", fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontSize: "14px" }} id="base44-edit-badge" dir="ltr"><img style={{ width: "20px", height: "20px" }} src="/site-assets/13404f20d3476d50.png" alt="base44" /><span className="whitespace-nowrap" style={{ fontSize: "12px" }}>{"\n        "}<span id="badge-content">{"\n          "}<div className={"[&]:justify-center"} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px" }}><span>Edit with </span><span style={{ marginBottom: "2px" }}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAABECAMAAAB+vJpyAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAEVQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////Up1zwgAAABZ0Uk5TABAgMEBQX2BvcH+Aj5CfoK+wv8/f741pbhwAAAVHSURBVHja7ZvtbuwoDECNQ5ZNSZgsAd7/Ufeq6i0Ex3Y6I1WJNOdv3RlyGvAHKrx58+bNmzdvfg0v4OwAN8P5BnH16FsM/KUoxNnCffi3tDgQCKUFqxCd5OAmYCFCdHVUiE5CuAXptBDMohCdD7gBczktJBVVyP2NuNLhBHWaEB0LFwcTESKoe11IMnBtYulxvDpdiI6HS/NRCE5UpwvJqaX05ItnXIoT1elCPOwY3HqfU8QkTQhVpwtRNtsE1yUUTQhVpwtR6pdwi5I9KUJCeUUI+FKJcFUwVx+eCOHULVETomy4dIOSPSMRwqqDZ4QAEXLtjDuBLCQ1Dp4TkoQtg25ev/Jziqu30EAD81fcZIHFjDVwdginsO0xR4Rw6jw8JySXb/6DFvORSs/qgEIDU7CHNlzsAyf8UcmeUBYytn/d54QYJu1iODk7MXMuB8SBHneHgQF/kHFHIEJYdU8KsaUyCIuvzAYabBbjKsNWTimWd4EsZO1+pAqR9ad2EQKbOReYEFTD+uQB2wUSIZy6BX4shD6Q0x6THr5O6Z9PfmI4V7IjEcKqM88JMfNh0h2KwlSTvkjQfOjvyEyWT4Rw6nQhwba4OZaGjMz4bQuLDzHvYs1BlZw+42i7SA3nLcat7Bj1Sc8KVAirThWiM7a5q/J9oeESedewlT0cxcWDdusrJaNLRLGccRkhVF2E14Vke9wdWag8+u3lDncjbqVi+gFnsjVwUadTkTw8FUJLdnxdSESoZG6ZW/f5ayuoYvJ+ydhlqIonr4iQNmQhpAc+LUQtjpCdoTk2zQdo8XujgZ/bRuKeTRusEKruJSFUiWWbG9N968YEDumbpeu3+N40itMrBFGIJerOC9EzH35j2M44dN9nz7ZmfG1phJrRAyuEqntJCNneEtj1ges+dzAsjLY+ozl+0hOBF0LV6UJeN4LjFLbc59OptOQ4j4OYKbLoeOEnPcgJEdXpQrawY41Zr6CNneaYS0+sm0Gz0k7/KN1Lx6QNUQgWRt0TvYx9lBZLhzlCO1O/kFqx5B1QSVzGDSAKMaw6XYh265daG1Hv72xhSQGBjdGFjCRtsEJmou5pIbSutqRbF4WA1/OWLWdhGzVRiCPqXhBCVrzU6lsVohvZ8FkhWE7hyAo0BCGV3L+2Qy5nhYBLYt66pZC1VAzrI62LOxAC+BD0zbcU8igV/D5mK3kLkzXwh+N8b9yaCoMFvLmQbroVlxHhCyqkMox+3QplAUN+ieOSWwb3N1cWGtRnM3Z6dFZy+3npJkJSqRgYSc6R+2Cl2MPWN95CiN3/wsKvP+yFYMWwxZ6FSVoAVsxVhHQz0JV9C3AfCCv7Lk3MqZqN8JH2GkJM2J+BEFkhWyek2Rob+5x2Vy/O/IwwQwvyLHshBnmaFVv8RBNiPnLf3a1ctx5KJ2Ri20K7ux4d2QuY4dRllVS6S+ile/Q7wpoO+qsHc/m9kUrV0GtL6q5uSmrkn0yU/pqQ83tyOlr9MOeD0j0eX1mbWZib1EAbySzmakISuWXLq3duCunMgGibLP5hnDO5L166cUnwYe0M41WE0Nc+ChFkQKSQajcvM8H1hORBm+gkR+8oZbBWJiIeriOEHosLa8xWIcKDkgWrgR6uJ2Qx9VDcGB9AhIgPmh1UzEOKu5YQ2sUtzPUvFQLgtftibZS0IlxLSI6TASCLp8aOhQA+EqtYVZKDBfhdIVFgDd4NBo5wTV5Mi4VPhviXuWtwt04xwiF2aQNTcAZ+jIvfaDKXGmrgdYZx8t670ZyMdv4Pk7MIEsaO02fcYN7/Zf7mzfX5H+WZeZXgxfH6AAAAAElFTkSuQmCC" alt="Base44" height="18" width="56" /></span></div>{"\n        "}</span>{"\n      "}</span><button className={"[&]:justify-center"} style={{ padding: "2px", marginLeft: "2px", borderRadius: "9999px", background: "transparent", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", cursor: "pointer", transition: "background-color 0.2s", color: "white", display: "flex", alignItems: "center" } as CSSProperties} id="badge-close" aria-label="Close badge">{"\n        "}<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>{"\n      "}</button></div>
    </>
  );
}
