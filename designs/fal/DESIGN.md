---
version: alpha
name: fal-design-analysis
description: "A developer-focused generative-media platform interface built on a near-black canvas with crisp white text, cool cyan brand voltage, and a small set of purple/pink/green accent signals. The system reads as fast, technical, and high-contrast — dark surfaces, hairline-thin borders, monochrome neutrals doing most of the work, and saturated cyan (#99edff) marking the primary brand moments. Generative-media output (images, video frames, model previews) supplies most of the on-page color; the chrome itself stays restrained and near-monochrome."

colors:
  brand-cyan: "#99edff"
  brand-pink: "#eb064a"
  brand-purple: "#5718c0"
  brand-purple-deep: "#4a17b0"
  brand-purple-light: "#ab77ff"
  accent-green: "#004012"
  ink: "#111827"
  ink-soft: "#171717"
  ink-strong: "#404040"
  body: "#374151"
  body-soft: "#4b5563"
  muted: "#6b7280"
  muted-soft: "#9ca3af"
  hairline: "#e5e7eb"
  hairline-soft: "#e5e5e5"
  surface-strong: "#d1d5db"
  surface-mid: "#d4d4d4"
  canvas: "#ffffff"
  surface-dark: "#09090b"
  surface-dark-elevated: "#121216"
  on-dark: "#ffffff"
  on-dark-soft: "#9ca3af"
  on-primary: "#09090b"

typography:
  display-xl:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -2px
  display-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1.5px
  display-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -1px
  title-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  title-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
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
  top-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 64px
  button-primary:
    backgroundColor: "{colors.brand-cyan}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-secondary:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
  hero-band:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 96px
  model-card:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  code-block:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: 16px
  pricing-tier-card:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-card-featured:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 14px
    height: 40px
  badge-pill:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.brand-cyan}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

fal.ai's marketing surface is a fast, technical, developer-first interface built on a near-black canvas (`{colors.surface-dark}` — #09090b) with crisp white text (`{colors.on-dark}` — #ffffff). The system reads as an inference/generative-media platform — high contrast, hairline-thin borders, monochrome neutrals doing the structural work, and a single saturated cool accent (`{colors.brand-cyan}` — #99edff) carrying the primary brand voltage on CTAs and highlights.

