---
version: alpha
name: Base44-design-analysis
description: A high-contrast, AI-app-builder interface built on pure black and white with a single electric lime-green accent. The system reads as confident developer-tool minimalism — near-monochrome canvas, generous negative space, and a chartreuse signal color (#ade900) reserved for primary actions and brand moments. Black is the dominant ink and a frequent full-bleed surface; lime is the only chromatic voltage in an otherwise grayscale world.

colors:
  ink: "#000000"
  ink-soft: "#0f0f0f"
  canvas: "#ffffff"
  surface-soft: "#f2f3f5"
  surface-strong: "#e6e6e6"
  hairline: "#eaeaea"
  muted: "#71767e"
  muted-soft: "#c0c2ce"
  brand: "#ade900"
  brand-soft: "#e0fe92"
  brand-pale: "#ebffb1"
  on-brand: "#000000"
  on-dark: "#ffffff"

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
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.on-brand}"
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
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
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
  hero-band-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 96px
  feature-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  feature-card-dark:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
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
    backgroundColor: "{colors.brand-pale}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.muted-soft}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Base44's marketing surface is high-contrast developer-tool minimalism — a near-monochrome world of pure black (`{colors.ink}` — #000000, the single most-measured color at 78% frequency) and white (`{colors.canvas}` — #ffffff) with one electric lime-green accent (`{colors.brand}` — #ade900) carrying all the brand voltage. The grayscale ramp does the structural work; the lime does the signaling work.

