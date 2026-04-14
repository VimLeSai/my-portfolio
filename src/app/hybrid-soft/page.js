'use client';
import Link from 'next/link';
import Watermark from '@/components/ui/Watermark';

// export const metadata = {
//   title: "Hybrid Soft — Senior Engineer | Vimal Desai",
//   description:
//     "Engineering is the bridge between raw imagination and functional permanence. I build systems that don't just work—they endure.",
// };

const pipelineSteps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Deep immersion into the business problem, user psychology, and technical constraints.',
    bullets: ['Stakeholder Interviews', 'Technical Audit'],
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'Drafting the structural blueprint, database schema, and scalability roadmaps.',
    bullets: ['System Design', 'Schema Mapping'],
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'High-fidelity development using modern stacks with extreme attention to detail.',
    bullets: ['Code Craftsmanship', 'Agile Sprints'],
  },
  {
    num: '04',
    title: 'Optimization',
    desc: 'Rigorous testing, performance tuning, and deployment orchestration.',
    bullets: ['CI/CD Pipelines', 'Performance Audit'],
  },
];

const projects = [
  {
    id: 'emtec',
    title: 'Emtec Financial Hub',
    desc: 'Lead Infrastructure for a multi-tenant banking platform serving 2M+ active users. Redesigned core transaction ledger for 40% efficiency gains.',
    tags: ['Impact: 40% Speed Up', 'Role: Lead Engineer'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    href: '/experience',
  },
  {
    id: 'knovator',
    title: 'Knovator Health',
    desc: 'Unified disparate medical data sources into a real-time provider dashboard. Implemented HIPAA-compliant encryption standards across all touchpoints.',
    tags: ['Impact: Zero Downtime Migration', 'Role: Architect'],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    href: '/experience',
  },
];

const testimonials = [
  {
    text: 'Vimal possesses the rare ability to see the forest and the trees simultaneously. His code is as elegant as his architectural diagrams.',
    author: 'Sarah Chen',
    role: 'CTO, Apex Products',
  },
  {
    text: "The monolithic scaling project he led was a masterclass in engineering discipline. We haven't seen a single crash in 18 months.",
    author: 'Marcus Thorne',
    role: 'Founder, CloudScale',
  },
  {
    text: "Vimal didn't just join our team; he elevated our entire engineering culture through mentorship and rigorous standards.",
    author: 'Elena Rodriguez',
    role: 'VP Engineering, Finova',
  },
];

export default function HybridSoftPage() {
  return (
    <>
      {/* ── Nav ── */}
      <nav
        className="fixed top-0 z-50 w-full shadow-sm"
        style={{
          backgroundColor: 'rgba(250,248,245,0.8)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-6">
          <div
            className="font-headline text-2xl font-bold"
            style={{ color: 'var(--color-primary)' }}
          >
            Senior Engineer
          </div>
          <div className="hidden items-center gap-12 md:flex">
            {[
              { label: 'Work', href: '/' },
              { label: 'Expertise', href: '/stack' },
              { label: 'Journal', href: '/archive' },
              { label: 'About', href: '/about' },
            ].map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-headline text-lg tracking-tight italic transition-colors"
                style={{
                  color:
                    i === 0
                      ? 'var(--color-primary)'
                      : 'var(--color-on-surface-variant)',
                  borderBottom:
                    i === 0 ? '2px solid rgba(128,0,32,0.3)' : 'none',
                  paddingBottom: i === 0 ? '4px' : '0',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="font-label px-6 py-2 text-sm tracking-widest uppercase transition-all hover:opacity-90"
            style={{
              backgroundColor: 'var(--color-primary-container)',
              color: 'var(--color-on-primary)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            Contact
          </Link>
        </div>
      </nav>

      <main className="pt-32">
        {/* ── Hero ── */}
        <section className="mx-auto mb-40 max-w-screen-2xl px-8">
          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <h1
                className="font-headline mb-12 leading-[0.85] tracking-tight"
                style={{
                  fontSize: 'clamp(4rem, 10vw, 9rem)',
                  color: 'var(--color-on-surface)',
                }}
              >
                Crafting
                <br />
                <em style={{ color: 'var(--color-primary)' }}>Monolithic</em>
                <br />
                Digital
                <br />
                Experiences.
              </h1>
            </div>

            <div className="pb-4 md:col-span-4">
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '3/4',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 20px 80px rgba(88,65,65,0.08)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                  alt="Portrait of Vimal Desai, Senior Engineer"
                  className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
                <div className="absolute bottom-6 left-6 z-10 text-white">
                  <p className="font-label text-xs tracking-widest uppercase opacity-80">
                    Based in London, UK
                  </p>
                  <p className="font-headline text-2xl italic">Vimal Desai</p>
                </div>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                    opacity: 0.4,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Philosophy & Stats ── */}
        <section
          className="mb-40 px-8 py-32"
          style={{ backgroundColor: 'var(--color-surface-container-low)' }}
        >
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Quote */}
            <div className="lg:col-span-7">
              <p
                className="font-label mb-8 text-sm tracking-[0.2em] uppercase"
                style={{ color: 'var(--color-outline)' }}
              >
                The Philosophy
              </p>
              <h2
                className="font-headline max-w-2xl text-4xl leading-tight italic md:text-5xl"
                style={{ color: 'var(--color-on-surface)' }}
              >
                "Engineering is the bridge between raw imagination and
                functional permanence. I build systems that don't just work—they
                endure."
              </h2>
              <p
                className="font-body mt-12 max-w-xl text-xl leading-relaxed"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                With over a decade of experience navigating the complexities of
                high-scale architecture, I specialize in transforming fragmented
                visions into cohesive, robust digital products. My approach is
                rooted in structural integrity and aesthetic precision.
              </p>
            </div>

            {/* Stats bento */}
            <div className="grid grid-cols-2 gap-4 lg:col-span-5">
              {[
                {
                  icon: 'history',
                  val: '9+',
                  label: 'Years Experience',
                  bg: 'var(--color-primary-container)',
                  color: 'var(--color-on-primary)',
                  iconColor: 'var(--color-on-primary)',
                },
                {
                  icon: 'rocket_launch',
                  val: '40+',
                  label: 'Projects Launched',
                  bg: 'var(--color-secondary)',
                  color: 'white',
                  iconColor: 'white',
                },
                {
                  icon: 'groups',
                  val: '12',
                  label: 'Teams Mentored',
                  bg: 'var(--color-surface-container-highest)',
                  color: 'var(--color-on-surface)',
                  iconColor: 'var(--color-on-surface)',
                },
                {
                  icon: 'award_star',
                  val: '06',
                  label: 'Design Awards',
                  bg: '#e7e5e1',
                  color: 'var(--color-on-surface)',
                  iconColor: 'var(--color-on-surface)',
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-between p-8"
                  style={{
                    aspectRatio: '1',
                    backgroundColor: stat.bg,
                    borderRadius: 'var(--radius-xl)',
                  }}
                >
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ color: stat.iconColor }}
                  >
                    {stat.icon}
                  </span>
                  <div>
                    <p
                      className="font-headline text-4xl"
                      style={{ color: stat.color }}
                    >
                      {stat.val}
                    </p>
                    <p
                      className="font-label mt-1 text-xs tracking-widest uppercase"
                      style={{ color: stat.color, opacity: 0.7 }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pipeline of Intent — horizontal scroll ── */}
        <section className="mx-auto mb-40 max-w-screen-2xl px-8">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p
                className="font-label mb-4 text-sm tracking-[0.2em] uppercase"
                style={{ color: 'var(--color-outline)' }}
              >
                The Methodology
              </p>
              <h2
                className="font-headline text-5xl italic"
                style={{ color: 'var(--color-on-surface)' }}
              >
                Pipeline of Intent
              </h2>
            </div>
          </div>

          <div
            className="overflow-x-auto pb-12"
            style={{ scrollbarWidth: 'none' }}
          >
            <div className="flex gap-8" style={{ minWidth: 'max-content' }}>
              {pipelineSteps.map((step) => (
                <div
                  key={step.num}
                  className="flex w-80 flex-col gap-6 p-8"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid rgba(224,191,191,0.2)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: '0 20px 80px rgba(88,65,65,0.08)',
                  }}
                >
                  <div
                    className="font-headline text-xl italic"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {step.num}. {step.title}
                  </div>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {step.desc}
                  </p>
                  <ul className="space-y-3">
                    {step.bullets.map((b) => (
                      <li
                        key={b}
                        className="font-label flex items-center gap-2 text-xs tracking-wider uppercase"
                        style={{ color: 'var(--color-on-surface)' }}
                      >
                        <span
                          className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{
                            backgroundColor: 'var(--color-primary-container)',
                          }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Architectural Footprint ── */}
        <section className="mx-auto mb-40 max-w-screen-2xl px-8">
          <div className="mb-16">
            <p
              className="font-label mb-4 text-sm tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-outline)' }}
            >
              Selected Case Studies
            </p>
            <h2
              className="font-headline text-5xl italic"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Architectural Footprint
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {Object.values(projects).map((p) => (
              <div key={p.id} className="group">
                <div
                  className="mb-8 overflow-hidden"
                  style={{
                    aspectRatio: '16/9',
                    backgroundColor: 'var(--color-surface-container-low)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: '0 20px 80px rgba(88,65,65,0.08)',
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-md">
                    <h3
                      className="font-headline mb-4 text-3xl"
                      style={{ color: 'var(--color-on-surface)' }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="font-body mb-6 text-sm leading-relaxed"
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-label px-3 py-1 text-[10px] tracking-widest uppercase"
                          style={{
                            backgroundColor:
                              'var(--color-surface-container-highest)',
                            borderRadius: 'var(--radius-full)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={p.href}
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-colors"
                    style={{
                      border: '1px solid var(--color-outline-variant)',
                      color: 'var(--color-on-surface)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        'var(--color-primary-container)';
                      e.currentTarget.style.color = 'var(--color-on-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--color-on-surface)';
                    }}
                  >
                    <span className="material-symbols-outlined">
                      north_east
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section
          className="mb-40 px-8 py-32"
          style={{
            backgroundColor: 'var(--color-surface-container-lowest)',
            borderTop: '1px solid rgba(224,191,191,0.1)',
            borderBottom: '1px solid rgba(224,191,191,0.1)',
          }}
        >
          <div className="mx-auto max-w-screen-2xl">
            <p
              className="font-label mb-16 text-center text-sm tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-outline)' }}
            >
              Echoes of Success
            </p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.author} className="relative">
                  <span
                    className="font-headline absolute -top-6 -left-4 text-8xl italic opacity-50"
                    style={{ color: 'var(--color-surface-container)' }}
                    aria-hidden
                  >
                    "
                  </span>
                  <p
                    className="font-body relative z-10 mb-8 text-lg italic"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    {t.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full"
                      style={{ backgroundColor: '#e7e5e0' }}
                    >
                      <span
                        className="font-headline text-sm font-bold"
                        style={{ color: 'var(--color-primary-container)' }}
                      >
                        {t.author[0]}
                      </span>
                    </div>
                    <div>
                      <p
                        className="font-body text-sm font-semibold"
                        style={{ color: 'var(--color-on-surface)' }}
                      >
                        {t.author}
                      </p>
                      <p
                        className="font-label text-xs"
                        style={{ color: 'var(--color-outline)' }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Let's build CTA ── */}
        <section
          className="relative overflow-hidden px-8 py-40"
          style={{ backgroundColor: 'var(--color-primary-container)' }}
        >
          {/* subtle background circle */}
          <div
            className="absolute top-1/2 right-32 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-10"
            style={{ border: '1px solid white' }}
            aria-hidden
          />
          <div className="mx-auto max-w-screen-2xl text-center">
            <h2
              className="font-headline mb-8 leading-tight tracking-tighter italic"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                color: 'var(--color-on-primary)',
              }}
            >
              Let's build something remarkable together.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <Link
                href="/contact"
                className="font-label inline-flex items-center gap-3 px-10 py-5 text-xs font-bold tracking-widest uppercase shadow-xl transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'white',
                  color: 'var(--color-primary-container)',
                  borderRadius: 'var(--radius-DEFAULT)',
                }}
              >
                Start a Project
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
              <p
                className="font-label flex items-center gap-2 text-xs tracking-wider uppercase"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                <span className="material-symbols-outlined text-base">
                  public
                </span>
                Available for Global Engagements
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        className="w-full"
        style={{ backgroundColor: 'var(--color-surface-container-low)' }}
      >
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-8 py-20 md:grid-cols-4">
          <div className="md:col-span-1">
            <p
              className="font-headline mb-2 text-2xl font-bold"
              style={{ color: 'var(--color-on-surface)' }}
            >
              Vimal Desai
            </p>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: 'var(--color-on-surface-variant)' }}
            >
              Crafting high-integrity digital products through a lens of
              architectural precision and engineering discipline.
            </p>
          </div>
          {[
            {
              title: 'Capabilities',
              links: ['Case Studies', 'Tech Stack', 'Open Source'],
              hrefs: ['/work/string-erp', '/stack', '#'],
            },
            {
              title: 'Presence',
              links: ['LinkedIn', 'GitHub', 'ReadCV'],
              hrefs: ['#', '#', '#'],
            },
            {
              title: '',
              links: [],
              hrefs: [],
            },
          ].map((col, i) =>
            col.title ? (
              <div key={col.title} className="flex flex-col gap-3">
                <p
                  className="font-label mb-2 text-xs font-bold tracking-widest uppercase"
                  style={{ color: 'var(--color-on-surface)' }}
                >
                  {col.title}
                </p>
                {col.links.map((link, li) => (
                  <Link
                    key={link}
                    href={col.hrefs[li]}
                    className="font-body text-sm transition-colors"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color =
                        'var(--color-primary-container)')
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
            ) : null,
          )}
        </div>
        <div
          className="px-8 pb-8 text-center"
          style={{ borderTop: '1px solid rgba(224,191,191,0.15)' }}
        >
          <p
            className="font-body pt-8 text-xs tracking-widest uppercase opacity-60"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            © 2024 Editorial Curator. All Rights Reserved.
          </p>
        </div>
      </footer>

      <Watermark text="hybrid" />
    </>
  );
}
