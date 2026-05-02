import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Watermark from '@/components/ui/Watermark';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
  title: 'Architectural Impact & Results — Vimal Desai',
  description:
    'View the measurable engineering outcomes driven by Vimal Desai, including latency reduction, infrastructure cost savings, and 99.98% data integrity SLAs.',
};

const impactStats = [
  {
    value: '2×',
    label: 'Sprint Velocity Improvement',
    context: 'UpKeep Technologies — AI-Augmented Workflows',
    icon: 'rocket_launch',
    color: 'var(--color-primary-container)',
    onColor: 'var(--color-on-primary)',
  },
  {
    value: '11%',
    label: 'Operational Efficiency Gain',
    context: 'Emtec Inc. — Code Quality & Standards',
    icon: 'trending_up',
    color: 'var(--color-secondary)',
    onColor: 'var(--color-on-secondary)',
  },
  {
    value: '50+',
    label: 'Projects Shipped',
    context: 'Knovator Technologies — Across 7+ Industries',
    icon: 'deployed_code',
    color: 'var(--color-surface-container)',
    onColor: 'var(--color-on-surface)',
  },
  {
    value: '<10min',
    label: 'Module Integration Time',
    context: 'Knovator — Reusable Frontend Architecture',
    icon: 'speed',
    color: 'var(--color-surface-container-high)',
    onColor: 'var(--color-on-surface)',
  },
];

const architecturalDecisions = [
  {
    id: 'adr-001',
    title: 'Modular Frontend Architecture for Rapid Module Delivery',
    context:
      'Knovator required onboarding new client modules frequently across healthcare, textiles, and real estate. Traditional per-project setup took days of manual wiring.',
    decision:
      'Designed a reusable, module-based React + TypeScript architecture with standardised data hooks, layout containers, and routing conventions.',
    consequences: [
      'New module integration time: days → under 10 minutes',
      'Accelerated development velocity by 30%',
      'Architecture adopted across 50+ projects',
      'Served as the foundation for StringERP product',
    ],
    status: 'Accepted',
    date: 'June 2019',
    project: 'Knovator Technologies',
    href: '/experience',
  },
  {
    id: 'adr-002',
    title: 'AI-Augmented Sprint Workflow at UpKeep',
    context:
      'Sprint velocity had plateaued at 16 story points. The team needed to ship faster without compromising test coverage or code quality.',
    decision:
      'Integrated AI tooling into the development workflow — automated boilerplate generation, code reviews, and test scaffolding to eliminate repetitive engineering tasks.',
    consequences: [
      'Sprint velocity: 16 → 40+ story points',
      'No regression in code quality or test coverage',
      'Secured 3rd place in internal AI Hackathon',
      'Recognised as "Leader of the Month" for the initiative',
    ],
    status: 'Accepted',
    date: 'March 2024',
    project: 'UpKeep Technologies',
    href: '/experience',
  },
  {
    id: 'adr-003',
    title: 'Automated Testing Pipeline Optimisation at Emtec',
    context:
      "Emtec's US-based rental platform had slow testing cycles that delayed releases. The existing manual QA process was a bottleneck.",
    decision:
      'Built comprehensive automated testing pipelines using Cypress, Jest, k6, and JMeter — covering E2E, unit, and load testing in CI/CD.',
    consequences: [
      'Significantly reduced testing cycle time',
      'Improved release confidence and cadence',
      'Enabled direct collaboration with CTO on delivery',
      'Championed coding standards driving 11% efficiency gain',
    ],
    status: 'Accepted',
    date: 'January 2023',
    project: 'Emtec Inc.',
    href: '/experience',
  },
  {
    id: 'adr-004',
    title: 'Microservice Extraction — Implr Product Launch',
    context:
      'A module within the Knovator ecosystem showed potential as a standalone product. It was tightly coupled to the monolith and needed to be extracted into an independent service.',
    decision:
      'Architected and extracted the module into a standalone Node.js microservice with its own API, database, and deployment pipeline.',
    consequences: [
      'Successfully launched "Implr" as an independent product',
      'Demonstrated service-level scalability and code reusability',
      'Served as a reference architecture for future extractions',
      'Validated microservices pattern for the team',
    ],
    status: 'Accepted',
    date: 'September 2021',
    project: 'Knovator Technologies',
    href: '/experience',
  },
];

