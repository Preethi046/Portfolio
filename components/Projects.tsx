"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <section id="projects" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="03 — Projects"
          title="Things I've built, end to end."
          description="Full-stack platforms, a captioning model, and a framework for catching an LLM lying to itself."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => {
            const isOpen = openId === project.id;
            return (
              <Reveal key={project.id} delay={i * 0.08} className="h-full">
                <TiltCard className="flex h-full flex-col p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-xs text-cyan">{project.period}</span>
                    <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-cyan to-violet signal-dot" />
                  </div>

                  <h3 className="mt-4 font-display text-xl text-ink">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-hairline bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setOpenId(isOpen ? null : project.id)}
                    data-cursor="link"
                    className="mt-5 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-cyan"
                    aria-expanded={isOpen}
                  >
                    Details
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-2 border-t border-hairline pt-4">
                          {project.bullets.map((b) => (
                            <li key={b} className="flex gap-2 text-xs leading-relaxed text-muted">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto pt-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="link"
                        className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2 font-mono text-xs text-ink transition-colors hover:border-cyan/50"
                      >
                        <SiGithub size={13} />
                        Code
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
