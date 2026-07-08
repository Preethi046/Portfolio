"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  glowColor?: string;
};

export function TiltCard({ children, className, glowColor = "108,99,255" }: TiltCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const springConfig = { stiffness: 220, damping: 20, mass: 0.4 };
  const rx = useSpring(rotateX, springConfig);
  const ry = useSpring(rotateY, springConfig);

  const glowBg = useMotionTemplate`radial-gradient(400px circle at ${mouseX}% ${mouseY}%, rgba(${glowColor},0.18), transparent 70%)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 14);
    rotateX.set((py - 0.5) * -14);
    mouseX.set(px * 100);
    mouseY.set(py * 100);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    mouseX.set(50);
    mouseY.set(50);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={cn(
        "glass group relative overflow-hidden rounded-2xl transition-shadow duration-300 hover:shadow-[0_0_50px_-12px_rgba(108,99,255,0.45)]",
        className
      )}
    >
      <motion.div
        style={{ background: glowBg }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div style={{ transform: "translateZ(30px)" }} className="relative h-full">
        {children}
      </div>
    </motion.div>
  );
}
