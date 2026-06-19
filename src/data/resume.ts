export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  tech: string[];
}

export const summary = [
  "I build full-stack web, mobile, and AI applications — from React Native banking platforms with atomic Firestore transactions to local-first systems with multi-provider LLM routing and RAG pipelines over Unreal Engine project graphs.",
  "My work sits at the intersection of product engineering and intelligent systems: shipping real software with measurable outcomes. I contribute upstream to open-source projects in observability, MCP tooling, and infrastructure.",
];

export const experience: Experience[] = [
  {
    company: "AppYard",
    role: "Full Stack Developer Intern",
    location: "Bengaluru, Karnataka",
    period: "Mar 2026 – May 2026",
    bullets: [
      "Mobile Banking Platform: Developed a full-stack mobile banking application using React Native, Expo, and Firebase Firestore supporting account management, fund transfers, transaction history, and real-time balance tracking.",
      "Engineered a serverless backend using Firebase Firestore with atomic transactions, ensuring secure debit/credit operations and real-time synchronization across the platform.",
      "Built a secure account statement generation pipeline using HTML/CSS templates, Expo Print, and PDF encryption libraries to generate password-protected statements from live transaction data.",
      "Dawki Mobility ERP & AppYard CRM: Developed a full-stack business operations platform using React, Vite, Firebase, and Node.js to manage leads, projects, deliverables, timesheets, tasks, financial transactions, and team collaboration.",
      "Designed a hybrid architecture combining Firebase Firestore with Node.js REST APIs on Google Cloud Run for authentication, authorization, and operational workflows.",
      "Implemented multi-tenant SaaS capabilities, role-based access control, project tracking, and real-time notifications supporting multiple organizational workflows.",
    ],
    tech: [
      "React Native",
      "Expo",
      "React",
      "Vite",
      "Firebase",
      "Firestore",
      "Google Cloud Run",
      "Node.js",
      "RBAC",
      "Expo Print",
    ],
  },
];
