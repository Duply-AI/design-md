---
version: alpha
name: CockroachLabs-design-analysis
description: "A confident enterprise-database brand built on a high-voltage electric purple primary (#6933ff) over white and near-black surfaces, accented with a bright cyan (#00fced) that reads like a circuit-trace highlight. The system pairs deep-tech credibility with vivid brand color — purple CTAs and headlines, cyan as a secondary energy accent, and dark near-black bands (#1b1920 / #101010) used to close and punctuate long marketing pages. NOTE: only the color palette was machine-measured; typography, spacing, radius, and component specs below are derived from reference screenshots and flagged accordingly."

colors:
  primary: "#6933ff"
  primary-alt: "#6833ff"
  primary-deep: "#4c2c9d"
  accent-cyan: "#00fced"
  accent-cyan-soft: "#1bf8ec"
  accent-blue: "#0037a5"
  accent-orange: "#f9a11b"
  accent-amber: "#f59e0b"
  accent-pink: "#ec4899"
  ink: "#000000"
  ink-soft: "#1b1920"
  surface-dark: "#101010"
  body: "#6d6d6d"
  muted: "#6d6d6d"
  hairline: "#cccccc"
  border-cool: "#c0c6d9"
  canvas: "#ffffff"
  surface-soft: "#f5f7fa"
  surface-card: "#f5f5f5"
  surface-alt: "#f8f8f8"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  error: "#dc150b"

typography:
  display-xl:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  display-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.2px
  title-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.2px
  button:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 24px
    height: 48px
  button-primary-active:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 24px
    height: 48px
  button-on-dark:
    backgroundColor: "{colors.accent-cyan}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 24px
    height: 48px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 72px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 96px
  hero-band-dark:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 96px
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  feature-card-soft:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-card-featured:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  badge-pill:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 48px
  cta-band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    rounded: "{rounded.lg}"
    padding: 48px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Cockroach Labs' marketing surface is an enterprise-database brand built on a high-voltage **electric purple** primary (`{colors.primary}` — #6933ff). Purple is the most-measured color in the system by a wide margin (frequency 183) — it carries the wordmark, the primary CTAs, headline accents, and link emphasis. The supporting voltage comes from a bright **cyan** (`{colors.accent-cyan}` — #00fced), which reads like a circuit-trace highlight against dark surfaces.

