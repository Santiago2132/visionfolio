import React from "react";
import { motion } from "framer-motion";
import { SkillCard } from "./skill-card";
import { skills } from "../data/skills";
import { fadeIn, staggerContainer } from "../animations";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-[#f8f6f0] relative overflow-hidden" style={{
      background: "linear-gradient(120deg, #f8f6f0 60%, #f3e9ff 100%)"
    }}>
      {/* Neo-brutalism background blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 w-[320px] h-[320px] rounded-[40px] z-0"
        style={{
          background: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
          boxShadow: "12px 12px 0 #fbc2eb, 0 0 0 6px #fff"
        }}
        animate={{
          x: [0, -20, 20, 0],
          y: [0, -10, 10, 0],
          rotate: [0, -4, 4, 0]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-black drop-shadow-[4px_4px_0_#fff]">
            Technical Skills
          </h2>
          <p className="text-foreground-500 max-w-2xl mx-auto text-lg font-medium">
            Technologies and tools I've mastered throughout my career
          </p>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};