
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';
import { Toaster } from "@/components/ui/toaster";
import { useLocation } from 'react-router-dom';

/**
 * Layout Component
 * 
 * Main application layout wrapper that:
 * - Provides consistent page structure
 * - Wraps content with navbar and footer
 * - Provides theme context
 * - Adds toast notification support
 * - Handles page transition animations
 */
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  
  // Handle page transitions when route changes
  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
      
      // Wait for fade out animation to complete before updating location
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
      }, 300); // Match this with CSS transition duration
      
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);
  
  // Page transition animation styles
  const pageTransitionStyles = {
    fadeIn: "animate-fade-in opacity-100 transition-opacity duration-300",
    fadeOut: "opacity-0 transition-opacity duration-300"
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        {/* Site-wide navigation */}
        <Navbar />
        
        {/* Main content area with transition animations */}
        <main className={`flex-grow ${pageTransitionStyles[transitionStage as keyof typeof pageTransitionStyles]}`}>
          {children}
        </main>
        
        {/* Site footer */}
        <Footer />
        
        {/* Toast notification container */}
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
