# CLAUDE.md – Akhdan Portfolio (Current Repo State)

You are an AI engineer working on **portfolio-akhdan**, a personal portfolio website for **Akhdan Farros Renoldi**.  
This file is the single source of truth for how to work on this repo.

## 1. Tech Stack & Project Reality

- Framework: **Next.js 16 (App Router)** – already initialized
- Language: **TypeScript**
- Styling: **Tailwind CSS 4** + simple custom components (shadcn-inspired, but NOT full shadcn setup)
- Animations: **Framer Motion is NOT installed yet**
- Package manager: **npm**
- Repo root (current):  
  `C:\Users\AkhdanFR\Documents\Docs\Work Preparation\Akhdan\2026\portfolio-web`

The repo was created via `create-next-app` and then customized.  
We are **not** following the `new-plan.md` structure 1:1 yet (that file is a target spec).

## 2. Current Code Structure (High Level)

Root important files:

- `app/`
  - `layout.tsx` – root layout, font Geist, lang="id"
  - `globals.css` – Tailwind entry + basic light/dark variables (background/foreground)
  - `page.tsx` – **main page** with:
    - `"use client";` + React `useState` for a mock contact form
    - Hero section, Skills, Projects, Contact, Footer
    - Data taken from a simple `profile`, `skills`, `projects` object
  - `about/page.tsx` – about page with short explanation of Akhdan & workflow
- `components/ui/`
  - `button.tsx` – shadcn-like Button:
    - `variant`: `"primary" | "secondary" | "ghost"`
    - `asChild?: boolean` (renders `<span>` when asChild, used with `<Link>`)
  - `input.tsx`, `textarea.tsx` – styled form fields
- `lib/`
  - `portfolio-data.ts` – **current data source**:
    - `profile`: name "Akhdan", role, headline, location
    - `skills`: array of skill objects
    - `projects`: array with a single "Portfolio Akhdan" project
- `types/portfolio.ts` – `SkillLevel`, `Skill`, `Project` types
- `next.config.ts` – `output: "standalone"` (ready for Docker)
- `tailwind.config.ts` – minimal config, scans `app/`, `components/`, `lib/`, `hooks/`
- `.eslintrc.json`, `.prettierrc` – already exist and in use
- Docker:
  - `Dockerfile` – 3 stages (deps → builder → runner), uses `.next/standalone` + `server.js`
  - `docker-compose.yml` – dev setup (`npm run dev` inside container)
  - `.dockerignore` – ignores `node_modules`, `.git`, `.next`, etc.
- CI/CD (GitHub Actions):
  - `.github/workflows/staging.yml` – for `develop` branch
  - `.github/workflows/production.yml` – for `main` branch

Lint (`npm run lint`) and build (`npm run build`) **currently pass**.

## 3. new-plan.md – Target Spec (Future Direction)

There is a **spec file**: `new-plan.md` in repo root.  
It describes a more ambitious setup for a project called **akhdan-portfolio** with:

- Ideal folder structure under `src/`:
  - `src/app` with sections composed in `page.tsx`
  - `src/components/layout` (Navbar, Footer)
  - `src/components/sections` (Hero, About, Skills, Experience, Projects, Contact)
  - `src/lib/data.ts` with a rich `portfolioData` object
  - `src/hooks/useScrollReveal.ts` (IntersectionObserver)
- Design system:
  - Dark theme tokens (`--bg`, `--surface`, `--accent`, etc.)
  - Syne + JetBrains Mono fonts
  - Background grid texture
- Rich content:
  - Personal info (full name, contact, education)
  - Detailed about paragraphs
  - Skills grouped by category
  - Experience timeline (GITS Indonesia, ITENAS, Indosat, etc. as specified)
  - Projects list (Danone Nutribuy, JRKU, IndoBERT, etc.)
- Components spec for:
  - Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer
- Docker & CI:
  - Another Dockerfile variant
  - `.dockerignore`, `docker-compose.yml`
  - `staging.yml` & `production.yml`
  - `.eslintrc.json`, `.prettierrc`, `.gitignore`, `.env.example`, README