The system alternates between three surface families: white canvas (`{colors.canvas}` — #ffffff) for the default reading floor, soft cool-grays (`{colors.surface-soft}` — #f5f7fa, `{colors.surface-card}` — #f5f5f5) for cards, and near-black bands (`{colors.ink-soft}` — #1b1920, `{colors.surface-dark}` — #101010) used to punctuate and close long-scroll pages. On the dark bands, the cyan accent and white-on-purple buttons do the heavy lifting.

A secondary semantic/accent set was measured but appears sparingly: a deep brand blue (`{colors.accent-blue}` — #0037a5), an orange (`{colors.accent-orange}` — #f9a11b), amber (`{colors.accent-amber}` — #f59e0b), pink (`{colors.accent-pink}` — #ec4899), and a red used for errors/alerts (`{colors.error}` — #dc150b). These show up on diagram callouts, tag accents, and small data-viz moments — never on the primary action layer.

**IMPORTANT MEASUREMENT NOTE:** Only the color palette was machine-measured in analysis.json. Typography, spacing, radius, shadow, and component specs were **derived** from reference screenshots and standard SaaS baselines — every such value is flagged in its section and consolidated in Known Gaps. Treat color tokens as ground-truth and everything else as a best-effort interpolation pending measurement.

**Key Characteristics:**
- Electric-purple primary (`{colors.primary}` — #6933ff) dominates the brand — CTAs, links, headline accents, and wordmark. A deeper purple (`{colors.primary-deep}` — #4c2c9d) and a near-identical variant (`{colors.primary-alt}` — #6833ff) extend the ramp.
- Cyan (`{colors.accent-cyan}` — #00fced) is the signature secondary accent — it sits against dark bands as a high-contrast energy highlight.
- Three-tier surface strategy: white canvas, cool-gray cards, and near-black punctuation bands.
- Near-black surfaces (`{colors.ink-soft}` — #1b1920 and `{colors.surface-dark}` — #101010) close pages and host the featured pricing tier — purple and cyan pop hardest here.
- A measured accent set (blue, orange, amber, pink, red) reserved for diagram callouts and data-viz, never for primary actions.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #6933ff): The dominant brand color and most-frequent measured value. Primary CTAs, links, headline accents, wordmark.
- **Primary Alt** (`{colors.primary-alt}` — #6833ff): A near-identical purple measured separately — likely a gradient stop or anti-aliased rendering of the same brand purple. Treat as interchangeable with primary.
- **Primary Deep** (`{colors.primary-deep}` — #4c2c9d): A darker purple used for the pressed/active button state and for gradient depth.
- **Accent Cyan** (`{colors.accent-cyan}` — #00fced): The signature secondary accent — circuit-trace highlight against dark bands.
- **Accent Cyan Soft** (`{colors.accent-cyan-soft}` — #1bf8ec): A slightly muted cyan, used as a gradient companion to accent-cyan.
- **Accent Blue** (`{colors.accent-blue}` — #0037a5): Deep brand blue for diagram strokes and secondary emphasis.
- **Accent Orange** (`{colors.accent-orange}` — #f9a11b) / **Accent Amber** (`{colors.accent-amber}` — #f59e0b): Warm callout colors for data-viz and highlight moments.
- **Accent Pink** (`{colors.accent-pink}` — #ec4899): A small chromatic accent used in diagrams/illustrations.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): Default page floor.
- **Surface Soft** (`{colors.surface-soft}` — #f5f7fa): Cool light-gray for soft section bands and cards.
- **Surface Card** (`{colors.surface-card}` — #f5f5f5): Neutral card fill.
- **Surface Alt** (`{colors.surface-alt}` — #f8f8f8): A barely-warmer neutral for alternating bands.
- **Ink Soft** (`{colors.ink-soft}` — #1b1920): Near-black surface for dark punctuation bands and the featured pricing tier.
- **Surface Dark** (`{colors.surface-dark}` — #101010): The deepest near-black — footer and dark CTA bands.

### Text
- **Ink** (`{colors.ink}` — #000000): Headlines and primary text.
- **Body / Muted** (`{colors.body}` / `{colors.muted}` — #6d6d6d): Running text and secondary labels (same measured value).
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #ffffff): Text on purple buttons and dark surfaces.

### Lines & Borders
- **Hairline** (`{colors.hairline}` — #cccccc): 1px border tone on light surfaces.
- **Border Cool** (`{colors.border-cool}` — #c0c6d9): A cool blue-gray border used on cards and dividers.

### Semantic
- **Error** (`{colors.error}` — #dc150b): Validation errors, alert states.
- Warm accents (`{colors.accent-orange}`, `{colors.accent-amber}`) double as warning/highlight tones in diagrams.

## Typography

### Font Family
**No typography was machine-measured** (analysis.json `typography` is empty). The roles below are **derived** from reference screenshots and a conventional enterprise-SaaS baseline. The fallback stack used is `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` — derived as a safe substitute; the actual production face was not captured and must be confirmed against the live site before shipping.

The split is the standard two-role model: a bold sans for display headlines (weight 700, negative tracking) and the same family at 400–600 for body, buttons, and navigation.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 60px | 700 | 1.05 | -1.5px | Hero h1 — derived |
| `{typography.display-lg}` | 44px | 700 | 1.1 | -1px | Section heads — derived |
| `{typography.display-md}` | 32px | 700 | 1.15 | -0.5px | Sub-section heads, CTA-band heads — derived |
| `{typography.title-lg}` | 22px | 600 | 1.3 | -0.2px | Pricing plan names, card titles — derived |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Feature card titles — derived |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running-text — derived |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print — derived |
| `{typography.caption}` | 13px | 500 | 1.4 | 0.2px | Badge labels, eyebrows — derived |
| `{typography.button}` | 15px | 600 | 1.0 | 0 | Button labels — derived |
| `{typography.nav-link}` | 15px | 500 | 1.4 | 0 | Top-nav items — derived |

### Principles
Display headlines run bold (700) with negative tracking for a tight, engineered feel; body stays at 400. All type-scale values above are derived — see Known Gaps.

### Note on Font Substitutes
Because the production typeface was not captured, **Inter** is documented as the working substitute across all roles. If the live site uses a licensed or custom face, swap the `fontFamily` to that face and keep Inter in the fallback chain. **Manrope** or **Söhne**-class grotesques are plausible alternatives pending confirmation.

## Layout

**No spacing values were machine-measured** (analysis.json `spacing` is empty). The scale below is **derived** from a 4px-base SaaS convention.

### Spacing System
- **Base unit:** 4px — derived.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px — all derived.
- **Section padding:** `{spacing.section}` (96px) between major bands — derived.
- **Card internal padding:** `{spacing.xl}` (32px) for feature and pricing cards — derived.

### Grid & Container
- **Max content width:** ~1200px centered — derived.
- **Feature card grids:** 3-up desktop, 2-up tablet, 1-up mobile — derived.
- **Pricing grid:** 3–4-up desktop collapsing down — derived.
- **Footer:** multi-column link list collapsing to single column on mobile — derived.

### Whitespace Philosophy
The system reads as generous-but-structured enterprise SaaS, alternating white, cool-gray, and near-black bands for rhythm. All measurements are derived pending spacing capture.

## Elevation & Depth

**No shadow values were machine-measured** (analysis.json `shadows` is empty). The treatments below are **derived**.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero bands — derived |
| Soft hairline | 1px `{colors.hairline}` or `{colors.border-cool}` border | Cards, inputs, dividers — derived |
| Card surface | `{colors.surface-card}` / `{colors.surface-soft}` fill, minimal shadow | Feature cards — derived |
| Dark punctuation | `{colors.ink-soft}` / `{colors.surface-dark}` background, color contrast does the work | Featured pricing tier, CTA bands, footer — derived |

### Decorative Depth
- Cyan (`{colors.accent-cyan}`) used as glowing accent lines / gradient strokes against dark bands carries an implied luminous depth — derived from screenshots, not a measured shadow token.
- Purple-to-deep-purple (`{colors.primary}` → `{colors.primary-deep}`) gradients add dimensionality to hero artwork — derived.

## Shapes

**No radius values were machine-measured** (analysis.json `radius` is empty). The scale below is **derived**.

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 4px | Small inline elements, tags — derived |
| `{rounded.md}` | 8px | Buttons, text inputs — derived |
| `{rounded.lg}` | 12px | Content cards, pricing tiers — derived |
| `{rounded.xl}` | 16px | Larger feature / hero artwork containers — derived |
| `{rounded.pill}` | 9999px | Badge pills, segmented controls — derived |
| `{rounded.full}` | 9999px | Avatars, icon buttons — derived |

### Photography Geometry
Diagram and illustration containers appear to use `{rounded.lg}`–`{rounded.xl}` corners — derived from screenshots.

## Components

**No components were machine-measured** (analysis.json `components` is empty). Every component below is **derived** from reference screenshots, with color tokens drawn from the measured palette. Treat structure as ground-truth (purple primary, cyan-on-dark, dark punctuation bands) and pixel dimensions as derived.

### Buttons

**`button-primary`** — The signature purple CTA. Background `{colors.primary}` (#6933ff), text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}`, padding 14px × 24px, height 48px — dimensions derived. Active state `button-primary-active` shifts to `{colors.primary-deep}` (#4c2c9d).

**`button-secondary`** — White button with purple text/outline. Background `{colors.canvas}`, text `{colors.primary}`, same radius and padding — derived.

**`button-on-dark`** — Used inside dark bands; flips to cyan fill `{colors.accent-cyan}` with `{colors.ink}` text for maximum contrast against `{colors.surface-dark}` — derived.

**`button-text-link`** — Inline purple text link, `{colors.primary}`, no background — derived.

### Navigation

**`top-nav`** — White nav bar, `{colors.canvas}` background, `{typography.nav-link}` menu items in `{colors.ink}`, with the purple wordmark at left and a `{component.button-primary}` at right. Height 72px — derived.

### Cards & Containers

**`hero-band`** — White-canvas hero with `{typography.display-xl}` headline (purple accent words), supporting copy, and a button row. Padding `{spacing.section}` — derived.

**`hero-band-dark`** — Near-black hero variant on `{colors.ink-soft}` (#1b1920) with white text and cyan/purple accent artwork — derived.

**`feature-card`** — 3-up grid card. Background `{colors.surface-card}` (#f5f5f5), rounded `{rounded.lg}`, padding `{spacing.xl}`, `{typography.title-md}` title — derived.

**`feature-card-soft`** — Cool-gray variant on `{colors.surface-soft}` (#f5f7fa) — derived.

**`pricing-tier-card`** — Standard tier. Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`, plan name in `{typography.title-lg}`, `{component.button-primary}` at bottom — derived.

**`pricing-tier-card-featured`** — Featured tier inverts to `{colors.ink-soft}` (#1b1920) with `{colors.on-dark}` text — the dark surface IS the featured signal. Derived.

### Inputs & Tags

**`text-input`** — Background `{colors.canvas}`, text `{colors.ink}`, `{typography.body-md}`, rounded `{rounded.md}`, padding 12px × 16px, height 48px, 1px `{colors.hairline}` or `{colors.border-cool}` border — derived.

**`badge-pill`** — Small eyebrow/category pill. Background `{colors.surface-soft}`, text `{colors.primary}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px × 12px — derived.

### CTA / Footer

**`cta-band-dark`** — Pre-footer CTA on `{colors.surface-dark}` (#101010), `{typography.display-md}` headline, `{component.button-on-dark}` centered — derived.

**`footer`** — Near-black footer on `{colors.surface-dark}`, `{typography.body-sm}` link rows in `{colors.on-dark}`, multi-column layout, padding 64px — derived. The dark footer closes the page.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#6933ff) for the primary action layer — CTAs, links, headline accents, wordmark. Purple is the brand.
- Use `{colors.accent-cyan}` (#00fced) only as a secondary accent, strongest against dark bands.
- Flip CTAs to `{component.button-on-dark}` (cyan fill) when they sit on `{colors.surface-dark}` or `{colors.ink-soft}`.
- Use the near-black bands (`{colors.ink-soft}`, `{colors.surface-dark}`) deliberately to punctuate and close pages — let color contrast carry the elevation.
- Keep the warm/secondary accents (`{colors.accent-orange}`, `{colors.accent-amber}`, `{colors.accent-pink}`) confined to diagrams and data-viz.

### Don't
- Don't put the warm accents or cyan on a primary CTA — the action layer is purple (or cyan-on-dark).
- Don't scatter dark surfaces casually; they are scarce punctuation, not a default card style.
- Don't add hover-state styling beyond the documented active/pressed (`{colors.primary}` → `{colors.primary-deep}`).
- Don't treat the derived type/spacing/radius values as final — confirm against measurement before shipping.

## Responsive Behavior

All breakpoint behavior below is **derived** — no responsive measurements were captured.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down; feature/pricing grids 1-up; footer single column — derived |
| Tablet | 768–1024px | Horizontal nav tightens; feature cards 2-up; pricing 2-up — derived |
| Desktop | 1024–1440px | Full nav; 3-up feature cards; multi-up pricing — derived |
| Wide | > 1440px | Max content width caps ~1200px with added outer margin — derived |

### Touch Targets
- `{component.button-primary}` derived at 48px height — comfortably above the 44px minimum.
- `{component.text-input}` derived at 48px height.

### Collapsing Strategy
- Top nav collapses to a hamburger sheet on mobile — derived.
- Grids reduce column count rather than shrinking cards — derived.
- Dark featured pricing tier stays visually distinct at every breakpoint — derived.

## Iteration Guide

1. Focus on ONE component at a time and reference its YAML key (`{component.feature-card}`, `{component.pricing-tier-card-featured}`).
2. Variants (`-active`, `-on-dark`, `-soft`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex in components.
4. Never document hover. Default and Active/Pressed states only.
5. Purple is the action layer; cyan is the dark-band accent. Don't blur the two.
6. Before shipping, replace derived type/spacing/radius/shadow values with measured ones — color tokens are the only ground-truth in this entry.

## Known Gaps

- **Typography was not measured** — analysis.json `typography` is empty. All font families, sizes, weights, line-heights, and letter-spacings are derived from screenshots and a conventional baseline. The production typeface is unconfirmed; Inter is used as a substitute fallback.
- **Spacing was not measured** — analysis.json `spacing` is empty. The 4px-base scale and all paddings/gutters are derived.
- **Radius was not measured** — analysis.json `radius` is empty. The radius scale is derived.
- **Shadows were not measured** — analysis.json `shadows` is empty. Elevation treatments are derived; the cyan "glow" depth is observed in screenshots, not a measured token.
- **Components were not measured** — analysis.json `components` is empty. All component dimensions (heights, paddings) are derived; only their color tokens come from the measured palette.
- `{colors.primary}` (#6933ff) and `{colors.primary-alt}` (#6833ff) are nearly identical measured values — likely the same brand purple captured at different gradient stops or anti-aliasing; documented separately for faithfulness but treat as interchangeable.
- The exact roles of secondary accents (`{colors.accent-blue}`, `{colors.accent-orange}`, `{colors.accent-amber}`, `{colors.accent-pink}`) are inferred as diagram/data-viz colors from frequency and screenshots; precise usage contexts were not isolated.
- `fonts_licensed` was empty in analysis.json — no licensed face was flagged, but absence of a measured typeface means licensing status of the production face is unknown.
- Animation, transition timings, and form validation states beyond color are out of scope.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/cockroachlabs/design-md -->
