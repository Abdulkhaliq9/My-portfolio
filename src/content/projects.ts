import projectPace from "@/assets/project-pace.jpg";
import projectMysportsanalysis from "@/assets/project-mysportsanalysis.jpg";
import projectPoloreport from "@/assets/project-poloreport.jpg";
import projectUmpire from "@/assets/project-umpire.jpg";
import projectLamiya from "@/assets/project-lamiya.jpg";
import projectCrm from "@/assets/project-crm.jpg";

export interface Project {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  features: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  filterTag: string;
  problem: string;
  role: string;
  architecture: string;
  challenges: string[];
  deployment: string;
  results: string[];
}

export const projectsContent: Project[] = [
  {
    title: "PACE Sports Analytics",
    slug: "pace-sports-analytics",
    description:
      "Analytics dashboards and reporting modules for racing data applications, processing large datasets with optimized backend performance.",
    techStack: ["Vue.js", "Node.js", "PostgreSQL", "Python"],
    features: [
      "Analytics dashboards for racing data visualization",
      "Reporting modules with export capabilities",
      "API integrations for sports data ingestion",
      "Optimized queries for data-intensive workflows",
    ],
    image: projectPace,
    liveUrl: "https://pace.mysportsanalysis.com",
    category: "Sports Analytics",
    filterTag: "Vue.js",
    problem:
      "Racing organizations needed real-time analytics and reporting over large, complex datasets — existing tools were slow and couldn't scale with growing data volumes.",
    role: "Full Stack Developer — built analytics dashboards, integrated APIs, processed large datasets, and optimized backend query performance.",
    architecture:
      "Vue.js frontend with modular dashboard components. Node.js REST APIs handle data processing and business logic. PostgreSQL stores structured racing data. Python scripts automate data ingestion and transformation pipelines.",
    challenges: [
      "Processing and visualizing large racing datasets without degrading dashboard performance",
      "Designing efficient PostgreSQL queries for complex reporting modules",
      "Integrating multiple external data sources into a unified analytics pipeline",
    ],
    deployment:
      "Production deployment with optimized database indexing, API caching, and server-side performance tuning for data-heavy workloads.",
    results: [
      "Delivered scalable analytics dashboards for racing data applications",
      "Improved query efficiency for data-intensive reporting workflows",
      "Enabled faster data-driven decision making for sports analysts",
    ],
  },
  {
    title: "MySportsAnalysis",
    slug: "mysportsanalysis",
    description:
      "Sports analytics platform with reporting systems handling high-volume datasets, built with scalable APIs and optimized database operations.",
    techStack: ["Vue.js", "Node.js", "PostgreSQL"],
    features: [
      "Sports analytics applications and reporting systems",
      "High-volume dataset processing and visualization",
      "RESTful APIs for data access and integrations",
      "Performance-optimized database operations",
    ],
    image: projectMysportsanalysis,
    liveUrl: "https://mysportsanalysis.com",
    category: "Sports Analytics",
    filterTag: "Vue.js",
    problem:
      "Sports teams and analysts needed a centralized platform to process, analyze, and report on high-volume match and performance data across multiple sports.",
    role: "Full Stack Developer — developed analytics applications, built APIs, and optimized database operations for scalability and performance.",
    architecture:
      "Vue.js SPA consuming Node.js REST APIs. PostgreSQL with optimized schemas for sports data storage. Modular reporting engine supporting multiple sport types and data formats.",
    challenges: [
      "Handling high-volume sports datasets with consistent query performance",
      "Building flexible reporting modules that adapt to different sport data structures",
      "Scaling API throughput during peak usage periods",
    ],
    deployment:
      "Deployed on production infrastructure with database optimization, API performance tuning, and reliable uptime for analytics users.",
    results: [
      "Built production sports analytics platform serving multiple sports disciplines",
      "Improved database scalability for high-volume data operations",
      "Delivered reporting systems used by sports analysts daily",
    ],
  },
  {
    title: "PoloReport",
    slug: "poloreport",
    description:
      "Polo sports reporting platform with administrative features, backend APIs, and responsive interfaces for improved usability and performance.",
    techStack: ["React.js", "Next.js", "Node.js", "PostgreSQL"],
    features: [
      "Reporting modules for polo match data",
      "Administrative features and user management",
      "Responsive interfaces with improved usability",
      "Backend APIs for data access and reporting",
    ],
    image: projectPoloreport,
    liveUrl: "https://poloreport.com",
    category: "Sports Reporting",
    filterTag: "React",
    problem:
      "Polo organizations lacked a dedicated reporting platform to track match data, generate reports, and manage administrative workflows efficiently.",
    role: "Full Stack Developer — developed reporting modules, administrative features, backend APIs, and responsive frontend interfaces.",
    architecture:
      "Next.js with React for server-rendered pages and interactive dashboards. Node.js backend APIs with PostgreSQL for match data, reports, and user management.",
    challenges: [
      "Building intuitive reporting interfaces for complex polo match statistics",
      "Implementing admin features with proper access controls",
      "Optimizing application performance for responsive data-heavy pages",
    ],
    deployment:
      "Production deployment on Vercel for the frontend with a Node.js API backend and managed PostgreSQL database.",
    results: [
      "Launched dedicated polo reporting platform at poloreport.com",
      "Improved usability and performance of reporting workflows",
      "Delivered admin tools for efficient match data management",
    ],
  },
  {
    title: "Umpire Platform",
    slug: "umpire-platform",
    description:
      "Role-based access control platform with user management, dashboards, reporting systems, and administrative tools for sports officiating.",
    techStack: ["React.js", "Node.js", "PostgreSQL"],
    features: [
      "Role-based access control and user management",
      "Dashboards for officiating workflows",
      "Reporting systems and administrative tools",
      "Secure authentication and authorization",
    ],
    image: projectUmpire,
    liveUrl: "https://umpire.mysportsanalysis.com",
    category: "Sports Platform",
    filterTag: "React",
    problem:
      "Sports officiating teams needed a centralized platform to manage umpires, control access by role, and generate reports across multiple competitions.",
    role: "Full Stack Developer — built RBAC features, user management modules, dashboards, and reporting systems.",
    architecture:
      "React frontend with role-aware routing and component-level access control. Node.js APIs with JWT authentication. PostgreSQL stores users, roles, permissions, and reporting data.",
    challenges: [
      "Implementing granular role-based access control across multiple user types",
      "Building dashboards that adapt content based on user permissions",
      "Designing a scalable user management system for growing officiating teams",
    ],
    deployment:
      "Production deployment with secure authentication, role-based API middleware, and optimized database queries for reporting modules.",
    results: [
      "Delivered complete umpire management platform with RBAC",
      "Enabled efficient officiating workflows through role-specific dashboards",
      "Built reporting and admin tools used in production sports operations",
    ],
  },
  {
    title: "Lamiya.pk",
    slug: "lamiya-pk",
    description:
      "Complete e-commerce platform for skincare products in Pakistan — built from scratch with authentication, Redis caching, and production-grade performance.",
    techStack: ["Next.js", "Fastify", "MongoDB", "Redis"],
    features: [
      "Full e-commerce platform with product catalog and checkout",
      "Authentication and user account management",
      "Redis-based caching for performance optimization",
      "SEO optimization and Cloudinary image delivery",
    ],
    image: projectLamiya,
    liveUrl: "https://lamiya.pk",
    category: "E-Commerce",
    filterTag: "E-Commerce",
    problem:
      "A skincare brand needed a fast, SEO-optimized e-commerce platform tailored for the Pakistani market — with reliable checkout, product management, and performance at scale.",
    role: "Full Stack Developer — built and deployed the complete platform from scratch, including APIs, authentication, caching, and production optimization.",
    architecture:
      "Next.js storefront with server-side rendering for SEO. Fastify backend APIs with MongoDB for product and order data. Redis for session management and caching hot data. Cloudinary for optimized image delivery.",
    challenges: [
      "Building a complete e-commerce flow from product catalog to order fulfillment",
      "Implementing Redis caching to keep page loads fast under traffic",
      "Optimizing SEO, image delivery, and Core Web Vitals for the Pakistani market",
    ],
    deployment:
      "Deployed on Vercel with Fastify API on Railway. MongoDB Atlas for data, Redis for caching, and Cloudflare for CDN and security.",
    results: [
      "Launched live e-commerce platform at lamiya.pk",
      "Achieved fast page loads with Redis caching and optimized image delivery",
      "Delivered SEO-optimized storefront driving organic product discovery",
    ],
  },
  {
    title: "CRM Systems",
    slug: "crm-systems",
    description:
      "Custom CRM and administration platforms with role-based access control, APIs, reporting features, and database modules tailored to client requirements.",
    techStack: ["React.js", "Node.js", "PostgreSQL"],
    features: [
      "Custom CRM platforms with role-based access control",
      "Administration dashboards and user management",
      "REST APIs and reporting features",
      "Database modules built to client specifications",
    ],
    image: projectCrm,
    category: "Enterprise / CRM",
    filterTag: "React",
    problem:
      "Clients needed tailored CRM solutions that off-the-shelf products couldn't provide — with custom workflows, role-based access, and reporting aligned to their business processes.",
    role: "Full Stack Developer — developed CRM platforms end to end, including APIs, admin panels, RBAC, and reporting modules based on client requirements.",
    architecture:
      "React admin dashboards with modular feature sets per client. Node.js REST APIs with PostgreSQL. Role-based middleware controlling access to CRM modules, reports, and data operations.",
    challenges: [
      "Designing flexible CRM schemas that adapt to diverse client business models",
      "Implementing secure RBAC across admin, manager, and staff user roles",
      "Building reporting modules that surface actionable business insights",
    ],
    deployment:
      "Client-specific production deployments with secure authentication, database backups, and performance monitoring.",
    results: [
      "Delivered multiple custom CRM platforms for client operations",
      "Built scalable RBAC and reporting systems tailored to business needs",
      "Enabled clients to manage workflows through dedicated admin tools",
    ],
  },
];

export const filterTags = ["All", "Vue.js", "React", "E-Commerce"];
