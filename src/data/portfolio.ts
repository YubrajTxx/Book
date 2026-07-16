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
    company: "Bhojdeals Food Delivery Company",
    role: "Network Handler & IT Support",
    date: "April 2025 — April 2026",
    description: [
      "Provided technical support for hardware, software, and network infrastructure, ensuring high system availability and minimizing operational downtime.",
      "Monitored, diagnosed, and resolved network connectivity issues while maintaining reliable performance across office systems and services.",
      "Collaborated with cross functional teams to troubleshoot IT related challenges, improve operational efficiency, and deliver timely technical solutions.",
    ],
  },
  // {
  //   company: "Data Analytics Nepal",
  //   role: "Business Intelligence Intern",
  //   date: "Jun 2023 — Dec 2023",
  //   description: [
  //     "Created SQL-based reports and visualizations for data quality, revenue, and usage monitoring.",
  //     "Improved dashboard performance and simplified reporting workflows for stakeholders.",
  //     "Supported ETL validation and data cleaning processes for more reliable analytics outputs.",
  //   ],
  // },
  {
    company: "Freelance",
    role: "Graphic Designer",
    date: "2022 — 2023",
    description: [
      "Provided creative graphic design services for businesses and individuals, focusing on digital marketing and brand promotion.",
      "Designed social media posts, business cards, flyers, banners, and promotional materials.",
      "Worked closely with clients to create engaging, brand focused designs and deliver projects on time.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Car Dataset: Exploratory Data Analysis (EDA)",
    description:
      "This project performs exploratory data analysis (EDA) on a car dataset. The goal is to understand the features, clean the data, identify patterns and insights, and prepare it for future machine learning or business intelligence tasks.",
    technologies: ["Python", "Pandas", "Matplotlib", "Data Cleaning", "Exploratory Data Analysis"],
    github: "https://github.com/YubrajTxx/car_dataset_exploratory_data_analysis.git",
    live: "#",
    featured: true,
  },
  {
    title: "Economic Dataset: EDA & Cleaning",
    description:
      "This project involves exploratory data analysis (EDA) and data cleaning on an economic dataset. The aim is to prepare the data for further analysis or machine learning modeling by handling missing values, removing inconsistencies, and uncovering insights through statistical summaries and visualizations.",
    technologies: ["Excel", "Python", "Data Cleaning", "Exploratory Data Analysis","Pandas", "Matplotlib"],
    github: "https://github.com/YubrajTxx/economic_Dataset_EDA-_Cleaning.git",
    featured: true,
  },
  {
    title: "Learning Python With Projects",
    description:
      "This project contain basic python and intermediate python with mini projects. It is designed to help beginners learn Python programming through hands on projects, covering fundamental concepts and practical applications.",
    technologies: ["Python", "Mini Projects", "Intermediate Python"],
    github: "https://github.com/YubrajTxx/python_learn.git",
    live: "#",
  },
  {
    title: "Portfolio Book Website",
    description:
      "This interactive hardcover portfolio presents my analytics journey, business storytelling, and data-driven problem-solving work.",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/YubrajTxx/Book.git",
    live: "#",
  },
];

export const education: Education[] = [
  {
    university: "Affiliated With Lincoln University College, Malaysia",
    degree: "Bachelor of Information Technology (BIT)",
    // cgpa: "3.6 / 4.0",
    years: "2022 — 2027",
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
    skills: ["SQL", "Python", "Excel", "Power BI", "Data Cleaning"],
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

When I'm not analyzing data, you'll find me exploring new tools, learning about business intelligence, or keeping up with trends in data driven decision making. I'm motivated by the idea that good analysis can make complex problems easier to understand and easier to act on.

My goal is to create meaningful insights reports that are accurate, visual, and practical enough to drive confident action.`;
