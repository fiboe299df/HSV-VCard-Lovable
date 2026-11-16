import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText, Lock, Mail, Phone } from "lucide-react";
import capturedCSS from "../styles/pages/index.css?raw";

export const Route = createFileRoute("/privat")({
  head: () => ({
    meta: [
      { title: "Privater Bereich | Lasse Böttcher · HSV" },
      { name: "description", content: "Private Kontaktdaten und Dokumente von Lasse Böttcher – nur nach Anmeldung." },
      { property: "og:title", content: "Privater Bereich | Lasse Böttcher · HSV" },
      { property: "og:description", content: "Private Kontaktdaten und Dokumente von Lasse Böttcher – nur nach Anmeldung." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  staticData: { importedDocument: { html: { lang: "de" }, body: { "data-react-root": "true" } } },
  component: PrivatPage,
});

function PrivatPage() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="hsv-backdrop grid min-h-screen place-items-center px-4 py-10">
        <div className="w-full max-w-md">
          <Link to="/" className="glass-chip mb-4"><ArrowLeft className="h-4 w-4" /> Zurück zur Karte</Link>
          <section className="glass-panel p-6 text-center sm:p-8">
            <div className="avatar-ring mx-auto h-20 w-20 overflow-hidden rounded-full">
              <img className="h-full w-full object-cover" alt="Porträt von Lasse Böttcher" src="/site-assets/8773f8933449b34f.avif" />
            </div>
            <h1 className="mt-5 text-[22px] font-extrabold tracking-tight">Hallo, schön dass du da bist</h1>
            <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">Hier findest du meine privaten Kontaktdaten und Dokumente.</p>
            <div className="mt-6 grid gap-2 text-left">
              {[{ i: Phone, t: "Private Nummer" }, { i: Mail, t: "Private E-Mail" }, { i: FileText, t: "Lebenslauf & Zeugnisse" }].map(({ i: Icon, t }) => (
                <div key={t} className="tile flex items-center gap-3 p-3">
                  <span className="icon-badge h-10 w-10"><Icon className="h-4 w-4" /></span>
                  <span className="flex-1 text-[14px] font-semibold">{t}</span>
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
            <p className="tile mt-6 p-3.5 text-[13px] text-muted-foreground">Die Anmeldung wird gerade eingerichtet und ist in Kürze verfügbar.</p>
          </section>
        </div>
      </div>
    </>
  );
}
