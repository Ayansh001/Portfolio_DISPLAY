
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/**
 * ProjectsFilter Component
 * 
 * Handles filtering UI for projects including:
 * - Search functionality
 * - Category filters
 * - Technology filters
 * - Sort options
 */
interface ProjectsFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  currentFilter: string;
  setCurrentFilter: (filter: string) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  categories: string[];
  allTechnologies: string[];
  filteredCount: number;
  totalCount: number;
  resetFilters: () => void;
}

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({
  searchTerm,
  setSearchTerm,
  currentFilter,
  setCurrentFilter,
  sortOrder,
  setSortOrder,
  showFilters,
  setShowFilters,
  categories,
  allTechnologies,
  filteredCount,
  totalCount,
  resetFilters
}) => {
  return (
    <div className="mb-10 space-y-6">
      {/* Search bar with icon */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search projects..."
          className="pl-9 h-10 rounded-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/* Filter toggle button (mobile-friendly) */}
      <div className="flex justify-center">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="rounded-full"
        >
          <Filter className="mr-2 h-4 w-4" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </Button>
      </div>
      
      {/* Expanded filters section */}
      {showFilters && (
        <div className="animate-fade-in bg-secondary/20 rounded-lg p-6">
          <div className="flex flex-col gap-6">
            {/* Category filter */}
            <div>
              <h3 className="text-sm font-medium mb-3">Filter by Category</h3>
              <ToggleGroup 
                type="single" 
                value={currentFilter} 
                onValueChange={(value) => value && setCurrentFilter(value)}
                className="justify-start flex-wrap"
              >
                <ToggleGroupItem 
                  value="All" 
                  aria-label="Filter by All"
                  className="rounded-md text-sm"
                >
                  All
                </ToggleGroupItem>
                
                {categories.map((category) => (
                  <ToggleGroupItem 
                    key={category} 
                    value={category} 
                    aria-label={`Filter by ${category}`}
                    className="rounded-md text-sm"
                  >
                    {category}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
            
            {/* Technology filter */}
            <div>
              <h3 className="text-sm font-medium mb-3">Filter by Technology</h3>
              <div className="flex flex-wrap gap-2">
                {allTechnologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant={currentFilter === tech ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setCurrentFilter(currentFilter === tech ? 'All' : tech)}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Sort options */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <h3 className="text-sm font-medium">Sort by:</h3>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Default order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default order</SelectItem>
                  <SelectItem value="featured">Featured first</SelectItem>
                  <SelectItem value="az">A to Z</SelectItem>
                  <SelectItem value="za">Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
      
      {/* Result count */}
      <div className="text-sm text-muted-foreground text-center">
        Showing {filteredCount} of {totalCount} projects
      </div>
    </div>
  );
};

export default ProjectsFilter;
