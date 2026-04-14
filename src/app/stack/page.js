import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Watermark from '@/components/ui/Watermark';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Stack — Portfolio',
  description:
    'The trusted technology stack behind 9+ years of full-stack engineering.',
};

const stackCategories = [
  {
    label: 'Frontend',
    icon: 'web',
    color: 'var(--color-secondary)',
    onColor: 'var(--color-on-secondary)',
    items: [
      {
        name: 'React / Next.js',
        level: 98,
        years: '6 yrs',
        note: 'Primary framework for all product UIs',
      },
      {
        name: 'TypeScript',
        level: 95,
        years: '5 yrs',
        note: 'Enforced across all team repos',
      },
      {
        name: 'Tailwind CSS',
        level: 97,
        years: '4 yrs',
        note: 'Design system token architecture',
      },
      {
        name: 'Vue.js',
        level: 80,
        years: '3 yrs',
        note: 'Used at Knovator Health',
      },
      {
        name: 'Angular',
        level: 75,
        years: '3 yrs',
        note: 'Enterprise dashboards at Emtec',
      },
      {
        name: 'React Native',
        level: 70,
        years: '2 yrs',
        note: 'Mobile health app prototypes',
      },
    ],
  },
  {
    label: 'Backend',
    icon: 'terminal',
    color: 'var(--color-primary-container)',
    onColor: 'var(--color-on-primary)',
    items: [
      {
        name: 'Node.js',
        level: 97,
        years: '7 yrs',
        note: 'API services, microservices',
      },
      {
        name: 'Go',
        level: 88,
        years: '3 yrs',
        note: 'High-throughput services (Orion Gateway)',
      },
      {
        name: 'Python / Django',
        level: 82,
        years: '4 yrs',
        note: 'Data pipelines, ML integrations',
      },
      {
        name: 'Java / Spring',
        level: 78,
        years: '3 yrs',
        note: 'Enterprise fintech systems at Emtec',
      },
      {
        name: 'GraphQL',
        level: 85,
        years: '4 yrs',
        note: 'API layer on all major products',
      },
      {
        name: 'gRPC / Protobuf',
        level: 80,
        years: '2 yrs',
        note: 'Internal service communication',
      },
    ],
  },
  {
    label: 'Data',
    icon: 'storage',
    color: 'var(--color-tertiary-container)',
    onColor: 'var(--color-on-primary)',
    items: [
      {
        name: 'PostgreSQL',
        level: 96,
        years: '7 yrs',
        note: 'Default RDBMS; advanced partitioning',
      },
      {
        name: 'Redis',
        level: 92,
        years: '5 yrs',
        note: 'Caching, distributed locking, pub/sub',
      },
      {
        name: 'MongoDB',
        level: 80,
        years: '4 yrs',
        note: 'Document stores & health records',
      },
      {
        name: 'Elasticsearch',
        level: 75,
        years: '3 yrs',
        note: 'Search & analytics layers',
      },
      {
        name: 'Apache Kafka',
        level: 78,
        years: '2 yrs',
        note: 'Event streaming pipelines',
      },
      {
        name: 'TimescaleDB',
        level: 65,
        years: '1 yr',
        note: 'IoT telemetry at Knovator',
      },
    ],
  },
  {
    label: 'Infrastructure',
    icon: 'cloud',
    color: 'var(--color-surface-container-highest)',
    onColor: 'var(--color-on-surface)',
    items: [
      {
        name: 'AWS (Certified SA)',
        level: 92,
        years: '6 yrs',
        note: 'EC2, ECS, RDS, Lambda, S3, CloudFront',
      },
      {
        name: 'Docker',
        level: 96,
        years: '6 yrs',
        note: 'All production services containerised',
      },
      {
        name: 'Kubernetes',
        level: 85,
        years: '4 yrs',
        note: 'CKA certified; multi-tenant clusters',
      },
      {
        name: 'Terraform',
        level: 82,
        years: '3 yrs',
        note: 'IaC for all environments',
      },
      {
        name: 'GitHub Actions / CI',
        level: 94,
        years: '5 yrs',
        note: 'Pipeline design & optimisation',
      },
      {
        name: 'Prometheus / Grafana',
        level: 88,
        years: '4 yrs',
        note: 'SLO monitoring, alerting',
      },
    ],
  },
];

