'use client';
import Link from 'next/link';

const footerSections = [
  {
    title: 'Navigation',
    links: [
      { label: 'Work', href: '/work' },
      { label: 'Experience', href: '/experience' },
      { label: 'Process', href: '/process' },
      // { label: 'Archive', href: '/archive' }, will enable later
      { label: 'About', href: '/about' },
    ],
  },
  {
    title: 'Connect',
    links: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/vimlesai/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/vimlesai',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'ReadCV',
        href: '/resume',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'Upwork',
        href: 'https://www.upwork.com/freelancers/~01df3a31d6a2f121f6',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Email', href: '/contact' },
      { label: 'Studio', href: '/studio' },
      { label: 'Stack', href: '/stack' },
      { label: 'Impact Docs', href: '/impact' },
    ],
  },
];

export default function Footer({
  brandName = 'Vimal Desai',
  tagline = 'Senior Full Stack Architect specializing in high-fidelity interfaces and distributed backend systems. Engineered with editorial intent.',
}) {
  return (
    <footer className="w-full border-t border-[var(--color-rule)] bg-[var(--color-paper)] pt-32 pb-16">
      <div className="mx-auto max-w-screen-2xl px-8">
        <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <span
              className="font-headline text-4xl text-[var(--color-ink)]"
              style={{ color: 'var(--color-on-surface)' }}
            >
              {brandName}
            </span>
            <p className="font-body mt-8 max-w-md leading-relaxed text-[var(--color-muted)]">
              © 2026 {tagline}
            </p>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col space-y-6">
              <span className="font-label text-xs font-bold tracking-[0.2em] text-[var(--color-ink)] uppercase">
                {section.title}
              </span>
              <div className="flex flex-col space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.target}
                    rel={link.rel}
                    className="font-body text-md text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-[var(--color-rule)] pt-12 md:flex-row">
          <p className="font-mono text-xs tracking-widest text-[var(--color-muted)] uppercase">
            Built with Next.js 16 & Tailwind 4
          </p>
          <div className="flex gap-8">
            <p className="font-body mt-8 max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
              Made with love by <span style={{ color: 'red' }}>❤️</span>{' '}
              <a
                href="https://www.google.com/search?q=everything+on+%22VimLeSai%22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] underline underline-offset-4"
              >
                VimLeSai
              </a>
            </p>
            {/* <a
              href="#"
              className="font-mono text-xs tracking-widest text-[var(--color-muted)] uppercase transition-colors hover:text-[var(--color-accent)]"
            >
              Terms
            </a>
            <a
              href="#"
              className="font-mono text-xs tracking-widest text-[var(--color-muted)] uppercase transition-colors hover:text-[var(--color-accent)]"
            >
              Privacy
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
