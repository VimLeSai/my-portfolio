import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Watermark from '@/components/ui/Watermark';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
  title: 'Architectural Impact — Portfolio',
  description:
    'Measurable engineering outcomes: latency improvements, system reliability, team velocity, and product scale.',
};

const impactStats = [
  {
    value: '65%',
    label: 'Query Latency Reduction',
    context: 'UpKeep Technologies — Reporting Engine',
    icon: 'speed',
    color: 'var(--color-primary-container)',
    onColor: 'var(--color-on-primary)',
  },
  {
    value: '40%',
    label: 'Infrastructure Cost Reduction',
    context: 'Orion Gateway — Edge Caching',
    icon: 'savings',
    color: 'var(--color-secondary)',
    onColor: 'var(--color-on-secondary)',
  },
  {
    value: '99.98%',
    label: 'Data Integrity SLA',
    context: 'StringERP — Distributed Locking',
    icon: 'verified',
    color: 'var(--color-surface-container)',
    onColor: 'var(--color-on-surface)',
  },
  {
    value: '2x',
    label: 'Sprint Velocity Improvement',
    context: 'Emtec Financial Hub — CI/CD Overhaul',
    icon: 'rocket_launch',
    color: 'var(--color-surface-container-high)',
    onColor: 'var(--color-on-surface)',
  },
];

const architecturalDecisions = [
  {
    id: 'adr-001',
    title: 'Event Sourcing over CRUD for Financial Ledger',
    context:
      'StringERP required a full audit trail and the ability to replay transactions for regulatory compliance. A traditional CRUD model would necessitate a complex change-data-capture layer.',
    decision:
      'Adopt an immutable event log as the system of record, with materialised views for read operations (CQRS).',
    consequences: [
      'Full audit trail at zero additional cost',
      'Temporal queries and point-in-time recovery out of the box',
      'Initial implementation complexity: +3 weeks',
      'Eliminated 4 future compliance engineering sprints',
    ],
    status: 'Accepted',
    date: 'March 2023',
    project: 'StringERP',
    href: '/work/string-erp',
  },
  {
    id: 'adr-002',
    title: 'Go over Node.js for the API Gateway Core',
    context:
      'The Orion Gateway needed sub-5ms routing overhead at 2M RPM. Node.js prototypes were adding 15-25ms due to event loop contention under sustained load.',
    decision:
      'Rewrite the gateway routing engine in Go, maintaining Node.js for the admin configuration API where developer velocity matters more than raw performance.',
    consequences: [
      'Routing overhead: 15-25ms → < 2ms',
      'Memory usage per request: -72%',
      'Team onboarding cost: +2 weeks for Go proficiency',
      'Long-term: reduced infrastructure spend by 40%',
    ],
    status: 'Accepted',
    date: 'August 2022',
    project: 'Orion Gateway',
    href: '/work/orion-gateway',
  },
  {
    id: 'adr-003',
    title: 'CRDT over OT for Real-Time CRM Collaboration',
    context:
      'Pulse CRM required conflict-free multi-user editing. Operational Transformation (OT) was considered but requires a central authority, introducing latency and a single point of failure.',
    decision:
      'Implement CRDT (Conflict-free Replicated Data Types) for collaborative fields, accepting increased client-side memory usage in exchange for peer-to-peer conflict resolution.',
    consequences: [
      'Edit conflicts: ~12% → 0%',
      'Works offline-first; syncs on reconnect',
      'Client bundle size: +28KB for the CRDT library',
      'Eliminated central coordination server',
    ],
    status: 'Accepted',
    date: 'February 2023',
    project: 'Pulse CRM',
    href: '/work/pulse-crm',
  },
  {
    id: 'adr-004',
    title: 'Multi-Tenancy via Row-Level Security over Schema-per-Tenant',
    context:
      'UpKeep Technologies needed to support 500+ enterprise tenants on a shared PostgreSQL instance. Schema-per-tenant offers strong isolation but creates significant operational overhead at scale.',
    decision:
      'Use PostgreSQL Row-Level Security (RLS) with a tenant_id discriminator column, enforced at the database level rather than application layer.',
    consequences: [
      'Database management: 500 schemas → 1 schema',
      'Backup & restore: 90% simpler',
      'Cross-tenant analytics possible via superuser role',
      'Risk: misconfigured RLS policies could leak data — mitigated by automated policy audits',
    ],
    status: 'Accepted',
    date: 'November 2021',
    project: 'UpKeep Technologies',
    href: '/experience',
  },
];

const systemDesignDocs = [
  {
    title: 'High-Frequency Trading Dashboard Architecture',
    category: 'System Design',
    description:
      'WebSocket cluster topology for $1B+ daily transaction volume with real-time P&L calculations.',
    tags: ['WebSockets', 'Redis Pub/Sub', 'Node.js'],
    icon: 'candlestick_chart',
  },
  {
    title: 'Zero-Downtime Database Migration Playbook',
    category: 'Operations',
    description:
      'Strangler fig pattern for migrating 10M+ records without service interruption using pg_logical.',
    tags: ['PostgreSQL', 'Zero Downtime', 'Migrations'],
    icon: 'swap_horiz',
  },
  {
    title: 'Multi-Region API Gateway Design',
    category: 'Infrastructure',
    description:
      'Anycast routing with regional failover achieving sub-50ms P99 globally.',
    tags: ['AWS', 'Cloudflare', 'Go'],
    icon: 'public',
  },
  {
    title: 'Healthcare Data Pipeline — HIPAA Compliance',
    category: 'Compliance',
    description:
      'End-to-end encrypted telemetry processing for 500+ wearable device types.',
    tags: ['Python', 'Apache Kafka', 'Encryption'],
    icon: 'health_and_safety',
  },
];

export default function ImpactPage() {
  return (
    <>
      <Navbar
        brandName="Senior Engineer Timeline"
        ctaLabel="Download CV"
        ctaHref="#"
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
        brandName="Architectural Engineering Curator"
        tagline="All Rights Reserved. Built with intent."
      />
      <Watermark text="impact" />
    </>
  );
}
