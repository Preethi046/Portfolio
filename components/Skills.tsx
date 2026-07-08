"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups, skillMeters } from "@/lib/data";
import { Reveal, StaggerGroup, staggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function SkillMeter({ label, value, index }: { label: string; value: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const radius = 46;
  const circumference = 2 * Math.PI * radius;

  return (
    <div ref={ref} className="glass flex flex-col items-center gap-4 rounded-2xl p-6 text-center">
      <div className="relative h-28 w-28">
        <svg width="112" height="112" viewBox="0 0 112 112" className="-rotate-90">
          <circle
            cx="56"
            cy="56"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
          />
          <motion.circle
            cx="56"
            cy="56"
            r={radius}
            fill="none"
            stroke="url(#skill-gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{
              strokeDashoffset: inView ? circumference * (1 - value / 100) : circumference,
            }}
            transition={{ duration: 1.4, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
          />
          <defs>
            <linearGradient id="skill-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00e5ff" />
              <stop offset="55%" stopColor="#6c63ff" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display text-xl text-ink">
          {value}%
        </div>
      </div>
      <p className="font-mono text-xs uppercase tracking-wider text-muted">{label}</p>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="02 — Skills"
          title="A toolkit that spans the stack and the model."
          description="From REST APIs and authentication to attention mechanisms — grouped by where I use them most."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.05}>
              <div className="glass h-full rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-cyan">
                  <span>{group.eyebrow}</span>
                  <span className="h-px flex-1 bg-hairline" />
                  {group.label}
                </div>
                <StaggerGroup className="flex flex-wrap gap-2" stagger={0.04}>
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={staggerItem}
                      className="rounded-full glass px-3.5 py-1.5 text-xs text-ink transition-all duration-300 hover:border-cyan/50 hover:shadow-[0_0_18px_-4px_rgba(0,229,255,0.5)]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </StaggerGroup>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-muted">
              Proficiency snapshot
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {skillMeters.map((meter, i) => (
              <SkillMeter key={meter.label} label={meter.label} value={meter.value} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
