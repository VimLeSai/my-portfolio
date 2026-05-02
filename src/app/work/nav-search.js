"use client";
import React from 'react';
import { useProjects } from './context';

const WorkNavSearch = () => {
  const { searchQuery, setSearchQuery } = useProjects();

  return (
    <div className="bg-surface-container-low group ring-primary/10 hidden items-center gap-2 rounded-lg px-4 py-2 transition-all focus-within:ring-2 lg:flex">
      <span className="material-symbols-outlined text-on-surface-variant text-sm">
        search
      </span>
      <input
        className="w-48 border-none bg-transparent text-sm placeholder:text-[#6b6456] focus:ring-0 focus-visible:ring-0! focus-visible:shadow-none! focus-visible:outline-none! shadow-none!"
        placeholder="Search archive..."
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default WorkNavSearch;
