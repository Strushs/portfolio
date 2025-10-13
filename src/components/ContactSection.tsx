"use client";

import { contactLinks } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import Link from "next/link";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black px-6 py-20 text-white sm:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.3),_transparent_60%)]" />
      <div className="relative z-10 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 text-center"
        >
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
            Let&apos;s collaborate
          </span>
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Ready to talk about your next project or internship?
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
            I&apos;m studying Computer Science while building real-world React
            and Next.js products. If you need help with front-end features,
            Supabase integrations, or day-to-day IT support, I’d love to hear
            from you.
          </p>
        </motion.div>

        <div className="mx-auto grid w-full max-w-lg gap-4 text-sm">
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                delay: 0.1 * index,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={link.href}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white/80 transition hover:border-white/40 hover:text-white"
              >
                <span>{link.label}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-white/50 group-hover:text-white">
                  Tap
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