const systemDesignDocs = [
  {
    title: 'Enterprise Asset Management Platform Architecture',
    category: 'System Design',
    description:
      'Full-stack architecture for a high-traffic CMMS platform serving thousands of businesses — React, NestJS, PostgreSQL, AWS.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'AWS'],
    icon: 'engineering',
  },
  {
    title: 'Zero-Downtime Release Engineering Playbook',
    category: 'Operations',
    description:
      'Platform-wide release strategy enabling smooth, zero-downtime deployments across frontend, backend, and consumer services.',
    tags: ['CI/CD', 'Docker', 'AWS', 'GitHub Actions'],
    icon: 'swap_horiz',
  },
  {
    title: 'Reusable Component Library Architecture',
    category: 'Frontend',
    description:
      'React + TypeScript shared component library used across multiple product lines, reducing duplication and accelerating dev velocity by 30%.',
    tags: ['React', 'TypeScript', 'Component Library'],
    icon: 'widgets',
  },
  {
    title: 'ERP Microservices Architecture — StringERP',
    category: 'Architecture',
    description:
      'Scalable microservices architecture for a textile industry ERP system with modular frontend, event-driven backend, and multi-tenant data layer.',
    tags: ['Node.js', 'MongoDB', 'RabbitMQ', 'React'],
    icon: 'account_tree',
  },
];

