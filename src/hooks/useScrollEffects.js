import { useEffect, useRef, useState } from "react";

export function useScrollEffects(fadeDistance = 500) {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const isActiveRef = useRef(true);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const applyScrollPosition = () => {
      const scrollY = window.scrollY || 0;
      const opacity = Math.max(1 - scrollY / fadeDistance, 0);
      const nextIsActive = opacity > 0;

      if (sectionRef.current) {
        sectionRef.current.style.opacity = String(opacity);
      }

      if (nextIsActive !== isActiveRef.current) {
        isActiveRef.current = nextIsActive;
        setIsActive(nextIsActive);
      }
    };

    if (prefersReducedMotion) {
      if (sectionRef.current) sectionRef.current.style.opacity = "1";
      isActiveRef.current = false;
      setIsActive(false);
      return undefined;
    }

    const handleScroll = () => {
      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        applyScrollPosition();
        frameRef.current = null;
      });
    };

    applyScrollPosition();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fadeDistance]);

  return { sectionRef, isActive };
}
