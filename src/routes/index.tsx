import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Zap,
  Calendar,
  Star,
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  Check,
  X,
  ArrowRight,
  Trophy,
  Linkedin,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import acquisitionEngineLogo from "@/assets/acquisition-engine-mark-transparent.png.asset.json";

const CTA_URL = "https://app.iclosed.io/e/martinvision/session-decouverte";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acquisition Engine™ : l'agent IA qui remplace vos setters" },
      {
        name: "description",
        content:
          "Remplacez vos setters par Acquisition Engine™, le système qui prend en charge votre acquisition LinkedIn et génère des appels qualifiés chaque semaine.",
      },
      { property: "og:title", content: "Acquisition Engine™ : l'agent IA qui remplace vos setters" },
      {
        property: "og:description",
        content:
          "Un super-agent IA qui remplace vos setters et pilote toute votre acquisition 24/7 : contenu, prospection, DM, qualification.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Acquisition Engine™ : l'agent IA qui remplace vos setters" },
      {
        name: "twitter:description",
        content: "Un système d'acquisition LinkedIn qui génère des appels qualifiés chaque semaine, sans setter à gérer.",
      },
    ],
  }),
  component: Index,
});

function Cta({ children, variant = "primary", className = "" }: { children: React.ReactNode; variant?: "primary" | "ghost"; className?: string }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-all";
  const styles =
    variant === "primary"
      ? "btn-premium"
      : "border border-[color:var(--brand)]/30 bg-[color:var(--brand)]/[.06] text-[color:var(--brand-light)] hover:bg-[color:var(--brand)]/15 hover:border-[color:var(--brand)]/60 transition-all duration-300";
  return (
    <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--brand)]/40 bg-[color:var(--brand)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-light)] shadow-[0_0_20px_-6px_var(--brand)]">
      {children}
    </span>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[color:var(--brand)]/15 bg-[#080603]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <img src={acquisitionEngineLogo.url} alt="" className="h-11 w-13 shrink-0 object-contain" />
          <span className="truncate text-base font-bold tracking-tight sm:text-lg">
            Acquisition <span className="gold-text-shine">Engine™</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#comment" className="text-sm font-medium text-[color:var(--brand-light)]/80 hover:text-[color:var(--brand-light)] transition-colors duration-300">Comment ça marche</a>
          <a href="#comparaison" className="text-sm font-medium text-[color:var(--brand-light)]/80 hover:text-[color:var(--brand-light)] transition-colors duration-300">Comparaison</a>
          <a href="#calculateur" className="text-sm font-medium text-[color:var(--brand-light)]/80 hover:text-[color:var(--brand-light)] transition-colors duration-300">Calculateur</a>
          <a href="#tarifs" className="text-sm font-medium text-[color:var(--brand-light)]/80 hover:text-[color:var(--brand-light)] transition-colors duration-300">Tarifs</a>

        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium md:inline-flex">
            🇫🇷 FR
          </div>
          <Cta className="!px-5 !py-2.5 !text-sm">Réserver un appel</Cta>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(227,185,78,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(227,185,78,.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[color:var(--brand)]/20 blur-[120px] animate-glow" />
      <div className="absolute -left-20 top-40 h-64 w-64 rounded-full bg-[color:var(--brand)]/10 blur-[100px] animate-float-slow" />
      <div className="absolute -right-20 top-72 h-72 w-72 rounded-full bg-[color:var(--brand)]/10 blur-[110px] animate-float-slow" style={{ animationDelay: "-3s" }} />
      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 text-center">
        <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-[color:var(--brand)]/40 bg-[color:var(--brand)]/10 px-4 py-1.5 text-xs font-medium text-[color:var(--brand-light)] shadow-[0_0_25px_-8px_var(--brand)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-light)] animate-blink" />
          Offre de lancement : places limitées
        </span>
        <h1 className="animate-rise mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl" style={{ animationDelay: ".1s" }}>
          <span className="text-white">Le seul agent IA qui vous</span>
          <br />
          <span className="gold-text-shine">
            garantit des appels qualifiés
          </span>
        </h1>
        <p className="animate-rise mx-auto mt-8 max-w-2xl text-lg text-white/70" style={{ animationDelay: ".2s" }}>
          Le système Agentique High Ticket™ qui remplit votre agenda d'appels qualifiés 24h/24, même quand vous dormez. Sans ads, sans contenu à créer, sans setter, sans DM à gérer : <span className="gold-mark font-semibold text-white">100% en autopilote</span>.
        </p>
        <div className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: ".3s" }}>
          <Cta>Réserver un appel gratuit <ArrowRight className="h-4 w-4" /></Cta>
          <a href="#comment" className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--brand)]/30 bg-[color:var(--brand)]/[.06] px-7 py-3.5 text-sm font-semibold text-[color:var(--brand-light)] transition-all duration-300 hover:bg-[color:var(--brand)]/15 hover:border-[color:var(--brand)]/60 hover:-translate-y-0.5">
            Voir comment ça marche
          </a>
        </div>
        <CalendarMock />
      </div>
    </section>
  );
}

