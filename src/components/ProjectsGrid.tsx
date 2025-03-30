
import React, { useRef, useEffect } from 'react';
import { useProjectsFilter } from '../hooks/useProjectsFilter';
import { projectsData } from '../data/projectsData';
import ProjectsHeader from './projects/ProjectsHeader';
import ProjectsFilter from './projects/ProjectsFilter';
import ProjectsList from './projects/ProjectsList';

/**
 * ProjectsGrid Component
 * 
 * Displays a grid of projects with:
 * - Search functionality
 * - Multiple filtering options
 * - Responsive grid layout
 * - Animation on scroll
 */
const ProjectsGrid: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Use the custom hook for filtering logic
  const {
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
  } = useProjectsFilter({ projectsData });
  
  useEffect(() => {
    // Intersection Observer for scroll-based animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const titleElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    titleElements?.forEach(el => observer.observe(el));
    
    return () => {
      titleElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <ProjectsHeader />
        
        {/* Search and filters section */}
        <ProjectsFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          categories={categories}
          allTechnologies={allTechnologies}
          filteredCount={filteredProjects.length}
          totalCount={projectsData.length}
          resetFilters={resetFilters}
        />
        
        {/* Projects grid with conditional empty state */}
        <ProjectsList 
          filteredProjects={filteredProjects}
          resetFilters={resetFilters}
        />
      </div>
    </section>
  );
};

export default ProjectsGrid;
