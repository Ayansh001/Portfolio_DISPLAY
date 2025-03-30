
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeContextType } from '../types';

/**
 * Theme Context
 * 
 * Provides theme state management for the application:
 * - Stores current theme (light/dark)
 * - Loads user preference from localStorage
 * - Falls back to system preference if no saved preference
 * - Syncs theme with HTML document classes
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider Component
 * 
 * Wraps the application to provide theme context functionality
 * to all children components.
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize theme state with light mode as default
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // On component mount: load theme preference from storage or system
    const loadThemePreference = () => {
      // Check for user preference in localStorage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        // Use saved user preference if available
        setTheme(savedTheme);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Fall back to system preference if no saved preference
        setTheme('dark');
      }
    };

    loadThemePreference();
  }, []);

  useEffect(() => {
    // Apply theme to document whenever theme changes
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  /**
   * Toggle between light and dark themes
   */
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Provide theme context to children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to access the theme context
 * 
 * @returns The theme context containing current theme and toggle function
 * @throws Error if used outside of ThemeProvider
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
