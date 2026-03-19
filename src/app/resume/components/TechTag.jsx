export default function TechTag({ label }) {
  return (
    <span className="
      font-mono text-[0.63rem] tracking-[0.03em]
      bg-tag-bg text-accent2
      px-2 py-0.5 rounded-[2px]
      border border-rule
      transition-colors duration-200
      hover:bg-accent2 hover:text-white
      cursor-default select-none
    ">
      {label}
    </span>
  );
}