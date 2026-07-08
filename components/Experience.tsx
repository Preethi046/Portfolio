import { experience } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Timeline } from "./Timeline";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="04 — Experience"
          title="Hands-on time in a real engineering team."
        />
        <Timeline
          items={experience.map((exp) => ({
            key: exp.org,
            eyebrow: exp.period,
            title: exp.role,
            subtitle: exp.org,
            content: (
              <ul className="space-y-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                    {point}
                  </li>
                ))}
              </ul>
            ),
          }))}
        />
      </div>
    </section>
  );
}
