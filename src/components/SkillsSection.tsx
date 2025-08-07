import React from "react";
import { motion } from "framer-motion";
import { SkillCard } from "./skill-card";
import { skills } from "../data/skills";
import { fadeIn, staggerContainer } from "../animations";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Technical Skills</h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            Technologies and tools I've mastered throughout my career
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};