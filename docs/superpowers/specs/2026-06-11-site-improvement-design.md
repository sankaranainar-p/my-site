# Site Improvement Design — sankaranainar.dev
**Date:** 2026-06-11  
**Status:** Approved  
**Priority:** Engineering leadership visibility → Research credibility → Speaking authority

---

## Context

The site is currently a Vite + React SPA (not Next.js). It has a working dark/light mode, basic react-helmet-async SEO, a JSON-LD Person schema on the home page, and solid content across Home, Research, Certifications, Projects, and Contact pages. The primary gaps are:

1. **No SSR** — Googlebot sees empty HTML on first load; SPA indexing is unreliable for authority signals
2. **No per-page structured data** — only a Person schema on the home page
3. **Missing og-image** — referenced in SEO.jsx but the file does not exist in `/public`
4. **Performance** — fonts load from system fallbacks (never loaded), images lack explicit dimensions and lazy loading
5. **Visual design** — current dark aesthetic reads as "developer portfolio"; switching to Editorial Light signals intellectual authority more appropriate for the D→C→B audience priority
6. **Content gaps** — 4 peer review conferences found in EB-1A prep folders not yet on the site (fixed during brainstorm: EDUCON 2026, ETNCC 2026, IWIN 2026, IEEE ICCA 2026; totals updated to 51+ papers / 19 conferences)

---

## Goals

| Priority | Goal |
|---|---|
| 1 | Engineering leadership visibility — recruiters, VCs, FinTech peers find a credible leader |
| 2 | Research credibility — academics and industry researchers see a serious publishing record |
| 3 | Speaking authority — conference PCs see a proven speaker with clear topic areas |

---

## Architecture

### Framework Migration: Vite → Next.js 14 (App Router)

**Why:** SSR/SSG gives Googlebot full HTML on first load. Next.js `<Image>`, `next/font`, and the Metadata API eliminate the three biggest performance and SEO gaps simultaneously. Vercel deployment is identical.

**File mapping:**

| Current (Vite) | Next.js App Router |
|---|---|
| `src/pages/Home.jsx` | `app/page.tsx` |
| `src/pages/Research.jsx` | `app/research/page.tsx` |
| `src/pages/Projects.jsx` | `app/projects/page.tsx` |
| `src/pages/Certifications.jsx` | `app/certifications/page.tsx` |
| `src/pages/Contact.jsx` | `app/contact/page.tsx` |
| `src/components/Navbar.jsx` | `app/components/Navbar.tsx` (used in root layout) |
| `src/components/Footer.jsx` | `app/components/Footer.tsx` (used in root layout) |
| `src/components/SectionWrapper.jsx` | `app/components/SectionWrapper.tsx` |
| `src/App.jsx` | `app/layout.tsx` (root layout with ThemeProvider) |
| `src/index.css` | `app/globals.css` |

**Removed dependencies:** `react-router-dom`, `react-helmet-async`, `@vitejs/plugin-react`, `vite`

**Added dependencies:** `next`, `next/font` (built-in), `next/image` (built-in)

**Kept unchanged:** `tailwindcss`, `postcss`, `autoprefixer`, `react`, `react-dom`, `tailwind.config.js`, all component logic

**`vercel.json`:** Remove existing rewrite rules — App Router handles routing natively.

---

## Visual Design — Editorial Light

### Design Direction
Light-first (white `#FAFAFA` background, `#0A0A0A` text), dark mode remains as a toggle. No typewriter animation on the hero — replaced with a static confident tagline. Card borders change from blue (`brand-600`) to black (`#0A0A0A`). Typography tightened throughout with Inter 900 weight for headings.

### Homepage Hero
- **Role label:** `Software Engineering Manager · Mastercard` — small caps, no decorative dash rule
- **Name:** 46px / weight 900 / letter-spacing -0.04em, two lines
- **Tagline:** "Engineering leader building agentic AI systems at scale. IEEE Senior Member. Independent researcher in Agentic AI, AI Solutioning and FinTech engineering."
- **Credential pills:** ORCID (green), IEEE Senior Member (blue) — inline below tagline
- **CTAs:** "View Research →" (black filled), "Get in Touch" (outlined)
- **Stats card:** compact card to the right of the photo — 15+ years, 5+ publications, 51+ reviews — visible above the fold
- **Focus strip:** horizontal keyword band between hero and credentials: `Agentic AI · AI Solutioning · AIOps · FinTech Engineering · Distributed Systems · MLOps · CI/CD Modernization`

