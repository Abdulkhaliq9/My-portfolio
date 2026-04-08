export interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export const experienceContent: Experience[] = [
  {
    company: "TechCreatix",
    role: "Full Stack Developer & Project Lead",
    period: "2024 – Present",
    responsibilities: [
      "Leading development team and mentoring junior developers",
      "Architecting scalable backend systems for production workloads",
      "Managing client pipelines and stakeholder communication",
      "Handling production deployments and release management",
      "Optimizing application performance and load times",
      "Cloud integrations with AWS S3 and Athena",
      "Full lifecycle product delivery from concept to deployment",
    ],
  },
];
