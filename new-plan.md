You are a senior fullstack engineer. Build me a complete, production-ready personal portfolio website based on the design spec and content below. Follow every instruction carefully.

═══════════════════════════════════════
SECTION 1 — PROJECT SETUP
═══════════════════════════════════════

Project name: akhdan-portfolio
Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Tailwind CSS + shadcn/ui
Animation: Framer Motion
Package manager: npm

Run this first:
npx create-next-app@latest akhdan-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

Then install:
npm install framer-motion
npm install -D prettier

Add to next.config.js:
  output: 'standalone'

═══════════════════════════════════════
SECTION 2 — FOLDER STRUCTURE
═══════════════════════════════════════

src/
├── app/
│   ├── layout.tsx         ← root layout, metadata, fonts
│   ├── page.tsx           ← main page, compose all sections
│   └── globals.css        ← CSS variables, base styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── lib/
│   └── data.ts            ← all content/data in one file
└── hooks/
    └── useScrollReveal.ts ← intersection observer hook

═══════════════════════════════════════
SECTION 3 — DESIGN SYSTEM
═══════════════════════════════════════

In globals.css, define these CSS variables:

:root {
  --bg: #09090e;
  --surface: #111117;
  --surface2: #16161f;
  --border: #1f1f2e;
  --accent: #00ff88;
  --accent-dim: rgba(0,255,136,0.08);
  --accent-mid: rgba(0,255,136,0.15);
  --text: #eaeaf0;
  --muted: #5a5a7a;
  --muted2: #8888aa;
}

Fonts (via next/font/google):
- Display font: Syne (weights: 400, 600, 700, 800)
- Mono font: JetBrains Mono (weights: 300, 400, 500)

Background grid texture (body::before):
  background-image:
    linear-gradient(rgba(0,255,136,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,136,0.025) 1px, transparent 1px);
  background-size: 48px 48px;
  position: fixed; inset: 0; pointer-events: none; z-index: 0;

═══════════════════════════════════════
SECTION 4 — CONTENT DATA (lib/data.ts)
═══════════════════════════════════════

Export a single `portfolioData` object with:

personal: {
  name: "Akhdan Farros Renoldi",
  initials: "AFR.dev",
  title: "Fullstack Engineer",
  tagline: "Building reliable web systems",
  description: "Fresh graduate from ITENAS Bandung with hands-on experience at PT. GITS Indonesia — shipping real products for Danone, Jasa Raharja, and Frisianflag.",
  email: "renoldiakhdanfarros@gmail.com",
  linkedin: "https://linkedin.com/in/akhdanfarrosrenoldi",
  phone: "+62 822-1898-6548",
  location: "Bandung, Indonesia",
  education: "Informatics — ITENAS Bandung",
}

about: {
  paragraphs: [
    "I'm a Fullstack Engineer and fresh graduate from the Informatics program at Institut Teknologi Nasional Bandung. I thrive in collaborative environments and love picking up new technologies along the way.",
    "During my time at PT. GITS Indonesia, I worked on maintenance and feature development for enterprise clients like Danone, Jasa Raharja, and Frisianflag — giving me early exposure to real-world, production-grade systems.",
    "I care about clean code, accurate delivery, and building things that actually work in the wild — not just in development."
  ]
}

skills: [
  { category: "Frontend", items: ["Next.js", "Vue.js", "Tailwind CSS", "Laravel Blade"] },
  { category: "Backend", items: ["Node.js", "AdonisJS", "Laravel", "CodeIgniter", "Go"] },
  { category: "Database & Infra", items: ["MySQL", "MongoDB", "PostgreSQL", "Microservices"] },
  { category: "Tools & Other", items: ["Git", "Postman", "Power BI", "Tableau", "Python / ML"] },
]

