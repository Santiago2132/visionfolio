import { useState, useEffect, useCallback } from "react";
import { Layout } from "./components/Layout";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/ProjectsSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";

const SECTIONS = ["hero", "about", "skills", "projects", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const updateActiveSection = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const element = document.getElementById(SECTIONS[i]);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.5) {
          setActiveSection(SECTIONS[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  return (
    <Layout activeSection={activeSection} onSectionChange={setActiveSection}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}
