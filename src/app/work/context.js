'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';
import { projectsArray } from '@/lib/projects';

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    company: null,
    softwareArea: null,
    skills: null,
    category: 'All Projects',
  });
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filteredProjects = useMemo(() => {
    let result = [...projectsArray];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (project) =>
          project.title?.toLowerCase().includes(query) ||
          project.tagline?.toLowerCase().includes(query) ||
          project.overview?.toLowerCase().includes(query) ||
          (project.tags && project.tags.some((tag) => tag?.toLowerCase().includes(query))) ||
          (project.industries && project.industries.some((ind) => ind?.toLowerCase().includes(query))) ||
          (project.skills && project.skills.some((skill) => skill?.label?.toLowerCase().includes(query)))
      );
    }

    if (filters.category !== 'All Projects') {
      if (filters.category === 'Engineering') {
        result = result.filter((p) => p.role.toLowerCase().includes('engineer') || p.role.toLowerCase().includes('lead'));
      } else if (filters.category === 'Design') {
        result = result.filter((p) => p.role.toLowerCase().includes('design'));
      } else if (filters.category === 'Strategy') {
        result = result.filter((p) => p.tags && p.tags.some((tag) => tag.includes('Strategy') || tag.includes('Architecture')));
      }
    }

    if (filters.company) {
      result = result.filter((p) => p.company && p.company.id === filters.company);
    }

    if (filters.softwareArea) {
      result = result.filter(
        (p) =>
          (p.industries && p.industries.includes(filters.softwareArea)) ||
          (p.tags && p.tags.includes(filters.softwareArea))
      );
    }

    if (filters.skills) {
      result = result.filter((p) => p.skills && p.skills.some((s) => s?.label === filters.skills));
    }

    return result;
  }, [searchQuery, filters]);

  const visibleProjects = useMemo(() => {
    if (showAllProjects) {
      return filteredProjects;
    }
    return filteredProjects.slice(0, 6);
  }, [filteredProjects, showAllProjects]);

  const value = {
    allProjects: projectsArray,
    filteredProjects,
    visibleProjects,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    showAllProjects,
    setShowAllProjects,
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }
  return context;
};
