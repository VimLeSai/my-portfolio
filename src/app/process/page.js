import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Watermark from '@/components/ui/Watermark';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
  title: 'Process — Portfolio',
  description:
    'From Discovery to Deployment — the engineering methodology behind every project.',
};

const phases = [
  {
    number: '01',
    title: 'Discovery',
    icon: 'search',
    duration: '1–2 weeks',
    color: 'var(--color-surface-container-highest)',
    textColor: 'var(--color-on-surface)',
    description:
      'Every system begins with ruthless clarification. I map business requirements to technical constraints, surface hidden complexity, and define the measurable outcomes that will determine success.',
    activities: [
      'Stakeholder interviews & requirement extraction',
      'Technical audit of existing infrastructure',
      'Competitive landscape & constraint mapping',
      'Risk identification and mitigation catalogue',
      'Definition of success metrics (SLOs, KPIs)',
    ],
    deliverables: [
      'Technical Brief',
      'Risk Register',
      'Architecture Decision Log (ADL) — draft',
    ],
  },
  {
    number: '02',
    title: 'Architecture',
    icon: 'hub',
    duration: '1–3 weeks',
    color: 'var(--color-primary-container)',
    textColor: 'var(--color-on-primary)',
    description:
      'I draft the structural blueprint — domain models, database schemas, and service boundaries. Every boundary is a deliberate decision; every abstraction earns its existence. Seams are installed early.',
    activities: [
      'Domain modelling & bounded context definition',
      'Data schema design and normalisation review',
      'API contract specification (OpenAPI / gRPC protobuf)',
      'Infrastructure topology and service mesh design',
      'Security threat modelling (STRIDE)',
    ],
    deliverables: [
      'System Design Document',
      'ER Diagrams',
      'API Spec v1',
      'Infrastructure as Code scaffold',
    ],
  },
  {
    number: '03',
    title: 'Development',
    icon: 'code',
    duration: '4–12 weeks',
    color: 'var(--color-secondary)',
    textColor: 'var(--color-on-secondary)',
    description:
      'High-fidelity development using modern stacks with schema attention to detail — test coverage, code review standards, and automated quality gates enforced from day one. No hero code.',
    activities: [
      'Feature development in vertical slices (outside-in)',
      'Unit, integration, and contract test suites',
      'Continuous integration with mandatory coverage thresholds',
      'Weekly architectural review sessions',
      'Performance profiling at every milestone',
    ],
    deliverables: [
      'Production-ready codebase',
      'Test suite (≥80% coverage)',
      'CI/CD pipeline',
      'Runbook draft',
    ],
  },
  {
    number: '04',
    title: 'Deployment',
    icon: 'rocket_launch',
    duration: '1–2 weeks',
    color: 'var(--color-tertiary-container)',
    textColor: 'var(--color-on-primary)',
    description:
      'Zero-downtime deployments, observability-first releases, and a structured rollout strategy. I treat every release as a controlled experiment — with rollback conditions defined before a single byte ships.',
    activities: [
      'Blue-green or canary deployment orchestration',
      'Observability stack setup (traces, metrics, logs)',
      'Load testing and chaos engineering (pre-prod)',
      'Incident response playbook creation',
      'Post-deployment health dashboards',
    ],
    deliverables: [
      'Deployment runbook',
      'Observability dashboard',
      'Post-mortem template',
      'SLO monitoring',
    ],
  },
];

const principles = [
  {
    icon: 'architecture',
    title: 'Seams Before Scale',
    desc: 'Any component expected to change in 18 months gets an abstraction layer today. Retrofitting seams is 10× more expensive than installing them early.',
  },
  {
    icon: 'verified',
    title: 'Explicit Trade-offs',
    desc: 'Every architectural compromise is documented with its context, alternatives considered, and the conditions that would invalidate the decision.',
  },
  {
    icon: 'monitor_heart',
    title: 'Observability-First',
    desc: 'A system that cannot be observed cannot be trusted. Telemetry, tracing, and structured logging are non-negotiable features, not afterthoughts.',
  },
  {
    icon: 'groups',
    title: 'Team as Infrastructure',
    desc: "The best systems are shaped by the teams who maintain them. Conway's Law is a design constraint, not a coincidence.",
  },
  {
    icon: 'auto_fix_high',
    title: 'Automate the Boring',
    desc: 'Manual processes are error-prone and slow. Any task performed more than twice gets automated; CI/CD is the heartbeat of every delivery pipeline.',
  },
  {
    icon: 'balance',
    title: 'The Three-Quarter Rule',
    desc: 'When evaluating shortcuts: will this decision hold at 75% of projected scale? If yes, ship. If no, invest now. The edge cases are where systems fail.',
  },
];

