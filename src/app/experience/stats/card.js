import React from 'react';

const ExpStatsCard = ({ label, value, sub, icon, bg, color }) => {
  return (
    <div
      key={label}
      className="flex flex-col gap-4 p-10"
      style={{
        backgroundColor: bg,
        color,
        borderRadius: 'var(--radius-xl)',
      }}
    >
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined opacity-60">{icon}</span>
        <p className="font-label text-xs tracking-widest uppercase opacity-70">
          {label}
        </p>
      </div>
      <p className="font-headline text-6xl font-light">{value}</p>
      <p className="font-body text-sm opacity-80">{sub}</p>
    </div>
  );
};

export default ExpStatsCard;
