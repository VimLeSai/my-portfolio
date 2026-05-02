import Navbar from '@/components/nav';
import WorkNavSearch from '@/app/work/nav-search';
import React from 'react';
import Footer from '@/components/footer';
import WorkAside from '@/app/work/aside';
import WorkHeroSection from '@/app/work/hero';
import WorkFilterBar from '@/app/work/filter-bar';
import ProjectsGrid from '@/app/work/projects';
import { ProjectsProvider } from './context';

export const metadata = {
  title: 'Work & Projects — Vimal Desai | Full Stack Portfolio',
  description:
    'Discover the technical portfolio of Vimal Desai, showcasing enterprise SaaS, API gateways, and real-time architectures built with React, Node.js, and AWS.',
};

const AllWork = () => {
  return (
    <ProjectsProvider>
      <div>
        {/* TopNavBar Shell */}
        <Navbar
          brandName="Vimal Desai"
          ctaLabel="Start a Project"
          ctaHref="/contact"
          rightItems={<WorkNavSearch />}
        />
        <div className="mx-auto flex min-h-screen max-w-screen-2xl">
          {/* SideNavBar Shell */}
          <WorkAside />

          {/* Main Content Canvas */}
          <main className="flex-1 px-8 pt-12 md:mt-21 lg:px-16">
            {/* Header Section */}
            <WorkHeroSection />
            {/* Filters Bar */}
            <WorkFilterBar />
            {/* Project Grid: Asymmetric Bento */}
            <ProjectsGrid />
          </main>
        </div>
        {/* Footer Shell */}
        <Footer
          brandName="Vimal Desai"
          tagline="Turning complex engineering challenges into robust, user-centric software solutions."
        />
      </div>
    </ProjectsProvider>
  );
};

export default AllWork;
