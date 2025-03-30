
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Navbar Component
 * 
 * Main navigation header that:
 * - Changes appearance on scroll
 * - Provides main site navigation
 * - Includes theme toggle and GitHub link
 */
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Change navbar styling on scroll for better visual effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4",
      scrolled 
        ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-primary/30">
            Portfolio
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#projects" className="link-underline text-sm font-medium">
            Projects
          </a>
          <a href="#about" className="link-underline text-sm font-medium">
            About
          </a>
          <a href="#contact" className="link-underline text-sm font-medium">
            Contact
          </a>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <a 
              href="https://github.com/Ayansh001" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-sm font-medium"
          >
            Menu
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-md p-4">
          <nav className="flex flex-col space-y-4 p-4">
            <a 
              href="#projects" 
              className="text-sm font-medium p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            
            <a 
              href="https://github.com/Ayansh001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