The chrome is deliberately restrained: dark surfaces, slightly-elevated dark cards (`{colors.surface-dark-elevated}` — #121216), and a long ramp of gray neutrals (`{colors.muted-soft}` — #9ca3af through `{colors.ink}` — #111827) handling secondary text and dividers. The page gets most of its actual color from generative-media output — model preview images, video frames, sample renders — shown inside cards. The interface frames that output rather than competing with it.

Beyond cyan, a small accent set appears in punctuation moments: pink/red (`{colors.brand-pink}` — #eb064a), purple (`{colors.brand-purple}` — #5718c0, `{colors.brand-purple-deep}` — #4a17b0, `{colors.brand-purple-light}` — #ab77ff), and a deep green (`{colors.accent-green}` — #004012). These are used sparingly — gradient washes, model-category tags, status pills — never on the primary action layer.

**Key Characteristics:**
- Near-black canvas (`{colors.surface-dark}` — #09090b) with white text. The default page floor is dark, not light — a developer-tool aesthetic.
- Cyan primary CTA (`{colors.brand-cyan}` — #99edff) with dark text (`{colors.on-primary}` — #09090b) on top. The high-chroma cyan-on-dark is the system's signature brand moment.
- Elevated dark cards (`{colors.surface-dark-elevated}` — #121216) sit just barely above the canvas — depth comes from hairline borders and subtle tone shift, not heavy shadow.
- A long monochrome neutral ramp (#9ca3af / #6b7280 / #4b5563 / #374151 / #404040 / #171717 / #111827) handles text hierarchy and dividers — most of the system is grayscale.
- Generative-media output supplies on-page color. Model cards show real image/video previews; the chrome stays monochrome around them.
- Accent set (purple, pink, green) appears only in tags, gradients, and status punctuation — scarce, never on primary actions.
- The footer keeps the same dark surface — there is no light/dark inversion since the whole page is already dark.

## Colors

### Brand & Accent
- **Brand Cyan** (`{colors.brand-cyan}` — #99edff): The signature accent. Primary CTA fills, key inline highlights, brand punctuation against the dark canvas. The high-saturation cool tone is the one consistent voltage in an otherwise monochrome system.
- **Brand Pink** (`{colors.brand-pink}` — #eb064a): A hot pink/red used for accent gradients, occasional category markers, and emphasis moments.
- **Brand Purple set** (`{colors.brand-purple}` — #5718c0, `{colors.brand-purple-deep}` — #4a17b0, `{colors.brand-purple-light}` — #ab77ff): Purples used in gradient washes and model/category accents. The light purple appears as inline highlight; the deeper purples anchor gradients.
- **Accent Green** (`{colors.accent-green}` — #004012): A deep green used sparingly as a status or category accent.

### Surface
- **Surface Dark** (`{colors.surface-dark}` — #09090b): The default page floor and footer background.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #121216): Cards, code blocks, inputs — the barely-raised dark surface layered above the canvas.
- **Canvas** (`{colors.canvas}` — #ffffff): Used for inverted surfaces — the featured pricing tier, occasional light callout cards, and as a base when light content surfaces are needed.
- **Surface Strong** (`{colors.surface-strong}` — #d1d5db) / **Surface Mid** (`{colors.surface-mid}` — #d4d4d4): Light-mode neutral fills used on inverted surfaces and dividers.
- **Hairline** (`{colors.hairline}` — #e5e7eb) / **Hairline Soft** (`{colors.hairline-soft}` — #e5e5e5): 1px border tones used on light/inverted surfaces.

### Text
- **Ink** (`{colors.ink}` — #111827): Primary text on light/inverted surfaces.
- **Ink Soft** (`{colors.ink-soft}` — #171717) / **Ink Strong** (`{colors.ink-strong}` — #404040): Near-black tones for dense text and dark-on-light fills.
- **Body** (`{colors.body}` — #374151) / **Body Soft** (`{colors.body-soft}` — #4b5563): Running-text colors on light surfaces.
- **Muted** (`{colors.muted}` — #6b7280) / **Muted Soft** (`{colors.muted-soft}` — #9ca3af): Secondary and tertiary text. `{colors.muted-soft}` also serves as footer body text on the dark surface (`{colors.on-dark-soft}`).
- **On Dark** (`{colors.on-dark}` — #ffffff): All primary text on the dark canvas.
- **On Primary** (`{colors.on-primary}` — #09090b): Dark text placed on the cyan primary button.

### Semantic
No dedicated success/warning/error tokens were measured. The accent set (cyan/pink/purple/green) currently absorbs status-signal duties; a formal semantic scale is a Known Gap.

## Typography

### Font Family
No font family, size, weight, or line-height values were captured in the measured analysis (the `typography` array is empty). The typography scale below is **derived** from the visual hierarchy in the reference screenshots and a conventional developer-tool baseline; treat every value as provisional until measured. The declared stack uses **Inter** with a system-sans fallback (`-apple-system, BlinkMacSystemFont, sans-serif`) as a safe substitute for the page's geometric/grotesque sans, and a `ui-monospace` stack for code blocks (fal.ai's pages carry inline code/API snippets).

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 600 | 1.05 | -2px | Hero h1 (derived) |
| `{typography.display-lg}` | 48px | 600 | 1.1 | -1.5px | Section heads (derived) |
| `{typography.display-md}` | 36px | 600 | 1.15 | -1px | Sub-section heads, card group titles (derived) |
| `{typography.title-lg}` | 24px | 600 | 1.3 | -0.3px | Pricing plan names, large card titles (derived) |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Model/feature card titles (derived) |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | Small card titles, list labels (derived) |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running-text (derived) |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print (derived) |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions (derived) |
| `{typography.code}` | 14px | 400 | 1.5 | 0 | API snippets, code blocks (derived) |
| `{typography.button}` | 14px | 600 | 1 | 0 | Button labels (derived) |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav items (derived) |

### Principles
The intended voice (derived from screenshots) is high-contrast white-on-dark with tight display tracking. Display sizes carry negative letter-spacing; body and UI copy stay neutral. Code blocks use a monospace face — the developer/API surface is core to fal.ai's identity, so monospace type appears prominently in copy-paste integration examples.

### Note on Font Substitutes
No licensed/custom font was flagged in `fonts_licensed`, but the actual typeface was not measured. **Inter** (weight 400–600) is the documented substitute for body and display; **Manrope** is a reasonable alternative for the display tier. **ui-monospace / SF Mono / Menlo** covers code. Replace these once the live font stack is measured.

## Layout

### Spacing System
No spacing values were measured (the `spacing` array is empty). The scale below is **derived** from a conventional 4px base unit and should be confirmed against the live layout.
- **Base unit:** 4px (derived).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) between major bands (derived).
- **Card internal padding:** `{spacing.xl}` (32px) for feature/pricing cards; `{spacing.lg}` (24px) for model cards (derived).

### Grid & Container
- **Max content width:** ~1200px centered (derived — not measured).
- **Model grids:** multi-up galleries of model preview cards at desktop, reducing columns at smaller widths.
- **Pricing grid:** multi-up tier cards at desktop, collapsing to 1-up on mobile.
- **Footer:** multi-column link list at desktop.

All grid and container values are derived placeholders — see Known Gaps.

### Whitespace Philosophy
The dark canvas reads as dense and technical but uses clear separation between bands. Model preview galleries pack tighter than editorial copy sections, letting the generative-media output dominate while the chrome recedes.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | `{colors.surface-dark}`, no border | Page canvas, hero band, footer |
| Elevated card | `{colors.surface-dark-elevated}` fill, optional hairline | Model cards, feature cards, code blocks, inputs |
| Inverted | `{colors.canvas}` fill | Featured pricing tier, light callout surfaces |

The system's depth comes from **tone shift, not shadow** — the elevated dark surface (#121216) sits a few values above the canvas (#09090b), and thin borders define edges. No shadow tokens were measured, so heavy elevation is not part of the documented system.

### Decorative Depth
- Accent gradients (cyan → purple → pink) may wash across hero or feature backgrounds; these were observed as color punctuation, not measured as tokens.
- Generative-media previews inside cards carry their own internal color and contrast — they supply the page's visual energy against the monochrome chrome.

## Shapes

### Border Radius Scale
No radius values were measured (the `radius` array is empty). The scale below is **derived** from common developer-tool conventions and the visual rounding in the screenshots.

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small inline accents (derived) |
| `{rounded.sm}` | 6px | Compact controls, dropdown items (derived) |
| `{rounded.md}` | 8px | Buttons, inputs, code blocks (derived) |
| `{rounded.lg}` | 12px | Content cards — model, feature, pricing (derived) |
| `{rounded.xl}` | 16px | Larger marquee containers (derived) |
| `{rounded.pill}` | 9999px | Badge/tag pills (derived) |
| `{rounded.full}` | 9999px | Avatars, icon buttons (derived) |

### Media Geometry
Model preview cards display generative output (images / video frames) clipped to the card's `{rounded.lg}` corners. Exact ratios were not measured.

## Components

### Top Navigation

**`top-nav`** — Dark nav bar pinned to the top. ~64px tall (derived), `{colors.surface-dark}` background, white wordmark + menu items in `{typography.nav-link}`. Right-side cluster carries a sign-in text link and a cyan primary CTA.

### Buttons

**`button-primary`** — The signature cyan CTA. Background `{colors.brand-cyan}` (#99edff), text `{colors.on-primary}` (#09090b — dark text on cyan), type `{typography.button}`, rounded `{rounded.md}`, padding 12px × 20px, height 40px (sizes derived). The cyan-on-dark fill is the brand's loudest moment.

**`button-secondary`** — Elevated dark button. Background `{colors.surface-dark-elevated}`, text `{colors.on-dark}`, optional hairline edge, same padding/height/radius as primary.

**`button-text-link`** — Inline text button, no background, text `{colors.on-dark}`. Used for "Sign in" and inline nav CTAs.

### Cards & Containers

**`hero-band`** — Dark hero with white display headline in `{typography.display-xl}`, supporting copy, and a button row. Background `{colors.surface-dark}`, vertical padding `{spacing.section}` (96px, derived).

**`model-card`** — The core gallery unit. Background `{colors.surface-dark-elevated}`, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px, derived). Holds a generative-media preview at top, model name in `{typography.title-md}`, and a short descriptor. The preview supplies the color; the card chrome stays monochrome.

**`feature-card`** — Editorial feature unit. Background `{colors.surface-dark-elevated}`, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px, derived). Title in `{typography.title-md}`, body in `{typography.body-md}`.

**`code-block`** — Monospace API/integration snippet. Background `{colors.surface-dark-elevated}`, text `{colors.on-dark}`, type `{typography.code}`, rounded `{rounded.md}`, padding `{spacing.md}` (16px, derived). Central to the developer-facing copy.

**`pricing-tier-card`** — Standard tier. Background `{colors.surface-dark-elevated}`, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px, derived). Plan name in `{typography.title-lg}`, feature checklist in `{typography.body-md}`, and a CTA at the bottom.

**`pricing-tier-card-featured`** — The featured tier inverts to `{colors.canvas}` (white) with `{colors.ink}` text. The light surface against the dark page IS the featured signal — no badge or scale shift required.

### Inputs & Forms

**`text-input`** — Background `{colors.surface-dark-elevated}`, text `{colors.on-dark}`, type `{typography.body-md}`, rounded `{rounded.md}`, padding 10px × 14px, height 40px (sizes derived). Hairline edge on focus (focus state not measured — see Known Gaps).

### Tags / Badges

**`badge-pill`** — Small pill label for model categories / status. Background `{colors.surface-dark-elevated}`, text `{colors.brand-cyan}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px × 12px (derived). The accent set (pink/purple/green) may color category badges on specific model types.

### Footer

**`footer`** — Dark footer sharing the page canvas. Background `{colors.surface-dark}` (#09090b), text `{colors.on-dark-soft}` (#9ca3af), type `{typography.body-sm}`, vertical padding 64px (derived). Multi-column link list. There is no light/dark inversion at the footer because the entire page is already dark.

## Do's and Don'ts

### Do
- Build on the dark canvas (`{colors.surface-dark}` — #09090b) with white text as the default. fal.ai is a dark-first developer tool.
- Reserve `{colors.brand-cyan}` (#99edff) for primary CTAs and key highlights, always with dark text (`{colors.on-primary}`) on top.
- Let generative-media output supply the page's color — keep the chrome monochrome around model previews.
- Use `{colors.surface-dark-elevated}` (#121216) for cards and depth — tone shift plus hairline borders, not heavy shadow.
- Keep the accent set (pink/purple/green) scarce — gradients, category tags, status punctuation only.
- Use the white inverted surface (`{colors.canvas}`) deliberately, e.g. the featured pricing tier — the inversion is the signal.

### Don't
- Don't put accent colors (pink/purple/green) on primary action buttons. Cyan owns the action layer.
- Don't introduce light backgrounds casually — the white surface is a scarce, deliberate inversion.
- Don't rely on heavy drop shadows for elevation; the system uses tonal layering. (No shadow tokens were measured.)
- Don't let the chrome compete with model preview imagery for color — the monochrome frame is intentional.
- Don't document hover states — default and active/pressed only.

## Responsive Behavior

No breakpoint or layout metrics were measured. The behavior below is **derived** from conventional patterns and should be verified against the live site.

### Breakpoints (derived)

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero display type scales down; model grid 1-up; pricing 1-up |
| Tablet | 768–1024px | Tightened nav; model grid 2-up; pricing 2-up |
| Desktop | 1024–1440px | Full nav; multi-up model gallery; multi-up pricing |
| Wide | > 1440px | Same as desktop with more outer breathing room; content width caps ~1200px |

### Touch Targets
- `{component.button-primary}` targets a minimum 40px height (derived).
- `{component.text-input}` height 40px (derived).

### Collapsing Strategy
- Top nav collapses to a hamburger menu on mobile (derived).
- Model preview galleries reduce column count rather than scaling cards down.
- Pricing tiers collapse to single-column; the featured white tier stays visually distinct at every breakpoint.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.model-card}`, `{component.pricing-tier-card-featured}`).
2. Variants of an existing component (`-featured`, `-active`, `-disabled`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. The dark canvas is the default; cyan is the only loud accent. Keep the rest monochrome.
6. Replace all values marked "derived" once typography, spacing, radius, and shadows are measured — those are placeholders, not ground truth.
7. When in doubt about emphasis: contrast against the dark canvas before adding accent color.

## Known Gaps

- **Typography was not measured** (the `typography` array is empty). All font families, sizes, weights, line-heights, and letter-spacing are derived placeholders. The actual typeface(s), including any monospace face for code, must be measured and substituted.
- **Spacing was not measured** (the `spacing` array is empty). The 4px scale and section/card padding values are derived and need confirmation.
- **Border radius was not measured** (the `radius` array is empty). The rounding scale is derived from screenshots and convention.
- **Shadows were not measured** (the `shadows` array is empty). Elevation is documented as tonal layering only; any real shadow treatment is unconfirmed.
- **Components were not measured** (the `components` array is empty). All component specs are inferred from screenshots plus the measured color palette; heights, paddings, and border treatments are derived.
- **No semantic color scale** (success/warning/error) was measured; the accent set currently absorbs status duties.
- Accent gradients (cyan → purple → pink) observed in screenshots are not captured as tokens; their stops and usage zones are unconfirmed.
- Form validation, focus, and disabled states beyond the base inputs/buttons are not extracted.
- Animation, transition timings, and any generative-media autoplay behavior are out of scope.
- Exact grid column counts, container max-width, and breakpoint values are derived, not measured.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/fal/design-md -->
