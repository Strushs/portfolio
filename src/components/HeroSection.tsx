"use client";

import { heroContent, spotlightHighlights } from "@/lib/portfolio-data";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const highlightVariants = {
  initial: { opacity: 0, y: 18 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + index * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-5 py-20 text-white shadow-[0_0_120px_rgba(59,130,246,0.25)] sm:px-12 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_55%)]" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-pink-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sky-500/30 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-start gap-10">
        <motion.span
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm font-medium text-white/80 backdrop-blur"
        >
          <Sparkles size={16} className="text-sky-300" />
          {heroContent.location}
        </motion.span>

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <p className="text-sm uppercase tracking-[0.44em] text-white/60">
            {heroContent.title}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
            {heroContent.name}
          </h1>
          <p className="max-w-2xl text-pretty text-lg text-white/70 sm:text-xl">
            {heroContent.tagline}
          </p>
        </motion.div>

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 text-sm text-white/65"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {heroContent.availability}
          </div>
        </motion.div>

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href={heroContent.primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-sky-400/20 px-5 py-3 text-sm font-semibold text-sky-200 backdrop-blur-lg transition hover:bg-sky-400/30"
          >
            {heroContent.primaryCta.label}
            <ArrowDown
              size={16}
              className="transition group-hover:translate-y-1"
            />
          </Link>
          <Link
            href={heroContent.secondaryCta.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/50 hover:text-white"
          >
            {heroContent.secondaryCta.label}
          </Link>
        </motion.div>

        <div className="grid w-full gap-3 sm:grid-cols-3 sm:gap-4">
          {spotlightHighlights.map((item, index) => (
            <motion.div
              key={item}
              custom={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              variants={highlightVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 px-6 py-8 backdrop-blur-md"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="relative text-base text-white/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
