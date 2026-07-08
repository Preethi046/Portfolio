"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import {
  SiPython,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { profile } from "@/lib/data";
import { MagneticButton } from "./MagneticButton";
import { NeuralConstellation } from "./backdrop/NeuralConstellation";

const orbitIcons = [
  { Icon: SiPython, label: "Python", angle: 0 },
  { Icon: SiReact, label: "React", angle: 60 },
  { Icon: SiJavascript, label: "JavaScript", angle: 120 },
  { Icon: SiHtml5, label: "HTML", angle: 180 },
  { Icon: SiGit, label: "Git", angle: 240 },
  { Icon: SiGithub, label: "GitHub", angle: 300 },
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan"
          >
            <Sparkles size={13} />
            Hello, I&apos;m
          </motion.div>

          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {profile.name.split(" ").map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={i === 1 ? "text-gradient block" : "block"}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="mt-6 h-8 font-mono text-lg text-muted sm:text-xl">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {profile.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-balance text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href={profile.resumeFile} download>
              <Download size={16} />
              Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <Mail size={16} />
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        {/* right column: floating profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <NeuralConstellation
            className="absolute inset-0 -z-0 h-full w-full opacity-70"
            density={30}
            linkDistance={110}
          />

          <motion.div
            style={{ animation: "float-y 6s ease-in-out infinite" }}
            className="glass-strong relative z-10 mx-auto flex h-64 w-64 flex-col items-center justify-center rounded-[2rem] p-6 text-center sm:h-72 sm:w-72"
          >
            <div
              className="absolute inset-0 rounded-[2rem] opacity-60"
              style={{
                background:
                  "linear-gradient(135deg, rgba(108,99,255,0.25), rgba(0,229,255,0.12), rgba(236,72,153,0.2))",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                padding: 1,
              }}
            />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet via-purple to-cyan font-display text-2xl text-white">
              TP
            </div>
            <p className="relative mt-4 font-display text-lg text-ink">{profile.name}</p>
            <p className="relative mt-1 font-mono text-xs uppercase tracking-widest text-cyan">
              Software &amp; Frontend
            </p>

            <span className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-violet text-[10px] font-bold text-white shadow-[0_0_20px_rgba(0,229,255,0.6)]">
              8.0
            </span>
            <span className="absolute -bottom-3 -left-3 rounded-full glass px-3 py-1 font-mono text-[10px] text-muted">
              Open to work
            </span>
          </motion.div>

          {orbitIcons.map(({ Icon, label, angle }, i) => {
            const radius = 168;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            return (
              <motion.div
                key={label}
                className="glass absolute left-1/2 top-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-xl text-ink"
                style={{ x, y, translateX: "-50%", translateY: "-50%" }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [y, y - 10, y],
                }}
                transition={{
                  opacity: { delay: 0.9 + i * 0.08, duration: 0.5 },
                  scale: { delay: 0.9 + i * 0.08, duration: 0.5 },
                  y: {
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  },
                }}
                aria-label={label}
              >
                <Icon size={18} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor="link"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
