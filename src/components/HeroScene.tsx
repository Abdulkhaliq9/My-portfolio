import { motion, useTransform } from "framer-motion";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { memo } from "react";

const HeroScene = memo(() => {
  const mouse = useMouseParallax(0.04);

  const orb1X = useTransform(mouse.x, (v) => v * 2);
  const orb1Y = useTransform(mouse.y, (v) => v * 2);
  const orb2X = useTransform(mouse.x, (v) => v * -1.5);
  const orb2Y = useTransform(mouse.y, (v) => v * -1.5);
  const orb3X = useTransform(mouse.x, (v) => v * 3);
  const orb3Y = useTransform(mouse.y, (v) => v * 3);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[100px] bg-primary/10"
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ top: '15%', left: '10%', translateX: orb1X, translateY: orb1Y }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full blur-[100px] bg-accent/8"
        animate={{ x: [0, -25, 15, 0], y: [0, 30, -25, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ bottom: '20%', right: '10%', translateX: orb2X, translateY: orb2Y }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full blur-[80px] bg-primary/5"
        animate={{ x: [0, 15, -10, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', translateX: orb3X, translateY: orb3Y }}
      />

      {[...Array(6)].map((_, i) => (
        <HeroDot key={i} index={i} mouseX={mouse.x} mouseY={mouse.y} />
      ))}
    </div>
  );
});

HeroScene.displayName = "HeroScene";

const HeroDot = memo(({ index, mouseX, mouseY }: { index: number; mouseX: any; mouseY: any }) => {
  const tx = useTransform(mouseX, (v: number) => v * (1 + index * 0.4));
  const ty = useTransform(mouseY, (v: number) => v * (1 + index * 0.4));

  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-primary/30"
      animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 4 + index * 0.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
      style={{
        left: `${15 + index * 14}%`,
        top: `${20 + (index % 3) * 25}%`,
        translateX: tx,
        translateY: ty,
      }}
    />
  );
});

HeroDot.displayName = "HeroDot";

export default HeroScene;