Black dominates the system in two ways at once: as the primary ink for type on white bands, and as a full-bleed dark surface for hero and feature sections. White is the alternating canvas. Between them sit a tight grayscale ramp — `{colors.surface-soft}` (#f2f3f5), `{colors.surface-strong}` (#e6e6e6), `{colors.hairline}` (#eaeaea), and the muted text tones `{colors.muted}` (#71767e) and `{colors.muted-soft}` (#c0c2ce). The lime appears in three intensities — `{colors.brand}` (#ade900) for actions, `{colors.brand-soft}` (#e0fe92) and `{colors.brand-pale}` (#ebffb1) for soft fills and badges.

The brand reads as a confident AI app-builder: minimal chrome, generous whitespace, and a single chromatic signal that never gets diluted. Lime green on black is the signature pairing — the accent at maximum saturation against the darkest surface.

**Key Characteristics:**
- Pure black-and-white foundation. `{colors.ink}` (#000000) is both the primary text color and a recurring full-bleed surface; `{colors.canvas}` (#ffffff) is the alternating canvas.
- A single lime-green accent (`{colors.brand}` — #ade900) reserved for primary CTAs and brand moments. The accent is scarce and high-voltage — it is the only chromatic color in the system.
- A three-step lime ramp — `{colors.brand}`, `{colors.brand-soft}` (#e0fe92), `{colors.brand-pale}` (#ebffb1) — for action, soft fill, and badge-pale respectively.
- A tight neutral ramp: `{colors.surface-soft}` (#f2f3f5), `{colors.surface-strong}` (#e6e6e6), `{colors.hairline}` (#eaeaea), `{colors.muted}` (#71767e), `{colors.muted-soft}` (#c0c2ce).
- Alternating light/dark band rhythm — white sections and black sections trade off down the page; lime CTAs read against both.
- Typography, spacing, radius, and component specs were NOT captured by the analyzer; all such values below are **derived** baselines documented for completeness — see Known Gaps.

## Colors

### Brand & Accent
- **Brand** (`{colors.brand}` — #ade900): The single accent. Electric lime-green, used on primary CTAs and brand-signal moments. This is the only saturated color in the system, and it appears against both white and black surfaces.
- **Brand Soft** (`{colors.brand-soft}` — #e0fe92): A lighter lime used for soft fills, highlight backgrounds, and secondary brand accents.
- **Brand Pale** (`{colors.brand-pale}` — #ebffb1): The palest lime, used for badge pills and very-soft tint backgrounds.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default light page floor.
- **Ink** (`{colors.ink}` — #000000): The primary text color AND a recurring full-bleed dark surface for hero/feature bands. The most frequent measured color in the system.
- **Ink Soft** (`{colors.ink-soft}` — #0f0f0f): A near-black used for nested cards or elevated panels inside dark bands.
- **Surface Soft** (`{colors.surface-soft}` — #f2f3f5): The lightest gray fill — feature cards, soft section dividers.
- **Surface Strong** (`{colors.surface-strong}` — #e6e6e6): A heavier gray fill / divider tone, second-most-frequent color in the system.
- **Hairline** (`{colors.hairline}` — #eaeaea): The 1px border tone on light surfaces.

### Text
- **Ink** (`{colors.ink}` — #000000): All primary headlines and body text on light surfaces.
- **Muted** (`{colors.muted}` — #71767e): Secondary text — sub-headings, captions, supporting copy.
- **Muted Soft** (`{colors.muted-soft}` — #c0c2ce): Tertiary text — fine print, footer link rows on dark surfaces.
- **On Dark** (`{colors.on-dark}` — #ffffff): Text on black bands and the footer.
- **On Brand** (`{colors.on-brand}` — #000000): Text on lime CTA buttons — black ink on lime for maximum contrast.

### Semantic
No dedicated success / warning / error tokens were measured. See Known Gaps.

## Typography

### Font Family
The analyzer captured **no typography data** — no font family, sizes, weights, or line heights were extracted. The roles below are **derived** baselines using **Inter** as a neutral, widely-available sans-serif substitute that matches the geometric-minimalist register typical of developer-tool brands. The fallback stack walks `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. The actual face used on base44.com should be confirmed against the live site before production use.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 600 | 1.05 | -2px | Hero h1 — derived |
| `{typography.display-lg}` | 48px | 600 | 1.1 | -1.5px | Section heads — derived |
| `{typography.display-md}` | 36px | 600 | 1.15 | -1px | Sub-section heads, card titles — derived |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Feature card titles — derived |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | Small card titles, list labels — derived |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running text — derived |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine print — derived |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions — derived |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | Button labels — derived |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items — derived |

### Principles
Because no real type measurements exist, treat this scale as a starting placeholder, not ground truth. The core principle that IS observable from screenshots: high-contrast headline-on-canvas with negative letter-spacing on display sizes for a tight, modern register.

### Note on Font Substitutes
`fonts_licensed` was empty — no licensed face was flagged. Inter is used here purely as a safe open-source substitute pending confirmation of the site's actual typeface. **Geist** or **Manrope** are equally valid substitutes if a more geometric character is desired.

## Layout

### Spacing System
- **Base unit:** 4px (derived — no spacing tokens were measured).
- **Tokens (derived):** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) between major bands — derived baseline.
- **Card internal padding:** `{spacing.xl}` (32px) for feature cards — derived.

### Grid & Container
- **Max content width:** ~1200px centered (derived — not measured).
- Feature card grids assumed 3-up at desktop, collapsing down at smaller breakpoints (derived).

### Whitespace Philosophy
Screenshots show generous negative space and clear single-action bands typical of minimal developer-tool marketing. Exact gutter and container values were not captured — the values above are derived defaults.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero bands |
| Soft hairline | 1px `{colors.hairline}` border | Inputs, card outlines on light surfaces |
| Card surface (light) | `{colors.surface-soft}` background — no shadow | Feature cards on white bands |
| Card surface (dark) | `{colors.ink-soft}` background — no shadow | Nested panels on black bands |
| Full-bleed dark band | `{colors.ink}` background | Hero / feature sections that invert the page |

No shadow tokens were measured (`shadows: []`). The system reads as flat-with-color-block-contrast: the black↔white band alternation does the elevation work rather than drop shadows. Any shadow specifics are unknown — see Known Gaps.

## Shapes

### Border Radius Scale
No radius values were measured (`radius: []`). The scale below is a **derived** baseline.

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Badge accents — derived |
| `{rounded.sm}` | 6px | Small inline buttons — derived |
| `{rounded.md}` | 8px | CTA buttons, text inputs — derived |
| `{rounded.lg}` | 12px | Content / feature cards — derived |
| `{rounded.xl}` | 16px | Large hero mockup containers — derived |
| `{rounded.pill}` | 9999px | Badge pills — derived |
| `{rounded.full}` | 9999px | Avatars, icon buttons — derived |

### Photography Geometry
Not captured. The actual corner radii and image ratios should be confirmed from the live site.

## Components

No component specs were extracted (`components: []`). Every component below is a **derived** baseline assembled from the measured color palette plus standard developer-tool conventions. Treat dimensions, padding, and radius as placeholders; treat color references as the faithful part (drawn from measured hexes).

### Top Navigation

**`top-nav`** — White nav bar pinned to the top. `{colors.canvas}` background, `{colors.ink}` text, `{typography.nav-link}`. Height 64px (derived). Carries the wordmark at left, menu center, and a right-side cluster ending in a `{component.button-primary}` lime CTA.

### Buttons

**`button-primary`** — The signature lime CTA. Background `{colors.brand}` (#ade900), text `{colors.on-brand}` (#000000) — black ink on lime for maximum contrast. Type `{typography.button}`, rounded `{rounded.md}`, padding 12px × 20px, height 40px (dimensions derived).

**`button-secondary`** — White button with hairline outline. Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, same padding/height/radius as primary (derived).

**`button-dark`** — Black button used on light bands as an alternate solid action. Background `{colors.ink}`, text `{colors.on-dark}`, `{typography.button}`, rounded `{rounded.md}` (derived).

**`button-text-link`** — Inline text button, transparent background, `{colors.ink}` label.

### Cards & Bands

**`hero-band`** — White-canvas hero. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.display-xl}`, vertical padding `{spacing.section}` (derived).

**`hero-band-dark`** — The inverted hero/feature band. Background `{colors.ink}` (#000000), text `{colors.on-dark}`. The black full-bleed surface is a recurring structural device, and lime CTAs read sharply against it.

**`feature-card`** — Light feature card. Background `{colors.surface-soft}` (#f2f3f5), text `{colors.ink}`, type `{typography.title-md}`, rounded `{rounded.lg}`, padding `{spacing.xl}` (radius and padding derived).

**`feature-card-dark`** — Dark feature card used inside black bands. Background `{colors.ink-soft}` (#0f0f0f), text `{colors.on-dark}`, type `{typography.title-md}`, rounded `{rounded.lg}` (derived).

### Inputs & Forms

**`text-input`** — Standard text input. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}`, padding 10px × 14px, height 40px, 1px `{colors.hairline}` border (all dimensions derived).

### Tags / Badges

**`badge-pill`** — Small pill label. Background `{colors.brand-pale}` (#ebffb1), text `{colors.ink}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px × 12px (radius/padding derived). The pale lime tint is the soft brand-signal moment.

### Footer

**`footer`** — Dark footer that closes the page. Background `{colors.ink}` (#000000), text `{colors.muted-soft}` (#c0c2ce), type `{typography.body-sm}`, vertical padding 64px (derived). Continuous with the system's recurring black surface.

## Do's and Don'ts

### Do
- Reserve `{colors.brand}` (#ade900) for primary CTAs and brand-signal moments. It is the only saturated color — keep it scarce.
- Put black ink (`{colors.on-brand}`) on lime buttons. The black-on-lime pairing is the contrast signature.
- Use the black↔white band alternation as the structural rhythm; let color-block contrast carry elevation instead of shadows.
- Use the three-step lime ramp deliberately: `{colors.brand}` for action, `{colors.brand-soft}` for fills, `{colors.brand-pale}` for badges.
- Keep neutral text in `{colors.muted}` (#71767e) and `{colors.muted-soft}` (#c0c2ce); reserve pure `{colors.ink}` for headlines and primary copy.

### Don't
- Don't introduce a second accent color. The system is monochrome plus one lime — adding a second hue breaks the voltage.
- Don't dilute lime by using it as a large background field on marketing bands; it belongs on small high-attention surfaces (buttons, badges).
- Don't put lime CTAs on lime backgrounds — the accent needs black or white behind it to signal.
- Don't add hover-state styling beyond default and active/pressed (no hover docs in this system).
- Don't treat the derived typography/spacing/radius values as ground truth — confirm against the live site first.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down; feature grids 1-up — derived |
| Tablet | 768–1024px | Tightened nav; feature cards 2-up — derived |
| Desktop | 1024–1440px | Full nav; 3-up feature grids — derived |
| Wide | > 1440px | Same as desktop, content capped ~1200px — derived |

No responsive measurements were captured; the table above is a **derived** baseline.

### Touch Targets
- `{component.button-primary}` at a derived minimum of 40 × 40px.
- `{component.text-input}` at a derived 40px height.

### Collapsing Strategy
Derived defaults: top nav collapses to hamburger on mobile; feature grids reduce columns rather than scaling cards; black↔white band alternation persists at all breakpoints.

## Iteration Guide

1. Focus on ONE component at a time and reference its YAML key directly (`{component.button-primary}`, `{component.feature-card-dark}`).
2. Variants (`-dark`, `-secondary`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. The color tokens are the trustworthy part of this spec (measured). Typography, spacing, radius, and component dimensions are derived — replace them with measured values as soon as they're available.
6. Keep lime scarce and high-contrast. When in doubt about emphasis, use black/white contrast before reaching for the accent.

## Known Gaps

- **Typography is entirely unmeasured** (`typography: []`). All font families, sizes, weights, line heights, and letter-spacing are derived baselines using Inter as a substitute. The site's real typeface is unconfirmed.
- **Spacing is entirely unmeasured** (`spacing: []`). The 4px-base scale and 96px section rhythm are derived defaults.
- **Border radius is entirely unmeasured** (`radius: []`). The full rounded scale is derived.
- **Shadows are entirely unmeasured** (`shadows: []`). The flat / color-block elevation model is inferred from screenshots, not measured.
- **Components are entirely unmeasured** (`components: []`). All component dimensions, padding, and structure are derived; only their color references trace back to measured values.
- Color **roles** were assigned by the analyst from frequency + screenshot context; the analyzer labeled #f2f3f5, #ebffb1, #ade900, #e0fe92, and #c0c2ce as "accent" and the rest "neutral" — the lime ramp and gray ramp split here reflects that plus visual judgment.
- No semantic colors (success / warning / error) were measured; they would need a form or product-state surface to confirm.
- Whether `{colors.ink}` (#000000) and `{colors.ink-soft}` (#0f0f0f) are two intentional tokens or anti-aliasing artifacts is unconfirmed; both were measured at distinct frequencies.
- Responsive breakpoints, touch-target sizes, and image ratios are all derived — no responsive data was captured.
- Animation and transition timings are out of scope.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/base44/design-md -->
