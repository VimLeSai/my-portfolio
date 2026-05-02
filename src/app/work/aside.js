"use client";
import React from 'react';

import { useProjects } from './context';

const WorkAside = () => {
  const { filters, setFilters } = useProjects();

  const categories = [
    { name: 'All Projects', icon: 'grid_view' },
    { name: 'Engineering', icon: 'code' },
    { name: 'Design', icon: 'brush' },
    { name: 'Strategy', icon: 'insights' },
  ];

  return (
    <aside className="sticky top-21 hidden h-[calc(100vh-84px)] w-64 flex-col gap-6 border-r border-[#e0bfbf]/15 p-6 lg:flex">
      <div className="mb-4">
        <h3 className="font-['Newsreader'] text-xl font-bold text-[#1c1c18]">
          Work Archive
        </h3>
        <p className="mt-1 text-xs font-medium tracking-wider text-[#6b6456] uppercase">
          2020 — 2024 Collections
        </p>
      </div>
      <nav className="flex flex-col gap-2 font-['Inter'] text-sm font-medium">
        {categories.map((cat) => (
          <a
            key={cat.name}
            className={`flex items-center gap-3 rounded-md px-4 py-2 ${
              filters.category === cat.name
                ? 'bg-[#800020] text-white shadow-inner'
                : 'text-[#6b6456] transition-transform duration-200 hover:translate-x-1 hover:bg-[#f6f3ed]'
            }`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setFilters((prev) => ({ ...prev, category: cat.name }));
            }}
          >
            <span className="material-symbols-outlined text-[18px]">
              {cat.icon}
            </span>{' '}
            {cat.name}
          </a>
        ))}
      </nav>
      <div className="border-outline-variant/15 mt-auto flex flex-col gap-4 border-t pt-6">
        <div className="flex items-center gap-3">
          <div className="bg-surface-container-highest h-10 w-10 overflow-hidden rounded-full">
            <img
              alt="Curator Profile"
              data-alt="professional portrait of a creative engineering lead in a minimalist studio setting with soft natural light"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-6fYRPsDUlNlPsRPsliSDS4nMKQSpJ_RW74ocLtdlhpQKxmbpRCoR2aBEyrbPave_kepDHMOBp0BvKInsAmlhTxHS8SAkZ8yVxeB_sXRg93SdWX7LEXG4k-Y-TmHYg6Q01rMDGHulpekhuqoalNAIxlun9J1zmrG6DtnfmC0PN5aBUhX_IiHlKu6I-kKqoyYOlqHQidvmgQO5eKeEenfkcL74vziwySxvMKCfBfq9dWs4XKSm5FAvXBXi7hy5YDJjUlm6xDYuM3U"
            />
          </div>
          <div>
            <p className="text-on-surface text-sm font-bold">
              Curator Profile
            </p>
            <p className="text-on-surface-variant text-[10px] tracking-widest uppercase">
              Active Now
            </p>
          </div>
        </div>
        <button className="bg-surface-container-high text-primary border-primary/5 hover:bg-surface-container-highest rounded-md border py-3 text-xs font-bold transition-colors">
          Download CV
        </button>
      </div>
    </aside>
  );
};

export default WorkAside;