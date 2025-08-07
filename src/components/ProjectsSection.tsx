import React from "react";
import { Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { projects } from "../data/projects";
import { fadeIn, staggerContainer } from "../animations";

export const ProjectsSection: React.FC = () => {
  const [selected, setSelected] = React.useState("web");

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured Projects</h2>
        <p className="text-foreground-500 max-w-2xl mx-auto">
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.filter(p => p.category === "web").map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};