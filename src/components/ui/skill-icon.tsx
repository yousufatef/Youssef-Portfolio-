import {
  Blocks,
  Cable,
  Gauge,
  Languages,
  Layers,
  ShieldCheck,
} from "lucide-react";
import {
  siTypescript,
  siJavascript,
  siReact,
  siNextdotjs,
  siRedux,
  siReactquery,
  siTailwindcss,
  siNodedotjs,
  siNestjs,
  siExpress,
  siPostgresql,
  siMongodb,
  siGit,
  siGithub,
} from "simple-icons";

const brandIcons = {
  TypeScript: siTypescript,
  "JavaScript (ES6+)": siJavascript,
  "React.js": siReact,
  "Next.js": siNextdotjs,
  "Redux Toolkit": siRedux,
  "TanStack Query": siReactquery,
  "Tailwind CSS": siTailwindcss,
  "Node.js": siNodedotjs,
  NestJS: siNestjs,
  "Express.js": siExpress,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Git: siGit,
  GitHub: siGithub,
};

const practiceIcons = {
  "RESTful API Design": Cable,
  RBAC: ShieldCheck,
  "Multi-Tenant SaaS Architecture": Layers,
  "Reusable Component Architecture": Blocks,
  "Performance Optimization": Gauge,
  "Internationalization (i18n)": Languages,
};

export function SkillIcon({ name }: { name: string }) {
  if (name === "Azure DevOps") {
    return <span className="skill-icon azure-devops-icon" aria-hidden="true" />;
  }
  if (name in brandIcons) {
    const icon = brandIcons[name as keyof typeof brandIcons];
    return (
      <svg
        className="skill-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d={icon.path} />
      </svg>
    );
  }
  if (name in practiceIcons) {
    const Icon = practiceIcons[name as keyof typeof practiceIcons];
    return <Icon className="skill-icon" strokeWidth={1.6} aria-hidden="true" />;
  }
  throw new Error(`Missing skill icon: ${name}`);
}
