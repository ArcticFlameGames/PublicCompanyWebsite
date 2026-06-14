---
name: ui-review
description: >
  Visual UI/UX review using Playwright MCP. Starts the dev server, takes screenshots
  of every page section, evaluates layout/accessibility/visual hierarchy, and delivers
  a prioritized list of issues with file:line fixes. Triggers when user says "ui review",
  "screenshot review", "review the UI", "check how the site looks", or "/ui-review".
---

## Purpose

Take live screenshots of the running site, evaluate them against the source code, and report
UI/UX issues with actionable fixes. Requires Playwright MCP (`playwright` server in `.mcp.json`).

## Steps

### 1. Start dev server

Check if dev server is already running on port 5173. If not, start it:

```bash
npx vite --port 5173
```

Wait for "Local: http://localhost:5173" in output before proceeding.

### 2. Capture screenshots

Use `mcp__playwright__browser_navigate` and `mcp__playwright__browser_screenshot` to capture:

| Target | URL / action |
|--------|-------------|
| Full homepage (desktop) | `http://localhost:5173/` — viewport 1440×900 |
| Full homepage (mobile) | same URL — viewport 375×812 |
| Hero section | scroll to `#home` |
| Games section | scroll to `#games` |
| Story section | scroll to `#story` |
| Founders section | scroll to `#founders` |
| Socials + Footer | scroll to `#socials` |
| Account deletion page | `http://localhost:5173/account-deletion` |

Use `mcp__playwright__browser_scroll_down` between sections. For mobile: resize viewport then re-navigate.

### 3. Evaluate each screenshot

For each screenshot, evaluate against these axes:

**Visual Hierarchy** — Does the eye know where to go? Clear H1 > H2 > body size contrast?  
**Spacing & Layout** — Padding consistent? Content not crammed or too sparse?  
**Color & Contrast** — WCAG AA minimum (4.5:1 text, 3:1 large text). Brand colors used consistently?  
**Typography** — Font sizes appropriate per breakpoint? Line-height readable?  
**Mobile UX** — Touch targets ≥ 44×44px? No horizontal overflow? Nav usable on small screen?  
**CTA Clarity** — Are primary actions obvious? Buttons look clickable?  
**Image Quality** — No stretched/distorted images? Alt text present?  
**Accessibility** — Icon-only links have labels? Form inputs have labels?  
**Consistency** — Same section style across repeated components (e.g. GameSection)?  

### 4. Cross-reference source

For each issue found in screenshots, read the relevant component file to identify the exact
Tailwind class or prop causing the problem. Cite `file:line`.

Key files:
- `src/components/NavBar.tsx`
- `src/components/HeroSection.tsx`
- `src/components/GameSection.tsx`
- `src/components/CompanyStorySection.tsx`
- `src/components/FounderSection.tsx`
- `src/components/SocialMediaSection.tsx`
- `src/components/Footer.tsx`
- `src/App.tsx` (section wrappers)

### 5. Report

Output a prioritized issue list:

```
## UI/UX Review — <date>

### 🔴 Critical (broken UX)
- [Component:line] Issue. Fix.

### 🟡 High (hurts conversion/trust)
- [Component:line] Issue. Fix.

### 🔵 Polish (nice to have)
- [Component:line] Issue. Fix.

### Screenshots
Embed or reference each screenshot taken.
```

**Severity guide:**
- 🔴 Critical: broken layout, inaccessible content, missing nav on mobile, WCAG fail on body text
- 🟡 High: weak CTA, inconsistent branding, missing labels on social icons, outdated copyright
- 🔵 Polish: minor spacing, color fine-tuning, animation suggestions

After reporting: ask "Want me to fix any of these?" — do not auto-fix unless asked.

## Playwright tool reference

```
mcp__playwright__browser_navigate(url)
mcp__playwright__browser_screenshot(name, fullPage)
mcp__playwright__browser_resize(width, height)
mcp__playwright__browser_scroll_down()
mcp__playwright__browser_click(element, ref)
mcp__playwright__browser_close()
```

## Fallback (no Playwright MCP)

If Playwright MCP is not available (tools not loaded), report that from the source code:

1. List all layout/UX issues visible in the code (class names, missing attributes, copy errors)
2. Note which need visual verification
3. Tell user to add `.mcp.json` with `@playwright/mcp@latest` and restart Claude Code
