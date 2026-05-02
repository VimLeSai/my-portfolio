
import Navbar from '@/components/nav';

import Biography from '@/app/home/biography';
import Hero from '@/app/home/hero';
import LetsTalk from '@/app/home/lets-talk';
import Recognitions from '@/app/home/recognitions';
import SelectedArtifacts from '@/app/home/selected-artifacts';
import Testimonials from '@/app/home/testimonials';
import TheProcess from '@/app/home/the-process';
import Footer from '@/components/footer';
import Watermark from '@/components/ui/Watermark';

const Home = () => {
  return (
    <>
      {/* ── Nav ── */}
      <Navbar
        brandName="Vimal Desai"
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />

      <main>
        <Hero />
        {/* ── Biography & Bento Stats ── */}
        <Biography />

        {/* ── The Process ── */}
        <TheProcess />

        {/* ── Selected Artifacts — Offset Grid ── */}
        <SelectedArtifacts />

        {/* ── Recognitions & CTA ── */}
        {/* ── Honors & Recognition ── */}
        <Recognitions />

        {/* <!-- Testimonials --> */}
        <Testimonials />

        <LetsTalk />
      </main>

      {/* ── Footer ── */}
      <Footer
        brandName="Vimal Desai"
        tagline="Architecting scalable web applications and high-performance digital products."
      />

      <Watermark text="VimLeSai" />
    </>
  );
};

export default Home;
