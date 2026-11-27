# Harsh Raolji — Portfolio

Personal portfolio for **Harsh Raolji** (Software Developer) — building products, designing systems, and exploring technology.

## Features

- **Header & Navigation** (`features/header`): Sticky header with `HR` mark, scroll-synced active section links (`Work`, `About`, `Skills`, `Contact`), and a mobile `Sheet` navigation drawer.
- **Hero** (`features/hero`): Intro line, role eyebrow, display headline, and resume link (`TODO: add public/resume.pdf`).
- **About** (`features/about`): Two-column editorial bio with a sticky heading on desktop.
- **Skills** (`features/skills`): Categorized tech stack (`Languages`, `Frontend`, `Backend & DB`, `AI / LLM`, `Tools & DevOps`) driven by typed data in `features/skills/data.ts`.
- **Contact & Footer** (`features/contact`, `shared/components/Footer.tsx`): Statement heading, `mailto:` link, contact form card with validation and honeypot (`TODO: wire submission backend`), social links (GitHub, LinkedIn, GitLab), and a dynamic copyright footer.
- **Custom 404 Page** (`app/not-found.tsx`, `features/not-found`): Branded not-found page with Motion route-trace animation and `noindex` metadata.
- **Upcoming (`TODO`)**: `Work` / Projects section (`#work`) and Blog.

## Tech Stack

- **Framework:** Next.js 16.4.6 (App Router, `cacheComponents` and `partialPrefetching` enabled)
- **UI & Components:** React 19.3.0, Tailwind CSS 4.3.3 (`@tailwindcss/turbopack`), shadcn/ui (`@base-ui/react`, `base-nova` style)
- **Fonts:** Inter, JetBrains Mono, and Dancing Script (`next/font/google`)
- **Icons:** `lucide-react` (plus inline SVG brand icons in `features/contact/components/SocialIcons.tsx`)
- **Animation:** Motion 14 (`motion/react`)
- **Language:** TypeScript 5
- **Linting:** ESLint 9 (`eslint-config-next`)

## Project Structure

```text
.
├── app/                # App Router pages (page.tsx, not-found.tsx), layout.tsx, globals.css
├── components/         # UI primitives (components/ui/ managed by shadcn/ui)
├── features/           # Feature-based modules (header, hero, about, skills, contact, not-found)
├── lib/                # Core helpers (e.g., utils.ts for shadcn/ui)
├── shared/             # Shared domain components (Footer.tsx), hooks, utils, and types
├── styles/             # Shared font configuration (fonts.ts)
├── public/             # Static assets (TODO: add resume.pdf)
├── .nvmrc              # Pinned Node.js version
├── AGENTS.md           # Agentic development rules and guidelines
├── ARCHITECTURE.md     # Folder structure, naming conventions, and code rules
├── components.json     # shadcn/ui configuration and path aliases
├── eslint.config.mjs   # ESLint configuration
├── next.config.ts      # Next.js and Turbopack configuration
├── package.json        # Dependencies and npm scripts
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

### Prerequisites

This project uses [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions. The required version is specified in `.nvmrc`.

```bash
nvm use
```

### 1. Install dependencies

```bash
npm install
```

### 2. Environment setup

Copy `.env.example` to `.env.local` and fill in the required values (`TODO: Add .env.example once external services are configured`):

```bash
cp .env.example .env.local
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm run start
```

## Scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `npm run dev` | Start the Next.js development server |
| `build` | `npm run build` | Create an optimized production build |
| `start` | `npm run start` | Run the production server |
| `lint` | `npm run lint` | Run ESLint across the codebase |

## Deployment

`TODO: Add hosting platform, deployment steps, and live URL.`

## Related Docs

- [AGENTS.md](./AGENTS.md) — Agentic development rules and guidelines (How the AI agent should work, make decisions, implement, and verify.)
- [ARCHITECTURE.md](./ARCHITECTURE.md) — How code should be organized, named, separated, and maintained.
- [DESIGN.md](./DESIGN.md) — UI/UX and visual design guidelines (How the website should look and feel, including design tokens and UI consistency.)
