import ResumeHeader from "@/components/resume/ResumeHeader";
import SectionLabel from "@/components/resume/SectionLabel";
import JobEntry from "@/components/resume/JobEntry";
import BulletText from "@/components/resume/BulletText";
import Sidebar from "@/components/resume/Sidebar";
import { resumeMeta, jobs } from "@lib/resume-data";

export const metadata = {
  title: "Vimal Desai — Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer with 9+ years of experience building scalable, high-performance web applications.",
};

export default function ResumePage() {
  return (
    <div className="bg-paper min-h-screen">
      <div className="max-w-[960px] mx-auto px-12 py-[60px] pb-20 animate-fade-up">

        {/* ── Header ── */}
        <ResumeHeader meta={resumeMeta} />

        {/* ── Body grid: main + sidebar ── */}
        <div className="grid grid-cols-[1fr_260px] gap-12 items-start max-lg:grid-cols-1">

          {/* ── Main column ── */}
          <main>

            {/* About / Summary */}
            <section className="mb-[38px] animate-fade-up delay-300">
              <SectionLabel label="About" />
              <p className="text-[0.97rem] leading-[1.75] text-[#2a2520] max-w-[640px]">
                <BulletText text={resumeMeta.summary} />
              </p>
            </section>

            {/* Experience */}
            <section className="mb-[38px] animate-fade-up delay-400">
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