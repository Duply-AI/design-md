---
version: alpha
name: ClickUp-design-analysis
description: A high-energy productivity-SaaS marketing system anchored on white canvas with ClickUp's signature violet primary (#7b68ee) and a vivid pink-to-violet gradient accent family. The surface reads as bold, friendly, and dense — saturated brand color, deep near-black sections for contrast, and a measured neutral gray ramp carrying body text and hairlines. Color is the load-bearing brand signal here; type, spacing, and radius were not captured in this measurement pass and are documented as derived.

colors:
  primary: "#7b68ee"
  primary-deep: "#6647f0"
  primary-violet: "#7612fa"
  accent-blue: "#0091ff"
  accent-magenta: "#ff02f0"
  accent-pink: "#fa12e3"
  ink-strong: "#000000"
  ink: "#202020"
  ink-alt: "#111111"
  slate: "#292d34"
  body: "#646464"
  muted: "#838383"
  muted-soft: "#b4b4b4"
  surface-strong: "#cfcfcf"
  hairline: "#e8e8e8"
  hairline-soft: "#eeeeee"
  hairline-softer: "#f0f0f0"
  canvas: "#ffffff"
  surface-soft: "#f8f9fa"
  surface-dark: "#202020"
  surface-dark-elevated: "#2a2a2a"
  on-primary: "#ffffff"
  on-dark: "#ffffff"

typography:
  display-xl:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  display-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.5px
  display-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.3px
  title-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0
  title-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 18px
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
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 15px
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
    padding: 14px 24px
    height: 48px
  button-primary-active:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 24px
    height: 48px
  button-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
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
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 96px
  feature-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
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
    padding: 12px 16px
    height: 48px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  badge-pill:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  badge-pill-accent:
    backgroundColor: "{colors.accent-magenta}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.muted-soft}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

ClickUp's marketing surface is a bold, high-energy productivity-SaaS interface. The measured analysis returned a strong color signal and little else — so this entry treats **color as the documented, load-bearing brand layer** and flags type, spacing, radius, and shadow as derived (see Known Gaps).

