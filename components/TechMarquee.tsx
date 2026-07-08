import {
  SiPython,
  SiJavascript,
  SiMysql,
  SiHtml5,
  SiCss,
  SiReact,
  SiGit,
  SiGithub,
} from "react-icons/si";

const items = [
  { Icon: SiPython, label: "Python" },
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: SiMysql, label: "SQL" },
  { Icon: SiHtml5, label: "HTML" },
  { Icon: SiCss, label: "CSS" },
  { Icon: SiReact, label: "React" },
  { Icon: SiGit, label: "Git" },
  { Icon: SiGithub, label: "GitHub" },
];

export function TechMarquee() {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-hairline py-6 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max gap-12"
        style={{ animation: "marquee-scroll 32s linear infinite" }}
      >
        {loop.map(({ Icon, label }, i) => (
          <div
            key={`${label}-${i}`}
            className="flex items-center gap-2.5 font-mono text-sm uppercase tracking-wider text-muted"
          >
            <Icon size={18} className="text-cyan" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
