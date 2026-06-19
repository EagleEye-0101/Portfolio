"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { fadeUp } from "@/lib/motion";

export function Projects() {
  return (
    <SectionWrapper
      id="projects"
      label="Projects"
      titleLines={["Where ideas", "become systems."]}
    >
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="-mt-6 mb-12 max-w-2xl text-base text-ink-muted md:text-lg"
      >
        Purpose-driven systems designed to interpret complexity, extract
        meaningful insights, and support informed action.
      </motion.p>

      <div className="space-y-10 md:space-y-14">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
