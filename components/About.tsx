"use client";

import { motion } from "framer-motion";
import { Braces, Cpu, Lightbulb, Rocket } from "lucide-react";
import { about } from "@/lib/data";
import { Reveal, StaggerGroup, staggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { NeuralConstellation } from "./backdrop/NeuralConstellation";

const icons = [Cpu, Braces, Lightbulb, Rocket];

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="00 — About"
          title="Where coursework meets code that ships."
          description="I split my time between the theory side of machine learning — models, drift, attention — and the frontend craft that makes any of it usable."
        />

        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <div className="glass-strong relative h-full w-full overflow-hidden rounded-3xl">
                <NeuralConstellation
                  className="absolute inset-0 h-full w-full opacity-50"
                  density={22}
                  linkDistance={100}
                  interactive={false}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute h-56 w-56 rounded-full border border-dashed border-hairline"
                  />
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-violet via-purple to-cyan font-display text-4xl text-white shadow-[0_0_60px_-10px_rgba(108,99,255,0.7)]">
                    TP
                  </div>
                </div>
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl glass px-4 py-3">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    Amaravathi, IN
                  </span>
                  <span className="flex h-2 w-2 rounded-full bg-cyan signal-dot" />
                </div>
              </div>
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-violet/20 via-transparent to-pink/20 blur-2xl" />
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-5 sm:grid-cols-2">
            {about.points.map((point, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={point.label}
                  variants={staggerItem}
                  className="glass group rounded-2xl p-6 transition-colors duration-300 hover:border-cyan/40"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet/30 to-cyan/20 text-cyan">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-lg text-ink">{point.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{point.detail}</p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
