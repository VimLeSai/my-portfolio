'use client';
import Link from 'next/link';
import Navbar from '@/components/nav';
import Watermark from '@/components/ui/Watermark';

// export const metadata = {
//   title: "High Fidelity — CURATOR | Vimal Desai",
//   description:
//     "Crafting Monolithic Digital Experiences. Senior Full Stack Architect specializing in high-fidelity interfaces and distributed backend systems.",
// };

const steps = [
  {
    icon: 'architecture',
    title: 'Discovery',
    desc: 'Auditing requirements, identifying bottleneck risks, and mapping the technical landscape.',
  },
  {
    icon: 'schema',
    title: 'Architect',
    desc: 'Defining the stack, database schemas, and microservices for maximum horizontal scalability.',
  },
  {
    icon: 'code_blocks',
    title: 'Develop',
    desc: 'Agile implementation with a focus on type-safety, test coverage, and modular components.',
  },
  {
    icon: 'rocket_launch',
    title: 'Deploy',
    desc: 'CI/CD automation, cloud orchestration, and real-time observability implementation.',
  },
];

const projects = [
  {
    id: 'string-erp',
    title: 'StringERP',
    tags: ['Fintech', 'Next.js', 'Go'],
    impact:
      'Engineered a real-time ledger system processing $2M+ daily transactions with 99.99% data integrity through distributed locking mechanisms.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    aspect: 'aspect-[16/9]',
    col: 'lg:col-span-7',
  },
  {
    id: 'orion-gateway',
    title: 'Orion Gateway',
    tags: ['Infrastructure', 'Rust', 'AWS'],
    impact:
      'Architected a low-latency API gateway reducing overhead by 40% through intelligent edge-caching and gRPC protocols.',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80',
    aspect: 'aspect-[4/5]',
    col: 'lg:col-span-5 lg:mt-32',
  },
  {
    id: 'pulse-crm',
    title: 'Pulse CRM',
    tags: ['Enterprise SaaS', 'React', 'Node.js'],
    impact:
      'Designed a reactive state-management architecture handling 10k+ concurrent data streams for enterprise sales teams.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    aspect: 'aspect-[3/2]',
    col: 'lg:col-span-6',
  },
];

const recognitions = [
  {
    icon: 'workspace_premium',
    title: 'Leader of the Month',
    org: 'Global Tech Hub • 2023',
    accent: true,
  },
  {
    icon: 'trophy',
    title: 'AI Hackathon Champion',
    org: 'Deep Learning Summit • 2024',
    accent: false,
  },
];

