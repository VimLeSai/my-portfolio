import { experience } from '@/lib/experience';
import ExperienceCard from './card';

const Timeline = () => {
  return (
    <section className="relative mb-32">
      {/* Center line */}
      <div
        className="absolute top-0 bottom-0 left-1/2 hidden md:block"
        style={{
          width: '1px',
          background:
            'linear-gradient(to bottom, transparent, var(--color-outline-variant), transparent)',
          transform: 'translateX(-50%)',
        }}
      />

      <div className="space-y-24">
        {Object.values(experience).map((exp) => (
          <ExperienceCard {...exp} key={exp.id} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
