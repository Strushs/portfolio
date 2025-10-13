"use client";

import { projects } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  const commercialProjects = projects.filter(
    (project) => project.type === "commercial"
  );
  const personalProjects = projects.filter(
    (project) => project.type !== "commercial"
  );
  const projectGroups = [
    { title: "Commercial Products", items: commercialProjects },
    { title: "Personal Projects", items: personalProjects },
  ].filter((group) => group.items.length > 0);

  return (
    <section
      id="projects"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 px-6 py-20 text-white sm:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_60%)]" />
      <div className="relative z-10 flex flex-col gap-12">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that blend solid engineering with polished user experience"
          description="Each build is an opportunity to apply React, Next.js, and TypeScript in the real world—from student-focused platforms to small business storefronts and learning experiments."
        />

        <div className="flex flex-col gap-12">
          {projectGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-sm uppercase tracking-[0.4em] text-white/60">
                  {group.title}
                </h3>
                <span className="h-px w-16 bg-white/20" aria-hidden />
              </div>
              <div className="grid gap-8">
                {group.items.map((project, index) => (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex flex-col gap-6">
                      <div className="flex items-center justify-between gap-4">
                        <h4 className="text-2xl font-semibold text-white sm:text-3xl">
                          {project.title}
                        </h4>
                      </div>
                      <p className="max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm">
                        {project.type === "commercial" && project.liveUrl ? (
                          <Link
                            href={project.liveUrl}
                            className="group/link inline-flex items-center gap-2 rounded-full bg-sky-400/20 px-4 py-2 font-medium text-sky-200 transition hover:bg-sky-400/30"
                          >
                            View Live
                            <motion.span
                              aria-hidden
                              initial={{ x: 0 }}
                              whileHover={{ x: 4 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                            >
                              →
                            </motion.span>
                          </Link>
                        ) : null}
                        {project.type !== "commercial" && project.repoUrl ? (
                          <Link
                            href={project.repoUrl}
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-medium text-white/80 transition hover:border-white/40 hover:text-white"
                          >
                            GitHub Repo
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
