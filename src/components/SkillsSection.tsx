import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { skills } from "../data/skills";

export const SkillsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [visibleBars, setVisibleBars] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillElements = entry.target.querySelectorAll(".skill-pill");
            skillElements.forEach((el, idx) => {
              setTimeout(() => {
                setVisibleBars((prev) => new Set(prev).add(idx));
              }, idx * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="snap-section"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        {/* Background decorations */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--accent-secondary)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--accent-primary)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
        />

        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-title gradient-text">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I've mastered throughout my career
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <motion.button
              key={skill.id}
              className={`skill-pill ${expandedId === skill.id ? "expanded" : ""}`}
              onClick={() => toggleExpand(skill.id)}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon */}
              <div className="skill-pill-icon">
                <Icon icon={skill.icon} width={24} color="white" />
              </div>

              {/* Details */}
              <div className="skill-pill-details">
                <div className="skill-pill-name">{skill.name}</div>
                <div className="skill-pill-proficiency">
                  {skill.proficiency}% proficiency
                </div>
                <div className="skill-pill-bar">
                  <div
                    className="skill-pill-bar-fill"
                    style={{ width: visibleBars.has(idx) ? `${skill.proficiency}%` : "0%" }}
                  />
                </div>

                {/* Expanded description */}
                <div className="skill-pill-expanded">
                  <p className="skill-pill-description">{skill.description}</p>
                </div>
              </div>

              {/* Expand indicator */}
              <Icon
                icon={expandedId === skill.id ? "lucide:chevron-up" : "lucide:chevron-down"}
                width={20}
                style={{ color: "var(--text-muted)", flexShrink: 0, transition: "var(--transition-smooth)" }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
