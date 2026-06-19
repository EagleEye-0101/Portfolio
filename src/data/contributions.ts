export interface Contribution {
  id: string;
  repo: string;
  repoUrl: string;
  prTitle: string;
  prUrl: string;
  description: string;
  stack: string[];
  status: "merged" | "open";
}

/** Verified merged upstream PRs (gh search prs --author=EagleEye-0101 --merged). */
export const contributions: Contribution[] = [
  {
    id: "nexasphere-obs",
    repo: "Ayushh-Sharmaa/NexaSphere",
    repoUrl: "https://github.com/Ayushh-Sharmaa/NexaSphere",
    prTitle:
      "feat(observability): Monitoring, logging, and distributed tracing stack (#1817)",
    prUrl: "https://github.com/Ayushh-Sharmaa/NexaSphere/pull/1850",
    description:
      "Implemented full observability stack — Prometheus metrics, ELK logging, Jaeger tracing, Grafana dashboards, and Alertmanager rules across Node and Python services.",
    stack: ["Prometheus", "ELK", "Jaeger", "Grafana", "Docker", "Node.js"],
    status: "merged",
  },
  {
    id: "terraform-jenkins",
    repo: "namecheap/terraform-provider-jenkins",
    repoUrl: "https://github.com/namecheap/terraform-provider-jenkins",
    prTitle: "fix: use HasPrefix for 404 detection in AWS credential read",
    prUrl: "https://github.com/namecheap/terraform-provider-jenkins/pull/36",
    description:
      "Fixed AWS credential handling in the Jenkins Terraform provider — proper 404 detection for credential reads during state refresh.",
    stack: ["Go", "Terraform", "HCL", "Docker"],
    status: "merged",
  },
  {
    id: "clinical-email",
    repo: "gopaljilab/Clinical-Insight-Engine",
    repoUrl: "https://github.com/gopaljilab/Clinical-Insight-Engine",
    prTitle:
      "fix(email): fail loud on delivery errors and wire critical alerts (#876)",
    prUrl: "https://github.com/gopaljilab/Clinical-Insight-Engine/pull/897",
    description:
      "Hardened email delivery in a clinical insights platform — surfaced delivery failures instead of silent drops and wired critical alert paths.",
    stack: ["Python", "Email", "Alerting", "Backend"],
    status: "merged",
  },
  {
    id: "peer-learning-cookies",
    repo: "durdana3105/peer-learning",
    repoUrl: "https://github.com/durdana3105/peer-learning",
    prTitle: "Add Cookie Consent Banner and Cookies Policy Page (#842)",
    prUrl: "https://github.com/durdana3105/peer-learning/pull/844",
    description:
      "Shipped GDPR-style cookie consent UI and a dedicated cookies policy page for a peer-learning web platform.",
    stack: ["React", "TypeScript", "Privacy", "Frontend"],
    status: "merged",
  },
  {
    id: "cowork-bridge",
    repo: "abhinaykrupa/cowork-to-code-bridge",
    repoUrl: "https://github.com/abhinaykrupa/cowork-to-code-bridge",
    prTitle: "docs: add PyPI install path, badges, and version floor (#36)",
    prUrl: "https://github.com/abhinaykrupa/cowork-to-code-bridge/pull/63",
    description:
      "Added PyPI install documentation, Homebrew formula for macOS, and Docker starter scripts for Claude-to-code bridging.",
    stack: ["Python", "Homebrew", "Docker", "Shell"],
    status: "merged",
  },
  {
    id: "algo-java",
    repo: "ajay-dhangar/algo",
    repoUrl: "https://github.com/ajay-dhangar/algo",
    prTitle: "docs(java): Add Java Streams API and Lambda Expressions guide (#2064)",
    prUrl: "https://github.com/ajay-dhangar/algo/pull/2591",
    description:
      "Contributed comprehensive Java Streams API and Lambda Expressions documentation to an open-source DSA repository.",
    stack: ["Java", "Documentation"],
    status: "merged",
  },
];
