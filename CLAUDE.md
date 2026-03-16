# CLAUDE.md — Project Context for AI-Assisted Development

> This file provides context for Claude Code and other AI agents working on this codebase.

## Project Overview

**Olli's Astro Club** (`www.ollis-astro-club.com`) — A fun astronomy and space website for kids (3rd grade+) and all ages. Run as an astronomy club ("Astronomie AG") at Michaelschule in Groß Reken, Germany, by Oliver Schafeld.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with TypeScript
- **React:** 19.x with React Server Components
- **Styling:** Tailwind CSS 4 + hand-drawn design system (see `AI_DOCS/DESIGN.md`)
- **Auth:** Auth0 (integrated from the start; hardcoded admin dummy for initial dev)
- **CMS:** Sanity.io headless CMS (fresh project, to be set up)
- **Validation:** Zod (planned)
- **i18n:** German (primary) + English — language selection persisted
- **Hosting:** Ionos VPS with MySQL database (fresh, to be set up)

## Key Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
app/                    # Next.js App Router pages and layouts
  layout.tsx            # Root layout (lang: de)
  page.tsx              # Homepage — astronomy tips, links, resources
  globals.css           # Global styles (Tailwind)
  page.css              # Homepage-specific styles
  zufallszahlen/        # "Wheel of Fortune" random number feature
public/                 # Static assets (logo, SVGs)
AI_DOCS/                # Planning and design documentation
  TASK.md               # Project requirements and AI task description
  DESIGN.md             # Hand-drawn design system specification
  ARCHITECTURE.md       # Technical architecture decisions
  CONTENT_PLAN.md       # Content structure and route planning
  TECH_STACK.md         # Detailed tech stack decisions
  ROADMAP.md            # Phased implementation plan
  NOTES.md              # Human developer notes
```

## Architecture Principles

- **Bilingual:** All user-facing content must support German and English (i18n)
- **Mobile-first:** Responsive, usable on slow mobile connections
- **Microfrontend-ready:** Architecture should allow integrating other frameworks and closed-source components
- **Dark/light mode:** User preference persisted
- **Accessibility:** Age-appropriate, child-friendly UI
- **Performance:** Prefer React Server Components; minimize client-side JS

## Design System

The design follows a **hand-drawn/sketch aesthetic** — see `AI_DOCS/DESIGN.md` for full specification. Key points:
- Fonts: Kalam (headings), Patrick Hand (body)
- Wobbly borders with irregular border-radius
- Hard offset shadows (no blur)
- Paper texture backgrounds
- Colors: warm paper `#fdfbf7`, pencil black `#2d2d2d`, red accent `#ff4d4d`, blue accent `#2d5da1`

## Conventions

- **Language:** TypeScript strict mode
- **Components:** React Server Components by default; use `'use client'` only when needed
- **Styling:** Tailwind CSS utility classes + design tokens from `AI_DOCS/DESIGN.md`
- **File naming:** kebab-case for routes, PascalCase for components
- **i18n keys:** Use a flat namespace with dot notation (e.g., `nav.home`, `games.asteroids.title`)

## Current State

The project is in early development. Existing pages:
1. **Homepage** (`app/page.tsx`) — Astronomy tips: podcasts, star chart apps, videos, telescopes, excursion tips, links
2. **Zufallszahlen** (`app/zufallszahlen/page.tsx`) — An animated wheel-of-fortune with space theme

These need to be migrated into the new design system and integrated into a proper navigation structure.

## Important Notes

- The logo at `public/logo-astro-club-300x300.png` must always be used
- Content is suitable for children — keep language and themes age-appropriate
- The site targets a German school audience primarily; English is secondary
- See `AI_DOCS/ROADMAP.md` for the planned implementation phases
