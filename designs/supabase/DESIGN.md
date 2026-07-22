---
version: alpha
name: Supabase-design-analysis
description: Dark-first developer infrastructure with one unmistakable signature — the Supabase green (#3ecf8e) burning against a flat near-black neutral field. The gray system is strictly desaturated (pure 0-saturation steps from #171717 to #ededed), surfaces separate by alpha-white hairlines rather than shadows, and typography stays workmanlike (Circular for headings, system-adjacent body, Source Code Pro for the ever-present code). Marketing pages read like the product — terminal panels, schema tables, and SQL snippets are the imagery, and green is reserved for actions and proof points.
colors:
  brand: "#3ecf8e"
  brand-deep: "#00c46b"
  brand-tint: "#0f2c20"
  canvas: "#121212"
  surface-low: "#171717"
  surface: "#1f1f1f"
  surface-raised: "#212121"
  surface-high: "#292929"
  ink: "#ededed"
  body: "#a0a0a0"
  muted: "#7e7e7e"
  quiet: "#707070"
  hairline: "#2e2e2e"
  hairline-strong: "#3e3e3e"
  hairline-veil: "#ffffff14"
  overlay-soft: "#ffffff08"
  on-brand: "#0a0a0a"
  inverse: "#fcfcfc"
  on-inverse: "#171717"
  warning: "#f59e0b"
  error: "#ef4444"
typography:
  display-xl:
    fontFamily: "Circular, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -0.015em
  display-lg:
    fontFamily: "Circular, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.01em
  display-md:
    fontFamily: "Circular, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.01em
  title-lg:
    fontFamily: "Circular, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "Circular, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Circular, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Circular, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: "Circular, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  code:
    fontFamily: "Source Code Pro, Office Code Pro, Menlo, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  button:
    fontFamily: "Circular, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Circular, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  pill: 9999px
  full: 9999px
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 0 16px
    height: 38px
  button-secondary:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 0 16px
    height: 38px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.brand-deep}"
    typography: "{typography.body-sm}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 96px
  feature-card:
    backgroundColor: "{colors.surface-low}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-frame:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
  code-block:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 16px
  badge-pill:
    backgroundColor: "{colors.brand-tint}"
    textColor: "{colors.brand}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 2px 10px
  text-input:
    backgroundColor: "{colors.surface-low}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 0 12px
    height: 38px
  stat-highlight:
    backgroundColor: transparent
    textColor: "{colors.brand}"
    typography: "{typography.display-md}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Supabase's marketing surface is dark-first developer minimalism with a single loud signal. The neutral field is **strictly desaturated** — their gray scale runs at exactly 0% saturation from `{colors.surface-low}` (#171717) through `{colors.ink}` (#ededed) — so the brand green (`{colors.brand}` — #3ecf8e, with the deeper link green `{colors.brand-deep}` #00c46b) owns every drop of chroma on the page. Green means action: primary buttons, links, live-status dots, proof-point numbers. Nothing else gets color beyond semantic warnings.

Surfaces stack like the Linear school — lighter step = higher layer — but flatter and quieter: cards sit one step above canvas with alpha-white hairlines (`{colors.hairline-veil}`), and shadows are nearly absent. The imagery *is* the product: SQL snippets, schema tables, dashboard frames, and terminal output, all in **Source Code Pro**. Headings run in **Circular** (licensed, Lineto) at medium 500 — never bold — which keeps the voice technical and even.

