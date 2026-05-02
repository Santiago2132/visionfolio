import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { projects } from "../data/projects";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
}

type Category = "all" | "web" | "ai" | "mobile";

const CATEGORIES: { key: Category; label: string; icon: string }[] = [
  { key: "all", label: "All", icon: "lucide:grid" },
  { key: "web", label: "Web", icon: "lucide:globe" },
  { key: "ai", label: "AI & ML", icon: "lucide:brain" },
  { key: "mobile", label: "Mobile", icon: "lucide:smartphone" },
];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "mobile") return p.category === "";
    return p.category === activeCategory;
  });

  return (
    <section
      id="projects"
      className="snap-section"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {/* Background decorations */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--accent-tertiary)" }}
          animate={{ x: [0, 80, -80, 0], y: [0, -60, 60, 0] }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "mirror" }}
        />

        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle">
            Explore my work across different technologies and platforms
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center mb-10">
          <div className="neu-pressed flex gap-2 p-2" style={{ borderRadius: "var(--radius-full)" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat.key
                    ? "text-white"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
                style={
                  activeCategory === cat.key
                    ? {
                        background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                        boxShadow: "0 4px 15px rgba(108, 99, 255, 0.4)",
                      }
                    : {
                        background: "transparent",
                        boxShadow: "none",
                      }
                }
                onClick={() => setActiveCategory(cat.key)}
              >
                <Icon icon={cat.icon} width={16} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {filteredProjects.map((project: Project, idx: number) => (
              <motion.div
                key={project.id}
                className="project-card glass glass-hover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => window.open(project.link, "_blank")}
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-image"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="project-card-content">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2 py-1 text-xs font-medium rounded-full"
                        style={{
                          background: "var(--bg-secondary)",
                          color: "var(--text-secondary)",
                          boxShadow: "var(--neu-inset)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View link */}
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--accent-primary)" }}>
                    <Icon icon="lucide:external-link" width={16} />
                    View Project
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
