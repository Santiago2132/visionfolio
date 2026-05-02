import React, { useState, useEffect, useCallback } from "react";
import { useTheme } from "../hooks/useTheme";
import { Icon } from "@iconify/react";

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Home", icon: "lucide:home" },
  { id: "about", label: "About", icon: "lucide:user" },
  { id: "skills", label: "Skills", icon: "lucide:code" },
  { id: "projects", label: "Projects", icon: "lucide:folder" },
  { id: "contact", label: "Contact", icon: "lucide:mail" },
];

interface LayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (id: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeSection, onSectionChange }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onSectionChange(id);
    }
  }, [onSectionChange]);

  return (
    <div className="relative min-h-screen">
      {/* Progress bar at top */}
      <div
        className="fixed top-0 left-0 h-1 z-[102] transition-all duration-300"
        style={{
          width: `${scrollProgress * 100}%`,
          background: "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))",
        }}
      />

      {/* Theme toggle */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <Icon icon={theme === "light" ? "lucide:moon" : "lucide:sun"} width={24} />
      </button>

      {/* Floating sidebar */}
      <nav className="floating-sidebar" aria-label="Main navigation">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`sidebar-dot ${activeSection === item.id ? "active" : ""}`}
            data-label={item.label}
            onClick={() => scrollToSection(item.id)}
            aria-label={`Navigate to ${item.label}`}
            aria-current={activeSection === item.id ? "page" : undefined}
          />
        ))}
      </nav>

      {/* Main content */}
      <main>{children}</main>
    </div>
  );
};
