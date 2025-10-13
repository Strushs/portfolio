"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

const baseVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <motion.span
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-white/70 backdrop-blur"
        variants={baseVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0 }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        variants={baseVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          className="max-w-2xl text-pretty text-base text-white/70 sm:text-lg"
          variants={baseVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
