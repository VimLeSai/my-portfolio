import SkillTag from './SkillTag';

export default function SkillGroup({ group }) {
  return (
    <div className="mb-3">
      <p className="text-accent mb-1.5 text-[0.8rem] font-semibold tracking-[0.06em] uppercase">
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
