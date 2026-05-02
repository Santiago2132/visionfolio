import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ASCII_ART = `

      ███████╗██╗ ██████╗
      ██╔════╝██║██╔════╝
      ███████╗██║██║
      ╚════██║██║██║
      ███████║██║╚██████╗
      ╚══════╝╚═╝ ╚═════╝
      FULL-STACK DEVELOPER
      Santiago Maldonado Rojas
`;

const TYPING_LINES = [
  { type: "comment" as const, text: "// Welcome to my portfolio" },
  { type: "prompt" as const, text: "$ whoami" },
  { type: "output" as const, text: "Santiago Maldonado — Full-Stack Developer" },
  { type: "prompt" as const, text: "$ cat skills.json" },
  { type: "output" as const, text: '{ "core": ["React", "TypeScript", "Python", "Kotlin"] }' },
  { type: "prompt" as const, text: "$ echo $PASSION" },
  { type: "output" as const, text: '"Building elegant solutions to complex problems"' },
  { type: "prompt" as const, text: "$ _" },
];

export const HeroSection: React.FC = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [displayedText, setDisplayedText] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (currentLine >= TYPING_LINES.length) return;

    const line = TYPING_LINES[currentLine];

    if (currentChar < line.text.length) {
      intervalRef.current = setTimeout(() => {
        setDisplayedText((prev) => prev + line.text[currentChar]);
        setCurrentChar((prev) => prev + 1);
      }, line.type === "prompt" ? 50 : 25);
    } else {
      setCompletedLines((prev) => [...prev, displayedText]);
      setDisplayedText("");
      setCurrentChar(0);
      setCurrentLine((prev) => prev + 1);
    }

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [currentLine, currentChar]);

  const getLineColor = (type: string) => {
    switch (type) {
      case "comment":
        return "var(--text-muted)";
      case "prompt":
        return "var(--accent-primary)";
      case "output":
        return "var(--accent-tertiary)";
      default:
        return "var(--text-primary)";
    }
  };

  return (
    <section
      id="hero"
      className="snap-section"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        {/* Animated background orbs */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--accent-primary)" }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: "var(--accent-secondary)" }}
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
        />

        <div className="relative">
          {/* Terminal */}
          <motion.div
            className="terminal glow-primary"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Terminal header */}
            <div className="terminal-header">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span
                style={{
                  marginLeft: "1rem",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                santiago@portfolio ~ %
              </span>
            </div>

            {/* Terminal body */}
            <div className="terminal-body">
              {/* ASCII Art */}
              <pre
                style={{
                  fontSize: "0.55rem",
                  lineHeight: "1.2",
                  color: "var(--accent-primary)",
                  marginBottom: "1.5rem",
                  fontFamily: "var(--font-mono)",
                }}
                className="hidden md:block"
              >
                {ASCII_ART}
              </pre>

              {/* Typing lines */}
              <div style={{ fontFamily: "var(--font-mono)" }}>
                {completedLines.map((line, idx) => {
                  const originalLine = TYPING_LINES[idx];
                  return (
                    <div
                      key={idx}
                      style={{
                        color: originalLine ? getLineColor(originalLine.type) : "var(--text-primary)",
                        marginBottom: "0.5rem",
                        opacity: 0.9,
                      }}
                    >
                      {originalLine?.type === "prompt" && (
                        <span style={{ color: "var(--accent-secondary)", marginRight: "0.5rem" }}>
                          ❯
                        </span>
                      )}
                      {line}
                    </div>
                  );
                })}

                {/* Currently typing line */}
                {currentLine < TYPING_LINES.length && (
                  <div
                    style={{
                      color: getLineColor(TYPING_LINES[currentLine].type),
                      marginBottom: "0.5rem",
                    }}
                  >
                    {TYPING_LINES[currentLine].type === "prompt" && (
                      <span style={{ color: "var(--accent-secondary)", marginRight: "0.5rem" }}>
                        ❯
                      </span>
                    )}
                    {displayedText}
                    <span className="typing-cursor" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              className="neu-button"
              onClick={() => scrollToSection("projects")}
              style={{
                background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                color: "white",
                borderRadius: "var(--radius-md)",
              }}
            >
              <span className="flex items-center gap-2">
                View Projects
                <Icon icon="lucide:arrow-down" width={18} />
              </span>
            </button>
            <button
              className="neu-button"
              onClick={() => scrollToSection("contact")}
            >
              <span className="flex items-center gap-2">
                Let's Talk
                <Icon icon="lucide:message-circle" width={18} />
              </span>
            </button>
          </motion.div>

          {/* Tech icons row */}
          <motion.div
            className="flex gap-6 justify-center mt-12 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {["logos:react", "logos:typescript-icon", "logos:python", "logos:kotlin", "logos:nodejs-icon"].map(
              (icon, idx) => (
                <motion.div
                  key={idx}
                  className="neu-button"
                  style={{
                    padding: "0.75rem",
                    borderRadius: "var(--radius-sm)",
                    width: "56px",
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon icon={icon} width={28} />
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
