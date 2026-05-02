export default function SectionDivider({ className = '' }) {
  return (
    <div
      className={`my-16 h-px w-full ${className}`}
      style={{ backgroundColor: 'var(--color-outline-variant)' }}
      aria-hidden
    />
  );
}
