"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-violet/60 to-transparent" />

        <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="font-mono text-xs text-muted">
            Designed &amp; developed by{" "}
            <span className="text-gradient font-medium">Tanniru Preethi</span>
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            data-cursor="link"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-ink transition-transform hover:-translate-y-1"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
