import React from 'react';

const ExpHero = () => {
  return (
    <div className="mb-24">
      <p
        className="font-label mb-4 text-xs font-medium tracking-[0.2em] uppercase"
        style={{ color: 'var(--color-on-surface-variant)' }}
      >
        Work history
      </p>
      <h1
        className="font-headline text-7xl leading-none tracking-tighter italic md:text-9xl"
        style={{ color: 'var(--color-on-surface)' }}
      >
        Where the
        <br />
        years went
      </h1>
      <p
        className="font-body mt-8 max-w-2xl text-xl leading-relaxed"
        style={{ color: 'var(--color-on-surface-variant)' }}
      >
        Ten years of shipping — intern to tech lead to the CMMS work I do now.
        Teams, products, and a lot of tickets that had to land.
      </p>
    </div>
  );
};

export default ExpHero;