The brand anchor is ClickUp's signature violet, `{colors.primary}` (#7b68ee) — the dominant action color across CTAs and brand moments. It sits inside a saturated accent family that powers the brand's pink-to-violet gradient look: `{colors.primary-violet}` (#7612fa), `{colors.accent-magenta}` (#ff02f0), `{colors.accent-pink}` (#fa12e3), and a cooler `{colors.accent-blue}` (#0091ff). These hues read as the vivid, almost neon brand voltage that distinguishes ClickUp from quieter SaaS peers.

Against that color, the structural surface is conventional: white canvas (`{colors.canvas}` — #ffffff), a measured neutral gray ramp from `{colors.surface-strong}` (#cfcfcf) down through `{colors.muted}` (#838383) and `{colors.body}` (#646464) to `{colors.ink}` (#202020), and deep near-black sections (`{colors.surface-dark}` — #202020 / `{colors.surface-dark-elevated}` — #2a2a2a) used for high-contrast bands and the footer.

The page rhythm alternates white feature bands, soft-gray cards, embedded product UI mockups, and occasional dark bands that flip the contrast. Brand color carries the energy; the neutral ramp keeps the dense content legible.

**Key Characteristics:**
- Signature violet primary `{colors.primary}` (#7b68ee) on white canvas; press/deep state shifts to `{colors.primary-deep}` (#6647f0).
- A vivid accent family — violet, magenta, pink, blue — used for gradient brand moments, badges, and highlight flourishes rather than as flat CTA fills.
- A full neutral gray ramp (#cfcfcf → #b4b4b4 → #838383 → #646464 → #202020 → #000000) carrying surfaces, hairlines, body text, and ink.
- Dark near-black bands (`{colors.surface-dark}` — #202020) used for high-contrast sections, featured pricing tiers, and the footer.
- Soft-gray feature cards (`{colors.surface-soft}` — #f8f9fa) holding product UI fragments.
- Type, radius, spacing, and shadow were not captured in this pass — all such values below are **derived** and must be re-measured before production use.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #7b68ee): ClickUp's signature violet. The dominant action and brand color — primary CTAs, brand marks, key highlights.
- **Primary Deep** (`{colors.primary-deep}` — #6647f0): A deeper violet used for the pressed/active CTA state and denser brand fills.
- **Primary Violet** (`{colors.primary-violet}` — #7612fa): A saturated violet used within gradient brand moments and accent strokes.
- **Accent Blue** (`{colors.accent-blue}` — #0091ff): A cooler accent used for links, info highlights, and gradient endpoints.
- **Accent Magenta** (`{colors.accent-magenta}` — #ff02f0) and **Accent Pink** (`{colors.accent-pink}` — #fa12e3): The hot end of the brand gradient — used on badges, highlight flourishes, and gradient sweeps. These are the system's loudest hues and appear sparingly as emphasis, not as body fills.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): Default page floor.
- **Surface Soft** (`{colors.surface-soft}` — #f8f9fa): Feature card and section-divider background.
- **Surface Strong** (`{colors.surface-strong}` — #cfcfcf): The highest-frequency neutral — borders, dividers, muted block fills, disabled tones.
- **Surface Dark** (`{colors.surface-dark}` — #202020): High-contrast dark bands, featured pricing tier, footer.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #2a2a2a): Nested cards inside dark bands.
- **Hairline** (`{colors.hairline}` — #e8e8e8): 1px border tone on light surfaces.
- **Hairline Soft** (`{colors.hairline-soft}` — #eeeeee) / **Hairline Softer** (`{colors.hairline-softer}` — #f0f0f0): Barely-visible dividers between white-on-white sections.

### Text
- **Ink Strong** (`{colors.ink-strong}` — #000000): Maximum-contrast headlines and marks.
- **Ink** (`{colors.ink}` — #202020): Default headline + primary text color.
- **Ink Alt** (`{colors.ink-alt}` — #111111): A near-black variant observed on some text/UI.
- **Slate** (`{colors.slate}` — #292d34): A blue-tinged dark used on legacy product UI text and chrome.
- **Body** (`{colors.body}` — #646464): Default running-text color.
- **Muted** (`{colors.muted}` — #838383): Secondary text — sub-headings, captions.
- **Muted Soft** (`{colors.muted-soft}` — #b4b4b4): Tertiary text — fine-print, footer body.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #ffffff): Text on violet CTAs and dark bands.

### Semantic
No dedicated success / warning / error tokens were captured in this pass — see Known Gaps.

## Typography

### Font Family
**The typography below is derived — no type tokens were captured in the measurement pass.** Font family, sizes, weights, line-heights, and letter-spacing are reasonable estimates from screenshot ground-truth and standard SaaS baselines, not measured values. They must be re-measured before use.

For the substitute, the entry specifies **Inter** with a system fallback stack (`-apple-system, BlinkMacSystemFont, sans-serif`). ClickUp's production marketing site uses a custom/branded display face; because no font was extracted and `fonts_licensed` was empty, Inter is documented here as an open, safe stand-in. If the real face is later confirmed to be licensed, document it with this same Inter substitution.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 700 | 1.1 | -1px | Hero h1 (derived) |
| `{typography.display-lg}` | 44px | 700 | 1.15 | -0.5px | Section heads (derived) |
| `{typography.display-md}` | 32px | 700 | 1.2 | -0.3px | Sub-section heads, card titles (derived) |
| `{typography.title-lg}` | 24px | 600 | 1.3 | 0 | Pricing plan names (derived) |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Feature card titles (derived) |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running-text (derived) |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print (derived) |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions (derived) |
| `{typography.button}` | 15px | 600 | 1.0 | 0 | Button labels (derived) |
| `{typography.nav-link}` | 15px | 500 | 1.4 | 0 | Top-nav items (derived) |

### Principles
Display type is bold (weight 700) with slight negative tracking — appropriate for a high-energy SaaS voice. Body text uses the neutral ramp (`{colors.body}` / `{colors.muted}`). Until real type tokens are measured, treat the entire hierarchy as a placeholder skeleton, not a faithful spec.

### Note on Font Substitutes
Inter is the documented open substitute. **Plus Jakarta Sans** (weight 700 display / 400 body) is a close alternative if a more geometric, slightly rounded character is preferred — but confirm against the real face before committing.

## Layout

### Spacing System
**The spacing scale below is derived — no spacing values were captured.** Treat as a default 4px-based skeleton pending re-measurement.
- **Base unit:** 4px (derived).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) between major bands (derived).
- **Card internal padding:** `{spacing.xl}` (32px) for feature and pricing cards; `{spacing.lg}` (24px) for product-mockup cards (derived).

### Grid & Container
- **Max content width:** ~1200px centered (derived from typical SaaS layout, not measured).
- **Feature card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile (derived).
- **Pricing grid:** up to 4-up at desktop, collapsing to 2-up then 1-up (derived).

### Whitespace Philosophy
ClickUp's marketing surface is denser than the typical minimal SaaS page — many feature claims, product fragments, and badges per band. The whitespace rhythm is therefore tighter than a luxury layout but still grid-aligned. Exact rhythm needs measurement.

## Elevation & Depth

**No shadow tokens were captured in this pass.** The treatments below are derived from screenshot ground-truth and must be re-measured.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero bands |
| Soft hairline | 1px `{colors.hairline}` border | Inputs, dividers, card outlines |
| Card surface | `{colors.surface-soft}` background — no shadow | Feature cards |
| Subtle drop shadow | Faint low-alpha shadow (derived) | Product-mockup cards, elevated pricing cards |
| Dark inversion | `{colors.surface-dark}` background | Featured pricing tier, dark bands, footer — color contrast does the elevation work |

The elevation philosophy reads as **soft and modern** — light hairlines and faint shadows on light surfaces, with dark color-block inversion for the strongest emphasis. Exact shadow values are unknown.

## Shapes

### Border Radius Scale
**The radius scale below is derived — no radius values were captured.** Treat as a default skeleton pending re-measurement.

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small accents (derived) |
| `{rounded.sm}` | 6px | Small inline controls (derived) |
| `{rounded.md}` | 8px | CTA buttons, text inputs (derived) |
| `{rounded.lg}` | 12px | Content cards (derived) |
| `{rounded.xl}` | 16px | Larger feature / mockup containers (derived) |
| `{rounded.pill}` | 9999px | Badge pills (derived) |
| `{rounded.full}` | 9999px | Avatars, icon buttons (derived) |

### Photography Geometry
Product UI fragments and mockups retain native chrome; container radii are derived (`{rounded.lg}` assumed). Not measured.

## Components

> All component dimensions (padding, height) below are **derived** — only the color references are anchored to measured tokens. Re-measure structural values before production use.

### Top Navigation

**`top-nav`** — White nav bar at the top of every page. Background `{colors.canvas}`, ink-color labels in `{typography.nav-link}`. Carries the ClickUp logo at left, primary horizontal menu center, and a right-side cluster with a sign-in text-link and a violet `{component.button-primary}`. Height derived at 72px.

### Buttons

**`button-primary`** — The signature CTA. Background `{colors.primary}` (#7b68ee), text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}`. Active state `button-primary-active` shifts to `{colors.primary-deep}` (#6647f0). Padding + height derived.

**`button-secondary`** — White button with hairline outline. Background `{colors.canvas}`, text `{colors.ink}`, same radius and (derived) dimensions as primary.

**`button-dark`** — Dark CTA used inside light bands for secondary emphasis. Background `{colors.surface-dark}`, text `{colors.on-dark}`.

**`button-text-link`** — Inline text button, no background, text in `{colors.primary}`.

### Cards & Containers

**`hero-band`** — White-canvas hero with h1 in `{typography.display-xl}`, sub-headline, and a CTA row. Vertical padding `{spacing.section}` (derived).

**`hero-band-dark`** — The dark variant for high-contrast hero/feature bands. Background `{colors.surface-dark}`, text `{colors.on-dark}`.

**`feature-card`** — Soft-gray card used in feature grids. Background `{colors.surface-soft}` (#f8f9fa), text `{colors.ink}`, rounded `{rounded.lg}`, padding `{spacing.xl}` (derived). Carries an icon, a `{typography.title-md}` title, and a `{typography.body-md}` description.

**`product-mockup-card`** — Card showing actual ClickUp product UI fragments (list views, board views, dashboards). Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.lg}` (derived).

**`pricing-tier-card`** — Standard pricing tier. Background `{colors.canvas}`, plan name in `{typography.title-lg}`, rounded `{rounded.lg}`, padding `{spacing.xl}` (derived), with a `{component.button-primary}` at the bottom.

**`pricing-tier-card-featured`** — The featured tier flips to `{colors.surface-dark}` (#202020), text inverts to `{colors.on-dark}`. The dark surface is the featured signal.

### Inputs & Forms

**`text-input`** — Standard text input. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}`, 1px `{colors.hairline}` border. Padding + height derived.

**`text-input-focused`** — Focus state; border shifts to `{colors.primary}` for emphasis (derived).

### Tags / Badges

**`badge-pill`** — Neutral pill label. Background `{colors.surface-soft}`, text `{colors.ink}`, type `{typography.caption}`, rounded `{rounded.pill}`.

**`badge-pill-accent`** — The loud accent badge. Background `{colors.accent-magenta}` (#ff02f0), text `{colors.on-primary}`. Used for "New" / promotional flags — the brightest moment in the system.

### Footer

**`footer`** — Dark footer that closes every page. Background `{colors.surface-dark}` (#202020), text `{colors.muted-soft}` (#b4b4b4). Multi-column link list with the ClickUp wordmark at top-left in `{colors.on-dark}`. Vertical padding derived at 64px.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#7b68ee) for primary CTAs and core brand moments; press shifts to `{colors.primary-deep}` (#6647f0).
- Use the hot accents (`{colors.accent-magenta}`, `{colors.accent-pink}`, `{colors.primary-violet}`) sparingly — gradient sweeps, badges, and highlight flourishes, not body fills.
- Lean on the neutral ramp (`{colors.surface-strong}` → `{colors.muted}` → `{colors.body}` → `{colors.ink}`) for surfaces, dividers, and text to keep dense content legible.
- Use `{component.pricing-tier-card-featured}` (dark inversion) as the featured-tier signal — color contrast carries the emphasis.
- Use `{component.feature-card}` (soft gray) for feature claims and `{component.product-mockup-card}` (white) to show real product UI.
- End the page with the dark `{component.footer}`.

### Don't
- Don't fill large surfaces with the hot magenta/pink accents — they are emphasis hues, not backgrounds.
- Don't treat the derived type, spacing, radius, or shadow values as authoritative — they are placeholders pending measurement.
- Don't inline accent hex on components — always reference a `{colors.*}` token.
- Don't add hover-state styling beyond the documented default and active/pressed states.
- Don't introduce a second dark surface tone beyond `{colors.surface-dark}` / `{colors.surface-dark-elevated}`.

## Responsive Behavior

> Breakpoint behavior below is **derived** from standard SaaS patterns — no responsive measurements were captured.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down; feature grids 1-up; pricing 1-up; footer columns collapse |
| Tablet | 768–1024px | Horizontal nav tightens; feature cards 2-up; pricing 2-up |
| Desktop | 1024–1440px | Full nav; 3-up feature cards; up to 4-up pricing tiers |
| Wide | > 1440px | Same as desktop with extra outer breathing room; content max ~1200px |

### Touch Targets
- `{component.button-primary}` derived at ≥48px height — comfortably above the 44px minimum.
- `{component.text-input}` derived at 48px height.

### Collapsing Strategy
- Top nav collapses to a hamburger at mobile.
- Feature and pricing grids reduce column count rather than shrinking cards.
- The featured-tier dark surface stays visually distinct at every breakpoint.

## Iteration Guide

1. **Re-measure first.** Type, spacing, radius, and shadow are all derived placeholders — running a proper capture is the highest-priority next step.
2. Focus on ONE component at a time, referencing its YAML key (`{component.feature-card}`, `{component.pricing-tier-card-featured}`).
3. Variants (`-active`, `-focused`, `-featured`) live as separate entries in `components:`.
4. Use `{token.refs}` everywhere — never inline hex.
5. Never document hover. Default and Active/Pressed states only.
6. Keep the hot accents scarce; the violet primary is the workhorse brand color.
7. The dark footer and featured tier are the only dark surfaces — don't add others casually.

## Known Gaps

- **Typography was not captured** — no font family, size, weight, line-height, or letter-spacing was measured. All typography tokens are derived estimates using Inter as an open substitute; the real ClickUp marketing face must be confirmed and re-measured.
- **Spacing scale was not captured** — the 4px-based scale is derived. Section padding, card padding, and gutters are estimates.
- **Border radius was not captured** — the entire radius scale is derived from typical SaaS values.
- **Shadows were not captured** — elevation treatments are inferred from screenshots; no shadow definitions exist.
- **Components were not captured** — all component structural values (padding, height, sizes) are derived; only color references are anchored to measured tokens.
- **Semantic colors (success / warning / error) were not captured** — the accent family is brand/gradient color, not a documented status set.
- `fonts_licensed` was empty in the measurement, so no licensed face is named; if the production display font is later confirmed as licensed, document it with the Inter substitution already specified.
- The role assignments in the source data flag several brand hues as "accent" and the gray ramp as "neutral"; the precise semantic role of `#0091ff` (link vs. gradient endpoint) and `#292d34` (legacy product slate vs. text) is inferred and should be confirmed.
- Animation, transition timings, and form validation states are out of scope for this pass.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/clickup/design-md -->
