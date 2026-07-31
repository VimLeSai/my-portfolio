'use client';

import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import Watermark from '@/components/ui/Watermark';
import Reveal, { RevealItem, RevealStagger } from '@/components/ui/reveal';
import Link from 'next/link';
import ContactForm from './contact-form';

const techStack = [
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'AWS',
];

const directChannels = [
  {
    label: 'vimlesai@duck.com',
    href: 'mailto:vimlesai@duck.com',
    hint: 'Email',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vimlesai',
    hint: 'Profile',
  },
];

export default function ContactContent() {
  return (
    <div className="relative min-h-screen">
      <Navbar
        ctaLabel="Email Me"
        ctaHref="mailto:vimlesai@duck.com"
      />

      <main>
        <header className="hero-atmosphere px-8 pt-40 pb-16 md:pt-48 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="font-label text-primary-container mb-6 text-[0.65rem] tracking-[0.22em] uppercase">
                Contact
              </p>
              <h1
                className="font-headline leading-[0.95] tracking-tight italic"
                style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
              >
                Let&apos;s talk about
                <br />
                <span className="text-primary-container not-italic">
                  the work.
                </span>
              </h1>
              <p className="text-on-surface-variant font-body mt-8 max-w-xl text-lg leading-relaxed">
                Open to full-time roles and select projects. Tell me what
                you&apos;re building — I&apos;ll reply with a clear yes, no, or
                who else to talk to.
              </p>
            </Reveal>
          </div>
        </header>

        <section className="bg-[#12110f] px-8 py-12 text-[#f5f0e8]">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-label mb-3 text-[0.65rem] tracking-[0.2em] text-[#c4a8a8] uppercase">
                Status
              </p>
              <p className="font-headline text-2xl italic md:text-3xl">
                Available for the right fit
              </p>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#b8b0a4]">
              Prefer remote. Can overlap most timezones a few hours a day.
              Surat-based, relocation possible with sponsorship.
            </p>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-8 py-20 lg:grid-cols-12 lg:gap-20 lg:py-28">
          <Reveal className="lg:col-span-7">
            <div className="border-outline-variant/25 border-t pt-10">
              <p className="font-label text-outline mb-8 text-xs tracking-[0.2em] uppercase">
                Send a note
              </p>
              <ContactForm />
            </div>
          </Reveal>

          <RevealStagger className="space-y-14 lg:col-span-5" stagger={0.1}>
            <RevealItem>
              <h3 className="font-label text-outline mb-6 text-xs font-bold tracking-[0.2em] uppercase">
                Direct
              </h3>
              <ul className="space-y-0">
                {directChannels.map((channel) => (
                  <li
                    key={channel.label}
                    className="border-outline-variant/25 border-t"
                  >
                    <Link
                      href={channel.href}
                      className="group flex items-center justify-between py-5 transition-colors"
                    >
                      <div>
                        <p className="font-label text-outline mb-1 text-[10px] tracking-[0.16em] uppercase">
                          {channel.hint}
                        </p>
                        <p className="font-body text-on-surface group-hover:text-primary transition-colors">
                          {channel.label}
                        </p>
                      </div>
                      <span
                        aria-hidden
                        className="text-outline group-hover:text-primary transition-colors"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </RevealItem>

            <RevealItem>
              <h3 className="font-label text-outline mb-6 text-xs font-bold tracking-[0.2em] uppercase">
                Stack I reach for first
              </h3>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-label text-on-surface-variant text-xs tracking-[0.12em] uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </RevealItem>
          </RevealStagger>
        </div>
      </main>

      <Footer
        tagline="Full-stack engineer. Ten years building products that ship and stay up."
      />
      <Watermark text="VimLeSai" />
      <div className="site-grain" aria-hidden="true" />
    </div>
  );
}
