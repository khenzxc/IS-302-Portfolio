import { useState, useEffect, useRef } from "react";

export function useScrollEffects(maxBlur = 12, fadeDistance = 500) {
  const frameRef = useRef(null);
  const lastScrollYRef = useRef(0);

  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateViewport = () => setIsMobile(window.innerWidth <= 768);

    const handleScroll = () => {
      if (window.innerWidth <= 768) return;

      if (prefersReducedMotion) {
        setScrollY(0);
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
      setScrollY(0);
      return () => {};
    }

    updateViewport();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateViewport);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateViewport);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(updateViewport);
    }

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateViewport);
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updateViewport);
      } else if (typeof mediaQuery.removeListener === "function") {
        mediaQuery.removeListener(updateViewport);
      }
    };
  }, []);

  const opacity = Math.max(1 - scrollY / fadeDistance, 0);
  const blur = isMobile ? 0 : Math.min(scrollY / (fadeDistance / maxBlur), maxBlur);
  const scale = isMobile
    ? Math.max(1 - scrollY / (fadeDistance * 8), 0.98)
    : Math.max(1 - scrollY / (fadeDistance * 5), 0.92);

  return { opacity, blur, scale, isMobile };
}
