import ScheduleConsultationCTA from '@/components/cta/schedule-consultation';
import Footer from '@/components/footer';
import Navbar from '@/components/nav';
import Watermark from '@/components/ui/Watermark';
import Certifications from './certification';
import Education from './education';
import ExpHero from './hero';
import ExpStats from './stats';
import Timeline from './timeline';

export const metadata = {
  title: 'Experience',
  description:
    "Explore Vimal Desai's 10+ year engineering career — currently shipping CMMS features, in-product AI, and agent-assisted delivery at UpKeep, plus earlier work at Emtec and Knovator.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />

      <main className="mx-auto max-w-7xl px-8 pt-40 pb-24">
        {/* ── Hero ── */}
        <ExpHero />
        {/* ── Stats ── */}
        <ExpStats />

        {/* ── Timeline ── */}
        <Timeline />

        {/* ── Education & Certs ── */}
        <section className="mb-32 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Education */}
          <Education />

          {/* Certifications */}
          <Certifications />
        </section>

        {/* ── CTA ── */}
        <ScheduleConsultationCTA />
      </main>

      <Footer
        tagline="Full-stack engineer. Ten years building products that ship and stay up."
      />
      <Watermark text="lineage" />
    </>
  );
}
