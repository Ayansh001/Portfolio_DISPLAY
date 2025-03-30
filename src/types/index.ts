
export interface Project {
  id: string;
  title: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  technologies: string[];
  imageUrl?: string;
  featured?: boolean;
  category?: string;
  detailsContent?: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
