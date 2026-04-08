import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, ReactNode, memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ParallaxWrapperProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxWrapper = memo(({ children, speed = 0.15, className = "" }: ParallaxWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60 * speed, -60 * speed]);

  if (isMobile || shouldReduceMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
});

ParallaxWrapper.displayName = "ParallaxWrapper";

export default ParallaxWrapper;
