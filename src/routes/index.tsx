import { useEffect, useMemo, useRef, useState, type ReactNode, type Ref } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowDown, ArrowLeft, ArrowUp, Award, Briefcase, CalendarDays, Check, ChevronDown, Copy, Download, ExternalLink,
  FileText, Globe2, GraduationCap, Heart, Languages, Lock, Mail, MapPin, Menu, MessageCircle, Moon, Phone,
  Printer, QrCode, Share2, Sun, Ticket, Trophy, User, Wallet, X,
} from "lucide-react";
import { toast } from "sonner";
import capturedCSS from "../styles/pages/index.css?raw";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getFootballData, HSV_TEAM_ID, type FootballData, type Match, type TableRow } from "@/lib/football.functions";
import { DICT, LANGS, LangContext, useT, type Lang } from "@/lib/card-i18n";
import { cn } from "@/lib/utils";

const footballQuery = queryOptions({
  queryKey: ["football", "bl1"],
  queryFn: () => getFootballData(),
  staleTime: 60_000,
  refetchInterval: 5 * 60_000,
});

const TITLE = "Lasse Böttcher · Player Care & Administration Sport | HSV";
const DESCRIPTION =
  "Digitale Visitenkarte von Lasse Böttcher (HSV Fußball AG): Kontakt, Werdegang, Sprachen sowie Live-Spiele und Tabelle des Hamburger SV.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  staticData: { importedDocument: { html: { lang: "de" }, body: { "data-react-root": "true" } } },
  loader: ({ context }) => context.queryClient.ensureQueryData(footballQuery),
  component: Index,
  errorComponent: ({ error }) => (
    <div role="alert" className="p-8 text-center">
      Die Visitenkarte konnte nicht geladen werden: {error instanceof Error ? error.message : String(error)}
    </div>
  ),
  notFoundComponent: () => <div className="p-8 text-center">Nicht gefunden.</div>,
});

/* ------------------------------------------------------------------ data */

const PHONE = "+491604339168";
const PHONE_DISPLAY = "+49 160 4339168";
const EMAIL = "Lasse.boettcher@hsv.de";
const ADDRESS = "Uwe-Seeler-Allee 9, 22525 Hamburg";
const ADDRESS_Q = encodeURIComponent(ADDRESS);
const WALLET_APPLE = "https://api.walletwallet.dev/p/16bb86a1-7a9f-4ffe-b28b-0d3106739cfd/apple.pkpass";
const WALLET_GOOGLE = "https://pass.walletwallet.dev/p/16bb86a1-7a9f-4ffe-b28b-0d3106739cfd";

const HSV_LOGO = {
  src: "/site-assets/6911ac5b1c3a27c9.avif",
  srcSet: "/site-assets/6911ac5b1c3a27c9.avif 1x, /site-assets/5920a1e65d3c8ab1.avif 2x, /site-assets/1fce47dda4a5766b.avif 3x",
};

const NAV = [
  { id: "kontakt", icon: Phone },
  { id: "ueber-mich", icon: User },
  { id: "werdegang", icon: Briefcase },
  { id: "interessen", icon: Heart },
  { id: "karriere", icon: Award },
  { id: "sprachen", icon: Languages },
  { id: "spiele", icon: CalendarDays },
] as const;
type NavId = (typeof NAV)[number]["id"];

type Station = { org: string; period: string; role: string; kind: string; details?: string[]; logo?: "hsv"; current?: boolean };

const WORK: Station[] = [
  { org: "HSV Fußball AG", period: "08/2024 – {now}", role: "Player Care & Administration Sport", kind: "Angestellt", logo: "hsv", current: true,
    details: ["TMS-Administration und Abwicklung aller Spielertransfers", "Zentraler Ansprechpartner für alle den Club vertretenden Berater und Agenturen", "Koordination des gesamten Signing-Prozesses"] },
  { org: "HSV Fußball AG", period: "02/2022 – 08/2024", role: "Teammanagement / Player Care", kind: "Angestellt", logo: "hsv",
    details: ["Betreuung der Lizenzspieler (1. Herren) & deren Familien", "Optimierung des Onboarding-Prozesses für Neuzugänge", "Erste Anlaufstelle für jegliche Spieleranfragen"] },
  { org: "UEFA EURO 2020 (München / Allianz Arena)", period: "06/2021 – 07/2021", role: "Volunteer (Technische Dienste & Overlay Ceremonies)", kind: "Ehrenamt" },
  { org: "Crawley Town FC", period: "08/2020 – 06/2021", role: "Volunteer Business Development (DE, AT, CH)", kind: "Ehrenamt" },
  { org: "West Ham United F.C. (London)", period: "09/2018 – 05/2021", role: "Supervisor Player's Family Liaison Officer", kind: "Angestellt",
    details: ["Family Liaison Officer an Spieltagen (Player Care Department)", "Zusammenarbeit mit Spielern bei Community-Projekten"] },
  { org: "The FA (London)", period: "02/2019 – 05/2021", role: "Team Liaison Officer", kind: "Ehrenamt" },
  { org: "SPORT1 Media GmbH (Ismaning)", period: "05/2019 – 07/2019", role: "Intern Product Management", kind: "Praktikum" },
  { org: "Benugo / V&A Museum / Dorchester Hotel (London)", period: "09/2017 – 05/2019", role: "Customer Service (inkl. TV Choice Awards)", kind: "Angestellt" },
  { org: "NATO", period: "07/2017", role: "Konferenzassistent", kind: "Ehrenamt" },
  { org: "Congrebas (Bilbao)", period: "10/2015 – 11/2015", role: "Intern Marketing und Events", kind: "Praktikum" },
];

const EDUCATION: Station[] = [
  { org: "University Campus of Football Business (UCFB Wembley)", period: "09/2018 – 06/2021", role: "Bachelor of Arts: Football Business and Marketing", kind: "Studium",
    details: ["Note: First Class Honours (1,0)", "Abschlussarbeit: „A comparative analysis of the ownership structures in the Bundesliga and the Premier League and its effects on the fan cultures“ (88/100)"] },
  { org: "Herderschule Rendsburg", period: "08/2009 – 06/2017", role: "Abitur", kind: "Schulabschluss", details: ["Schwerpunktfächer: Spanisch, Englisch, Latein"] },
];

const VISIBLE_STATIONS = 4;

