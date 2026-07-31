'use client';

import React from 'react';
import { useProjects } from './context';
import { workCategories } from './categories';

const WorkAside = () => {
  const { filters, setFilters } = useProjects();

  return (
    <aside className="sticky top-24 hidden h-[calc(100vh-6rem)] w-56 shrink-0 flex-col gap-8 border-r border-[var(--color-outline-variant)]/20 py-8 pr-6 lg:flex xl:w-60">
      <div>
        <h3 className="font-headline text-on-surface text-xl">Projects</h3>
        <p className="font-label text-outline mt-1 text-[10px] tracking-[0.16em] uppercase">
          Filter by type
        </p>
      </div>

      <nav className="flex flex-col gap-1">
        {workCategories.map((cat) => {
          const active = filters.category === cat.name;
          return (
            <button
              key={cat.name}
              type="button"
              className={`font-label px-3 py-2.5 text-left text-sm tracking-wide transition-colors ${
                active
                  ? 'bg-primary-container text-on-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
              }`}
              onClick={() =>
                setFilters((prev) => ({ ...prev, category: cat.name }))
              }
            >
              {cat.short}
            </button>
          );
        })}
      </nav>

      <div className="border-outline-variant/20 mt-auto border-t pt-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="bg-surface-container-highest h-9 w-9 overflow-hidden">
            <img
              alt=""
              src="/assets/hero-image.png"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div>
            <p className="font-label text-on-surface text-xs font-bold tracking-wide">
              Vimal Desai
            </p>
            <p className="font-label text-outline text-[10px] tracking-wider uppercase">
              Open to work
            </p>
          </div>
        </div>
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label border-outline-variant/40 text-on-surface hover:border-primary hover:text-primary block w-full border py-2.5 text-center text-[10px] tracking-[0.16em] uppercase transition-colors"
        >
          Read CV
        </a>
      </div>
    </aside>
  );
};

export default WorkAside;
