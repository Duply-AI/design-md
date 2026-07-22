---
version: alpha
name: Air.inc-design-analysis
description: "A near-monochrome creative-ops interface built on pure white canvas and black ink, distinguished by a large categorical accent palette (16 measured hues) used for color-coded tags, brand-kit swatches, or asset labels rather than for primary UI chrome."

colors:
  primary: "#000000"
  ink-soft: "#1b1b1b"
  canvas: "#ffffff"
  surface-soft: "#f5f5f5"
  accent-blue-soft: "#e5edfa"
  accent-cream: "#fff8dc"
  accent-blue: "#4c96f7"
  accent-red: "#ee3238"
  accent-green: "#4caf53"
  accent-sky: "#33b6ff"
  accent-purple: "#8b53d0"
  accent-orange: "#f25502"
  accent-azure: "#1095ed"
  accent-cobalt: "#0563e9"
  accent-gold: "#d1b310"
  accent-crimson: "#e41a2f"
  accent-pink: "#e5aad8"
  accent-taupe: "#dcc9c1"
  accent-brown: "#af7757"
  accent-teal: "#257d64"

typography:
  display-lg:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0
  title-md:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  body-md:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  pill: 9999px

spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  button-primary-active:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
  surface-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  hero-tint-band:
    backgroundColor: "{colors.accent-blue-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
    padding: 48px
  color-swatch-chip:
    backgroundColor: "{colors.accent-blue}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  badge-tag:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px

---

## Overview

The captured analysis for Air.inc is unusually sparse: the crawler recovered a rich, structured **color** signal across three pages (landing, page, pricing) but returned **zero** measurements for typography, spacing, radius, shadows, and components. Everything in this document beyond the Colors section is therefore either directly traceable to a measured hex value, or explicitly flagged as **derived** (a generic, conventional placeholder inserted only to satisfy the required document structure) — never a guess dressed up as fact.

