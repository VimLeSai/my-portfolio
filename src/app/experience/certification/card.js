import React from 'react';

const CertificationCard = ({ name, icon }) => {
  return (
    <div
      key={name}
      className="flex items-start gap-4 p-6"
      style={{
        backgroundColor: 'var(--color-surface-container-low)',
        borderRadius: 'var(--radius-xl)',
      }}
    >
      <span
        className="material-symbols-outlined text-2xl"
        style={{ color: 'var(--color-primary-container)' }}
      >
        {icon}
      </span>
      <p
        className="font-body text-sm leading-snug font-medium"
        style={{ color: 'var(--color-on-surface)' }}
      >
        {name}
      </p>
    </div>
  );
};

export default CertificationCard;
