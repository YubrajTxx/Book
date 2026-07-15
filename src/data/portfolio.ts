export interface Experience {
  company: string;
  role: string;
  date: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export interface Education {
  university: string;
  degree: string;
  cgpa?: string;
  years: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    company: "Tech Innovations Pvt. Ltd.",
    role: "Data Analyst",
    date: "Jan 2024 — Present",
    description: [
      "Built interactive dashboards and KPI reports to help teams monitor business performance and trends.",
      "Analyzed operational and customer data to uncover actionable insights and support decision-making.",
      "Partnered with cross-functional teams to translate business questions into data-driven reporting solutions.",
    ],
  },
  {
    company: "DataFlow Solutions",
    role: "Business Intelligence Intern",
    date: "Jun 2023 — Dec 2023",
    description: [
      "Created SQL-based reports and visualizations for data quality, revenue, and usage monitoring.",
      "Improved dashboard performance and simplified reporting workflows for stakeholders.",
      "Supported ETL validation and data cleaning processes for more reliable analytics outputs.",
    ],
  },
  {
    company: "Freelance",
    role: "Data Analyst Consultant",
    date: "2022 — 2023",
    description: [
      "Delivered analytics support for clients across marketing, sales, and operations use cases.",
      "Built dashboards and summary reports using Excel, Power BI, and SQL to track performance.",
      "Translated raw business data into clear insights for non-technical decision-makers.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Agricultural Insights Dashboard",
    description:
      "A data-driven analytics dashboard that helps farmers and stakeholders monitor crop conditions, yield trends, and seasonal patterns using predictive insights.",
    technologies: ["Python", "Pandas", "Power BI", "SQL", "Machine Learning"],
    github: "https://github.com/yubrajtamang",
    live: "#",
    featured: true,
  },
  {
    title: "Sales & Performance Analytics",
    description:
      "A business intelligence dashboard that visualizes key performance metrics, trend analysis, and performance anomalies for faster decision-making.",
    technologies: ["SQL", "Power BI", "Excel", "Python", "DAX"],
    github: "https://github.com/yubrajtamang",
    featured: true,
  },
  {
    title: "E-Commerce Sales Analytics",
    description:
      "A reporting solution for product performance, customer behavior, and revenue tracking with actionable business insights.",
    technologies: ["SQL", "Python", "Excel", "Dashboarding", "ETL"],
    github: "https://github.com/yubrajtamang",
    live: "#",
  },
  {
    title: "Portfolio Book Website",
    description:
      "This interactive hardcover portfolio presents my analytics journey, business storytelling, and data-driven problem-solving work.",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/yubrajtamang",
    live: "#",
  },
];

export const education: Education[] = [
  {
    university: "Tribhuvan University",
    degree: "Bachelor of Science in Computer Science & Information Technology (BSc. CSIT)",
    cgpa: "3.6 / 4.0",
    years: "2020 — 2024",
  },
];

export const certificates: Certificate[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "#",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2024",
    link: "#",
  },
  {
    title: "Data Engineering with Google Cloud",
    issuer: "Coursera — Google",
    date: "2023",
    link: "#",
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta — Coursera",
    date: "2023",
    link: "#",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Analytics",
    skills: ["SQL", "Python", "Excel", "Power BI", "Tableau", "Data Cleaning"],
  },
  {
    category: "Visualization",
    skills: ["Dashboards", "KPI Reporting", "Data Storytelling", "Trend Analysis", "Forecasting"],
  },
  {
    category: "Data Tools",
    skills: ["Pandas", "NumPy", "Matplotlib", "Power Query", "DAX", "Google Sheets"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Snowflake", "BigQuery"],
  },
  {
    category: "Business Skills",
    skills: ["Stakeholder Communication", "Requirements Gathering", "Process Analysis", "Problem Solving"],
  },
  {
    category: "Workflow",
    skills: ["Git", "VS Code", "Jira", "PowerPoint", "Presentation", "Documentation"],
  },
];

export const aboutText = `I'm a passionate Data Analyst based in Nepal, with a strong interest in turning raw data into clear, useful insights that support better business decisions. My journey in analytics began with a curiosity about how patterns, trends, and numbers can reveal the story behind a problem.

Over time, I've developed skills in SQL, Excel, Python, dashboarding, and data storytelling. I enjoy working with structured data to uncover opportunities, improve reporting, and help stakeholders understand what the numbers actually mean.

When I'm not analyzing data, you'll find me exploring new tools, learning about business intelligence, or keeping up with trends in data-driven decision-making. I'm motivated by the idea that good analysis can make complex problems easier to understand and easier to act on.

My goal is to create meaningful insights — reports that are accurate, visual, and practical enough to drive confident action.`;
