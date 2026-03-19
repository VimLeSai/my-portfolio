export default function TechTag({ label }) {
  return (
    <span className="bg-tag-bg text-accent2 border-rule hover:bg-accent2 cursor-default rounded-[2px] border px-2 py-0.5 font-mono text-[0.63rem] tracking-[0.03em] transition-colors duration-200 select-none hover:text-white">
      {label}
    </span>
  );
}
