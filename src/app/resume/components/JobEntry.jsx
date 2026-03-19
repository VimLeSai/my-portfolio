// components/resume/JobEntry.tsx

import TechTag from './TechTag';
import BulletText from './BulletText';

export default function JobEntry({ job, isLast = false }) {
  return (
    <article
      className={`mb-[30px] pb-[30px] ${!isLast ? 'border-rule border-b' : ''}`}
    >
      {/* Title + Period */}
      <div className="mb-1 flex items-start justify-between gap-4">
        <h3 className="text-ink font-serif text-lg leading-[1.2]">
          {job.title}
        </h3>
        <span className="text-accent pt-1 font-mono text-[0.66rem] tracking-[0.04em] whitespace-nowrap">
          {job.period}
        </span>
      </div>

      {/* Company */}
      <p className="text-accent2 mb-0.5 text-sm font-semibold tracking-[0.01em]">
        {job.company}
      </p>

      {/* Location */}
      <p className="text-muted mb-3 font-mono text-[0.74rem]">{job.location}</p>

      {/* Bullets */}
      <ul className="list-none space-y-[5px]">
        {job.bullets.map((bullet, i) => (
          <li
            key={i}
            className="relative pl-4 text-[1rem] leading-[1.65] text-[#2d2822]"
          >
            <span className="text-accent absolute top-[4px] left-0 text-[0.7rem]">
              ▸
            </span>
            <BulletText text={bullet} />
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="mt-2.5 flex flex-wrap gap-[5px]">
        {job.tech.map((t) => (
          <TechTag key={t} label={t} />
        ))}
      </div>
    </article>
  );
}
