---
version: alpha
name: ClickHouse-design-analysis
description: "A high-contrast, developer-database interface built on a stark black-and-white canvas with a single electric chartreuse-yellow accent (#faff69) that carries all brand voltage. The system reads as fast, technical, and confident — near-black ink on white surfaces, dark slate panels (#1c2127) for code and product chrome, cool-gray hairlines, and the signature yellow reserved for primary CTAs and highlight moments. The aesthetic is engineering-first: dense data tables, SQL snippets shown in dark panels, and minimal decorative color."
colors:
  primary: "#000000"
  ink: "#000000"
  canvas: "#ffffff"
  on-primary: "#ffffff"
  accent-yellow: "#faff69"
  accent-yellow-bright: "#ebff00"
  accent-blue-soft: "#bfdbfe"
  surface-dark: "#1c2127"
  surface-dark-soft: "#151515"
  surface-darker: "#1d1d1d"
  surface-soft: "#f9f9f9"
  body: "#414141"
  muted: "#606060"
  muted-soft: "#9ca3af"
  muted-cool: "#4b5563"
  ink-cool: "#111827"
  ink-cool-soft: "#374151"
  hairline: "#dfdfdf"
  hairline-cool: "#e5e7eb"
  hairline-strong: "#d1d5db"
  on-dark: "#c9d1d9"
  on-dark-soft: "#b3b6bd"
typography:
  display-xl:
    fontFamily: "Inter, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1px
  display-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.2px
  title-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
rounded:
  xs: 4px
  sm: 6px
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
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-primary-active:
    backgroundColor: "{colors.accent-yellow-bright}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
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
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  code-panel:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  pricing-tier-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-card-featured:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 14px
    height: 40px
  badge-pill:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  badge-accent:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  data-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
  footer:
    backgroundColor: "{colors.surface-dark-soft}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

ClickHouse's marketing surface is a stark, engineering-first interface built on maximum black-and-white contrast (`{colors.primary}` — #000000 ink on `{colors.canvas}` — #ffffff) with a single electric chartreuse-yellow accent (`{colors.accent-yellow}` — #faff69, the most-frequent accent in the measured palette at frequency 14). The system reads as fast, technical, and unapologetically developer-facing — minimal decorative color, dense data tables, and SQL/code shown in dark slate panels.

