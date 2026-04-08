export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsContent: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Vue.js", "React Native", "Tailwind CSS", "Ant Design", "Material UI", "shadcn/ui"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "Fastify", "Python"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS S3", "AWS Athena", "CI/CD Pipelines", "Vercel", "Railway", "Ubuntu Server", "Deployment Handling"],
  },
];