**Important:** many of these things are already partially implemented in this repo; others are not.

## 4. How NEXT AI SHOULD WORK WITH THIS REPO

When another AI reads this file, it should:

1. **Never re-initialize the project.**
   - Do NOT run `npx create-next-app` again.
   - Work inside the existing `portfolio-web` directory.

2. **Treat `new-plan.md` as the target roadmap, not ground truth.**
   - Many instructions there (like re-running `create-next-app`) are already superseded.
   - Use it to:
     - Populate real content (lib/data equivalent)
     - Shape sections (Hero, About, Skills, Experience, Projects, Contact)
     - Enhance design system and animations.

3. **Respect the existing stack & CI/CD:**
   - Keep:
     - `next.config.ts` with `output: "standalone"`
     - Existing Dockerfile & workflows unless the user explicitly asks to align them with `new-plan.md`.
   - Before changing Docker or workflows, check what already exists and avoid breaking current pipelines.

4. **Data modeling guideline:**
   - Create **one central data file** (similar to `lib/data.ts` from new-plan) that:
     - Contains `portfolioData` with `personal`, `about`, `skills`, `experience`, `projects`.
     - Uses the **actual CV details** specified in `new-plan.md`.
   - Then refactor:
     - `app/page.tsx` and section components (once created) to consume `portfolioData` instead of hardcoded text.

5. **Components & layout guideline:**
   - Gradually evolve towards the structure in `new-plan.md`:
     - Introduce `components/layout/Navbar.tsx` and `Footer.tsx`.
     - Introduce `components/sections/Hero.tsx`, `About.tsx`, `Skills.tsx`, `Experience.tsx`, `Projects.tsx`, `Contact.tsx`.
   - `app/page.tsx` should eventually only **compose** those sections.
   - Use **Framer Motion** (once installed) for:
     - Hero intro animations
     - Section reveal animations (can combine with `useScrollReveal`).

6. **Design system guideline:**
   - Update `app/globals.css` to:
     - Use dark theme tokens from `new-plan.md` (`--bg`, `--surface`, `--accent`, etc.).
     - Configure background grid texture on `body::before`.
   - Use `next/font/google` for:
     - `Syne` as display font
     - `JetBrains_Mono` as mono font
   - Keep styles Tailwind-first, use CSS variables mostly for colors and effects.

7. **Hook guideline (`useScrollReveal`):**
   - Create `hooks/useScrollReveal.ts` that:
     - Uses `IntersectionObserver` to add an "in-view" state to sections.
     - Works gracefully in SSR (guard against `window` / `IntersectionObserver` not existing).
   - Sections can use this hook plus Framer Motion for reveal animations.

8. **Docs & CLAUDE.md maintenance:**
   - When making major structural changes (new sections, big refactors, Docker/CI changes):
     - Update this `claude.md` to reflect:
       - Current stack
       - What parts of `new-plan.md` are already implemented
       - What remains as TODO.

## 5. Current Alignment vs new-plan.md

Already aligned (partially or fully):

- Next.js App Router with TypeScript & Tailwind – ✅ done
- Basic portfolio sections on `/` – ✅ (hero, skills, projects, contact)
- About page – ✅ simple version at `/about`
- Docker & CI/CD – ✅ existing but slightly different from new-plan
- README – ✅ already tailored for this repo

Not yet aligned / TODO (for future AI or sessions):

- Move towards `src/`-based structure (`src/app`, `src/components`, etc.) if desired.
- Implement full design system (dark theme + grid + fonts from new-plan).
- Implement full component breakdown (Navbar, Hero, About, Skills, Experience, Projects, Contact).
- Implement detailed `portfolioData` content exactly as in `new-plan.md`.
- Add Framer Motion and `useScrollReveal` for animations.
- Reconcile/decide whether to keep current Dockerfile or switch to the variant in `new-plan.md`.

## 6. How to Run Locally (for reference)

From repo root:

```bash
npm install
npm run dev
```

Or with Docker (existing setup):

```bash
docker compose up
```

Always run at least:

- `npm run lint`
- `npm run build`

after bigger changes to ensure everything stays green.

