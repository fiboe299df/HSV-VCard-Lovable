import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/impressum.css?raw";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [{ title: "Impressum | Lasse Böttcher · HSV" }, { name: "description", content: "Impressum der digitalen Visitenkarte von Lasse Böttcher." }, { property: "og:title", content: "Impressum | Lasse Böttcher · HSV" }, { property: "og:description", content: "Impressum der digitalen Visitenkarte von Lasse Böttcher." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }),
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
    </>
  );
}
