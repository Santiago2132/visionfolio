import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
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
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background to-content2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Mobile • AI • Web Developer
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Santiago Maldonado Rojas
          </h1>
          <p className="text-xl md:text-2xl text-foreground-500 max-w-3xl mx-auto mb-10">
            Building exceptional digital experiences through code, creativity, and innovation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              color="primary"
              onPress={() => scrollToSection('projects')}
              endContent={<Icon icon="lucide:arrow-down" width={20} />}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="flat"
              onPress={() => scrollToSection('contact')}
              endContent={<Icon icon="lucide:message-circle" width={20} />}
            >
              Let's Talk
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex gap-8 justify-center flex-wrap"
        >
          <div className="flex items-center gap-2">
            <Icon icon="logos:kotlin" width={28} />
            <span className="text-foreground-400">Kotlin</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="logos:python" width={28} />
            <span className="text-foreground-400">Python</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="logos:typescript-icon" width={28} />
            <span className="text-foreground-400">TypeScript</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="logos:javascript" width={28} />
            <span className="text-foreground-400">JavaScript</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="logos:html-5" width={28} />
            <span className="text-foreground-400">HTML5</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="logos:css-3" width={28} />
            <span className="text-foreground-400">CSS3</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="animate-bounce">
            <Icon icon="lucide:chevrons-down" width={24} className="text-foreground-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};