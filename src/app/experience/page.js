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
  title: 'Experience — Portfolio',
  description:
    'A trajectory defined by 9+ years of architecting scalable systems.',
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar
        brandName="Senior Engineer"
        ctaLabel="Contact"
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
        brandName="VD."
        tagline="Engineering the future of digital products through thoughtful architecture."
      />
      <Watermark text="lineage" />
    </>
  );
}
