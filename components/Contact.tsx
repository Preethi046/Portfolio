"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { MagneticButton } from "./MagneticButton";

const contactLinks = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: FaLinkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedin },
  { icon: FaGithub, label: "GitHub", value: "See my code", href: profile.github },
];

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="06 — Contact"
          title="Let's build something worth shipping."
          description="Open to Frontend and Machine Learning-adjacent roles, internships, and interesting collaborations."
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                data-cursor="link"
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors duration-300 hover:border-cyan/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet/30 to-cyan/20 text-cyan transition-transform duration-300 group-hover:scale-110">
                  <link.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {link.label}
                  </p>
                  <p className="truncate text-sm text-ink">{link.value}</p>
                </div>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="glass-strong space-y-5 rounded-3xl p-7 sm:p-9"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-cyan/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-cyan/50"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-hairline bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-cyan/50"
                  placeholder="What are you building?"
                />
              </div>

              <div className="flex items-center gap-4">
                <MagneticButton>
                  {status === "loading" ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : status === "success" ? (
                    <Check size={16} />
                  ) : (
                    <Send size={16} />
                  )}
                  {status === "success" ? "Message sent" : "Send message"}
                </MagneticButton>

                {status === "error" && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-pink"
                  >
                    Something went wrong — email me directly instead.
                  </motion.span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
