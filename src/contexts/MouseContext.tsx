import { createContext, useContext, useState, useCallback, useRef, useEffect, type ReactNode } from "react";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

interface MouseContextType {
  mousePos: MousePosition;
}

const MouseContext = createContext<MouseContextType>({
  mousePos: { x: 0, y: 0, normalizedX: 0.5, normalizedY: 0.5 },
});

export function MouseProvider({ children }: { children: ReactNode }) {
  const [mousePos, setMousePos] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0.5,
    normalizedY: 0.5,
  });

  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const x = e.clientX;
      const y = e.clientY;
      const normalizedX = x / window.innerWidth;
      const normalizedY = y / window.innerHeight;

      setMousePos({ x, y, normalizedX, normalizedY });

      document.documentElement.style.setProperty("--mouse-x", `${x}`);
      document.documentElement.style.setProperty("--mouse-y", `${y}`);
      document.documentElement.style.setProperty("--mouse-nx", `${normalizedX}`);
      document.documentElement.style.setProperty("--mouse-ny", `${normalizedY}`);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove]);

  return (
    <MouseContext.Provider value={{ mousePos }}>
      {children}
    </MouseContext.Provider>
  );
}

export function useMouse() {
  return useContext(MouseContext);
}
