import { useState, useEffect } from "react";

export function useScrollEffects(maxBlur = 12, fadeDistance = 500) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / fadeDistance, 0);
  const blur = Math.min(scrollY / (fadeDistance / maxBlur), maxBlur);
  const scale = Math.max(1 - scrollY / (fadeDistance * 5), 0.92);

  return { opacity, blur, scale };
}