import React from "react";
import { Button } from "@heroui/react";

export const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="py-8 px-4 md:px-8 border-t border-divider">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-foreground-500 mb-4 md:mb-0">
          © {new Date().getFullYear()} Santiago Maldonado Rojas. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Button 
            variant="light" 
            onPress={() => scrollToSection('projects')} 
            className="text-foreground-500 hover:text-primary transition-colors"
          >
            Projects
          </Button>
          <Button 
            variant="light" 
            onPress={() => scrollToSection('about')} 
            className="text-foreground-500 hover:text-primary transition-colors"
          >
            About
          </Button>
          <Button 
            variant="light" 
            onPress={() => scrollToSection('skills')} 
            className="text-foreground-500 hover:text-primary transition-colors"
          >
            Skills
          </Button>
          <Button 
            variant="light" 
            onPress={() => scrollToSection('contact')} 
            className="text-foreground-500 hover:text-primary transition-colors"
          >
            Contact
          </Button>
        </div>
      </div>
    </footer>
  );
};