export default function HighFidelityPage() {
  return (
    <>
      {/* ── Nav ── */}
      <Navbar
        brandName="Portfolio"
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />

      <main>
        <section className="mx-auto flex min-h-screen max-w-screen-2xl items-center overflow-hidden px-8 pt-24">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="z-10 lg:col-span-7">
              <span className="font-label text-on-surface-variant mb-6 block text-xs tracking-[0.2em] uppercase">
                Vimal Desai — Architecture of Scale
              </span>
              <h1 className="font-headline text-on-surface mb-8 text-6xl leading-[0.9] tracking-tighter italic md:text-8xl lg:text-9xl">
                Crafting <br />
                Monolithic{' '}
                <span className="text-primary-container">Digital</span> <br />
                Experiences
              </h1>
              <p className="font-body text-on-surface-variant mb-10 max-w-xl text-lg leading-relaxed">
                Synthesizing high-performance backend systems with
                editorial-grade user interfaces. Dedicated to the pursuit of
                technical elegance and operational resilience.
              </p>
              <div className="flex items-center gap-8">
                <div className="bg-outline-variant h-[1px] w-12" />
                <span className="font-headline text-xl italic">
                  Available for Q4 2024
                </span>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="bg-surface-container-highest group relative aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  alt="Portrait of Vimal Desai"
                  className="h-full w-full object-cover opacity-90 mix-blend-multiply grayscale transition-transform duration-700 group-hover:scale-105"
                  data-alt="Monochrome professional portrait of an engineer in a studio"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxpo6OB41hal1f80pz6UjFn7s-rLIdVcSqzyCbJ8YDHQF6Pm4lbzjWmLzJlaSXb9zDt9S6LC1SC607rz_u7xSHegRorlIkgQcEFfkbnzOVp00nh3J2pR3TiNVWcEuqqTy47j-Q_IitziPaTQj2T1uilqLhAZHO55WNcb5qUYUmkCQM5sMQv2S-fmfVnuKHXXz5KBiCb3AzQh2muHuDmbd7LA8U9QK6yfIrd_keXkkX5iazR4lIE2Msthh0tfmxtHe6ht2gjEenaFo"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/20 ring-inset" />
              </div>
              {/* Floating Architectural Element */}
              <div className="bg-surface-container-low border-outline-variant/10 absolute -bottom-12 -left-12 hidden rounded-xl border p-8 shadow-2xl md:block">
                <div className="flex flex-col gap-1">
                  <span className="font-label text-on-surface-variant text-[10px] tracking-widest uppercase">
                    Current Focus
                  </span>
                  <span className="font-headline text-primary text-2xl italic">
                    Distributed Systems
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Biography & Bento Stats ── */}
        <section
          className="px-8 py-32"
          style={{ backgroundColor: 'var(--color-surface-container-low)' }}
        >
          <div className="mx-auto max-w-screen-2xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Bio */}
              <div className="flex flex-col justify-center lg:col-span-2">
                <h2
                  className="font-headline mb-8 text-4xl italic"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  Lead Engineering Philosophy
                </h2>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                  <p
                    className="font-body leading-relaxed"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    Architecture is more than code; it's the structural
                    integrity of a product's future. As a Senior Full Stack
                    Architect, I bridge the gap between complex infrastructure
                    and seamless human interaction. My approach prioritizes
                    modularity, scalability, and the rigorous elimination of
                    technical debt.
                  </p>
                  <p
                    className="font-body leading-relaxed"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    From fintech ecosystems to enterprise SaaS, I've led
                    distributed teams to deliver high-stakes software under
                    compressed timelines, ensuring that every deployment is a
                    benchmark in reliability and craft.
                  </p>
                </div>
              </div>

              {/* Stats bento */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="flex flex-col justify-between p-8 shadow-sm"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderRadius: 'var(--radius-xl)',
                  }}
                >
                  <span
                    className="font-headline text-4xl"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    9+
                  </span>
                  <span
                    className="font-label mt-4 text-xs leading-tight tracking-widest uppercase"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    Years of Engineering
                  </span>
                </div>
                <div
                  className="flex flex-col justify-between p-8 shadow-sm"
                  style={{
                    backgroundColor: 'var(--color-primary-container)',
                    borderRadius: 'var(--radius-xl)',
                  }}
                >
                  <span
                    className="font-headline text-4xl italic"
                    style={{ color: 'var(--color-on-primary)' }}
                  >
                    50+
                  </span>
                  <span
                    className="font-label mt-4 text-xs leading-tight tracking-widest uppercase"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    Global Deliveries
                  </span>
                </div>
                <div
                  className="col-span-2 flex items-center justify-between p-8"
                  style={{
                    backgroundColor: 'var(--color-surface-container-highest)',
                    borderRadius: 'var(--radius-xl)',
                  }}
                >
                  <div>
                    <span
                      className="font-headline text-4xl"
                      style={{ color: 'var(--color-on-surface)' }}
                    >
                      2x
                    </span>
                    <p
                      className="font-label mt-2 text-xs tracking-widest uppercase"
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      Sprint Velocity Optimization
                    </p>
                  </div>
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    speed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Process ── */}
        <section className="mx-auto max-w-screen-2xl px-8 py-32">
          <div className="mb-20 text-center">
            <span
              className="font-label mb-4 block text-xs tracking-[0.3em] uppercase"
              style={{ color: 'var(--color-primary)' }}
            >
              Methodology
            </span>
            <h2
              className="font-headline text-5xl italic"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Discovery to Deployment
            </h2>
          </div>

          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4">
            {/* Horizontal rule */}
            <div
              className="absolute top-12 left-0 -z-10 hidden h-px w-full md:block"
              style={{ backgroundColor: 'rgba(224,191,191,0.3)' }}
            />
            {steps.map((step) => (
              <div
                key={step.title}
                className="group flex flex-col items-center md:items-start"
              >
                <div
                  className="mb-8 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-outline-variant)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      'var(--color-primary-container)';
                    e.currentTarget.querySelector('span').style.color =
                      'var(--color-on-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      'var(--color-surface)';
                    e.currentTarget.querySelector('span').style.color =
                      'var(--color-on-surface)';
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {step.icon}
                  </span>
                </div>
                <h3
                  className="font-headline mb-4 text-2xl italic"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-body text-center text-sm leading-relaxed md:text-left"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Selected Artifacts — Offset Grid ── */}
        <section
          className="px-8 py-32"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="mx-auto max-w-screen-2xl">
            <div className="mb-20 flex flex-col items-baseline justify-between gap-8 md:flex-row">
              <h2
                className="font-headline leading-none italic"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  color: 'var(--color-on-surface)',
                }}
              >
                Selected Artifacts
              </h2>
              <p
                className="font-label max-w-xs text-xs tracking-widest uppercase md:text-right"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                A curated collection of infrastructure and application
                engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              {Object.values(projects).map((p) => (
                <div key={p.id} className={`${p.col} group`}>
                  <div
                    className={`${p.aspect} relative mb-8 overflow-hidden`}
                    style={{
                      backgroundColor: 'var(--color-surface-container-low)',
                      borderRadius: 'var(--radius-lg)',
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                      style={{ backgroundColor: 'rgba(87,0,19,0.1)' }}
                    />
                  </div>
                  <div className="mb-4 flex flex-wrap gap-3">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-label px-4 py-1 text-[10px] tracking-wider uppercase"
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
                  <h3
                    className="font-headline mb-4 text-3xl"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-body leading-relaxed"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    <span
                      className="font-semibold"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      Technical Impact:
                    </span>{' '}
                    {p.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Recognitions & CTA ── */}
        <section
          className="overflow-hidden px-8 py-32"
          style={{ backgroundColor: 'var(--color-surface-container-low)' }}
        >
          <div className="mx-auto max-w-screen-2xl">
            <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
              {/* Recognitions */}
              <div>
                <h2
                  className="font-headline mb-12 text-5xl italic"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  Recognitions
                </h2>
                <div className="space-y-6">
                  {recognitions.map((r) => (
                    <div
                      key={r.title}
                      className="flex items-center gap-8 p-8 shadow-sm"
                      style={{
                        backgroundColor: 'var(--color-surface)',
                        borderLeft: `4px solid ${r.accent ? 'var(--color-primary)' : 'var(--color-outline-variant)'}`,
                        borderRadius: 'var(--radius-DEFAULT)',
                      }}
                    >
                      <span
                        className="material-symbols-outlined text-4xl"
                        style={{
                          color: r.accent
                            ? 'var(--color-primary)'
                            : 'var(--color-on-surface-variant)',
                        }}
                      >
                        {r.icon}
                      </span>
                      <div>
                        <h4
                          className="font-headline text-xl"
                          style={{ color: 'var(--color-on-surface)' }}
                        >
                          {r.title}
                        </h4>
                        <p
                          className="font-label mt-1 text-xs tracking-widest uppercase"
                          style={{ color: 'var(--color-on-surface-variant)' }}
                        >
                          {r.org}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div
                className="text-on-primary group relative overflow-hidden p-12"
                style={{
                  background:
                    'linear-gradient(135deg, #570013 0%, #800020 100%)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                {/* Globe SVG */}
                <div
                  className="absolute -right-20 -bottom-20 h-80 w-80 opacity-20 transition-opacity duration-1000 group-hover:opacity-40"
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full fill-white"
                  >
                    <path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
                    <path
                      d="M100 20c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80zm0 150c-38.6 0-70-31.4-70-70s31.4-70 70-70 70 31.4 70 70-31.4 70-70 70z"
                      opacity="0.5"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h2 className="font-headline mb-6 text-5xl italic">
                    Let's Work Together
                  </h2>
                  <p
                    className="font-body mb-10 max-w-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.8)' }}
                  >
                    Currently evaluating partnerships for 2025. Whether it's a
                    zero-to-one build or scaling legacy systems, let's discuss
                    your vision.
                  </p>
                  <Link
                    href="/contact"
                    className="font-label inline-flex items-center gap-4 px-8 py-4 text-xs font-bold tracking-widest uppercase shadow-xl transition-transform duration-300 hover:scale-105"
                    style={{
                      backgroundColor: 'white',
                      color: 'var(--color-primary)',
                      borderRadius: 'var(--radius-DEFAULT)',
                    }}
                  >
                    Initiate Dialogue
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        className="w-full pt-24 pb-12"
        style={{
          backgroundColor: 'var(--color-surface-container-low)',
          borderTop: '1px solid rgba(224,191,191,0.15)',
        }}
      >
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div
              className="font-headline mb-8 text-4xl"
              style={{ color: 'var(--color-on-surface)' }}
            >
              CURATOR
            </div>
            <p
              className="font-body max-w-md leading-relaxed"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              Senior Full Stack Architect specializing in high-fidelity
              interfaces and distributed backend systems. Engineered with
              editorial intent.
            </p>
          </div>
          {[
            {
              title: 'Sitemap',
              links: ['Portfolio', 'Process', 'Archives', 'About'],
              hrefs: ['/', '/process', '/archive', '/about'],
            },
            {
              title: 'Connect',
              links: ['Github', 'LinkedIn', 'Read.cv', 'RSS Feed'],
              hrefs: ['#', '#', '#', '#'],
            },
          ].map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <span
                className="font-label mb-4 text-[10px] tracking-[0.2em] uppercase"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                {col.title}
              </span>
              {col.links.map((link, i) => (
                <Link
                  key={link}
                  href={col.hrefs[i]}
                  className="font-body text-sm underline-offset-4 transition-colors hover:underline"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--color-primary)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      'var(--color-on-surface-variant)')
                  }
                >
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-24 flex max-w-screen-2xl flex-col items-center justify-between gap-6 px-8 md:flex-row">
          <p
            className="font-body text-xs tracking-widest uppercase opacity-60"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            © 2024 Senior Full Stack Architect. Designed with Editorial Intent.
          </p>
          <div className="flex gap-8">
            {['Privacy', 'Source Code'].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-body text-xs tracking-widest uppercase opacity-60 transition-opacity hover:opacity-100"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </footer>

      <Watermark text="fidelity" />
    </>
  );
}
