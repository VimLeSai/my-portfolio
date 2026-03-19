// components/resume/ResumeHeader.tsx

import Link from 'next/link';

export default function ResumeHeader({ meta }) {
  return (
    <header className="border-ink before:bg-accent relative mb-10 grid md:grid-cols-[1fr_auto] items-end gap-8 border-b-[3px] pb-8 before:absolute before:top-[64px] before:left-4 before:h-1 before:w-16 before:content-['']">
      {/* Name block */}
      <div>
        <h1 className="text-ink animate-fade-up font-serif text-[4.2rem] leading-none tracking-[-0.02em] delay-150">
          {meta.name}
        </h1>

        <p className="text-accent2 animate-fade-up mt-2.5 text-[0.95rem] font-medium tracking-[0.01em] delay-200">
          {meta.title}
        </p>
      </div>

      {/* Contact block */}
      <div className="animate-fade-up text-right flex flex-col items-end delay-[250ms]">
        <a
          href={`mailto:${meta.email}`}
          className="text-muted text-accent2 border-accent2 hover:text-accent block border-b border-dotted font-mono text-[0.72rem] leading-[2] transition-colors"
        >
          {meta.email}
        </a>
        <a
          href={`tel:${meta.phone}`}
          className="text-muted text-accent2 border-accent2 hover:text-accent block border-b border-dotted font-mono text-[0.72rem] leading-[2] transition-colors"
        >
          {meta.phone}
        </a>
        <span className="text-muted block font-mono text-[0.72rem] leading-[2]">
          {meta.location}
        </span>
        <span className="text-muted block space-x-2 font-mono text-[0.72rem] leading-[2]">
          <Link
            href={meta.linkedin}
            target="_blank"
            className="text-accent2 border-accent2 hover:text-accent border-b border-dotted transition-colors"
          >
            LinkedIn
          </Link>
          <span className="text-rule">&nbsp;·&nbsp;</span>
          <Link
            href={meta.github}
            target="_blank"
            className="text-accent2 border-accent2 hover:text-accent border-b border-dotted transition-colors"
          >
            GitHub
          </Link>
          <span className="text-rule">&nbsp;·&nbsp;</span>
          <Link
            href={meta.npm}
            target="_blank"
            className="text-accent2 border-accent2 hover:text-accent border-b border-dotted transition-colors"
          >
            npm
          </Link>
        </span>
      </div>
    </header>
  );
}
