# ARCHITECTURE.md

## 1. Architecture Pattern

We follow a **Feature-Based Architecture** to organize the codebase.

- Organize files and components based on their features and responsibilities rather than grouping everything by file type.
- Each feature should have its own dedicated directory.
- Keep feature-specific components, hooks, utilities, types, and related logic within their respective feature directories.
- Shared components, utilities, hooks, and types that are used across multiple features should be placed in a centralized `shared` directory.
- Maintain clear separation of concerns and avoid unnecessary dependencies between features.

## 2. Folder Structure

```text
.
├── app/                    # Routing, layouts, metadata, and globals.css (theme tokens)
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── blog/
│       └── [slug]/
│           └── page.tsx
├── components/
│   └── ui/                 # shadcn/ui primitives (@/components/ui)
├── features/               # One folder per page section/domain
│   ├── about/
│   │   ├── components/
│   │   └── index.ts
│   ├── projects/
│   │   ├── components/
│   │   └── index.ts
│   └── contact/
│       ├── components/
│       ├── api/            # Form submission handler
│       └── index.ts
├── lib/                    # Core library utilities (@/lib, e.g., utils.ts)
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── types/
│
└── styles/                 # Additional shared CSS modules/tokens if needed
```

### Structure Rules

- `app/` handles routing and global setup (`layout.tsx`, `globals.css`). Put UI and domain logic in `features/`.
- `components/ui/` holds reusable shadcn/ui base primitives configured via `components.json`; `lib/` holds core helpers (such as `cn` in `lib/utils.ts`).
- A feature owns its components, hooks, and types. Other code imports from the feature's `index.ts` only, never from its internals.
- Features must not import from other features. If domain code is needed by two or more, move it to `shared/`.
- Create subfolders (`hooks/`, `types/`, `api/`) only when needed. Don't add empty ones.

## 3. Naming Conventions

Follow consistent and descriptive naming conventions throughout the project.

| Element | Convention | Example |
| --- | --- | --- |
| React Components | PascalCase | `Header.tsx`, `AboutSection.tsx` |
| Hooks | camelCase with `use` prefix | `useScroll.ts` |
| Utility Functions | camelCase | `formatDate.ts` |
| Variables | camelCase | `userProfile` |
| Functions | camelCase | `getUserDetails` |
| Constants | UPPER_SNAKE_CASE | `API_BASE_URL` |
| Types & Interfaces | PascalCase | `UserProfile.ts` |
| Directories | kebab-case | `about-section/` |

Use meaningful names that clearly communicate the purpose and responsibility of each file, component, or function.
