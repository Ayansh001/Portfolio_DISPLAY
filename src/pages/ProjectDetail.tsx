
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { Project } from '../types';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Code } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

/**
 * Project data
 * In a real application, this would likely come from an API
 */
const projectsData: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A professional portfolio website built with React and Tailwind CSS.",
    repoUrl: "https://github.com/Ayansh001/Portfolio_DISPLAY",
    demoUrl: "https://portfolio-display-five.vercel.app/",
    imageUrl:"https://portfolio-display-five.vercel.app/",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    featured: true,
    category: "Web",
    detailsContent: "This portfolio website showcases my projects and skills. It was built using React and Tailwind CSS for styling. The site is fully responsive and includes animations for a better user experience."
  },
{
  id: "2",
  title: "LofiFy",
  description: "A calming lofi music discovery platform integrated with YouTube and Supabase for seamless streaming and smooth UI.",
  repoUrl: "https://github.com/Ayansh001/LofiFy",
  demoUrl: "https://lofi-fy.vercel.app/",
  imageUrl: "https://lofi-fy.vercel.app/",
  technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite"],
  featured: true,
  category: "Web",
  detailsContent: "LofiFy is a relaxing web application built for discovering and streaming lofi music. It features a clean UI, YouTube-based playback, and a fully integrated Supabase backend. Whether you're working, studying, or just vibing — LofiFy sets the mood."
},
  {
  id: "3",
  title: "API Unlocked Academy",
  description: "A platform to explore and learn about APIs, built with modern web technologies.",
  repoUrl: "https://github.com/Ayansh001/API-UNLOCKED_ACADEMY",
  demoUrl: "https://api-unlocked-academy.vercel.app/",
  imageUrl: "https://api-unlocked-academy.vercel.app/",
  technologies: ["React", "Tailwind CSS", "TypeScript"],
  featured: true,
  category: "Web",
  detailsContent: "API Unlocked Academy is a web application that helps users explore different APIs and learn how to integrate them into projects. It is built using React and Tailwind CSS for a sleek, responsive UI, and leverages TypeScript for type safety and robust development."
  },
  {
    id: "4",
    title: "MARKET_MINDS",
    description: "A real-time cryptocurrency dashboard that tracks prices, market trends, and historical data.",
    repoUrl: "https://github.com/Ayansh001/MARKETMINDS",
    demoUrl: "https://marketminds-henna.vercel.app/",
    imageUrl: " https://marketminds-henna.vercel.app/ ",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
    category: "Full Stack",
    detailsContent: "A full-featured e-commerce platform that supports product browsing, cart management, and secure checkout. Integrated with Stripe for payment processing."
  },
  {
    id: "5",
    title: "TRENDMOOD_PLEX",
    repoUrl: "https://github.com/Ayansh001/TRENDMOOD--PLEX",
    demoUrl: "https://trendmood-plex-movie.vercel.app/",
    imageUrl: " https://trendmood-plex-movie.vercel.app/ ",
    description: "A film exploration platform with advanced filtering, personal watchlists, and detailed information.",
    technologies: ["React", "GraphQL", "TailwindCSS"],
    category: "API",
    detailsContent: "A movie database application that lets users browse and search for movies. It fetches data from The Movie Database (TMDB) API and provides detailed information about movies, actors, and directors."
  },
   {
    id: "6",
    title: "HomeHorizon_ExPlore",
    description: "HomeHorizon India is a modern real estate platform designed specifically for the Indian market.",
    repoUrl: "https://github.com/Ayansh001/HOME-HORIZON_EXPLORE",
    demoUrl: "  https://home-horizon-exploreee.vercel.app/ ",
    imageUrl: "https://home-horizon-exploreee.vercel.app/ ",
    technologies: ["React", "Node.js"],
    category: "Full Stack",
    detailsContent: "HomeHorizon India is a modern real estate platform designed specifically for the Indian market. It allows users to search, filter, and explore property listings across major Indian cities."
  },
  {
    id: "7",
    title: "Meal Flow Visualizer",
    description: "A comprehensive nutrition and fitness tracking application built with modern web technologies.",
    repoUrl: "https://github.com/Ayansh001/Flow-WEV_DEV.git",
    demoUrl: "https://flow-wev-dev.vercel.app/",
    technologies: ["React", "WebRTC", "Firebase", "Node.js"],
    category: "Full Stack",
    imageUrl:"https://flow-wev-dev.vercel.app/",
    detailsContent: "The app offers nutrition tracking with a detailed macronutrient breakdown, customizable water intake monitoring, and workout planning with progress tracking, while providing insightful data visualizations and ensuring persistent data storage using the browser’s local storage, along with form validation, error handling, and a responsive design optimized for all devices, enhanced by code splitting and lazy loading for improved performance."
  },
  {
  "id": "8",
  "title": "Pawsitive – Dog Training App",
  "description": "A modern web application focused on dog training techniques for happier pets and owners.",
  "repoUrl": "https://github.com/Ayansh001/Pawsitive-Training---Dog-Training-App",
  "demoUrl": "https://pawsitive-dog-training-app.vercel.app/",
  "imageUrl": "https://pawsitive-dog-training-app.vercel.app/",
  "technologies": ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS", "Three.js"],
  "featured": true,
  "category": "Web",
  "detailsContent": "This dog training application features interactive 3D dog models, training guides, quick tips, and success stories from other dog owners. Built using Vite and React with TypeScript, it includes modern UI components from shadcn-ui, Tailwind CSS for responsive styling, and Three.js for immersive 3D experiences."
}
];

