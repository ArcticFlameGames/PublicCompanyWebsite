# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server at http://localhost:5173
npm run build    # Production build to /dist
npm run preview  # Preview production build locally
npm test         # Vitest test runner
```

Tailwind CSS is handled by the `@tailwindcss/vite` plugin — no separate CSS compilation step needed.

## Architecture

React 19 SPA with TypeScript, Tailwind CSS v4, and React Router DOM v7. Built with Vite 6. Deployed on Netlify — `public/_redirects` handles SPA route fallback.

**Routing** (`src/App.tsx`):
- `/` — Home landing page, composed of section components
- `/account-deletion` — standalone policy page

**Home page sections** (rendered top to bottom):
- `NavBar` — fixed nav with anchor links to `#home`, `#games`, `#founders`
- `HeroSection` — hero banner
- `GameSection` — reused twice: "Arcanus Legends" (Steam) and "Pack It!" (Google Play)
- `CompanyStorySection` — studio narrative
- `FoundersSection` — founder profiles grid
- `SocialMediaSection` — Discord + YouTube
- `Footer`

All components are functional React with TypeScript interfaces for props. Tailwind utility classes for all styling — no CSS modules or styled-components.

Tailwind v4 config: `src/input.css` uses `@import "tailwindcss"` (no `tailwind.config.js`). CSS is imported in `src/index.tsx`.

Static assets (game screenshots, founder photos, logo) live in `public/images/`.
