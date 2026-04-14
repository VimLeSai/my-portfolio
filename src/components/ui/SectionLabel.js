export default function SectionLabel({ children, className = '' }) {
  return (
    <span
      className={`font-label text-xs font-bold tracking-[0.2em] uppercase ${className}`}
      style={{ color: 'var(--color-on-surface)' }}
    >
      {children}
    </span>
  );
}
