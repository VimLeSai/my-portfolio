"use client";
import React from 'react';
import Link from 'next/link';
import { useProjects } from './context';

const ProjectsGrid = () => {
  const { visibleProjects, filteredProjects, showAllProjects, setShowAllProjects } = useProjects();

  const renderProject = (project, index) => {
    const isFirst = index === 0;
    const isSecond = index === 1;

    if (isFirst) {
      return (
        <article key={project.id} className="group md:col-span-8">
          <Link href={`/work/${project.id}`} className="block">
            <div className="bg-surface-container-low editorial-shadow overflow-hidden rounded-lg transition-transform duration-500 hover:scale-[1.01]">
              <img
                alt={project.title}
                className="h-[400px] w-full scale-105 rounded-b-lg object-cover transition-transform duration-700 group-hover:scale-100 object-top-left"
                data-alt={project.tagline}
                src={project.image || '/assets/projects/image.png'}
              />
              <div className="p-8">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h2 className="font-headline text-primary text-3xl font-bold transition-all group-hover:italic">
                      {project.title}
                    </h2>
                    <p className="text-on-surface-variant mt-1 text-sm font-bold tracking-widest uppercase">
                      {project.role}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-primary-container text-4xl opacity-20 transition-opacity group-hover:opacity-100">
                    arrow_outward
                  </span>
                </div>
                <p className="text-on-surface/80 mb-6 max-w-xl leading-relaxed">
                  {project.overview || project.tagline}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.skills?.slice(0, 3).map((skill) => (
                    <span key={skill?.id} className="bg-surface-container-highest text-on-surface-variant rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase">
                      {skill?.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </article>
      );
    }

    if (isSecond) {
      return (
        <article key={project.id} className="mt-12 flex flex-col justify-end md:col-span-4 md:mt-0">
          <div className="border-primary/10 border-l-2 p-6">
            <span className="mb-4 block text-[10px] font-bold tracking-[0.2em] text-[#6b6456] uppercase">
              Archive 00{index + 1}
            </span>
            <Link href={`/work/${project.id}`} className="group/link block">
              <h3 className="font-headline text-on-surface mb-2 text-2xl font-bold group-hover/link:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-on-surface-variant mb-6 text-sm">
                {project.tagline}
              </p>
              <img
                alt="Design System Grid"
                className="mb-6 aspect-square w-full rounded-lg object-cover grayscale transition-all duration-500 hover:grayscale-0 object-top-left"
                data-alt={project.title}
                src={project.image || '/assets/projects/image.png'}
              />
              <div className="text-primary group flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                Case Study{' '}
                <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-2">
                  arrow_forward
                </span>
              </div>
            </Link>
          </div>
        </article>
      );
    }

    return (
      <article key={project.id} className="group">
        <Link href={`/work/${project.id}`} className="block">
          <div className="bg-surface-container-low rounded-lg p-1">
            <img
              alt={project.title}
              className="aspect-video w-full rounded-lg object-cover object-top-left grayscale transition-all duration-500 hover:grayscale-0"
              data-alt={project.tagline}
              src={project.image || '/assets/projects/placeholder.png'}
            />
          </div>
          <h4 className="font-headline text-on-surface group-hover:text-primary my-1 text-xl font-bold transition-colors">
            {project.title}
          </h4>
          <p className="mb-3 text-[10px] font-bold tracking-widest text-[#6b6456] uppercase">
            {project.tags?.[0] || 'Engineering'} • {project.industries?.[0] || 'Software'}
          </p>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            {project.tagline}
          </p>
        </Link>
      </article>
    );
  };

  const firstTwo = visibleProjects.slice(0, 2);
  const rest = visibleProjects.slice(2);

  return (
    <section className="grid grid-cols-1 gap-y-16 pb-24 md:grid-cols-12 md:gap-x-12">
      {/* First row: two projects */}
      {firstTwo.map((project, i) => renderProject(project, i))}

      {/* Row 2: Standard Grid */}
      {rest.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-12 md:col-span-12 md:grid-cols-3">
          {rest.map((project, i) => renderProject(project, i + 2))}
        </div>
      )}

      {/* Load More Asymmetric Section */}
      {visibleProjects.length < filteredProjects.length && (
        <div className="mt-12 flex justify-center md:col-span-12">
          <button
            className="group flex flex-col items-center gap-4"
            onClick={() => setShowAllProjects(true)}
          >
            <div className="border-primary/20 group-hover:bg-primary flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 group-hover:text-white">
              <span className="material-symbols-outlined">expand_more</span>
            </div>
            <span className="text-on-surface-variant text-[10px] font-bold tracking-[0.3em] uppercase">
              Reveal Full Archive
            </span>
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;
