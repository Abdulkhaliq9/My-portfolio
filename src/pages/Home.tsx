import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { aboutContent } from "@/content/about";
import { skillsContent } from "@/content/skills";
import { experienceContent } from "@/content/experience";
import { projectsContent } from "@/content/projects";
import { ArrowDown, ArrowRight, Briefcase } from "lucide-react";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import HeroScene from "@/components/HeroScene";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import projectAnalytics from "@/assets/project-analytics.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectAutomation from "@/assets/project-automation.jpg";

const projectImages: Record<string, string> = {
  "ai-analytics-dashboard": projectAnalytics,
  "ecommerce-scalable-backend": projectEcommerce,
  "realtime-automation-builder": projectAutomation,
};

const typingTexts = ["Full Stack Developer", "MERN Specialist", "MEVN Expert", "Cloud Engineer"];

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const mouse = useMouseParallax(0.03);

  // Derived motion values for each parallax layer — zero re-renders
  const mx1 = useTransform(mouse.x, (v) => v * -0.5);
  const my1 = useTransform(mouse.y, (v) => v * -0.5);
  const mx2 = useTransform(mouse.x, (v) => v * -1.2);
  const my2 = useTransform(mouse.y, (v) => v * -1.2);
  const mx3 = useTransform(mouse.x, (v) => v * -2);
  const my3 = useTransform(mouse.y, (v) => v * -2);
  const mx4 = useTransform(mouse.x, (v) => v * -1.5);
  const my4 = useTransform(mouse.y, (v) => v * -1.5);
  const mx5 = useTransform(mouse.x, (v) => v * -2.5);
  const my5 = useTransform(mouse.y, (v) => v * -2.5);
  const mx6 = useTransform(mouse.x, (v) => v * -3);
  const my6 = useTransform(mouse.y, (v) => v * -3);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const current = typingTexts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
          if (charIndex + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setCurrentText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setTextIndex((i) => (i + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <ParallaxWrapper speed={0.3} className="absolute inset-0 z-0">
          <HeroScene />
        </ParallaxWrapper>
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="section-container text-center relative z-10">
          {/* Layer 1 - Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ x: mx1, y: my1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-border/50 bg-secondary/50 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {aboutContent.currentRole}
            </div>
          </motion.div>

          {/* Layer 2 - Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 text-balance"
            style={{ x: mx2, y: my2 }}
          >
            {aboutContent.headline.split(" ").map((word, i) =>
              i === 1 ? (
                <span key={i} className="gradient-text inline-block">{word} </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </motion.h1>

          {/* Layer 3 - Typing text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 h-8"
            style={{ x: mx3, y: my3 }}
          >
            <span className="font-mono text-primary">{currentText}</span>
            <span className="animate-pulse text-primary">|</span>
          </motion.div>

          {/* Layer 4 - Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-12 px-2"
            style={{ x: mx4, y: my4 }}
          >
            {aboutContent.subheadline}
          </motion.p>

          {/* Layer 5 - CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            style={{ x: mx5, y: my5 }}
          >
            <Link
              to="/projects"
              className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity text-center"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3 border border-border rounded-lg font-medium text-sm text-foreground hover:bg-secondary transition-colors text-center"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 sm:mt-16"
            style={{ x: mx6, y: my6 }}
          >
            <ArrowDown size={20} className="animate-float mx-auto text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <ParallaxWrapper speed={0.1}>
        <section className="section-container">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
              <div>
                <p className="text-sm font-mono text-primary mb-2">Featured Work</p>
                <h2 className="section-title mb-0">
                  Selected <span className="gradient-text">Projects</span>
                </h2>
              </div>
              <Link
                to="/projects"
                className="hidden md:flex items-center gap-1 text-sm text-primary hover:underline"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projectsContent.map((project, i) => (
              <ScrollReveal key={project.slug} delay={0.1 * i}>
                <TiltCard className="glass-card overflow-hidden hover-glow group" tiltIntensity={8}>
                  <Link to={`/projects/${project.slug}`} className="block">
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={projectImages[project.slug]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full backdrop-blur-sm border border-primary/20">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <Link
            to="/projects"
            className="md:hidden flex items-center justify-center gap-1 text-sm text-primary hover:underline mt-8"
          >
            View All Projects <ArrowRight size={14} />
          </Link>
        </section>
      </ParallaxWrapper>

      {/* Skills Preview */}
      <ParallaxWrapper speed={0.12}>
        <section className="section-container">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
              <div>
                <p className="text-sm font-mono text-primary mb-2">Tech Stack</p>
                <h2 className="section-title mb-0">
                  Skills & <span className="gradient-text">Technologies</span>
                </h2>
              </div>
              <Link
                to="/about"
                className="hidden md:flex items-center gap-1 text-sm text-primary hover:underline"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {skillsContent.map((category, i) => (
              <ScrollReveal key={category.title} delay={0.1 * i}>
                <div className="glass-card p-4 sm:p-6 hover-glow">
                  <h3 className="text-sm font-mono text-primary mb-3 sm:mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-badge text-xs sm:text-sm">{skill}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ParallaxWrapper>

      {/* Experience Preview */}
      <ParallaxWrapper speed={0.08}>
        <section className="section-container">
          <ScrollReveal>
            <p className="text-sm font-mono text-primary mb-2">Experience</p>
            <h2 className="section-title">
              Work <span className="gradient-text">History</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
            {experienceContent.map((exp, i) => (
              <ScrollReveal key={i} delay={0.15 * i}>
                <div className="glass-card p-5 sm:p-8 hover-glow">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Briefcase size={18} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground">{exp.company}</h3>
                      <p className="text-sm text-primary font-medium">{exp.role}</p>
                      <p className="text-xs text-muted-foreground mt-1 font-mono">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 sm:ml-14">
                    {exp.responsibilities.slice(0, 4).map((item, j) => (
                      <li key={j} className="flex items-start gap-2 sm:gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ParallaxWrapper>

      {/* CTA */}
      <ParallaxWrapper speed={0.05}>
        <section className="section-container">
          <ScrollReveal>
            <div className="glass-card p-8 sm:p-12 md:p-16 text-center hover-glow">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Let's Build Something <span className="gradient-text">Great Together</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto mb-6 sm:mb-8">
                Looking for a senior developer who can lead projects, architect systems, and deliver production-ready code?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity text-center"
                >
                  Start a Conversation
                </Link>
                <Link
                  to="/about"
                  className="w-full sm:w-auto px-8 py-3 border border-border rounded-lg font-medium text-sm text-foreground hover:bg-secondary transition-colors text-center"
                >
                  More About Me
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </ParallaxWrapper>
    </>
  );
};

export default Home;
