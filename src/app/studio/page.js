import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import StudioContent from './studio-content';

export const metadata = {
  title: 'Studio & Concept Work — Vimal Desai',
  description:
    "A curated gallery of Vimal Desai's design engineering concepts, editorial interfaces, and high-performance UI architectures.",
};

export default function StudioPage() {
  return (
    <>
      <Navbar brandName="Vimal Desai Studio" ctaLabel="Contact" ctaHref="/contact" />
      <StudioContent />
      <Footer
        brandName="Vimal Desai"
        tagline="Where high-end visual design meets uncompromising technical performance."
      />
    </>
  );
}
