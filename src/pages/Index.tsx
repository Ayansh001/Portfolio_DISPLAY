
import React, { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import HeroSection from '../components/HeroSection';
import ProjectsGrid from '../components/ProjectsGrid';
import TestimonialsSection from '../components/TestimonialsSection';
import { useToast } from '@/hooks/use-toast';

/**
 * Index Page Component
 * 
 * The main landing page of the portfolio that:
 * - Displays a hero section with introduction
 * - Shows a grid of featured projects
 * - Presents client testimonials
 * - Applies smooth page load animation
 * - Handles page transitions and welcome notification
 */
const Index: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();
  
  // Apply a smooth page entry animation on initial load
  useEffect(() => {
    // Initial loading state
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
      
      // Welcome toast notification when page loads
      toast({
        title: "Welcome to AYANSH portfolio!",
        description: "Feel free to explore my projects and get in touch.",
        duration: 5000,
      });
    }, 300);
    
    // Add fade-in animation class to body
    document.body.classList.add('animate-fade-in');
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Clean up animation class and timers on component unmount
    return () => {
      document.body.classList.remove('animate-fade-in');
      document.documentElement.style.scrollBehavior = '';
      clearTimeout(loadTimer);
    };
  }, [toast]);

  return (
    <Layout>
      <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero section with introduction */}
        <HeroSection />
        
        {/* Projects showcase grid */}
        <ProjectsGrid />
        
        {/* Client testimonials section */}
        <TestimonialsSection />
      </div>
    </Layout>
  );
};

export default Index;
