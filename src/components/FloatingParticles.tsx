import { motion, useReducedMotion, useTransform } from "framer-motion";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { memo } from "react";

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

const FloatingParticles = memo(({ count = 5, className = "" }: FloatingParticlesProps) => {
  const shouldReduceMotion = useReducedMotion();
  const mouse = useMouseParallax(0.03);

  // Derived motion values — no re-renders on mouse move
  const orb1X = useTransform(mouse.x, (v) => v * 1.5);
  const orb1Y = useTransform(mouse.y, (v) => v * 1.5);
  const orb2X = useTransform(mouse.x, (v) => v * -1.2);
  const orb2Y = useTransform(mouse.y, (v) => v * -1.2);
  const orb3X = useTransform(mouse.x, (v) => v * 2);
  const orb3Y = useTransform(mouse.y, (v) => v * 2);

  if (shouldReduceMotion) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] bg-primary/8"
        animate={{ x: [0, 40, -30, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ top: "10%", left: "5%", translateX: orb1X, translateY: orb1Y }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full blur-[120px] bg-accent/6"
        animate={{ x: [0, -35, 25, 0], y: [0, 40, -35, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ bottom: "15%", right: "5%", translateX: orb2X, translateY: orb2Y }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full blur-[100px] bg-primary/5"
        animate={{ x: [0, 20, -15, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ top: "50%", left: "40%", translateX: orb3X, translateY: orb3Y }}
      />

      {[...Array(count)].map((_, i) => (
        <FloatingDot key={i} index={i} mouseX={mouse.x} mouseY={mouse.y} />
      ))}
    </div>
  );
});

FloatingParticles.displayName = "FloatingParticles";

const FloatingDot = memo(({ index, mouseX, mouseY }: { index: number; mouseX: any; mouseY: any }) => {
  const tx = useTransform(mouseX, (v: number) => v * (0.5 + index * 0.3));
  const ty = useTransform(mouseY, (v: number) => v * (0.5 + index * 0.3));

  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-primary/20"
      animate={{ y: [0, -25 - index * 5, 0], opacity: [0.15, 0.5, 0.15] }}
      transition={{ duration: 5 + index * 1.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.7 }}
      style={{
        left: `${12 + index * 16}%`,
        top: `${18 + (index % 3) * 28}%`,
        translateX: tx,
        translateY: ty,
      }}
    />
  );
});

FloatingDot.displayName = "FloatingDot";

export default FloatingParticles;
