'use client';
import Link from 'next/link';

export default function Vink({ 
  children, 
  href, 
  className = '', 
  variant = 'primary', // 'primary' | 'secondary'
  mode = 'text',      // 'icon' (round) | 'text' (inline) | 'button' (wide)
  showArrow = false,
  hoverStyle = 'color-only'  // 'fill' | 'color-only'
}) {
  
  // 1. Theme Mapping
  const themes = {
    primary: {
      text: 'text-primary',
      hoverFill: 'hover:bg-[var(--color-primary-container)] hover:text-[var(--color-on-primary)]',
      hoverColor: 'hover:text-[var(--color-primary-container)]',
      border: 'border-[var(--color-outline-variant)]'
    },
    secondary: {
      text: 'text-secondary',
      hoverFill: 'hover:bg-[var(--color-secondary-container)] hover:text-[var(--color-on-secondary-container)]',
      hoverColor: 'hover:text-[var(--color-secondary)]',
      border: 'border-[var(--color-outline-variant)]'
    }
  };

  const activeTheme = themes[variant];

  // 2. Shape/Mode Mapping
  const modes = {
    icon: 'h-12 w-12 inline-flex flex-shrink-0 items-center justify-center rounded-full border',
    text: 'inline-flex items-center gap-2 py-2 px-1 rounded-md',
    button: 'inline-flex items-center gap-3 px-6 py-3 rounded-full border'
  };

  // 3. Hover Logic
  const hoverClasses = hoverStyle === 'fill' ? activeTheme.hoverFill : activeTheme.hoverColor;

  return (
    <Link
      href={href}
      className={`
        group transition-all duration-200 ease-in-out
        ${activeTheme.text}
        ${modes[mode]}
        ${hoverClasses}
        ${mode !== 'text' ? activeTheme.border : ''}
        ${className}
      `}
    >
      {children}
      
      {showArrow && (
        <svg 
          className="w-4 h-4 transition-transform group-hover:translate-x-1" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      )}
    </Link>
  );
}