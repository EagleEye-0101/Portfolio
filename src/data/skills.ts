export interface SkillCategory {
  title: string;
  items: string[];
}

/** Merged from Kali_Resume.pdf and Jake_s_Resume (5).pdf — deduplicated. */
export const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Swift", "C", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Expo",
      "TailwindCSS",
      "SwiftUI",
    ],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    items: ["Firebase", "PostgreSQL", "SQLite", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Google Cloud Run",
      "Vercel",
      "Docker",
      "Git",
      "GitHub Actions",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "Ollama",
      "OpenAI API",
      "Anthropic API",
      "Gemini API",
      "RAG",
      "Prompt Engineering",
      "Multi-Agent Systems",
    ],
  },
  {
    title: "Developer Tools",
    items: [
      "Cursor",
      "VS Code",
      "Postman",
      "Linux/Bash",
      "Android Studio",
      "Xcode",
    ],
  },
  {
    title: "Technologies",
    items: [
      "Electron",
      "Tauri",
      "Unreal Engine 5",
      "JWT Authentication",
      "RBAC",
      "Socket.IO",
    ],
  },
];