const tools = [
  { name: 'Figma', category: 'Design', icon: 'design_services' },
  { name: 'Linear', category: 'Planning', icon: 'view_kanban' },
  { name: 'Notion', category: 'Docs', icon: 'description' },
  { name: 'Datadog', category: 'Observability', icon: 'monitoring' },
  { name: 'Sentry', category: 'Error Tracking', icon: 'bug_report' },
  { name: 'Storybook', category: 'UI Dev', icon: 'auto_stories' },
  { name: 'PagerDuty', category: 'Incidents', icon: 'notifications_active' },
  { name: 'Obsidian', category: 'Knowledge', icon: 'hub' },
];

const certifications = [
  {
    name: 'AWS Certified Solutions Architect — Professional',
    issuer: 'Amazon Web Services',
    year: '2022',
    icon: 'cloud',
    color: 'var(--color-secondary)',
    onColor: 'var(--color-on-secondary)',
  },
  {
    name: 'Google Professional Cloud Developer',
    issuer: 'Google Cloud',
    year: '2021',
    icon: 'cloud_done',
    color: 'var(--color-surface-container)',
    onColor: 'var(--color-on-surface)',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'CNCF',
    year: '2022',
    icon: 'developer_board',
    color: 'var(--color-surface-container)',
    onColor: 'var(--color-on-surface)',
  },
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    year: '2020',
    icon: 'security',
    color: 'var(--color-primary-container)',
    onColor: 'var(--color-on-primary)',
  },
];

