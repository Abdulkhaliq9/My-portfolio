export interface Project {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
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
    title: "AI Data Analytics Dashboard",
    slug: "ai-analytics-dashboard",
    description: "A comprehensive analytics platform powered by AI that transforms raw data into actionable insights with real-time visualization and predictive modeling.",
    techStack: ["React.js", "Next.js", "Python", "PostgreSQL", "AWS Athena", "Tailwind CSS"],
    features: [
      "Real-time data visualization with dynamic charts",
      "AI-powered predictive analytics engine",
      "Custom report generation and export",
      "Role-based access control and team collaboration",
    ],
    githubUrl: "#",
    liveUrl: "#",
    category: "AI / Analytics",
    filterTag: "MERN",
    problem: "Enterprises needed a way to analyze massive datasets in real-time without relying on expensive third-party BI tools. Existing solutions were slow, rigid, and lacked AI-powered insights.",
    role: "Full Stack Developer & Project Lead — responsible for frontend architecture, backend API design, database optimization, and deployment pipeline.",
    architecture: "Built on a microservices architecture with a React frontend consuming RESTful APIs. Python handles AI/ML pipelines, PostgreSQL stores structured data, and AWS Athena enables serverless querying of massive datasets stored in S3.",
    challenges: [
      "Optimizing real-time chart rendering with 100K+ data points without UI lag",
      "Building a predictive analytics engine that delivers results under 2 seconds",
      "Implementing granular role-based access control across multiple tenant organizations",
    ],
    deployment: "Deployed on AWS with CI/CD via GitHub Actions. Frontend hosted on Vercel for edge performance. Database on AWS RDS with read replicas for analytics queries.",
    results: [
      "Reduced data analysis time by 60% compared to previous manual workflows",
      "Serves 500+ daily active users across 12 organizations",
      "Achieved sub-second dashboard load times with advanced caching strategies",
    ],
  },
  {
    title: "E-Commerce Scalable Backend",
    slug: "ecommerce-scalable-backend",
    description: "A high-performance e-commerce backend architecture featuring 90+ RESTful APIs with advanced caching, payment integration, and inventory management.",
    techStack: ["Node.js", "NestJS", "MongoDB", "AWS S3", "Redis", "Docker"],
    features: [
      "90+ production-grade RESTful APIs",
      "Multi-vendor marketplace architecture",
      "Advanced caching and performance optimization",
      "Integrated payment gateway and order management",
    ],
    githubUrl: "#",
    liveUrl: "#",
    category: "Backend / E-Commerce",
    filterTag: "Backend",
    problem: "The client needed a multi-vendor e-commerce platform that could handle thousands of concurrent users, complex inventory management, and real-time order tracking — all with minimal latency.",
    role: "Backend Lead & System Architect — designed the entire API layer, database schema, caching strategy, and deployment infrastructure.",
    architecture: "NestJS modular architecture with MongoDB for flexible product schemas. Redis for session management and caching hot data. AWS S3 for product media storage. Docker containers orchestrated for consistent environments.",
    challenges: [
      "Designing a schema that supports multi-vendor product catalogs with dynamic attributes",
      "Implementing a caching layer that reduces database load by 70% on high-traffic endpoints",
      "Building a payment reconciliation system that handles multiple gateways and currencies",
    ],
    deployment: "Containerized with Docker, deployed on Railway with auto-scaling. MongoDB Atlas for managed database. Redis Cloud for distributed caching. CI/CD with GitHub Actions.",
    results: [
      "90+ APIs delivered in 8 weeks with full documentation",
      "Handles 3000+ concurrent users with 99.9% uptime",
      "Average API response time under 120ms with Redis caching",
    ],
  },
  {
    title: "Real-Time Automation Builder",
    slug: "realtime-automation-builder",
    description: "A visual workflow automation platform with drag-and-drop canvas for building complex automation pipelines with real-time execution monitoring.",
    techStack: ["Vue.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "Railway"],
    features: [
      "Drag-and-drop visual workflow builder",
      "Real-time execution monitoring and logs",
      "Pre-built integrations and custom triggers",
      "Collaborative editing with version control",
    ],
    githubUrl: "#",
    liveUrl: "#",
    category: "Automation / SaaS",
    filterTag: "MEVN",
    problem: "Small and mid-size teams were spending hours on repetitive tasks that could be automated. Existing tools like Zapier were either too expensive or too limited for custom workflows.",
    role: "Team Lead & Full Stack Developer — led a 3-person team, designed the workflow engine, built the real-time collaboration system, and managed the deployment pipeline.",
    architecture: "Vue.js frontend with a custom canvas engine for drag-and-drop workflows. Node.js/Express backend with a workflow execution engine. WebSockets for real-time sync and monitoring. MongoDB for workflow persistence.",
    challenges: [
      "Building a performant drag-and-drop canvas that handles 50+ connected nodes without lag",
      "Implementing real-time collaborative editing with conflict resolution",
      "Designing a workflow execution engine that handles parallel and conditional branches",
    ],
    deployment: "Deployed on Railway with automatic scaling. MongoDB Atlas for data persistence. WebSocket connections managed with sticky sessions. GitHub Actions for CI/CD.",
    results: [
      "Reduced manual workflow execution time by 80% for early adopters",
      "Supports workflows with 100+ nodes and real-time collaborative editing",
      "Zero-downtime deployments with blue-green deployment strategy",
    ],
  },
];

export const filterTags = ["All", "MERN", "MEVN", "Backend", "DevOps"];
