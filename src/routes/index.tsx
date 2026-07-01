import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Sparkles,
  Calendar,
  Star,
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  Ban,
  Check,
  X,
  ArrowRight,
  Trophy,
  Linkedin,
} from "lucide-react";

const CTA_URL = "https://app.iclosed.io/e/visionaryplans/session-visionary-plans";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LinkedAgent — L'agent IA qui remplace vos setters" },
      {
        name: "description",
        content:
          "Remplacez vos setters par un agent IA qui prend en charge l'intégralité de votre acquisition LinkedIn 24/7 et vous ramène des appels qualifiés chaque semaine.",
      },
      { property: "og:title", content: "LinkedAgent — L'agent IA qui remplace vos setters" },
      {
        property: "og:description",
        content:
          "Un super-agent IA qui remplace vos setters et pilote toute votre acquisition 24/7 — contenu, prospection, DM, qualification.",
      },
    ],
  }),
  component: Index,
});

function Cta({ children, variant = "primary", className = "" }: { children: React.ReactNode; variant?: "primary" | "ghost"; className?: string }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all";
  const styles =
    variant === "primary"
      ? "bg-[color:var(--brand)] text-white shadow-[0_10px_40px_-10px_var(--brand)] hover:brightness-110"
      : "border border-white/10 bg-white/5 text-white hover:bg-white/10";
  return (
    <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--brand)]/30 bg-[color:var(--brand)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-light)]">
      {children}
    </span>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#070b14]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--brand-deep)] shadow-[0_4px_20px_-2px_var(--brand)]">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold">
            Linked<span className="text-[color:var(--brand-light)]">Agent</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#comment" className="text-sm font-medium text-[color:var(--brand-light)] hover:text-white">Comment ça marche</a>
          <a href="#comparaison" className="text-sm font-medium text-[color:var(--brand-light)] hover:text-white">Comparaison</a>
          <a href="#calculateur" className="text-sm font-medium text-[color:var(--brand-light)] hover:text-white">Calculateur</a>
          
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium md:inline-flex">
            🇫🇷 FR
          </button>
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
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[color:var(--brand)]/20 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Offre de lancement — places limitées
        </span>
        <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          <span className="text-white">Le seul agent IA qui</span>
          <br />
          <span className="bg-gradient-to-b from-[#cfe0ff] via-[#7eb0ff] to-[#3b82f6] bg-clip-text text-transparent">
            garantit des appels qualifiés
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
          Le système Agentique High Ticket™ qui remplit votre agenda d'appels qualifiés 24h/24 — même quand vous dormez. Sans ads, sans contenu à créer, sans setter, sans DM à gérer : <span className="font-semibold text-white">100% en autopilote</span>.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Cta>Réserver un appel gratuit <ArrowRight className="h-4 w-4" /></Cta>
          <a href="#comment" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
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
    <div className="relative mt-20">
      <div className="absolute -inset-4 rounded-3xl bg-[color:var(--brand)]/20 blur-3xl" />
      <div className="relative rounded-2xl border border-white/10 bg-[#0a1020]/90 p-6 shadow-2xl backdrop-blur">
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
    { c: "HE", n: "Houdaifa Elanoui", r: "Fondateur · Agence SaaS", color: "from-blue-500 to-blue-700", linkedin: "https://www.linkedin.com/in/houdaifa-el-aouni/", q: "24 appels qualifiés le premier mois sans avoir à gérer un seul setter. J'ai signé plusieurs clients sans problèmes !" },
    { c: "JM", n: "Jean-Pierre Martin", r: "Coach Business", color: "from-purple-500 to-purple-700", linkedin: "https://www.linkedin.com/in/jean-pierre-martin-5953102a9/", q: "J'avais essayé gojiberry, bereach, un setter… rien ne marchait vraiment. LinkedAgent a remplacé tout ça et j'ai enfin un flux constant d'appels. Une folie furieuse." },
    { c: "SP", n: "Sarah Piotrowski", r: "Consultant Tech", color: "from-cyan-500 to-cyan-700", linkedin: "https://www.linkedin.com/in/sarahpiotrowski/", q: "Je gagne 25 h par semaine. Le contenu, les DM, la prospection - tout est géré sans setter. Je me concentre uniquement sur les calls." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center text-sm text-white/50">
          <div className="mb-2 flex justify-center gap-1 text-white/30">
            {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
          </div>
          4.9/5 — basé sur les retours clients
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.n} className="rounded-2xl border border-white/10 bg-white/[.02] p-6">
              <div className="mb-4 flex gap-0.5 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-white/85 leading-relaxed">"{r.q}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${r.color} text-sm font-bold`}>{r.c}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold">{r.n}</div>
                  <div className="text-xs text-white/50">{r.r}</div>
                </div>
                <a
                  href={r.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
                  aria-label={`Profil LinkedIn de ${r.n}`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
            Vous installez le système Agentique High Ticket™ vous-même — pas besoin d'équipe ni de compétences techniques. Dès la fin de la première semaine, les premiers appels qualifiés tombent automatiquement dans votre agenda.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <StepCard
            num="01"
            title="Installez l'agent"
            body="Connectez l'agent à un compte LinkedIn en quelques clics. Aucune compétence technique requise — tout est prêt à l'emploi."
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
            body="Il prend le relais sur toute votre acquisition — prospection, conversations, qualification — 24h/24, 7j/7."
            items={["Prospection ciblée & demandes de connexion", "Conversations & qualification des prospects", "Réponses aux DM en continu", "Appels qualifiés directement dans votre agenda"]}
          />
          <StepCard
            num="04"
            title="Donnez-lui du feedback"
            body="Chaque semaine, vous affinez l'agent avec un simple feedback — et on vous accompagne en coaching pour le rendre encore plus performant."
            items={["L'agent s'améliore chaque semaine", "1 appel de coaching par semaine", "Optimisation continue des résultats"]}
          />
        </div>
      </div>
    </section>
  );
}

function StepCard({ num, title, body, items, highlight }: { num: string; title: string; body: string; items: string[]; highlight?: boolean }) {
  return (
    <div className={`relative rounded-2xl border p-8 ${highlight ? "border-[color:var(--brand)]/40 bg-[color:var(--brand)]/[.04] shadow-[0_0_60px_-20px_var(--brand)]" : "border-white/10 bg-white/[.02]"}`}>
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
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight">
            <span className="text-white">Pourquoi un </span>
            <span className="bg-gradient-to-b from-[#cfe0ff] via-[#7eb0ff] to-[#3b82f6] bg-clip-text text-transparent">
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
              "Abonnements qui s'accumulent — facture salée",
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
              "Turnover constant — il faut tout réexpliquer",
            ]}
          />
          <CompCard
            title="Système Agentique High Ticket™"
            sub="Le système que vous installez et possédez"
            highlight
            items={[
              "~26 h/semaine économisées (prospection, DM, posts…)",
              "Tout-en-un — prospection, contenu, DM, qualification",
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
      className={`rounded-2xl border p-7 ${
        highlight
          ? "border-[color:var(--brand)]/50 bg-[color:var(--brand)]/[.04] shadow-[0_0_60px_-20px_var(--brand)]"
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

function Guarantee() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-3xl border border-[color:var(--brand)]/40 bg-gradient-to-b from-[color:var(--brand)]/[.06] to-transparent p-12 shadow-[0_0_80px_-30px_var(--brand)]">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Garantie 0 risque
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Vous ne gagnez pas d'argent ?<br />
              <span className="bg-gradient-to-r from-[color:var(--brand-light)] to-white/40 bg-clip-text text-transparent">Nous non plus.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Vous payez uniquement si les résultats ont été atteints (le nombre d'appels mensuels) — formalisé par contrat.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
              {[
                { e: "🤝", t: "Contrat clair", s: "Engagement écrit sur les résultats" },
                { e: "💸", t: "Paiement après", s: "Vous payez quand les appels arrivent" },
                { e: "🎯", t: "VOS critères", s: "Vous validez la qualité des leads" },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-white/10 bg-white/[.03] p-5 text-left">
                  <div className="text-2xl">{x.e}</div>
                  <div className="mt-3 font-semibold">{x.t}</div>
                  <div className="mt-1 text-sm text-white/60">{x.s}</div>
                </div>
              ))}
            </div>
            <div className="mt-10"><Cta>Discuter de la garantie <ArrowRight className="h-4 w-4" /></Cta></div>
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
            Entrez vos chiffres — nous calculons exactement le nombre d'appels qualifiés à viser pour atteindre votre objectif.
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

function BookCall() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionLabel>Réservez un appel</SectionLabel>
        <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">Discutons de vos résultats</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/65">
          30 minutes pour valider que LinkedAgent est fait pour votre offre — et obtenir votre devis personnalisé. Pas de pression, pas de pitch agressif. Juste un échange honnête.
        </p>
        <div className="mt-10"><a href="https://app.iclosed.io/e/visionaryplanspro/session-visionary-plans" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_-10px_var(--brand)] transition hover:brightness-110">Réserver mon appel <ArrowRight className="h-4 w-4" /></a></div>
      </div>
    </section>
  );
}

function Pricing() {
  const [target, setTarget] = useState(20);
  return (
    <section id="tarifs" className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-300">
          🚀 Offre de lancement — places limitées
        </span>
        <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
          Choisissez votre niveau <span className="bg-gradient-to-r from-[color:var(--brand-light)] to-white/40 bg-clip-text text-transparent">d'appels qualifiés</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/65">
          Un seul forfait, totalement modulable selon votre objectif mensuel. Garantie de résultats — sinon vous ne payez pas. Le tarif vous est communiqué pendant l'appel.
        </p>
        <div className="relative mt-12 rounded-3xl border border-[color:var(--brand)]/40 bg-[#0a1020]/80 p-10 text-left shadow-[0_0_80px_-30px_var(--brand)]">
          <div className="absolute left-1/2 -top-4 -translate-x-1/2 rounded-full bg-[color:var(--brand)] px-5 py-1.5 text-xs font-bold uppercase tracking-wider">Forfait unique</div>
          <h3 className="text-3xl font-bold">Scaling Partner</h3>
          <p className="mt-2 text-sm text-white/60">Vous choisissez votre objectif mensuel d'appels qualifiés</p>
          <div className="mt-7 rounded-xl border border-white/10 bg-white/[.03] p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/50">Garantie de résultats</div>
            <div className="mt-2 flex items-baseline gap-3">
              <div className="text-6xl font-bold">{target}</div>
              <div className="text-white/65">appels qualifiés / mois</div>
            </div>
            <input type="range" min={10} max={200} value={target} onChange={(e) => setTarget(+e.target.value)} className="brand-range mt-5 w-full" />
            <div className="mt-2 flex justify-between text-xs text-white/45"><span>10</span><span>100</span><span>200+</span></div>
          </div>
          <ul className="mt-7 space-y-3">
            {["Contrôle total sur la qualité des leads", "Contrat & paiement uniquement après résultats", "Optimisation continue & accompagnement dédié", "Pas d'engagement"].map((i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm"><CheckCircle2 className="h-4 w-4 text-[color:var(--brand-light)]" /><span className="text-white/85">{i}</span></li>
            ))}
          </ul>
          <div className="mt-8"><Cta className="w-full">Obtenir le tarif en appel <ArrowRight className="h-4 w-4" /></Cta></div>
          <p className="mt-4 text-center text-xs text-white/45">Le prix vous est partagé directement en appel — adapté à votre offre, votre cible et le volume d'appels visé.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[color:var(--brand)] to-[color:var(--brand-deep)]">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">Linked<span className="text-[color:var(--brand-light)]">Agent</span></span>
          </div>
          <p className="mt-5 text-sm text-white/55">L'agent IA qui remplace vos setters et prend en charge l'intégralité de votre acquisition LinkedIn, 24h/24.</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-white/40">Navigation</div>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li><a href="#comment">Comment ça marche</a></li>
            <li><a href="#comparaison">Comparaison</a></li>
            <li><a href="#calculateur">Calculateur</a></li>
            <li><a href="#tarifs">Tarifs</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-white/40">Contact</div>
          <ul className="mt-5 space-y-3 text-sm text-white/75"><li><a href={CTA_URL} target="_blank" rel="noopener noreferrer">Réserver un appel</a></li></ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-between gap-3 border-t border-white/5 px-6 pt-6 text-xs text-white/40">
        <span>© 2026 LinkedAgent. Tous droits réservés.</span>
        <span>Non affilié à LinkedIn Corporation.</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-[#04060c] text-white">
      <Nav />
      <Hero />
      <TrustBar />
      <Testimonials />
      <HowItWorks />
      <Comparison />
      <Guarantee />
      <Calculator />
      <BookCall />
      
      <Ban className="hidden" /> {/* keep import */}
      <Footer />
    </div>
  );
}