/**
 * ProjectDetail Component
 * 
 * Displays detailed information about a specific project:
 * - Project description and technologies
 * - GitHub and demo links
 * - Related projects
 * - Navigation back to projects page
 */
const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add fade-in animation to the page
    document.body.classList.add('animate-fade-in');
    
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);
  
  // Handle case where project is not found
  if (!project) {
    return (
      <Layout>
        <div className="section-padding flex flex-col items-center justify-center min-h-[60vh]">
          <Code className="h-12 w-12 text-muted-foreground mb-6" />
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8 text-center max-w-md">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/">
            <Button className="rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  // Find related projects (same category or shared technologies)
  const relatedProjects = projectsData
    .filter(p => p.id !== project.id)
    .filter(p => 
      p.category === project.category || 
      p.technologies.some(tech => project.technologies.includes(tech))
    )
    .slice(0, 2);
  
  return (
    <Layout>
      <div className="py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center text-sm font-medium text-primary mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          
          {/* Project header with category badge */}
          <div className="mb-8">
            {project.category && (
              <Badge className="mb-4" variant="outline">
                {project.category}
              </Badge>
            )}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>
          
          {/* Project image or placeholder */}
          <div className="glass-card overflow-hidden mb-10 rounded-xl">
            <div className="h-[400px] relative">
              {project.imageUrl ? (
                // <image 
                //   src={project.imageUrl} 
                //   alt={project.title} 
                //   className="w-full h-full object-cover" 
                // />
                <iframe 
                src={project.imageUrl} 
                width="100%" 
                height="600px" 
                className="w-full h-full object-cover"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                  <Code className="h-16 w-16 text-foreground/20" />
                </div>
              )}
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 text-sm font-medium bg-primary/80 backdrop-blur-sm text-primary-foreground rounded-md">
                  Featured Project
                </div>
              )}
            </div>
          </div>
          
          {/* Project details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Technology stack */}
            <div className="md:col-span-1">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Tag className="mr-2 h-5 w-5" />
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary"
                    className="text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Project links */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Project Links</h2>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Button className="rounded-full gap-2">
                    <Github className="h-4 w-4" />
                    View Source Code
                  </Button>
                </a>
                
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="rounded-full gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <Separator className="my-10" />
          
          {/* Project details content */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">About this Project</h2>
            <div className="prose max-w-none text-foreground">
              <p className="text-lg leading-relaxed">{project.detailsContent}</p>
            </div>
          </div>
          
          {/* Related projects section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8">Related Projects</h2>
            {relatedProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <Link 
                    to={`/project/${relatedProject.id}`} 
                    key={relatedProject.id}
                    className="block h-full"
                  >
                    <Card className="glass-card h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        {relatedProject.category && (
                          <Badge variant="outline" className="mb-3">
                            {relatedProject.category}
                          </Badge>
                        )}
                        <h3 className="font-bold text-lg mb-2">{relatedProject.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{relatedProject.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {relatedProject.technologies.slice(0, 3).map((tech, i) => (
                            <Badge 
                              key={i} 
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No related projects found.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
