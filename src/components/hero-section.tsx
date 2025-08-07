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
    <section
      className="relative min-h-screen h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 60% 20%, #e0c3fc 0%, #8ec5fc 40%, #f9f9f9 100%)"
      }}
    >
      {/* Animated gradient overlays */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.7, scale: 1 }}
        animate={{
          opacity: [0.7, 0.9, 0.7],
          scale: [1, 1.08, 1],
          rotate: [0, 8, -8, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at 80% 0%, #a18cd1 0%, #fbc2eb 60%, transparent 100%)",
          mixBlendMode: "screen"
        }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
          rotate: [0, -6, 6, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at 10% 100%, #fad0c4 0%, #ffd1ff 60%, transparent 100%)",
          mixBlendMode: "screen"
        }}
      />
      {/* Extra animated color blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full z-0"
        style={{
          background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
          filter: "blur(80px)",
          opacity: 0.5
        }}
        animate={{
          x: [0, 40, -40, 0],
          y: [0, 30, -30, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 w-[350px] h-[350px] rounded-full z-0"
        style={{
          background: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
          filter: "blur(90px)",
          opacity: 0.45
        }}
        animate={{
          x: [0, -30, 30, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.08, 0.92, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
      {/* Main content */}
      <div className="relative z-10 max-w-7xl w-full h-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex flex-col items-center justify-center"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 shadow-lg backdrop-blur-md">
            AI • Web Developer
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            Santiago Maldonado Rojas
          </h1>
          <p className="text-xl md:text-2xl text-foreground-500 max-w-3xl mx-auto mb-10 drop-shadow">
            Building exceptional digital experiences through code, creativity, and innovation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              color="primary"
              onPress={() => scrollToSection('projects')}
              endContent={<Icon icon="lucide:arrow-down" width={20} />}
              className="shadow-xl"
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="flat"
              onPress={() => scrollToSection('contact')}
              endContent={<Icon icon="lucide:message-circle" width={20} />}
              className="shadow"
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
          {/* 
          <div className="flex items-center gap-2">
            <Icon icon="logos:kotlin" width={28} />
            <span className="text-foreground-400">Kotlin</span>
          </div>
          */}
          <div className="flex items-center gap-2">
            <Icon icon="logos:react" width={28} />
            <span className="text-foreground-400">React</span>
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
        {/* Animated arrow */}
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 1 }}
          animate={{
            opacity: 1,
            y: [0, 18, 0, 18, 0],
            scale: [1, 1.15, 1],
            rotate: [0, 8, -8, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <Icon
            icon="lucide:chevrons-down"
            width={38}
            className="text-primary drop-shadow-lg animate-pulse"
            style={{
              filter: "drop-shadow(0 4px 16px #a18cd1cc)"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};