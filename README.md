# portfolio_v3

Personal portfolio website built to showcase career experience and current status for recruiters, clients, and peers.

## Features

- `TODO: Define site sections/pages (e.g., About, Experience, Projects, Blog, Contact)`
- `TODO: Define content/blog authoring and storage approach`

## Tech Stack

- **Framework:** Next.js 16.4.6 (App Router, `cacheComponents` and `partialPrefetching` enabled)
- **UI:** React 19.3.0, Tailwind CSS 4.3.3 (`@tailwindcss/turbopack`), `@heroicons/react`
- **Language:** TypeScript 5
- **Linting:** ESLint 9 (`eslint-config-next`)

## Project Structure

```text
.
├── app/                # App Router pages, layout, and global styles
├── features/           # Feature-based modules (about, projects, contact, etc.)
├── shared/             # Shared components, hooks, utils, and types
├── styles/             # Global and shared styles
├── public/             # Static assets
├── AGENTS.md           # Agentic development rules and guidelines
├── ARCHITECTURE.md     # Folder structure, naming conventions, and code rules
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
- `DESIGN.md` *(planned)* — UI/UX and visual design guidelines (How the website should look and feel, including design tokens and UI consistency.)
