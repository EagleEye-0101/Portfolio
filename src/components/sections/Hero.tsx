"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-16 pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-copper/5 blur-3xl" />
        <div className="absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-copper/[0.03] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-border" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex rounded-full border border-copper/30 bg-copper/10 px-4 py-1.5 font-mono text-[0.6rem] tracking-[0.2em] text-copper uppercase"
          >
            Open to Opportunities
          </motion.span>

          <motion.p
            variants={fadeUp}
            className="section-label mb-4 text-copper"
          >
            Full-Stack · AI Systems · Mobile
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="display-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Building systems
            <br />
            <span className="text-copper">that ship.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl"
          >
            Hey, I&apos;m{" "}
            <span className="font-display text-ink">{site.name}</span>
            . {site.role}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center border border-ink px-6 py-3 font-mono text-xs tracking-widest text-ink uppercase transition-colors hover:border-copper hover:text-copper"
            >
              Let&apos;s Connect
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest text-ink-faint uppercase transition-colors hover:text-copper"
            >
              GitHub →
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 hidden items-center gap-3 md:flex"
        >
          <span className="h-px w-8 bg-copper/40" />
          <p className="font-mono text-xs tracking-widest text-ink-faint uppercase">
            Scroll to explore
          </p>
        </motion.div>
      </div>
    </section>
  );
}
