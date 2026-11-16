import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Lasse Böttcher | HSV" }] }),
  staticData: { importedDocument: { html: { "lang": "de" }, body: { "data-react-root": "true", "data-site-import-popup-incomplete": "limit" } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div>
        <div className={"hsv-backdrop min-h-screen pb-28 \x73m:\x70b-10"}>
          <div className={"\x6dx-auto w-full \x70x-3 \x73m:\x70x-6 [&]:max-w-[1160px]"}>
            <ImportedHeader />
            <ImportedNavSchnellzugriff />
            <main className="[scroll-margin-top:6rem]" id="kartenkopf">
              <ImportedSectionPersNlichGemeinsamHSV />
              <div className={"mt-5 grid gap-4 \x6cg:\x69tems-start [@media(width_>=_1024px)]:grid-cols-[minmax(0px,1.45fr)_minmax(282px,0.75fr)]"}>
                <div className="grid gap-4">
                  <ImportedSectionLasseBTtcher />
                  <section className={"card-surface p-5 \x73m:\x70-7 [scroll-margin-top:8rem] [@media_print]:break-inside-avoid"} id="ueber-mich">
                    <h2 className={"text-[17px] \x66ont-extrabold [letter-spacing:-0.025em]"}>Über mich</h2>
                    <p className={"mt-3 text-[14.5px] \x6ceading-relaxed text-muted-foreground"}>Mit 27 Jahren jung bin ich ein engagierter und international erfahrener Experte im Bereich Player Care &amp; Sportadministration mit umfassender Management-Praxis in der Bundesliga und Premier League. Ausgeprägte Kompetenzen in der Spielerbetreuung, Transfer-Abwicklung (TMS) sowie in der nahtlosen Koordination von Signing-Prozessen und Berater-Netzwerken. Fundiertes betriebswirtschaftliches Know-how durch das First Class Honours-Studium im Bereich Football Business &amp; Marketing am UCFB Wembley.</p>
                  </section>
                  <ImportedSectionKontaktStandort />
                  <ImportedSectionWerdegang />
                  <section className={"card-surface p-5 \x73m:\x70-7 [@media_print]:break-inside-avoid"}>
                    <h2 className={"flex items-center gap-2 text-[17px] \x66ont-extrabold [letter-spacing:-0.025em] [scroll-margin-top:8rem]"} id="auszeichnungen"><svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" /></svg>Weiterbildungen &amp; Auszeichnungen</h2>
                    <ul className="mt-3.5 grid gap-2">
                      <li className={"rounded-xl \x62order \x62order-border \x62g-secondary \x70x-3.\x35 \x70y-2.\x35"}>
                        <strong className={"block text-[13.5px] \x66ont-bold text-foreground"}>2018</strong>
                        <span className="text-[12.5px] text-muted-foreground">Stipendium</span>
                      </li>
                      <li className={"rounded-xl \x62order \x62order-border \x62g-secondary \x70x-3.\x35 \x70y-2.\x35"}>
                        <strong className={"block text-[13.5px] \x66ont-bold text-foreground"}>FA Talent Identification Level 1</strong>
                        <span className="text-[12.5px] text-muted-foreground">Weiterbildung / Zertifizierung</span>
                      </li>
                      <li className={"rounded-xl \x62order \x62order-border \x62g-secondary \x70x-3.\x35 \x70y-2.\x35"}>
                        <strong className={"block text-[13.5px] \x66ont-bold text-foreground"}>Großes Latinum</strong>
                        <span className="text-[12.5px] text-muted-foreground">Qualifikation</span>
                      </li>
                    </ul>
                  </section>
                  <ImportedSectionSprachen />
                  <section className={"card-surface p-5 \x73m:\x70-7 [scroll-margin-top:8rem] [@media_print]:break-inside-avoid"} id="interessen">
                    <h2 className={"flex items-center gap-2 text-[17px] \x66ont-extrabold [letter-spacing:-0.025em] [scroll-margin-top:8rem]"}><svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>Interessen &amp; Hobbys</h2>
                    <div className={"mt-3.5 flex gap-2 [&]:flex-wrap"}>
                      <span className={"rounded-full \x62order \x62order-border \x62g-secondary \x70x-3.\x35 \x70y-1.\x35 text-[13px] \x66ont-semibold text-primary"}>Fußballmanagement</span>
                      <span className={"rounded-full \x62order \x62order-border \x62g-secondary \x70x-3.\x35 \x70y-1.\x35 text-[13px] \x66ont-semibold text-primary"}>Fußball</span>
                    </div>
                    <a className={"mt-4 flex h-11 items-center rounded-xl \x62g-primary text-[13.5px] \x66ont-bold text-primary-foreground transition \x68over:\x62g-[#\x3073f7d] [&]:justify-center [text-decoration:inherit]"} href="https://www.hsv.de/karriere" rel="noopener noreferrer" target="_blank">Zum HSV-Karriereportal ↗</a>
                  </section>
                  <ImportedSectionHSVTabelle />
                </div>
                <ImportedAsideSpieleTickets />
              </div>
            </main>
            <footer className={"mt-10 flex items-center gap-3 pb-6 [&]:flex-col [&]:text-center"}>
              <span className={"grid h-12 w-24 place-items-center rounded-md \x62order-2 \x62order-white/\x385 \x62g-white \x70x-2 \x70y-1 [overflow:hidden]"}>
                <span className={"inline-block relative h-full w-full [&]:object-contain"}>
                  <span className="block relative w-full h-full [overflow:hidden]">
                    <img className={"w-full h-full inset-0 absolute [&]:object-contain"} loading="lazy" alt="HSV" srcSet="/site-assets/c68b1136d89a5e97.avif 1x, /site-assets/3967de9c2e8592c7.avif 2x, /site-assets/c552ca13e1a30c47.avif 3x" src="/site-assets/c68b1136d89a5e97.avif" />
                  </span>
                </span>
              </span>
              <p className={"text-[13px] \x66ont-medium \x74ext-white/\x380"}>HSV · Lasse Böttcher</p>
              <div className={"flex items-center gap-x-4 gap-y-1 text-[12px] \x66ont-semibold \x74ext-white/\x375 [&]:flex-wrap [&]:justify-center"}>
                <a className={"\x68over:\x74ext-white underline! [text-decoration:inherit] [text-underline-offset:4px]"} href="/impressum">Impressum</a>
                <a className={"\x68over:\x74ext-white underline! [text-decoration:inherit] [text-underline-offset:4px]"} href="/datenschutz">Datenschutz</a>
                <a className={"\x68over:\x74ext-white underline! [text-decoration:inherit] [text-underline-offset:4px]"} href="/privat">Privater Bereich</a>
              </div>
            </footer>
          </div>
        </div>
        <div className={"no-print fixed \x69nset-x-3 bottom-3 z-40 grid gap-2 rounded-2xl \x62order \x62order-border \x62g-card p-2 \x73hadow-[\x30_12px_32px_rgba(\x30,\x329,\x358,\x30.\x335)] \x73m:\x68idden [grid-template-columns:repeat(2,minmax(0px,1fr))]"}>
          <button className={"flex h-11 items-center gap-2 rounded-xl \x62g-primary text-[13px] \x66ont-bold text-primary-foreground [&]:justify-center"} type="button"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>Kontakt speichern (.vcf)</button>
          <button className={"flex h-11 items-center gap-2 rounded-xl \x62order \x62order-border \x62g-secondary text-[13px] \x66ont-bold text-primary [&]:justify-center"} type="button"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" /></svg>Wallet</button>
        </div>
      </div>
      <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" />
      <div style={{ position: "fixed", zIndex: "999999", bottom: "16px", right: "16px", display: "flex", alignItems: "center", gap: "8px", backgroundColor: "rgb(0, 0, 0)", color: "rgb(255, 255, 255)", padding: "8px 12px", borderRadius: "6px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px", cursor: "pointer", transition: "box-shadow 0.2s", border: "1px solid rgb(38, 38, 38)", fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontSize: "14px" }} id="base44-edit-badge" dir="ltr"><img style={{ width: "20px", height: "20px" }} src="/site-assets/13404f20d3476d50.png" alt="base44" /><span className={"[&]:whitespace-nowrap"} style={{ fontSize: "12px" }}>{"\n        "}<span id="badge-content">{"\n          "}<div className={"[&]:justify-center"} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px" }}><span>Edit with </span><span style={{ marginBottom: "2px" }}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAABECAMAAAB+vJpyAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAEVQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////Up1zwgAAABZ0Uk5TABAgMEBQX2BvcH+Aj5CfoK+wv8/f741pbhwAAAVHSURBVHja7ZvtbuwoDECNQ5ZNSZgsAd7/Ufeq6i0Ex3Y6I1WJNOdv3RlyGvAHKrx58+bNmzdvfg0v4OwAN8P5BnH16FsM/KUoxNnCffi3tDgQCKUFqxCd5OAmYCFCdHVUiE5CuAXptBDMohCdD7gBczktJBVVyP2NuNLhBHWaEB0LFwcTESKoe11IMnBtYulxvDpdiI6HS/NRCE5UpwvJqaX05ItnXIoT1elCPOwY3HqfU8QkTQhVpwtRNtsE1yUUTQhVpwtR6pdwi5I9KUJCeUUI+FKJcFUwVx+eCOHULVETomy4dIOSPSMRwqqDZ4QAEXLtjDuBLCQ1Dp4TkoQtg25ev/Jziqu30EAD81fcZIHFjDVwdginsO0xR4Rw6jw8JySXb/6DFvORSs/qgEIDU7CHNlzsAyf8UcmeUBYytn/d54QYJu1iODk7MXMuB8SBHneHgQF/kHFHIEJYdU8KsaUyCIuvzAYabBbjKsNWTimWd4EsZO1+pAqR9ad2EQKbOReYEFTD+uQB2wUSIZy6BX4shD6Q0x6THr5O6Z9PfmI4V7IjEcKqM88JMfNh0h2KwlSTvkjQfOjvyEyWT4Rw6nQhwba4OZaGjMz4bQuLDzHvYs1BlZw+42i7SA3nLcat7Bj1Sc8KVAirThWiM7a5q/J9oeESedewlT0cxcWDdusrJaNLRLGccRkhVF2E14Vke9wdWag8+u3lDncjbqVi+gFnsjVwUadTkTw8FUJLdnxdSESoZG6ZW/f5ayuoYvJ+ydhlqIonr4iQNmQhpAc+LUQtjpCdoTk2zQdo8XujgZ/bRuKeTRusEKruJSFUiWWbG9N968YEDumbpeu3+N40itMrBFGIJerOC9EzH35j2M44dN9nz7ZmfG1phJrRAyuEqntJCNneEtj1ges+dzAsjLY+ozl+0hOBF0LV6UJeN4LjFLbc59OptOQ4j4OYKbLoeOEnPcgJEdXpQrawY41Zr6CNneaYS0+sm0Gz0k7/KN1Lx6QNUQgWRt0TvYx9lBZLhzlCO1O/kFqx5B1QSVzGDSAKMaw6XYh265daG1Hv72xhSQGBjdGFjCRtsEJmou5pIbSutqRbF4WA1/OWLWdhGzVRiCPqXhBCVrzU6lsVohvZ8FkhWE7hyAo0BCGV3L+2Qy5nhYBLYt66pZC1VAzrI62LOxAC+BD0zbcU8igV/D5mK3kLkzXwh+N8b9yaCoMFvLmQbroVlxHhCyqkMox+3QplAUN+ieOSWwb3N1cWGtRnM3Z6dFZy+3npJkJSqRgYSc6R+2Cl2MPWN95CiN3/wsKvP+yFYMWwxZ6FSVoAVsxVhHQz0JV9C3AfCCv7Lk3MqZqN8JH2GkJM2J+BEFkhWyek2Rob+5x2Vy/O/IwwQwvyLHshBnmaFVv8RBNiPnLf3a1ctx5KJ2Ri20K7ux4d2QuY4dRllVS6S+ile/Q7wpoO+qsHc/m9kUrV0GtL6q5uSmrkn0yU/pqQ83tyOlr9MOeD0j0eX1mbWZib1EAbySzmakISuWXLq3duCunMgGibLP5hnDO5L166cUnwYe0M41WE0Nc+ChFkQKSQajcvM8H1hORBm+gkR+8oZbBWJiIeriOEHosLa8xWIcKDkgWrgR6uJ2Qx9VDcGB9AhIgPmh1UzEOKu5YQ2sUtzPUvFQLgtftibZS0IlxLSI6TASCLp8aOhQA+EqtYVZKDBfhdIVFgDd4NBo5wTV5Mi4VPhviXuWtwt04xwiF2aQNTcAZ+jIvfaDKXGmrgdYZx8t670ZyMdv4Pk7MIEsaO02fcYN7/Zf7mzfX5H+WZeZXgxfH6AAAAAElFTkSuQmCC" alt="Base44" height="18" width="56" /></span></div>{"\n        "}</span>{"\n      "}</span><button className={"[&]:justify-center"} style={{ padding: "2px", marginLeft: "2px", borderRadius: "9999px", background: "transparent", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", cursor: "pointer", transition: "background-color 0.2s", color: "white", display: "flex", alignItems: "center" } as CSSProperties} id="badge-close" aria-label="Close badge">{"\n        "}<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>{"\n      "}</button></div>
    </>
  );
}

function ImportedHeader() {
  return (
    <header className={"flex items-center gap-3 \x70y-4 [&]:flex-wrap [&]:justify-between"}>
      <a className="flex items-center gap-3 [min-width:0px] [text-decoration:inherit]" href="https://www.hsv.de/" rel="noopener noreferrer" target="_blank">
        <span className={"grid h-12 w-12 shrink-0 place-items-center rounded-full \x62g-white p-[2px] \x72ing-2 \x72ing-[#\x30a4f9c]/\x350 [overflow:hidden]"}>
          <span className={"inline-block relative h-full w-full rounded-full [&]:object-cover"}>
            <span className="block relative w-full h-full [overflow:hidden]">
              <img className={"w-full h-full inset-0 absolute [&]:object-cover"} loading="lazy" alt="HSV-Logo" srcSet="/site-assets/6911ac5b1c3a27c9.avif 1x, /site-assets/5920a1e65d3c8ab1.avif 2x, /site-assets/1fce47dda4a5766b.avif 3x" src="/site-assets/6911ac5b1c3a27c9.avif" />
            </span>
          </span>
        </span>
        <span className="[min-width:0px]">
          <span className={"block text-[15px] \x66ont-extrabold text-white text-ellipsis [&]:whitespace-nowrap [letter-spacing:-0.025em] [overflow:hidden]"}>Lasse{" "}Böttcher</span>
          <span className={"block text-[10px] \x66ont-bold \x74ext-[#\x639e2f6] text-ellipsis [&]:uppercase [&]:whitespace-nowrap [letter-spacing:0.14em] [overflow:hidden]"}>Player Care &amp; Administration Sport</span>
        </span>
      </a>
      <div className={"flex items-center gap-2 [&]:flex-wrap"}>
        <div className={"no-print flex w-fit items-center gap-0.5 rounded-full \x62order \x62order-white/\x325 \x62g-white/\x310 p-1 \x62ackdrop-blur"}>
          <button className={"grid h-8 w-8 place-items-center rounded-full text-white transition \x68over:\x62g-white/\x320"} type="button" aria-label="Dunkelmodus" title="Dunkelmodus">
            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </button>
          <span className={"h-4 w-px \x62g-white/\x325"} aria-hidden="true" />
          <button className={"flex h-8 items-center gap-1.5 rounded-full \x70x-2 text-[12.5px] \x66ont-bold text-white transition \x68over:\x62g-white/\x320"} type="button" aria-label="Sprache" id="radix-_R_dh5aq_" aria-haspopup="menu" aria-expanded="false" data-state="closed">
            <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <img className={"h-[11px] w-4 rounded-[2px] \x72ing-1 \x72ing-white/\x340 [&]:object-cover"} src="/site-assets/8e8a747c2df1e514.png" alt="" />
            <span>DE</span>
            <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
        <a className={"no-print inline-flex w-fit items-center gap-1.5 rounded-full \x62order \x62order-white/\x325 \x62g-white/\x310 \x70x-3.\x35 \x70y-2.\x35 text-[13px] \x66ont-semibold text-white transition \x68over:\x62g-white/\x320 [text-decoration:inherit]"} href="https://www.hsv.de/" rel="noopener noreferrer" target="_blank">Home | HSV<svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg></a>
      </div>
    </header>
  );
}

function ImportedNavSchnellzugriff() {
  return (
    <nav className={"no-print sticky top-2 z-30 \x2dmx-1 mb-4 flex w-fit gap-2 overflow-x-auto rounded-2xl \x62order \x62order-white/\x315 \x62g-white/\x310 \x70x-2 \x70y-2 \x62ackdrop-blur-md \x73m:\x6fverflow-visible [max-width:100%] [&]:[scrollbar-width:none] [@media(width_>=_640px)]:flex-wrap"} aria-label="Schnellzugriff">
      <a className={"flex shrink-0 items-center gap-2 rounded-full \x62order \x62order-white/\x320 \x62g-white/\x310 \x70x-3.\x35 \x70y-2 text-[13px] \x66ont-semibold text-white transition \x68over:\x62g-white/\x320 [&]:whitespace-nowrap [text-decoration:inherit]"} href="#kontakt"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>Kontakt</a>
      <a className={"flex shrink-0 items-center gap-2 rounded-full \x62order \x62order-white/\x320 \x62g-white/\x310 \x70x-3.\x35 \x70y-2 text-[13px] \x66ont-semibold text-white transition \x68over:\x62g-white/\x320 [&]:whitespace-nowrap [text-decoration:inherit]"} href="#ueber-mich"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>Über mich</a>
      <a className={"flex shrink-0 items-center gap-2 rounded-full \x62order \x62order-white/\x320 \x62g-white/\x310 \x70x-3.\x35 \x70y-2 text-[13px] \x66ont-semibold text-white transition \x68over:\x62g-white/\x320 [&]:whitespace-nowrap [text-decoration:inherit]"} href="#werdegang"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>Werdegang</a>
      <a className={"flex shrink-0 items-center gap-2 rounded-full \x62order \x62order-white/\x320 \x62g-white/\x310 \x70x-3.\x35 \x70y-2 text-[13px] \x66ont-semibold text-white transition \x68over:\x62g-white/\x320 [&]:whitespace-nowrap [text-decoration:inherit]"} href="#sprachen"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" /></svg>Sprachen</a>
      <a className={"flex shrink-0 items-center gap-2 rounded-full \x62order \x62order-white/\x320 \x62g-white/\x310 \x70x-3.\x35 \x70y-2 text-[13px] \x66ont-semibold text-white transition \x68over:\x62g-white/\x320 [&]:whitespace-nowrap [text-decoration:inherit]"} href="#spiele"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>Spiele</a>
      <a className={"flex shrink-0 items-center gap-2 rounded-full \x62order \x62order-white/\x320 \x62g-white/\x310 \x70x-3.\x35 \x70y-2 text-[13px] \x66ont-semibold text-white transition \x68over:\x62g-white/\x320 [&]:whitespace-nowrap [text-decoration:inherit]"} href="#tabelle"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>Tabelle</a>
      <button className={"flex shrink-0 items-center gap-2 rounded-full \x62order \x62order-white/\x320 \x62g-white/\x310 \x70x-3.\x35 \x70y-2 text-[13px] \x66ont-semibold text-white transition \x68over:\x62g-white/\x320 [&]:whitespace-nowrap"} type="button"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" /></svg>Wallet</button>
      <button className={"flex shrink-0 items-center gap-2 rounded-full \x62order \x62order-white/\x320 \x62g-white/\x310 \x70x-3.\x35 \x70y-2 text-[13px] \x66ont-semibold text-white transition \x68over:\x62g-white/\x320 [&]:whitespace-nowrap"} type="button"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect width="5" height="5" x="3" y="3" rx="1" /><rect width="5" height="5" x="16" y="3" rx="1" /><rect width="5" height="5" x="3" y="16" rx="1" /><path d="M21 16h-3a2 2 0 0 0-2 2v3" /><path d="M21 21v.01" /><path d="M12 7v3a2 2 0 0 1-2 2H7" /><path d="M3 12h.01" /><path d="M12 3h.01" /><path d="M12 16v.01" /><path d="M16 12h1" /><path d="M21 12v.01" /><path d="M12 21v-1" /></svg>QR-Code</button>
    </nav>
  );
}

function ImportedSectionPersNlichGemeinsamHSV() {
  return (
    <section className={"rise relative rounded-[28px] \x62order \x62order-white/\x315 \x73hadow-[\x30_24px_60px_rgba(\x32,\x318,\x340,\x30.\x335)] [overflow:hidden]"} style={{ transform: "translateY(0px)", opacity: "1" }} aria-labelledby="hero-title">
      <span className={"inline-block absolute inset-0 h-full w-full [&]:object-cover"}>
        <span className="block relative w-full h-full [overflow:hidden]">
          <img className={"w-full h-full inset-0 absolute [&]:object-cover"} loading="lazy" alt="" aria-hidden="true" srcSet="/site-assets/5e0ce170f01b05ee.avif 1x, /site-assets/e40c872fd13548d8.avif 2x, /site-assets/e86ae598d3e5cec6.avif 3x" src="/site-assets/5e0ce170f01b05ee.avif" />
        </span>
      </span>
      <div className={"absolute inset-0 \x62g-gradient-to-r \x66rom-[#\x304162c]/\x395 \x76ia-[#\x306284c]/\x388 \x74o-[#\x30a4f9c]/\x355"} />
      <div className={"relative grid gap-7 p-6 \x73m:\x70-9 \x6cg:\x69tems-center \x6cg:\x70-12 [@media(width_>=_1024px)]:grid-cols-[1.15fr_0.85fr]"}>
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className={"grid h-14 w-14 place-items-center rounded-full \x62g-white p-[2px] \x72ing-2 \x72ing-[#\x30a4f9c] [overflow:hidden]"}>
              <span className={"inline-block relative h-full w-full rounded-full [&]:object-cover"}>
                <span className="block relative w-full h-full [overflow:hidden]">
                  <img className={"w-full h-full inset-0 absolute [&]:object-cover"} loading="lazy" alt="HSV-Wappen" srcSet="/site-assets/db505a092aa5ee2e.avif 1x, /site-assets/995fdd11e798bedd.avif 2x, /site-assets/411980d2b899338f.avif 3x" src="/site-assets/db505a092aa5ee2e.avif" />
                </span>
              </span>
            </span>
            <div>
              <strong className={"block text-[17px] \x66ont-extrabold text-white [letter-spacing:0.14em]"}>HSV</strong>
              <span className={"block text-[10px] \x66ont-bold \x74ext-[#\x639e2f6] [&]:uppercase [letter-spacing:0.16em]"}>Digitale Visitenkarte</span>
            </div>
          </div>
          <p className={"eyebrow [&]:uppercase [letter-spacing:0.16em]"}>Hamburger SV</p>
          <h1 className={"mt-2 text-[clamp(2rem,6vw,3.4rem)] \x66ont-extrabold \x6ceading-[\x31.\x302] text-white [&]:max-w-[16ch] [letter-spacing:-0.045em]"} id="hero-title">Persönlich. Gemeinsam. HSV.</h1>
          <p className={"mt-4 text-[15px] \x6ceading-relaxed \x74ext-white/\x385 [&]:max-w-[46ch]"}>Lasse Böttcher · Player Care &amp; Administration Sport</p>
        </div>
        <div className={"\x6dx-auto w-full rounded-[24px] \x62order-[\x35px] \x62order-white/\x385 \x62g-[#\x659f0f8] \x73hadow-[\x30_14px_40px_rgba(\x30,\x30,\x30,\x30.\x33)] \x6cg:\x6dx-0 [&]:max-w-[330px] [overflow:hidden] [@media(width_>=_1024px)]:justify-self-end"}>
          <div className={"[&]:aspect-[4/3]"}>
            <span className={"inline-block relative h-full w-full [&]:object-cover"}>
              <span className="block relative w-full h-full [overflow:hidden]">
                <img className={"w-full h-full inset-0 absolute [&]:object-cover"} loading="lazy" alt="Lasse Böttcher vor dem HSV-Wappen" srcSet="/site-assets/a6421ef9dd6f111b.avif 1x, /site-assets/41a468c51512017f.avif 2x, /site-assets/0cab3996c6c6b428.avif 3x" src="/site-assets/a6421ef9dd6f111b.avif" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionLasseBTtcher() {
  return (
    <section className={"card-surface p-5 \x73m:\x70-7 [@media_print]:break-inside-avoid"}>
      <div className={"flex items-center gap-4 \x62order-b \x62order-border pb-5"}>
        <div className={"h-[86px] w-[86px] shrink-0 rounded-full \x72ing-4 \x72ing-secondary [overflow:hidden]"}>
          <span className={"inline-block relative h-full w-full [&]:object-cover"}>
            <span className="block relative w-full h-full [overflow:hidden]">
              <img className={"w-full h-full inset-0 absolute [&]:object-cover"} loading="lazy" alt="Porträt von Lasse Böttcher" srcSet="/site-assets/8773f8933449b34f.avif 1x, /site-assets/31225d8850b11923.avif 2x, /site-assets/8600f7b5f8e36416.avif 3x" src="/site-assets/8773f8933449b34f.avif" />
            </span>
          </span>
        </div>
        <div className="[min-width:0px]">
          <h2 className={"text-[22px] \x66ont-extrabold \x6ceading-tight [letter-spacing:-0.03em]"}>Lasse Böttcher</h2>
          <p className={"mt-0.5 text-[14px] \x66ont-semibold text-primary"}>Player Care &amp; Administration Sport</p>
          <p className={"mt-1 text-[13px] \x66ont-medium text-muted-foreground"}>HSV Fußball AG</p>
        </div>
      </div>
      <div className="mt-5 grid gap-2 [grid-template-columns:repeat(4,minmax(0px,1fr))]">
        <a className={"flex items-center gap-2 rounded-2xl \x62order \x62order-border \x62g-secondary \x70x-1 \x70y-3 text-[11px] \x66ont-semibold text-primary transition \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-primary \x68over:\x62g-primary \x68over:\x74ext-white [&]:flex-col [&]:justify-center [&]:min-h-[76px] [text-decoration:inherit]"} href="tel:+491604339168"><svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>Anrufen</a>
        <a className={"flex items-center gap-2 rounded-2xl \x62order \x62order-border \x62g-secondary \x70x-1 \x70y-3 text-[11px] \x66ont-semibold text-primary transition \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-primary \x68over:\x62g-primary \x68over:\x74ext-white [&]:flex-col [&]:justify-center [&]:min-h-[76px] [text-decoration:inherit]"} href="mailto:Lasse.boettcher@hsv.de"><svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>E-Mail</a>
        <a className={"flex items-center gap-2 rounded-2xl \x62order \x62order-border \x62g-secondary \x70x-1 \x70y-3 text-[11px] \x66ont-semibold text-primary transition \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-primary \x68over:\x62g-primary \x68over:\x74ext-white [&]:flex-col [&]:justify-center [&]:min-h-[76px] [text-decoration:inherit]"} href="https://wa.me/491604339168" rel="noopener noreferrer" target="_blank"><svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>WhatsApp</a>
        <button className={"flex items-center gap-2 rounded-2xl \x62order \x62order-border \x62g-secondary \x70x-1 \x70y-3 text-[11px] \x66ont-semibold text-primary transition \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62order-primary \x68over:\x62g-primary \x68over:\x74ext-white [&]:flex-col [&]:justify-center [&]:min-h-[76px]"} type="button"><svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>Teilen</button>
      </div>
      <button className={"mt-3 flex w-full items-center gap-2 rounded-2xl \x62order \x62order-border \x62g-card \x70x-5 \x70y-3.\x35 text-[15px] \x66ont-bold text-foreground \x73hadow-[\x30_10px_24px_rgba(\x33,\x318,\x338,\x30.\x314)] transition \x68over:\x62g-primary \x68over:\x74ext-white \x68over:\x62order-primary [&]:justify-center"} type="button"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>Kontakt speichern (.vcf)</button>
      <div className="mt-3 grid gap-2 [grid-template-columns:repeat(3,minmax(0px,1fr))]">
        <a className={"flex h-12 items-center gap-2 rounded-xl text-[12px] \x66ont-bold text-white \x73hadow-sm transition \x68over:\x2dtranslate-y-0.\x35 \x62g-[#\x30a66c2] [&]:justify-center [text-decoration:inherit]"} href="https://de.linkedin.com/in/lasse-b%C3%B6ttcher-954938154" rel="noopener noreferrer" target="_blank"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>LinkedIn</a>
        <a className={"flex h-12 items-center gap-2 rounded-xl text-[12px] \x66ont-bold text-white \x73hadow-sm transition \x68over:\x2dtranslate-y-0.\x35 \x62g-[#\x3026466] [&]:justify-center [text-decoration:inherit]"} href="https://www.xing.com/profile/Lasse_Boettcher" rel="noopener noreferrer" target="_blank"><span className={"text-[13px] \x66ont-extrabold [letter-spacing:-0.025em]"}>XING</span>XING</a>
        <a className={"flex h-12 items-center gap-2 rounded-xl text-[12px] \x66ont-bold text-white \x73hadow-sm transition \x68over:\x2dtranslate-y-0.\x35 \x62g-gradient-to-tr \x66rom-[#\x669ce34] \x76ia-[#\x65e2a7b] \x74o-[#\x36228d7] [&]:justify-center [text-decoration:inherit]"} href="https://www.instagram.com/laboe1999" rel="noopener noreferrer" target="_blank"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>Instagram</a>
      </div>
    </section>
  );
}

function ImportedSectionKontaktStandort() {
  return (
    <section className={"card-surface p-5 \x73m:\x70-7 [scroll-margin-top:8rem] [@media_print]:break-inside-avoid"} id="kontakt">
      <h2 className={"text-[17px] \x66ont-extrabold [letter-spacing:-0.025em]"}>Kontakt &amp; Standort</h2>
      <div className={"mt-4 \x73pace-y-2.\x35"}>
        <a className={"flex items-center gap-3 rounded-2xl \x62order \x62order-border \x62g-secondary \x70x-3.\x35 \x70y-3 transition \x68over:\x62order-primary \x68over:\x62g-accent [&]:min-h-[58px] [text-decoration:inherit]"} href="tel:+491604339168">
          <span className={"grid h-11 w-11 shrink-0 place-items-center rounded-xl \x62g-gradient-to-br \x66rom-[#\x30a4f9c] \x74o-[#\x32874c6] text-white"}>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          <span className="[min-width:0px]">
            <strong className={"block text-[13px] \x66ont-bold text-primary [&]:uppercase [letter-spacing:0.025em]"}>Telefon</strong>
            <span className={"block text-[14px] \x66ont-semibold text-foreground wrap-break-word"}>+49 160 4339168</span>
          </span>
        </a>
        <a className={"flex items-center gap-3 rounded-2xl \x62order \x62order-border \x62g-secondary \x70x-3.\x35 \x70y-3 transition \x68over:\x62order-primary \x68over:\x62g-accent [&]:min-h-[58px] [text-decoration:inherit]"} href="mailto:Lasse.boettcher@hsv.de">
          <span className={"grid h-11 w-11 shrink-0 place-items-center rounded-xl \x62g-gradient-to-br \x66rom-[#\x30a4f9c] \x74o-[#\x32874c6] text-white"}>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>
          <span className="[min-width:0px]">
            <strong className={"block text-[13px] \x66ont-bold text-primary [&]:uppercase [letter-spacing:0.025em]"}>E-Mail</strong>
            <span className={"block text-[14px] \x66ont-semibold text-foreground wrap-break-word"}>Lasse.boettcher@hsv.de</span>
          </span>
        </a>
        <div className={"rounded-2xl \x62order \x62order-border \x62g-secondary \x70x-3.\x35 \x70y-3"}>
          <div className="flex items-center gap-3">
            <span className={"grid h-11 w-11 shrink-0 place-items-center rounded-xl \x62g-gradient-to-br \x66rom-[#\x30a4f9c] \x74o-[#\x32874c6] text-white"}>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <div className="[min-width:0px]">
              <strong className={"block text-[13px] \x66ont-bold text-primary [&]:uppercase [letter-spacing:0.025em]"}>Adresse (Volksparkstadion)</strong>
              <span className={"block text-[14px] \x66ont-semibold text-foreground"}>Uwe-Seeler-Allee 9, 22525{" "}Hamburg</span>
            </div>
          </div>
          <details className={"mt-3 \x62order-t \x62order-border pt-3"}>
            <summary className={"cursor-pointer text-[13.5px] \x66ont-bold text-primary"}>Volksparkstadion auf Karte anzeigen</summary>
            <div className={"mt-3 rounded-xl \x62order \x62order-border [overflow:hidden]"} />
          </details>
        </div>
      </div>
      <div className="mt-3 grid gap-2 [grid-template-columns:repeat(2,minmax(0px,1fr))]">
        <a className={"flex h-11 items-center rounded-xl \x62order \x62order-border \x62g-secondary text-[12.5px] \x66ont-bold text-primary transition \x68over:\x62g-accent [&]:justify-center [text-decoration:inherit]"} href="https://maps.google.com/?q=Uwe-Seeler-Allee%209%2C%2022525%20Hamburg" rel="noopener noreferrer" target="_blank">Google Maps ↗</a>
        <a className={"flex h-11 items-center rounded-xl \x62order \x62order-border \x62g-secondary text-[12.5px] \x66ont-bold text-primary transition \x68over:\x62g-accent [&]:justify-center [text-decoration:inherit]"} href="https://maps.apple.com/?q=Uwe-Seeler-Allee%209%2C%2022525%20Hamburg" rel="noopener noreferrer" target="_blank">Apple Maps ↗</a>
      </div>
      <a className={"mt-3 flex items-start gap-3 rounded-2xl \x62order \x62order-border \x62g-secondary p-3.5 transition \x68over:\x62order-primary [text-decoration:inherit]"} href="/privat">
        <span className={"grid h-9 w-9 shrink-0 place-items-center rounded-lg \x62g-card text-primary"}>
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </span>
        <span>
          <strong className={"block text-[13.5px] \x66ont-bold text-primary"}>Privater Bereich</strong>
          <span className={"mt-0.5 block text-[12.5px] \x6ceading-relaxed text-muted-foreground"}>Private Kontaktdaten und persönliche Dokumente – nur nach Anmeldung mit Zwei-Faktor-Schutz.</span>
        </span>
      </a>
    </section>
  );
}

function ImportedSectionWerdegang() {
  return (
    <section className={"card-surface p-5 \x73m:\x70-7 [scroll-margin-top:8rem] [@media_print]:break-inside-avoid"} id="werdegang">
      <h2 className={"text-[17px] \x66ont-extrabold [letter-spacing:-0.025em]"}>Werdegang</h2>
      <p className="mt-1 text-[13px] text-muted-foreground">Berufliche Stationen, Weiterbildungen und Auszeichnungen.</p>
      <div className="mt-4 grid gap-2.5">
        <article className={"rounded-2xl \x62order \x62order-border \x62order-l-4 \x62order-l-primary \x62g-secondary p-4"}>
          <h3 className={"text-[15px] \x66ont-extrabold text-foreground [letter-spacing:-0.025em]"}>HSV Fußball AG</h3>
          <p className={"mt-1 text-[12.5px] \x66ont-bold text-primary [&]:uppercase [letter-spacing:0.025em]"}>08/2024 – heute</p>
          <p className="mt-1.5 text-[14px] text-foreground">
            <strong className={"\x66ont-semibold"}>Player Care &amp; Administration Sport</strong>
            <span className="text-muted-foreground"> · Angestellt</span>
          </p>
          <details className="mt-2">
            <summary className={"cursor-pointer text-[12.5px] \x66ont-bold text-primary"}>Aufgaben &amp; Details</summary>
            <ul className={"mt-2 list-disc \x73pace-y-1 pl-5 text-[13px] \x6ceading-relaxed \x74ext-foreground/\x385"}>
              <li>TMS-Administration und Abwicklung aller Spielertransfers</li>
              <li>Zentraler Ansprechpartner für alle den Club vertretenden Berater und Agenturen</li>
              <li>Koordination des gesamten Signing-Prozesses</li>
            </ul>
          </details>
        </article>
        <article className={"rounded-2xl \x62order \x62order-border \x62order-l-4 \x62order-l-primary \x62g-secondary p-4"}>
          <h3 className={"text-[15px] \x66ont-extrabold text-foreground [letter-spacing:-0.025em]"}>HSV Fußball AG</h3>
          <p className={"mt-1 text-[12.5px] \x66ont-bold text-primary [&]:uppercase [letter-spacing:0.025em]"}>02/2022 – 08/2024</p>
          <p className="mt-1.5 text-[14px] text-foreground">
            <strong className={"\x66ont-semibold"}>Teammanagement / Player Care</strong>
            <span className="text-muted-foreground"> · Angestellt</span>
          </p>
          <details className="mt-2">
            <summary className={"cursor-pointer text-[12.5px] \x66ont-bold text-primary"}>Aufgaben &amp; Details</summary>
            <ul className={"mt-2 list-disc \x73pace-y-1 pl-5 text-[13px] \x6ceading-relaxed \x74ext-foreground/\x385"}>
              <li>Betreuung der Lizenzspieler (1. Herren) &amp; deren Familien</li>
              <li>Optimierung des Onboarding-Prozesses für Neuzugänge</li>
              <li>Erste Anlaufstelle für jegliche Spieleranfragen</li>
            </ul>
          </details>
        </article>
        <article className={"rounded-2xl \x62order \x62order-border \x62order-l-4 \x62order-l-primary \x62g-secondary p-4"}>
          <h3 className={"text-[15px] \x66ont-extrabold text-foreground [letter-spacing:-0.025em]"}>UEFA EURO 2020 (München / Allianz Arena)</h3>
          <p className={"mt-1 text-[12.5px] \x66ont-bold text-primary [&]:uppercase [letter-spacing:0.025em]"}>06/2021 – 07/2021</p>
          <p className="mt-1.5 text-[14px] text-foreground">
            <strong className={"\x66ont-semibold"}>Volunteer (Technische Dienste &amp; Overlay Ceremonies)</strong>
            <span className="text-muted-foreground"> · Ehrenamt</span>
          </p>
        </article>
        <article className={"rounded-2xl \x62order \x62order-border \x62order-l-4 \x62order-l-primary \x62g-secondary p-4"}>
          <h3 className={"text-[15px] \x66ont-extrabold text-foreground [letter-spacing:-0.025em]"}>Crawley Town FC</h3>
          <p className={"mt-1 text-[12.5px] \x66ont-bold text-primary [&]:uppercase [letter-spacing:0.025em]"}>08/2020 – 06/2021</p>
          <p className="mt-1.5 text-[14px] text-foreground">
            <strong className={"\x66ont-semibold"}>Volunteer Business Development (DE, AT, CH)</strong>
            <span className="text-muted-foreground"> · Ehrenamt</span>
          </p>
        </article>
      </div>
      <button className={"mt-3 flex w-full items-center gap-1.5 rounded-xl \x62order \x62order-border \x62g-secondary \x70y-3 text-[13.5px] \x66ont-bold text-primary transition \x68over:\x62g-accent [&]:justify-center"} type="button">Weitere Werdegänge anzeigen<svg className="h-4 w-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></button>
      <a className={"no-print mt-2 flex w-full items-center gap-1.5 rounded-xl \x62order \x62order-border \x62g-card \x70y-3 text-[13px] \x66ont-bold text-primary transition \x68over:\x62g-secondary [&]:justify-center [text-decoration:inherit]"} href="#kartenkopf"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>Zurück zur Karte</a>
    </section>
  );
}

function ImportedSectionSprachen() {
  return (
    <section className={"card-surface p-5 \x73m:\x70-7 [scroll-margin-top:8rem] [@media_print]:break-inside-avoid"} id="sprachen">
      <h2 className={"flex items-center gap-2 text-[17px] \x66ont-extrabold [letter-spacing:-0.025em] [scroll-margin-top:8rem]"}><svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" /></svg>Sprachen</h2>
      <ul className="mt-3.5 grid gap-3.5">
        <li>
          <div className={"flex items-center gap-3 [&]:justify-between"}>
            <strong className={"flex items-center gap-2 text-[14px] \x66ont-bold text-foreground"}><span className={"\x72ounded \x62order \x62order-border \x62g-secondary \x70x-1.\x35 \x70y-0.\x35 text-[10px] \x66ont-extrabold text-primary [letter-spacing:0.05em]"}>DE</span>Deutsch</strong>
            <span className={"text-[12px] \x66ont-semibold text-muted-foreground"}>C2 · Muttersprache</span>
          </div>
          <div className={"mt-2 h-1.5 w-full rounded-full \x62g-secondary [overflow:hidden]"}>
            <div className={"h-full rounded-full \x62g-gradient-to-r \x66rom-[#\x30a4f9c] \x74o-[#\x33f8fe0]"} style={{ width: "100%" }} />
          </div>
        </li>
        <li>
          <div className={"flex items-center gap-3 [&]:justify-between"}>
            <strong className={"flex items-center gap-2 text-[14px] \x66ont-bold text-foreground"}><span className={"\x72ounded \x62order \x62order-border \x62g-secondary \x70x-1.\x35 \x70y-0.\x35 text-[10px] \x66ont-extrabold text-primary [letter-spacing:0.05em]"}>EN</span>Englisch</strong>
            <span className={"text-[12px] \x66ont-semibold text-muted-foreground"}>C1 · Fließend</span>
          </div>
          <div className={"mt-2 h-1.5 w-full rounded-full \x62g-secondary [overflow:hidden]"}>
            <div className={"h-full rounded-full \x62g-gradient-to-r \x66rom-[#\x30a4f9c] \x74o-[#\x33f8fe0]"} style={{ width: "85%" }} />
          </div>
        </li>
        <li>
          <div className={"flex items-center gap-3 [&]:justify-between"}>
            <strong className={"flex items-center gap-2 text-[14px] \x66ont-bold text-foreground"}><span className={"\x72ounded \x62order \x62order-border \x62g-secondary \x70x-1.\x35 \x70y-0.\x35 text-[10px] \x66ont-extrabold text-primary [letter-spacing:0.05em]"}>ES</span>Spanisch</strong>
            <span className={"text-[12px] \x66ont-semibold text-muted-foreground"}>Fortgeschritten</span>
          </div>
          <div className={"mt-2 h-1.5 w-full rounded-full \x62g-secondary [overflow:hidden]"}>
            <div className={"h-full rounded-full \x62g-gradient-to-r \x66rom-[#\x30a4f9c] \x74o-[#\x33f8fe0]"} style={{ width: "60%" }} />
          </div>
        </li>
        <li>
          <div className={"flex items-center gap-3 [&]:justify-between"}>
            <strong className={"flex items-center gap-2 text-[14px] \x66ont-bold text-foreground"}><span className={"\x72ounded \x62order \x62order-border \x62g-secondary \x70x-1.\x35 \x70y-0.\x35 text-[10px] \x66ont-extrabold text-primary [letter-spacing:0.05em]"}>FR</span>Französisch</strong>
            <span className={"text-[12px] \x66ont-semibold text-muted-foreground"}>Grundkenntnisse</span>
          </div>
          <div className={"mt-2 h-1.5 w-full rounded-full \x62g-secondary [overflow:hidden]"}>
            <div className={"h-full rounded-full \x62g-gradient-to-r \x66rom-[#\x30a4f9c] \x74o-[#\x33f8fe0]"} style={{ width: "30%" }} />
          </div>
        </li>
      </ul>
    </section>
  );
}

function ImportedSectionHSVTabelle() {
  return (
    <section className={"card-surface p-4 \x73m:\x70-5 [scroll-margin-top:8rem] [@media_print]:break-inside-avoid"} id="tabelle">
      <h2 className={"flex items-center gap-2 text-[16px] \x66ont-extrabold [letter-spacing:-0.025em]"}><svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>HSV-Tabelle</h2>
      <p className={"mt-1 text-[12px] \x66ont-medium text-muted-foreground"}>Bundesliga · Saison 2026/27</p>
      <div className={"mt-3 rounded-xl \x62order \x62order-border [&]:max-h-[330px] [overflow-y:auto]"}>
        <table className="w-full border-collapse text-[12px] [text-indent:0px]">
          <thead className={"sticky top-0 z-10 \x62g-secondary text-[10.5px] text-muted-foreground [&]:uppercase [letter-spacing:0.025em]"}>
            <tr>
              <th className={"\x70x-2 \x70y-2 \x66ont-bold [&]:text-left"} scope="col">#</th>
              <th className={"\x70x-2 \x70y-2 \x66ont-bold [&]:text-left"} scope="col">Verein</th>
              <th className={"\x70x-2 \x70y-2 \x66ont-bold [&]:text-right"} scope="col">Sp.</th>
              <th className={"\x70x-2 \x70y-2 \x66ont-bold [&]:text-right"} scope="col">Diff.</th>
              <th className={"\x70x-2 \x70y-2 \x66ont-bold [&]:text-right"} scope="col">Pkt.</th>
            </tr>
          </thead>
          <tbody>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>1</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>Borussia Dortmund</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>4</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>+7</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>12</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>2</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>SC Freiburg</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>4</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>+9</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>10</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>3</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>FC Bayern München</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>3</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>+12</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>9</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>4</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>FC Augsburg</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>4</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>+5</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>7</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>5</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>Bayer 04 Leverkusen</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>4</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>+5</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>7</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>6</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>SV Werder Bremen</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>4</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>0</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>7</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>7</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>1. FSV Mainz 05</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>3</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>+4</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>6</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>8</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>RB Leipzig</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>4</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>+4</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>6</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>9</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>SV 07 Elversberg</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>3</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>+1</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>6</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>10</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>Eintracht Frankfurt</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>4</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>-1</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>5</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>11</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>1. FC Köln</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>4</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>-3</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>4</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>12</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>FC Schalke 04</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>2</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>-1</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>3</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>13</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>SC Paderborn 07</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>3</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>-2</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>3</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>14</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>TSG 1899 Hoffenheim</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>4</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>-3</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>3</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>15</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>VfB Stuttgart</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>4</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>-3</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>3</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-accent \x66ont-extrabold text-primary"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>16</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>Hamburger SV</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>4</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>-11</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>3</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>17</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>1. FC Union Berlin</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>4</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>-13</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>1</td>
            </tr>
            <tr className={"\x62order-t \x62order-border \x62g-card text-foreground"}>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums"}>18</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-semibold [&]:max-w-[130px] text-ellipsis [&]:whitespace-nowrap [overflow:hidden]"}>Borussia Mönchengladbach</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>4</td>
              <td className={"\x70x-2 \x70y-1.\x35 tabular-nums [&]:text-right"}>-10</td>
              <td className={"\x70x-2 \x70y-1.\x35 \x66ont-bold tabular-nums [&]:text-right"}>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={"mt-3 text-[11px] \x6ceading-relaxed text-muted-foreground [&]:text-right"}>Stand: 16.11.2026, 14:54:06</p>
      <p className={"mt-1 text-[11px] text-muted-foreground [&]:text-right"}>Quelle: <a className={"\x66ont-semibold text-primary underline! [text-decoration:inherit] [text-underline-offset:2px]"} href="https://github.com/openfootball/football.json" rel="noopener noreferrer" target="_blank">OpenFootball</a></p>
    </section>
  );
}

function ImportedAsideSpieleTickets() {
  return (
    <aside className={"grid gap-3 \x6cg:\x73ticky \x6cg:\x74op-20"}>
      <div className="no-print grid gap-2.5">
        <button className={"flex w-full items-center gap-3 rounded-[18px] \x62order \x62order-white/\x320 \x62g-gradient-to-br \x66rom-[#\x3083f80] \x76ia-[#\x30a5cb8] \x74o-[#\x31479e0] \x70x-4 \x70y-3 text-[14.5px] \x66ont-bold text-white \x73hadow-[\x30_10px_24px_rgba(\x310,\x379,\x3156,\x30.\x328),\x69nset_0_1px_0_rgba(\x3255,\x3255,\x3255,\x30.\x322)] transition \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62rightness-110 [&]:min-h-[64px] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} type="button">
          <span className={"grid h-11 w-11 shrink-0 place-items-center rounded-xl \x62g-white/\x320"}>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="5" height="5" x="3" y="3" rx="1" />
              <rect width="5" height="5" x="16" y="3" rx="1" />
              <rect width="5" height="5" x="3" y="16" rx="1" />
              <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
              <path d="M21 21v.01" />
              <path d="M12 7v3a2 2 0 0 1-2 2H7" />
              <path d="M3 12h.01" />
              <path d="M12 3h.01" />
              <path d="M12 16v.01" />
              <path d="M16 12h1" />
              <path d="M21 12v.01" />
              <path d="M12 21v-1" />
            </svg>
          </span>
          <span className={"flex-1 [&]:text-left"}>QR-Code &amp; Link</span>
          <span className={"\x74ext-xl \x6ceading-none \x74ext-white/\x370"}>›</span>
        </button>
        <button className={"flex w-full items-center gap-3 rounded-[18px] \x62order \x62order-white/\x320 \x62g-gradient-to-br \x66rom-[#\x3083f80] \x76ia-[#\x30a5cb8] \x74o-[#\x31479e0] \x70x-4 \x70y-3 text-[14.5px] \x66ont-bold text-white \x73hadow-[\x30_10px_24px_rgba(\x310,\x379,\x3156,\x30.\x328),\x69nset_0_1px_0_rgba(\x3255,\x3255,\x3255,\x30.\x322)] transition \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62rightness-110 [&]:min-h-[64px] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} type="button">
          <span className={"grid h-11 w-11 shrink-0 place-items-center rounded-xl \x62g-white/\x320"}>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
              <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
            </svg>
          </span>
          <span className={"flex-1 [&]:text-left"}>In Wallet speichern</span>
          <span className={"\x74ext-xl \x6ceading-none \x74ext-white/\x370"}>›</span>
        </button>
        <button className={"flex w-full items-center gap-3 rounded-[18px] \x62order \x62order-white/\x320 \x62g-gradient-to-br \x66rom-[#\x3083f80] \x76ia-[#\x30a5cb8] \x74o-[#\x31479e0] \x70x-4 \x70y-3 text-[14.5px] \x66ont-bold text-white \x73hadow-[\x30_10px_24px_rgba(\x310,\x379,\x3156,\x30.\x328),\x69nset_0_1px_0_rgba(\x3255,\x3255,\x3255,\x30.\x322)] transition \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62rightness-110 [&]:min-h-[64px] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} type="button">
          <span className={"grid h-11 w-11 shrink-0 place-items-center rounded-xl \x62g-white/\x320"}>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
          </span>
          <span className={"flex-1 [&]:text-left"}>Kontakt direkt speichern</span>
          <span className={"\x74ext-xl \x6ceading-none \x74ext-white/\x370"}>›</span>
        </button>
        <a className={"flex w-full items-center gap-3 rounded-[18px] \x62order \x62order-white/\x320 \x62g-gradient-to-br \x66rom-[#\x3083f80] \x76ia-[#\x30a5cb8] \x74o-[#\x31479e0] \x70x-4 \x70y-3 text-[14.5px] \x66ont-bold text-white \x73hadow-[\x30_10px_24px_rgba(\x310,\x379,\x3156,\x30.\x328),\x69nset_0_1px_0_rgba(\x3255,\x3255,\x3255,\x30.\x322)] transition \x68over:\x2dtranslate-y-0.\x35 \x68over:\x62rightness-110 [&]:min-h-[64px] [text-decoration:inherit] [&:hover]:[filter:var(--tw-blur)_var(--tw-brightness)_var(--tw-contrast)_var(--tw-grayscale)_var(--tw-hue-rotate)_var(--tw-invert)_var(--tw-saturate)_var(--tw-sepia)_var(--tw-drop-shadow)]"} href={"mailto:Lasse.boettcher@hsv.de?subject=Termin%20vereinbaren&body=Lasse%2C%0A%0ATermin%20vereinbaren%3A%0A%0A%0A%0A"}>
          <span className={"grid h-11 w-11 shrink-0 place-items-center rounded-xl \x62g-white/\x320"}>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
              <path d="M3 10h18" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
            </svg>
          </span>
          <span className={"flex-1 [&]:text-left"}>Termin vereinbaren</span>
          <span className={"\x74ext-xl \x6ceading-none \x74ext-white/\x370"}>›</span>
        </a>
        <div className={"mt-1 grid gap-2 \x62order-t \x62order-border pt-2.5"}>
          <button className={"flex w-full items-center gap-2 rounded-xl \x62order \x62order-border \x62g-card \x70x-4 text-[13.5px] \x66ont-bold text-primary transition \x68over:\x62g-secondary [&]:justify-center [&]:min-h-[48px]"} type="button"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>Kontaktdaten kopieren</button>
          <button className={"flex w-full items-center gap-2 rounded-xl \x62order \x62order-border \x62g-card \x70x-4 text-[13.5px] \x66ont-bold text-primary transition \x68over:\x62g-secondary [&]:justify-center [&]:min-h-[48px]"} type="button"><svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" /><rect x="6" y="14" width="12" height="8" rx="1" /></svg>Karte drucken / als PDF</button>
        </div>
      </div>
      <section className={"card-surface p-4 \x73m:\x70-5 [scroll-margin-top:8rem] [@media_print]:break-inside-avoid"} id="spiele">
        <h2 className={"text-[16px] \x66ont-extrabold [letter-spacing:-0.025em]"}>Spiele &amp; Tickets</h2>
        <p className={"mt-1 text-[12px] \x66ont-medium text-muted-foreground"}>HSV · 1. Herren · Bundesliga</p>
        <div className="mt-3 grid gap-2">
          <details className="group" open>
            <summary className={"flex cursor-pointer items-center gap-2.5 rounded-xl \x62g-primary \x70x-3 \x70y-2.\x35 text-[13.5px] \x66ont-bold text-primary-foreground transition \x68over:\x62g-[#\x3073f7d] [&]:list-none [&]:min-h-[46px]"}><span className={"grid h-7 w-7 place-items-center rounded-lg \x62g-white/\x320"}><svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg></span>Nächste Spiele<svg className={"ml-auto h-4 w-4 transition-transform \x67roup-open:\x72otate-180"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></summary>
            <ul className="mt-2 grid gap-2">
              <li className={"rounded-xl \x62order \x62order-border \x62g-secondary p-3"}>
                <div className={"flex items-center gap-1 text-[11.5px] \x66ont-semibold text-muted-foreground [&]:flex-wrap [&]:justify-between [&]:uppercase [letter-spacing:0.025em]"}>
                  <span>So., 22.11.2026 · 17:30</span>
                  <span>Auswärtsspiel</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className={"grid flex-1 gap-0.5 text-[14px] \x66ont-semibold \x6ceading-tight"}>
                    <span className="text-foreground">SV Werder Bremen</span>
                    <span className="text-foreground">Hamburger SV</span>
                  </div>
                  <span className={"rounded-md \x62order \x62order-border \x62g-card \x70x-2 \x70y-1 text-[14px] \x66ont-extrabold tabular-nums text-primary"}>–:–</span>
                </div>
                <a className={"mt-2.5 flex h-9 items-center rounded-lg \x62g-primary text-[12.5px] \x66ont-bold text-primary-foreground [&]:justify-center [text-decoration:inherit]"} href="https://www.hsv.de/tickets/auswaerts" rel="noopener noreferrer" target="_blank">Tickets ansehen ↗</a>
              </li>
              <li className={"rounded-xl \x62order \x62order-border \x62g-secondary p-3"}>
                <div className={"flex items-center gap-1 text-[11.5px] \x66ont-semibold text-muted-foreground [&]:flex-wrap [&]:justify-between [&]:uppercase [letter-spacing:0.025em]"}>
                  <span>Sa., 28.11.2026 · 15:30</span>
                  <span>Heimspiel</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className={"grid flex-1 gap-0.5 text-[14px] \x66ont-semibold \x6ceading-tight"}>
                    <span className="text-foreground">Hamburger SV</span>
                    <span className="text-foreground">FC Bayern München</span>
                  </div>
                  <span className={"rounded-md \x62order \x62order-border \x62g-card \x70x-2 \x70y-1 text-[14px] \x66ont-extrabold tabular-nums text-primary"}>–:–</span>
                </div>
                <a className={"mt-2.5 flex h-9 items-center rounded-lg \x62g-primary text-[12.5px] \x66ont-bold text-primary-foreground [&]:justify-center [text-decoration:inherit]"} href="https://www.hsv.de/tickets" rel="noopener noreferrer" target="_blank">Tickets ansehen ↗</a>
              </li>
            </ul>
          </details>
          <details className="group">
            <summary className={"flex cursor-pointer items-center gap-2.5 rounded-xl \x62g-primary \x70x-3 \x70y-2.\x35 text-[13.5px] \x66ont-bold text-primary-foreground transition \x68over:\x62g-[#\x3073f7d] [&]:list-none [&]:min-h-[46px]"}><span className={"grid h-7 w-7 place-items-center rounded-lg \x62g-white/\x320"}><svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg></span>Letzte Spiele<svg className={"ml-auto h-4 w-4 transition-transform \x67roup-open:\x72otate-180"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></summary>
            <ul className="mt-2 grid gap-2">
              <li className={"rounded-xl \x62order \x62order-border \x62g-secondary p-3"}>
                <div className={"flex items-center gap-1 text-[11.5px] \x66ont-semibold text-muted-foreground [&]:flex-wrap [&]:justify-between [&]:uppercase [letter-spacing:0.025em]"}>
                  <span>Sa., 19.09.2026 · 15:30</span>
                  <span>Heimspiel</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className={"grid flex-1 gap-0.5 text-[14px] \x66ont-semibold \x6ceading-tight"}>
                    <span className="text-foreground">Hamburger SV</span>
                    <span className="text-muted-foreground">1. FC Köln</span>
                  </div>
                  <span className={"rounded-md \x62order \x62order-border \x62g-card \x70x-2 \x70y-1 text-[14px] \x66ont-extrabold tabular-nums text-primary"}>2:1</span>
                </div>
                <a className={"mt-2.5 flex h-9 items-center rounded-lg \x62g-primary text-[12.5px] \x66ont-bold text-primary-foreground [&]:justify-center [text-decoration:inherit]"} href="https://www.hsv.de/tickets" rel="noopener noreferrer" target="_blank">Tickets ansehen ↗</a>
              </li>
              <li className={"rounded-xl \x62order \x62order-border \x62g-secondary p-3"}>
                <div className={"flex items-center gap-1 text-[11.5px] \x66ont-semibold text-muted-foreground [&]:flex-wrap [&]:justify-between [&]:uppercase [letter-spacing:0.025em]"}>
                  <span>So., 13.09.2026 · 15:30</span>
                  <span>Auswärtsspiel</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className={"grid flex-1 gap-0.5 text-[14px] \x66ont-semibold \x6ceading-tight"}>
                    <span className="text-foreground">RB Leipzig</span>
                    <span className="text-muted-foreground">Hamburger SV</span>
                  </div>
                  <span className={"rounded-md \x62order \x62order-border \x62g-card \x70x-2 \x70y-1 text-[14px] \x66ont-extrabold tabular-nums text-primary"}>5:0</span>
                </div>
                <a className={"mt-2.5 flex h-9 items-center rounded-lg \x62g-primary text-[12.5px] \x66ont-bold text-primary-foreground [&]:justify-center [text-decoration:inherit]"} href="https://www.hsv.de/tickets/auswaerts" rel="noopener noreferrer" target="_blank">Tickets ansehen ↗</a>
              </li>
            </ul>
          </details>
          <details className="group">
            <summary className={"flex cursor-pointer items-center gap-2.5 rounded-xl \x62g-primary \x70x-3 \x70y-2.\x35 text-[13.5px] \x66ont-bold text-primary-foreground transition \x68over:\x62g-[#\x3073f7d] [&]:list-none [&]:min-h-[46px]"}><span className={"grid h-7 w-7 place-items-center rounded-lg \x62g-white/\x320"}><svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M13 5v2" /><path d="M13 17v2" /><path d="M13 11v2" /></svg></span>Ticketportal<svg className={"ml-auto h-4 w-4 transition-transform \x67roup-open:\x72otate-180"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg></summary>
            <div className="mt-2 grid gap-2">
              <p className={"text-[12.5px] \x6ceading-relaxed text-muted-foreground"}>Offizieller Vorverkauf des HSV für Heim- und Auswärtsspiele.</p>
              <a className={"flex h-11 items-center rounded-xl \x62g-primary text-[13.5px] \x66ont-bold text-primary-foreground transition \x68over:\x62g-[#\x3073f7d] [&]:justify-center [text-decoration:inherit]"} href="https://www.hsv.de/tickets" rel="noopener noreferrer" target="_blank">Zum offiziellen Ticketshop ↗</a>
              <p className={"text-[11.5px] \x6ceading-relaxed text-muted-foreground"}>Nur hier offiziell: hsv.de/tickets und die HSV-Hotline 040/4155-1887.</p>
            </div>
          </details>
        </div>
        <p className={"mt-3 text-[11px] \x6ceading-relaxed text-muted-foreground [&]:text-right"}>Stand: 16.11.2026, 14:54:06</p>
        <p className={"mt-1 text-[11px] text-muted-foreground [&]:text-right"}>Quelle: <a className={"\x66ont-semibold text-primary underline! [text-decoration:inherit] [text-underline-offset:2px]"} href="https://github.com/openfootball/football.json" rel="noopener noreferrer" target="_blank">OpenFootball</a></p>
      </section>
    </aside>
  );
}
