import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="snap-section"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        {/* Background decorations */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-10 -left-20 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--accent-primary)" }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-10 -right-20 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--accent-secondary)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "mirror" }}
        />

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar */}
          <motion.div
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -40, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-[var(--radius-xl)]"
                style={{
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                  transform: "rotate(6deg)",
                  opacity: 0.3,
                }}
              />
              <img
                src="/images/me_profile.png"
                alt="Santiago Maldonado"
                className="about-avatar relative"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="section-title gradient-text mb-6">About Me</h2>

            <div className="space-y-4 mb-8">
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                Hi, I'm <strong style={{ color: "var(--text-primary)" }}>Santiago Maldonado Rojas</strong>, a
                multi-disciplinary developer with a passion for creating elegant solutions to complex problems.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                With expertise spanning mobile development, artificial intelligence, and web technologies,
                I bring a unique perspective to every project. I believe in writing clean, maintainable code
                that delivers exceptional user experiences.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.05rem" }}>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing my knowledge through technical writing and mentorship.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { label: "Projects", value: "10+", icon: "lucide:folder" },
                { label: "Technologies", value: "15+", icon: "lucide:cpu" },
                { label: "Years Exp.", value: "3+", icon: "lucide:calendar" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="neu-flat flex items-center gap-3 px-4 py-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                >
                  <Icon icon={stat.icon} width={20} style={{ color: "var(--accent-primary)" }} />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--text-primary)" }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/CVC_Santiago_Maldonado.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <motion.button
                className="neu-button"
                style={{
                  background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                  color: "white",
                  borderRadius: "var(--radius-md)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  Download Resume
                  <Icon icon="lucide:download" width={18} />
                </span>
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
