
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion'; 

/**
 * ThemeToggle Component
 * 
 * A button that toggles between light and dark theme modes:
 * - Shows sun icon in dark mode
 * - Shows moon icon in light mode
 * - Includes tooltip for accessibility
 * - Uses smooth animations for state changes
 */
const ThemeToggle: React.FC = () => {
  // Get current theme and toggle function from context
  const { theme, toggleTheme } = useTheme();
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="relative rounded-full w-9 h-9 transition-all duration-300 
                      hover:bg-accent overflow-hidden active:scale-95"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="sr-only">Toggle theme</span>
            
            {/* Sun icon with animation */}
            <span 
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform 
                        ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}`}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] text-amber-300" />
            </span>
            
            {/* Moon icon with animation */}
            <span 
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform 
                        ${theme === 'dark' ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
            >
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            </span>
            
            {/* Animated background for the toggle */}
            <span 
              className={`absolute inset-0 rounded-full transition-all duration-500 
                        ${theme === 'dark' ? 'bg-secondary/0' : 'bg-secondary/0'}`}
              style={{
                transform: theme === 'dark' ? 'scale(0)' : 'scale(1)',
                opacity: theme === 'dark' ? 0 : 0.1
              }}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="animate-fade-in">
          <p>{theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;
