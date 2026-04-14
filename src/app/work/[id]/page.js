import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Button from '@/components/ui/Button';
import Watermark from '@/components/ui/Watermark';
import { notFound } from 'next/navigation';

const projects = {
  'string-erp': {
    title: 'StringERP',
    subtitle: 'Real-time Enterprise Resource Planning',
    category: 'Enterprise · SaaS · B2B',
    year: '2023',
    role: 'Lead Architect & Full Stack Engineer',
    duration: '14 months',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    hero: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
    overview:
      'StringERP is a real-time enterprise resource planning system designed to handle the financial and operational complexity of mid-to-large enterprises. The platform processes over $20B in daily transactions with a 99.98% data integrity guarantee, powered by a distributed locking mechanism built from scratch.',
    challenge:
      "The client's legacy monolith was processing 12,000 transactions/day with frequent race conditions causing data corruption. Scaling to 500k+ daily transactions required a complete re-architecture — moving from a single Postgres instance to a distributed, event-sourced system without any downtime.",
    approach: [
      {
        icon: 'hub',
        title: 'Event Sourcing Core',
        desc: 'Redesigned the data layer around an immutable event log, enabling full audit trails and temporal queries across all entities.',
      },
      {
        icon: 'lock',
        title: 'Distributed Locking',
        desc: 'Implemented a Redis-backed optimistic locking strategy to eliminate race conditions across 50+ microservices.',
      },
      {
        icon: 'speed',
        title: 'Query Optimisation',
        desc: 'Introduced CQRS with materialised views, reducing average query latency from 2,400ms to 65ms for reporting workloads.',
      },
      {
        icon: 'cloud_sync',
        title: 'Zero-Downtime Migration',
        desc: 'Executed a 3-phase strangler fig migration over 6 weeks, maintaining 99.99% uptime throughout the transition.',
      },
    ],
    metrics: [
      {
        label: 'Transaction Throughput',
        before: '12K/day',
        after: '500K+/day',
      },
      { label: 'Query Latency (P95)', before: '2,400ms', after: '65ms' },
      { label: 'Data Integrity', before: '94.2%', after: '99.98%' },
      { label: 'System Uptime', before: '98.1%', after: '99.99%' },
    ],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    ],
    accentColor: 'var(--color-primary-container)',
  },
  'orion-gateway': {
    title: 'Orion Gateway',
    subtitle: 'Low-Latency API Gateway at Scale',
    category: 'API · Microservices · Infra',
    year: '2022',
    role: 'Systems Architect',
    duration: '8 months',
    tags: ['Go', 'gRPC', 'AWS Lambda', 'Envoy', 'Prometheus'],
    hero: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80',
    overview:
      'Orion Gateway is a high-performance API gateway purpose-built for financial-grade traffic. It serves as the single ingress layer for a distributed microservices ecosystem processing 2M+ requests per minute, reducing infrastructure overhead by 40% through intelligent edge caching and gRPC protocol adoption.',
    challenge:
      'An aging Kong-based gateway was becoming a bottleneck under load, adding 80-120ms of overhead to every request. The team needed a sub-10ms gateway that could also handle protocol translation between REST clients and internal gRPC services.',
    approach: [
      {
        icon: 'bolt',
        title: 'Go-Native Routing',
        desc: 'Built the core routing engine in Go, achieving sub-2ms overhead even at 2M RPM peak traffic.',
      },
      {
        icon: 'cached',
        title: 'Intelligent Edge Caching',
        desc: 'Deployed a TTL-aware, tenant-scoped cache layer at the edge, eliminating 38% of upstream calls.',
      },
      {
        icon: 'transform',
        title: 'Protocol Translation',
        desc: 'Implemented a transparent REST→gRPC transcoding layer, allowing legacy clients to communicate with modern services.',
      },
      {
        icon: 'monitor_heart',
        title: 'Observability Suite',
        desc: 'Integrated OpenTelemetry tracing and Prometheus metrics, reducing MTTR from 45 minutes to under 3 minutes.',
      },
    ],
    metrics: [
      { label: 'Gateway Overhead', before: '80-120ms', after: '<2ms' },
      { label: 'Cache Hit Rate', before: 'N/A', after: '38%' },
      { label: 'Infrastructure Cost', before: 'Baseline', after: '-40%' },
      { label: 'MTTR', before: '45 min', after: '< 3 min' },
    ],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    ],
    accentColor: 'var(--color-secondary)',
  },
  'pulse-crm': {
    title: 'Pulse CRM',
    subtitle: 'Reactive Data Architecture for Enterprise Sales',
    category: 'Enterprise SaaS · CRM',
    year: '2023',
    role: 'Full Stack Lead & UI Architect',
    duration: '11 months',
    tags: ['TypeScript', 'React', 'Node.js', 'Redis', 'PostgreSQL'],
    hero: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80',
    overview:
      'Pulse CRM is a reactive data management architecture handling 5M+ concurrent data streams for enterprise SaaS teams. The system enables sales teams to operate on live, consistent data regardless of team size — from 5-person startups to 500-seat enterprise deployments.',
    challenge:
      'Traditional CRMs use polling-based refresh cycles, leading to stale data and edit conflicts in high-velocity sales environments. The client needed true real-time collaboration, conflict-free merges, and sub-second data propagation across all connected clients.',
    approach: [
      {
        icon: 'sync',
        title: 'CRDT Sync Engine',
        desc: 'Implemented a Conflict-free Replicated Data Type engine enabling simultaneous edits from thousands of clients without conflicts.',
      },
      {
        icon: 'stream',
        title: 'WebSocket Architecture',
        desc: 'Designed a stateful WebSocket cluster with sticky sessions and automatic failover, maintaining persistent connections for 50K+ concurrent users.',
      },
      {
        icon: 'view_kanban',
        title: 'Optimistic UI',
        desc: 'Built an optimistic update layer that instantly reflects user actions while reconciling with server state in the background.',
      },
      {
        icon: 'storage',
        title: 'Tiered Storage',
        desc: 'Architected a hot/warm/cold storage strategy — Redis for active sessions, Postgres for recent history, S3 for archives — reducing storage costs by 62%.',
      },
    ],
    metrics: [
      { label: 'Concurrent Users', before: '2,000', after: '50,000+' },
      { label: 'Data Propagation', before: '3-8 seconds', after: '< 200ms' },
      { label: 'Edit Conflicts', before: '~12%', after: '0%' },
      { label: 'Storage Cost', before: 'Baseline', after: '-62%' },
    ],
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    ],
    accentColor: 'var(--color-tertiary)',
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const project = await projects[params.id] || 'string-erp';
  if (!project) return { title: 'Not Found' };
  return {
    title: `${project.title} — Portfolio`,
    description: project.overview,
  };
}

