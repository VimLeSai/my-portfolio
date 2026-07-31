'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { projectsArray } from '@/lib/projects';
import ProjectCard from './card';

// Main Portfolio Component
export default function PortfolioProjects() {

const projectsData = projectsArray
  // .filter((p) => p.image)
  .map((project, index) => {
    const skillNames = (project.skills || []).map((s) => s.label || s);
    const toolNames = (project.tools || []).map((t) => t.label || t);

    return {
      id: index + 1,
      libId: project.id,
      title: project.title,
      subtitle: project.tagline,
      description: project.overview,
      role: project.role,
      technologies: [
        ...(skillNames.length > 0
          ? [{ category: 'Skills', items: skillNames }]
          : []),
        ...(toolNames.length > 0
          ? [{ category: 'Tools', items: toolNames }]
          : []),
      ],
      impact: project.impacts
        ? project.impacts.map((i) => i.after).filter(Boolean)
        : project.impact
          ? [project.impact]
          : [],
      images: ([project.image, ...(project.showcaseImages || [])]).filter(Boolean).map((src, idx) => ({
        src,
        alt: `${project.title} screenshot ${idx + 1}`,
        caption: project.title,
      })),
      url: project.url || null,
    };
  });
console.log('projects', projectsData);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-slate-200 bg-white print:static">
        <div className="mx-auto max-w-6xl px-6 py-8 md:px-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold text-slate-900 md:text-5xl">
                Vimal Desai - Portfolio
              </h1>
              <p className="text-lg text-slate-600">
                Featured projects & work experience
              </p>
            </div>
            {/* <button
              onClick={() => window.print()}
              className="hidden items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 md:flex"
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
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print
            </button> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 print:hidden">
            <div className="rounded-lg bg-blue-50 p-3">
              <div className="text-2xl font-bold text-blue-600">
                {projectsData.length}
              </div>
              <div className="text-sm text-slate-600">Featured Projects</div>
            </div>
            <div className="rounded-lg bg-green-50 p-3">
              <div className="text-2xl font-bold text-green-600">10+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="rounded-lg bg-purple-50 p-3">
              <div className="text-2xl font-bold text-purple-600">
                Full-Stack
              </div>
              <div className="text-sm text-slate-600">Development</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-8">
        <div className="space-y-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
