import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/datenschutz.css?raw";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: [{ title: "Datenschutz | HSV Visitenkarten" }] }),
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
            <h1 className={"text-[22px] \x66ont-extrabold [letter-spacing:-0.025em]"}>Datenschutzerklärung</h1>
            <div className={"mt-4 \x73pace-y-3 text-[14px] \x6ceading-relaxed \x74ext-[#\x326394b] [&\x5fa]:\x66ont-semibold [&\x5fa]:\x74ext-primary [&\x5fh2]:\x6dt-6 [&\x5fh2]:\x74ext-[\x316px] [&\x5fh2]:\x66ont-extrabold [&\x5fh2]:\x74ext-[#\x3082f5c] [&\x5fli]:\x6dl-5 [&\x5fli]:\x6cist-disc [&\x5fp]:\x6dt-2"}>
              <h2>1. Datenschutz auf einen Blick</h2>
              <p>Diese Anwendung stellt die geschäftlichen Kontaktdaten von Lasse Böttcher (HSV Fußball AG) als digitale Visitenkarte bereit und bietet einen geschützten Privatbereich. Öffentliche Seiten setzen keine Tracking-Cookies und keine Analyse-Tools ein.</p>
              <h2>2. Verantwortliche Stelle</h2>
              <p>HSV Fußball AG &amp; Co. KGaA<br />Uwe-Seeler-Allee 9<br />22525 Hamburg<br />E-Mail: <a className="underline! [text-decoration:inherit] [text-underline-offset:2px]" href="mailto:datenschutz@hsv.de">datenschutz@hsv.de</a></p>
              <h2>3. Hosting</h2>
              <p>Die Anwendung wird bei einem Hosting-Dienstleister innerhalb der EU betrieben. Beim Aufruf der Seiten werden technisch notwendige Verbindungsdaten (z. B. IP-Adresse, Zeitpunkt des Zugriffs, Browsertyp) in Server-Logfiles verarbeitet, um Auslieferung und Sicherheit zu gewährleisten (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO).</p>
              <h2>4. Konto, Anmeldung und Zwei-Faktor-Authentifizierung</h2>
              <p>Für den Privatbereich ist ein Konto mit E-Mail-Adresse und Passwort erforderlich. Die Anmeldung erfolgt über die Plattform-Authentifizierung; zusätzlich ist eine Zwei-Faktor-Authentifizierung (Authenticator-App oder SMS-Code) verpflichtend. Gespeichert werden E-Mail-Adresse, Passwort-Hash, Zeitpunkt der Registrierung sowie die MFA-Konfiguration. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und lit. f DSGVO.</p>
              <h2>5. Privatbereich und persönliche Dokumente</h2>
              <p>Private Kontaktdaten und persönliche Dokumente sind ausschließlich für das freigegebene Konto und die Administration sichtbar. Dokumente liegen in einem geschützten Speicher und werden nur über zeitlich begrenzte, signierte Links ausgeliefert. Der Zugriff wird serverseitig geprüft, nicht über verborgene URLs.</p>
              <h2>6. Spiele und Tickets (OpenFootball)</h2>
              <p>Auf der öffentlichen Visitenkarte werden Spielplandaten aus dem OpenFootball-Projekt geladen. Dabei wird eine Anfrage an den Datenanbieter gestellt, wodurch technisch bedingt die IP-Adresse übermittelt wird. Ticket-Links führen zum offiziellen Ticketshop des HSV.</p>
              <h2>7. Lokale Speicherung</h2>
              <p>Die gewählte Spracheinstellung wird lokal im Browser gespeichert. Diese Information wird nicht an Server übertragen.</p>
              <h2>8. Externe Links und Dienste</h2>
              <p>Beim Aufruf externer Links (Apple Wallet, Google Wallet, Google Maps, Apple Karten, LinkedIn, XING, Instagram) verlassen Sie diese Anwendung. Für die Datenverarbeitung auf den Zielseiten sind deren Betreiber verantwortlich.</p>
              <h2>9. Ihre Rechte</h2>
              <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragung und Widerspruch. Weitere Informationen finden Sie unter <a className="underline! [text-decoration:inherit] [text-underline-offset:2px]" href="https://www.hsv.de/datenschutz" rel="noopener noreferrer" target="_blank">www.hsv.de/datenschutz</a>.</p>
            </div>
          </main>
          <div className={"mt-5 flex gap-4 text-[12.5px] \x66ont-semibold \x74ext-white/\x375 [&]:justify-center"}>
            <a className={"\x68over:\x74ext-white underline! [text-decoration:inherit] [text-underline-offset:4px]"} href="/impressum">Impressum</a>
            <a className={"\x68over:\x74ext-white underline! [text-decoration:inherit] [text-underline-offset:4px]"} href="#">Datenschutz</a>
            <a className={"\x68over:\x74ext-white underline! [text-decoration:inherit] [text-underline-offset:4px]"} href="/">Visitenkarte</a>
          </div>
        </div>
      </div>
      <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" />
    </>
  );
}
