import type { Project, Skill } from "@/types/portfolio";

export const profile = {
  name: "Akhdan",
  role: "Software Engineer",
  headline: "Membangun produk web yang rapi, scalable, dan mudah dirawat.",
  location: "Indonesia",
};

export const skills: Skill[] = [
  {
    name: "TypeScript",
    category: "Language",
    level: "advanced",
  },
  {
    name: "JavaScript (ESNext)",
    category: "Language",
    level: "advanced",
  },
  {
    name: "React",
    category: "Frontend",
    level: "advanced",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "advanced",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "intermediate",
  },
  {
    name: "Tailwind CSS",
    category: "UI",
    level: "advanced",
  },
];

export const projects: Project[] = [
  {
    title: "Portfolio Akhdan",
    description:
      "Website portfolio modern untuk menampilkan pengalaman, skill, dan proyek yang pernah dikerjakan.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    role: "Fullstack Developer",
    period: "2026",
    highlight: true,
  },
];

