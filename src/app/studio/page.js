import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import StudioContent from './studio-content';

export const metadata = {
  title: 'Studio',
  description:
    'Search the web presence of Vimal Desai — profiles, writing, and public work in one place.',
};

export default function StudioPage() {
  return (
    <>
      <Navbar ctaLabel="Contact" ctaHref="/contact" />
      <StudioContent />
      <Footer
        brandName="Vimal Desai"
        tagline="Full-stack engineer. Ten years building products that ship and stay up."
      />
      <div className="site-grain" aria-hidden="true" />
    </>
  );
}
