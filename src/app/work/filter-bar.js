'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useProjects } from './context';
import { companies } from '@/lib/companies';
import { workCategories } from './categories';

const SearchableDropdown = ({ label, options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase()),
  );

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="group relative min-w-0 flex-1 sm:min-w-[140px] sm:flex-none" ref={dropdownRef}>
      <label className="font-label text-outline mb-1.5 block text-[10px] font-bold tracking-widest uppercase">
        {label}
      </label>
      <button
        type="button"
        className="border-outline-variant/30 text-on-surface hover:border-outline-variant flex w-full items-center justify-between gap-2 border-b bg-transparent py-2.5 text-left text-sm outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="text-outline shrink-0 text-xs" aria-hidden>
          ▾
        </span>
      </button>

      {isOpen && (
        <div className="border-outline-variant/20 bg-surface absolute z-50 mt-2 flex max-h-72 w-full min-w-[200px] flex-col overflow-hidden border shadow-lg">
          <div className="border-outline-variant/10 border-b p-2">
            <input
              type="text"
              className="bg-surface-container-low text-on-surface w-full px-3 py-2 text-sm outline-none"
              placeholder="Search…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          </div>
          <div className="overflow-y-auto">
            <button
              type="button"
              className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                value === null
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-on-surface hover:bg-surface-container-high'
              }`}
              onClick={() => {
                onChange(null);
                setIsOpen(false);
                setSearch('');
              }}
            >
              {placeholder}
            </button>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.value}
                  className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                    value === opt.value
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-on-surface hover:bg-surface-container-high'
                  }`}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                    setSearch('');
                  }}
                >
                  {opt.label}
                </button>
              ))
            ) : (
              <p className="text-outline px-4 py-4 text-center text-sm italic">
                No options
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const WorkFilterBar = () => {
  const {
    filters,
    setFilters,
    filteredProjects,
    searchQuery,
    setSearchQuery,
    allProjects,
  } = useProjects();

  const companyArray = Object.values(companies).filter((c) => c.name);

  const uniqueSoftwareAreas = Array.from(
    new Set(
      allProjects
        .flatMap((p) => p.industries || [])
        .concat(allProjects.flatMap((p) => p.tags || [])),
    ),
  ).sort();

  const uniqueSkills = Array.from(
    new Set(
      allProjects
        .flatMap((p) => p.skills?.map((s) => s?.label) || [])
        .filter(Boolean),
    ),
  ).sort();

  const companyOptions = companyArray.map((c) => ({
    label: c.name,
    value: c.id,
  }));
  const areaOptions = uniqueSoftwareAreas.map((area) => ({
    label: area,
    value: area,
  }));
  const skillOptions = uniqueSkills.map((skill) => ({
    label: skill,
    value: skill,
  }));

  return (
    <section className="mb-10 space-y-6 md:mb-14">
      {/* Mobile search — desktop uses nav search */}
      <div className="lg:hidden">
        <label className="font-label text-outline mb-1.5 block text-[10px] font-bold tracking-widest uppercase">
          Search
        </label>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search projects…"
          className="border-outline-variant/30 text-on-surface placeholder:text-outline w-full border-b bg-transparent py-2.5 text-sm outline-none"
        />
      </div>

      {/* Mobile category chips */}
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden">
        {workCategories.map((cat) => {
          const active = filters.category === cat.name;
          return (
            <button
              key={cat.name}
              type="button"
              onClick={() =>
                setFilters((prev) => ({ ...prev, category: cat.name }))
              }
              className={`font-label shrink-0 px-3 py-2 text-[10px] tracking-[0.12em] uppercase transition-colors ${
                active
                  ? 'bg-primary-container text-on-primary'
                  : 'bg-surface-container-high text-on-surface-variant'
              }`}
            >
              {cat.short}
            </button>
          );
        })}
      </div>

      <div className="border-outline-variant/20 flex flex-col gap-6 border-b pb-6 md:flex-row md:items-end md:justify-between">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 md:w-auto md:flex md:flex-wrap md:gap-6">
          <SearchableDropdown
            label="Company"
            placeholder="All companies"
            options={companyOptions}
            value={filters.company}
            onChange={(val) => setFilters({ ...filters, company: val })}
          />
          <SearchableDropdown
            label="Area"
            placeholder="All areas"
            options={areaOptions}
            value={filters.softwareArea}
            onChange={(val) => setFilters({ ...filters, softwareArea: val })}
          />
          <SearchableDropdown
            label="Skill"
            placeholder="All skills"
            options={skillOptions}
            value={filters.skills}
            onChange={(val) => setFilters({ ...filters, skills: val })}
          />
        </div>
        <div className="shrink-0 text-left md:text-right">
          <span className="font-headline text-primary text-2xl">
            {filteredProjects.length}
          </span>
          <span className="font-label text-outline block text-[10px] font-bold tracking-widest uppercase">
            Projects shown
          </span>
        </div>
      </div>
    </section>
  );
};

export default WorkFilterBar;
