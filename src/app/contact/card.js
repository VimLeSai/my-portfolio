import React from 'react';
import Image from 'next/image';

function ProjectCard({ project, isExpanded = true }) {
  return (
    <div className="group print:page-break-inside-avoid print:break-inside-avoid">
      <article className="overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-md">
        {/* Header */}
        <div
          
          className="cursor-pointer border-b border-slate-200 p-6 transition-colors hover:bg-slate-50 md:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="mb-2 text-sm font-semibold tracking-wider text-blue-600 uppercase">
                {project.role}
              </div>
              <h2 className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="mb-3 text-lg text-slate-600">
                  {project.subtitle}
                </p>
              )}
              <p className="line-clamp-2 leading-relaxed text-slate-700 md:line-clamp-none">
                {project.description}
              </p>
            </div>
            <button
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200"
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
              <svg
                className={`h-5 w-5 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="animate-in fade-in space-y-8 bg-slate-50 px-6 py-8 duration-300 md:px-8 print:block">
            {/* Impact & Key Features */}
            {project.impact && project.impact.length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-bold tracking-wider text-slate-900 uppercase">
                  Impact & Results
                </h3>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {project.impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technology Stack */}
            <div>
              <h3 className="mb-4 text-sm font-bold tracking-wider text-slate-900 uppercase">
                Technology Stack
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {project.technologies.map((stack, idx) => (
                  <div key={idx}>
                    <h4 className="mb-2 text-xs font-semibold tracking-widest text-slate-600 uppercase">
                      {stack.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((tech, tidx) => (
                        <span
                          key={tidx}
                          className="inline-block rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-medium text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.url || project.github) && (
              <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-4">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Visit Project
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-900"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                )}
              </div>
            )}

            {/* Images */}
            {project.images.length > 0 && (
              <div>
                <h3 className="mb-4 text-sm font-bold tracking-wider text-slate-900 uppercase">
                  Project Showcase
                </h3>
                <div
                  className={`grid gap-4 ${
                    project.images.length === 1
                      ? 'grid-cols-1'
                      : project.images.length === 2
                        ? 'grid-cols-1 md:grid-cols-2'
                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }`}
                >
                  {project.images.map((image, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-lg border border-slate-200 bg-white"
                    >
                      <div className="relative h-48 w-full bg-slate-100 md:h-56">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      {image.caption && (
                        <div className="border-t border-slate-200 p-3">
                          <p className="text-sm font-medium text-slate-900">
                            {image.caption}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </article>
    </div>
  );
}

export default ProjectCard;
