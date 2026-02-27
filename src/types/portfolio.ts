export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export type Skill = {
  name: string;
  category: string;
  level: SkillLevel;
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  role: string;
  period?: string;
  link?: string;
  repository?: string;
  highlight?: boolean;
};

