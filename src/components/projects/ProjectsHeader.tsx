
import React from 'react';

/**
 * ProjectsHeader Component
 * 
 * Displays the section header with title and description
 */
const ProjectsHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <div 
        className="animate-on-scroll opacity-0 inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium tracking-wide mb-4"
        style={{ '--delay': 1 } as React.CSSProperties}
      >
        Portfolio
      </div>
      
      <h2 
        className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold mb-4"
        style={{ '--delay': 2 } as React.CSSProperties}
      >
        My Projects
      </h2>
      
      <p 
        className="animate-on-scroll opacity-0 text-muted-foreground max-w-2xl mx-auto"
        style={{ '--delay': 3 } as React.CSSProperties}
      >
        A collection of my development work — each project represents my approach to problem-solving, 
        coding style, and creative solutions.
      </p>
    </div>
  );
};

export default ProjectsHeader;
