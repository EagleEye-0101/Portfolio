"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp } from "@/lib/motion";

interface SkillChipProps {
  label: string;
  className?: string;
}

export function SkillChip({ label, className }: SkillChipProps) {
  return (
    <motion.span
      variants={fadeUp}
      whileHover={{ scale: 1.04, y: -1 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(
        "inline-flex cursor-default items-center rounded-full border border-border bg-paper px-3 py-1.5",
        "font-mono text-[0.65rem] tracking-wide text-ink-muted uppercase",
        "transition-colors duration-200 hover:border-copper/40 hover:bg-copper/5 hover:text-ink",
        className,
      )}
    >
      {label}
    </motion.span>
  );
}
