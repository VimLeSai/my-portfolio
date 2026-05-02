"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useProjects } from './context';
import { companies } from '@/lib/companies';
import { skills } from '@/lib/skills';

const SearchableDropdown = ({ label, options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter(opt => 
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="group relative" ref={dropdownRef}>
      <label className="mb-1.5 block text-[10px] font-bold tracking-widest text-[#6b6456] uppercase">
        {label}
      </label>
      <div 
        className="bg-surface-container-low text-on-surface hover:bg-surface-container-high flex min-w-[160px] items-center justify-between gap-4 rounded-md pl-6 pr-12 py-3 text-sm font-medium transition-colors cursor-pointer outline-none focus:ring-2 focus:ring-primary/50 relative"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        <span className="material-symbols-outlined text-lg absolute right-4 pointer-events-none text-on-surface">
          expand_more
        </span>
      </div>
      
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full min-w-[220px] rounded-md border border-outline-variant/20 bg-surface shadow-2xl flex flex-col max-h-80 overflow-hidden">
          <div className="p-2 border-b border-outline-variant/10 bg-surface-container-lowest">
            <input 
              type="text" 
              className="w-full bg-surface-container-low text-on-surface rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-primary/50 border border-transparent focus:border-primary/30 transition-all placeholder:text-[#6b6456]" 
              placeholder="Search..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          </div>
          <div className="overflow-y-auto hide-scrollbar">
            <div 
              className={`px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center gap-2 ${value === null ? 'bg-primary/10 text-primary font-medium' : 'text-on-surface hover:bg-surface-container-high'}`}
              onClick={() => { onChange(null); setIsOpen(false); setSearch(''); }}
            >
              {placeholder}
            </div>
            {filteredOptions.length > 0 ? filteredOptions.map(opt => (
              <div 
                key={opt.value}
                className={`px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center gap-2 ${value === opt.value ? 'bg-primary/10 text-primary font-medium' : 'text-on-surface hover:bg-surface-container-high'}`}
                onClick={() => { onChange(opt.value); setIsOpen(false); setSearch(''); }}
              >
                {opt.label}
              </div>
            )) : (
              <div className="px-4 py-4 text-sm text-[#6b6456] italic text-center">
                No options found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const WorkFilterBar = () => {
  const { filters, setFilters, filteredProjects, allProjects } = useProjects();
  
  const companyArray = Object.values(companies).filter(c => c.name);
  
  // Extract unique industries/tags from all projects
  const uniqueSoftwareAreas = Array.from(
    new Set(allProjects.flatMap(p => p.industries || []).concat(allProjects.flatMap(p => p.tags || [])))
  ).sort();
  
  // Extract unique skills from all projects
  const uniqueSkills = Array.from(
    new Set(allProjects.flatMap(p => p.skills?.map(s => s?.label) || []).filter(Boolean))
  ).sort();

  const companyOptions = companyArray.map(c => ({ label: c.name, value: c.id }));
  const areaOptions = uniqueSoftwareAreas.map(area => ({ label: area, value: area }));
  const skillOptions = uniqueSkills.map(skill => ({ label: skill, value: skill }));
  
  return (
    <section className="border-outline-variant/15 mb-16 flex flex-col items-end justify-between gap-4 border-b pb-8 md:flex-row">
      <div className="flex w-full flex-wrap gap-4 md:w-auto">
        <SearchableDropdown
          label="Company"
          placeholder="All Companies"
          options={companyOptions}
          value={filters.company}
          onChange={(val) => setFilters({ ...filters, company: val })}
        />
        <SearchableDropdown
          label="Software Area"
          placeholder="All Areas"
          options={areaOptions}
          value={filters.softwareArea}
          onChange={(val) => setFilters({ ...filters, softwareArea: val })}
        />
        <SearchableDropdown
          label="Skills"
          placeholder="All Skills"
          options={skillOptions}
          value={filters.skills}
          onChange={(val) => setFilters({ ...filters, skills: val })}
        />
      </div>
      <div className="hidden text-right md:block">
        <span className="font-headline text-primary text-2xl font-bold">
          {filteredProjects.length}
        </span>
        <span className="block text-[10px] font-bold tracking-widest text-[#6b6456] uppercase">
          Selected Artifacts
        </span>
      </div>
    </section>
  );
};

export default WorkFilterBar;