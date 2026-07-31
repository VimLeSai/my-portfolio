import Navbar from '@/components/nav';
import WorkNavSearch from '@/app/work/nav-search';
import Footer from '@/components/footer';
import WorkAside from '@/app/work/aside';
import WorkHeroSection from '@/app/work/hero';
import WorkFilterBar from '@/app/work/filter-bar';
import ProjectsGrid from '@/app/work/projects';
import { ProjectsProvider } from './context';

export const metadata = {
  title: 'Work',
  description:
    'Case studies from Vimal Desai — ERPs, PropTech, travel, social, and platform work built with React, Node.js, and TypeScript.',
};

const AllWork = () => {
  return (
    <ProjectsProvider>
      <div className="relative min-h-screen">
        <Navbar
          ctaLabel="Start a Project"
          ctaHref="/contact"
          rightItems={<WorkNavSearch />}
        />

        {/* Fixed-nav clearance — was broken via invalid mt-21 */}
        <div className="mx-auto flex min-h-screen max-w-screen-2xl gap-0 px-5 pt-28 sm:px-8 lg:gap-10 lg:px-12 lg:pt-32 xl:px-16">
          <WorkAside />
          <main className="min-w-0 flex-1 pb-8">
            <WorkHeroSection />
            <WorkFilterBar />
            <ProjectsGrid />
          </main>
        </div>

        <Footer
          tagline="Full-stack engineer. Ten years building products that ship and stay up."
        />
        <div className="site-grain" aria-hidden="true" />
      </div>
    </ProjectsProvider>
  );
};

export default AllWork;
