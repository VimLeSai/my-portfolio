export default function SectionLabel({ label }) {
  return (
    <div className="flex items-center gap-3 mb-[22px]">
      <span className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-muted whitespace-nowrap">
        {label}
      </span>
      <span className="flex-1 h-px bg-rule" />
    </div>
  );
}