'use client';

import Link from 'next/link';
import { useProjects } from './context';

function ProjectCard({ project }) {
  return (
    <article className="group">
      <Link href={`/work/${project.id}`} className="block">
        <div className="bg-surface-container-low mb-4 aspect-video overflow-hidden">
          <img
            alt={project.title}
            className="h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
            src={project.image || '/assets/projects/placeholder.png'}
            style={{ filter: 'grayscale(50%)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'grayscale(0%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'grayscale(50%)';
            }}
          />
        </div>
        <h4 className="font-headline text-on-surface group-hover:text-primary text-xl transition-colors">
          {project.title}
        </h4>
        <p className="font-label text-outline mt-1 text-[10px] tracking-[0.14em] uppercase">
          {project.tags?.[0] || 'Engineering'}
          {project.industries?.[0] ? ` · ${project.industries[0]}` : ''}
        </p>
        <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">
          {project.tagline}
        </p>
      </Link>
    </article>
  );
}

const ProjectsGrid = () => {
  const {
    visibleProjects,
    filteredProjects,
    showAllProjects,
    setShowAllProjects,
  } = useProjects();

  const featured = visibleProjects[0];
  const second = visibleProjects[1];
  const rest = visibleProjects.slice(2);
  const remaining = filteredProjects.length - visibleProjects.length;

  if (filteredProjects.length === 0) {
    return (
      <section className="pb-24">
        <p className="text-on-surface-variant py-16 text-center italic">
          No projects match these filters.
        </p>
      </section>
    );
  }

  return (
    <section className="pb-24">
      {(featured || second) && (
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {featured && (
            <article className="group md:col-span-8">
              <Link href={`/work/${featured.id}`} className="block">
                <div className="bg-surface-container-low relative mb-6 aspect-[16/10] overflow-hidden">
                  <img
                    alt={featured.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    src={featured.image || featured.images?.[0] || '/assets/projects/image.png'}
                    style={{ filter: 'grayscale(40%) contrast(1.04)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter =
                        'grayscale(0%) contrast(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter =
                        'grayscale(40%) contrast(1.04)';
                    }}
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-headline text-on-surface group-hover:text-primary text-3xl transition-colors">
                      {featured.title}
                    </h2>
                    <p className="font-label text-outline mt-1 text-[10px] tracking-[0.16em] uppercase">
                      {featured.role}
                    </p>
                    <p className="text-on-surface-variant mt-3 max-w-xl text-sm leading-relaxed">
                      {featured.tagline}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                      {featured.skills
                        ?.filter(Boolean)
                        .slice(0, 4)
                        .map((skill) => (
                          <span
                            key={skill?.id || skill?.label}
                            className="font-label text-outline text-[10px] tracking-[0.14em] uppercase"
                          >
                            {skill?.label || skill?.name}
                          </span>
                        ))}
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="font-headline text-primary/30 text-2xl transition-colors group-hover:text-primary"
                  >
                    →
                  </span>
                </div>
              </Link>
            </article>
          )}

          {second && (
            <article className="group flex flex-col justify-end md:col-span-4">
              <Link href={`/work/${second.id}`} className="block">
                <span className="font-label text-outline mb-4 block text-[10px] tracking-[0.2em] uppercase">
                  Also notable
                </span>
                <div className="bg-surface-container-low mb-5 aspect-square overflow-hidden">
                  <img
                    alt={second.title}
                    className="h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-[1.03]"
                    src={second.image || second.images?.[0] || '/assets/projects/image.png'}
                    style={{ filter: 'grayscale(55%)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'grayscale(0%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'grayscale(55%)';
                    }}
                  />
                </div>
                <h3 className="font-headline text-on-surface group-hover:text-primary text-2xl transition-colors">
                  {second.title}
                </h3>
                <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">
                  {second.tagline}
                </p>
                <p className="font-label text-primary mt-4 text-[10px] tracking-[0.16em] uppercase">
                  Case study →
                </p>
              </Link>
            </article>
          )}
        </div>
      )}

      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {!showAllProjects && remaining > 0 && (
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            className="font-label text-outline hover:text-primary group flex flex-col items-center gap-3 text-[10px] tracking-[0.25em] uppercase transition-colors"
            onClick={() => setShowAllProjects(true)}
          >
            <span className="border-outline-variant group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary flex h-11 w-11 items-center justify-center border transition-all">
              +
            </span>
            Show {remaining} more
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;
