import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { aboutContent } from "@/content/about";
import { skillsContent } from "@/content/skills";
import { experienceContent } from "@/content/experience";
import { MapPin, Calendar, Briefcase, ArrowRight } from "lucide-react";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingParticles from "@/components/FloatingParticles";

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-container relative">
        <FloatingParticles count={4} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <p className="text-sm font-mono text-primary mb-2">About</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            Engineering Lead & <span className="gradient-text">Product-Minded Developer</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            {aboutContent.subheadline}
          </p>
        </motion.div>
      </section>

      {/* Bio + Info Card */}
      <ParallaxWrapper speed={0.1}>
        <section className="section-container pt-0">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <ScrollReveal className="md:col-span-2 space-y-4" direction="left">
              {aboutContent.bio.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-base sm:text-lg">{paragraph}</p>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="right">
              <div className="glass-card p-5 sm:p-6 space-y-4 hover-glow sticky top-24">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-primary shrink-0" />
                  <span className="text-muted-foreground">{aboutContent.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar size={16} className="text-primary shrink-0" />
                  <span className="text-muted-foreground">Since {aboutContent.experienceSince}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Briefcase size={16} className="text-primary shrink-0" />
                  <span className="text-muted-foreground">{aboutContent.currentRole}</span>
                </div>
                <div className="pt-2 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">Specialization</p>
                  <p className="text-sm font-medium text-foreground">{aboutContent.specialization}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ParallaxWrapper>

      {/* Journey */}
      <ParallaxWrapper speed={0.14}>
        <section className="section-container relative">
          <FloatingParticles count={3} />
          <ScrollReveal>
            <p className="text-sm font-mono text-primary mb-2">Journey</p>
            <h2 className="section-title">
              My <span className="gradient-text">Path</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border/30 hidden md:block" />
            {aboutContent.journey.map((step, i) => (
              <ScrollReveal key={i} delay={0.1 * i} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="glass-card p-5 sm:p-6 hover-glow md:ml-14 relative">
                  <div className="absolute -left-[calc(3.5rem+5px)] top-6 w-2.5 h-2.5 rounded-full bg-primary hidden md:block" />
                  <span className="text-xs font-mono text-primary">{step.year}</span>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mt-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ParallaxWrapper>

      {/* Experience */}
      <ParallaxWrapper speed={0.08}>
        <section className="section-container">
          <ScrollReveal>
            <p className="text-sm font-mono text-primary mb-2">Experience</p>
            <h2 className="section-title">
              Work <span className="gradient-text">History</span>
            </h2>
          </ScrollReveal>

          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            {experienceContent.map((exp, i) => (
              <ScrollReveal key={i} delay={0.12 * i} direction={i % 2 === 0 ? "left" : "right"}>
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
                    {exp.responsibilities.map((item, j) => (
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

      {/* Tech Stack */}
      <ParallaxWrapper speed={0.12}>
        <section className="section-container relative">
          <FloatingParticles count={3} />
          <ScrollReveal>
            <p className="text-sm font-mono text-primary mb-2">Expertise</p>
            <h2 className="section-title">
              Core <span className="gradient-text">Technologies</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {skillsContent.map((category, i) => (
              <ScrollReveal key={category.title} delay={0.1 * i} direction={i % 2 === 0 ? "left" : "right"}>
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

      {/* Philosophy */}
      <ParallaxWrapper speed={0.06}>
        <section className="section-container">
          <ScrollReveal>
            <p className="text-sm font-mono text-primary mb-2">Philosophy</p>
            <h2 className="section-title">
              How I <span className="gradient-text">Work</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {aboutContent.philosophy.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.1 * i} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="glass-card p-5 sm:p-6 hover-glow">
                  <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
            <div className="glass-card p-8 sm:p-12 text-center hover-glow">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Work <span className="gradient-text">Together?</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-6 sm:mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </ParallaxWrapper>
    </div>
  );
};

export default About;
