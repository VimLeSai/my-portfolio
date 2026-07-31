import Navbar from '@/components/nav';

import Biography from '@/app/home/biography';
import Hero from '@/app/home/hero';
import InkBreak from '@/app/home/ink-break';
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
      <Navbar
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />

      <main>
        <Hero />
        <Biography />
        <TheProcess />
        <SelectedArtifacts />
        <InkBreak />
        <Recognitions />
        <Testimonials />
        <LetsTalk />
      </main>

      <Footer
        tagline="Full-stack engineer. Ten years building products that ship and stay up."
      />

      <div className="site-grain" aria-hidden="true" />
      <Watermark text="VimLeSai" />
    </>
  );
};

export default Home;
