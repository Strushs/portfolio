"use client";

import { timeline } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 px-6 py-20 text-white sm:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,114,182,0.2),transparent_60%)]" />
      <div className="relative z-10 flex flex-col gap-12">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on roles that mix development, support, and continuous learning"
          description="From technical school labs to professional service desks, I’ve supported teams, modernised infrastructure, and studied the theory behind the practice."
        />

        <div className="relative mt-4 grid gap-10">
          <span className="absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-white/60 via-white/20 to-transparent sm:block" />
          {timeline.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: index * 0.05,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:ml-10"
            >
              <span className="absolute -left-10 hidden h-5 w-5 rounded-full border-2 border-white bg-black sm:block" />
              <div className="text-xs uppercase tracking-[0.26em] text-white/50">
                {item.year}
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-white/60">{item.company}</p>
              <p className="text-pretty text-base text-white/70">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
