'use client';

import Reveal from '@/components/ui/reveal';

export default function WorkHeroSection() {
  return (
    <Reveal className="mb-10 max-w-3xl md:mb-14">
      <span className="font-label text-outline mb-4 block text-[0.6875rem] font-semibold tracking-[0.2em] uppercase">
        Work
      </span>
      <h1 className="font-headline text-on-surface text-4xl leading-[0.95] tracking-tight italic sm:text-5xl md:text-6xl lg:text-7xl">
        Things I built
        <br />
        <span className="text-primary-container not-italic">for real users.</span>
      </h1>
      <p className="text-on-surface-variant font-body mt-6 max-w-2xl text-base leading-relaxed md:mt-7 md:text-lg">
        Case studies from ERPs, PropTech, travel, social, and platform work —
        frontends, APIs, and the messy middle. Filter by company, domain, or
        skill.
      </p>
    </Reveal>
  );
}
