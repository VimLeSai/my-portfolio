export default function StatusBadge({
  label = 'Available for Q4 2026',
  color = 'var(--color-accent)',
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="relative flex h-2 w-2">
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
          style={{ backgroundColor: color }}
        />
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{ backgroundColor: color }}
        />
      </span>
      <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--color-ink)] uppercase">
        {label}
      </span>
    </div>
  );
}
