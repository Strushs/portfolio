"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { label: "Network stability boost", value: "↑ 20%" },
  { label: "React / Next.js builds", value: "4+" },
  { label: "Languages", value: "PL · EN (C1)" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-20 text-white sm:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_140deg_at_20%_20%,rgba(56,189,248,0.2),transparent_45%)]" />
      <div className="relative z-10 flex flex-col gap-10">
        <SectionHeading
          eyebrow="About"
          title="Computer science student building dependable, user-centered web experiences"
          description="I combine front-end engineering with hands-on IT support skills. Whether I am shipping a responsive Next.js project, administering Linux servers, or helping a teammate debug hardware, I focus on making technology approachable and reliable."
        />

        <div className="grid gap-6 text-white/70 sm:grid-cols-[2fr_1fr] sm:items-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-pretty text-base leading-relaxed sm:text-lg"
          >
            I am currently studying Computer Science at WSB Merito in Gdańsk and
            applying what I learn to practical projects. My recent work includes
            a Supabase-backed matching platform for students, an artisan
            storefront, and interactive learning apps built in React. Outside of
            code, I maintain Windows and Linux environments, document processes,
            and help teams adopt Git-based workflows.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-4 rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur"
          >
            {stats.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-white">
                  {item.value}
                </span>
                <span className="text-sm uppercase tracking-[0.24em] text-white/50">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
