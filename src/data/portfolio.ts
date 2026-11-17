import type { Capability, Experience, StackGroup } from "@/types/portfolio";

export const profile = {
  name: "Youssef Atef",
  title: "Software Engineer",
  location: "Giza, Egypt",
  email: "youssef.atef.business@gmail.com",
  phone: "+201115737646",
  linkedin: "https://linkedin.com/in/youssef-atef-elagamy",
  github: "https://github.com/yousufatef",
  cv: "/Youssef_Atef_CV.pdf" as string | null,
  introduction:
    "I’m a Software Engineer with 2+ years of experience building SaaS and ERP platforms, data-intensive applications, and secure RESTful APIs.",
  philosophy:
    "I turn complex requirements into reliable systems and straightforward experiences. Built to work today. Structured to grow tomorrow.",
  education: {
    degree: "Bachelor of Computer Science",
    school: "Akhbar El Yom Academy",
    country: "Egypt",
  },
};

export const capabilities = [
  {
    number: "01",
    title: "Business Systems",
    description:
      "Turning complex business workflows into organized digital systems that make everyday work simpler.",
  },
  {
    number: "02",
    title: "Scalable Platforms",
    description:
      "Building maintainable applications that grow with multiple users, roles, and organizations.",
  },
  {
    number: "03",
    title: "Data-Driven Applications",
    description:
      "Creating efficient dashboards and applications that make complex data easier to manage and understand.",
  },
  {
    number: "04",
    title: "Performance & Reliability",
    description:
      "Making software faster, more accessible, and more reliable so people can use it with confidence.",
  },
] as const satisfies readonly Capability[];

export const experiences = [
  {
    company: "SB Technology",
    brandColor: "#EF3F3B",
    role: "Software Engineer",
    period: "Apr 2025 — Present",
    location: "Cairo, Egypt",
    description: "Enterprise SaaS & data-heavy ERP platforms.",
    responsibilities: [
      "Architected multi-tenant SaaS and ERP modules supporting multiple user roles.",
      "Built a reusable component library that accelerated feature delivery across the team.",
      "Engineered real-time dashboards over large datasets with granular role-based access control.",
      "Reduced redundant API calls through TanStack Query caching.",
      "Improved initial load performance in React.js and Next.js applications through route-based code splitting, lazy loading, and Core Web Vitals tuning.",
      "Integrated RESTful APIs with automated JWT refresh interceptors and centralized error handling.",
    ],
  },
  {
    company: "Efficient Vision",
    brandColor: "#0036CC",
    role: "Frontend Engineer",
    period: "Sep 2024 — Feb 2025",
    location: "Cairo, Egypt",
    description: "Healthcare platforms for patients & clinicians.",
    responsibilities: [
      "Led end-to-end frontend delivery of four live healthcare platforms from zero to production release.",
      "Worked on Wyost Patient/HCP and Jubbontie Patient/HCP platforms.",
      "Achieved ADA compliance through semantic HTML5, ARIA landmarks, and accessibility audits.",
      "Improved Lighthouse SEO and performance through structured metadata (JSON-LD), semantic markup, and SSR/SSG optimization.",
    ],
  },
] as const satisfies readonly Experience[];

export const stack = [
  { category: "Languages", skills: ["TypeScript", "JavaScript (ES6+)"] },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "NestJS", "Express.js", "RESTful API Design", "RBAC"],
  },
  { category: "Databases", skills: ["PostgreSQL", "MongoDB"] },
  {
    category: "Architecture & practices",
    skills: [
      "Multi-Tenant SaaS Architecture",
      "Reusable Component Architecture",
      "Performance Optimization",
      "Internationalization (i18n)",
    ],
  },
  { category: "Tools", skills: ["Git", "GitHub", "Azure DevOps"] },
] as const satisfies readonly StackGroup[];