export default function StackPage() {
  return (
    <>
      <Navbar
        brandName="Senior Engineer"
        ctaLabel="Contact"
        ctaHref="/contact"
      />

      <main className="mx-auto max-w-7xl px-8 pt-40 pb-24">
        {/* ── Hero ── */}
        <header className="mb-24">
          <p
            className="font-label mb-4 text-xs font-medium tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Technical Depth
          </p>
          <h1
            className="font-headline text-7xl leading-none tracking-tighter italic md:text-9xl"
            style={{ color: 'var(--color-on-surface)' }}
          >
            The Trusted
            <br />
            <span style={{ color: 'var(--color-primary-container)' }}>
              Stack.
            </span>
          </h1>
          <p
            className="font-body mt-8 max-w-2xl text-lg leading-relaxed"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            9+ years of production experience across the full spectrum — from
            pixel-perfect interfaces to distributed infrastructure. Every tool
            chosen for a reason; every level earned in production.
          </p>
        </header>

        {/* ── Category Nav ── */}
        <div className="mb-20 flex flex-wrap gap-3">
          {stackCategories.map((cat) => (
            <a
              key={cat.label}
              href={`#${cat.label.toLowerCase()}`}
              className="font-label flex items-center gap-2 px-5 py-3 text-sm font-semibold tracking-wider uppercase transition-all hover:scale-105"
              style={{
                backgroundColor: cat.color,
                color: cat.onColor,
                borderRadius: 'var(--radius-full)',
              }}
            >
              <span className="material-symbols-outlined text-base">
                {cat.icon}
              </span>
              {cat.label}
            </a>
          ))}
        </div>

        {/* ── Stack Categories ── */}
        <section className="mb-32 space-y-20">
          {stackCategories.map((cat) => (
            <div key={cat.label} id={cat.label.toLowerCase()}>
              {/* Category Header */}
              <div
                className="mb-8 flex items-center gap-4 pb-6"
                style={{
                  borderBottom: '1px solid var(--color-outline-variant)',
                }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center"
                  style={{
                    backgroundColor: cat.color,
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <span
                    className="material-symbols-outlined text-xl"
                    style={{ color: cat.onColor }}
                  >
                    {cat.icon}
                  </span>
                </div>
                <h2
                  className="font-headline text-4xl"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  {cat.label}
                </h2>
              </div>

              {/* Tech Items Grid */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col gap-4 p-6"
                    style={{
                      backgroundColor: 'var(--color-surface-container-low)',
                      borderRadius: 'var(--radius-xl)',
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p
                          className="font-body text-lg font-semibold"
                          style={{ color: 'var(--color-on-surface)' }}
                        >
                          {item.name}
                        </p>
                        <p
                          className="font-body mt-0.5 text-xs"
                          style={{ color: 'var(--color-on-surface-variant)' }}
                        >
                          {item.note}
                        </p>
                      </div>
                      <span
                        className="font-label flex-shrink-0 px-3 py-1 text-xs tracking-wider uppercase"
                        style={{
                          backgroundColor:
                            'var(--color-surface-container-highest)',
                          color: 'var(--color-on-surface-variant)',
                          borderRadius: 'var(--radius-full)',
                        }}
                      >
                        {item.years}
                      </span>
                    </div>

                    {/* Proficiency Bar */}
                    <div>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span
                          className="font-label text-xs tracking-widest uppercase"
                          style={{ color: 'var(--color-outline)' }}
                        >
                          Proficiency
                        </span>
                        <span
                          className="font-label text-xs font-bold"
                          style={{
                            color:
                              cat.color !==
                              'var(--color-surface-container-highest)'
                                ? cat.color
                                : 'var(--color-primary-container)',
                          }}
                        >
                          {item.level}%
                        </span>
                      </div>
                      <div
                        className="h-1.5 w-full overflow-hidden"
                        style={{
                          backgroundColor:
                            'var(--color-surface-container-highest)',
                          borderRadius: 'var(--radius-full)',
                        }}
                      >
                        <div
                          style={{
                            width: `${item.level}%`,
                            height: '100%',
                            backgroundColor:
                              cat.color !==
                              'var(--color-surface-container-highest)'
                                ? cat.color
                                : 'var(--color-primary-container)',
                            borderRadius: 'var(--radius-full)',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── Tools & Environment ── */}
        <section className="mb-32">
          <p
            className="font-label mb-3 text-xs font-medium tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Toolchain
          </p>
          <h2
            className="font-headline mb-10 text-5xl"
            style={{ color: 'var(--color-on-surface)' }}
          >
            Daily Environment
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-start gap-4 p-6"
                style={{
                  backgroundColor: 'var(--color-surface-container-low)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <span
                  className="material-symbols-outlined flex-shrink-0 text-2xl"
                  style={{ color: 'var(--color-primary-container)' }}
                >
                  {tool.icon}
                </span>
                <div>
                  <p
                    className="font-body text-sm font-semibold"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {tool.name}
                  </p>
                  <p
                    className="font-label text-xs"
                    style={{ color: 'var(--color-outline)' }}
                  >
                    {tool.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Certifications ── */}
        <section className="mb-32">
          <p
            className="font-label mb-3 text-xs font-medium tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Credentials
          </p>
          <h2
            className="font-headline mb-10 text-5xl"
            style={{ color: 'var(--color-on-surface)' }}
          >
            Professional Certifications
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-6 p-8"
                style={{
                  backgroundColor: cert.color,
                  color: cert.onColor,
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <span className="material-symbols-outlined flex-shrink-0 text-4xl opacity-70">
                  {cert.icon}
                </span>
                <div>
                  <p className="font-headline text-xl leading-snug">
                    {cert.name}
                  </p>
                  <p className="font-label mt-2 text-xs tracking-wider uppercase opacity-60">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="flex flex-col items-center justify-between gap-8 px-12 py-16 md:flex-row"
          style={{
            backgroundColor: 'var(--color-surface-container-low)',
            borderRadius: 'var(--radius-xl)',
          }}
        >
          <div>
            <h2
              className="font-headline text-4xl"
              style={{ color: 'var(--color-on-surface)' }}
            >
              See the stack in action.
            </h2>
            <p
              className="font-body mt-2 text-base"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              Explore the case studies to see how these technologies come
              together in production.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/" icon="arrow_forward" size="md">
              View Projects
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Work Together
            </Button>
          </div>
        </section>
      </main>

      <Footer
        brandName="Senior Engineer"
        tagline="Full Stack Engineering. Crafted with intentionality."
      />
      <Watermark text="stack" />
    </>
  );
}
