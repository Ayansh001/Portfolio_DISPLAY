
import React from 'react';
import { cn } from '@/lib/utils';
import { Github, Mail, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

/**
 * Footer Component
 * 
 * The main footer section that provides:
 * - Contact information
 * - Social media links
 * - Professional skills overview
 * - Copyright information
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Social links with consistent styling
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ayansh001', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Ayansh Singh', label: 'LinkedIn' },
    { icon: Twitter, href: ' ',alt:'no account', label: 'Twitter' },
    { icon: Mail, href: 'mailto:shivanshusinghrajput666@gmail.com', label: 'Email' }
  ];

  // Skills with categorization
  const skills = {
    frontend: ['JavaScript', 'TypeScript', 'React', 'Vue.js', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL'],
    tools: ['Git', 'Docker', 'AWS', 'Figma', 'Jest']
  };

  return (
    <footer id="contact" className="bg-secondary/20 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              I'm currently available for freelance work and full-time positions.
              If you have a project that needs coding skills, I'd love to hear about it.
            </p>
            
            <a 
              href="mailto:shivanshusinghrajput666@gmail.com" 
              className="inline-block"
            >
              <Button className="rounded-full px-8">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </a>
            
            <div className="mt-8">
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                      <link.icon className="h-5 w-5" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">My Expertise</h3>
            
            {/* Frontend Skills */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Frontend Development
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Backend Skills */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Backend Development
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Tools Skills */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground order-2 md:order-1 mt-4 md:mt-0">
            © {currentYear} <span className="font-medium">AYANSH SINGH</span>. All rights reserved.
          </p>
          
          <div className="flex gap-8 order-1 md:order-2">
            <a 
              href="#projects" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