export default async function WorkDetailPage({ params }) {
  const project = await projects[params.id] || projects['string-erp'];
  if (!project) notFound();

  return (
    <>
      <Navbar
        brandName="Portfolio"
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />

      {/* ── Hero Image ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: '70vh', marginTop: '80px' }}
      >
        <img
          src={project.hero}
          alt={project.title}
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(28,28,24,0.2) 0%, rgba(28,28,24,0.7) 100%)',
          }}
        />
        {/* Overlay text */}
        <div className="absolute right-0 bottom-0 left-0 mx-auto max-w-7xl px-8 pb-16">
          <p
            className="font-label mb-3 text-xs tracking-[0.2em] uppercase"
            style={{ color: 'rgba(252,249,243,0.7)' }}
          >
            {project.category} · {project.year}
          </p>
          <h1
            className="font-headline text-6xl leading-none tracking-tighter md:text-8xl"
            style={{ color: '#ffffff' }}
          >
            {project.title}
          </h1>
          <p
            className="font-headline mt-3 text-2xl italic"
            style={{ color: 'rgba(255,179,181,0.9)' }}
          >
            {project.subtitle}
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-8 pt-20 pb-24">
        {/* ── Meta bar ── */}
        <div
          className="mb-16 flex flex-wrap gap-8 pb-12"
          style={{ borderBottom: '1px solid var(--color-outline-variant)' }}
        >
          {[
            { label: 'Role', value: project.role },
            { label: 'Duration', value: project.duration },
            { label: 'Year', value: project.year },
          ].map((m) => (
            <div key={m.label}>
              <p
                className="font-label mb-1 text-xs tracking-widest uppercase"
                style={{ color: 'var(--color-outline)' }}
              >
                {m.label}
              </p>
              <p
                className="font-body text-base font-medium"
                style={{ color: 'var(--color-on-surface)' }}
              >
                {m.value}
              </p>
            </div>
          ))}
          <div className="ml-auto flex flex-wrap items-center gap-2">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="font-label px-4 py-1.5 text-xs tracking-wide uppercase"
                style={{
                  backgroundColor: 'var(--color-surface-container-highest)',
                  color: 'var(--color-on-surface-variant)',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Overview + Challenge ── */}
        <section className="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p
              className="font-label mb-4 text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-outline)' }}
            >
              Overview
            </p>
            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: 'var(--color-on-surface)' }}
            >
              {project.overview}
            </p>
          </div>
          <div>
            <p
              className="font-label mb-4 text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-outline)' }}
            >
              The Challenge
            </p>
            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              {project.challenge}
            </p>
          </div>
        </section>

        {/* ── Approach ── */}
        <section className="mb-24">
          <p
            className="font-label mb-12 text-xs font-bold tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-outline)' }}
          >
            Architectural Approach
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {project.approach?.map((item, i) => (
              <div
                key={item.title}
                className="flex items-start gap-6 p-10"
                style={{
                  backgroundColor: 'var(--color-surface-container-low)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center"
                  style={{
                    backgroundColor:
                      i === 0
                        ? project.accentColor
                        : 'var(--color-surface-container-highest)',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      color:
                        i === 0
                          ? 'var(--color-on-primary)'
                          : 'var(--color-on-surface-variant)',
                    }}
                  >
                    {item.icon}
                  </span>
                </div>
                <div>
                  <p
                    className="font-headline mb-2 text-xl"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Metrics ── */}
        <section className="mb-24">
          <p
            className="font-label mb-12 text-xs font-bold tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-outline)' }}
          >
            Results & Impact
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {project.metrics?.map((metric) => (
              <div
                key={metric.label}
                className="p-8"
                style={{
                  backgroundColor: 'var(--color-surface-container-highest)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <p
                  className="font-label mb-4 text-xs tracking-widest uppercase"
                  style={{ color: 'var(--color-outline)' }}
                >
                  {metric.label}
                </p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="font-label text-xs tracking-wider uppercase"
                      style={{ color: 'var(--color-outline)' }}
                    >
                      Before
                    </span>
                    <span
                      className="font-body text-base line-through"
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      {metric.before}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="font-label text-xs tracking-wider uppercase"
                      style={{ color: 'var(--color-outline)' }}
                    >
                      After
                    </span>
                    <span
                      className="font-headline text-2xl font-bold"
                      style={{ color: project.accentColor }}
                    >
                      {metric.after}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Screenshots ── */}
        <section className="mb-24">
          <p
            className="font-label mb-8 text-xs font-bold tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-outline)' }}
          >
            Visual Documentation
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {project.images?.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden"
                style={{ borderRadius: 'var(--radius-xl)' }}
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full object-cover"
                  style={{ height: '280px' }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Navigation ── */}
        <div
          className="flex items-center justify-between pt-12"
          style={{ borderTop: '1px solid var(--color-outline-variant)' }}
        >
          <Button
            href="/"
            variant="ghost"
            icon="arrow_back"
            className="flex-row-reverse gap-2"
          >
            All Work
          </Button>
          <Button href="/contact" icon="arrow_forward">
            Start a Project
          </Button>
        </div>
      </main>

      <Footer
        brandName="Portfolio"
        tagline="Senior Full Stack Engineer. Crafted with intentionality."
      />
      <Watermark text={project.title?.toLowerCase()} />
    </>
  );
}
