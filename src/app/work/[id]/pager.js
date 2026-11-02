'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CaseStudyPager({ prev, next }) {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e) => {
      if (e.defaultPrevented) return;
      const tag = e.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target?.isContentEditable) {
        return;
      }
      if (e.key === 'ArrowLeft' && prev) router.push(`/work/${prev.id}`);
      if (e.key === 'ArrowRight' && next) router.push(`/work/${next.id}`);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next, router]);

  return (
    <nav
      className="mt-16 grid grid-cols-1 gap-4 border-t border-[var(--color-outline-variant)] pt-10 md:grid-cols-2 md:gap-8"
      aria-label="More case studies"
    >
      {prev ? (
        <Link
          href={`/work/${prev.id}`}
          className="group border-outline-variant/30 hover:border-primary/40 flex flex-col gap-2 border p-6 transition-colors"
        >
          <span className="font-label text-outline text-[0.6rem] tracking-[0.18em] uppercase transition-colors group-hover:text-[var(--color-primary-container)]">
            ← Previous
          </span>
          <span className="font-headline text-2xl leading-tight text-[var(--color-on-surface)] transition-colors group-hover:text-[var(--color-primary-container)]">
            {prev.title}
          </span>
          {prev.tagline ? (
            <span className="text-on-surface-variant line-clamp-2 text-sm leading-relaxed">
              {prev.tagline}
            </span>
          ) : null}
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/work/${next.id}`}
          className="group border-outline-variant/30 hover:border-primary/40 flex flex-col gap-2 border p-6 text-right transition-colors md:ml-auto md:items-end"
        >
          <span className="font-label text-outline text-[0.6rem] tracking-[0.18em] uppercase transition-colors group-hover:text-[var(--color-primary-container)]">
            Next →
          </span>
          <span className="font-headline text-2xl leading-tight text-[var(--color-on-surface)] transition-colors group-hover:text-[var(--color-primary-container)]">
            {next.title}
          </span>
          {next.tagline ? (
            <span className="text-on-surface-variant line-clamp-2 text-sm leading-relaxed">
              {next.tagline}
            </span>
          ) : null}
        </Link>
      ) : null}
    </nav>
  );
}
