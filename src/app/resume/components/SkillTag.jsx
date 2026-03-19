export default function SkillTag({ label }) {
  return (
    <span className="bg-tag-bg text-ink hover:bg-accent cursor-default rounded-[2px] px-2 py-[3px] text-[0.72rem] leading-[1.4] transition-colors duration-200 select-none hover:text-white">
      {label}
    </span>
  );
}