/** Proficiency on the CEFR scale: 1 = A1 … 6 = C2. */
const LANGUAGES = [
  { code: "de", level: 6 },
  { code: "gb", level: 5 },
  { code: "es", level: 3 },
  { code: "fr", level: 2 },
];
const CEFR = ["A1", "A2", "B1", "B2", "C1", "C2"];

const SUCCESS_ICONS = [Trophy, GraduationCap, Globe2] as const;

const VCARD = [
  "BEGIN:VCARD", "VERSION:3.0", "N:Böttcher;Lasse;;;", "FN:Lasse Böttcher", "ORG:HSV Fußball AG",
  "TITLE:Player Care & Administration Sport", `TEL;TYPE=CELL:${PHONE}`, `EMAIL;TYPE=WORK:${EMAIL}`,
  "ADR;TYPE=WORK:;;Uwe-Seeler-Allee 9;Hamburg;;22525;Deutschland", "URL:https://www.hsv.de/", "END:VCARD",
].join("\r\n");

/* --------------------------------------------------------------- helpers */

function initials(name: string) {
  return name.replace(/\(.*?\)/g, "").split(/[\s/]+/).filter((w) => /^[A-ZÄÖÜ]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
}

function useCopy() {
  const t = useT();
  return async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label} ${t.copyOk}`);
    } catch {
      toast.error(t.copyFail);
    }
  };
}

function downloadVcard() {
  const blob = new Blob([VCARD], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Lasse-Boettcher.vcf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function useFormatters() {
  const t = useT();
  return useMemo(() => ({
    date: new Intl.DateTimeFormat(t.locale, { weekday: "short", day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin" }),
    stand: new Intl.DateTimeFormat(t.locale, { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Europe/Berlin" }),
  }), [t.locale]);
}

function useOrigin() {
  const [origin, setOrigin] = useState("");
  useEffect(() => setOrigin(window.location.origin + "/"), []);
  return origin;
}

/* ----------------------------------------------------------------- modal */

function Modal({ open, onOpenChange, title, description, children, wide, fullOnMobile }: {
  open: boolean; onOpenChange: (o: boolean) => void; title: string; description?: string; children: ReactNode; wide?: boolean; fullOnMobile?: boolean;
}) {
  const t = useT();
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay fixed inset-0 z-[60]" />
        <Dialog.Content
          className={cn(
            "glass-panel fixed left-1/2 top-1/2 z-[61] flex max-h-[88vh] w-[calc(100%-1.5rem)] -translate-x-1/2 -translate-y-1/2 flex-col p-5 sm:p-6",
            wide ? "max-w-3xl" : "max-w-md",
            fullOnMobile && "max-sm:h-[100dvh] max-sm:max-h-[100dvh] max-sm:w-full max-sm:rounded-none",
          )}
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <Dialog.Title className="text-[18px] font-extrabold tracking-tight">{title}</Dialog.Title>
              <Dialog.Description className={description ? "mt-1 text-[13px] text-muted-foreground" : "sr-only"}>{description ?? title}</Dialog.Description>
            </div>
            <Dialog.Close className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-secondary text-foreground transition hover:bg-accent" aria-label={t.close}>
              <X className="h-4 w-4" />
            </Dialog.Close>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

/* ------------------------------------------------------------------ page */

type ModalName = "qr" | "wallet" | "cv" | "table" | null;

function Index() {
  const [modal, setModal] = useState<ModalName>(null);
  const [active, setActive] = useState<NavId>("kontakt");
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState<Lang>("de");

  useEffect(() => {
    const isDark = localStorage.getItem("hsv-theme") === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    const storedLang = localStorage.getItem("hsv-lang");
    if (storedLang === "de" || storedLang === "en") setLang(storedLang);
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("hsv-theme", next ? "dark" : "light");
  };
  const changeLang = (l: Lang) => { setLang(l); localStorage.setItem("hsv-lang", l); };

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id as NavId);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const close = (o: boolean) => !o && setModal(null);
  const t = DICT[lang];

  return (
    <LangContext.Provider value={lang}>
      <style>{capturedCSS}</style>
      <div className="hsv-backdrop min-h-screen pb-28">
        <div className="mx-auto w-full max-w-[1160px] px-3 sm:px-6">
          <Header dark={dark} onToggleTheme={toggleTheme} lang={lang} onLang={changeLang} />
          <InfoBar active={active} />
          <main id="kartenkopf" className="scroll-mt-24">
            <Hero />
            <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(282px,0.75fr)] lg:items-start">
              <div className="grid min-w-0 gap-4">
                <ProfileCard />
                <ContactSection />
                <section className="card-surface scroll-mt-28 p-5 sm:p-7" id="ueber-mich">
                  <h2 className="text-[17px] font-extrabold tracking-tight">{t.aboutTitle}</h2>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">{t.aboutText}</p>
                  <h3 className="mt-5 text-[12px] font-extrabold uppercase tracking-[0.12em] text-primary">{t.successTitle}</h3>
                  <ul className="mt-2.5 grid gap-2.5 sm:grid-cols-3">
                    {t.successes.map((s, i) => {
                      const Icon = SUCCESS_ICONS[i % SUCCESS_ICONS.length] ?? Trophy;
                      return (
                        <li key={s.t} className="success-tile">
                          <span className="icon-badge"><Icon className="h-5 w-5" /></span>
                          <strong className="mt-3 block text-[14px] font-extrabold leading-snug text-foreground">{s.t}</strong>
                          <span className="mt-1 block text-[12.5px] leading-snug text-muted-foreground">{s.d}</span>
                        </li>
                      );
                    })}
                  </ul>
                </section>
                <CareerTimeline onOpenCv={() => setModal("cv")} />
                <AwardsSection />
                <InterestsSection />
                <KarriereSection />
                <LanguagesSection />
              </div>
              <ActionsAside onQr={() => setModal("qr")} />
            </div>
            <GamesAndTable onOpenTable={() => setModal("table")} />
          </main>
          <Footer />
        </div>
      </div>

      <BottomBar onWallet={() => setModal("wallet")} onQr={() => setModal("qr")} dark={dark} onToggleTheme={toggleTheme} />
      <ScrollButtons />

      <QrModal open={modal === "qr"} onOpenChange={close} />
      <WalletModal open={modal === "wallet"} onOpenChange={close} />
      <CvModal open={modal === "cv"} onOpenChange={close} />
      <TableModal open={modal === "table"} onOpenChange={close} />
    </LangContext.Provider>
  );
}

/* ---------------------------------------------------------------- header */

function Header({ dark, onToggleTheme, lang, onLang }: { dark: boolean; onToggleTheme: () => void; lang: Lang; onLang: (l: Lang) => void }) {
  const t = useT();
  const current = LANGS.find((l) => l.code === lang) ?? { code: "de" as Lang, label: "Deutsch", flag: "de" };
  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3.5">
      <a className="flex min-w-0 items-center gap-3" href="https://www.hsv.de/" rel="noopener noreferrer" target="_blank" aria-label={t.hsvSite}>
        <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-glass p-[2px] ring-2 ring-hsv-blue/50">
          <img className="h-full w-full rounded-full object-cover" alt="HSV-Logo" src={HSV_LOGO.src} srcSet={HSV_LOGO.srcSet} />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[15px] font-extrabold tracking-tight text-glass-foreground">Lasse Böttcher</span>
          <span className="block truncate text-[10px] font-bold uppercase tracking-[0.14em] text-glass-muted">Player Care &amp; Administration Sport</span>
        </span>
      </a>
      <div className="flex items-center gap-2">
        <div className="glass-pill">
          <button className="glass-pill-btn w-8" type="button" onClick={onToggleTheme} aria-label={dark ? t.light : t.dark} title={dark ? t.light : t.dark} aria-pressed={dark}>
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <span className="h-4 w-px bg-white/25" aria-hidden="true" />
          <DropdownMenu>
            <DropdownMenuTrigger className="glass-pill-btn gap-1.5 px-2 text-[12.5px] font-bold" aria-label={t.language}>
              <img src={`/site-assets/flags/${current.flag}.svg`} alt="" className="h-[11px] w-4 rounded-[2px] object-cover ring-1 ring-white/40" />
              {current.code.toUpperCase()}
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-panel min-w-40 p-1.5">
              <DropdownMenuRadioGroup value={lang} onValueChange={(v) => onLang(v as Lang)}>
                {LANGS.map((l) => (
                  <DropdownMenuRadioItem key={l.code} value={l.code} className="gap-2.5 rounded-lg py-2 text-[13.5px] font-semibold">
                    <img src={`/site-assets/flags/${l.flag}.svg`} alt="" className="h-3 w-[18px] rounded-[2px] object-cover ring-1 ring-border" />
                    {l.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <a className="glass-chip max-sm:hidden" href="https://www.hsv.de/" rel="noopener noreferrer" target="_blank">
          {t.homeHsv} <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function InfoBar({ active }: { active: NavId }) {
  const t = useT();
  const scroller = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const box = scroller.current;
    const el = box?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (el && box) box.scrollTo({ left: el.offsetLeft - box.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav className="glass-bar sticky top-2 z-30 mb-4 flex items-center gap-1.5 rounded-full p-1 print:hidden" aria-label={t.infobar}>
      <div ref={scroller} className="no-scrollbar flex min-w-0 flex-1 gap-1 overflow-x-auto">
        {NAV.map(({ id, icon: Icon }) => (
          <a key={id} data-id={id} href={`#${id}`} className="glass-chip glass-chip--sm" data-active={active === id} aria-current={active === id ? "true" : undefined}
            onClick={(e) => { e.preventDefault(); scrollToId(id); history.replaceState(null, "", `#${id}`); }}>
            <Icon className="h-3.5 w-3.5" />
            {t.nav[id]}
          </a>
        ))}
      </div>
      <Link to="/privat" className="glass-icon-btn glass-icon-btn--solid h-8 w-8" aria-label={t.privateArea} title={t.privateArea}>
        <Lock className="h-3.5 w-3.5" />
      </Link>
    </nav>
  );
}

