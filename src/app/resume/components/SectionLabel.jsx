export default function SectionLabel({ label }) {
  return (
    <div className="mb-[22px] flex items-center gap-3">
      <span className="text-muted font-mono text-[0.65rem] tracking-[0.16em] whitespace-nowrap uppercase">
        {label}
      </span>
      <span className="bg-rule h-px flex-1" />
    </div>
  );
}
