"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, lineReveal, slideInLeft, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface SectionWrapperProps {
  id: string;
  label: string;
  title?: string;
  titleLines?: string[];
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}

export function SectionWrapper({
  id,
  label,
  title,
  titleLines,
  children,
  className,
  titleClassName,
}: SectionWrapperProps) {
  const lines = titleLines ?? (title ? [title] : []);

  return (
    <section id={id} className={cn("scroll-mt-24 py-20 md:py-28", className)}>
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mb-12 md:mb-16"
        >
          <motion.p variants={slideInLeft} className="section-label mb-4">
            {label}
          </motion.p>
          <h2
            className={cn(
              "display-heading text-3xl md:text-5xl lg:text-6xl",
              titleClassName,
            )}
          >
            {lines.map((line, i) => (
              <motion.span
                key={line}
                variants={fadeUp}
                className={cn("block", i > 0 && "text-copper")}
              >
                {line}
              </motion.span>
            ))}
          </h2>
          <motion.div
            variants={lineReveal}
            className="editorial-rule mt-6 max-w-xs origin-left"
          />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
