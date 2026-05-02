import ResumeHeader from './components/ResumeHeader';
import SectionLabel from './components/SectionLabel';
import JobEntry from './components/JobEntry';
import BulletText from './components/BulletText';
import Sidebar from './components/Sidebar';
import { resumeMeta, jobs } from '@lib/resume-data';

export const metadata = {
  title: 'Resume — Vimal Desai | Senior Full Stack Engineer',
  description:
    'View the professional resume of Vimal Desai. 9+ years of full stack engineering expertise with React, Node.js, TypeScript, and AWS infrastructure.',
};

export default function ResumePage() {
  return (
    <div className="bg-paper min-h-screen">
      <div className="animate-fade-up mx-auto w-full max-w-6xl px-6 py-8 pb-12 md:px-12 md:py-15 md:pb-20">
        {/* ── Header ── */}
        <ResumeHeader meta={resumeMeta} />

        {/* ── Body grid: main + sidebar ── */}
        <div className="grid grid-cols-[1fr_300px] items-start gap-12 max-lg:grid-cols-1">
          {/* ── Main column ── */}
          <main>
            {/* About / Summary */}
            <section className="animate-fade-up mb-[38px] delay-300">
              <SectionLabel label="About" />
              <p className="max-w-[764px] text-[1rem] leading-[1.75] text-[#2a2520]">
                <BulletText text={resumeMeta.summary} />
              </p>
            </section>

            {/* Experience */}
            <section className="animate-fade-up mb-[38px] delay-400">
              <SectionLabel label="Experience" />
              {jobs.map((job, i) => (
                <JobEntry
                  key={`${job.company}-${i}`}
                  job={job}
                  isLast={i === jobs.length - 1}
                />
              ))}
            </section>
          </main>

          {/* ── Sidebar ── */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
