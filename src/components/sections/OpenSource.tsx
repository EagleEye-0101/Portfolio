"use client";

import { motion } from "framer-motion";
import { contributions } from "@/data/contributions";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Tag } from "@/components/ui/Tag";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function OpenSource() {
  return (
    <SectionWrapper
      id="opensource"
      label="Open Source"
      titleLines={["Contributions", "upstream."]}
      className="bg-surface"
    >
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="-mt-6 mb-12 max-w-2xl text-base text-ink-muted"
      >
        Verified merged pull requests across observability, Terraform providers,
        and developer tooling.
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid gap-4 md:grid-cols-2"
      >
        {contributions.map((contrib) => (
          <motion.article
            key={contrib.id}
            variants={fadeUp}
            className="skill-card flex flex-col bg-paper"
          >
            <div className="flex items-start justify-between gap-4">
              <a
                href={contrib.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-wide text-copper hover:underline"
              >
                {contrib.repo}
              </a>
              <span
                className={cn(
                  "shrink-0 rounded-full px-2 py-0.5 font-mono text-[0.55rem] tracking-widest uppercase",
                  contrib.status === "merged"
                    ? "bg-copper/10 text-copper"
                    : "bg-ink/5 text-ink-faint",
                )}
              >
                {contrib.status}
              </span>
            </div>

            <h3 className="mt-3 font-display text-lg text-ink leading-snug">
              {contrib.prTitle}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
              {contrib.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {contrib.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            <a
              href={contrib.prUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-4 font-mono text-[0.65rem] tracking-widest uppercase"
            >
              View PR →
            </a>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
