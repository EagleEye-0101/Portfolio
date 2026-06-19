"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const sections = site.nav.map((item) => item.href.replace("#", ""));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 z-50 -translate-y-1/2 hidden md:flex flex-col items-center gap-4">
      {site.nav.map((item, idx) => {
        const isActive = activeSection === item.href;
        return (
          <div
            key={item.href}
            className="relative flex items-center justify-end"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <AnimatePresence>
              {hoveredIdx === idx && (
                <motion.span
                  initial={{ opacity: 0, x: 10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 5, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-7 py-1 px-2.5 rounded border border-border bg-surface text-[0.6rem] font-mono tracking-widest text-ink uppercase whitespace-nowrap shadow-sm"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>

            <a
              href={item.href}
              className="group relative flex h-6 w-6 items-center justify-center"
              aria-label={`Scroll to ${item.label}`}
            >
              <motion.span
                className={cn(
                  "rounded-full border transition-all duration-300",
                  isActive
                    ? "h-2.5 w-2.5 border-copper bg-copper shadow-[0_0_8px_rgba(196,92,38,0.5)]"
                    : "h-1.5 w-1.5 border-ink-faint bg-transparent group-hover:border-copper group-hover:scale-125"
                )}
                layoutId={`floating-nav-dot-${item.href}`}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}
