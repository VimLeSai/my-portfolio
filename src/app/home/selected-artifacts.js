'use client';

import Reveal from '@/components/ui/reveal';
import Vink from '@/components/ui/vink';
import { projects } from '@/lib/projects';
import { motion, useReducedMotion } from 'motion/react';

export default function SelectedArtifacts() {
  const { stringerp, rentbase, micqro } = projects;
  const selectedProjects = [stringerp, rentbase, micqro];
  const reduce = useReducedMotion();

  return (
    <section
      className="border-outline-variant/20 mx-auto max-w-7xl border-t px-8 py-28 md:py-36"
      id="work"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-24">
        <Reveal className="h-fit lg:sticky lg:top-40 lg:col-span-4">
          <span className="label-sm text-primary mb-6 block font-bold tracking-widest uppercase">
            Selected Projects
          </span>
          <h2 className="font-headline mb-8 text-4xl leading-tight md:text-5xl">
            Work that paid rent — not demos.
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg leading-relaxed italic">
            Textile ERP, PropTech CRM, quiz social. Real users, real
            constraints.
          </p>
          <div className="editorial-rule mb-6 hidden w-24 lg:block" />
          <Vink
            href="/work"
            mode="text"
            showArrow
            className="text-on-surface-variant text-md group-hover:text-primary my-4 leading-relaxed group-hover:italic hover:italic"
          >
            View All
          </Vink>
        </Reveal>

        <div className="space-y-28 lg:col-span-8">
          {selectedProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <article className="group">
                <a href={`/work/${project.id}`} className="block">
                  <div className="bg-surface-container-low relative mb-7 aspect-[16/10] overflow-hidden">
                    <motion.img
                      className="h-full w-full object-cover"
                      src={project.image}
                      alt={project.title}
                      initial={false}
                      whileHover={
                        reduce ? undefined : { scale: 1.04 }
                      }
                      transition={{
                        duration: 0.85,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{ filter: 'grayscale(55%) contrast(1.04)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter =
                          'grayscale(0%) contrast(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter =
                          'grayscale(55%) contrast(1.04)';
                      }}
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        boxShadow: 'inset 0 0 0 1px rgba(128,0,32,0.25)',
                      }}
                    />
                  </div>
                </a>

                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-headline text-3xl transition-colors group-hover:text-[var(--color-primary-container)]">
                      <a href={`/work/${project.id}`}>{project.title}</a>
                    </h3>
                    <p className="font-body text-on-surface-variant mb-4 mt-1 max-w-xl text-sm leading-relaxed">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-label text-outline text-[10px] font-medium tracking-[0.16em] uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Vink
                    href={`/work/${project.id}`}
                    mode="icon"
                    hoverStyle="fill"
                    className="duration-500 group-hover:bg-[var(--color-primary-container)] group-hover:text-[var(--color-on-primary)]"
                  >
                    <span className="material-symbols-outlined">north_east</span>
                  </Vink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
