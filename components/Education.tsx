import { Award } from "lucide-react";
import { certificates, education } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Timeline } from "./Timeline";

export function Education() {
  return (
    <section id="education" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="05 — Education" title="The path so far." />

        <Timeline
          items={education.map((edu) => ({
            key: edu.school,
            eyebrow: edu.period,
            title: edu.school,
            subtitle: edu.detail,
            content: (
              <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 font-mono text-xs text-cyan">
                {edu.metric}
              </span>
            ),
          }))}
        />

        <div className="mt-16">
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted">
              Certifications
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {certificates.map((cert) => (
              <Reveal key={cert.title}>
                <div className="glass flex items-center gap-4 rounded-2xl p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet/30 to-pink/20 text-pink">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-base text-ink">{cert.title}</h3>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
