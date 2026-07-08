import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-16 max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <div
          className={cn(
            "mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan signal-dot" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-balance text-base leading-relaxed text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