/* ------------------------------------------------------------------ hero */

function Hero() {
  const t = useT();
  return (
    <section className="rise relative overflow-hidden rounded-[28px] border border-white/15 shadow-[0_24px_60px_rgba(2,18,40,0.35)]" aria-labelledby="hero-title">
      <img className="absolute inset-0 h-full w-full object-cover" alt="" aria-hidden="true" src="/site-assets/5e0ce170f01b05ee.avif" srcSet="/site-assets/5e0ce170f01b05ee.avif 1x, /site-assets/e40c872fd13548d8.avif 2x, /site-assets/e86ae598d3e5cec6.avif 3x" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#04162c]/95 via-[#06284c]/88 to-[#0a4f9c]/55" />
      <div className="relative grid gap-7 p-6 sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-12">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-glass p-[2px] ring-2 ring-hsv-blue">
              <img className="h-full w-full rounded-full object-cover" alt="HSV-Wappen" src="/site-assets/db505a092aa5ee2e.avif" srcSet="/site-assets/db505a092aa5ee2e.avif 1x, /site-assets/995fdd11e798bedd.avif 2x, /site-assets/411980d2b899338f.avif 3x" />
            </span>
            <div>
              <strong className="block text-[17px] font-extrabold tracking-[0.14em] text-glass-foreground">HSV</strong>
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-glass-muted">{t.digitalCard}</span>
            </div>
          </div>
          <p className="eyebrow uppercase tracking-[0.16em]">Hamburger SV</p>
          <h1 id="hero-title" className="mt-2 max-w-[16ch] text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-glass-foreground">{t.heroTitle}</h1>
          <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-glass-foreground/85">Lasse Böttcher · Player Care &amp; Administration Sport</p>
        </div>
        <div className="mx-auto w-full max-w-[330px] overflow-hidden rounded-[24px] border-[5px] border-white/85 bg-secondary shadow-[0_14px_40px_rgba(0,0,0,0.3)] lg:mx-0 lg:justify-self-end">
          <div className="aspect-[4/3]">
            <img className="h-full w-full object-cover" alt={t.heroAlt} src="/site-assets/a6421ef9dd6f111b.avif" srcSet="/site-assets/a6421ef9dd6f111b.avif 1x, /site-assets/41a468c51512017f.avif 2x, /site-assets/0cab3996c6c6b428.avif 3x" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- profile */

function ProfileCard() {
  const t = useT();
  const copy = useCopy();
  const share = async () => {
    const url = window.location.origin + "/";
    if (navigator.share) {
      try { await navigator.share({ title: "Lasse Böttcher · HSV", text: t.shareText, url }); } catch { /* abgebrochen */ }
    } else copy(url, t.link);
  };
  const tile = "tile tile-link flex min-h-[72px] flex-col items-center justify-center gap-2 px-1 py-3 text-[11.5px] font-semibold text-primary hover:-translate-y-0.5";
  return (
    <section className="card-surface p-5 sm:p-7">
      <div className="flex items-center gap-4 border-b border-border pb-5">
        <div className="avatar-ring h-[86px] w-[86px] shrink-0 overflow-hidden rounded-full">
          <img className="h-full w-full object-cover" alt={t.portraitAlt} src="/site-assets/8773f8933449b34f.avif" srcSet="/site-assets/8773f8933449b34f.avif 1x, /site-assets/31225d8850b11923.avif 2x, /site-assets/8600f7b5f8e36416.avif 3x" />
        </div>
        <div className="min-w-0">
          <h2 className="text-[22px] font-extrabold leading-tight tracking-tight">Lasse Böttcher</h2>
          <p className="mt-0.5 text-[14px] font-semibold text-primary">Player Care &amp; Administration Sport</p>
          <p className="mt-1 text-[13px] font-medium text-muted-foreground">HSV Fußball AG</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-2">
        <a className={tile} href={`tel:${PHONE}`}><Phone className="h-5 w-5" />{t.call}</a>
        <a className={tile} href={`mailto:${EMAIL}`}><Mail className="h-5 w-5" />{t.email}</a>
        <a className={tile} href={`https://wa.me/${PHONE.slice(1)}`} rel="noopener noreferrer" target="_blank"><MessageCircle className="h-5 w-5" />WhatsApp</a>
        <button className={tile} type="button" onClick={share}><Share2 className="h-5 w-5" />{t.share}</button>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <a className="flex h-11 items-center justify-center rounded-xl bg-[#0a66c2] text-[12px] font-bold text-white shadow-sm transition hover:-translate-y-0.5" href="https://de.linkedin.com/in/lasse-b%C3%B6ttcher-954938154" rel="noopener noreferrer" target="_blank">LinkedIn</a>
        <a className="flex h-11 items-center justify-center rounded-xl bg-[#026466] text-[12px] font-bold text-white shadow-sm transition hover:-translate-y-0.5" href="https://www.xing.com/profile/Lasse_Boettcher" rel="noopener noreferrer" target="_blank">XING</a>
        <a className="flex h-11 items-center justify-center rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-[12px] font-bold text-white shadow-sm transition hover:-translate-y-0.5" href="https://www.instagram.com/laboe1999" rel="noopener noreferrer" target="_blank">Instagram</a>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- contact */

function CopyBtn({ text, label }: { text: string; label: string }) {
  const t = useT();
  const copy = useCopy();
  const [done, setDone] = useState(false);
  return (
    <button type="button" className="btn-soft shrink-0 px-3" aria-label={`${label}: ${t.copy}`}
      onClick={async () => { await copy(text, label); setDone(true); setTimeout(() => setDone(false), 1600); }}>
      {done ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span className="max-sm:sr-only">{done ? t.copied : t.copy}</span>
    </button>
  );
}

function ContactRow({ icon, label, value, href, copy }: { icon: ReactNode; label: string; value: string; href: string; copy: string }) {
  return (
    <div className="tile flex items-center gap-2 p-2 pr-2.5">
      <a href={href} className="flex min-h-[52px] min-w-0 flex-1 items-center gap-3 rounded-xl px-1.5 transition hover:bg-accent">
        <span className="icon-badge">{icon}</span>
        <span className="min-w-0">
          <strong className="block text-[12px] font-bold uppercase tracking-wide text-primary">{label}</strong>
          <span className="block break-words text-[14.5px] font-semibold text-foreground">{value}</span>
        </span>
      </a>
      <CopyBtn text={copy} label={label} />
    </div>
  );
}

function ContactSection() {
  const t = useT();
  const [showMap, setShowMap] = useState(false);
  return (
    <section className="card-surface scroll-mt-28 p-5 sm:p-7" id="kontakt">
      <h2 className="text-[17px] font-extrabold tracking-tight">{t.contactTitle}</h2>
      <div className="mt-4 grid gap-2.5">
        <ContactRow icon={<Phone className="h-5 w-5" />} label={t.phone} value={PHONE_DISPLAY} href={`tel:${PHONE}`} copy={PHONE_DISPLAY} />
        <ContactRow icon={<Mail className="h-5 w-5" />} label={t.email} value={EMAIL} href={`mailto:${EMAIL}`} copy={EMAIL} />
        <div className="tile p-2 pr-2.5">
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <button type="button" className="flex min-h-[52px] min-w-0 flex-1 items-center gap-3 rounded-xl px-1.5 text-left transition hover:bg-accent" aria-label={t.openAddress}>
                  <span className="icon-badge"><MapPin className="h-5 w-5" /></span>
                  <span className="min-w-0">
                    <strong className="block text-[12px] font-bold uppercase tracking-wide text-primary">{t.address}</strong>
                    <span className="block text-[14.5px] font-semibold text-foreground">{ADDRESS}</span>
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent align="start" className="glass-panel w-60 p-2">
                <p className="px-2 pb-2 pt-1 text-[12px] font-semibold text-muted-foreground">{t.openWith}</p>
                <a className="tile tile-link mb-1.5 flex min-h-11 items-center justify-between px-3 text-[14px] font-bold text-primary" href={`https://maps.google.com/?q=${ADDRESS_Q}`} target="_blank" rel="noopener noreferrer">Google Maps <ExternalLink className="h-4 w-4" /></a>
                <a className="tile tile-link flex min-h-11 items-center justify-between px-3 text-[14px] font-bold text-primary" href={`https://maps.apple.com/?q=${ADDRESS_Q}`} target="_blank" rel="noopener noreferrer">Apple Maps <ExternalLink className="h-4 w-4" /></a>
              </PopoverContent>
            </Popover>
            <CopyBtn text={ADDRESS} label={t.address} />
          </div>
          <div className="mt-2 border-t border-border px-1.5 pt-2.5">
            {showMap ? (
              <iframe title="Volksparkstadion Hamburg" className="h-64 w-full rounded-xl border border-border" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent("Volksparkstadion, " + ADDRESS)}&z=15&output=embed`} />
            ) : (
              <button type="button" onClick={() => setShowMap(true)} className="flex w-full flex-wrap items-center gap-x-2 gap-y-0.5 text-left text-[13.5px] font-bold text-primary">
                <MapPin className="h-4 w-4" /> {t.showMap}
                <span className="text-[11.5px] font-medium text-muted-foreground sm:ml-auto">{t.loadsGoogle}</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <Link to="/privat" className="tile tile-link mt-3 flex items-center gap-3 p-3.5">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card text-primary"><Lock className="h-4 w-4" /></span>
        <span className="min-w-0">
          <strong className="block text-[14px] font-bold text-primary">{t.privateArea}</strong>
          <span className="block text-[12.5px] text-muted-foreground">{t.privateText}</span>
        </span>
      </Link>
    </section>
  );
}

/* -------------------------------------------------------------- werdegang */

function StationItem({ s }: { s: Station }) {
  const t = useT();
  return (
    <li className="relative">
      <span className="timeline-dot" data-current={s.current ? "true" : undefined} aria-hidden="true" />
      <article className="tile p-3.5">
        <div className="flex items-start gap-3">
          <span className="timeline-logo">
            {s.logo === "hsv" ? <img className="h-full w-full object-cover" src={HSV_LOGO.src} alt="HSV-Logo" /> : <span aria-hidden="true">{initials(s.org)}</span>}
          </span>
          <div className="min-w-0">
            <h3 className="text-[14.5px] font-bold leading-snug text-foreground">{s.org}</h3>
            <p className="mt-0.5 text-[11.5px] font-bold uppercase tracking-wide text-primary">{s.period.replace("{now}", t.periodNow)}</p>
            <p className="mt-1 text-[13px] text-foreground"><strong className="font-semibold">{s.role}</strong><span className="text-muted-foreground"> · {t.kinds[s.kind] ?? s.kind}</span></p>
          </div>
        </div>
        {s.details ? (
          <details className="group mt-2.5 border-t border-border pt-2">
            <summary className="flex cursor-pointer list-none items-center gap-1 text-[12.5px] font-bold text-primary">
              {t.details} <ChevronDown className="h-3.5 w-3.5 transition group-open:rotate-180" />
            </summary>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px] text-muted-foreground">
              {s.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </details>
        ) : null}
      </article>
    </li>
  );
}

function CareerTimeline({ onOpenCv }: { onOpenCv: () => void }) {
  const t = useT();
  const [all, setAll] = useState(false);
  const shown = all ? WORK : WORK.slice(0, VISIBLE_STATIONS);
  return (
    <section className="card-surface scroll-mt-28 p-5 sm:p-7" id="werdegang">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-[17px] font-extrabold tracking-tight">{t.careerTitle}</h2>
          <p className="mt-1 text-[13px] text-muted-foreground">{t.careerSub}</p>
        </div>
        <button type="button" onClick={onOpenCv} className="btn-hsv">
          <FileText className="h-4 w-4" /> {t.viewCv} <Lock className="h-3.5 w-3.5 opacity-80" />
        </button>
      </div>
      <ol className="timeline mt-5 grid gap-3">
        {shown.map((s) => <StationItem key={s.org + s.period} s={s} />)}
      </ol>
      {all ? (
        <>
          <h3 className="mb-3 mt-6 flex items-center gap-2 text-[14px] font-extrabold"><GraduationCap className="h-4 w-4 text-primary" /> {t.education}</h3>
          <ol className="timeline grid gap-3">
            {EDUCATION.map((s) => <StationItem key={s.org} s={s} />)}
          </ol>
        </>
      ) : null}
      <div className="mt-5 grid gap-2 sm:grid-cols-[1fr_auto]">
        <button type="button" className="btn-soft" aria-expanded={all}
          onClick={() => { const next = !all; setAll(next); if (!next) scrollToId("werdegang"); }}>
          {all ? t.showLess : t.showAll(WORK.length - VISIBLE_STATIONS + EDUCATION.length)}
          <ChevronDown className={cn("h-4 w-4 transition", all && "rotate-180")} />
        </button>
        <button type="button" className="btn-soft" onClick={() => scrollToId("kartenkopf")}>
          <ArrowLeft className="h-4 w-4" /> {t.backTop}
        </button>
      </div>
    </section>
  );
}

function CvModal({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const t = useT();
  const backToCareer = () => { onOpenChange(false); setTimeout(() => scrollToId("werdegang"), 150); };
  return (
    <Modal open={open} onOpenChange={onOpenChange} title={t.cvTitle} description={t.cvDesc} fullOnMobile>
      <div className="grid place-items-center gap-4 px-2 py-6 text-center">
        <span className="icon-badge h-16 w-16"><Lock className="h-7 w-7" /></span>
        <p className="max-w-sm text-[14px] leading-relaxed text-muted-foreground">{t.cvText}</p>
        <div className="grid w-full max-w-xs gap-2">
          <Link to="/privat" className="btn-hsv min-h-12"><Lock className="h-4 w-4" /> {t.toPrivate}</Link>
          <button type="button" className="btn-soft min-h-12" onClick={backToCareer}><ArrowLeft className="h-4 w-4" /> {t.backToCareer}</button>
        </div>
      </div>
    </Modal>
  );
}

function AwardsSection() {
  const t = useT();
  return (
    <section className="card-surface p-5 sm:p-7" id="auszeichnungen">
      <h2 className="flex items-center gap-2 text-[17px] font-extrabold tracking-tight"><Trophy className="h-4 w-4 text-primary" /> {t.awardsTitle}</h2>
      <ul className="mt-3.5 grid gap-2">
        {t.awards.map((i) => (
          <li key={i.t} className="tile px-3.5 py-2.5">
            <strong className="block text-[13.5px] font-bold text-foreground">{i.t}</strong>
            <span className="text-[12.5px] text-muted-foreground">{i.d}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function InterestsSection() {
  const t = useT();
  return (
    <section className="card-surface scroll-mt-28 p-5 sm:p-7" id="interessen">
      <h2 className="flex items-center gap-2 text-[17px] font-extrabold tracking-tight"><Heart className="h-4 w-4 text-primary" /> {t.interestsTitle}</h2>
      <ul className="mt-3.5 flex flex-wrap gap-2">
        {t.interests.map((x) => <li key={x} className="chip">{x}</li>)}
      </ul>
    </section>
  );
}

function KarriereSection() {
  const t = useT();
  return (
    <section className="card-surface scroll-mt-28 p-5 sm:p-7" id="karriere">
      <h2 className="flex items-center gap-2 text-[17px] font-extrabold tracking-tight"><Award className="h-4 w-4 text-primary" /> {t.karriereTitle}</h2>
      <div className="mt-3.5 grid gap-2 sm:grid-cols-2">
        {WORK.filter((w) => w.logo === "hsv").map((w) => (
          <div key={w.period} className="tile flex items-center gap-3 p-3.5">
            <span className="timeline-logo"><img className="h-full w-full object-cover" src={HSV_LOGO.src} alt="HSV-Logo" /></span>
            <div className="min-w-0">
              <strong className="block text-[13.5px] font-bold text-foreground">{w.role}</strong>
              <span className="text-[12px] font-semibold text-primary">{w.period.replace("{now}", t.periodNow)}</span>
            </div>
          </div>
        ))}
      </div>
      <a className="btn-hsv mt-4 w-full" href="https://www.hsv.de/karriere" rel="noopener noreferrer" target="_blank">
        {t.portal} <ExternalLink className="h-4 w-4" />
      </a>
    </section>
  );
}

function LanguagesSection() {
  const t = useT();
  return (
    <section className="card-surface scroll-mt-28 p-5 sm:p-7" id="sprachen">
      <h2 className="flex items-center gap-2 text-[17px] font-extrabold tracking-tight"><Languages className="h-4 w-4 text-primary" /> {t.languagesTitle}</h2>
      <ul className="mt-4 grid gap-5">
        {LANGUAGES.map((l) => {
          const [name, levelText] = t.languages[l.code] ?? [l.code, ""];
          const pct = Math.round((l.level / CEFR.length) * 100);
          return (
            <li key={l.code}>
              <div className="flex items-center justify-between gap-3">
                <strong className="flex items-center gap-2.5 text-[14px] font-bold text-foreground">
                  <img src={`/site-assets/flags/${l.code}.svg`} alt={`${t.flagOf}: ${name}`} className="h-4 w-6 rounded-[3px] object-cover shadow-sm ring-1 ring-border" />
                  {name}
                </strong>
                <span className="text-[12px] font-semibold text-muted-foreground">{levelText}</span>
              </div>
              <div className="mt-2 grid grid-cols-6 gap-1" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${name}: ${levelText}`}>
                {CEFR.map((c, i) => (
                  <span key={c} className="level-seg" data-on={i < l.level ? "true" : undefined} style={{ animationDelay: `${i * 70}ms` }} />
                ))}
              </div>
              <div className="mt-1 grid grid-cols-6 gap-1 text-center text-[10px] font-bold text-muted-foreground" aria-hidden="true">
                {CEFR.map((c, i) => <span key={c} className={cn(i === l.level - 1 && "text-primary")}>{c}</span>)}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ aside */

function ActionsAside({ onQr }: { onQr: () => void }) {
  const t = useT();
  const copy = useCopy();
  const copyAll = () => copy(`Lasse Böttcher\nPlayer Care & Administration Sport · HSV Fußball AG\n${t.phone}: ${PHONE_DISPLAY}\n${t.email}: ${EMAIL}\n${ADDRESS}`, t.contactData);
  const row = "flex min-h-[60px] w-full items-center gap-3 rounded-2xl border border-white/15 bg-gradient-to-r from-hsv-blue to-primary-glow px-4 text-left text-[15px] font-bold text-white shadow-[0_10px_26px_rgba(3,18,38,0.3)] transition hover:-translate-y-0.5";
  return (
    <aside className="grid gap-2.5 lg:sticky lg:top-20 print:hidden">
      <button type="button" className={row} onClick={onQr}><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15"><QrCode className="h-5 w-5" /></span><span className="flex-1">{t.qrTitle}</span>›</button>
      <a className={row} href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.appointmentSubject)}&body=${encodeURIComponent(t.appointmentBody)}`}>
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15"><CalendarDays className="h-5 w-5" /></span><span className="flex-1">{t.appointment}</span>›
      </a>
      <div className="mt-1 grid grid-cols-2 gap-2 lg:grid-cols-1">
        <button type="button" className="btn-soft bg-card" onClick={copyAll}><Copy className="h-4 w-4" /> {t.copyContact}</button>
        <button type="button" className="btn-soft bg-card" onClick={() => window.print()}><Printer className="h-4 w-4" /> {t.print}</button>
      </div>
    </aside>
  );
}

function QrModal({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const t = useT();
  const copy = useCopy();
  const origin = useOrigin();
  const qr = (size: number) => `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=12&data=${encodeURIComponent(origin)}`;
  return (
    <Modal open={open} onOpenChange={onOpenChange} title={t.qrTitle} description={t.qrDesc}>
      <div className="grid gap-3">
        {origin ? <img src={qr(400)} alt={t.qrAlt} className="mx-auto aspect-square w-full max-w-[240px] rounded-2xl border border-border bg-white" /> : null}
        <a href={origin} className="tile block break-all px-3 py-2.5 text-center text-[13px] font-semibold text-primary">{origin}</a>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" className="btn-soft" onClick={() => copy(origin, t.link)}><Copy className="h-4 w-4" /> {t.copyLink}</button>
          <a className="btn-hsv" href={qr(900)} target="_blank" rel="noopener noreferrer"><Download className="h-4 w-4" /> {t.saveQr}</a>
        </div>
      </div>
    </Modal>
  );
}

function WalletModal({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const t = useT();
  return (
    <Modal open={open} onOpenChange={onOpenChange} title={t.walletTitle} description={t.walletDesc}>
      <div className="grid gap-3">
        <div className="grid grid-cols-2 gap-2">
          <a className="btn-hsv min-h-12" href={WALLET_APPLE}><Wallet className="h-4 w-4" /> Apple Wallet</a>
          <a className="btn-hsv min-h-12" href={WALLET_GOOGLE} target="_blank" rel="noopener noreferrer"><Wallet className="h-4 w-4" /> Google Wallet</a>
        </div>
        <p className="text-center text-[12.5px] text-muted-foreground">{t.scan}</p>
        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=12&data=${encodeURIComponent(WALLET_GOOGLE)}`} alt={t.walletQrAlt} className="mx-auto aspect-square w-full max-w-[190px] rounded-2xl border border-border bg-white" />
      </div>
    </Modal>
  );
}

/* ---------------------------------------------------------- games + table */

function Crest({ src, name }: { src: string; name: string }) {
  const t = useT();
  return <img src={src} alt={`${t.crest} ${name}`} loading="lazy" className="h-8 w-8 shrink-0 object-contain" />;
}

function MatchCard({ m }: { m: Match }) {
  const t = useT();
  const f = useFormatters();
  return (
    <li className="tile p-3.5">
      <div className="flex items-center justify-between gap-2 text-[11.5px] font-bold uppercase tracking-wide text-muted-foreground">
        <span>{f.date.format(new Date(m.kickoff))}</span>
        <span className={cn("rounded-full px-2.5 py-1 text-[10.5px]", m.isHome ? "badge-home" : "badge-away")}>{m.isHome ? t.home : t.away}</span>
      </div>
      <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2">
        <div className="flex min-w-0 items-center gap-2"><Crest src={m.home.icon} name={m.home.name} /><span className="truncate text-[13.5px] font-bold">{m.home.name}</span></div>
        <span className="rounded-lg bg-card px-2.5 py-1 text-[14px] font-extrabold tabular-nums">{m.score ?? "–:–"}</span>
        <div className="flex min-w-0 items-center justify-end gap-2"><span className="truncate text-right text-[13.5px] font-bold">{m.away.name}</span><Crest src={m.away.icon} name={m.away.name} /></div>
      </div>
      <p className="mt-2 text-[11.5px] text-muted-foreground">{m.matchday}</p>
      {!m.finished ? (
        <a className="btn-hsv mt-2.5 w-full" href={m.isHome ? "https://www.hsv.de/tickets" : "https://www.hsv.de/tickets/auswaerts"} target="_blank" rel="noopener noreferrer">
          <Ticket className="h-4 w-4" /> {t.tickets}
        </a>
      ) : null}
    </li>
  );
}

function TableBody({ rows, hsvRef }: { rows: TableRow[]; hsvRef?: Ref<HTMLTableRowElement> }) {
  return (
    <tbody>
      {rows.map((r) => {
        const isHsv = r.teamId === HSV_TEAM_ID;
        return (
          <tr key={r.teamId} ref={isHsv ? hsvRef : undefined} className={cn("border-t border-border", isHsv && "row-hsv")} aria-current={isHsv ? "true" : undefined}>
            <td className="px-2 py-2 tabular-nums">{r.rank}</td>
            <td className="px-2 py-2"><span className="flex min-w-0 items-center gap-2"><img src={r.icon} alt="" className="h-5 w-5 shrink-0 object-contain" loading="lazy" /><span className="truncate">{r.name}</span></span></td>
            <td className="px-2 py-2 text-right tabular-nums">{r.matches}</td>
            <td className="px-2 py-2 text-right tabular-nums">{r.goalDiff > 0 ? `+${r.goalDiff}` : r.goalDiff}</td>
            <td className="px-2 py-2 text-right font-extrabold tabular-nums">{r.points}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

function TableHead() {
  const t = useT();
  return (
    <thead className="sticky top-0 z-10 bg-secondary text-[10.5px] uppercase tracking-wide text-muted-foreground">
      <tr>
        <th className="px-2 py-2 text-left font-bold" scope="col">#</th>
        <th className="px-2 py-2 text-left font-bold" scope="col">{t.club}</th>
        <th className="px-2 py-2 text-right font-bold" scope="col">{t.played}</th>
        <th className="px-2 py-2 text-right font-bold" scope="col">{t.diff}</th>
        <th className="px-2 py-2 text-right font-bold" scope="col">{t.pts}</th>
      </tr>
    </thead>
  );
}

function Stand({ data }: { data: FootballData }) {
  const t = useT();
  const f = useFormatters();
  return (
    <p className="mt-3 text-right text-[11px] text-muted-foreground">
      {t.stand}: {f.stand.format(new Date(data.fetchedAt))} · {t.source}:{" "}
      <a className="underline underline-offset-2" href="https://www.openligadb.de/" target="_blank" rel="noopener noreferrer">OpenLigaDB</a>
    </p>
  );
}

function seasonLabel(season: number) {
  return `${season}/${String(season + 1).slice(2)}`;
}

function GamesAndTable({ onOpenTable }: { onOpenTable: () => void }) {
  const t = useT();
  const { data } = useSuspenseQuery(footballQuery);
  const top = useMemo(() => {
    const t5 = data.table.slice(0, 5);
    const hsv = data.table.find((r) => r.teamId === HSV_TEAM_ID);
    return hsv && hsv.rank > 5 ? [...t5, hsv] : t5;
  }, [data.table]);

  return (
    <div className="mt-4 grid gap-4 lg:grid-cols-2">
      <section className="card-surface scroll-mt-28 p-5 sm:p-7" id="spiele">
        <h2 className="flex items-center gap-2 text-[17px] font-extrabold tracking-tight"><CalendarDays className="h-4 w-4 text-primary" /> {t.gamesTitle}</h2>
        <p className="mt-1 flex items-center gap-2 text-[12.5px] text-muted-foreground">
          {t.gamesSub} {seasonLabel(data.season)}
          {data.ok ? <span className="live-dot">{t.live}</span> : null}
        </p>
        {!data.ok ? <p className="tile mt-4 p-3.5 text-[13px] text-muted-foreground">{t.liveDown}</p> : null}
        {data.upcoming.length ? (
          <>
            <h3 className="mb-2 mt-4 text-[13px] font-extrabold uppercase tracking-wide text-primary">{t.next}</h3>
            <ul className="grid gap-2.5">{data.upcoming.map((m) => <MatchCard key={m.id} m={m} />)}</ul>
          </>
        ) : null}
        {data.recent.length ? (
          <details className="group mt-4">
            <summary className="btn-soft w-full cursor-pointer list-none">{t.last} <ChevronDown className="h-4 w-4 transition group-open:rotate-180" /></summary>
            <ul className="mt-2.5 grid gap-2.5">{data.recent.map((m) => <MatchCard key={m.id} m={m} />)}</ul>
          </details>
        ) : null}
        <div className="tile mt-4 p-3.5">
          <p className="text-[13px] text-muted-foreground">{t.ticketInfo}</p>
          <a className="btn-soft mt-2.5 w-full bg-card" href="https://www.hsv.de/tickets" target="_blank" rel="noopener noreferrer"><Ticket className="h-4 w-4" /> {t.ticketShop}</a>
        </div>
        <Stand data={data} />
      </section>

      <section className="card-surface scroll-mt-28 p-5 sm:p-7" id="tabelle">
        <h2 className="flex items-center gap-2 text-[17px] font-extrabold tracking-tight"><Trophy className="h-4 w-4 text-primary" /> {t.tableTitle}</h2>
        <p className="mt-1 text-[12.5px] text-muted-foreground">Bundesliga · {t.season} {seasonLabel(data.season)}</p>
        {top.length ? (
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <table className="w-full table-fixed border-collapse text-[12.5px]">
              <colgroup><col className="w-8" /><col /><col className="w-10" /><col className="w-12" /><col className="w-11" /></colgroup>
              <TableHead />
              <TableBody rows={top} />
            </table>
          </div>
        ) : null}
        <button type="button" className="btn-hsv mt-4 w-full" onClick={onOpenTable} disabled={!data.table.length}>
          {t.fullTable(data.table.length || 18)}
        </button>
        <Stand data={data} />
      </section>
    </div>
  );
}

function TableModal({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const t = useT();
  const f = useFormatters();
  const { data } = useSuspenseQuery(footballQuery);
  const hsvRef = useRef<HTMLTableRowElement>(null);
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => hsvRef.current?.scrollIntoView({ block: "center", behavior: "smooth" }), 250);
    return () => clearTimeout(timer);
  }, [open]);
  return (
    <Modal open={open} onOpenChange={onOpenChange} title={t.tableModal} description={`${t.season} ${seasonLabel(data.season)} · ${t.stand} ${f.stand.format(new Date(data.fetchedAt))}`} wide fullOnMobile>
      <div className="rounded-xl border border-border">
        <table className="w-full table-fixed border-collapse text-[13px]">
          <colgroup><col className="w-9" /><col /><col className="w-10" /><col className="w-12" /><col className="w-11" /></colgroup>
          <TableHead />
          <TableBody rows={data.table} hsvRef={hsvRef} />
        </table>
      </div>
    </Modal>
  );
}

/* ------------------------------------------------------- footer + floating */

function Footer() {
  const t = useT();
  return (
    <footer className="mt-10 flex flex-col items-center gap-3 pb-6 text-center">
      <span className="block h-14 w-28 overflow-hidden rounded-lg border-2 border-white/85 bg-glass shadow-md">
        <img className="h-full w-full object-cover" alt="HSV-Logo" src="/site-assets/c68b1136d89a5e97.avif" srcSet="/site-assets/c68b1136d89a5e97.avif 1x, /site-assets/3967de9c2e8592c7.avif 2x, /site-assets/c552ca13e1a30c47.avif 3x" />
      </span>
      <p className="text-[13px] font-medium text-glass-muted">HSV · Lasse Böttcher</p>
      <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[12.5px] font-semibold text-glass-muted" aria-label={t.legal}>
        <Link className="underline underline-offset-4 hover:text-glass-foreground" to="/impressum">{t.imprint}</Link>
        <Link className="underline underline-offset-4 hover:text-glass-foreground" to="/datenschutz">{t.privacy}</Link>
        <Link className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-glass-foreground" to="/privat"><Lock className="h-3 w-3" /> {t.privateArea}</Link>
      </nav>
    </footer>
  );
}

/** Fixed bar on every screen size: the essentials plus a compact menu. */
function BottomBar({ onWallet, onQr, dark, onToggleTheme }: { onWallet: () => void; onQr: () => void; dark: boolean; onToggleTheme: () => void }) {
  const t = useT();
  const [menuOpen, setMenuOpen] = useState(false);
  const go = (id: string) => { setMenuOpen(false); setTimeout(() => scrollToId(id), 80); };
  const item = "bottom-item";
  return (
    <nav className="glass-bar fixed bottom-3 left-1/2 z-40 grid w-[calc(100%-1.5rem)] max-w-[520px] -translate-x-1/2 grid-cols-5 gap-1 rounded-2xl p-1 text-glass-foreground print:hidden" aria-label={t.quickActions}>
      <a className={item} href={`tel:${PHONE}`}><Phone className="h-4 w-4" />{t.call}</a>
      <a className={item} href={`mailto:${EMAIL}`}><Mail className="h-4 w-4" />{t.email}</a>
      <button type="button" className={cn(item, "bottom-item--primary")} onClick={downloadVcard} aria-label={t.saveLong}><Download className="h-4 w-4" />{t.save} .vcf</button>
      <button type="button" className={cn(item, "bottom-item--primary")} onClick={onWallet}><Wallet className="h-4 w-4" />{t.wallet}</button>
      <Popover open={menuOpen} onOpenChange={setMenuOpen}>
        <PopoverTrigger className={item} aria-label={t.menu}><Menu className="h-4 w-4" />{t.menu}</PopoverTrigger>
        <PopoverContent side="top" align="end" sideOffset={10} className="glass-panel w-56 p-1.5">
          <div className="grid gap-0.5">
            {(["kontakt", "werdegang", "spiele"] as const).map((id) => {
              const Icon = NAV.find((n) => n.id === id)!.icon;
              return (
                <button key={id} type="button" className="menu-item" onClick={() => go(id)}><Icon className="h-4 w-4 text-primary" /> {t.nav[id]}</button>
              );
            })}
            <button type="button" className="menu-item" onClick={() => { setMenuOpen(false); onQr(); }}><QrCode className="h-4 w-4 text-primary" /> {t.qrTitle}</button>
            <button type="button" className="menu-item" onClick={onToggleTheme}>
              {dark ? <Sun className="h-4 w-4 text-primary" /> : <Moon className="h-4 w-4 text-primary" />} {dark ? t.light : t.dark}
            </button>
            <Link to="/privat" className="menu-item text-primary"><Lock className="h-4 w-4" /> {t.privateArea}</Link>
          </div>
        </PopoverContent>
      </Popover>
    </nav>
  );
}

/** Round up/down buttons for the whole page. */
function ScrollButtons() {
  const t = useT();
  const [pos, setPos] = useState({ top: true, bottom: false });
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPos({ top: window.scrollY < 80, bottom: window.scrollY > max - 80 });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  return (
    <div className="fixed bottom-24 right-3 z-40 grid gap-2 sm:right-5 print:hidden" role="group" aria-label={t.scrollNav}>
      <button type="button" className="fab" disabled={pos.top} aria-label={t.up} title={t.up} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <ArrowUp className="h-5 w-5" />
      </button>
      <button type="button" className="fab" disabled={pos.bottom} aria-label={t.down} title={t.down} onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })}>
        <ArrowDown className="h-5 w-5" />
      </button>
    </div>
  );
}
