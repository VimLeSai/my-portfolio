import ResumeHeader from '@/components/resume/ResumeHeader';
import SectionLabel from '@/components/resume/SectionLabel';
import JobEntry from '@/components/resume/JobEntry';
import BulletText from '@/components/resume/BulletText';
import Sidebar from '@/components/resume/Sidebar';
import { resumeMeta, jobs } from '@lib/resume-data';

export const metadata = {
  title: 'Vimal Desai — Senior Full Stack Engineer',
  description:
    'Senior Full Stack Engineer with 9+ years of experience building scalable, high-performance web applications.',
};

export default function ResumePage() {
  return (
    <div className="bg-paper min-h-screen">
      <div className="animate-fade-up mx-auto max-w-[960px] px-12 py-[60px] pb-20">
        {/* ── Header ── */}
        <ResumeHeader meta={resumeMeta} />

        {/* ── Body grid: main + sidebar ── */}
        <div className="grid grid-cols-[1fr_260px] items-start gap-12 max-lg:grid-cols-1">
          {/* ── Main column ── */}
          <main>
            {/* About / Summary */}
            <section className="animate-fade-up mb-[38px] delay-300">
              <SectionLabel label="About" />
              <p className="max-w-[640px] text-[0.97rem] leading-[1.75] text-[#2a2520]">
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
