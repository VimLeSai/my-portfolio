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
  title: 'Experience & Career — Vimal Desai | Senior Full Stack Engineer',
  description:
    "Explore Vimal Desai's 9+ year engineering career across UpKeep, Emtec, and Knovator, leading teams to build high-traffic scalable enterprise applications.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar
        brandName="Vimal Desai"
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
        brandName="Vimal Desai"
        tagline="Engineering the future of digital products through thoughtful architecture."
      />
      <Watermark text="lineage" />
    </>
  );
}
