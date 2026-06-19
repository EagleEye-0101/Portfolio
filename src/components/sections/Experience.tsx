"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Tag } from "@/components/ui/Tag";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      titleLines={["Where I've", "built."]}
      className="bg-surface"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-12"
      >
        {experience.map((job) => (
          <motion.article
            key={job.company}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="grid gap-6 border border-border bg-paper p-6 transition-all duration-300 hover:border-copper/25 hover:shadow-[0_15px_35px_-15px_rgba(196,92,38,0.12)] md:grid-cols-12 md:gap-10 md:p-10"
          >
            <div className="md:col-span-4">
              <p className="font-mono text-xs tracking-widest text-copper uppercase">
                {job.period}
              </p>
              <h3 className="mt-2 font-display text-2xl text-ink md:text-3xl">
                {job.company}
              </h3>
              <p className="mt-1 font-mono text-sm text-ink-muted">
                {job.role}
              </p>
              <p className="mt-1 text-sm text-ink-faint">{job.location}</p>
            </div>

            <div className="md:col-span-8">
              <ul className="space-y-3">
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-ink-muted md:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
