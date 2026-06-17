export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsContent: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Vue.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Fastify", "Express.js", "REST APIs", "JWT Authentication", "Python"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Linux", "Vercel", "Railway", "Cloudflare", "Cloudinary"],
  },
];
