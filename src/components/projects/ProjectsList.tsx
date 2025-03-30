
import React from 'react';
import { Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard';
import { Project } from '../../types';

/**
 * ProjectsList Component
 * 
 * Displays a grid of projects or an empty state when no projects match the filter criteria
 */
interface ProjectsListProps {
  filteredProjects: Project[];
  resetFilters: () => void;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ 
  filteredProjects, 
  resetFilters 
}) => {
  // If we have projects, display them in a grid
  if (filteredProjects.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Link to={`/project/${project.id}`} key={project.id} className="block h-full">
            <ProjectCard project={project} index={index} />
          </Link>
        ))}
      </div>
    );
  }
  
  // If no projects match the filter, show empty state
  return (
    <div className="text-center py-16 bg-secondary/20 rounded-lg">
      <Code className="mx-auto h-10 w-10 text-muted-foreground mb-4" />
      <h3 className="text-xl font-medium mb-2">No projects found</h3>
      <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
      <Button 
        variant="outline" 
        onClick={resetFilters}
      >
        Reset filters
      </Button>
    </div>
  );
};

export default ProjectsList;
