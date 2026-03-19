import React from 'react';

export const Section = ({ label, children, delay }) => (
  <section
    className={`section animate-fade-up mb-16`}
    style={{ animationDelay: delay }}
  >
    <div className="section-label mb-8 flex items-center gap-6">
      <span className="text-muted font-mono text-[0.75rem] font-black tracking-[0.3em] whitespace-nowrap uppercase opacity-70">
        {label}
      </span>
      <div className="bg-rule h-px w-full"></div>
    </div>
    {children}
  </section>
);