const caseStudySnippets = [
  {
    project: 'StringERP',
    phase: 'Architecture',
    insight:
      'Installed a single `ReportingRepository` seam at week 2, knowing the naive query layer would need replacement. The eventual migration took 4 days, not 4 months.',
    href: '/work/string-erp',
  },
  {
    project: 'Orion Gateway',
    phase: 'Deployment',
    insight:
      'Defined rollback conditions before go-live: P95 latency > 15ms or error rate > 0.1% triggers automatic revert. Zero incidents in first 90 days.',
    href: '/work/orion-gateway',
  },
  {
    project: 'Pulse CRM',
    phase: 'Discovery',
    insight:
      "Identified that the real constraint wasn't data volume but conflict resolution semantics. Pivoted to CRDT architecture two weeks in — saved 6 months of future rework.",
    href: '/work/pulse-crm',
  },
];

export default function ProcessPage() {
  return (
    <>
      <Navbar
        brandName="Portfolio"
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />

      <main className="mx-auto max-w-7xl px-8 pt-40 pb-24">
        {/* ── Hero ── */}
        <header className="mb-24 grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p
              className="font-label mb-4 text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              The Methodology
            </p>
            <h1
              className="font-headline text-7xl leading-none tracking-tighter md:text-9xl"
              style={{ color: 'var(--color-on-surface)' }}
            >
              From Discovery
              <br />
              <em style={{ color: 'var(--color-primary-container)' }}>
                to Deployment.
              </em>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              A repeatable, rigorous framework for building systems that scale —
              refined across 9+ years and 50+ production deployments.
            </p>
          </div>
        </header>

        {/* ── Phase Overview Strip ── */}
        <section className="mb-24 grid grid-cols-2 gap-3 md:grid-cols-4">
          {phases.map((phase) => (
            <a
              key={phase.number}
              href={`#phase-${phase.number}`}
              className="group flex flex-col gap-3 p-6 transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: phase.color,
                color: phase.textColor,
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <span className="material-symbols-outlined text-2xl opacity-70">
                {phase.icon}
              </span>
              <div>
                <p className="font-label text-xs tracking-widest uppercase opacity-60">
                  {phase.number}
                </p>
                <p className="font-headline text-2xl">{phase.title}</p>
              </div>
              <p className="font-label mt-auto text-xs tracking-wider uppercase opacity-60">
                {phase.duration}
              </p>
            </a>
          ))}
        </section>

        {/* ── Phase Detail Cards ── */}
        <section className="mb-32 space-y-8">
          {phases.map((phase, idx) => (
            <div
              key={phase.number}
              id={`phase-${phase.number}`}
              className="grid grid-cols-1 gap-0 overflow-hidden lg:grid-cols-12"
              style={{ borderRadius: 'var(--radius-xl)' }}
            >
              {/* Number / title block */}
              <div
                className="flex flex-col justify-between p-10 lg:col-span-3"
                style={{ backgroundColor: phase.color, color: phase.textColor }}
              >
                <div>
                  <span className="material-symbols-outlined mb-4 block text-4xl opacity-60">
                    {phase.icon}
                  </span>
                  <p className="font-label text-xs tracking-widest uppercase opacity-60">
                    {phase.number}
                  </p>
                  <h2 className="font-headline mt-1 text-4xl">{phase.title}</h2>
                </div>
                <p className="font-label mt-6 text-xs tracking-wider uppercase opacity-60">
                  {phase.duration}
                </p>
              </div>

              {/* Description + lists */}
              <div
                className="grid grid-cols-1 gap-8 p-10 md:grid-cols-3 lg:col-span-9"
                style={{
                  backgroundColor: 'var(--color-surface-container-low)',
                }}
              >
                {/* Description */}
                <div className="md:col-span-3">
                  <p
                    className="font-body text-lg leading-relaxed"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {phase.description}
                  </p>
                </div>

                {/* Activities */}
                <div className="md:col-span-2">
                  <p
                    className="font-label mb-4 text-xs font-bold tracking-widest uppercase"
                    style={{ color: 'var(--color-outline)' }}
                  >
                    Core Activities
                  </p>
                  <ul className="space-y-2">
                    {phase.activities.map((a) => (
                      <li key={a} className="flex items-start gap-2">
                        <span
                          className="material-symbols-outlined mt-0.5 flex-shrink-0 text-sm"
                          style={{
                            color:
                              idx === 1
                                ? 'var(--color-primary-container)'
                                : 'var(--color-secondary)',
                          }}
                        >
                          check_circle
                        </span>
                        <span
                          className="font-body text-sm"
                          style={{ color: 'var(--color-on-surface-variant)' }}
                        >
                          {a}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <p
                    className="font-label mb-4 text-xs font-bold tracking-widest uppercase"
                    style={{ color: 'var(--color-outline)' }}
                  >
                    Deliverables
                  </p>
                  <ul className="space-y-2">
                    {phase.deliverables.map((d) => (
                      <li
                        key={d}
                        className="font-body px-4 py-2 text-xs font-medium"
                        style={{
                          backgroundColor:
                            'var(--color-surface-container-highest)',
                          color: 'var(--color-on-surface)',
                          borderRadius: 'var(--radius-full)',
                          display: 'inline-block',
                          marginRight: '0.5rem',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── Engineering Principles ── */}
        <section className="mb-32">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p
                className="font-label mb-2 text-xs font-medium tracking-[0.2em] uppercase"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                Philosophy
              </p>
              <h2
                className="font-headline text-5xl"
                style={{ color: 'var(--color-on-surface)' }}
              >
                Guiding Principles
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="p-8"
                style={{
                  backgroundColor:
                    i === 1
                      ? 'var(--color-primary-container)'
                      : 'var(--color-surface-container-low)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <span
                  className="material-symbols-outlined mb-5 block text-3xl"
                  style={{
                    color:
                      i === 1
                        ? 'rgba(255,255,255,0.7)'
                        : 'var(--color-primary-container)',
                  }}
                >
                  {p.icon}
                </span>
                <h3
                  className="font-headline mb-3 text-2xl"
                  style={{
                    color:
                      i === 1
                        ? 'var(--color-on-primary)'
                        : 'var(--color-on-surface)',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{
                    color:
                      i === 1
                        ? 'rgba(255,255,255,0.75)'
                        : 'var(--color-on-surface-variant)',
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Process in Practice ── */}
        <section className="mb-32">
          <p
            className="font-label mb-4 text-xs font-medium tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Process in Practice
          </p>
          <h2
            className="font-headline mb-12 text-5xl"
            style={{ color: 'var(--color-on-surface)' }}
          >
            From the Case Studies
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {caseStudySnippets.map((cs) => (
              <Link
                key={cs.project}
                href={cs.href}
                className="group block p-8 transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--color-surface-container-low)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <p
                      className="font-label text-xs tracking-widest uppercase"
                      style={{ color: 'var(--color-outline)' }}
                    >
                      {cs.phase}
                    </p>
                    <p
                      className="font-headline mt-0.5 text-xl"
                      style={{ color: 'var(--color-on-surface)' }}
                    >
                      {cs.project}
                    </p>
                  </div>
                  <span
                    className="material-symbols-outlined opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ color: 'var(--color-primary-container)' }}
                  >
                    north_east
                  </span>
                </div>
                <p
                  className="font-headline text-lg leading-relaxed italic"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  "{cs.insight}"
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="relative flex flex-col items-center justify-between gap-10 overflow-hidden px-12 py-20 md:flex-row"
          style={{
            backgroundColor: 'var(--color-primary-container)',
            borderRadius: 'var(--radius-xl)',
          }}
        >
          <div
            className="absolute top-1/2 right-16 h-72 w-72 -translate-y-1/2 rounded-full opacity-10"
            style={{ border: '1px solid var(--color-on-primary)' }}
          />
          <div>
            <h2
              className="font-headline text-4xl italic md:text-5xl"
              style={{ color: 'var(--color-on-primary)' }}
            >
              Ready to build something remarkable?
            </h2>
            <p
              className="font-body mt-3 text-base opacity-75"
              style={{ color: 'var(--color-on-primary)' }}
            >
              Let's put the process to work on your next challenge.
            </p>
          </div>
          <Button
            href="/contact"
            icon="arrow_forward"
            size="lg"
            style={{
              backgroundColor: 'white',
              color: 'var(--color-primary-container)',
              flexShrink: 0,
            }}
          >
            Initiate Contact
          </Button>
        </section>
      </main>

      <Footer
        brandName="Portfolio"
        tagline="Senior Full Stack Engineer. Crafted with intentionality."
      />
      <Watermark text="process" />
    </>
  );
}
