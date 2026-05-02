'use client';

export default function ValueCard({ icon, label, desc }) {
  return (
    <div
      className="group p-8 transition-all duration-500"
      style={{
        backgroundColor: 'var(--color-surface-container-low)',
        border: '1px solid var(--color-outline-variant)',
        borderRadius: 'var(--radius-xl)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-primary-container)';
        e.currentTarget.style.borderColor = 'var(--color-primary-container)';
        // Update child text colors
        e.currentTarget.querySelector('.value-icon').style.color = 'var(--color-on-primary)';
        e.currentTarget.querySelector('.value-title').style.color = 'var(--color-on-primary)';
        e.currentTarget.querySelector('.value-desc').style.color = 'var(--color-on-primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-surface-container-low)';
        e.currentTarget.style.borderColor = 'var(--color-outline-variant)';
        e.currentTarget.querySelector('.value-icon').style.color = 'var(--color-primary-container)';
        e.currentTarget.querySelector('.value-title').style.color = 'var(--color-on-surface)';
        e.currentTarget.querySelector('.value-desc').style.color = 'var(--color-on-surface-variant)';
      }}
    >
      <span
        className="value-icon material-symbols-outlined mb-6 block text-2xl transition-colors"
        style={{ color: 'var(--color-primary-container)' }}
      >
        {icon}
      </span>
      <h3
        className="value-title mb-3 font-serif text-xl transition-colors"
        style={{ color: 'var(--color-on-surface)' }}
      >
        {label}
      </h3>
      <p
        className="value-desc font-sans text-sm transition-colors"
        style={{ color: 'var(--color-on-surface-variant)' }}
      >
        {desc}
      </p>
    </div>
  );
}
