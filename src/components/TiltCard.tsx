import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltIntensity?: number;
  glareEnabled?: boolean;
}

const TiltCard = ({ children, className = "", tiltIntensity = 10, glareEnabled = true }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);

  if (isMobile || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {children}
      {glareEnabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-xl z-10"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle at ${gx}% ${gy}%, hsl(var(--primary) / 0.08) 0%, transparent 60%)`
            ),
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