The brand voltage is concentrated: nearly the entire interface is black, white, and cool grays, and the yellow appears only on primary actions and highlight moments. A secondary dark surface family (`{colors.surface-dark}` — #1c2127, `{colors.surface-dark-soft}` — #151515, `{colors.surface-darker}` — #1d1d1d) carries code blocks, product chrome, and inverted bands — the place where ClickHouse shows what the database actually does.

The cool-gray ramp (`{colors.ink-cool}` — #111827 through `{colors.muted-soft}` — #9ca3af) handles supporting text and hairlines, giving the system a slightly technical, GitHub-adjacent neutral character rather than a warm one. The result is a confident database product brand: high contrast, low ornament, yellow as a scalpel.

**Key Characteristics:**
- Maximum-contrast black-on-white canvas. Ink is true `{colors.primary}` (#000000); canvas is true `{colors.canvas}` (#ffffff).
- A single signature accent — chartreuse yellow `{colors.accent-yellow}` (#faff69), with a brighter variant `{colors.accent-yellow-bright}` (#ebff00) for press/emphasis. Reserved for primary CTAs and highlights only.
- Dark slate panels (`{colors.surface-dark}` — #1c2127) host code, SQL snippets, and product UI. Code is shown as content, not illustrated.
- Cool-neutral gray ramp (`{colors.ink-cool}`, `{colors.ink-cool-soft}`, `{colors.muted-cool}`, `{colors.muted-soft}`, `{colors.hairline-cool}`, `{colors.hairline-strong}`) gives the supporting layer a technical, slightly-blue-gray temperature.
- A soft blue accent (`{colors.accent-blue-soft}` — #bfdbfe) appears sparingly — likely in product chrome / chart fills inside data surfaces.
- Footer flips to the dark surface family (`{colors.surface-dark-soft}` — #151515) to close the page.

> Note: typography, spacing, radius, shadow, and component tokens were **not** captured by the measured analysis (those arrays were empty in analysis.json). All such values below are **derived** from screenshot ground-truth and standard developer-SaaS baselines, and are flagged in Known Gaps. Only the color tokens are measured.

## Colors

### Brand & Accent
- **Accent Yellow** (`{colors.accent-yellow}` — #faff69): The single signature brand color and the most-frequent measured accent (frequency 14). Used on primary CTAs, highlight underlines, and emphasis badges. This is the entire brand voltage of the system.
- **Accent Yellow Bright** (`{colors.accent-yellow-bright}` — #ebff00): A more saturated yellow-green (frequency 8). Used for press states and small high-energy accents.
- **Accent Blue Soft** (`{colors.accent-blue-soft}` — #bfdbfe): A pale blue (frequency 10) appearing in product chrome, chart fills, and small data-viz moments inside surfaces. Never on CTAs.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor (frequency 37).
- **Surface Soft** (`{colors.surface-soft}` — #f9f9f9): Light feature-card and section-divider fill (frequency 6).
- **Surface Dark** (`{colors.surface-dark}` — #1c2127): The primary dark panel — code blocks, product chrome, featured pricing tier (frequency 12).
- **Surface Dark Soft** (`{colors.surface-dark-soft}` — #151515): Footer and deep inverted bands (frequency 8).
- **Surface Darker** (`{colors.surface-darker}` — #1d1d1d): Nested dark cards / alternate dark panel (frequency 8).

### Text
- **Ink** (`{colors.ink}` / `{colors.primary}` — #000000): All headlines and primary text on light surfaces (frequency 47 — the dominant color in the system).
- **Ink Cool** (`{colors.ink-cool}` — #111827): A cool near-black used for technical headings and labels (frequency 10).
- **Ink Cool Soft** (`{colors.ink-cool-soft}` — #374151): Secondary cool-gray text (frequency 10).
- **Body** (`{colors.body}` — #414141): Default warm-neutral running-text color (frequency 22).
- **Muted Cool** (`{colors.muted-cool}` — #4b5563): Secondary cool-gray text (frequency 6).
- **Muted** (`{colors.muted}` — #606060): Tertiary text, captions (frequency 6).
- **Muted Soft** (`{colors.muted-soft}` — #9ca3af): Fine-print, placeholder, disabled text (frequency 10).
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on dark buttons and dark bands.
- **On Dark** (`{colors.on-dark}` — #c9d1d9): Primary text on dark surfaces — slightly cool off-white (frequency 8).
- **On Dark Soft** (`{colors.on-dark-soft}` — #b3b6bd): Muted text on dark surfaces, footer links (frequency 8).

### Hairlines
- **Hairline** (`{colors.hairline}` — #dfdfdf): The default 1px divider on light surfaces (frequency 14).
- **Hairline Cool** (`{colors.hairline-cool}` — #e5e7eb): A cool-toned divider / input border (frequency 12).
- **Hairline Strong** (`{colors.hairline-strong}` — #d1d5db): A heavier border tone for emphasis or table dividers (frequency 8).

## Typography

### Font Family
Typography was **not measured** — no font, size, weight, or line-height values were captured. The roles below are **derived** from screenshot inspection and standard developer-SaaS baselines, using **Inter** as the primary UI/display family and **JetBrains Mono** for code. ClickHouse's actual production faces should be confirmed before shipping; the fallback stack walks `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

The split is functional and typical for a database product:
- Inter (weight 600 on display, 400-500 on body/nav) — headlines, body, buttons, navigation
- JetBrains Mono — SQL snippets, code panels, inline technical tokens

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 600 | 1.05 | -1.5px | Hero h1 — derived |
| `{typography.display-lg}` | 48px | 600 | 1.1 | -1px | Section heads — derived |
| `{typography.display-md}` | 32px | 600 | 1.2 | -0.5px | Sub-section heads, card titles — derived |
| `{typography.title-lg}` | 22px | 600 | 1.3 | -0.2px | Pricing plan names — derived |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Feature card titles — derived |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running-text — derived |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print — derived |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions — derived |
| `{typography.code}` | 14px | 400 | 1.55 | 0 | SQL snippets, code panels — JetBrains Mono, derived |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | Button labels — derived |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items — derived |

### Principles
Keep display headlines tight (negative letter-spacing) and at a single weight (600) for a confident technical voice. Code is a first-class type role — SQL and config appear frequently inside dark panels and must use the monospace family, never the sans body face.

### Note on Font Substitutes
No licensed/custom faces were flagged in the analysis (`fonts_licensed` was empty). Should ClickHouse's production face turn out to be a custom or licensed typeface, **Inter** (weight 600 for display, 400-500 for body) is a robust open-source substitute, and **JetBrains Mono** or **IBM Plex Mono** cover the code role. These substitutes should be re-validated against the live site.

## Layout

> All spacing values below are **derived** — the measured `spacing` array was empty.

### Spacing System
- **Base unit:** 4px (derived).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) between editorial bands — derived.
- **Card internal padding:** `{spacing.xl}` (32px) for feature and pricing cards; `{spacing.lg}` (24px) for code panels and product-mockup cards — derived.

### Grid & Container
- **Max content width:** ~1200px centered (derived).
- **Feature grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile (derived).
- **Pricing grid:** multi-up at desktop collapsing to 1-up at mobile (derived).
- **Footer:** multi-column link list collapsing to 1-up at mobile (derived).

### Whitespace Philosophy
ClickHouse pairs generous editorial whitespace on light bands with dense, information-rich dark panels (data tables, SQL output, benchmark charts). The contrast between airy marketing bands and dense technical surfaces is part of the voice — the product is shown at full density, the messaging is given room.

## Elevation & Depth

> Shadow values were **not measured** (the `shadows` array was empty); the treatments below are **derived** from screenshot ground-truth.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero bands |
| Soft hairline | 1px `{colors.hairline}` / `{colors.hairline-cool}` border | Inputs, table dividers, light cards |
| Card surface | `{colors.surface-soft}` fill, no shadow | Feature cards |
| Dark panel | `{colors.surface-dark}` fill | Code blocks, product chrome, featured pricing tier — color contrast does the elevation work |
| Footer | `{colors.surface-dark-soft}` fill | Page-closing dark band |

The elevation philosophy is **contrast-driven, not shadow-driven** — dark surfaces against white do the lifting. Any drop shadows are subtle and were not captured; treat them as low-alpha until measured.

## Shapes

> Radius values were **not measured** (the `radius` array was empty); the scale below is **derived**.

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small inline accents — derived |
| `{rounded.sm}` | 6px | Small buttons, dropdown items — derived |
| `{rounded.md}` | 8px | CTA buttons, text inputs, tables — derived |
| `{rounded.lg}` | 12px | Content cards, code panels, pricing cards — derived |
| `{rounded.xl}` | 16px | Large feature / hero containers — derived |
| `{rounded.pill}` | 9999px | Badge pills — derived |
| `{rounded.full}` | 9999px | Avatars, icon buttons — derived |

### Photography & Chrome Geometry
Product UI fragments (data tables, SQL editors, benchmark charts) are shown inside `{component.code-panel}` and `{component.product-mockup-card}` surfaces, retaining their native chrome and internal radii. Treat embedded product UI as content, not decoration.

## Components

> All component specs are **derived** from screenshots — the measured `components` array was empty. Only the color refs they use are measured tokens.

### Top Navigation
**`top-nav`** — White nav bar at the top of every page, 64px tall (derived), `{colors.canvas}` background. Carries the ClickHouse wordmark at left, horizontal product/solutions/pricing/docs menu in `{typography.nav-link}`, and a right-side cluster ending in a `{component.button-primary}` ("Get started"). Menu text in `{colors.ink}`.

### Buttons
**`button-primary`** — The signature CTA. Background `{colors.accent-yellow}` (#faff69), text `{colors.ink}` (yellow demands dark text for contrast), type `{typography.button}`, rounded `{rounded.md}`, padding 12px × 20px, height 40px. Active state `button-primary-active` shifts to `{colors.accent-yellow-bright}` (#ebff00).

**`button-secondary`** — White button with hairline outline. Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, same padding + height + radius as primary.

**`button-dark`** — Black button used on light bands where the yellow would be too loud. Background `{colors.primary}` (#000000), text `{colors.on-primary}`, same geometry.

**`button-text-link`** / **`text-link`** — Inline link buttons in `{colors.ink}`, no background.

### Cards & Containers
**`hero-band`** — White-canvas hero carrying the h1 in `{typography.display-xl}`, sub-headline, and a button row (primary + secondary). Vertical padding `{spacing.section}` (96px).

**`feature-card`** — Used in feature grids. Background `{colors.surface-soft}` (#f9f9f9), rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). Carries an icon, `{typography.title-md}` headline, and `{typography.body-md}` description.

**`code-panel`** — A dark slate panel showing SQL / config / CLI output. Background `{colors.surface-dark}` (#1c2127), text `{colors.on-dark}` (#c9d1d9), type `{typography.code}` (JetBrains Mono), rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). This is the signature technical surface — code is shown as real content.

**`product-mockup-card`** — A card showing actual ClickHouse product UI (data tables, query editor, dashboards). Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.lg}`. The product chrome inside retains its native styling.

**`data-table`** — Dense tabular data surface. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-sm}`, rounded `{rounded.md}`, rows divided by `{colors.hairline}` / `{colors.hairline-strong}`. Used for benchmark comparisons and feature matrices.

**`pricing-tier-card`** — Standard tier card. Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}`. Plan name in `{typography.title-lg}`, feature checklist in `{typography.body-md}`, and a CTA at the bottom.

**`pricing-tier-card-featured`** — The recommended tier inverts to the dark surface family. Background `{colors.surface-dark}` (#1c2127), text `{colors.on-dark}`. The dark surface IS the featured signal.

### Inputs & Forms
**`text-input`** — Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}`, padding 10px × 14px, height 40px, 1px `{colors.hairline-cool}` border.

### Tags / Badges
**`badge-pill`** — Neutral pill label. Background `{colors.surface-soft}`, text `{colors.ink}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px × 12px.

**`badge-accent`** — Highlight pill ("New", "Fastest"). Background `{colors.accent-yellow}`, text `{colors.ink}`, type `{typography.caption}`, rounded `{rounded.pill}`. The only badge that carries brand voltage.

### Footer
**`footer`** — Dark band closing the page. Background `{colors.surface-dark-soft}` (#151515), text `{colors.on-dark-soft}` (#b3b6bd). Multi-column link list with the ClickHouse wordmark in `{colors.on-dark}`. Vertical padding 64px (derived).

## Do's and Don'ts

### Do
- Reserve `{colors.accent-yellow}` (#faff69) for primary CTAs and a single highlight per band. The yellow is a scalpel, not a paintbrush.
- Always put dark text (`{colors.ink}`) on yellow surfaces — yellow against white text fails contrast.
- Use `{component.code-panel}` (`{colors.surface-dark}`) to show real SQL and product output. ClickHouse is a database — show the database.
- Keep the canvas maximally contrasty: true black `{colors.primary}` ink on true white `{colors.canvas}`.
- Use the cool-gray ramp (`{colors.ink-cool}`, `{colors.muted-cool}`, `{colors.muted-soft}`) for supporting text to keep the technical temperature.
- Invert to the dark surface family for the featured pricing tier and the footer to anchor the page.

### Don't
- Don't use yellow on body text, large fills, or more than one element per band — it loses its punch.
- Don't introduce warm accent colors; the brand is black/white/yellow with cool-gray support and a sparse soft blue.
- Don't put light text on the yellow accent or dark text on the dark panels.
- Don't decorate code as marketing illustration — show the real panel.
- Don't add hover-state styling beyond default + press; primary brightens to `{colors.accent-yellow-bright}` on press, nothing else changes.

## Responsive Behavior

> Breakpoint behavior is **derived** — no responsive measurements were captured.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down; feature grids 1-up; pricing 1-up; code panels scroll horizontally; footer columns → 1 |
| Tablet | 768–1024px | Top nav tightens; feature cards 2-up; pricing 2-up |
| Desktop | 1024–1440px | Full top-nav; 3-up feature cards; full pricing grid |
| Wide | > 1440px | Same as desktop with more outer breathing room; content caps ~1200px |

### Touch Targets
- `{component.button-primary}` at minimum 40 × 40px (derived).
- `{component.text-input}` height 40px (derived).

### Collapsing Strategy
- Top nav collapses to hamburger on mobile.
- Feature and pricing grids reduce columns rather than scaling cards down.
- Code panels and data tables scroll horizontally on narrow viewports rather than reflowing — preserving technical legibility.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.code-panel}`, `{component.pricing-tier-card-featured}`).
2. Variants (`-active`, `-featured`, `-disabled`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Keep yellow scarce — one accent moment per band.
6. The dark surface family (`{colors.surface-dark}` / `{colors.surface-dark-soft}`) is reserved for code, product chrome, featured tier, and footer.
7. Before shipping, replace derived typography/spacing/radius/shadow values with measured ones (see Known Gaps).

## Known Gaps

- **Typography was not measured** — the `typography` array in analysis.json was empty. All type roles (family, size, weight, line-height, letter-spacing) are **derived** from screenshots and standard developer-SaaS baselines using Inter + JetBrains Mono. The actual production faces must be confirmed against the live site.
- **Spacing was not measured** — the `spacing` array was empty. The 4px-based scale is derived.
- **Radius was not measured** — the `radius` array was empty. The radius scale is derived; ClickHouse's actual corner treatment should be confirmed.
- **Shadows were not measured** — the `shadows` array was empty. Elevation is documented as contrast-driven; any real drop-shadow values are unknown.
- **Components were not measured** — the `components` array was empty. All component specs are derived from screenshot ground-truth; heights, paddings, and exact token mappings should be validated.
- No licensed/custom fonts were flagged (`fonts_licensed` empty); substitutes are documented defensively in Typography.
- Color roles were assigned from frequency and observed usage; specific assignments (e.g., which grays are hairlines vs. text, where `{colors.accent-blue-soft}` and `{colors.surface-darker}` actually appear) are inferred and may shift with deeper inspection.
- Animation, transition timings, form validation states, and the live product/console UI are out of scope.
- Only two pages (landing, pricing) were captured; docs, blog, and console surfaces may introduce additional tokens.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/clickhouse/design-md -->