### Navigation
- Logo: uppercase wordmark `SANKARANAINAR PARMASIVAN` (no SP box)
- Active state: underline, not dot indicator
- Dark mode toggle: `☀ / ☾` text button
- Mobile drawer: white background, larger tap targets

### Research Page
- Section headings with em-dash prefix: `— Publications`, `— Speaking`, `— Peer Reviews`
- Publication cards: venue + year on one monospace line, DOI as `↗` link
- Peer review section: total counter badge `19 venues · 51+ papers`

### Colour tokens (carried into Tailwind config)
No changes to the existing token set. Add `black: '#0A0A0A'` as a named token for the editorial card borders.

---

## SEO & Structured Data

### Per-page JSON-LD schemas (added via Next.js `<script type="application/ld+json">` in page metadata)

| Page | Schema type | Key fields |
|---|---|---|
| `/` | `Person` (existing, extended) | Add `hasOccupation`, `knowsAbout` expanded, `alumniOf` with degree detail, Google Scholar in `sameAs` |
| `/research` | `ScholarlyArticle` × per published paper | `name`, `author`, `publisher` (IEEE), `datePublished`, `url` (DOI) |
| `/research` | `Event` × per conference talk | `name`, `location`, `organizer`, `startDate` |
| All pages | `BreadcrumbList` | `@id`, `name`, `item` per crumb |

### Technical SEO
- `app/sitemap.ts` — Next.js generates `/sitemap.xml` at build time with `lastModified` dates
- `app/robots.ts` — replaces static `public/robots.txt`
- `<html lang="en">` — added to root layout
- Canonical URLs via Next.js `alternates.canonical` in each page's `metadata` export
- OG tags via Next.js `metadata.openGraph` per page — no more react-helmet-async

### OG Image
- Static `public/og-image.png` (1200×630): Editorial Light style — white bg, black name, role, IEEE badge
- All pages share this image via the root layout metadata; individual pages can override

---

## Performance

### Images
- Profile photo: `next/image` with explicit `width`, `height`, `priority` (above-fold LCP element)
- IEEE logo: `next/image` with explicit dimensions
- All other images: `next/image` with `loading="lazy"` (default)
- Format: Next.js auto-converts to WebP on Vercel

### Fonts
- `next/font/google` for Inter (weights: 400, 500, 600, 700, 800, 900) and JetBrains Mono (weights: 400, 500)
- Fonts served from Next.js at build time — zero external requests, zero layout shift
- Remove `fontFamily` config from `tailwind.config.js` (handled by CSS variable from `next/font`)

### Core Web Vitals targets
- LCP < 2.5s (profile image preloaded, fonts inlined)
- CLS < 0.1 (explicit image dimensions, font display swap eliminated)
- No render-blocking resources

---

## Parallel Agent Work Tracks

The implementation is split into 4 independent tracks for parallel execution:

| Track | Scope | Agent |
|---|---|---|
| A — Next.js Migration + UI | Framework migration, Editorial Light redesign across all pages, Navbar/Footer updates, dark mode ThemeProvider | Agent 1 |
| B — SEO & Structured Data | JSON-LD schemas per page, Next.js Metadata API, sitemap.ts, robots.ts, OG image creation | Agent 2 |
| C — Performance | next/font, next/image, Tailwind config cleanup, Core Web Vitals audit | Agent 3 |
| D — Content & Credentials | Certifications page audit, Projects page audit, Research page typography polish, verify all peer review counts | Agent 4 |

Track A must complete before B, C, D can finalize (they need the App Router file structure). B, C, D are independent of each other and run in parallel after A lands.

---

## Out of Scope

- No new pages
- No CMS or database
- No contact form backend (mailto behaviour retained)
- No analytics integration
- No comment system

---

## Success Criteria

1. `next build` succeeds with zero errors
2. All 5 routes render full HTML without JavaScript (verify with `curl`)
3. `/sitemap.xml` returns valid XML with all 5 URLs and `lastmod` dates
4. Lighthouse score ≥ 90 on Performance, SEO, Accessibility on home page
5. `<script type="application/ld+json">` present on every page
6. OG image resolves at `https://sankaranainar.dev/og-image.png`
7. Dark mode toggle works; preference persists via `localStorage`