function CalendarMock() {
  const days = [
    { d: "LUN", slots: [
      { t: "09:00", l: "Appel qualifié · Thom...", q: true },
      { t: "10:30", l: "Découverte · Sarah M.", q: false },
      { t: "14:00", l: "Appel qualifié · Antoin...", q: true },
      { t: "16:00", l: "Demo · SaaS startup", q: false },
    ]},
    { d: "MAR", slots: [
      { t: "09:30", l: "Appel qualifié · Julie B.", q: true },
      { t: "11:00", l: "Appel qualifié · Marc L.", q: true },
      { t: "13:30", l: "Découverte · Camille T.", q: false },
      { t: "15:00", l: "Appel qualifié · Pierre H.", q: true },
      { t: "17:00", l: "Appel qualifié · Léa D.", q: true },
    ]},
    { d: "MER", slots: [
      { t: "10:00", l: "Appel qualifié · Maxim...", q: true },
      { t: "11:30", l: "Découverte · Agence X", q: false },
      { t: "14:30", l: "Appel qualifié · Nora F.", q: true },
      { t: "16:30", l: "Appel qualifié · Hugo B.", q: true },
    ]},
    { d: "JEU", slots: [
      { t: "09:00", l: "Appel qualifié · Sophi...", q: true },
      { t: "10:30", l: "Appel qualifié · Romai...", q: true },
      { t: "13:00", l: "Découverte · Coach Pro", q: false },
      { t: "15:30", l: "Appel qualifié · Émilie V.", q: true },
      { t: "17:00", l: "Appel qualifié · David S.", q: true },
    ]},
    { d: "VEN", slots: [
      { t: "09:30", l: "Appel qualifié · Lucas G.", q: true },
      { t: "11:00", l: "Découverte · Agence ...", q: false },
      { t: "14:00", l: "Appel qualifié · Inès C.", q: true },
      { t: "15:30", l: "Appel qualifié · Paul M.", q: true },
    ]},
  ];
  return (
    <div className="relative mt-20 animate-rise" style={{ animationDelay: ".4s" }}>
      <div className="absolute -inset-4 rounded-3xl bg-[color:var(--brand)]/20 blur-3xl animate-glow" />
      <div className="relative rounded-2xl border border-[color:var(--brand)]/25 bg-[#0c0904]/90 p-6 shadow-2xl backdrop-blur">
        <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--brand)]/20">
              <Calendar className="h-5 w-5 text-[color:var(--brand-light)]" />
            </div>
            <div className="text-left">
              <div className="font-bold">Cette semaine</div>
              <div className="text-xs text-white/50">22 appels qualifiés bookés</div>
            </div>
          </div>
          <div className="flex gap-4 text-xs text-white/60">
            <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-[color:var(--brand)]" />Appel qualifié</div>
            <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-white/15" />Découverte</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-5">
          {days.map((d) => (
            <div key={d.d} className="rounded-lg border border-white/5 bg-white/[.02] p-3">
              <div className="mb-3 text-xs font-semibold tracking-wider text-white/40">{d.d}</div>
              <div className="space-y-2">
                {d.slots.map((s, i) => (
                  <div key={i} className={`rounded-md border p-2 text-left text-xs ${s.q ? "border-[color:var(--brand)]/40 bg-[color:var(--brand)]/15" : "border-white/10 bg-white/[.03]"}`}>
                    <div className="text-white/60">{s.t}</div>
                    <div className="mt-0.5 font-medium text-white truncate">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4 text-xs">
          <div className="flex items-center gap-2 text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Agent actif · prochain appel dans 14 min
          </div>
          <div className="flex gap-6 text-white/60">
            <span>Taux de conversion : <span className="text-white">28%</span></span>
            <span>Pipeline : <span className="text-white">68 leads chauds</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  const items = [
    { i: <Star className="h-4 w-4 text-[color:var(--brand-light)]" />, t: "4.9/5 retours clients" },
    { i: <Check className="h-4 w-4 text-[color:var(--brand-light)]" />, t: "Garantie résultats" },
    { i: <CreditCard className="h-4 w-4 text-[color:var(--brand-light)]" />, t: "Satisfait ou remboursé" },
    { i: <ShieldCheck className="h-4 w-4 text-[color:var(--brand-light)]" />, t: "Aucun risque de ban" },
  ];
  return (
    <div className="border-y border-white/5 bg-white/[.02]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-5 md:grid-cols-4">
        {items.map((x) => (
          <div key={x.t} className="flex items-center justify-center gap-2 text-sm text-white/70">
            {x.i}{x.t}
          </div>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const reviews = [
    { c: "BH", n: "Baptiste Hoguet", r: "Agence de scaling, France", color: "from-amber-500 to-yellow-700", linkedin: "https://www.linkedin.com/in/baptiste-hoguet-00a171336/", q: "34 appels qualifiés dès le premier mois, sans gérer un seul setter. Avant j'avais essayé Gojiberry, Bereach, un setter humain. Rien ne marchait vraiment. Aujourd'hui je tourne à 40 à 50 rdv qualifiés par mois et l'agence dépasse le million de CA annuel." },
    { c: "MR", n: "Myriam Renaud", r: "Closeuse indépendante, formation closing, France", color: "from-yellow-600 to-amber-800", linkedin: "https://www.linkedin.com/in/myriam-renaud-567563ba/", q: "Depuis janvier 2026, je génère 20 à 25 rdv qualifiés par mois sans toucher à quoi que ce soit. Mon taux de conversion dépasse 40%. Je me concentre uniquement sur les appels et la formation." },
    { c: "SL", n: "Samuel Lyon", r: "Infrastructure IA, France", color: "from-orange-500 to-amber-700", linkedin: "https://www.linkedin.com/in/samuel-lyon-b02465399/", q: "Parti de salarié dans la sécurité avec 0 rdv et 0 vente. Après 5 mois avec le système sur mon compte et celui de ma femme, on tourne à 35 à 40 rdv qualifiés par mois en continu." },
    { c: "JB", n: "Jessica Bensaid", r: "Coach commerciaux en entreprise, France", color: "from-amber-400 to-orange-600", linkedin: "https://www.linkedin.com/in/bensaidjessica/", q: "Je coach des équipes commerciales toute la journée. Je n'avais pas une minute à consacrer à ma propre prospection. Depuis l'installation, je génère 9 500€ par mois supplémentaires et plus de 25 rdv qualifiés, en y passant zéro minute." },
    { c: "BG", n: "Burdy Goureige", r: "Architecte solutions IA, secteur nettoyage, France", color: "from-yellow-500 to-amber-700", linkedin: "https://www.linkedin.com/in/burdy-goureige-0b15ab303/", q: "Il y a 2 semaines, j'ai signé un contrat à 8 000€ dans le nettoyage grâce au système. Je génère 20 rdv qualifiés par mois en automatique, sur une niche très ciblée où la prospection manuelle ne fonctionnait pas." },
    { c: "TB", n: "Talel Ben Selma", r: "Formateur setting et closing, tech et SaaS, France", color: "from-amber-600 to-yellow-800", linkedin: "https://www.linkedin.com/in/talel-ben-selma-05ba02261/", q: "Je scale les boîtes tech et SaaS au-delà de 100K€ par mois. Le système me génère 35 à 40 rdv qualifiés par mois et je l'installe maintenant chez mes propres clients tellement il est fiable." },
    { c: "HA", n: "Henry Acolaste", r: "France", color: "from-orange-600 to-amber-900", linkedin: "https://www.linkedin.com/in/henry-acolatse/", q: "Le système a été installé il y a quelques jours. 6 rendez-vous en 4 jours, les conversations sont qualitatives. Je n'avais pas imaginé des résultats aussi rapides." },
    { c: "EV", n: "Enzo Vidiella", r: "Tech et digital, implantation Europe, France", color: "from-yellow-500 to-orange-700", linkedin: "https://www.linkedin.com/in/enzo-vidiella/", q: "Premier rdv le jour même de l'installation. 5 rdv en 2 jours. J'accompagne des SaaS sur leur implantation en France et je n'ai plus à penser à la prospection." },
  ];

  const rowA = reviews.slice(0, 4);
  const rowB = reviews.slice(4);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--brand)]/[.06] blur-[140px]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center text-sm text-white/50">
          <div className="mb-2 flex justify-center gap-1 text-[color:var(--brand-light)]">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <div>
            <span className="gold-text font-bold text-lg">4.9/5</span>, basé sur les retours de <span className="gold-text font-semibold">plus de 50 clients</span>
          </div>
        </div>
      </div>

      <div className="relative space-y-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#050403] to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#050403] to-transparent md:w-32" />

        <TestimonialRow items={rowA} duration="70s" />
        <TestimonialRow items={rowB} duration="85s" reverse />
      </div>
    </section>
  );
}

type Testimonial = { c: string; n: string; r: string; color: string; linkedin?: string; q: string };

function TestimonialRow({ items, duration, reverse }: { items: Testimonial[]; duration: string; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="marquee-track"
      style={{ animationDuration: duration, animationDirection: reverse ? "reverse" : undefined }}
    >
      {doubled.map((r, idx) => (
        <div key={`${r.n}-${idx}`} className="mr-6 w-[340px] flex-shrink-0 md:w-[400px]">
          <div className="card-lift border-flow-gold h-full rounded-2xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-0.5 text-[color:var(--brand-light)]">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="rounded-full border border-[color:var(--brand)]/25 bg-[color:var(--brand)]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[color:var(--brand-light)]">
                Client vérifié
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/85">"{r.q}"</p>
            <div className="mt-6 flex items-center gap-3 border-t border-[color:var(--brand)]/10 pt-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${r.color} text-sm font-bold text-black/80`}>{r.c}</div>
              <div className="min-w-0 flex-1">
                <div className="truncate font-semibold">{r.n}</div>
                <div className="truncate text-xs text-white/50">{r.r}</div>
              </div>
              {r.linkedin && (
                <a
                  href={r.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[color:var(--brand)]/25 bg-[color:var(--brand)]/10 text-[color:var(--brand-light)] transition hover:bg-[color:var(--brand)]/25 hover:text-white"
                  aria-label={`Profil LinkedIn de ${r.n}`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="comment" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionLabel>Comment ça marche</SectionLabel>
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Installez le système en <span className="bg-gradient-to-r from-[color:var(--brand-light)] to-white/40 bg-clip-text text-transparent">quelques clics.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            Vous installez le système Agentique High Ticket™ vous-même. Pas besoin d'équipe ni de compétences techniques. Dès la fin de la première semaine, les premiers appels qualifiés tombent automatiquement dans votre agenda.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <StepCard
            num="01"
            title="Installez l'agent"
            body="Connectez l'agent à un compte LinkedIn en quelques clics. Aucune compétence technique requise : tout est prêt à l'emploi."
            highlight
            items={["Connexion en quelques clics", "Sur votre compte ou un compte dédié", "Aucune installation complexe"]}
          />
          <StepCard
            num="02"
            title="Personnalisez l'agent"
            body="Répondez à quelques questions pour que l'agent colle parfaitement à vous, votre offre et votre business."
            items={["Profil client idéal (ICP)", "Détails de votre offre high ticket", "Votre ton & angle marketing", "Critères de qualification"]}
          />
          <StepCard
            num="03"
            title="Lancez l'agent"
            body="Il prend le relais sur toute votre acquisition (prospection, conversations, qualification) 24h/24, 7j/7."
            items={["Prospection ciblée & demandes de connexion", "Conversations & qualification des prospects", "Réponses aux DM en continu", "Appels qualifiés directement dans votre agenda"]}
          />
          <StepCard
            num="04"
            title="Donnez-lui du feedback"
            body="Chaque semaine, vous affinez l'agent avec un simple feedback, et on vous accompagne en coaching pour le rendre encore plus performant."
            items={["L'agent s'améliore chaque semaine", "1 appel de coaching par semaine", "Optimisation continue des résultats"]}
          />
        </div>
      </div>
    </section>
  );
}

function StepCard({ num, title, body, items, highlight }: { num: string; title: string; body: string; items: string[]; highlight?: boolean }) {
  return (
    <div className={`card-lift relative rounded-2xl border p-8 ${highlight ? "border-flow-gold shadow-[0_0_60px_-20px_var(--brand)]" : "border-white/10 bg-white/[.02]"}`}>
      <div className="flex items-start gap-4">
        <div className={`text-5xl font-bold ${highlight ? "text-[color:var(--brand-light)]" : "text-white/15"}`}>{num}</div>
        <div className="flex-1 pt-1">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-3 text-white/65 leading-relaxed">{body}</p>
          <ul className="mt-6 space-y-2.5">
            {items.map((i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm">
                <CheckCircle2 className={`h-4 w-4 ${highlight ? "text-[color:var(--brand-light)]" : "text-white/40"}`} />
                <span className="text-white/80">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Comparison() {
  return (
    <section id="comparaison" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionLabel>Comparaison</SectionLabel>
          <h2 className="mx-auto mt-6 text-4xl font-bold tracking-tight">
            <span className="text-white">Pourquoi un </span>
            <span className="bg-gradient-to-b from-[#fdf3d0] via-[#e9c565] to-[#b98a1e] bg-clip-text text-transparent">
              système IA que vous
              <br />
              possédez bat tout le reste
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            Outils SaaS, setters, ghostwriters… nous avons tout testé. Voici ce que vous y gagnez réellement.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <CompCard
            title="Outils / SaaS / LLM"
            sub="Gojiberry, wallaxy, ChatGPT…"
            bad
            items={[
              "Leads peu qualifiés (souvent inactifs sur LinkedIn)",
              "Abonnements qui s'accumulent : facture salée",
              "Rien n'est personnalisé, peu de contexte = résultats médiocres",
              "Risque de ban du compte (connexion d'API, outils tiers…)",
            ]}
          />
          <CompCard
            title="Setter / Ghostwriter"
            sub="Freelances, agences…"
            bad
            items={[
              "Cher et rarement de qualité",
              "Pas scalable à grande échelle",
              "Manager une équipe & recruter = perte de temps",
              "Turnover constant : il faut tout réexpliquer",
            ]}
          />
          <CompCard
            title="Système Agentique High Ticket™"
            sub="Le système que vous installez et possédez"
            highlight
            items={[
              "~26 h/semaine économisées (prospection, DM, posts…)",
              "Tout-en-un : prospection, contenu, DM, qualification",
              "Contrôle total sur la qualité et VOS critères de qualif",
              "Aucun risque de ban (process avancé)",
            ]}
            extra={{
              icon: <Trophy className="h-4 w-4 text-yellow-400" />,
              text: "Formation complète + 1 appel coaching/semaine inclus",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function CompCard({
  title,
  sub,
  items,
  bad,
  highlight,
  extra,
}: {
  title: string;
  sub: string;
  items: string[];
  bad?: boolean;
  highlight?: boolean;
  extra?: { icon: React.ReactNode; text: string };
}) {
  return (
    <div
      className={`card-lift rounded-2xl border p-7 ${
        highlight
          ? "border-flow-gold shadow-[0_0_60px_-20px_var(--brand)]"
          : "border-white/10 bg-white/[.02]"
      }`}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-1 text-sm text-white/50">{sub}</p>
      <ul className="mt-6 space-y-3.5">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <span
              className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                bad ? "bg-red-500/15 text-red-400" : "bg-emerald-500/15 text-emerald-400"
              }`}
            >
              {bad ? <X className="h-3 w-3" /> : <Check className="h-3 w-3" />}
            </span>
            <span className="text-white/80">{i}</span>
          </li>
        ))}
        {extra && (
          <li className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center">{extra.icon}</span>
            <span className="font-medium text-white/90">{extra.text}</span>
          </li>
        )}
      </ul>
      {highlight && (
        <div className="mt-6">
          <Cta className="w-full">Réserver un appel</Cta>
        </div>
      )}
    </div>
  );
}

const AGENCY_ROWS: { bad: string; good: string }[] = [
  {
    bad: "Facture des prestations : posts, campagnes, rapports",
    good: "Installe un système complet de prospection automatisée, de A à Z",
  },
  {
    bad: "Aucun engagement sur les résultats",
    good: "Garantie contractuelle de rendez-vous qualifiés, ou remboursé intégralement",
  },
  {
    bad: "Se concentre sur un seul canal",
    good: "Approche centrée sur LinkedIn, combinant IA et setting automatisé",
  },
  {
    bad: "Reporting basé sur des indicateurs d'audience (vues, likes, abonnés)",
    good: "Un seul indicateur qui compte : les rendez-vous qualifiés obtenus",
  },
  {
    bad: "Retainer mensuel reconduit sans limite claire",
    good: "Deux formats définis dès le départ : accompagnement récurrent et installation ponctuelle du système",
  },
];

function AgencyVs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionLabel>Comparaison</SectionLabel>
          <h2 className="mx-auto mt-6 text-4xl font-bold tracking-tight">
            <span className="text-white">Agence classique vs </span>
            <span className="bg-gradient-to-b from-[#fdf3d0] via-[#e9c565] to-[#b98a1e] bg-clip-text text-transparent">
              Acquisition Engine™
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            Ce qui change concrètement quand vous arrêtez de payer pour des prestations et que vous installez un système.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[.02]">
          {/* En-tête */}
          <div className="grid md:grid-cols-2">
            <div className="flex items-center gap-3 border-b border-white/10 p-5 md:border-b-0 md:border-r">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-white/40">
                <X className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-white/40">
                Agence classique
              </span>
            </div>
            <div className="flex items-center gap-3 border-b border-white/10 bg-[color:var(--brand)]/[.07] p-5">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--brand)]/20 text-[color:var(--brand-light)]">
                <Check className="h-4 w-4" />
              </span>
              <span className="bg-gradient-to-b from-[#fdf3d0] via-[#e9c565] to-[#b98a1e] bg-clip-text text-sm font-semibold uppercase tracking-wider text-transparent">
                Acquisition Engine™
              </span>
            </div>
          </div>

          {/* Lignes */}
          {AGENCY_ROWS.map((row) => (
            <div key={row.bad} className="grid md:grid-cols-2">
              <div className="flex items-start gap-3 border-b border-white/[.06] p-5 md:border-r">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                  <X className="h-3 w-3" />
                </span>
                <span className="text-sm text-white/60">{row.bad}</span>
              </div>
              <div className="flex items-start gap-3 border-b border-white/[.06] bg-[color:var(--brand)]/[.04] p-5">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--brand)]/20 text-[color:var(--brand-light)]">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm font-medium text-white/85">{row.good}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-3xl border border-[color:var(--brand)]/40 bg-gradient-to-b from-[color:var(--brand)]/[.06] to-transparent p-12 shadow-[0_0_80px_-30px_var(--brand)]">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />RÉSULTATS DÈS LA 1RE SEMAINE
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight">
              Vos premiers appels qualifiés,
              <br />
              <span className="bg-gradient-to-b from-[#fdf3d0] via-[#e9c565] to-[#b98a1e] bg-clip-text text-transparent">
                dès la première semaine.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/70">
              Vous installez le système en quelques clics. Dès la fin de la première semaine, les premiers appels tombent automatiquement dans votre agenda, et on vous accompagne jusqu'à ce que la machine tourne toute seule.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
              {[
                { e: "🤝", t: "Installation express", s: "Le système en place en quelques clics, sans tech" },
                { e: "💸", t: "Résultats rapides", s: "Vos premiers appels dès la 1re semaine" },
                { e: "🎯", t: "Accompagnement", s: "Formation complète + coaching hebdo jusqu'au résultat" },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-white/10 bg-white/[.03] p-5 text-left">
                  <div className="text-2xl">{x.e}</div>
                  <div className="mt-3 font-semibold">{x.t}</div>
                  <div className="mt-1 text-sm text-white/60">{x.s}</div>
                </div>
              ))}
            </div>
            <div className="mt-10"><Cta>Discuter de l'accompagnement <ArrowRight className="h-4 w-4" /></Cta></div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Calculator() {
  const [price, setPrice] = useState(2000);
  const [closing, setClosing] = useState(20);
  const [revenue, setRevenue] = useState(10000);
  const clients = Math.max(1, Math.ceil(revenue / price));
  const calls = useMemo(() => Math.ceil((clients / (closing / 100))), [clients, closing]);
  return (
    <section id="calculateur" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionLabel>Calculateur</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Combien d'appels vous <span className="bg-gradient-to-r from-[color:var(--brand-light)] to-white/40 bg-clip-text text-transparent">faut-il chaque mois ?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            Entrez vos chiffres : nous calculons exactement le nombre d'appels qualifiés à viser pour atteindre votre objectif.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[.02] p-8 space-y-7">
            <Field label="Prix de votre offre High Ticket" value={`${price} €`}>
              <input type="range" min={500} max={50000} step={500} value={price} onChange={(e) => setPrice(+e.target.value)} className="brand-range" />
            </Field>
            <Field label="Votre taux de closing" value={`${closing} %`}>
              <input type="range" min={5} max={80} step={1} value={closing} onChange={(e) => setClosing(+e.target.value)} className="brand-range" />
            </Field>
            <Field label="Chiffre d'affaires mensuel cible" value={`${revenue} €`}>
              <input type="range" min={5000} max={500000} step={500} value={revenue} onChange={(e) => setRevenue(+e.target.value)} className="brand-range" />
            </Field>
          </div>
          <div className="rounded-2xl border border-[color:var(--brand)]/40 bg-[color:var(--brand)]/[.04] p-8 shadow-[0_0_60px_-20px_var(--brand)]">
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-light)]">Nombre d'appels mensuel cible</div>
            <div className="mt-3 text-7xl font-bold">{calls}</div>
            <div className="mt-2 text-white/65">appels qualifiés / mois</div>
            <div className="mt-8 space-y-3 border-t border-white/5 pt-6 text-sm">
              <Row k="Clients à signer / mois" v={String(clients)} />
              <Row k="Taux de closing" v={`${closing}%`} />
              <Row k="Objectif CA" v={`${revenue.toLocaleString("fr-FR")} €`} />
            </div>
            <div className="mt-7"><Cta className="w-full">Atteindre ce nombre <ArrowRight className="h-4 w-4" /></Cta></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, children }: { label: string; value: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <label className="text-sm text-white/70">{label}</label>
        <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm font-mono">{value}</span>
      </div>
      {children}
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return <div className="flex justify-between"><span className="text-white/60">{k}</span><span className="font-semibold">{v}</span></div>;
}

function CostOfInaction() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Combien coûte chaque mois <span className="gold-text">sans système&nbsp;?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/60">
            Ne rien changer n'est pas gratuit. C'est même la ligne de dépense la plus chère de ton budget. Elle n'apparaît juste nulle part.
          </p>
        </div>
        <div className="mx-auto mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[.025] font-mono shadow-[0_24px_80px_-35px_var(--brand)]">
          <div className="flex flex-col gap-2 border-b border-white/10 px-7 py-7 text-base font-semibold sm:flex-row sm:items-center sm:justify-between sm:text-lg">
            <span className="text-white/70">RDV manqués chaque mois, faute de système actif</span>
            <span className="whitespace-nowrap text-white">30 à 40</span>
          </div>
          <div className="flex flex-col gap-2 border-b border-white/10 px-7 py-7 text-base font-semibold sm:flex-row sm:items-center sm:justify-between sm:text-lg">
            <span className="text-white/70">Panier moyen par client signé</span>
            <span className="whitespace-nowrap text-white">× 5 000&nbsp;€</span>
          </div>
          <div className="flex flex-col gap-2 border-b border-white/10 px-7 py-7 text-base font-semibold sm:flex-row sm:items-center sm:justify-between sm:text-lg">
            <span className="text-white/70">Exemple avec un taux de closing à 30%</span>
            <span className="whitespace-nowrap text-white">9 à 12 clients signés perdus</span>
          </div>
          <div className="flex flex-col gap-2 bg-red-600 px-7 py-7 text-lg font-bold sm:flex-row sm:items-center sm:justify-between sm:text-xl">
            <span>CA perdu chaque mois</span>
            <span className="whitespace-nowrap">45 à 60 k€</span>
          </div>
        </div>
        <p className="mx-auto mt-10 text-center text-lg text-white/60">
          La question n'est pas «&nbsp;combien ça coûte&nbsp;», c'est «&nbsp;<strong className="text-white">combien coûte de ne pas le faire</strong>&nbsp;».
        </p>
      </div>
    </section>
  );
}

function BookCall() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const existing = document.getElementById("iclosed-widget-script");
    if (existing) return;
    const script = document.createElement("script");
    script.id = "iclosed-widget-script";
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="rdv" className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionLabel>Réservez un appel</SectionLabel>
        <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
          Discutons de <span className="bg-gradient-to-b from-[#fdf3d0] via-[#e9c565] to-[#b98a1e] bg-clip-text text-transparent">vos résultats</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/65">
          30 minutes pour valider que le système est fait pour votre offre et voir comment il s'installe chez vous.
        </p>
        <div className="relative mt-12">
          <div className="absolute -inset-4 rounded-3xl bg-[color:var(--brand)]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-[color:var(--brand)]/40 bg-[#0c0904]/90 shadow-[0_0_80px_-30px_var(--brand)]">
            <div
              className="iclosed-widget"
              data-url="https://app.iclosed.io/e/martinvision/session-decouverte"
              style={{ minWidth: "320px", width: "100%", height: "620px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "À partir de 2 000€",
      sub: "200€ par RDV qualifié, engagement minimum 10 RDV",
      badge: "Garanti contractuellement",
      floatingBadge: "",
      features: [
        "Campagne LinkedIn DFY (Done For You) : on gère tout",
        "Scraping et ciblage de ton ICP exact",
        "Messages de connexion et icebreakers personnalisés par IA",
        "Relances et gestion des conversations automatisées",
        "Reporting hebdomadaire (taux de réponse, RDV obtenus)",
        "Optimisation continue incluse sans surcoût",
        "Reconduction automatique au même tarif tant que tu es client",
      ],
      guarantee: "10 RDV qualifiés sur 30 jours, écrit et signé dans le contrat, remboursement intégral sous 72h si non atteint.",
      cta: "Réserver mon audit gratuit",
      highlight: false,
    },
    {
      name: "Scale",
      price: "À partir de 4 000€",
      sub: "20 RDV qualifiés par mois, engagement sur 30 jours renouvelable",
      badge: "",
      floatingBadge: "Le plus choisi",
      features: [
        "Tout ce qui est inclus dans Starter",
        "Volume doublé : 2 comptes LinkedIn gérés simultanément",
        "Ciblage multi-ICP (jusqu'à 3 profils de prospects différents)",
        "A/B test des séquences de messages en continu",
        "Intégration directe dans ton CRM (iClosed, Close, HubSpot)",
        "Rapport mensuel complet avec analyse des signaux de conversion",
        "Accès prioritaire à l'équipe pour les ajustements en cours de mois",
        "Reconduction automatique, aucun frais supplémentaire",
      ],
      guarantee: "20 RDV qualifiés par mois + 10 000€ de CA mensuel ajouté, écrit et signé dans le contrat, remboursement intégral sous 72h si non atteint.",
      cta: "Réserver mon audit gratuit",
      highlight: true,
    },
    {
      name: "Sur-mesure",
      price: "Sur devis",
      sub: "Conçu pour les ambitions sans plafond",
      badge: "",
      floatingBadge: "",
      features: [
        "Tout ce qui est inclus dans Scale",
        "Nombre de comptes LinkedIn illimité (multi-comptes)",
        "Ciblage sur plusieurs marchés simultanément (France, UK, US, etc.)",
        "Équipe dédiée : un gestionnaire de compte attitré",
        "Séquences rédigées sur-mesure par un copywriter",
        "Intégration complète dans ta stack (CRM, agenda, Slack, webhook)",
        "Tableau de bord personnalisé en temps réel",
        "Accompagnement stratégique mensuel avec Martin",
        "Conditions définies ensemble selon ta cible et ton marché",
      ],
      guarantee: "+40 RDV qualifiés par mois + 20 000€ de CA mensuel ajouté minimum, écrit et signé dans le contrat, remboursement intégral sous 72h si non atteint.",
      cta: "Demander un devis personnalisé",
      highlight: false,
    },
  ];

  return (
    <section id="tarifs" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-[color:var(--brand)]/[.05] blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionLabel>Tarifs</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Des résultats <span className="bg-gradient-to-r from-[color:var(--brand-light)] to-white/40 bg-clip-text text-transparent">garantis contractuellement.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            Chaque offre est adossée à une garantie écrite et signée dans le contrat. Si les RDV qualifiés ne sont pas au rendez-vous, remboursement intégral sous 72h.
          </p>
        </div>
        <div className="mt-16 grid items-stretch gap-6 pt-4 lg:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  name,
  price,
  sub,
  badge,
  floatingBadge,
  features,
  guarantee,
  cta,
  highlight,
}: {
  name: string;
  price: string;
  sub: string;
  badge: string;
  floatingBadge: string;
  features: string[];
  guarantee: string;
  cta: string;
  highlight: boolean;
}) {
  return (
    <div
      className={`card-lift relative flex h-full flex-col rounded-2xl border p-8 ${
        highlight
          ? "border-flow-gold shadow-[0_0_60px_-20px_var(--brand)] lg:scale-[1.03]"
          : "border-white/10 bg-white/[.02]"
      }`}
    >
      {floatingBadge && (
        <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
          <div className="btn-premium whitespace-nowrap rounded-full px-5 py-1.5 text-xs font-bold uppercase tracking-wider">
            {floatingBadge}
          </div>
        </div>
      )}
      <h3 className="text-2xl font-bold">{name}</h3>
      <div className="mt-4 text-3xl font-bold gold-text">{price}</div>
      <p className="mt-2 text-sm text-white/60">{sub}</p>
      {badge && (
        <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          <ShieldCheck className="h-3.5 w-3.5" />
          {badge}
        </span>
      )}
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--brand-light)]" />
            <span className="text-white/80">{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-xl border border-emerald-400/25 bg-emerald-400/[.06] p-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
          <ShieldCheck className="h-4 w-4" />
          Garantie contractuelle
        </div>
        <p className="mt-2 text-sm leading-relaxed text-white/80">{guarantee}</p>
      </div>
      <div className="mt-7">
        <Cta className="w-full">
          {cta} <ArrowRight className="h-4 w-4" />
        </Cta>
      </div>
    </div>
  );
}

const FAQ_ITEMS = [
  {
    question: "Combien de temps avant les premiers résultats ?",
    answer: "Les premiers rendez-vous tombent en moyenne dans les 6 jours suivant l'installation. Henry a eu 6 rdv en 4 jours. Enzo a eu son premier rdv le jour même. Sur 30 jours, la garantie contractuelle de 10 rdv minimum s'applique dans tous les cas, remboursement intégral sous 72h si non atteint.",
  },
  {
    question: "Et si ça ne marche pas pour mon industrie ?",
    answer: "On a livré des résultats dans le nettoyage, l'audit comptable, la tech, le SaaS, le coaching commercial, la gestion de patrimoine, l'infrastructure IA et le closing. Si lors de l'audit gratuit on estime que ton secteur ne permet pas de tenir la garantie, on te le dit avant de signer. On ne prend pas de client qu'on ne peut pas livrer.",
  },
  {
    question: "Je vais recevoir des touristes en call ?",
    answer: "Non. L'IA qualifie chaque prospect selon tes critères exacts avant de booker le rdv dans ton agenda. Tu définis qui est qualifié, l'IA filtre. Seules les personnes qui correspondent à ton ICP et qui ont confirmé leur intérêt se retrouvent dans ton agenda.",
  },
  {
    question: "Pourquoi LinkedIn plutôt qu'un seul autre canal ?",
    answer: "LinkedIn est le seul réseau où le prospect affiche lui-même son poste, son secteur, sa taille d'entreprise et son ancienneté. Ça permet un ciblage chirurgical impossible ailleurs. On opère en multi-comptes, ce qui signifie qu'une restriction sur un compte n'arrête pas ta prospection. Le cold email peut être ajouté en upsell pour les clients qui veulent doubler le volume sans dépendre d'un seul canal.",
  },
  {
    question: "Combien ça coûte ?",
    answer: "À partir de 200€ par rdv qualifié, avec un engagement minimum de 10 rdv garantis contractuellement, soit 2 000€. Des frais de setup sont appliqués une seule fois à l'installation, puis la reconduction se fait automatiquement au même tarif, sans aucun frais supplémentaire. L'offre Scale démarre à 4 000€ par mois pour 20 rdv garantis. Pour les volumes supérieurs à 40 rdv par mois, on établit un devis sur-mesure ensemble.",
  },
  {
    question: "Est-ce que je garde le contrôle sur ce qui est envoyé en mon nom ?",
    answer: "Oui. Avant le lancement, tu valides les messages, le ton, les critères de qualification et le profil de prospect ciblé. Chaque semaine tu reçois un reporting complet et tu peux demander des ajustements à tout moment. Le système tourne pour toi, pas à ta place sans te consulter.",
  },
  {
    question: "Est-ce que mon compte LinkedIn risque d'être banni ?",
    answer: "Non. On utilise un process avancé qui respecte les limites de LinkedIn. Zéro connexion d'API directe, zéro outil tiers risqué. Aucun de nos clients n'a subi de restriction depuis le lancement de Martin Vision.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">Questions fréquentes</h2>
        </div>
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-semibold transition-colors duration-300 hover:text-[color:var(--brand-light)] sm:text-lg"
                >
                  <span>{item.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[color:var(--brand-light)] transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  id={panelId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-6 text-sm leading-7 text-white/65 sm:text-base">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MeasuredResults() {
  const funnel = [
    { value: "840", label: "Demandes de connexion envoyées", detail: "par mois, par compte LinkedIn" },
    { rate: "Taux d'acceptation : 40%", value: "336", label: "Connexions acceptées" },
    { rate: "Taux de réponse au 1er message : 35%", value: "118", label: "Conversations engagées" },
    { rate: "Conversations devenues qualifiées : 25%", value: "30", label: "Conversations qualifiées" },
    { rate: "Taux de prise de rendez-vous : 40%", value: "12", label: "RDV qualifiés obtenus", detail: "par mois, par compte LinkedIn", final: true },
  ];

  const clientResults = [
    {
      avatars: [
        { initials: "BH", name: "Baptiste Hoguet", linkedin: "https://www.linkedin.com/in/baptiste-hoguet-00a171336/" },
        { initials: "TB", name: "Talel Ben Selma", linkedin: "https://www.linkedin.com/in/talel-ben-selma-05ba02261/" },
      ],
      role: "Associés · Agence de scaling, tech et SaaS",
      quote: "Associés, nous obtenons 40 à 50 rendez-vous calibrés par mois sans rien faire, avec des infopreneurs à plus de 5 000 $ par mois de chiffre d'affaires, pour les faire scaler à plus de 100 000 $ par mois de CA.",
      description: "Baptiste et Talel sont associés au sein d'Evo Incubator. Ensemble, ils accompagnent des infopreneurs réalisant plus de 5 000 $ par mois de CA et les font passer le cap des 100 000 $ par mois, sans toucher à la prospection.",
      metrics: [
        { value: "40–50", label: "RDV calibrés", detail: "/ mois, sans rien faire" },
        { value: "100 k$+", label: "CA scalé", detail: "/ mois pour leurs clients" },
      ],
    },
  ];

  const recentClients = [
    {
      initials: "EV",
      name: "Enzo Vidiella",
      role: "Jeune entrepreneur, tech & digital",
      color: "from-yellow-500 to-orange-700",
      linkedin: "https://www.linkedin.com/in/enzo-vidiella/",
      badge: "",
      quote: "Je suis à mon compte depuis plus d'1 an et j'aide les business dans la tech et le digital, comme les SaaS, à s'implémenter en Europe et plus précisément en France. En même pas 1 journée j'ai eu mon premier rendez-vous.",
      description: "Après plusieurs années à développer son activité dans la tech et le digital, Enzo connaît bien le défi auquel sont confrontés les entrepreneurs qui veulent accélérer : trouver de nouvelles opportunités sans passer leurs journées à prospecter. Il a donc décidé de tester une approche plus automatisée pour soutenir son développement commercial.",
      before: { label: "Install", value: "< 1 semaine" },
      after: { label: "Après", value: "5 RDV", detail: "en 4 jours" },
    },
    {
      initials: "HA",
      name: "Henry Acolaste",
      role: "France",
      color: "from-orange-600 to-amber-900",
      linkedin: "https://www.linkedin.com/in/henry-acolatse/",
      badge: "Dernier client signé",
      quote: "Le système a été installé il y a quelques jours et les conversations sont qualitatives, j'ai eu 6 rendez-vous en 4 jours.",
      description: "Henry vient tout juste de faire ses premiers pas avec le système. Quelques jours seulement après sa mise en production, les premières conversations commencent déjà à s'enchaîner. Une installation récente, mais des premiers signaux suffisamment concrets pour lui permettre de se projeter sur la suite.",
      before: { label: "Avant", value: "Prospection manuelle" },
      after: { label: "Après", value: "6 RDV", detail: "en 4 jours" },
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--brand)]/[.06] blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionLabel>Résultats</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Des résultats <span className="gold-text">mesurés</span>, pas des promesses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/65">
            Chiffres réels extraits de notre plateforme de prospection, mis à jour en septembre 2026.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-lg border border-white/10 bg-white/[.02]">
          <div className="flex flex-col gap-2 border-b border-white/10 px-6 py-5 font-mono text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <span>Campagne <strong className="text-white">Evo Incubator</strong> · infopreneurs à 5 000 $ minimum</span>
            <span>30 jours · données réelles</span>
          </div>
          <div className="grid lg:grid-cols-[1.35fr_.65fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="font-mono text-xs uppercase text-white/45">En moyenne, pour un compte LinkedIn sur nos campagnes</div>
              <div className="mt-6">
                {funnel.map((step, i) => (
                  <div key={step.label} className={i > 0 ? "mt-4 border-t border-white/5 pt-4" : ""}>
                    {step.rate && (
                      <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[color:var(--brand)]/25 bg-[color:var(--brand)]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[color:var(--brand-light)]">
                        <ArrowRight className="h-3 w-3" />
                        {step.rate}
                      </div>
                    )}
                    <div className="flex items-baseline justify-between gap-4">
                      <span className={`font-mono font-bold ${step.final ? "gold-text text-4xl sm:text-5xl" : "text-2xl text-white sm:text-3xl"}`}>{step.value}</span>
                      <span className="text-right text-sm text-white/60">{step.label}</span>
                    </div>
                    {step.detail && <div className="mt-1 text-right text-xs text-white/35">{step.detail}</div>}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1">
              <div className="border-r border-white/10 p-6 lg:border-b lg:border-r-0 lg:p-8">
                <div className="text-4xl font-bold text-white">2</div>
                <div className="mt-2 text-sm text-white/50">comptes LinkedIn pilotés simultanément</div>
              </div>
              <div className="p-6 lg:p-8">
                <div className="text-4xl font-bold text-white">5 000 $+</div>
                <div className="mt-2 text-sm text-white/50">CA minimum ciblé</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6">
          {clientResults.map((client) => (
            <article key={client.role} className="overflow-hidden rounded-lg border border-white/10 bg-white/[.02]">
              <div className="flex flex-wrap items-center gap-4 border-b border-white/10 p-6">
                <div className="flex -space-x-2">
                  {client.avatars.map((a) => (
                    <div key={a.initials} className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--brand)]/35 bg-[color:var(--brand)]/10 text-sm font-bold text-[color:var(--brand-light)] ring-2 ring-[#050403]">
                      {a.initials}
                    </div>
                  ))}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-white">{client.avatars.map((a) => a.name).join(" & ")}</h3>
                  <p className="mt-0.5 text-xs text-white/45">{client.role}</p>
                </div>
                <div className="flex gap-2">
                  {client.avatars.map((a) => (
                    <a key={a.linkedin} href={a.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Profil LinkedIn de ${a.name}`} className="text-[color:var(--brand-light)] transition-opacity hover:opacity-70">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
              <blockquote className="px-6 pt-6 text-sm leading-7 text-white/80">“{client.quote}”</blockquote>
              <p className="px-6 pt-4 text-xs leading-6 text-white/45">{client.description}</p>
              <div className="mt-6 grid grid-cols-2 border-t border-white/10">
                {client.metrics.map((metric, index) => (
                  <div key={metric.label} className={`p-6 ${index === 0 ? "border-r border-white/10" : ""}`}>
                    <div className="gold-text text-3xl font-bold sm:text-4xl">{metric.value}</div>
                    <div className="mt-2 text-xs font-semibold uppercase text-white/70">{metric.label}</div>
                    <div className="mt-1 text-xs text-white/40">{metric.detail}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <div className="text-center">
            <SectionLabel>Derniers clients signés</SectionLabel>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {recentClients.map((c) => (
              <article key={c.name} className="card-lift flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[.02]">
                <div className="flex flex-wrap items-center gap-4 border-b border-white/10 p-6">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${c.color} text-sm font-bold text-black/80`}>
                    {c.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white">{c.name}</h3>
                    <p className="mt-0.5 text-xs text-white/45">{c.role}</p>
                  </div>
                  {c.badge && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {c.badge}
                    </span>
                  )}
                  <a href={c.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Profil LinkedIn de ${c.name}`} className="text-[color:var(--brand-light)] transition-opacity hover:opacity-70">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
                <blockquote className="px-6 pt-6 text-sm leading-7 text-white/80">“{c.quote}”</blockquote>
                <p className="px-6 pt-4 text-xs leading-6 text-white/45">{c.description}</p>
                <div className="mt-auto grid grid-cols-2 border-t border-white/10">
                  <div className="border-r border-white/10 p-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/40">{c.before.label}</div>
                    <div className="mt-2 font-semibold text-white/70">{c.before.value}</div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-white/40">{c.after.label}</div>
                    <div className="gold-text mt-2 text-2xl font-bold">{c.after.value}</div>
                    <div className="mt-0.5 text-xs text-white/40">{c.after.detail}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://cas-clients.visionaryplansagency.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide"
          >
            Voir les cas clients <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[color:var(--brand)]/15 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <div className="flex items-center gap-3">
          <img src={acquisitionEngineLogo.url} alt="" className="h-14 w-16 object-contain" />
          <span className="text-lg font-bold">Acquisition <span className="gold-text-shine">Engine™</span></span>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/70">
          <span className="font-semibold text-white">Acquisition Engine™</span>
          <span aria-hidden="true">·</span>
          <span>Mentions légales</span>
          <span aria-hidden="true">·</span>
          <span>Politique de confidentialité</span>
          <span aria-hidden="true">·</span>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[color:var(--brand-light)]">Contact</a>
        </div>
        <div className="mt-5 text-[11px] text-white/35">
          © 2026 Acquisition Engine™. Tous droits réservés. Non affilié à LinkedIn Corporation.
        </div>
      </div>
    </footer>
  );
}

function Marquee() {
  const words = [
    "Appels qualifiés 24/7",
    "Zéro setter",
    "Prospection en autopilote",
    "DM gérés par l'IA",
    "Contenu automatique",
    "Qualification sur VOS critères",
    "Aucun risque de ban",
    "Coaching hebdo inclus",
  ];
  return (
    <div className="relative overflow-hidden border-y border-[color:var(--brand)]/15 bg-[color:var(--brand)]/[.03] py-4">
      <div className="marquee-track">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="mx-6 flex items-center gap-6 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-[color:var(--brand-light)]/80">
            {w}
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand)]/60" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-[#050403] text-white">
      <Nav />
      <Hero />
      <TrustBar />
      <Marquee />
      <Testimonials />
      <HowItWorks />
      <Comparison />
      <AgencyVs />
      <MeasuredResults />
      <Guarantee />
      <Calculator />
      <CostOfInaction />
      <Pricing />
      <BookCall />
      <FAQ />
      <Footer />
    </div>
  );
}
