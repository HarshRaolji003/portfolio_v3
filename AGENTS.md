# Agent Guidelines

## Project Overview

See [README](./README.md) for the project overview, tech stack, and scripts. Read it only when needed, not on every task.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Node Version

This project pins its Node.js version in `.nvmrc` (currently v24.12.0). Always run `nvm use` before executing any script or command to ensure the correct version is active.

## Project Documentation

Use project documentation as a reference when relevant to the task. Do not read every documentation file by default.

- [ARCHITECTURE.md](./ARCHITECTURE.md): Consult when creating features, modifying folder structures, organizing components, changing code organization, or making architectural decisions.
- [DESIGN.md](./DESIGN.md): Consult when creating or modifying UI components, page layouts, styling, responsive behavior, or making visual design decisions.

## Rules

Read only the rules relevant to the current task.

- code-quality.md: Code quality principles and general development rules.
- components.md: Component design and reusability guidelines.
- performance.md: Performance and optimization guidelines.

## Core Behaviors

- First, understand the scope of the task and identify which guidelines are relevant.
- Read only the documentation needed for the current task.
- Follow the existing codebase patterns and applicable project guidelines.
- If a task involves both architecture and UI design, consult both documents.
- For simple changes that do not affect architecture or design, avoid unnecessary documentation reads.
- If a required document does not exist, proceed using established project patterns unless clarification is necessary.
