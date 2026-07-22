---
version: alpha
name: Cartesia-design-analysis
description: A near-monochrome, research-lab-flavored AI voice interface anchored on white canvas with deep-forest-green brand accents and a recurring dark charcoal surface mode. The system reads as quiet, technical, and confident — sober neutral grays carrying the structure, a single dark-green primary accent doing the brand work, and a small organic palette of soft greens, warm beige, and terracotta appearing as supporting tints. Color is the only firmly-measured layer; type, spacing, and radius are read from screenshot ground-truth and flagged as derived.

colors:
  primary: "#004e23"
  ink: "#171715"
  black: "#000000"
  body: "#2b2a27"
  body-soft: "#2a2826"
  muted: "#b8b4ae"
  hairline: "#cccccc"
  canvas: "#ffffff"
  surface-dark: "#1f1f1c"
  surface-dark-soft: "#2a2826"
  accent-green: "#d2edca"
  accent-green-soft: "#eff7f0"
  accent-green-faint: "#f5fff2"
  accent-beige: "#e4e3db"
  accent-terracotta: "#ca6353"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  error: "#ef4444"
  error-soft: "#f87171"

typography:
  display-xl:
    fontFamily: "Inter, sans-serif"
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -1px
  display-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.3px
  title-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 18px
    fontWeight: 500
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
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  sm: 6px
  md: 8px
  lg: 12px
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
    rounded: "{rounded.pill}"
    padding: 12px 20px
    height: 40px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
    height: 40px
  button-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
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
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card-green:
    backgroundColor: "{colors.accent-green-faint}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card-beige:
    backgroundColor: "{colors.accent-beige}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  dark-band:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.lg}"
    padding: 48px
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
  badge-pill:
    backgroundColor: "{colors.accent-green}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 14px
    height: 40px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Cartesia's marketing surface is a quiet, research-lab-flavored AI voice interface. The measured palette is firmly near-monochrome: white canvas (`{colors.canvas}` — #ffffff), a family of warm-charcoal neutrals (`{colors.ink}` — #171715, `{colors.surface-dark}` — #1f1f1c), and a soft mid gray (`{colors.muted}` — #b8b4ae) carrying secondary text. Against that sober structure, a single deep-forest-green (`{colors.primary}` — #004e23) does the brand work, supported by a small organic set of green tints, warm beige, and terracotta.

