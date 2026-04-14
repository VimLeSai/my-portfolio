import React from 'react';

const EducationCard = ({ degree, label, field, institution, emphasis }) => {
  return (
    <div
      key={degree}
      className="border-l-2 pl-8"
      style={{ borderColor: 'var(--color-outline-variant)' }}
    >
      <p
        className="font-label mb-1 text-xs tracking-widest uppercase"
        style={{ color: 'var(--color-outline)' }}
      >
        {label}
      </p>
      <p
        className="font-headline text-2xl font-bold"
        style={{ color: 'var(--color-on-surface)' }}
      >
        {field}
      </p>
      <p
        className="font-body mt-1 text-sm"
        style={{ color: 'var(--color-on-surface-variant)' }}
      >
        {institution} • {emphasis}
      </p>
    </div>
  );
};

export default EducationCard;
