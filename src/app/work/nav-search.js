'use client';
import React from 'react';
import { useProjects } from './context';

const WorkNavSearch = () => {
  const { searchQuery, setSearchQuery } = useProjects();

  return (
    <div className="border-outline-variant/30 focus-within:border-primary hidden items-center gap-2 border-b px-1 py-1.5 transition-colors lg:flex">
      <span className="font-label text-outline text-[10px] tracking-wider uppercase">
        Search
      </span>
      <input
        className="text-on-surface placeholder:text-outline w-40 border-none bg-transparent text-sm outline-none xl:w-52"
        placeholder="Archive…"
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search projects"
      />
    </div>
  );
};

export default WorkNavSearch;
