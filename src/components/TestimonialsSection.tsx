"use client";

import { testimonials } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-20 text-white sm:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.22),_transparent_60%)]" />
      <div className="relative z-10 flex flex-col gap-12">
        <SectionHeading
          eyebrow="Highlights"
          title="Impact from recent workplaces and projects"
          description="A snapshot of the value created while supporting organisations with development, deployment, and day-to-day IT assistance."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-black/30 p-6 text-white/70 backdrop-blur"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <p className="text-pretty text-base sm:text-lg">
                “{testimonial.quote}”
              </p>
              <footer className="mt-2 flex flex-col text-sm text-white/60">
                <span className="font-semibold text-white">
                  {testimonial.name}
                </span>
                <span>{testimonial.title}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
