'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { label: 'Work', href: '/' },
  { label: 'Experience', href: '/experience' },
  // { label: 'Archive', href: '/archive' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
];

export default function Navbar({
  brandName = 'VimLeSai',
  ctaLabel = `Let's Talk`,
  ctaHref = '/contact',
  rightItems = null,
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 z-50 w-full border-b border-stone-200/60 bg-[#F5F0E8]/85 px-6 backdrop-blur-md"
        style={{
          background: 'rgba(252,249,243,0.7)',
          backdropFilter: 'blur(15px)',
          boxShadow: '0 15px 80px rgba(88,65,65,0.08)',
        }}
      >
        <nav className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-8 py-6">
          <a
            href="/"
            className="font-headline text-2xl font-bold"
            style={{ color: 'var(--color-on-surface)' }}
          >
            {brandName}
          </a>
          <div className="hidden items-center gap-12 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body text-base tracking-wide transition-colors ${
                    isActive
                      ? 'text-[var(--color-accent)]'
                      : 'text-[var(--color-ink)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            {rightItems}
            <Link
              href={ctaHref}
              className="font-body px-6 py-2 text-sm hidden md:block tracking-wide shadow-sm transition-all hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-primary-container)',
                color: 'var(--color-on-primary)',
                borderRadius: 'var(--radius-DEFAULT)',
              }}
            >
              {ctaLabel}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex flex-col gap-1.5 p-2 md:hidden"
              aria-label="Toggle navigation"
            >
              <span
                className="block h-px w-6 bg-[var(--color-ink)] transition-all duration-300"
                style={{
                  transform: mobileOpen
                    ? 'translateY(8px) rotate(45deg)'
                    : 'none',
                }}
              />
              <span
                className="block h-px w-6 bg-[var(--color-ink)] transition-all duration-300"
                style={{
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-px w-6 bg-[var(--color-ink)] transition-all duration-300"
                style={{
                  transform: mobileOpen
                    ? 'translateY(-8px) rotate(-45deg)'
                    : 'none',
                }}
              />
            </button>
          </div>
          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 top-[73px] h-[calc(100vh-73px)] bg-[var(--color-paper)] transition-all duration-500 ease-in-out md:hidden ${
              mobileOpen
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none -translate-y-4 opacity-0'
            }`}
          >
            <div className="flex h-full flex-col items-center justify-start space-y-8 py-12">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-body text-base tracking-wide transition-colors ${
                      isActive
                        ? 'text-[var(--color-accent)]'
                        : 'text-[var(--color-ink)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href={ctaHref}
                onClick={() => setMobileOpen(false)}
                className="mt-8 bg-[var(--color-accent)] px-10 py-4 font-bold tracking-widest text-[var(--color-paper)] uppercase"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
