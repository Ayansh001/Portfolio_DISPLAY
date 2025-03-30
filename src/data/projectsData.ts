
import { Project } from '../types';

/**
 * Sample projects data
 * In a real application, this would likely come from an API
 */
export const projectsData: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A professional portfolio website built with React and Tailwind CSS.",
    repoUrl: "https://github.com/yourusername/portfolio",
    demoUrl: "https://yourdemo.com",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    featured: true,
    category: "Web",
    detailsContent: "This portfolio website showcases my projects and skills. It was built using React and Tailwind CSS for styling. The site is fully responsive and includes animations for a better user experience."
  },
  {
    id: "2",
    title: "Weather Dashboard",
    description: "An interactive weather application that provides real-time forecasts and visualizations.",
    repoUrl: "https://github.com/yourusername/weather-app",
    demoUrl: "https://weather-app-demo.com",
    technologies: ["React", "API Integration", "Chart.js"],
    category: "API",
    detailsContent: "A weather application that provides current weather data and forecasts for locations worldwide. It integrates with the OpenWeather API to fetch real-time weather information."
  },
  {
    id: "3",
    title: "Task Management System",
    description: "A comprehensive task manager with authentication, real-time updates, and team collaboration features.",
    repoUrl: "https://github.com/yourusername/task-manager",
    demoUrl: "https://task-manager-demo.com",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "Full Stack",
    detailsContent: "A comprehensive task management solution that allows users to create, organize, and track their tasks. Features include user authentication, task categorization, and deadline reminders."
  },
  {
    id: "4",
    title: "E-commerce Platform",
    description: "A scalable e-commerce solution with product management, secure payments, and order tracking.",
    repoUrl: "https://github.com/yourusername/ecommerce",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
    category: "Full Stack",
    detailsContent: "A full-featured e-commerce platform that supports product browsing, cart management, and secure checkout. Integrated with Stripe for payment processing."
  },
  {
    id: "5",
    title: "Film Database Explorer",
    description: "A film exploration platform with advanced filtering, personal watchlists, and detailed information.",
    repoUrl: "https://github.com/yourusername/movie-db",
    demoUrl: "https://movie-db-demo.com",
    technologies: ["React", "GraphQL", "TailwindCSS"],
    category: "API",
    detailsContent: "A movie database application that lets users browse and search for movies. It fetches data from The Movie Database (TMDB) API and provides detailed information about movies, actors, and directors."
  },
  {
    id: "6",
    title: "Real-time Collaboration Tool",
    description: "A communication platform with instant messaging, video calls, and collaborative document editing.",
    repoUrl: "https://github.com/yourusername/chat-app",
    technologies: ["React", "WebRTC", "Firebase", "Node.js"],
    category: "Full Stack",
    detailsContent: "A real-time chat application that enables users to communicate instantly. Built with WebSockets for real-time functionality and features user authentication, private messaging, and group chats."
  }
];
