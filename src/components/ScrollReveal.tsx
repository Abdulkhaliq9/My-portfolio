import { motion, useInView, useReducedMotion, Variants } from "framer-motion";
import { useRef, ReactNode, memo } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
};

const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ScrollReveal = memo(({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={shouldReduceMotion ? reducedVariants : variants[direction]}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

ScrollReveal.displayName = "ScrollReveal";

export default ScrollReveal;