experience: [
  {
    role: "Fullstack Engineer",
    company: "PT. GITS Indonesia",
    type: "Contract",
    period: "Oct 2024 – Jan 2025",
    points: [
      "Maintained Frisianflag QNS using AdonisJS & MySQL — weekly server checks and monthly data insight reports for client.",
      "Maintained Jasa Raharja JRKU (external & internal) using Node.js with Microservices architecture and MongoDB.",
      "Maintained Jasa Raharja Webpartner using Go (backend), Next.js (frontend), and PostgreSQL.",
      "Implemented Danone SSO integration and developed new SSHCF V2 features for Danone NAV & BEST.",
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "PT. GITS Indonesia",
    type: "Internship",
    period: "May 2024 – Aug 2024",
    points: [
      "Developed Danone Nutribuy e-commerce website using Vue.js, Tailwind CSS, and Laravel Blade Template.",
      "Worked in an Agile Scrum environment with structured sprint cycles.",
    ]
  },
  {
    role: "Website Developer Intern",
    company: "PT. Industri Telekomunikasi Indonesia (Persero)",
    type: "Internship",
    period: "Aug 2023 – Nov 2023",
    points: [
      "Developed an internal CSR website for office use using CodeIgniter 4 and Bootstrap.",
    ]
  },
]

projects: [
  {
    number: "01",
    name: "Danone Nutribuy",
    client: "PT. GITS Indonesia · Danone",
    description: "E-commerce platform for Danone's nutrition product line. Built with a full frontend-backend integration using modern JavaScript stack in an Agile environment.",
    tags: ["Vue.js", "Laravel", "Tailwind", "Agile"],
    github: "",
    demo: "",
  },
  {
    number: "02",
    name: "Jasa Raharja JRKU",
    client: "PT. GITS Indonesia · Jasa Raharja",
    description: "Maintenance of external and internal insurance management systems built on a Node.js microservices architecture with MongoDB for high-availability data handling.",
    tags: ["Node.js", "Microservices", "MongoDB", "Next.js"],
    github: "",
    demo: "",
  },
  {
    number: "03",
    name: "IndoBERT Sentiment Analysis",
    client: "Undergraduate Thesis · ITENAS Bandung",
    description: "Fine-tuned the IndoBERT NLP model to improve sentiment analysis accuracy on Indonesian product reviews — supporting data-driven marketing strategy decisions.",
    tags: ["Python", "IndoBERT", "scikit-learn", "NLP"],
    github: "",
    demo: "",
  },
]

═══════════════════════════════════════
SECTION 5 — COMPONENTS SPEC
═══════════════════════════════════════

--- NAVBAR ---
- Fixed top, backdrop-filter: blur(12px)
- Left: initials "AFR.dev" in accent color, JetBrains Mono font
- Right: nav links (about, skills, experience, projects, contact)
- On scroll > 20px: add bottom border var(--border)
- Mobile: hamburger menu with slide-down drawer

--- HERO ---
- Full viewport height, centered-left layout
- Small tag above name: "// FULLSTACK ENGINEER" in accent color
- Name: large (clamp 48px to 96px), font-weight 800, last name in accent color
- Subtitle with blinking cursor (animate opacity 0↔1, 1s step-end infinite)
- Description paragraph, max-width 480px
- Two CTA buttons:
    Primary (solid accent bg, dark text): "View Projects ↓" → scrolls to #projects
    Secondary (outline): "Download CV" → links to /cv.pdf
- Bottom left: scroll hint with line + "SCROLL" text
- Animate all elements with Framer Motion staggered fadeUp on mount

--- ABOUT ---
- Two column grid: left photo (280x340px placeholder with green gradient overlay), right text
- Photo: show placeholder with text "Add your photo to /public/photo.jpg"
- Three paragraphs from data, bold highlights on key names
- Below paragraphs: meta items row (Location, Education, Email)
- Reveal on scroll with Framer Motion

--- SKILLS ---
- Section tag + "Tech Stack" title
- 4-column grid of skill cards
- Each card: category title in accent + dot list of skills
- Card hover: border changes to accent with opacity 0.3
- Staggered reveal animation

--- EXPERIENCE ---
- Section tag + "Work History" title
- Vertical timeline, max-width 800px
- Each item: 3-column grid (date | dot+line | content)
- Date: right-aligned, JetBrains Mono, muted color
- Dot: accent color circle with glow ring
- Connector line between dots
- Content: role title, company + type badge, bullet points with → prefix

--- PROJECTS ---
- Section tag + "Selected Work" title
- 3-column card grid
- Each card: number, name, client (accent), description, tag pills
- Card hover: translateY(-4px) + accent border
- If github/demo links exist, show icon buttons

--- CONTACT ---
- Two column: left (big heading + contact links), right (form)
- Heading: "Let's work together." with "together." in accent
- Contact links: email, LinkedIn, phone — each with icon box
- Form: name, email, message fields + Send button
- Form fields: dark surface bg, accent border on focus

--- FOOTER ---
- Simple one-line: left "© 2025 Akhdan Farros Renoldi", right "Built with Next.js · Designed with intention"
- Top border: var(--border)

═══════════════════════════════════════
SECTION 6 — DOCKER SETUP
═══════════════════════════════════════

Create Dockerfile (multi-stage):

FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]

Create .dockerignore:
node_modules
.next
.git
*.md

Create docker-compose.yml for local dev:
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
      - /app/.next
    environment:
      - NODE_ENV=development
    command: npm run dev

═══════════════════════════════════════
SECTION 7 — GITHUB ACTIONS CI/CD
═══════════════════════════════════════

Create .github/workflows/staging.yml:
- Trigger: push to branch `develop`
- Steps: checkout → lint check → build check → docker build & push (tag: :staging) → SSH deploy to staging server
- Secrets used: DOCKER_USERNAME, DOCKER_TOKEN, STAGING_HOST, STAGING_USER, STAGING_SSH_KEY

Create .github/workflows/production.yml:
- Trigger: push to branch `main`
- Same steps but tag: :latest and use PRODUCTION_HOST, PRODUCTION_USER, PRODUCTION_SSH_KEY

Deploy script on server:
  docker pull $DOCKER_USERNAME/akhdan-portfolio:staging
  docker stop portfolio-staging || true
  docker rm portfolio-staging || true
  docker run -d --name portfolio-staging -p 3000:3000 $DOCKER_USERNAME/akhdan-portfolio:staging

═══════════════════════════════════════
SECTION 8 — OTHER FILES
═══════════════════════════════════════

.eslintrc.json — standard Next.js rules
.prettierrc — { "semi": false, "singleQuote": true, "tabWidth": 2 }
.gitignore — node_modules, .next, .env*, dist
.env.example — placeholder for future env vars

README.md with:
- Project description
- Tech stack list
- Local dev: npm run dev
- Docker: docker-compose up
- Branch strategy: main (prod) / develop (staging) / feature/*
- GitHub Secrets setup guide
- Folder structure overview

═══════════════════════════════════════
SECTION 9 — INSTRUCTIONS
═══════════════════════════════════════

1. Create ALL files listed above — do not skip any
2. Use portfolioData from lib/data.ts in every component — no hardcoded content
3. All animations via Framer Motion — no CSS keyframes for main animations
4. Mobile responsive — works on 320px to 1920px
5. useScrollReveal hook using IntersectionObserver for section reveals
6. After generating all files, show me the command to run it locally

Start with:
1. Project init commands
2. lib/data.ts
3. globals.css
4. layout.tsx
5. Then each component one by one
6. Docker files
7. GitHub Actions
8. README