import { motion } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import { projectsContent } from "@/content/projects";
import { ArrowLeft, Github, ExternalLink, CheckCircle, AlertTriangle, Rocket, Code, Server } from "lucide-react";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingParticles from "@/components/FloatingParticles";
import projectAnalytics from "@/assets/project-analytics.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectAutomation from "@/assets/project-automation.jpg";

const projectImages: Record<string, string> = {
  "ai-analytics-dashboard": projectAnalytics,
  "ecommerce-scalable-backend": projectEcommerce,
  "realtime-automation-builder": projectAutomation,
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsContent.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="pt-16 relative">
      <FloatingParticles count={4} />

      {/* Hero */}
      <ParallaxWrapper speed={0.06}>
        <section className="section-container pb-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8"
            >
              <ArrowLeft size={14} /> Back to Projects
            </Link>

            <div className="flex flex-col gap-4 mb-4 sm:mb-6">
              <div>
                <span className="text-xs font-mono text-primary mb-2 block">{project.category}</span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  {project.title}
                </h1>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={project.githubUrl}
                  className="px-4 py-2 text-sm rounded-lg border border-border text-foreground hover:bg-secondary transition-colors inline-flex items-center gap-2"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={project.liveUrl}
                  className="px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mb-6 sm:mb-8">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs sm:text-sm rounded-md bg-secondary text-secondary-foreground font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      </ParallaxWrapper>

      {/* Screenshot with parallax */}
      <ParallaxWrapper speed={0.1} className="relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden border border-border/50">
              <img
                src={projectImages[project.slug]}
                alt={`${project.title} screenshot`}
                className="w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </section>
      </ParallaxWrapper>

      {/* Content Grid */}
      <ParallaxWrapper speed={0.08}>
        <section className="section-container relative z-10">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
            <ScrollReveal direction="left">
              <div className="glass-card p-5 sm:p-8 hover-glow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <AlertTriangle size={20} />
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground">The Problem</h2>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} direction="right">
              <div className="glass-card p-5 sm:p-8 hover-glow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Code size={20} />
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground">My Role</h2>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.role}</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="glass-card p-5 sm:p-8 hover-glow mt-4 sm:mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Server size={20} />
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-foreground">Architecture</h2>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.architecture}</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 mt-4 sm:mt-8">
            <ScrollReveal direction="left">
              <div className="glass-card p-5 sm:p-8 hover-glow h-full">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Key Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <AlertTriangle size={14} className="text-primary mt-0.5 shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} direction="right">
              <div className="glass-card p-5 sm:p-8 hover-glow h-full">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ParallaxWrapper speed={0.05}>
            <ScrollReveal>
              <div className="glass-card p-5 sm:p-8 hover-glow mt-4 sm:mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Rocket size={20} />
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground">Deployment</h2>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.deployment}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="glass-card p-5 sm:p-8 hover-glow mt-4 sm:mt-8">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Results & Impact</h2>
                <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                  {project.results.map((result, i) => (
                    <ScrollReveal key={i} delay={0.1 * i}>
                      <div className="p-3 sm:p-4 rounded-lg bg-secondary/50 border border-border/30">
                        <CheckCircle size={16} className="text-primary mb-2" />
                        <p className="text-sm text-muted-foreground">{result}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </ParallaxWrapper>

          <ScrollReveal>
            <div className="text-center mt-12 sm:mt-16">
              <p className="text-muted-foreground mb-4">Interested in working together?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity text-center"
                >
                  Start a Conversation
                </Link>
                <Link
                  to="/projects"
                  className="w-full sm:w-auto px-6 py-3 border border-border rounded-lg font-medium text-sm text-foreground hover:bg-secondary transition-colors text-center"
                >
                  More Projects
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </ParallaxWrapper>
    </div>
  );
};

export default ProjectDetail;
