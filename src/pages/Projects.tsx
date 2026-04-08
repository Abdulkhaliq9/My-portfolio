import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projectsContent, filterTags } from "@/content/projects";
import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import FloatingParticles from "@/components/FloatingParticles";
import TiltCard from "@/components/TiltCard";
import projectAnalytics from "@/assets/project-analytics.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectAutomation from "@/assets/project-automation.jpg";

const projectImages: Record<string, string> = {
  "ai-analytics-dashboard": projectAnalytics,
  "ecommerce-scalable-backend": projectEcommerce,
  "realtime-automation-builder": projectAutomation,
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projectsContent
    : projectsContent.filter((p) => p.filterTag === activeFilter);

  return (
    <div className="pt-16 relative">
      <FloatingParticles count={4} />

      <section className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2">Projects</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            Featured <span className="gradient-text">Work</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 sm:mb-10">
            A collection of projects showcasing my expertise in full-stack development, from complex backends to polished user interfaces.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8 sm:mb-12"
        >
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg font-medium transition-all duration-200 ${
                activeFilter === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid with parallax */}
      <ParallaxWrapper speed={0.08}>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-24 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={0.08 * i} direction={i % 3 === 0 ? "left" : i % 3 === 1 ? "up" : "right"}>
                <TiltCard className="glass-card overflow-hidden hover-glow group h-full flex flex-col" tiltIntensity={8}>
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
                  </Link>

                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <Link to={`/projects/${project.slug}`}>
                        <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-2 shrink-0">
                        <a href={project.githubUrl} className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                          <Github size={14} />
                        </a>
                        <a href={project.liveUrl} className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors" aria-label="Live">
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found for this filter.</p>
            </div>
          )}
        </section>
      </ParallaxWrapper>
    </div>
  );
};

export default Projects;
