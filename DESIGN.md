# Design System

Visual rules for the portfolio. Source of truth for tokens: `app/globals.css`. If this file and the CSS disagree, the CSS wins; update this file.

## Principles

- Warm, calm, editorial. Cream canvas, brown type, one accent.
- Coral is used sparingly. If everything is highlighted, nothing is.
- Use tokens, never raw values. No hardcoded hex, px spacing, or radii in components.
- Use shadcn/ui components first (`components/ui/`), restyled through the tokens below.

## Colors

### Brand

| Token | Value | Use |
| --- | --- | --- |
| `--brand-cream`, `--background` | `#fcf2e5` | Page canvas |
| `--brand-brown`, `--text-primary` | `#524646` | Headings, primary text, dark elements |
| `--text-secondary` | `#6b5e5e` | Body copy, descriptions |
| `--brand-warm-gray`, `--text-muted` | `#a8a492` | Muted labels, subtext |
| `--brand-coral`, `--primary` | `#ec5b38` | Active states, primary CTA buttons, links, data-flow highlights |

### Surfaces and borders

| Token | Value | Use |
| --- | --- | --- |
| `--surface-low`, `--accent` | `#f9efe0` | Inset blocks, code panes, shadcn subtle hover/menu surfaces |
| `--surface-elevated` | `#ffffff` | Cards, rail tooltips, floating pills |
| `--border-subtle` | `rgba(82, 70, 70, 0.1)` | Default dividers and card borders |
| `--border-strong` | `rgba(82, 70, 70, 0.2)` | Emphasized borders, hover/focus edges |

### Color rules

- Coral: one primary CTA per view, plus links and active states. Not for large fills or body text.
- Text hierarchy: primary for headings, secondary for body, muted for labels only.
- Muted gray and coral have low contrast on cream (roughly 2.3:1 and 3:1). Use them for large text, icons, and non-essential labels, not for body-size text that carries meaning.

## Typography

| Role | Font | Token |
| --- | --- | --- |
| Headings, body, navigation | Inter | `--font-sans` |
| Metrics, tech tags, code, section indices | JetBrains Mono | `--font-mono` |

Load both with `next/font/google` in `app/layout.tsx` and expose them as `--font-sans` and `--font-mono`.

### Fluid scale

| Style | Size | Weight |
| --- | --- | --- |
| Display | `clamp(2.5rem, 5.5vw, 4rem)` (40 to 64px) | 700 |
| H1 | `clamp(2rem, 4vw, 3rem)` (32 to 48px) | 600 |
| H2 | `clamp(1.5rem, 2.6vw, 2rem)` (24 to 32px) | 600 |
| H3 | `clamp(1.25rem, 2vw, 1.5rem)` (20 to 24px) | 600 |
| Large body | `clamp(1.125rem, 1.4vw, 1.25rem)` (18 to 20px) | 400 |
| Body | `1rem` (16px) | 400 |
| Code / small | `clamp(0.8125rem, 1vw, 0.875rem)` (13 to 14px) | 400 |

Use the scale as defined. Don't introduce one-off font sizes.

## Spacing, Layout, and Radii

- **Spacing:** Tailwind's built-in 4px modular spacing scale (`1` = 4px up to `32` = 128px; e.g., `p-4`, `gap-6`).
- **Container:** max width `1200px` (`--container-max`). Gutters: `32px` desktop, `20px` mobile.
- **Section rhythm:** `clamp(80px, 10vw, 128px)` (`--section-y`) between major sections.

| Token | Value | Use |
| --- | --- | --- |
| `--radius-sm` | 4px | Tags, buttons |
| `--radius-md` | 8px | Inputs, controls |
| `--radius-lg` | 12px | Cards, floating containers |

## Shadows

- `--shadow-soft`: `0 4px 20px rgba(82, 70, 70, 0.05)`. Default resting cards.
- `--shadow-lift`: `0 8px 28px rgba(82, 70, 70, 0.09)`. Hover and floating elements.

Prefer borders plus soft shadow over heavy shadows.

## Component Guidelines

- Build on shadcn/ui (`components/ui/`, `base-nova` / `@base-ui/react`); map its variables (`--background`, `--primary` to coral, `--accent` to `--surface-low`, `--border`, `--radius`) to the tokens above in `app/globals.css`.
- Icons: `lucide-react` (configured in `components.json`).
- Animation: `motion` (`motion/react`); prefer GPU-composited properties (`transform`, `opacity`) and respect reduced-motion preferences.
- Buttons: `--radius-sm`. Primary is coral; secondary is outlined with `--border-strong`.
- Cards: `--surface-elevated`, `--border-subtle`, `--radius-lg`, `--shadow-soft`, lifting to `--shadow-lift` on hover.
- Code blocks and inset panels: `--surface-low` with `--font-mono`.
- Tech stack tags and section indices: `--font-mono`, `--radius-sm`.

## Responsive

- Mobile first. Use the fluid type scale rather than per-breakpoint font sizes.
- Check every UI change at mobile (about 375px) and desktop (about 1280px).

## Rules for the Agent

- Read `app/globals.css` before styling. Reuse existing tokens; ask before adding new ones.
- No raw hex, rgba, or arbitrary Tailwind values (`text-[#ec5b38]`) when a token exists.
- Don't add a second accent color, font, or component library.
- Keep contrast in mind: body-size text must stay readable on cream.

## TODO (not yet decided)

- Dark mode: supported or not?
- Motion: durations, easing, and which elements animate.
- Focus and hover state styles.
