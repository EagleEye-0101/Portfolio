import { Project } from "@/data/projects";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <article
      className={cn(
        "group grid gap-8 border border-border bg-surface p-6 md:grid-cols-12 md:gap-10 md:p-10",
        "transition-colors duration-300 hover:border-copper/30",
      )}
    >
      <div className={cn("md:col-span-5", !isEven && "md:order-2")}>
        <div className="relative aspect-[4/3] overflow-hidden bg-paper-muted">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
            <span className="font-mono text-[0.6rem] tracking-[0.3em] text-ink-faint uppercase">
              {project.year}
            </span>
            <span className="font-display text-center text-2xl text-ink/80 md:text-3xl">
              {project.title}
            </span>
            <div className="mt-2 h-px w-12 bg-copper" />
          </div>
        </div>
      </div>

      <div className={cn("flex flex-col justify-center md:col-span-7", !isEven && "md:order-1")}>
        <h3 className="font-display text-2xl text-ink md:text-3xl">
          {project.title}
        </h3>

        <div className="mt-6 space-y-4">
          <div>
            <p className="section-label mb-2 text-copper">Problem</p>
            <p className="text-sm leading-relaxed text-ink-muted md:text-base">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="section-label mb-2">Solution</p>
            <p className="text-sm leading-relaxed text-ink-muted md:text-base">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-xs tracking-widest uppercase"
            >
              Live Demo →
            </a>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-mono text-xs tracking-widest text-ink-faint uppercase"
            >
              Source Code →
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
