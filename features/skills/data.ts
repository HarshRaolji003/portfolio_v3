export interface SkillGroup {
  label: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "React Query",
      "Redux",
      "Styled Components",
    ],
  },
  {
    label: "Backend & DB",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "PostgreSQL",
      "Supabase",
      "TypeORM",
      "Prisma",
      "Edge Functions",
    ],
  },
  {
    label: "AI / LLM",
    items: ["GPT", "Claude", "Gemini", "Tool calling", "RAG", "pgvector"],
  },
  {
    label: "Tools & DevOps",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "AWS",
      "Docker",
      "Postman",
      "GitHub Actions",
    ],
  },
];
