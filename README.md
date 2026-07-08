# Tanniru Preethi — Portfolio

A dark, glassmorphic portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Fonts are self-hosted (no external font requests), and the whole site is statically exported so it can be dropped straight onto Netlify.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
```

This outputs a fully static site to the `out/` folder (`next.config.ts` is set to `output: "export"`).

## Deploy to Netlify

**Option A — drag and drop**
1. Run `npm run build`.
2. Go to Netlify → **Add new site → Deploy manually**.
3. Drag in the `out/` folder.

**Option B — connect your Git repo (recommended)**
1. Push this project to GitHub.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Build settings are already set in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy.

### Contact form
The contact section uses **Netlify Forms** — no backend or serverless function needed. Once deployed on Netlify, submissions show up under **Site → Forms** in your Netlify dashboard, and you can turn on email notifications there. It won't receive submissions when just running `npm run dev` locally, or on non‑Netlify hosts — that's expected.

## Things to double-check before you publish

- **GitHub link**: `profile.github` is set to `https://github.com/Preethi046`. The HireHelper project card links to your profile page too, since I don't know the exact repo name — update `projects[0].github` in `lib/data.ts` to the specific repo URL once you know it (e.g. `https://github.com/Preethi046/hirehelper`).
- **Email**: I corrected `preethitanniru2005@gmail.com` from the resume text (the PDF extraction had dropped the `@`) — please confirm that's actually right before publishing.
- **Resume file**: `public/Tanniru_Preethi_Resume.pdf` is a straight copy of the resume you uploaded. Replace it any time by keeping the same filename, or update `profile.resumeFile` in `lib/data.ts` if you rename it.
- **Live demo links**: I didn't invent "live demo" links for the projects since none were provided — only GitHub buttons show, and only where a link is set.

## Where things live

- `lib/data.ts` — all copy: name, roles, about, skills, projects, experience, education, certificates, contact info. Edit this file for text changes; you won't need to touch components for most updates.
- `components/` — one file per section, plus a `backdrop/` folder for the aurora background and the animated neural-constellation graphic (the site's signature visual motif, tying back to the ML/AI project work).
- `app/fonts.ts` — local variable fonts (Space Grotesk, Inter, JetBrains Mono), loaded via `next/font/local` so there's no runtime dependency on Google Fonts.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Lenis (smooth scroll) · lucide-react + react-icons (icons)
