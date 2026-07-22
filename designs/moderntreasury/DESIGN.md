---
version: alpha
name: ModernTreasury-design-analysis
description: A clean payment-operations fintech interface built on white canvas with a near-black ink primary (#151515), a deep teal color ramp, and warm-sand plus pastel accent tones. The system reads as precise, trustworthy infrastructure software — high-contrast monochrome type over white, with a measured teal scale used for data surfaces and gradients, and a small pastel accent set (sky blue, pink, amber) used for product diagrams and decorative accents rather than primary actions.

colors:
  primary: "#151515"
  ink: "#151515"
  canvas: "#ffffff"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  accent-blue: "#6dbbf6"
  accent-pink: "#facfed"
  accent-orange: "#ffbb66"
  teal-50: "#f0f8f9"
  teal-100: "#dbecf0"
  teal-200: "#bfdde3"
  teal-300: "#93c2cd"
  teal-400: "#60a0af"
  teal-500: "#448597"
  teal-600: "#3a6d7e"
  teal-700: "#2b5f73"
  teal-800: "#2a5060"
  teal-900: "#274352"
  teal-950: "#152b37"
  warm-100: "#efeae5"
  warm-200: "#ddd2cb"
  warm-300: "#c8b4a9"
  warm-400: "#b19386"

typography:
  display-xl:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1px
  display-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  title-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
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
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
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
    backgroundColor: "{colors.teal-50}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  product-diagram-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  warm-band:
    backgroundColor: "{colors.warm-100}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    padding: 96px
  teal-band:
    backgroundColor: "{colors.teal-950}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    padding: 96px
  pricing-tier-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-card-featured:
    backgroundColor: "{colors.teal-950}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  badge-pill:
    backgroundColor: "{colors.teal-100}"
    textColor: "{colors.teal-900}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  footer:
    backgroundColor: "{colors.teal-950}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Modern Treasury's marketing surface is a precise payment-operations fintech interface — white canvas (`{colors.canvas}` — #ffffff) with a near-black ink primary (`{colors.primary}` — #151515) and a measured teal color ramp (`{colors.teal-50}` through `{colors.teal-950}`) used for data surfaces, gradients, and dark closing bands. The system reads as trustworthy infrastructure software: high-contrast monochrome type over white, with restrained chromatic accents reserved for product diagrams.

The brand's color voltage comes from two scales captured in the analysis: a deep **teal ramp** (#f0f8f9 → #152b37, eleven measured steps) used for gradient fills, dark surfaces, and data-visualization chrome; and a smaller **warm-sand ramp** (#efeae5 → #b19386, four measured steps) used for soft alternating bands. On top of these sit three pastel accents — sky blue (`{colors.accent-blue}` — #6dbbf6), pink (`{colors.accent-pink}` — #facfed), and amber (`{colors.accent-orange}` — #ffbb66) — which appear in product diagrams and decorative moments rather than on primary actions.

Note that this entry is built from a **color-only measured analysis** — typography, spacing, radius, shadow, and component geometry were not captured by the analyzer. Those scales below are **derived** from the reference screenshots and standard fintech-marketing baselines, and are flagged in Known Gaps. Only the color tokens are measured ground-truth.

**Key Characteristics:**
- White canvas with near-black ink primary (`{colors.primary}` — #151515) — the only two genuinely high-frequency neutrals measured.
- A deep, measured teal ramp (`{colors.teal-50}`–`{colors.teal-950}`) anchoring dark bands, gradients, and product data surfaces.
- A warm-sand ramp (`{colors.warm-100}`–`{colors.warm-400}`) for soft alternating editorial bands.
- A pastel accent trio (sky blue, pink, amber) reserved for product diagrams and decorative accents — never primary CTAs.
- The darkest teal (`{colors.teal-950}` — #152b37) closes pages as the footer surface and powers the featured pricing tier.

## Colors

### Primary & Neutral
- **Primary / Ink** (`{colors.primary}` / `{colors.ink}` — #151515): The dominant action and text color. Used on primary CTAs and headlines. This was the second-most-frequent neutral measured.
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor — the most frequent measured color.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #ffffff): Text on the ink primary and on dark teal bands.

### Teal Ramp
A measured eleven-step teal scale runs from a near-white tint to a deep ink-teal. Used for gradient backgrounds, dark closing bands, the footer, and data-visualization chrome inside product diagrams.
- `{colors.teal-50}` — #f0f8f9 (lightest tint, soft section wash)
- `{colors.teal-100}` — #dbecf0
- `{colors.teal-200}` — #bfdde3
- `{colors.teal-300}` — #93c2cd
- `{colors.teal-400}` — #60a0af
- `{colors.teal-500}` — #448597
- `{colors.teal-600}` — #3a6d7e
- `{colors.teal-700}` — #2b5f73
- `{colors.teal-800}` — #2a5060
- `{colors.teal-900}` — #274352
- `{colors.teal-950}` — #152b37 (deepest — footer + featured pricing tier surface)

### Warm-Sand Ramp
A measured four-step warm ramp used for soft alternating bands and warm-toned decorative surfaces.
- `{colors.warm-100}` — #efeae5 (lightest)
- `{colors.warm-200}` — #ddd2cb
- `{colors.warm-300}` — #c8b4a9
- `{colors.warm-400}` — #b19386 (deepest)

### Pastel Accents
A trio of high-key pastels used inside product diagrams, flow illustrations, and decorative accents — never on primary actions.
- **Accent Blue** (`{colors.accent-blue}` — #6dbbf6): Sky-blue accent, the most frequent of the three.
- **Accent Pink** (`{colors.accent-pink}` — #facfed): Soft pink accent.
- **Accent Orange** (`{colors.accent-orange}` — #ffbb66): Amber accent.

## Typography

### Font Family
Typography was **not captured by the measured analysis** (the `typography` array is empty), and no licensed faces were flagged. The scale below is **derived** from the reference screenshots and uses **Inter** with a system fallback stack as a faithful open-source approximation of the clean grotesque sans Modern Treasury renders for headlines and body. If the live site ships a different face, the substitution preserves the weight + tracking signature observed in the screenshots.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 600 | 1.05 | -1.5px | Homepage h1 — derived |
| `{typography.display-lg}` | 48px | 600 | 1.1 | -1px | Section heads — derived |
| `{typography.display-md}` | 36px | 600 | 1.15 | -0.5px | Sub-section heads, band titles — derived |
| `{typography.title-lg}` | 24px | 600 | 1.3 | -0.3px | Pricing plan names, card titles — derived |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Feature card titles — derived |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running-text — derived |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print — derived |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions — derived |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | Button labels — derived |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items — derived |

### Principles
Headlines stay high-contrast ink (`{colors.ink}`) over white with tight negative tracking on display sizes; body copy stays the same family at weight 400. All sizes and weights here are derived and should be confirmed against a measured type capture before being treated as ground-truth.

### Note on Font Substitutes
No licensed typeface was flagged in the analysis. **Inter** (weight 400/600) is the documented open-source substitute used throughout this entry. **Manrope** is an acceptable alternative if a more geometric headline voice is desired. None of these are claimed to match the live site exactly — they stand in until a measured type capture is available.

## Layout

### Spacing System
Spacing was **not measured** (the `spacing` array is empty). The tokens below are **derived** from a standard 4px base grid and the visual rhythm of the reference screenshots.
- **Base unit:** 4px (derived).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) between major editorial bands — derived.
- **Card internal padding:** `{spacing.xl}` (32px) for feature and pricing cards; `{spacing.lg}` (24px) for product-diagram cards — derived.

### Grid & Container
- **Max content width:** ~1200px centered (derived).
- **Feature grids:** 3-up at desktop, collapsing to 2-up then 1-up (derived).
- **Pricing grid:** multi-column at desktop, collapsing to 1-up at mobile (derived).

### Whitespace Philosophy
The screenshots show generous, calm whitespace typical of infrastructure-software marketing — single primary action per band, ample breathing room around headlines. Exact measurements are derived and should be confirmed.

## Elevation & Depth

Shadow values were **not captured** (the `shadows` array is empty). The treatments below are **derived** from the reference screenshots.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Body sections, top nav, hero bands |
| Card surface | Tinted background (`{colors.teal-50}` or `{colors.warm-100}`), no shadow | Feature cards, soft bands |
| Subtle drop shadow | Faint low-alpha shadow (derived) | Product-diagram cards, elevated pricing cards |
| Dark band | `{colors.teal-950}` background — contrast does the elevation | Featured pricing tier, footer |

The elevation philosophy reads as soft and modern — color-block contrast and light tints rather than heavy shadows. No measured shadow tokens exist; any drop-shadow values used in implementation are derived.

### Decorative Depth
- Product diagrams use the pastel accent trio (`{colors.accent-blue}`, `{colors.accent-pink}`, `{colors.accent-orange}`) and teal-ramp fills to suggest data flows and chrome.
- The deepest teal (`{colors.teal-950}`) provides the only true dark surfaces — closing footer and featured pricing tier.

## Shapes

Border radius was **not measured** (the `radius` array is empty). The scale below is **derived** from the reference screenshots.

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small accents — derived |
| `{rounded.sm}` | 6px | Small inline controls — derived |
| `{rounded.md}` | 8px | Buttons, inputs — derived |
| `{rounded.lg}` | 12px | Content cards, pricing cards — derived |
| `{rounded.xl}` | 16px | Large feature / diagram containers — derived |
| `{rounded.pill}` | 9999px | Badge pills — derived |
| `{rounded.full}` | 9999px | Avatars, icon buttons — derived |

### Photography & Diagram Geometry
Product diagrams retain native chrome with their own internal radii; container radius values are derived and should be confirmed against a measured capture.

## Components

No component geometry was captured by the analyzer (the `components` array is empty). The entries below are **derived** from the reference screenshots; only their color tokens reference measured values.

### Top Navigation
**`top-nav`** — White nav bar at the top of every page. `{colors.canvas}` background, ink text, `{typography.nav-link}` menu items, derived 64px height. Wordmark left, menu center, sign-in / sign-up cluster right.

### Buttons
**`button-primary`** — The signature CTA. Background `{colors.primary}` (#151515), text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}`, derived padding 12px × 20px, height 40px.

**`button-secondary`** — White button with ink text. Background `{colors.canvas}`, text `{colors.ink}`, same derived geometry as primary.

**`button-text-link`** — Inline text button, transparent background, `{colors.ink}` text.

### Bands & Cards
**`hero-band`** — White-canvas hero. `{colors.canvas}` background, ink headline in `{typography.display-xl}`, derived 96px vertical padding.

**`feature-card`** — Soft-tint feature card. Background `{colors.teal-50}` (#f0f8f9), ink text, `{typography.title-md}` title, rounded `{rounded.lg}`, derived 32px padding.

**`product-diagram-card`** — Card showing a product/data-flow diagram. Background `{colors.canvas}`, rounded `{rounded.lg}`, derived 24px padding. The diagram inside uses the teal ramp and pastel accents as content chrome.

**`warm-band`** — A soft warm-toned alternating band. Background `{colors.warm-100}` (#efeae5), ink text, `{typography.display-md}` head, derived 96px padding.

**`teal-band`** — A deep teal closing/feature band. Background `{colors.teal-950}` (#152b37), text `{colors.on-dark}`, `{typography.display-md}` head, derived 96px padding.

### Pricing
**`pricing-tier-card`** — Standard tier card. Background `{colors.canvas}`, ink text, plan name in `{typography.title-lg}`, rounded `{rounded.lg}`, derived 32px padding.

**`pricing-tier-card-featured`** — Featured tier flips to `{colors.teal-950}` with `{colors.on-dark}` text. The dark teal surface IS the featured signal — derived from the pricing screenshot.

### Tags
**`badge-pill`** — Small category/label pill. Background `{colors.teal-100}` (#dbecf0), text `{colors.teal-900}` (#274352), type `{typography.caption}`, rounded `{rounded.pill}`, derived 4px × 12px padding.

### Footer
**`footer`** — Deep teal footer that closes every page. Background `{colors.teal-950}` (#152b37), text `{colors.on-dark}`, `{typography.body-sm}`, derived 64px padding. The darkest measured teal visually closes the page.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#151515) for primary CTAs and headlines. The action layer is monochrome.
- Use the teal ramp (`{colors.teal-50}`–`{colors.teal-950}`) for gradients, soft tints, dark bands, and data chrome — it is the brand's structural color system.
- Keep the pastel accents (`{colors.accent-blue}`, `{colors.accent-pink}`, `{colors.accent-orange}`) inside product diagrams and decorative accents.
- Close pages with `{colors.teal-950}` (footer / dark band).
- Alternate white, soft-teal (`{colors.teal-50}`), and warm (`{colors.warm-100}`) bands to pace long pages.

### Don't
- Don't put pastel accents on primary CTAs — the action layer stays near-black.
- Don't introduce dark surfaces outside the teal ramp; `{colors.teal-950}` is the canonical dark.
- Don't treat the derived type, spacing, radius, and shadow scales as measured fact — confirm before relying on them.
- Don't add hover-state styling beyond default and active/pressed.

## Responsive Behavior

Breakpoint behavior was not measured; the guidance below is **derived** from standard fintech-marketing layouts and the captured screenshots.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down; feature grids 1-up; pricing 1-up; footer columns collapse |
| Tablet | 768–1024px | Horizontal nav tightens; feature cards 2-up; pricing 2-up |
| Desktop | 1024–1440px | Full nav; 3-up feature cards; multi-column pricing |
| Wide | > 1440px | Same as desktop; content width caps ~1200px |

### Touch Targets
- `{component.button-primary}` at a derived minimum 40 × 40px.
- All tap targets should meet 44px+ effective area (derived, unconfirmed).

### Collapsing Strategy
- Top nav collapses to hamburger at small widths.
- Feature and pricing grids reduce columns rather than scaling cards down.
- The featured pricing tier's dark teal surface stays distinct at every breakpoint.

## Iteration Guide

1. Focus on ONE component at a time, referencing its YAML key (e.g. `{component.feature-card}`).
2. Variants live as separate `components:` entries.
3. Use `{token.refs}` everywhere — never inline hex.
4. Document default and active/pressed states only — never hover.
5. The color tokens are the only measured ground-truth; prioritize correcting derived type/spacing/radius scales with a real measurement pass before extending them.
6. The teal ramp is the structural system — pull dark bands and tints from it rather than inventing new neutrals.

## Known Gaps

- The measured analysis captured **colors only** — the `typography`, `spacing`, `radius`, `shadows`, and `components` arrays were all empty. Every type, spacing, radius, shadow, and component-geometry value in this entry is **derived** from the reference screenshots and standard fintech-marketing baselines, and must be confirmed by a measured capture before being treated as ground-truth.
- The live typeface is unknown (no font measurement, none flagged as licensed); **Inter** is documented as an open-source stand-in.
- Color roles were inferred from frequency and visual context — the analyzer labeled most teal/warm/pastel values as generic "accent". The teal-ramp and warm-ramp orderings are derived from luminance, not from a named token system.
- No measured text colors below `#151515` exist; secondary/muted text greys would need a dedicated capture.
- Shadow, elevation, and animation/transition timings are entirely out of scope of the measured data.
- Form input, focus, and validation states were not captured and are not documented.
- Only two pages (landing, pricing) were captured; component coverage for docs, blog, or product surfaces is unknown.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/moderntreasury/design-md -->
