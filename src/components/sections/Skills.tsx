"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { skills } from "@/data/skills";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SkillChip } from "@/components/ui/SkillChip";
import { fadeUp, chipStagger, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

const WIDE_CATEGORIES = new Set(["AI / ML", "Technologies"]);

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

function InteractiveSkillCard({ children, className }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 150,
    damping: 20,
  });
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 150,
    damping: 20,
  });

  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const [backgroundStyle, setBackgroundStyle] = useState("");

  useEffect(() => {
    const unsubscribeX = spotlightX.on("change", (val) => {
      const yVal = spotlightY.get();
      setBackgroundStyle(
        `radial-gradient(350px circle at ${val}px ${yVal}px, rgba(196, 92, 38, 0.08), transparent 80%)`
      );
    });
    const unsubscribeY = spotlightY.on("change", (val) => {
      const xVal = spotlightX.get();
      setBackgroundStyle(
        `radial-gradient(350px circle at ${xVal}px ${val}px, rgba(196, 92, 38, 0.08), transparent 80%)`
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
      className={cn(
        "interactive-card relative overflow-hidden border border-border bg-surface p-6 md:p-8",
        "transition-all duration-300 ease-out hover:border-copper/30",
        "hover:shadow-[0_20px_50px_-20px_rgba(196,92,38,0.15)]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: isHovered ? backgroundStyle : "transparent",
          opacity: isHovered ? 1 : 0,
        }}
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-copper"
      />
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      label="Skills"
      titleLines={["What I bring", "to the table."]}
    >
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="-mt-6 mb-12 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg"
      >
        Technical expertise across full-stack engineering, intelligent systems,
        and the tooling I use to ship production software.
      </motion.p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2"
      >
        {skills.map((category) => (
          <motion.div
            key={category.title}
            variants={fadeUp}
            className={cn(
              WIDE_CATEGORIES.has(category.title) && "sm:col-span-2"
            )}
          >
            <InteractiveSkillCard>
              <h3 className="font-display text-xl text-ink md:text-2xl lg:text-3xl">
                {category.title}
              </h3>
              <motion.div
                variants={chipStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-5 flex flex-wrap gap-2.5"
              >
                {category.items.map((item) => (
                  <SkillChip key={item} label={item} />
                ))}
              </motion.div>
            </InteractiveSkillCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
