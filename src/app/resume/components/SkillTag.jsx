export default function SkillTag({ label }) {
  return (
    <span className="
      text-[0.72rem] leading-[1.4]
      bg-tag-bg text-ink
      px-2 py-[3px] rounded-[2px]
      transition-colors duration-200
      hover:bg-accent hover:text-white
      cursor-default select-none
    ">
      {label}
    </span>
  );
}