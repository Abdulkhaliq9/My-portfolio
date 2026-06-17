import { motion } from 'framer-motion';
import { useState } from 'react';
import { contactContent } from '@/content/contact';
import { Mail, Linkedin, Github, Download, Send, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from '@/components/ScrollReveal';
import ParallaxWrapper from '@/components/ParallaxWrapper';
import FloatingParticles from '@/components/FloatingParticles';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactLinks = [
    {
      href: `mailto:${contactContent.email}`,
      icon: Mail,
      label: 'Email',
      text: contactContent.email,
    },
    {
      href: `tel:${contactContent.phone.replace(/\s/g, '')}`,
      icon: Phone,
      label: 'Phone',
      text: contactContent.phone,
    },
    {
      href: contactContent.linkedin,
      icon: Linkedin,
      label: 'LinkedIn',
      text: 'Connect with me',
      external: true,
    },
    {
      href: contactContent.github,
      icon: Github,
      label: 'GitHub',
      text: 'View my code',
      external: true,
    },
    {
      href: contactContent.resumeUrl,
      icon: Download,
      label: 'Resume',
      text: 'Download CV',
      external: true,
    },
  ];

  return (
    <div className="pt-16 relative">
      <FloatingParticles count={5} />

      <section className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2">Contact</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            {contactContent.heading.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="gradient-text">
              {contactContent.heading.split(' ').slice(2).join(' ')}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            {contactContent.subheading}
          </p>
        </motion.div>
      </section>

      <ParallaxWrapper speed={0.1}>
        <section className="section-container pt-0 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <ScrollReveal direction="left">
              <form
                onSubmit={handleSubmit}
                className="glass-card p-5 sm:p-8 space-y-4 sm:space-y-5 hover-glow"
              >
                {[
                  {
                    label: 'Name',
                    type: 'text',
                    key: 'name' as const,
                    placeholder: 'Your name',
                  },
                  {
                    label: 'Email',
                    type: 'email',
                    key: 'email' as const,
                    placeholder: 'your@email.com',
                  },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="text-xs text-muted-foreground mb-1.5 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      value={formData[field.key]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field.key]: e.target.value,
                        })
                      }
                      className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors focus:border-primary/30"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none transition-colors focus:border-primary/30"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="right">
              <div className="space-y-3 sm:space-y-4">
                {contactLinks.map((link, i) => (
                  <ScrollReveal
                    key={link.label}
                    delay={0.1 * i}
                    direction="right"
                  >
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="glass-card p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover-glow block"
                    >
                      <div className="p-2 sm:p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                        <link.icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">
                          {link.label}
                        </p>
                        <p className="text-sm text-foreground truncate">
                          {link.text}
                        </p>
                      </div>
                    </a>
                  </ScrollReveal>
                ))}

                <ScrollReveal delay={0.5}>
                  <div className="glass-card p-6 sm:p-8 text-center hover-glow mt-4 sm:mt-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Prefer a quick call?
                    </p>
                    <p className="text-foreground font-medium text-sm sm:text-base">
                      Schedule a meeting to discuss your project
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ParallaxWrapper>
    </div>
  );
};

export default Contact;
