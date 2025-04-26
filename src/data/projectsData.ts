
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
    repoUrl: "https://github.com/Ayansh001/Portfolio_DISPLAY",
    demoUrl: "https://portfolio-display-five.vercel.app/",
    imageUrl:" https://api.microlink.io/?url=https%3A%2F%2Fportfolio-display-five.vercel.app%2F&overlay.browser=dark&overlay.background=%23c1c1c1&screenshot=true&embed=screenshot.url ",
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
  imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Flofi-fy.vercel.app%2F&overlay.browser=dark&overlay.background=%23c1c1c1&screenshot=true&embed=screenshot.url",
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
  imageUrl: "https://api.microlink.io/?url=https%3A%2F%2Fapi-unlocked-academy.vercel.app%2F&overlay.browser=dark&overlay.background=%23c1c1c1&screenshot=true&embed=screenshot.url",
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
    imageUrl: " https://api.microlink.io/?url=https%3A%2F%2Fmarketminds-henna.vercel.app%2F&overlay.browser=dark&overlay.background=%23c1c1c1&screenshot=true&embed=screenshot.url ",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
    category: "Full Stack",
    detailsContent: "A full-featured e-commerce platform that supports product browsing, cart management, and secure checkout. Integrated with Stripe for payment processing."
  },
  {
    id: "5",
    title: "TRENDMOOD_PLEX",
    description: "A film exploration platform with advanced filtering, personal watchlists, and detailed information.",
    repoUrl: "https://github.com/Ayansh001/TRENDMOOD--PLEX",
    demoUrl: "https://trendmood-plex-movie.vercel.app/",
    imageUrl: " https://api.microlink.io/?url=https%3A%2F%2Ftrendmood-plex-movie.vercel.app%2F&overlay.browser=dark&overlay.background=%23c1c1c1&screenshot=true&embed=screenshot.url ",
    technologies: ["React",  "TailwindCSS"],
    category: "API",
    detailsContent: "A movie database application that lets users browse and search for movies. It fetches data from The Movie Database (TMDB) API and provides detailed information about movies, actors, and directors."
  },
  {
    id: "6",
    title: "HomeHorizon_ExPlore",
    description: "HomeHorizon India is a modern real estate platform designed specifically for the Indian market.",
    repoUrl: "https://github.com/Ayansh001/HOME-HORIZON_EXPLORE",
    demoUrl: "  https://home-horizon-exploreee.vercel.app/ ",
    imageUrl: " https://api.microlink.io/?url=https%3A%2F%2Fhome-horizon-exploreee.vercel.app%2F&overlay.browser=dark&overlay.background=%23c1c1c1&screenshot=true&embed=screenshot.url ",
    technologies: ["React", "Node.js"],
    category: "Full Stack",
    detailsContent: "HomeHorizon India is a modern real estate platform designed specifically for the Indian market"
  },
  {
    id: "7",
    title: "Meal Flow Visualizer",
    description: "A communication platform with instant messaging, video calls, and collaborative document editing.",
    repoUrl: "https://github.com/Ayansh001/Flow-WEV_DEV.git",
    demoUrl: "https://flow-wev-dev.vercel.app/",
    imageUrl:" https://api.microlink.io/?url=https%3A%2F%2Fflow-wev-dev.vercel.app%2F&overlay.browser=dark&overlay.background=%23c1c1c1&screenshot=true&embed=screenshot.url ",
    technologies: ["React", "WebRTC", "Firebase", "Node.js"],
    category: "Full Stack",
    detailsContent: "A real-time chat application that enables users to communicate instantly. Built with WebSockets for real-time functionality and features user authentication, private messaging, and group chats."
  }
  
];
