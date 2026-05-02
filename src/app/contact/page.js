import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Watermark from '@/components/ui/Watermark';
import StatusBadge from '@/components/ui/StatusBadge';
import Link from 'next/link';
import ContactForm from './contact-form';

export const metadata = {
  title: 'Contact Vimal Desai — Senior Full Stack Engineer',
  description:
    'Get in touch with Vimal Desai to collaborate on high-impact engineering, architectural consulting, and product vision.',
};

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
    label: 'vimlesai@duck.com',
    href: 'mailto:vimlesai@duck.com',
  },
  { icon: 'link', label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/vimlesai' },
];

export default function ContactPage() {
  return (
    <>
      <Navbar
        brandName="Vimal Desai"
        ctaLabel="Email Me"
        ctaHref="mailto:vimlesai@duck.com"
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
            Currently open for new architectural challenges and digital craftsmanship. 
            Reach out to collaborate on high-impact engineering and product vision.
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
              <ContactForm />
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
                  Available for New Opportunities
                </p>
                <p
                  className="font-body mt-4 text-sm leading-relaxed"
                  style={{ color: 'var(--color-on-surface-variant)' }}
                >
                  I am currently evaluating select projects and opportunities. I specialize in taking products from zero to one with architectural precision and scaling existing platforms.
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
        brandName="Vimal Desai"
        tagline="Available for new architectural challenges and technical leadership roles."
      />
      <Watermark text="curate" />
    </>
  );
}
