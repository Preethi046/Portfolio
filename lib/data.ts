export const profile = {
  name: "Tanniru Preethi",
  roles: [
    "Computer Science Student",
    "Frontend Developer",
    "Machine Learning Enthusiast",
  ],
  tagline:
    "A Computer Science student who builds intelligent, well-crafted digital experiences — where clean frontend engineering meets real machine learning.",
  email: "preethitanniru2005@gmail.com",
  phone: "+91 8008579767",
  linkedin: "https://www.linkedin.com/in/preethi-tanniru-80002a290/",
  github: "https://github.com/Preethi046",
  resumeFile: "/Tanniru_Preethi_Resume.pdf",
};

export const stats = [
  { label: "CGPA", value: 8.01, suffix: "", decimals: 2 },
  { label: "Projects Shipped", value: 3, suffix: "+", decimals: 0 },
  { label: "Internships", value: 1, suffix: "", decimals: 0 },
  { label: "Technologies", value: 16, suffix: "+", decimals: 0 },
];

export const about = {
  points: [
    {
      label: "ML Student",
      detail:
        "B.Tech CSE at Amrita Vishwa Vidyapeetham, grounded in the theory behind the models I build.",
    },
    {
      label: "Frontend Developer",
      detail:
        "Ship dashboards and interfaces with modern frontend frameworks, wired to real authenticated APIs.",
    },
    {
      label: "Problem Solver",
      detail:
        "Comfortable moving from a DSA whiteboard problem to a production bug in the same afternoon.",
    },
    {
      label: "Fast Learner",
      detail:
        "Picked up new backend tools and authentication practices on the job during a live internship sprint.",
    },
  ],
};

export type SkillGroup = {
  label: string;
  eyebrow: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    eyebrow: "01",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    eyebrow: "02",
    skills: ["React", "Responsive Design"],
  },
  {
    label: "Backend",
    eyebrow: "03",
    skills: ["REST APIs", "Authentication", "Databases"],
  },
  {
    label: "Machine Learning",
    eyebrow: "04",
    skills: ["Machine Learning", "Transformers"],
  },
  {
    label: "Core CS",
    eyebrow: "05",
    skills: ["DSA", "DBMS", "Computer Networks", "Operating Systems"],
  },
  {
    label: "Tools",
    eyebrow: "06",
    skills: ["Git", "GitHub", "UX Design"],
  },
];

export const skillMeters = [
  { label: "Frontend Engineering", value: 88 },
  { label: "Python & ML", value: 80 },
  { label: "Systems & DBMS", value: 76 },
  { label: "UX / Design Sense", value: 72 },
];

export type Project = {
  id: string;
  title: string;
  period: string;
  summary: string;
  tags: string[];
  bullets: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "hirehelper",
    title: "HireHelper Platform",
    period: "2026",
    summary:
      "A full-stack hiring dashboard with secure, authenticated data flowing between the frontend and backend.",
    tags: ["React", "REST APIs", "Authentication", "Git"],
    bullets: [
      "Built the dashboard interface for task tracking and status updates.",
      "Integrated REST APIs with authenticated requests for secure data fetching.",
      "Collaborated with a team using Git/GitHub under modular, scalable practices.",
    ],
    github: "https://github.com/Preethi046",
  },
  {
    id: "image-caption",
    title: "Image Caption Generation",
    period: "2025",
    summary:
      "A deep-learning encoder-decoder system that turns images into fluent, human-like captions.",
    tags: ["EfficientNetB0", "Transformer Decoder", "BLEU", "METEOR", "Deep Learning"],
    bullets: [
      "Used EfficientNetB0 as a visual encoder paired with a Transformer-based decoder for sequence generation.",
      "Evaluated caption quality with BLEU and METEOR metrics across diverse visual contexts.",
    ],
  },
  {
    id: "self-monitoring-llm",
    title: "Self-Monitoring LLM",
    period: "2026",
    summary:
      "A framework that watches a language model's own hidden states to catch hallucinations before they reach the user.",
    tags: [
      "Hallucination Detection",
      "Representation Drift",
      "Attention Divergence",
      "Confidence Scoring",
      "Transformer",
    ],
    bullets: [
      "Built a Transformer-based framework detecting and correcting hallucinations via representation drift analysis.",
      "Combined attention divergence and uncertainty estimation into a single confidence signal.",
      "Designed a self-correction pipeline over hidden states, improving response consistency and enabling continuous monitoring.",
    ],
  },
];

export const experience = [
  {
    org: "Infosys Springboard",
    role: "Virtual Internship",
    period: "Feb 2026 — Apr 2026",
    points: [
      "Built the dashboard interface for a task management platform.",
      "Integrated the frontend with a backend using secure, authenticated REST APIs.",
      "Collaborated with a cross-functional team on Git/GitHub, following modular, scalable development practices.",
    ],
  },
];

export const education = [
  {
    school: "Amrita Vishwa Vidyapeetham",
    detail: "B.Tech, Computer Science",
    period: "2023 — Present",
    metric: "CGPA 8.01",
  },
  {
    school: "Narayana Junior College",
    detail: "Intermediate, Guntur",
    period: "2021 — 2023",
    metric: "96%",
  },
  {
    school: "Katuri Public School",
    detail: "Secondary School, Guntur",
    period: "2020 — 2021",
    metric: "98%",
  },
];

export const certificates = [
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Coursera",
    year: "2025",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