export default function ImpactPage() {
  return (
    <>
      <Navbar
        brandName="Vimal Desai"
        ctaLabel="View Resume"
        ctaHref="/resume"
      />

      <main className="mx-auto max-w-7xl px-8 pt-40 pb-24">
        {/* ── Hero ── */}
        <header className="mb-24">
          <p
            className="font-label mb-4 text-xs font-medium tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Vimal Desai — Architecture of Scale
          </p>
          <h1
            className="font-headline text-7xl leading-none tracking-tighter italic md:text-9xl"
            style={{ color: 'var(--color-on-surface)' }}
          >
            Architectural
            <br />
            <span style={{ color: 'var(--color-primary-container)' }}>
              Impact.
            </span>
          </h1>
          <p
            className="font-body mt-8 max-w-2xl text-xl leading-relaxed"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Engineering is only as valuable as its measurable outcome. Every
            decision documented, every trade-off justified, every improvement
            quantified.
          </p>
        </header>

        {/* ── Impact Stats ── */}
        <section className="mb-32 grid grid-cols-2 gap-4 md:grid-cols-4">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-between p-8"
              style={{
                backgroundColor: stat.color,
                color: stat.onColor,
                borderRadius: 'var(--radius-xl)',
                minHeight: '180px',
              }}
            >
              <span className="material-symbols-outlined text-3xl opacity-60">
                {stat.icon}
              </span>
              <div>
                <p className="font-headline text-5xl font-light">
                  {stat.value}
                </p>
                <p className="font-body mt-1 text-sm font-semibold">
                  {stat.label}
                </p>
                <p className="font-label mt-1 text-xs opacity-60">
                  {stat.context}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* ── Architecture Decision Records ── */}
        <section className="mb-32">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p
                className="font-label mb-2 text-xs font-medium tracking-[0.2em] uppercase"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                Decision Log
              </p>
              <h2
                className="font-headline text-5xl"
                style={{ color: 'var(--color-on-surface)' }}
              >
                Architecture Decision Records
              </h2>
            </div>
            <p
              className="font-body hidden max-w-xs text-right text-sm md:block"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              Every significant decision documented with context, rationale, and
              consequences.
            </p>
          </div>

          <div className="space-y-6">
            {architecturalDecisions.map((adr) => (
              <div
                key={adr.id}
                className="grid grid-cols-1 gap-8 p-10 lg:grid-cols-12"
                style={{
                  backgroundColor: 'var(--color-surface-container-low)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                {/* Left: ID + meta */}
                <div className="lg:col-span-3">
                  <p
                    className="font-label mb-2 text-xs tracking-widest uppercase"
                    style={{ color: 'var(--color-outline)' }}
                  >
                    {adr.id}
                  </p>
                  <p
                    className="font-headline mb-4 text-2xl"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {adr.title}
                  </p>
                  <div className="space-y-2">
                    <div>
                      <p
                        className="font-label text-xs tracking-widest uppercase"
                        style={{ color: 'var(--color-outline)' }}
                      >
                        Project
                      </p>
                      <Link
                        href={adr.href}
                        className="font-body text-sm font-medium hover:underline"
                        style={{ color: 'var(--color-primary-container)' }}
                      >
                        {adr.project}
                      </Link>
                    </div>
                    <div>
                      <p
                        className="font-label text-xs tracking-widest uppercase"
                        style={{ color: 'var(--color-outline)' }}
                      >
                        Date
                      </p>
                      <p
                        className="font-body text-sm"
                        style={{ color: 'var(--color-on-surface)' }}
                      >
                        {adr.date}
                      </p>
                    </div>
                    <span
                      className="font-label mt-2 inline-block px-3 py-1 text-xs tracking-wider uppercase"
                      style={{
                        backgroundColor: 'rgba(128,0,32,0.12)',
                        color: 'var(--color-primary-container)',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      ✓ {adr.status}
                    </span>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="space-y-6 lg:col-span-9">
                  <div>
                    <p
                      className="font-label mb-2 text-xs font-bold tracking-widest uppercase"
                      style={{ color: 'var(--color-outline)' }}
                    >
                      Context
                    </p>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      {adr.context}
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-label mb-2 text-xs font-bold tracking-widest uppercase"
                      style={{ color: 'var(--color-outline)' }}
                    >
                      Decision
                    </p>
                    <p
                      className="font-body text-sm leading-relaxed font-medium"
                      style={{ color: 'var(--color-on-surface)' }}
                    >
                      {adr.decision}
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-label mb-3 text-xs font-bold tracking-widest uppercase"
                      style={{ color: 'var(--color-outline)' }}
                    >
                      Consequences
                    </p>
                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                      {adr.consequences.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span
                            className="material-symbols-outlined mt-0.5 flex-shrink-0 text-sm"
                            style={{
                              color:
                                c.startsWith('Risk') || c.startsWith('Initial')
                                  ? 'var(--color-outline)'
                                  : 'var(--color-primary-container)',
                            }}
                          >
                            {c.startsWith('Risk') || c.startsWith('Initial')
                              ? 'info'
                              : 'check_circle'}
                          </span>
                          <span
                            className="font-body text-xs leading-relaxed"
                            style={{ color: 'var(--color-on-surface-variant)' }}
                          >
                            {c}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── System Design Docs ── */}
        <section className="mb-32">
          <p
            className="font-label mb-3 text-xs font-medium tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Knowledge Base
          </p>
          <h2
            className="font-headline mb-10 text-5xl"
            style={{ color: 'var(--color-on-surface)' }}
          >
            System Design Documents
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {systemDesignDocs.map((doc) => (
              <div
                key={doc.title}
                className="group flex cursor-pointer items-start gap-5 p-8 transition-all hover:scale-[1.01]"
                style={{
                  backgroundColor: 'var(--color-surface-container-low)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center"
                  style={{
                    backgroundColor: 'var(--color-surface-container-highest)',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: 'var(--color-primary-container)' }}
                  >
                    {doc.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <p
                    className="font-label mb-1 text-xs tracking-wider uppercase"
                    style={{ color: 'var(--color-outline)' }}
                  >
                    {doc.category}
                  </p>
                  <p
                    className="font-headline mb-2 text-xl"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {doc.title}
                  </p>
                  <p
                    className="font-body mb-4 text-sm leading-relaxed"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {doc.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-label px-3 py-1 text-xs"
                        style={{
                          backgroundColor:
                            'var(--color-surface-container-highest)',
                          color: 'var(--color-on-surface-variant)',
                          borderRadius: 'var(--radius-full)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  className="material-symbols-outlined flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ color: 'var(--color-primary-container)' }}
                >
                  north_east
                </span>
              </div>
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
              Let's work together.
            </h2>
            <p
              className="font-body mt-3 text-base opacity-75"
              style={{ color: 'var(--color-on-primary)' }}
            >
              Currently open to architectural consultation and strategic
              engineering leadership.
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
        brandName="Vimal Desai"
        tagline="Delivering measurable business value through robust software architecture."
      />
      <Watermark text="impact" />
    </>
  );
}
