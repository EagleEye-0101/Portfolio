export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
}

/** Owned originals and substantive local builds — no forks, no internship duplicates. */
export const projects: Project[] = [
  {
    id: "exresu-me",
    title: "ExResu_Me — ATS Resume Builder",
    problem:
      "Job seekers need resume generation, ATS scoring against job descriptions, and interview prep — without locking into a single AI vendor or cloud-only workflow.",
    solution:
      "Built a local-first AI career platform with Next.js, FastAPI, SQLite, and Tauri. Multi-provider LLM routing (Ollama, OpenAI, Anthropic, Gemini), weighted ATS scoring, LaTeX studio, keyword optimization, and export pipelines for PDF, DOCX, and LaTeX.",
    stack: [
      "Next.js",
      "FastAPI",
      "Tauri",
      "SQLite",
      "Rust",
      "Ollama",
      "Gemini",
    ],
    liveUrl: "https://ex-resu-me.vercel.app",
    githubUrl: "https://github.com/EagleEye-0101/ExResu_Me",
    year: "2026",
  },
  {
    id: "blueprint-memory",
    title: "AI Blueprint Memory OS",
    problem:
      "Unreal Engine 5 teams need local-first architecture intelligence to scan blueprint-heavy projects, map dependencies, and retain persistent project memory.",
    solution:
      "Developed an Electron desktop tool with project scanning, relationship mapping, SQLite storage, vector embeddings, and RAG chat grounded in indexed UE5 assets. Shipped interactive dependency graphs, architecture health analysis, and a UE5 editor plugin.",
    stack: [
      "Electron",
      "Next.js",
      "TypeScript",
      "SQLite",
      "Ollama",
      "React Flow",
      "Unreal Engine 5",
    ],
    liveUrl: "https://ai-blueprint-memory-os.vercel.app",
    githubUrl: "https://github.com/EagleEye-0101/AI_Blueprint_Memory_OS",
    year: "2026",
  },
  {
    id: "realtime-chat",
    title: "Realtime Chat Platform",
    problem:
      "Team chat needs persistent servers, channels, DMs, presence, and file sharing — not just a toy websocket demo with messages lost on refresh.",
    solution:
      "Built a Discord-style full-stack chat app: Express + Socket.io backend with JWT auth, PostgreSQL persistence, Redis presence, server/channel/DM models, file uploads, and a React + TypeScript frontend with Zustand state management.",
    stack: [
      "Node.js",
      "Express",
      "Socket.io",
      "PostgreSQL",
      "Redis",
      "React",
      "TypeScript",
      "JWT",
    ],
    year: "2026",
  },
  {
    id: "see-it-like-me",
    title: "SeeItLikeMe",
    problem:
      "Designers and developers struggle to empathize with accessibility barriers — reading strain, focus tunneling, color perception gaps, and motor precision limits are hard to internalize from documentation alone.",
    solution:
      "Built a SwiftUI iOS empathy lab with six interactive experiences (visual strain, reading stability, focus/distraction, interaction precision, focus tunnel, color perception), each with intro and reflection flows and dedicated accessibility helpers.",
    stack: ["Swift", "SwiftUI", "iOS 17+", "Accessibility APIs"],
    githubUrl: "https://github.com/EagleEye-0101/SeeItLikeMe",
    year: "2026",
  },
  {
    id: "project-zero",
    title: "ProjectZero — AI Automation Engine",
    problem:
      "Business workflows need structured multi-step automation with validation and human oversight — not one-shot LLM prompts with no audit trail.",
    solution:
      "Designed a five-agent pipeline (Input → Analysis → Execution → Validator → Memory) with YAML workflow definitions, mandatory validation steps, human approval gates, and dual interfaces: Typer CLI and FastAPI + React web UI. Supports Anthropic, OpenAI, and Ollama.",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "Typer",
      "Pydantic",
      "Ollama",
      "pytest",
    ],
    year: "2026",
  },
  {
    id: "whatsapp-clone",
    title: "Private WhatsApp Clone",
    problem:
      "Two users need a minimal, self-hosted real-time messenger without Meta infrastructure — deployable on a private network with instant delivery and typing indicators.",
    solution:
      "Built a two-person chat MVP: Express + Socket.io backend with in-memory message store and typing events, paired with a React Native mobile client. Designed for ZeroTier VPN deployment with Android APK build workflow.",
    stack: [
      "Node.js",
      "Express",
      "Socket.io",
      "React Native",
      "Real-time Messaging",
    ],
    year: "2025",
  },
];
