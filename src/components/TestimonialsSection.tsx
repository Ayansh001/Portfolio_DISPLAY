
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

/**
 * TestimonialsSection Component
 * 
 * Displays professional testimonials with:
 * - Animated entry for each testimonial card
 * - Clean card design with quote icon
 * - Person, role and company attribution
 * - Responsive grid layout
 */

// Typed interface for testimonial data
interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
}

// Sample testimonial data
// In a production app, this would typically come from an API
const testimonials: Testimonial[] = [
  {
    id: "1",
    content: "An exceptional developer who consistently delivers high-quality code. Their attention to detail and technical expertise made our project a success.",
    author: "Alex Johnson",
    role: "CTO",
    company: "TechStart Inc."
  },
  {
    id: "2",
    content: "Working with this developer was a great experience. They communicate effectively and translate complex ideas into elegant solutions.",
    author: "Sam Rivera",
    role: "Product Manager",
    company: "InnovateLabs"
  },
  {
    id: "3",
    content: "Their commitment to clean, maintainable code sets them apart. They don't just build features - they build systems that last.",
    author: "Jamie Chen",
    role: "Lead Developer",
    company: "DataFlow Systems"
  }
];

const TestimonialsSection: React.FC = () => {
  // Reference to the section element for scroll animations
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set up intersection observer for scroll-based animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add animation class when element enters viewport
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of element is visible
    );
    
    // Get all elements with animation class and observe them
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    
    // Clean up observer on component unmount
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-secondary/10"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header with staggered animations */}
        <div className="text-center mb-16">
          <div 
            className="animate-on-scroll opacity-0 inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium tracking-wide mb-4"
            style={{ '--delay': 1 } as React.CSSProperties}
          >
            Testimonials
          </div>
          
          <h2 
            className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold mb-4"
            style={{ '--delay': 2 } as React.CSSProperties}
          >
            What People Say
          </h2>
          
          <p 
            className="animate-on-scroll opacity-0 text-muted-foreground max-w-2xl mx-auto"
            style={{ '--delay': 3 } as React.CSSProperties}
          >
            Feedback from clients and colleagues on past collaborations
          </p>
        </div>
        
        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={cn(
                "animate-on-scroll opacity-0 glass-card overflow-hidden",
                "border-none shadow-md hover:shadow-lg transition-all duration-300"
              )}
              style={{ '--delay': index + 4 } as React.CSSProperties}
            >
              <CardContent className="p-8">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                
                {/* Testimonial content */}
                <p className="mb-6 text-foreground/90 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Attribution */}
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
