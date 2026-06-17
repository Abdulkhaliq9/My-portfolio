export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export const experienceContent: Experience[] = [
  {
    company: "TechCreatix",
    role: "Software Engineer",
    period: "Aug 2024 – Present",
    location: "Lahore, Pakistan",
    responsibilities: [
      "Developed and maintained full-stack web applications from requirement gathering to production deployment",
      "Designed scalable architectures and organized codebases for long-term maintainability",
      "Built REST APIs and integrated third-party services for data-driven applications",
      "Managed PostgreSQL databases and optimized backend workflows and query performance",
      "Developed Python scripts for data ingestion and automation tasks",
      "Collaborated directly with clients, prepared technical documentation, and maintained production servers",
    ],
  },
  {
    company: "AcuteDev",
    role: "Frontend Developer",
    period: "Oct 2023 – Apr 2024",
    location: "Lahore, Pakistan",
    responsibilities: [
      "Developed responsive websites, e-commerce platforms, and custom web applications",
      "Converted UI designs into production-ready interfaces with a focus on usability and performance",
      "Built reusable components and improved user experiences across multiple projects",
      "Collaborated with clients to deliver tailored solutions while maintaining code quality",
    ],
  },
];
