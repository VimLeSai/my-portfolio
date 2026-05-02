import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Watermark from '@/components/ui/Watermark';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Technology Stack — Vimal Desai | React, Node.js, AWS',
  description:
    'Explore the trusted technology stack of Vimal Desai. Expertise across React, Next.js, TypeScript, Node.js, PostgreSQL, and AWS infrastructure.',
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
        years: '9 yrs',
        note: 'Primary framework for all product UIs',
      },
      {
        name: 'TypeScript',
        level: 95,
        years: '7 yrs',
        note: 'Enforced across all team repos',
      },
      {
        name: 'TailwindCSS',
        level: 97,
        years: '6 yrs',
        note: 'Design system token architecture',
      },
      {
        name: 'Redux',
        level: 85,
        years: '5 yrs',
        note: 'State management for complex apps',
      },
      {
        name: 'Angular',
        level: 70,
        years: '2 yrs',
        note: 'Enterprise modules at UpKeep',
      },
      {
        name: 'MUI / Ant Design / Chakra',
        level: 90,
        years: '5 yrs',
        note: 'Component library integration',
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
        name: 'NestJS',
        level: 90,
        years: '3 yrs',
        note: 'Enterprise-grade API framework at UpKeep & Emtec',
      },
      {
        name: 'Express.js',
        level: 92,
        years: '7 yrs',
        note: 'REST APIs across 50+ projects',
      },
      {
        name: 'GraphQL',
        level: 85,
        years: '3 yrs',
        note: 'API layer at Emtec',
      },
      {
        name: 'Microservices',
        level: 88,
        years: '4 yrs',
        note: 'Architected at Knovator (Implr product)',
      },
      {
        name: 'RabbitMQ / Kafka',
        level: 78,
        years: '3 yrs',
        note: 'Event-driven architecture & messaging',
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
        level: 92,
        years: '5 yrs',
        note: 'Primary RDBMS at UpKeep & Emtec',
      },
      {
        name: 'MongoDB',
        level: 88,
        years: '6 yrs',
        note: 'Document stores across all companies',
      },
      {
        name: 'MySQL',
        level: 80,
        years: '4 yrs',
        note: 'Used at Knovator for ERP products',
      },
    ],
  },
  {
    label: 'Infrastructure & Testing',
    icon: 'cloud',
    color: 'var(--color-surface-container-highest)',
    onColor: 'var(--color-on-surface)',
    items: [
      {
        name: 'AWS',
        level: 88,
        years: '5 yrs',
        note: 'EC2, S3, SNS, SQS, Lambda',
      },
      {
        name: 'Docker',
        level: 90,
        years: '5 yrs',
        note: 'All production services containerised',
      },
      {
        name: 'CI/CD (GitHub Actions)',
        level: 90,
        years: '5 yrs',
        note: 'Pipeline design & optimisation',
      },
      {
        name: 'Cypress',
        level: 92,
        years: '4 yrs',
        note: 'E2E testing at UpKeep & Emtec',
      },
      {
        name: 'Jest',
        level: 90,
        years: '5 yrs',
        note: 'Unit & integration testing',
      },
      {
        name: 'Playwright / k6 / JMeter',
        level: 82,
        years: '3 yrs',
        note: 'Performance & load testing',
      },
    ],
  },
];

const tools = [
  { name: 'Git', category: 'Version Control', icon: 'code' },
  { name: 'GitHub / GitLab', category: 'Code Hosting', icon: 'hub' },
  { name: 'Postman', category: 'API Testing', icon: 'api' },
  { name: 'Vercel', category: 'Deployment', icon: 'rocket_launch' },
  { name: 'Docker', category: 'Containers', icon: 'deployed_code' },
  { name: 'Cursor AI', category: 'AI Editor', icon: 'smart_toy' },
  { name: 'Slack', category: 'Communication', icon: 'chat' },
  { name: 'ClickUp / Jira', category: 'Project Mgmt', icon: 'view_kanban' },
];

const certifications = [
  {
    name: 'React Certification',
    issuer: 'Testdom',
    year: '2022',
    icon: 'code',
    color: 'var(--color-primary-container)',
    onColor: 'var(--color-on-primary)',
  },
];

export default function StackPage() {
  return (
    <>
      <Navbar
        brandName="Vimal Desai"
        ctaLabel="Get in Touch"
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
        brandName="Vimal Desai"
        tagline="Building scalable foundations using the best tools for the job."
      />
      <Watermark text="stack" />
    </>
  );
}