The system alternates between two surface modes: the default white canvas and a recurring dark-charcoal band (`{colors.surface-dark}` — #1f1f1c) used for product demonstrations, featured pricing, and the footer. The dark mode is not decorative — it frames the actual voice-generation product UI so it reads as a console rather than a marketing illustration.

Color is the only firmly-measured layer in this capture. Type, spacing, radius, and component geometry were read from the reference screenshots and are flagged **derived** throughout — they should be treated as starting points, not ground-truth, until a typed-token extraction is run. See Known Gaps for the full list.

**Key Characteristics:**
- Near-monochrome neutral base — white canvas, warm-charcoal ink (`{colors.ink}` — #171715), mid-gray secondary text (`{colors.muted}` — #b8b4ae), and a `{colors.hairline}` (#cccccc) divider tone.
- A single deep-forest-green brand accent (`{colors.primary}` — #004e23) doing nearly all the chromatic work; the green appears on CTAs, badges, and small highlights.
- An organic supporting tint set — `{colors.accent-green}` (#d2edca), `{colors.accent-green-soft}` (#eff7f0), `{colors.accent-green-faint}` (#f5fff2), `{colors.accent-beige}` (#e4e3db), and `{colors.accent-terracotta}` (#ca6353) — appearing on tinted cards and small accent moments.
- A recurring dark-charcoal surface mode (`{colors.surface-dark}` — #1f1f1c) for product UI, featured pricing, and the footer.
- Pill-shaped buttons (derived `{rounded.pill}`) — the rounded-capsule CTA is the system's most recognizable interactive shape.
- Error states use `{colors.error}` (#ef4444) with a softer `{colors.error-soft}` (#f87171) for secondary states.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #004e23): The deep-forest-green brand accent. Primary CTAs, badge fills, brand highlights. This is the single hue that carries Cartesia's identity against an otherwise neutral field.
- **Accent Green** (`{colors.accent-green}` — #d2edca): A soft mid-green used for badge pills and small highlight fills.
- **Accent Green Soft** (`{colors.accent-green-soft}` — #eff7f0): A very pale green wash for tinted card backgrounds.
- **Accent Green Faint** (`{colors.accent-green-faint}` — #f5fff2): The faintest green tint — barely-there section or card backgrounds.
- **Accent Beige** (`{colors.accent-beige}` — #e4e3db): A warm neutral beige used as an alternate tinted-card surface, adding organic warmth without color.
- **Accent Terracotta** (`{colors.accent-terracotta}` — #ca6353): A muted clay-red used sparingly as a warm accent / illustration tone.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor.
- **Surface Dark** (`{colors.surface-dark}` — #1f1f1c): The recurring dark band — product UI frames, featured pricing card, footer.
- **Surface Dark Soft** (`{colors.surface-dark-soft}` — #2a2826): A slightly lighter charcoal for nested cards or elevated elements inside the dark mode.

### Text
- **Ink** (`{colors.ink}` — #171715): Headlines and primary text — a warm near-black rather than pure black.
- **Black** (`{colors.black}` — #000000): Pure black, used sparingly for maximum-contrast marks.
- **Body** (`{colors.body}` — #2b2a27): Default running-text tone.
- **Body Soft** (`{colors.body-soft}` — #2a2826): A near-identical secondary body tone observed on darker text blocks.
- **Muted** (`{colors.muted}` — #b8b4ae): Secondary text — sub-headings, captions, footer body.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #ffffff): Text on the green primary CTA and on dark surfaces.

### Structure
- **Hairline** (`{colors.hairline}` — #cccccc): The 1px divider / border tone on light surfaces.

### Semantic
- **Error** (`{colors.error}` — #ef4444): Validation errors, destructive states.
- **Error Soft** (`{colors.error-soft}` — #f87171): A lighter red for secondary error states or accents.

## Typography

### Font Family
**Derived** — no typography was extracted in this capture. The reference screenshots show a single clean grotesque/neo-grotesque sans-serif across display and body, with no distinct serif or monospace voice in the marketing copy. Pending a real extraction, this entry substitutes **Inter** as a faithful, openly-licensed stand-in for the observed letterforms, with the stack walking `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

All size, weight, line-height, and letter-spacing values below are **derived** from screenshot proportions and standard SaaS baselines — treat them as a starting scale, not measured truth.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 500 | 1.05 | -1.5px | Hero h1 (derived) |
| `{typography.display-lg}` | 40px | 500 | 1.1 | -1px | Section heads (derived) |
| `{typography.display-md}` | 30px | 500 | 1.15 | -0.5px | Sub-section heads, card titles (derived) |
| `{typography.title-lg}` | 22px | 500 | 1.3 | -0.3px | Pricing plan names (derived) |
| `{typography.title-md}` | 18px | 500 | 1.4 | 0 | Feature card titles (derived) |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running-text (derived) |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print (derived) |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions (derived) |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | Button labels (derived) |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items (derived) |

### Principles
The observed voice is restrained — a single sans-serif family at medium weight (≈500) for display, regular (400) for body. Negative letter-spacing on display sizes is **derived** from the tight, technical look of the headlines. Until a typed extraction confirms the actual face and weights, do not treat these as canonical.

### Note on Font Substitutes
The actual marketing typeface was not captured. **Inter** (weight 400–500) is the documented open-source substitute here; if a future extraction reveals a licensed or custom face, document it with an open substitute and replace the stack. No font was flagged in `fonts_licensed`.

## Layout

### Spacing System
**Derived** — no spacing tokens were measured. The scale below is a standard 4px-based rhythm inferred from screenshot proportions.
- **Base unit:** 4px (derived).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) between major bands (derived).
- **Card internal padding:** `{spacing.lg}` (24px) to `{spacing.xl}` (32px) (derived).

### Grid & Container
- **Max content width:** ~1200px centered (derived).
- **Feature grids:** 3-up at desktop, collapsing to 2-up / 1-up (derived).
- **Pricing grid:** multi-column at desktop, collapsing to 1-up (derived).

### Whitespace Philosophy
The captured pages read as generous and calm — large vertical gaps, single-action bands, and lots of white breathing room around the dark product frames. Exact rhythm values are derived and should be confirmed.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero |
| Soft hairline | 1px `{colors.hairline}` border | Inputs, dividers, light cards |
| Tinted card | `{colors.accent-green-soft}` / `{colors.accent-beige}` fill — no shadow | Feature cards, tinted highlight blocks |
| Dark band | `{colors.surface-dark}` background | Product UI frames, featured pricing, footer — color contrast does the elevation work |

No shadow tokens were measured in this capture — the elevation model above is **derived** from screenshot observation. The system appears to lean on color-block contrast (light vs. dark surface) rather than drop shadows. Confirm shadow usage before encoding any.

## Shapes

### Border Radius Scale
**Derived** — no radius tokens were measured. The screenshots show rounded cards and clearly capsule-shaped buttons; the scale below is inferred.

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 6px | Small inline elements (derived) |
| `{rounded.md}` | 8px | Text inputs (derived) |
| `{rounded.lg}` | 12px | Content cards, pricing tiers, dark bands (derived) |
| `{rounded.pill}` | 9999px | Pill-shaped CTA buttons, badges (derived) |
| `{rounded.full}` | 9999px | Avatars / circular elements (derived) |

### Photography Geometry
Product UI is shown inside dark-charcoal frames with rounded corners (derived `{rounded.lg}`). Exact corner radii were not measured.

## Components

All component geometry (padding, height, radius) below is **derived** from screenshot ground-truth; only the color references resolve to measured tokens.

### Top Navigation

**`top-nav`** — White nav bar at the top of every page. `{colors.canvas}` background, `{colors.ink}` text, `{typography.nav-link}` menu items, derived 64px height. Carries the Cartesia wordmark at left, horizontal menu center, and a right-side CTA cluster.

### Buttons

**`button-primary`** — The signature pill CTA. Background `{colors.primary}` (#004e23), text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.pill}` (derived), padding 12px × 20px, height 40px (derived).

**`button-secondary`** — White pill button. Background `{colors.canvas}`, text `{colors.ink}`, hairline border in `{colors.hairline}`, same geometry as primary.

**`button-dark`** — Dark pill button used inside / against light bands. Background `{colors.surface-dark}`, text `{colors.on-dark}`, rounded `{rounded.pill}`.

**`button-text-link`** — Inline text button, no background, `{colors.ink}` label.

### Cards & Containers

**`hero-band`** — White-canvas hero. Background `{colors.canvas}`, text `{colors.ink}`, headline in `{typography.display-xl}`, derived 96px vertical padding.

**`feature-card`** — Default white feature card. Background `{colors.canvas}`, text `{colors.ink}`, title in `{typography.title-md}`, rounded `{rounded.lg}`, padding `{spacing.lg}` (derived).

**`feature-card-green`** — Tinted variant on a pale-green wash. Background `{colors.accent-green-faint}` (#f5fff2), text `{colors.ink}`. Used for highlighted feature blocks.

**`feature-card-beige`** — Warm tinted variant. Background `{colors.accent-beige}` (#e4e3db), text `{colors.ink}`. Alternate organic-warmth card.

**`dark-band`** — A full-width dark surface band framing product UI demonstrations. Background `{colors.surface-dark}` (#1f1f1c), text `{colors.on-dark}`, headline in `{typography.display-lg}`, rounded `{rounded.lg}`, derived 48px padding.

**`pricing-tier-card`** — Standard pricing tier. Background `{colors.canvas}`, text `{colors.ink}`, plan name in `{typography.title-lg}`, rounded `{rounded.lg}`, derived 32px padding.

**`pricing-tier-card-featured`** — Featured tier inverts to dark. Background `{colors.surface-dark}`, text `{colors.on-dark}`. The dark surface IS the featured signal.

### Tags / Badges

**`badge-pill`** — Small green pill label. Background `{colors.accent-green}` (#d2edca), text `{colors.primary}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px × 12px (derived).

### Inputs & Forms

**`text-input`** — Standard text input. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}`, derived 40px height, hairline border in `{colors.hairline}`.

### Footer

**`footer`** — Dark footer that closes the page. Background `{colors.surface-dark}` (#1f1f1c), text `{colors.muted}` (#b8b4ae), type `{typography.body-sm}`, derived 64px padding.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#004e23) as the single brand accent. The system is near-monochrome — green is the one chromatic voice.
- Use the dark band (`{colors.surface-dark}`) to frame product UI, featured pricing, and the footer. The light-to-dark alternation is the editorial rhythm.
- Use tinted cards (`{colors.accent-green-faint}`, `{colors.accent-beige}`) sparingly for warmth, not as the default card.
- Keep secondary text in `{colors.muted}` (#b8b4ae) — the warm gray reads softer than pure gray.
- Use `{colors.ink}` (#171715) rather than `{colors.black}` (#000000) for headline text; pure black is reserved for rare maximum-contrast marks.

### Don't
- Don't introduce a second saturated accent hue. The terracotta (`{colors.accent-terracotta}`) and greens are tints, not co-equal brand colors.
- Don't use `{colors.error}` red anywhere except validation / destructive states.
- Don't treat the derived type, spacing, and radius values as canonical — confirm them before shipping.
- Don't add dark cards casually outside the established dark-band, featured-pricing, and footer uses.
- Don't document hover states — default and active/pressed only.

## Responsive Behavior

**Derived** — no breakpoint data was captured. The values below are inferred from standard responsive SaaS layouts and screenshot composition.

### Breakpoints

| Name | Width | Key Changes (derived) |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero headline scales down; feature grids 1-up; pricing 1-up; footer collapses to single column |
| Tablet | 768–1024px | Horizontal nav tightens; feature cards 2-up |
| Desktop | 1024–1440px | Full nav; 3-up feature cards; multi-column pricing |
| Wide | > 1440px | Same as desktop with more outer breathing room; content caps ~1200px |

### Touch Targets
- `{component.button-primary}` at a derived minimum of 40 × 40px.
- `{component.text-input}` at a derived 40px height.

### Collapsing Strategy
- Top nav presumed to collapse to a hamburger at mobile (derived).
- Feature and pricing grids reduce columns rather than scaling cards (derived).
- Dark product-UI bands scale proportionally; the framed product chrome stays legible (derived).

## Iteration Guide

1. Focus on ONE component at a time and reference its YAML key directly (`{component.feature-card-green}`, `{component.pricing-tier-card-featured}`).
2. Variants of an existing component (`-featured`, `-green`, `-beige`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and Active/Pressed states only.
5. Treat every value marked **derived** as provisional — the next priority is a typed-token extraction to replace the inferred type, spacing, radius, and shadow scales.
6. Keep the palette near-monochrome; the deep-green primary is the only brand hue.
7. The dark band is a scarce, deliberate signal — product UI, featured pricing, footer only.

## Known Gaps

- **Typography was not measured** (analysis `typography: []`). All font families, sizes, weights, line-heights, and letter-spacing are derived from screenshots and substituted with Inter. The actual marketing typeface is unconfirmed.
- **Spacing was not measured** (analysis `spacing: []`). The 4px-based scale is derived and should be confirmed against the live site.
- **Radius was not measured** (analysis `radius: []`). The pill buttons and rounded cards are visible in screenshots but exact corner values are derived.
- **Shadows were not measured** (analysis `shadows: []`). The elevation model is inferred to be color-contrast-driven; confirm whether any drop shadows are used.
- **Components were not extracted** (analysis `components: []`). All component specs are reconstructed from screenshot ground-truth — only their color references resolve to measured tokens.
- The near-identical dark neutrals (`#2a2826` / `#2b2a27`) and the green tints (`#eff7f0` / `#f5fff2`) may represent rendering/anti-alias variants of single intended tokens; consolidate after a typed extraction.
- No `fonts_licensed` entries were flagged, so no licensed-face substitution was required beyond the general unknown-typeface substitution above.
- Breakpoints, touch-target sizes, and collapsing behavior are derived; no responsive measurement was captured.
- Animation, transition timings, and the actual voice-generation product UI (the interactive console shown in dark frames) are out of scope for this marketing-surface analysis.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/cartesia/design-md -->
