"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import { useScroll } from "framer-motion";

type TimelineItem = {
  key: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  content: ReactNode;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-hairline sm:left-[9px]" />
      <motion.div
        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan via-violet to-pink sm:left-[9px]"
      />

      <div className="space-y-12">
        {items.map((item) => (
          <div key={item.key} className="relative pl-8 sm:pl-10">
            <span className="signal-dot absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-cyan to-violet sm:h-[18px] sm:w-[18px]" />
            <p className="font-mono text-xs uppercase tracking-widest text-cyan">
              {item.eyebrow}
            </p>
            <h3 className="mt-2 font-display text-lg text-ink sm:text-xl">{item.title}</h3>
            {item.subtitle && (
              <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
            )}
            <div className="mt-3">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
