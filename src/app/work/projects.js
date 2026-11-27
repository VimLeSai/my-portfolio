'use client';

import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import ProjectCover from '@/components/ui/project-cover';
import { useProjects } from './context';

function CoverHover() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-[rgba(28,28,24,0.58)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <span className="font-label m-4 translate-y-1.5 text-[10px] tracking-[0.16em] uppercase text-white transition-transform duration-300 group-hover:translate-y-0">
        Read case study →
      </span>
    </div>
  );
}

function kicker(project) {
  return (
    [project.tags?.[0], project.industries?.[0]]
      .filter(Boolean)
      .filter(
        (v, i, arr) =>
          arr.findIndex((x) => x.toLowerCase() === v.toLowerCase()) === i,
      )
      .join(' · ') || 'Engineering'
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={`/work/${project.id}`} className="block">
        <div className="bg-surface-container-low relative mb-4 aspect-video overflow-hidden">
          <ProjectCover
            src={project.image}
            alt={project.title}
            title={project.title}
            imgClassName="h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-[1.04]"
            imgStyle={{ filter: 'grayscale(50%)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'grayscale(0%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'grayscale(50%)';
            }}
          />
          <CoverHover />
        </div>
        <h4 className="font-headline text-on-surface group-hover:text-primary text-xl transition-colors">
          {project.title}
        </h4>
        <p className="font-label text-outline mt-1 text-[10px] tracking-[0.14em] uppercase">
          {kicker(project)}
        </p>
        <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">
          {project.tagline}
        </p>
      </Link>
    </motion.article>
  );
}

const ProjectsGrid = () => {
  const {
    visibleProjects,
    filteredProjects,
    showAllProjects,
    setShowAllProjects,
  } = useProjects();
  const reduce = useReducedMotion();

  const featured = visibleProjects[0];
  const second = visibleProjects[1];
  const rest = visibleProjects.slice(2);
  const remaining = filteredProjects.length - visibleProjects.length;

  if (filteredProjects.length === 0) {
    return (
      <section className="pb-24">
        <p className="text-on-surface-variant py-16 text-center">
          Nothing matches those filters.
        </p>
      </section>
    );
  }

  return (
    <section className="pb-24">
      <AnimatePresence mode="popLayout" initial={false}>
        {(featured || second) && (
          <motion.div
            key={`${featured?.id}-${second?.id}`}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10"
          >
            {featured && (
              <article className="group md:col-span-8">
                <Link href={`/work/${featured.id}`} className="block">
                  <div className="bg-surface-container-low relative mb-6 aspect-[16/10] overflow-hidden">
                    <ProjectCover
                      src={featured.image || featured.images?.[0]}
                      alt={featured.title}
                      title={featured.title}
                      imgClassName="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                      imgStyle={{ filter: 'grayscale(40%) contrast(1.04)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter =
                          'grayscale(0%) contrast(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter =
                          'grayscale(40%) contrast(1.04)';
                      }}
                    />
                    <CoverHover />
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
                      className="font-headline text-primary/30 text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
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
                  <div className="bg-surface-container-low relative mb-5 aspect-square overflow-hidden">
                    <ProjectCover
                      src={second.image || second.images?.[0]}
                      alt={second.title}
                      title={second.title}
                      imgClassName="h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-[1.04]"
                      imgStyle={{ filter: 'grayscale(55%)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'grayscale(0%)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'grayscale(55%)';
                      }}
                    />
                    <CoverHover />
                  </div>
                  <h3 className="font-headline text-on-surface group-hover:text-primary text-2xl transition-colors">
                    {second.title}
                  </h3>
                  <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">
                    {second.tagline}
                  </p>
                  <p className="font-label text-primary mt-4 text-[10px] tracking-[0.16em] uppercase transition-transform duration-300 group-hover:translate-x-1">
                    Case study →
                  </p>
                </Link>
              </article>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      )}

      {!showAllProjects && remaining > 0 && (
        <div className="mt-16 flex justify-center">
          <motion.button
            type="button"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { y: 0 }}
            className="font-label text-outline hover:border-primary hover:text-primary border-outline-variant cursor-pointer border px-7 py-3 text-[0.65rem] tracking-[0.2em] uppercase transition-colors"
            onClick={() => setShowAllProjects(true)}
          >
            Show {remaining} more
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;
