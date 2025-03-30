
import React, { useRef, useEffect } from 'react';
import { Project } from '../types';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

/**
 * ProjectCard Component
 * 
 * Displays a project with:
 * - Clean, professional card design
 * - Animated transitions on hover/interaction
 * - Project image or placeholder
 * - Technologies used as badges
 * - Links to GitHub and demo
 */
interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Intersection Observer for scroll-based animation with staggered delay
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Adding a small delay based on index for staggered animation
            setTimeout(() => {
              entry.target.classList.add('animate-fade-up');
            }, index * 100); // 100ms delay multiplied by index
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    // Cleanup observer on component unmount
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "opacity-0 group glass-card overflow-hidden transition-all duration-300 h-full",
        "flex flex-col hover:shadow-xl hover:-translate-y-2",
        "transform transition-transform duration-500 ease-out", // Smoother transform animation
        "active:scale-95 active:duration-150" // Click animation
      )}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="relative overflow-hidden h-52">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // Enhanced scale on hover
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/50 group-hover:bg-secondary/70 transition-colors duration-300">
            {/* Custom code icon with animation */}
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="opacity-40 group-hover:opacity-80 transition-opacity duration-300 group-hover:rotate-6 transition-transform"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
              <line x1="15" y1="9" x2="9" y2="15"></line>
            </svg>
          </div>
        )}
        
        {/* Category badge with animation */}
        {project.category && (
          <div className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-md bg-background/80 backdrop-blur-sm text-foreground
                          transform transition-transform duration-300 group-hover:translate-y-1 group-hover:shadow-md">
            {project.category}
          </div>
        )}
        
        {/* Featured badge with animation */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-md bg-primary/80 backdrop-blur-sm text-primary-foreground
                          transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
            Featured
          </div>
        )}
      </div>
      
      <div className="flex-grow p-6 flex flex-col">
        <div className="flex-grow">
          {/* Technology badges with hover animation */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <Badge 
                key={i} 
                variant="secondary"
                className="text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-sm"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge 
                variant="outline"
                className="text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-sm"
              >
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
          
          {/* Project title with enhanced hover effect */}
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 transform group-hover:translate-x-1">
            {project.title}
          </h3>
          
          {/* Project description */}
          <p className="text-muted-foreground text-sm mb-5 transition-opacity duration-300 group-hover:opacity-90">
            {project.description}
          </p>
        </div>
        
        {/* Project links with enhanced hover animations */}
        <div className="flex gap-5 mt-auto pt-4 border-t border-border/50">
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:gap-3 transform hover:-translate-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="h-4 w-4 transition-transform duration-300 hover:rotate-12" />
            Source
          </a>
          
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:gap-3 transform hover:-translate-y-1"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4 transition-transform duration-300 hover:rotate-12" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