**Key Characteristics:**
- One chromatic signal: Supabase green on a 0-saturation dark field; green = interactive or proof, never decoration.
- Gray scale of pure neutrals (#171717 → #ededed) with alpha-white hairlines for edges; minimal shadow use.
- Circular at weight 500 for all headings (display to titles); body 400/1.6; code everywhere via Source Code Pro.
- Compact 38px controls with `{rounded.md}` (6px); cards `{rounded.lg}`–`{rounded.xl}` (8–12px); pills for badges only.
- Marketing pages composed from product artifacts — code blocks, table UIs, dashboard frames in `{component.product-frame}`.
- A light theme exists behind a toggle (their gray-light scale is documented in CSS); the default, captured surface is dark.

## Colors

### Brand
- **Brand** (`{colors.brand}` — #3ecf8e): the Supabase green — primary buttons (`{component.button-primary}` with near-black `{colors.on-brand}` text), status dots, stat highlights, logo.
- **Brand Deep** (`{colors.brand-deep}` — #00c46b, their `--brand-link` at hsl(155 100% 38.6%)): inline links and hover-direction green.
- **Brand Tint** (`{colors.brand-tint}` — #0f2c20): green-washed badge and callout fills.

### Surface (pure neutrals)
`{colors.canvas}` #121212 page floor → `{colors.surface-low}` #171717 (cards, inputs) → `{colors.surface}` #1f1f1f → `{colors.surface-raised}` #212121 (code blocks, buttons) → `{colors.surface-high}` #292929 (hover direction, top layers). All exactly 0% saturation — no blue or warm cast.

### Text & Borders
- `{colors.ink}` #ededed headlines/labels · `{colors.body}` #a0a0a0 running text · `{colors.muted}` #7e7e7e secondary · `{colors.quiet}` #707070 metadata.
- `{colors.hairline}` #2e2e2e and `{colors.hairline-strong}` #3e3e3e solid borders; `{colors.hairline-veil}` (#ffffff14) for glass edges on raised panels; `{colors.overlay-soft}` (#ffffff08) hover washes.
- `{colors.inverse}` / `{colors.on-inverse}`: the rare light elements (e.g., inverted CTA moments).

### Semantic
`{colors.warning}` #f59e0b, `{colors.error}` #ef4444 — documentation callouts and product UI; the marketing chrome stays green-or-neutral.

## Typography

### Font Family
**Circular** (Lineto — licensed) for all headings and UI text, falling back through Helvetica Neue. **Source Code Pro** (free) for code, terminals, and inline technical strings. Body text effectively rides the Circular→Helvetica stack at 400.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 500 | 1.08 | -0.015em | Homepage h1 ("Build in a weekend, scale to millions") |
| `{typography.display-lg}` | 44px | 500 | 1.1 | -0.01em | Section heads |
| `{typography.display-md}` | 32px | 500 | 1.15 | -0.01em | Sub-sections, stats |
| `{typography.title-lg}` | 24px | 500 | 1.3 | 0 | Card titles |
| `{typography.title-md}` | 18px | 500 | 1.4 | 0 | Feature titles |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Running text |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | Secondary copy, footer |
| `{typography.caption}` | 12px | 400 | 1.4 | 0 | Badges, metadata |
| `{typography.code}` | 14px | 400 | 1.6 | 0 | Code — Source Code Pro |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | Buttons |
| `{typography.nav-link}` | 14px | 400 | 1.4 | 0 | Nav |

### Principles
Medium-weight headline discipline: Circular 500 across every display size — Supabase never shouts with 700. Hierarchy lives in the neutral ramp and in green proof-points. Code type appears *inside* marketing copy constantly; treating Source Code Pro as a first-class display voice is part of the brand.

### Note on Font Substitutes
**Circular is a licensed typeface** (Lineto). Cross-platform substitutes: **Inter** at 500 (cooler, very close in width) or **DM Sans** at 500 (rounder, closer to Circular's geometry). Source Code Pro is free — use directly.

## Layout

### Spacing System
8px base: `{spacing.xs}` 8 · `{spacing.sm}` 12 · `{spacing.md}` 16 · `{spacing.lg}` 24 · `{spacing.xl}` 32 · `{spacing.xxl}` 48 · `{spacing.section}` 96. Controls at 38px; cards pad `{spacing.lg}`.

### Grid & Container
Max content ~1152px. Hero: centered or left headline + code/dashboard artifact. Product grid: 2–3-up `{component.feature-card}` tiles, each themed per product area (Database/Auth/Storage/Edge Functions/Realtime/Vector) with its icon and mini-diagram. Footer: 5-column link grid on canvas.

### Whitespace Philosophy
Dense-technical: 96px between bands but tight inside panels; long pages alternate text bands with full-width product frames. The darkness carries the spacing — gaps read larger than they measure.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Floor | `{colors.canvas}` | Page |
| Card | `{colors.surface-low}` + `{colors.hairline}` 1px | Feature tiles, inputs |
| Raised | `{colors.surface-raised}` + `{colors.hairline-veil}` | Code blocks, hover layers |
| Frame | `{colors.surface}` + `{colors.hairline-strong}` | Dashboard/product frames |
| Glow | faint green ambient behind hero artifacts | The only "shadow" with color |

No drop-shadow language to speak of — edges are alpha-white hairlines; elevation is one gray step.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 4px | Inline code chips, small controls |
| `{rounded.md}` | 6px | Buttons, inputs — workhorse |
| `{rounded.lg}` | 8px | Cards, code blocks |
| `{rounded.xl}` | 12px | Product frames, large tiles |
| `{rounded.pill}` | 9999px | Badges ("New", "Beta", "GA") |
| `{rounded.full}` | 9999px / 50% | Avatars, status dots |

## Components

**`top-nav`** — Dark 64px bar: logo + wordmark left, products/developers/pricing menu in `{typography.nav-link}`, right cluster GitHub stars chip + "Sign in" `{component.button-secondary}` + "Start your project" `{component.button-primary}`. Hairline bottom edge.

**`button-primary`** — The green CTA: `{colors.brand}` fill, `{colors.on-brand}` (near-black) label, 38px, `{rounded.md}`. Pressed state deepens toward `{colors.brand-deep}`.

**`button-secondary`** — `{colors.surface-raised}` fill, ink label, `{colors.hairline-strong}` border, same geometry.

**`text-link`** — `{colors.brand-deep}` inline links.

**`hero-band`** — Canvas floor, display-xl in ink, sub-copy in `{colors.body}`, green/secondary button pair, then a `{component.product-frame}` (dashboard table view) or `{component.code-block}` artifact, often with a faint green ambient glow.

**`feature-card`** — `{colors.surface-low}` tile, `{rounded.lg}`, `{spacing.lg}` padding: product-area icon, `{typography.title-md}` name, body-sm description in `{colors.body}`, mini UI artifact or diagram inside; hairline border, hover raises one gray step (direction only).

**`product-frame`** — Dashboard captures (table editor, SQL editor, auth screens) in `{colors.surface}` frames with `{colors.hairline-strong}` borders, `{rounded.xl}`.

**`code-block`** — `{colors.surface-raised}` panel, Source Code Pro 14, green-accented syntax; language tab row on top. Appears in heroes, feature tiles, and docs-style sections alike.

**`badge-pill`** — `{colors.brand-tint}` fill with `{colors.brand}` caption text: "New", launch-week tags, product status.

**`text-input`** — `{colors.surface-low}`, hairline border, 38px, `{rounded.md}`; focus ring in `{colors.brand}` (direction).

**`stat-highlight`** — Display-md numbers in `{colors.brand}` with muted captions ("databases launched", GitHub stars).

**`footer`** — Canvas, hairline top, 5 columns body-sm in `{colors.muted}`, status indicator with green dot, theme toggle.

## Do's and Don'ts

### Do
- Keep neutrals at exactly 0% saturation; the field must be colorless for the green to work.
- Reserve green for actions, links, status, and proof-point numbers — green backgrounds only as `{colors.brand-tint}` washes behind green text.
- Put near-black text on green buttons (`{colors.on-brand}`), never white.
- Use real product artifacts (SQL, tables, dashboard frames) as imagery; Source Code Pro is a brand voice, not just a code style.
- Keep headings at Circular 500; let scale and green carry emphasis.
- Edge raised surfaces with alpha-white hairlines instead of shadows.

### Don't
- Don't tint grays blue or warm — desaturation is the system's temperature.
- Don't use green decoratively (large green surfaces, green gradients on hero type).
- Don't bold headings to 700 or drop display below 500.
- Don't stack more than one gray step per elevation change.
- Don't round controls past 6px or cards past 12px; pills are for badges and dots only.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hamburger nav; display-xl → ~32–36px; tiles 1-up; code blocks horizontal-scroll |
| Tablet | 640–1024px | 2-up tiles; nav collapses secondary items |
| Desktop | 1024–1440px | 3-up product grid, full frames |
| Wide | > 1440px | Content capped ~1152px |

### Touch Targets
38px controls grow to 44px effective on touch; status dots/badges are non-interactive.

### Collapsing Strategy
Product tiles reduce columns before shrinking; dashboard frames switch to single-panel crops on mobile; code blocks keep size and scroll horizontally.

## Iteration Guide

1. One component at a time by key (`{component.feature-card}`, `{component.code-block}`).
2. Variants as separate entries; no hover documentation (hover directions noted as prose only).
3. `{token.refs}` everywhere — never inline hex.
4. Adding emphasis: first a gray step, then green text, then a green stat — never a new hue.
5. If a surface needs an edge, use `{colors.hairline-veil}` before any shadow.
6. Code samples are content, not decoration — keep them real and runnable-looking.

## Known Gaps

- **Light theme not documented**: supabase.com defaults to dark (captured here as `colors`); a full light theme exists behind a toggle (their `gray-light` scale was visible in CSS). Our format currently documents the default theme plus an optional `colors-dark` set — for dark-default sites the light variant has no slot; a `colors-light` extension is a candidate format amendment.
- **Brand scale partially resolved**: `--brand-link` was captured as HSL (155 100% 38.6% → #00c46b); the hallmark #3ecf8e (brand-500) is documented from Supabase's published brand assets, as the JS-injected brand HSL components weren't in the static CSS.
- **Radius and spacing scales are observational** (composed from rendered UI patterns, not named tokens in the captured CSS).
- **Circular weight mapping**: Circular's "Book/Medium" cuts map approximately to 400/500; the site serves a custom-font binary whose exact cuts weren't inspected.
- **Animation** (globe, launch-week effects, marquee logos) out of scope.
- **Dashboard/product UI** (the actual Supabase Studio) is a separate dashboard-surface analysis — high-value future entry, especially given our own stack uses it.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/supabase/design-md -->