What the color data does tell us is distinctive: the interface sits on a pure white canvas (`{colors.canvas}` — #ffffff) with black (`{colors.primary}` — #000000) as the only high-frequency ink/action color, plus a near-black secondary (`{colors.ink-soft}` — #1b1b1b) and a light gray surface (`{colors.surface-soft}` — #f5f5f5). Layered on top of that restrained neutral base is a wide, evenly-weighted set of **sixteen accent hues**, each appearing at low-but-equal frequency (6 occurrences apiece, except one soft blue tint at 27). That pattern — many distinct hues, each used about the same number of times — is the signature of a **categorical color system**: brand-kit swatches, asset tags, or color-coded labels, not a hero gradient or marketing accent. Air.inc (a creative-asset/brand-ops product) plausibly surfaces this palette in a color-picker, tag list, or brand-color showcase captured on one of the three crawled pages.

Because no font, spacing, radius, or component geometry was measured, this entry documents the color system with confidence and documents everything else as a conventional, clearly-labeled scaffold pending a deeper capture pass.

**Key Characteristics:**
- Monochrome UI base: white canvas, black ink, no measured secondary neutral beyond `{colors.ink-soft}` and `{colors.surface-soft}`.
- One dominant soft-blue tint (`{colors.accent-blue-soft}` — #e5edfa, frequency 27) — likely a background wash behind a hero or callout section, not a button color.
- Sixteen total accent hues at equal low frequency — a categorical/tag palette rather than a single "brand accent."
- No typography, spacing, radius, shadow, or component data was captured — all such values in this document are marked derived and are placeholders, not measurements.

## Colors

### Neutral / Base
- **Primary / Ink** (`{colors.primary}` — #000000): The dominant non-white color by frequency (60 occurrences). Used here as the standard ink/primary-action color for text and buttons pending component-level confirmation.
- **Ink Soft** (`{colors.ink-soft}` — #1b1b1b): A near-black secondary tone (9 occurrences). Reused in this document as the `button-primary-active` pressed-state color, since it is the only measured value darker-adjacent to pure black.
- **Canvas** (`{colors.canvas}` — #ffffff): The page floor (150 occurrences, by far the most frequent color measured).
- **Surface Soft** (`{colors.surface-soft}` — #f5f5f5): A light gray (12 occurrences), used here for card/section surfaces.

### Accent System
- **Accent Blue Soft** (`{colors.accent-blue-soft}` — #e5edfa): The most frequent accent (27 occurrences) — a pale blue tint, most likely a section or card background wash given its frequency relative to the other accents.
- **Categorical Palette** (each at 6 occurrences): `{colors.accent-cream}` #fff8dc, `{colors.accent-blue}` #4c96f7, `{colors.accent-red}` #ee3238, `{colors.accent-green}` #4caf53, `{colors.accent-sky}` #33b6ff, `{colors.accent-purple}` #8b53d0, `{colors.accent-orange}` #f25502, `{colors.accent-azure}` #1095ed, `{colors.accent-cobalt}` #0563e9, `{colors.accent-gold}` #d1b310, `{colors.accent-crimson}` #e41a2f, `{colors.accent-pink}` #e5aad8, `{colors.accent-taupe}` #dcc9c1, `{colors.accent-brown}` #af7757, `{colors.accent-teal}` #257d64.

  The equal frequency across fifteen distinct hues strongly suggests this is a fixed categorical swatch set (e.g., a brand-color picker or asset-tag color list) rather than incidental illustration colors. No semantic mapping (e.g., "success = green") can be confirmed from frequency data alone — see Known Gaps.

### Semantic
No semantic (success/warning/error) roles could be confidently isolated from the flat frequency list — several accent hues (red, green) are plausible candidates but assigning them a semantic role would be a guess. They are documented only as `accent-red` / `accent-green`, not `error` / `success`.

## Typography

No typography was captured by the analyzer (the `typography` array in analysis.json is empty) — no font family, size, weight, line-height, or letter-spacing values exist for this site. Every value below is a **derived** generic placeholder using a system-font stack, included only to satisfy the required document schema. None of these values should be treated as representative of Air.inc's actual type system.

| Token | Size | Weight | Line Height | Letter Spacing | Status |
|---|---|---|---|---|---|
| `{typography.display-lg}` | 48px | 600 | 1.1 | 0 | derived — generic placeholder, not measured |
| `{typography.title-md}` | 24px | 600 | 1.3 | 0 | derived — generic placeholder, not measured |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | derived — generic placeholder, not measured |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | derived — generic placeholder, not measured |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | derived — generic placeholder, not measured |

### Font Family
`fontFamily` is set to `"system-ui, -apple-system, sans-serif"` across every role — a neutral OS-default stack, chosen specifically because no actual typeface name was ever observed in the capture. This is a deliberate non-claim: it would be a faithfulness violation to assert Air.inc uses any specific named typeface (e.g., Inter, a custom grotesk) without evidence. `fonts_licensed` was also empty, so no licensed-typeface substitution note is required.

### Principles
None can be stated with confidence. A future capture pass with computed-style font extraction is required before this section can describe real hierarchy, weight rhythm, or tracking behavior.

## Layout

No spacing or grid measurements were captured (`spacing` array empty). The scale below is a **derived**, conventional 8px-multiple scaffold, not a measured rhythm — included only to satisfy the schema.

- **Base unit (derived):** 8px, following common web convention — not observed in the capture.
- **Tokens (all derived):** `{spacing.xs}` 8px · `{spacing.sm}` 16px · `{spacing.md}` 24px · `{spacing.lg}` 32px · `{spacing.xl}` 48px · `{spacing.section}` 96px.
- **Grid/container widths:** Not measured — no data exists on max-width, column count, or gutter sizing for any of the three captured pages.

Given the near-total absence of layout data, no claims are made here about hero split ratios, card grid density, or column counts. See Known Gaps.

## Elevation & Depth

No shadow values were captured (`shadows` array empty). No elevation table can be produced faithfully. If Air.inc uses drop shadows, borders, or flat card surfaces to express hierarchy, that treatment was not recorded by this analysis pass and must not be assumed. The only elevation-adjacent signal available is the color-frequency data itself: `{colors.surface-soft}` (#f5f5f5) appearing at low frequency (12) suggests it demarcates a small number of card-like surfaces against the dominant white canvas, but whether those surfaces carry a shadow, a border, or nothing at all is unmeasured.

## Shapes

No border-radius values were captured (`radius` array empty). The scale below is **derived** from common SaaS convention only, not measured:

| Token | Value | Status |
|---|---|---|
| `{rounded.xs}` | 4px | derived — not measured |
| `{rounded.sm}` | 8px | derived — not measured |
| `{rounded.md}` | 12px | derived — not measured |
| `{rounded.pill}` | 9999px | derived — not measured |

These are used below only where a component absolutely requires a radius value to satisfy the schema; none should be treated as confirmed Air.inc geometry.

## Components

No component inventory was captured (`components` array empty). The entries below are minimal, **derived** scaffolding built only from the confirmed color tokens, so that color usage has a plausible structural home. Sizing, padding, and exact geometry are placeholders (derived) and are not measured facts.

**`button-primary`** — Background `{colors.primary}` (#000000), text `{colors.canvas}` (#ffffff), type `{typography.button}` (derived), rounded `{rounded.sm}` (derived), padding 12px × 20px (derived). Presumed primary CTA styling based on black being the highest-frequency non-white/non-accent color; actual button markup was not isolated by the analyzer.

**`button-primary-active`** — Background shifts to `{colors.ink-soft}` (#1b1b1b), the only measured near-black tone available for a pressed-state approximation (reused, not invented).

**`surface-card`** — Background `{colors.surface-soft}` (#f5f5f5), text `{colors.primary}`, rounded `{rounded.md}` (derived), padding 24px (derived). A generic card surface inferred from the low-frequency gray token.

**`hero-tint-band`** — Background `{colors.accent-blue-soft}` (#e5edfa), text `{colors.primary}`, type `{typography.display-lg}` (derived). Given #e5edfa's comparatively high frequency (27) versus the other 15 accents (6 each), it most plausibly functions as a section-level background wash (e.g., a hero or feature band) rather than a small UI element — this placement is a reasoned inference from frequency, not a direct measurement.

**`badge-tag`** — Background `{colors.surface-soft}`, text `{colors.primary}`, type `{typography.caption}` (derived), rounded `{rounded.pill}` (derived), padding 4px × 12px (derived). Generic neutral tag shape.

**`color-swatch-chip`** — Background `{colors.accent-blue}` (representative example), text `{colors.canvas}`, type `{typography.caption}` (derived), rounded `{rounded.pill}` (derived), padding 4px × 10px (derived). This single entry stands in for the full 15-hue categorical set — `{colors.accent-cream}`, `{colors.accent-red}`, `{colors.accent-green}`, `{colors.accent-sky}`, `{colors.accent-purple}`, `{colors.accent-orange}`, `{colors.accent-azure}`, `{colors.accent-cobalt}`, `{colors.accent-gold}`, `{colors.accent-crimson}`, `{colors.accent-pink}`, `{colors.accent-taupe}`, `{colors.accent-brown}`, `{colors.accent-teal}` — each of which is a legitimate, measured swap-in for this same chip shape. The chip geometry itself is derived; only the fourteen additional fill colors are measured facts.

## Do's and Don'ts

### Do
- Use `{colors.primary}` (#000000) and `{colors.canvas}` (#ffffff) as the backbone of any UI built against this analysis — they are by far the most confidently measured tokens (210 combined occurrences).
- Treat the sixteen accent hues as a categorical set (tags, swatches, labels) — apply one hue per category, not as a single "brand color."
- Reserve `{colors.accent-blue-soft}` for larger surface washes rather than small UI chips, given its outsized frequency relative to the other fifteen accents.
- Re-run a full capture (typography, spacing, radius, shadow, component passes) before treating any non-color value in this document as production-ready.

### Don't
- Don't assume any specific typeface, spacing scale, radius scale, or shadow treatment from this document — none were measured. Every such value here is a labeled placeholder.
- Don't assign semantic meaning (success/error/warning) to any accent hue without further evidence; frequency data alone does not establish semantics.
- Don't treat `color-swatch-chip`'s padding/radius as confirmed geometry — only its fill-color options are measured.
- Don't add hover-state documentation; only default and active/pressed (`button-primary-active`) are in scope, and even that is a best-effort reuse of a measured near-black token, not a captured pressed-state style.

## Responsive Behavior

No breakpoint, container-width, or responsive-collapse data was captured for any of the three pages (landing, page, pricing). No table of breakpoints can be produced without inventing values, which would violate the faithfulness requirement. This entire section is therefore a gap — see Known Gaps for the specific missing data needed to complete it (breakpoint widths, grid column collapse behavior, touch-target sizing, nav collapse pattern).

## Iteration Guide

1. Treat the Colors section as the reliable foundation of this entry — it is the only fully measured token category.
2. Before adding any new component, re-verify against a fresh capture rather than extending the derived typography/spacing/radius scaffolding, which is placeholder only.
3. If a future capture confirms real font, spacing, or radius values, replace the `derived` entries wholesale rather than blending measured and placeholder values in the same token.
4. When documenting the accent palette in new components, always reference the named `accent-<hue>` tokens already declared here — never introduce a new hex even if it looks close to one of the sixteen measured hues.
5. Keep the pressed-state convention (`ink-soft` for pressed black) until a real active-state measurement is available.
6. No hover documentation, ever — default and active/pressed only, per system policy.

## Known Gaps

- **Typography was not captured at all.** No font family, size, weight, line-height, or letter-spacing exists in analysis.json. The typefaces, hierarchy, and voice of Air.inc's actual product are completely unknown from this data; the `system-ui` stack and type scale in this document are placeholders only.
- **Spacing was not captured.** No margin, padding, or section-rhythm values exist. The 8px-multiple scale used here is a generic convention, not observed.
- **Border radius was not captured.** No corner-radius values exist for buttons, cards, inputs, or images.
- **Shadows/elevation were not captured.** No box-shadow or z-depth data exists; the elevation model of the real product (flat vs. shadowed vs. bordered) is unknown.
- **Components were not captured.** No button, nav, card, input, or badge markup/style was isolated by the analyzer; every component in this document is a minimal derived scaffold built only to carry the confirmed color tokens.
- **Semantic color mapping is unconfirmed.** Whether `accent-red`/`accent-green` map to error/success states, or are purely categorical tag colors, cannot be determined from frequency data alone.
- **Page-level context is unknown.** Frequency counts are aggregated across "landing," "page," and "pricing" with no indication of which colors/components appear on which page, or in what UI region (nav, hero, footer, in-app screenshot, etc.).
- **fonts_licensed was empty** — this may mean no licensed font was detected, or that font detection did not run; it should not be read as confirmation that Air.inc uses only open-source type.
- Recommended next step: re-run analysis with computed-style capture enabled for `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, `border-radius`, `box-shadow`, and `padding`/`margin` on interactive elements (buttons, inputs, cards, nav) across all three pages before extending this document further.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/air/design-md -->
