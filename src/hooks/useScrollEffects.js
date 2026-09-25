import { useState, useEffect, useRef } from "react";

export function useScrollEffects(fadeDistance = 500) {
  const frameRef = useRef(null);
  const lastScrollYRef = useRef(0);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleScroll = () => {
      if (prefersReducedMotion) {
        return;
      }

      const nextScrollY = window.scrollY || 0;
      if (Math.abs(nextScrollY - lastScrollYRef.current) < 4) return;

      lastScrollYRef.current = nextScrollY;

      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        setScrollY(nextScrollY);
        frameRef.current = null;
      });
    };

    if (prefersReducedMotion) {
      return () => {};
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = Math.max(1 - scrollY / fadeDistance, 0);
  return { opacity };
}
