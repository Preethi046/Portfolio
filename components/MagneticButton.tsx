"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, MouseEvent, useRef } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost";
  as?: "a" | "button";
  target?: string;
  rel?: string;
  download?: boolean | string;
};

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "solid",
  as,
  target,
  rel,
  download,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const Tag = as === "a" || href ? "a" : "button";

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-medium text-sm transition-colors duration-300",
    variant === "solid"
      ? "bg-gradient-to-r from-violet via-purple to-pink text-white shadow-[0_0_30px_-8px_rgba(108,99,255,0.7)]"
      : "glass text-ink hover:border-cyan/50",
    className
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
      data-cursor="link"
    >
      <Tag
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        download={download}
        className={baseClasses}
      >
        {variant === "solid" && (
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        )}
        <span className="relative">{children}</span>
      </Tag>
    </motion.div>
  );
}
