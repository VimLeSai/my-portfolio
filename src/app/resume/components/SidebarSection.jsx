import React from 'react';
export const SidebarSection = ({ label, delay, children }) => (
  <div
    className={`side-section animate-fade-up mb-12`}
    style={{ animationDelay: delay }}
  >
    <div className="side-label text-muted border-rule mb-7 border-b pb-3 font-mono text-[0.72rem] font-black tracking-[0.3em] uppercase">
      {label}
    </div>
    {children}
  </div>
);
