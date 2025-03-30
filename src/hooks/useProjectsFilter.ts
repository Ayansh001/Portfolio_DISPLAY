
import { useState, useMemo } from 'react';
import { Project } from '../types';

/**
 * Custom hook for filtering projects
 * 
 * Handles the filtering and sorting logic for projects
 */
interface UseProjectsFilterProps {
  projectsData: Project[];
}

interface UseProjectsFilterResult {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  currentFilter: string;
  setCurrentFilter: (filter: string) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  filteredProjects: Project[];
  allTechnologies: string[];
  categories: string[];
  resetFilters: () => void;
}

export const useProjectsFilter = ({ projectsData }: UseProjectsFilterProps): UseProjectsFilterResult => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFilter, setCurrentFilter] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<string>('default');
  const [showFilters, setShowFilters] = useState(false);
  
  // Extract unique technologies and categories for filters
  const allTechnologies = useMemo(() => Array.from(
    new Set(projectsData.flatMap(project => project.technologies))
  ), [projectsData]);
  
  const categories = useMemo(() => Array.from(
    new Set(projectsData.map(project => project.category ?? 'Other'))
  ), [projectsData]);
  
  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setCurrentFilter('All');
    setSortOrder('default');
  };

  // Filter and sort projects based on search, filter, and sort criteria
  const filteredProjects = useMemo(() => {
    // First filter by search term and category/technology
    let results = projectsData.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = 
        currentFilter === 'All' || 
        project.technologies.includes(currentFilter) || 
        project.category === currentFilter;
      
      return matchesSearch && matchesFilter;
    });
    
    // Then sort based on selected option
    switch(sortOrder) {
      case 'featured':
        return [...results].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      case 'az':
        return [...results].sort((a, b) => a.title.localeCompare(b.title));
      case 'za':
        return [...results].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return results; // Keep the default order
    }
  }, [searchTerm, currentFilter, sortOrder, projectsData]);

  return {
    searchTerm,
    setSearchTerm,
    currentFilter,
    setCurrentFilter,
    sortOrder,
    setSortOrder,
    showFilters,
    setShowFilters,
    filteredProjects,
    allTechnologies,
    categories,
    resetFilters
  };
};
