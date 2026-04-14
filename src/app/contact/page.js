'use client';

import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Watermark from '@/components/ui/Watermark';
import Button from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import Link from 'next/link';

const techStack = [
  'Next.js',
  'TypeScript',
  'PostgreSQL',
  'Docker',
  'AWS',
  'Tailwind CSS',
];

const directChannels = [
  {
    icon: 'alternate_email',
    label: 'vimal@engineer.dev',
    href: 'mailto:vimal@engineer.dev',
  },
  { icon: 'link', label: 'LinkedIn Profile', href: '#' },
];

const projectTypes = [
  'Full Stack Development',
  'UI/UX Engineering',
  'Technical Strategy',
  'Cloud Infrastructure',
];

export default function ContactPage() {
  return (
    <>
      <Navbar
        brandName="Portfolio"
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />

      <main className="mx-auto max-w-7xl px-8 pt-40 pb-24">
        {/* ── Hero ── */}
        <header className="mb-24">
          <h1
            className="font-headline text-7xl leading-tight tracking-tighter italic md:text-9xl"
            style={{ color: 'var(--color-on-surface)' }}
          >
            Let's build <br />
            <span style={{ color: 'var(--color-primary-container)' }}>
              the future.
            </span>
          </h1>
          <p
            className="font-body mt-8 max-w-xl text-lg leading-relaxed"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Currently taking on new architectural challenges and digital
            craftsmanship for Q4 2024. Reach out for high-impact engineering and
            product vision.
          </p>
        </header>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
          {/* ── Contact Form ── */}
          <div className="lg:col-span-7">
            <div
              className="paper-texture relative overflow-hidden p-10 md:p-16"
              style={{
                backgroundColor: 'var(--color-surface-container-low)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <form className="relative z-10 space-y-10">
                {/* Name + Company */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                  <FormField
                    label="Your Name"
                    type="text"
                    placeholder="John Doe"
                  />
                  <FormField
                    label="Company"
                    type="text"
                    placeholder="Acme Inc."
                  />
                </div>

                {/* Email + Project Type */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                  <FormField
                    label="Email Address"
                    type="email"
                    placeholder="hello@world.com"
                  />
                  <div className="relative">
                    <label
                      className="font-label mb-2 block text-[0.6875rem] font-semibold tracking-widest uppercase"
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      Project Type
                    </label>
                    <select
                      className="w-full cursor-pointer appearance-none bg-transparent px-0 py-3 text-lg focus:outline-none"
                      style={{
                        borderBottom: '1px solid rgba(224,191,191,0.4)',
                        color: 'var(--color-on-surface)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {projectTypes.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label
                    className="font-label mb-2 block text-[0.6875rem] font-semibold tracking-widest uppercase"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your vision..."
                    className="w-full resize-none bg-transparent px-0 py-3 text-lg focus:outline-none"
                    style={{
                      borderBottom: '1px solid rgba(224,191,191,0.4)',
                      color: 'var(--color-on-surface)',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                </div>

                {/* Submit */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="font-body flex items-center gap-3 px-12 py-5 font-semibold transition-all hover:opacity-80 hover:shadow-xl active:translate-y-px"
                    style={{
                      backgroundColor: 'var(--color-primary-container)',
                      color: 'var(--color-on-primary)',
                      borderRadius: 'var(--radius-lg)',
                    }}
                  >
                    Send Inquiry
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ── Right Sidebar ── */}
          <div className="space-y-16 lg:col-span-5">
            {/* Availability */}
            <section>
              <div className="mb-6">
                <StatusBadge label="Current Status" />
              </div>
              <div
                className="p-8"
                style={{
                  backgroundColor: 'var(--color-surface-container-highest)',
                  border: '1px solid rgba(224,191,191,0.1)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <p
                  className="font-headline text-3xl italic"
                  style={{ color: 'var(--color-primary-container)' }}
                >
                  Open for Q4 2024
                </p>
                <p
                  className="font-body mt-4 text-sm leading-relaxed"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  I am currently vetting selected projects for the final quarter
                  of the year. I specialise in taking products from zero to one
                  with architectural precision.
                </p>
              </div>
            </section>

            {/* Direct Channels */}
            <section>
              <h3
                className="font-label mb-8 text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: 'var(--color-on-surface)' }}
              >
                Direct Channels
              </h3>
              <div className="space-y-4">
                {directChannels.map((channel) => (
                  <Link
                    key={channel.label}
                    href={channel.href}
                    className="group flex items-center justify-between p-6 transition-all"
                    style={{
                      backgroundColor: 'var(--color-surface-container-low)',
                      borderRadius: 'var(--radius-lg)',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        'var(--color-surface-container-high)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        'var(--color-surface-container-low)')
                    }
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="material-symbols-outlined"
                        style={{ color: 'var(--color-primary-container)' }}
                      >
                        {channel.icon}
                      </span>
                      <span
                        className="font-body font-medium"
                        style={{ color: 'var(--color-on-surface)' }}
                      >
                        {channel.label}
                      </span>
                    </div>
                    <span
                      className="material-symbols-outlined opacity-0 transition-opacity group-hover:opacity-100"
                      style={{ color: 'var(--color-on-surface-variant)' }}
                    >
                      north_east
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Stack */}
            <section>
              <h3
                className="font-label mb-8 text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: 'var(--color-on-surface)' }}
              >
                The Trusted Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-label px-5 py-2 text-xs font-semibold tracking-wide"
                    style={{
                      backgroundColor: 'var(--color-surface-container-highest)',
                      color: 'var(--color-on-surface-variant)',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer
        brandName="Portfolio"
        tagline="Senior Full Stack Engineer. Crafted with intentionality."
      />
      <Watermark text="curate" />
    </>
  );
}

/* ── Reusable form field ── */
function FormField({ label, type, placeholder }) {
  return (
    <div className="relative">
      <label
        className="font-label mb-2 block text-[0.6875rem] font-semibold tracking-widest uppercase"
        style={{ color: 'var(--color-on-surface-variant)' }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent px-0 py-3 text-lg transition-all focus:outline-none"
        style={{
          borderBottom: '1px solid rgba(224,191,191,0.4)',
          color: 'var(--color-on-surface)',
          fontFamily: 'var(--font-body)',
        }}
        onFocus={(e) =>
          (e.currentTarget.style.borderBottomColor = 'var(--color-primary)')
        }
        onBlur={(e) =>
          (e.currentTarget.style.borderBottomColor = 'rgba(224,191,191,0.4)')
        }
      />
    </div>
  );
}
