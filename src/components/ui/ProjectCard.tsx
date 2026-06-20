"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Project } from "@/data/projects";
import { Tag } from "@/components/ui/Tag";
import { TerminalPreview } from "@/components/ui/TerminalPreview";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function BentoPanel({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 200,
    damping: 25,
  });
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 200,
    damping: 25,
  });

  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const [bgStyle, setBgStyle] = useState("");

  useEffect(() => {
    const unsubscribeX = spotlightX.on("change", (val) => {
      const yVal = spotlightY.get();
      setBgStyle(
        `radial-gradient(280px circle at ${val}px ${yVal}px, rgba(196, 92, 38, 0.06), transparent 80%)`
      );
    });
    const unsubscribeY = spotlightY.on("change", (val) => {
      const xVal = spotlightX.get();
      setBgStyle(
        `radial-gradient(280px circle at ${xVal}px ${val}px, rgba(196, 92, 38, 0.06), transparent 80%)`
      );
    });
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [spotlightX, spotlightY]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tiltX,
        rotateY: tiltY,
        transformStyle: "preserve-3d",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={cn(
        "relative overflow-hidden border border-border bg-surface transition-all duration-300 ease-out",
        "hover:border-copper/25 hover:shadow-[0_15px_35px_-15px_rgba(196,92,38,0.12)]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: isHovered ? bgStyle : "transparent",
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div style={{ transform: "translateZ(15px)" }} className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const projectNum = String(index + 1).padStart(2, "0");
  const hasLinks = project.liveUrl || project.githubUrl;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-16 md:mb-24">
      <BentoPanel className="md:col-span-7 min-h-[300px] flex flex-col" delay={0.05}>
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5 bg-paper/30">
          <div className="flex items-center gap-3">
            <span className="font-mono text-lg text-copper/40 font-bold">
              {projectNum}
            </span>
            <span className="font-mono text-xs tracking-wider text-ink-faint uppercase">
              System Source
            </span>
          </div>
          <span className="font-mono text-[0.65rem] tracking-[0.2em] text-ink-faint uppercase">
            {project.year}
          </span>
        </div>
        <div className="flex-1 p-2 md:p-3 bg-ink">
          <TerminalPreview
            title={project.title}
            year={project.year}
            stack={project.stack}
          />
        </div>
      </BentoPanel>

      <div className="md:col-span-5 flex flex-col gap-6 justify-between">
        <BentoPanel className="p-6 md:p-7 flex-1 flex flex-col justify-between" delay={0.12}>
          <div>
            <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-4">
              <h3 className="font-display text-2xl text-ink leading-tight">
                {project.title.split("—")[0].trim()}
              </h3>
              <span className="font-mono text-[0.65rem] tracking-wider text-ink-faint border border-border/80 px-2 py-0.5 rounded-sm">
                Active
              </span>
            </div>

            <div className="space-y-4">
              <div className="problem-box">
                <span className="section-label mb-1.5 block text-copper/80">
                  Challenge
                </span>
                <p className="text-xs md:text-sm leading-relaxed text-ink-muted">
                  {project.problem}
                </p>
              </div>

              <div className="solution-box">
                <span className="section-label mb-1.5 block">
                  Implementation
                </span>
                <p className="text-xs md:text-sm leading-relaxed text-ink-muted">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </BentoPanel>

        <BentoPanel className="p-6 md:p-7 flex flex-col justify-between" delay={0.2}>
          <div>
            <span className="section-label mb-3.5 block">
              Technology Integration
            </span>
            <div className="flex flex-wrap gap-1.5 pb-5 border-b border-border/30">
              {project.stack.map((tech) => (
                <Tag
                  key={tech}
                  className="transition-colors hover:border-copper/30 hover:text-copper"
                >
                  {tech}
                </Tag>
              ))}
            </div>
          </div>

          <div className="mt-5">
            {hasLinks ? (
              <div className="flex flex-row gap-3 w-full">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-between border border-border bg-paper p-3.5 transition-all duration-300 hover:bg-copper hover:border-copper hover:text-paper group/btn shadow-sm"
                  >
                    <span className="font-mono text-[0.65rem] font-bold tracking-widest uppercase transition-colors">
                      Live Site
                    </span>
                    <span className="text-sm font-bold transition-transform duration-300 group-hover/btn:translate-x-1.5">
                      →
                    </span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-between border border-border bg-paper p-3.5 transition-all duration-300 hover:bg-ink hover:border-ink hover:text-paper group/btn shadow-sm"
                  >
                    <span className="font-mono text-[0.65rem] font-bold tracking-widest uppercase transition-colors">
                      Repository
                    </span>
                    <span className="text-sm font-bold transition-transform duration-300 group-hover/btn:translate-x-1.5">
                      ↗
                    </span>
                  </a>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-between border border-dashed border-border p-3.5 bg-paper/20">
                <span className="font-mono text-[0.65rem] tracking-wider text-ink-faint uppercase">
                  Private Deployment
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-ink-faint animate-pulse" />
              </div>
            )}
          </div>
        </BentoPanel>
      </div>
    </div>
  );
}
