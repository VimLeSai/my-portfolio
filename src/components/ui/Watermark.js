export default function Watermark({ text = 'VimLeSai' }) {
  return (
    <div
      className="pointer-events-none fixed bottom-12 -left-8 z-0 -rotate-90 select-none"
      aria-hidden="true"
    >
      <span className="font-mono text-[10px] tracking-[1em] text-[var(--color-muted)]/20 uppercase">
        {text}
      </span>
    </div>
  );
}
