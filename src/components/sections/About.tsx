"use client";

import { motion } from "framer-motion";
import { summary } from "@/data/resume";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

const pillars = [
  {
    label: "Systems Builder",
    text: "Full-stack web, mobile, and desktop — from Firebase transactions to Tauri desktop builds.",
  },
  {
    label: "AI Integrator",
    text: "Multi-provider LLM routing, RAG pipelines, and local-first inference with Ollama.",
  },
  {
    label: "Open Source",
    text: "Upstream contributions to observability stacks, Terraform providers, and developer tooling.",
  },
  {
    label: "Shipper",
    text: "Mobile banking app, ERP systems, and production APIs on Google Cloud Run.",
  },
];

export function About() {
  return (
    <SectionWrapper
      id="about"
      label="About"
      titleLines={["Engineering with intent,", "not noise."]}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-10 md:grid-cols-12"
      >
        <motion.div variants={fadeUp} className="md:col-span-7 space-y-6">
          {summary.map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-ink-muted md:text-lg md:leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-3 md:col-span-5"
        >
          {pillars.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="border border-border bg-surface/50 px-4 py-4 transition-all duration-300 hover:border-copper/30 hover:bg-surface hover:shadow-[0_12px_30px_-15px_rgba(196,92,38,0.15)]"
            >
              <p className="font-mono text-[0.65rem] tracking-widest text-copper uppercase">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
