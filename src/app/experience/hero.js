import React from 'react';

const ExpHero = () => {
  return (
    <div className="mb-24">
      <p
        className="font-label mb-4 text-xs font-medium tracking-[0.2em] uppercase"
        style={{ color: 'var(--color-on-surface-variant)' }}
      >
        Vimal Desai — Engineering
      </p>
      <h1
        className="font-headline text-7xl leading-none tracking-tighter italic md:text-9xl"
        style={{ color: 'var(--color-on-surface)' }}
      >
        Engineering
        <br />
        Lineage
      </h1>
      <p
        className="font-body mt-8 max-w-2xl text-xl leading-relaxed"
        style={{ color: 'var(--color-on-surface-variant)' }}
      >
        A trajectory defined by 9+ years of architecting scalable systems,
        mentoring high-velocity teams, and translating complex business
        requirements into elegant technical infrastructure.
      </p>
    </div>
  );
};

export default ExpHero;
