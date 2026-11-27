import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Watermark from '@/components/ui/Watermark';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
  title: 'Process',
  description:
    'How Vimal Desai actually ships: listen, sketch, build, harden. Agents can draft; review and tests still sit on the merge.',
};

const phases = [
  {
    number: '01',
    title: 'Listen',
    icon: 'search',
    duration: 'Until it’s clear',
    color: 'var(--color-surface-container-highest)',
    textColor: 'var(--color-on-surface)',
    description:
      'Talk to the people stuck in the workflow. Read the code. Write down what’s actually blocking them before picking a stack.',
    activities: [
      'Talk to the people in the workflow',
      'Read the existing code and data',
      'Write down constraints, not wishes',
      'Agree on what “done” looks like',
    ],
    deliverables: [
      'A short brief someone can argue with',
      'Risks worth naming out loud',
    ],
  },
  {
    number: '02',
    title: 'Sketch',
    icon: 'hub',
    duration: 'Enough to build',
    color: 'var(--color-primary-container)',
    textColor: 'var(--color-on-primary)',
    description:
      'Boundaries, schema, failure modes. Enough design to start — not a 40-page deck. If a seam will change, put it in now.',
    activities: [
      'Where the services split, and why',
      'Data model that can survive the first year',
      'API shape the UI can actually call',
      'What happens when this fails at 2am',
    ],
    deliverables: [
      'A sketch the team can build from',
      'Contracts, not slideware',
    ],
  },
  {
    number: '03',
    title: 'Build',
    icon: 'code',
    duration: 'Until users can click',
    color: 'var(--color-secondary)',
    textColor: 'var(--color-on-secondary)',
    description:
      'Ship the vertical slice. Agents can draft; I still review. Tests go out with the change, not in a follow-up ticket.',
    activities: [
      'One path a user can click, end to end',
      'Review on every PR, including factory drafts',
      'Playwright (or Cypress) on the flows that break',
      'Small PRs so revert is boring',
    ],
    deliverables: [
      'Working software',
      'Tests sitting next to the code',
    ],
  },
  {
    number: '04',
    title: 'Harden',
    icon: 'rocket_launch',
    duration: 'Before it has to hold',
    color: 'var(--color-tertiary-container)',
    textColor: 'var(--color-on-primary)',
    description:
      'Deploy path, rollback, logs someone else can read. I don’t ship a release I can’t undo.',
    activities: [
      'Deploy + rollback written down first',
      'Logs and traces on the new path',
      'Load check if the feature will feel it',
      'A note for the next person at 2am',
    ],
    deliverables: [
      'A deploy you can reverse',
      'A short runbook',
    ],
  },
];

const principles = [
  {
    icon: 'architecture',
    title: 'Put the seam in now',
    desc: 'If this will change in a year, don’t weld it shut. Retrofitting later is the expensive version of the same decision.',
  },
  {
    icon: 'verified',
    title: 'Say the trade-off',
    desc: 'Write down what you didn’t pick, and what would make you change your mind. Future-you will need it.',
  },
  {
    icon: 'monitor_heart',
    title: 'If you can’t see it, you don’t trust it',
    desc: 'Logs and traces on the new path before it goes to production. Not a cleanup ticket.',
  },
  {
    icon: 'groups',
    title: 'The team is the runtime',
    desc: 'Code that only you can operate is unfinished. Reviews, pairing, and boring patterns beat heroics.',
  },
  {
    icon: 'auto_fix_high',
    title: 'Automate the boring',
    desc: 'If we’ve done it twice, it gets a loop. Agents draft; review and tests still sit on the merge.',
  },
  {
    icon: 'balance',
    title: 'Ship at 75%',
    desc: 'If the shortcut still holds at most of projected load, take it. If it won’t, spend the time now.',
  },
];

const caseStudySnippets = [
  {
    project: 'StringERP',
    phase: 'Sketch',
    insight:
      'One reporting seam in week two. Naive queries were fine until they weren’t — the swap later took four days, not four months.',
    href: '/work/string-erp',
  },
  {
    project: 'UpKeep Platform',
    phase: 'Build',
    insight:
      'Agents draft the PR. Playwright and review stay in the same loop. Factory weeks: usually 5–8 PRs a day, still reviewed.',
    href: '/work/upkeep-platform',
  },
  {
    project: 'RentBase',
    phase: 'Listen',
    insight:
      'Three-person team, a rental CRM, and a screening domain that had to be right. The API shape came from the portal, not the other way around.',
    href: '/work/rentbase',
  },
];

export default function ProcessPage() {
  return (
    <>
      <Navbar
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
              How I work
            </p>
            <h1
              className="font-headline text-7xl leading-none tracking-tighter md:text-9xl"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Listen.
              <br />
              <em style={{ color: 'var(--color-primary-container)' }}>
                Then ship.
              </em>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              Same four steps as on the home page — just with more of the
              messy middle. No 40-page decks.
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
                    What I do
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
                Habits
              </p>
              <h2
                className="font-headline text-5xl"
                style={{ color: 'var(--color-on-surface)' }}
              >
                What I keep repeating
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
            In practice
          </p>
          <h2
            className="font-headline mb-12 text-5xl"
            style={{ color: 'var(--color-on-surface)' }}
          >
            From the work
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
              Got something to ship?
            </h2>
            <p
              className="font-body mt-3 text-base opacity-75"
              style={{ color: 'var(--color-on-primary)' }}
            >
              If it sounds like a fit, write me.
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
            Get in touch
          </Button>
        </section>
      </main>

      <Footer
        tagline="Full-stack engineer. Ten years building products that ship and stay up."
      />
      <Watermark text="process" />
    </>
  );
}
