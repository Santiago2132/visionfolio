import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface ContactItemProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
  delay: number;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, href, delay }) => (
  <motion.a
    href={href}
    target={href?.startsWith("http") ? "_blank" : undefined}
    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    className="contact-item"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ x: 4 }}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <div className="contact-icon">
      <Icon icon={icon} width={24} />
    </div>
    <div style={{ minWidth: 0 }}>
      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
        {label}
      </div>
      <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)", overflowWrap: "anywhere", wordBreak: "break-word" }}>{value}</div>
    </div>
  </motion.a>
);

export const ContactSection: React.FC = () => {
  const socialLinks = [
    { icon: "lucide:github", label: "GitHub", href: "https://github.com/Santiago2132" },
    {
      icon: "logos:linkedin-icon",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/santiago-maldonado-rojas-4580b3276/",
    },
  ];

  return (
    <section
      id="contact"
      className="snap-section"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        {/* Background decorations */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--accent-primary)" }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.15, 0.1] }}
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
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          className="glass"
          style={{ padding: "2.5rem" }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3
            className="text-center mb-8"
            style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }}
          >
            Connect With Me
          </h3>

          <p
            className="text-center mb-10"
            style={{ color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}
          >
            Feel free to reach out through any of these platforms. I'm always open to discussing new
            projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Contact items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <ContactItem
              icon="lucide:mail"
              label="Email"
              value="santiagomaldonadorojas054@protonmail.com"
              href="mailto:santiagomaldonadorojas054@protonmail.com"
              delay={0.1}
            />
            <ContactItem
              icon="lucide:map-pin"
              label="Location"
              value="Girón, Santander"
              delay={0.2}
            />
            <ContactItem
              icon="lucide:phone"
              label="Phone"
              value="+57 315 547 0362"
              href="tel:+573155470362"
              delay={0.3}
            />
            <ContactItem
              icon="lucide:clock"
              label="Availability"
              value="Open to opportunities"
              delay={0.4}
            />
          </div>

          {/* Divider */}
          <div
            className="h-px mb-8"
            style={{ background: "linear-gradient(90deg, transparent, var(--shadow-dark), transparent)" }}
          />

          {/* Social links */}
          <div className="text-center">
            <h4
              className="mb-6"
              style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}
            >
              Social Profiles
            </h4>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="neu-button"
                  style={{
                    padding: "0.875rem",
                    borderRadius: "var(--radius-md)",
                    width: "56px",
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon icon={social.icon} width={26} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
