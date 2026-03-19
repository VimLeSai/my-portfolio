import SkillTag from "./SkillTag";

export default function SkillGroup({ group }) {
  return (
    <div className="mb-3">
      <p className="text-[0.72rem] font-semibold text-accent uppercase tracking-[0.06em] mb-1.5">
        {group.category}
      </p>
      <div className="flex flex-wrap gap-1">
        {group.skills.map((skill) => (
          <SkillTag key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
}