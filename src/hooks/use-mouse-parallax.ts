import { useEffect } from "react";
import { useMotionValue, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Returns MotionValues for mouse parallax — no React re-renders on mouse move.
 * Use .get() for reads or pass directly to motion.div style props.
 */
export function useMouseParallax(intensity: number = 0.02) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile || shouldReduceMotion) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        x.set((e.clientX - centerX) * intensity);
        y.set((e.clientY - centerY) * intensity);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [intensity, isMobile, shouldReduceMotion, x, y]);

  return { x, y };
}
