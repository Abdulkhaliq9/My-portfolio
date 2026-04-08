import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { memo } from "react";

const PageBackground = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const yGrid = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.12, 0.06, 0.08, 0.04]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.06, 0.1, 0.04]);

  if (isMobile || shouldReduceMotion) return null;

  return (
    <div ref={ref} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[150px] bg-primary"
        style={{ top: "-5%", left: "-5%", y: y1, opacity: opacity1 }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[130px] bg-accent"
        style={{ top: "30%", right: "-8%", y: y2, opacity: opacity2 }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full blur-[120px] bg-primary"
        style={{ top: "60%", left: "10%", y: y3, opacity: opacity1 }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          y: yGrid,
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
});

PageBackground.displayName = "PageBackground";

export default PageBackground;
