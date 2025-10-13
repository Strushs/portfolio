"use client";

import { skills } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

function InfiniteScrollRow({
  items,
  reverse,
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex min-w-max gap-6 whitespace-nowrap text-sm uppercase tracking-[0.32em] text-white/40"
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 18,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-white/10 px-6 py-3"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-20 text-white sm:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.18),_transparent_65%)]" />
      <div className="relative z-10 flex flex-col gap-12">
        <SectionHeading
          eyebrow="Skills"
          title="Balancing front-end craftsmanship with reliable system operations"
          description="From React components to server deployments, I rely on a toolkit that keeps projects maintainable and users supported."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur"
            >
              <h3 className="text-sm uppercase tracking-[0.3em] text-white/50">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          <InfiniteScrollRow
            items={[
              "React & Next.js",
              "TypeScript",
              "Supabase",
              "Responsive UI",
            ]}
          />
          <InfiniteScrollRow
            items={[
              "Linux administration",
              "Git workflows",
              "Agile teamwork",
              "IT support",
            ]}
            reverse
          />
        </div>
      </div>
    </section>
  );
}
