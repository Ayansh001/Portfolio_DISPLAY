
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * HeroSection Component
 * 
 * The main landing section of the portfolio that:
 * - Introduces the developer with a striking headline
 * - Provides key call-to-action buttons
 * - Includes subtle, professional animations
 * - Creates an engaging entry point for visitors
 */
const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Intersection Observer for scroll-based animations with enhanced thresholds
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply the animation class with the correct delay
            const element = entry.target as HTMLElement;
            const delayIndex = Number(element.dataset.animationDelay || 0);
            
            // Calculate staggered delay for smoother sequence
            setTimeout(() => {
              element.classList.add('animate-fade-in');
            }, delayIndex * 150); // 150ms staggered delay
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );
    
    // Target all elements that should animate on scroll
    const childElements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el, index) => {
      // Set a data attribute for delay calculation
      (el as HTMLElement).dataset.animationDelay = String(index);
      observer.observe(el);
    });
    
    // Clean up observer on component unmount
    return () => {
      childElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Scroll to projects section with smooth animation
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll to contact section with smooth animation
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center section-padding pt-32"
      id="hero"
    >
      {/* Animated background elements with parallax effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-[-5%] top-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl opacity-70 
                      animate-pulse" style={{ animationDuration: '15s' }} />
        <div className="absolute left-[-10%] top-[30%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl opacity-60 
                      animate-pulse" style={{ animationDuration: '20s', animationDelay: '2s' }} />
        <div className="absolute bottom-[-5%] right-[20%] w-[30%] h-[30%] bg-accent/20 rounded-full blur-3xl opacity-60 
                      animate-pulse" style={{ animationDuration: '25s', animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Tagged intro with enhanced animation */}
        <div 
          className={cn(
            "animate-on-scroll opacity-0 mb-8",
            "inline-block px-4 py-1.5 rounded-full",
            "bg-accent/50 text-accent-foreground backdrop-blur-sm",
            "text-sm font-medium tracking-wide",
            "transform transition-all duration-700"
          )}
          style={{ '--delay': 1 } as React.CSSProperties}
        >
          Developer Portfolio
        </div>
        
        {/* Main headline with enhanced text effects */}
        <h1 
          className="animate-on-scroll opacity-0 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight"
          style={{ '--delay': 2 } as React.CSSProperties}
        >
          Creating <span className="text-primary relative inline-block">
            <span className="animate-pulse" style={{ animationDuration: '4s' }}>thoughtful</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/20 transform scale-x-0 origin-left transition-transform duration-1000 delay-1000 animate-on-scroll"></span>
          </span> and <span className="relative inline-block">
            impactful
            <svg className="absolute bottom-1 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 15" preserveAspectRatio="none">
              <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="4" 
                    className="animate-on-scroll" style={{ strokeDasharray: 100, strokeDashoffset: 100, animation: 'dash 1.5s ease-in-out forwards 1.5s' }} />
            </svg>
          </span> experiences
        </h1>
        
        {/* Subheadline with slide-up animation */}
        <p 
          className="animate-on-scroll opacity-0 text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl mb-12
                    transform translate-y-4 transition-all duration-700"
          style={{ '--delay': 3 } as React.CSSProperties}
        >
          A curated collection of projects that showcase problem-solving,
          technical expertise, and thoughtful design decisions.
        </p>
        
        {/* Call to action buttons with enhanced hover effects */}
        <div 
          className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-5 justify-center
                    transform translate-y-4 transition-all duration-700"
          style={{ '--delay': 4 } as React.CSSProperties}
        >
          <Button 
            size="lg"
            className="rounded-full px-8 font-medium text-base relative overflow-hidden group transition-all duration-300
                      hover:shadow-lg active:scale-95"
            onClick={scrollToProjects}
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-primary/20 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="rounded-full px-8 font-medium text-base relative overflow-hidden group transition-all duration-300
                      hover:shadow-lg active:scale-95"
            onClick={scrollToContact}
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-accent/10 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Button>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-500 hover:translate-y-2">
        <ArrowDownIcon className="h-6 w-6 text-muted-foreground animate-bounce" style={{ animationDuration: '2s' }} />
      </div>
    </section>
  );
};

export default HeroSection;
