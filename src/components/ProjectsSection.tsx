import React from "react";
import { Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { projects } from "../data/projects";
import { fadeIn, staggerContainer } from "../animations";

export const ProjectsSection: React.FC = () => {
  const [selected, setSelected] = React.useState("web");

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-[#f8f6f0] relative overflow-hidden"
      style={{
        background: "linear-gradient(120deg, #f8f6f0 60%, #f3e9ff 100%)"
      }}
    >
      {/* Neo-brutalism background blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-0 w-[320px] h-[320px] rounded-[40px] z-0"
        style={{
          background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
          boxShadow: "12px 12px 0 #a18cd1, 0 0 0 6px #fff"
        }}
        animate={{
          x: [0, 20, -20, 0],
          y: [0, 10, -10, 0],
          rotate: [0, 4, -4, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
      <div className="relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-black drop-shadow-[4px_4px_0_#fff]">
            Featured Projects
          </h2>
          <p className="text-foreground-500 max-w-2xl mx-auto text-lg font-medium">
            Explore my work across different technologies and platforms
          </p>
        </motion.div>
        
        <div className="flex w-full flex-col">
          <Tabs 
            aria-label="Project categories" 
            selectedKey={selected} 
            onSelectionChange={key => setSelected(String(key))}
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "mx-auto mb-8",
              cursor: "w-full bg-primary"
            }}
          >
            <Tab key="ai" title="AI & ML">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.filter(p => p.category === "ai").map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </Tab>
            <Tab key="web" title="Web Development">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.filter(p => p.category === "web").map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
};