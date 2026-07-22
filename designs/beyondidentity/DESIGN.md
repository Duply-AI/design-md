---
version: alpha
name: BeyondIdentity-design-analysis
description: A high-contrast, security-software-first interface anchored on white canvas with black primary CTAs and a near-monochrome neutral palette. The system reads as enterprise-grade and trustworthy — crisp black-on-white type, light-gray section cards, hairline dividers in cool slate-grays, and a scarce dark-teal accent reserved for emphasis surfaces. Built on a Webflow foundation, the brand voltage comes from extreme contrast and disciplined restraint rather than from color.

colors:
  primary: "#000000"
  primary-active: "#222222"
  ink: "#000000"
  ink-soft: "#222326"
  body: "#333333"
  muted: "#9b9b9b"
  muted-soft: "#bbbbbb"
  hairline: "#d0d5dd"
  hairline-soft: "#eaecf0"
  border-gray: "#cccccc"
  border-soft: "#dddddd"
  border-strong: "#c8c8c8"
  canvas: "#ffffff"
  surface-soft: "#fafafa"
  surface-card: "#f7f7f7"
  surface-card-alt: "#f7f7f8"
  surface-muted: "#f3f3f3"
  surface-strong: "#eeeeee"
  surface-dark: "#222326"
  accent-teal: "#093333"
  accent-blue: "#3898ec"
  slate: "#344054"
  on-primary: "#ffffff"
  on-dark: "#ffffff"

typography:
  display-xl:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -1px
  display-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
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
    lineHeight: 1.6
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
    letterSpacing: 0.2px
  button:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
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
    padding: 12px 22px
    height: 44px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 22px
    height: 44px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.accent-blue}"
    typography: "{typography.body-md}"
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
  product-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  accent-band:
    backgroundColor: "{colors.accent-teal}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-md}"
    padding: 64px
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
    height: 44px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  badge-pill:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink-soft}"
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

Beyond Identity's marketing surface is a high-contrast, enterprise-security interface — white canvas (`{colors.canvas}` — #ffffff) with black primary CTAs (`{colors.primary}` — #000000) and a near-monochrome neutral palette spanning pure black to off-white. The system reads as trustworthy and engineered: crisp black-on-white type, light-gray section cards, and hairline dividers in cool slate-grays. It is the visual language of identity/authentication software — restrained, precise, and contrast-driven rather than color-driven.

The palette is overwhelmingly neutral. The two most-measured colors — black (#000000, frequency 75) and white (#ffffff, frequency 67) — define the entire contrast spine of the system. The rest of the high-frequency colors are grays: `{colors.muted-soft}` (#bbbbbb), `{colors.hairline-soft}` (#eaecf0), `{colors.body}` (#333333), `{colors.border-gray}` (#cccccc), `{colors.border-soft}` (#dddddd). Chromatic moments are rare and scarce: a dark-teal `{colors.accent-teal}` (#093333) for emphasis surfaces, a `{colors.accent-blue}` (#3898ec) for inline links, and a `{colors.slate}` (#344054) used in cool UI text.

The site is built on a Webflow foundation — the `{colors.accent-blue}` (#3898ec) is the Webflow default link blue, and the slate/hairline grays (`#d0d5dd`, `#344054`, `#eaecf0`) belong to a Webflow/Untitled-UI-style neutral ramp. This is documented here as measured fact, not styling intent.

**Key Characteristics:**
- White canvas with pure-black primary CTAs (`{colors.primary}` — #000000). The black/white contrast is the brand's loudest signal.
- A long neutral gray ramp — from `{colors.ink}` (#000000) through `{colors.body}` (#333333), `{colors.muted}` (#9b9b9b), `{colors.muted-soft}` (#bbbbbb), down to off-whites (`{colors.surface-soft}` #fafafa, `{colors.surface-card}` #f7f7f7).
- Cool slate-gray hairlines (`{colors.hairline}` #d0d5dd, `{colors.hairline-soft}` #eaecf0) for borders and dividers — the system's only deviation from pure neutral gray toward blue-gray.
- A scarce dark-teal accent (`{colors.accent-teal}` — #093333) reserved for emphasis bands or feature surfaces — the one chromatic surface in an otherwise monochrome system.
- Inline links in `{colors.accent-blue}` (#3898ec) — the Webflow-default link blue.
- Light-gray card surfaces (`{colors.surface-card}` — #f7f7f7) for feature and content cards; the dark surface (`{colors.surface-dark}` — #222326) reserved for footer and featured pricing tier.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #000000): The dominant action color — all primary CTAs and headline ink. The single most-measured color (frequency 75). Press state shifts to `{colors.primary-active}` (#222222, derived from the measured #222222 near-black).
- **Accent Teal** (`{colors.accent-teal}` — #093333): A deep dark-teal used as a scarce emphasis surface — feature/emphasis bands or accent panels. The only saturated color surface in the system.
- **Accent Blue** (`{colors.accent-blue}` — #3898ec): Inline link color. This is the Webflow-default link blue; it appears on text links, not on CTAs.
- **Slate** (`{colors.slate}` — #344054): A cool slate used in cooler UI text and small chrome — part of the Untitled-UI-style neutral ramp.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor (frequency 67).
- **Surface Soft** (`{colors.surface-soft}` — #fafafa): The faintest section tint.
- **Surface Card** (`{colors.surface-card}` — #f7f7f7) / **Surface Card Alt** (`{colors.surface-card-alt}` — #f7f7f8): Feature cards, content cards, alternating section backgrounds.
- **Surface Muted** (`{colors.surface-muted}` — #f3f3f3): A slightly stronger gray fill for nested panels.
- **Surface Strong** (`{colors.surface-strong}` — #eeeeee): Badge fills, disabled-control backgrounds, stronger section dividers.
- **Surface Dark** (`{colors.surface-dark}` — #222326): The footer background and featured pricing tier surface — the only dark neutral surface in the system.

### Borders & Hairlines
- **Hairline** (`{colors.hairline}` — #d0d5dd): Cool slate-gray 1px borders on cards and inputs.
- **Hairline Soft** (`{colors.hairline-soft}` — #eaecf0): The barely-visible divider between sections on white canvas (frequency 22).
- **Border Gray** (`{colors.border-gray}` — #cccccc) / **Border Soft** (`{colors.border-soft}` — #dddddd) / **Border Strong** (`{colors.border-strong}` — #c8c8c8): Neutral-gray border tones used for dividers, table rules, and outlined controls.

### Text
- **Ink** (`{colors.ink}` — #000000): Headlines and primary text.
- **Ink Soft** (`{colors.ink-soft}` — #222326): Near-black for dense body headers and dark-surface fills.
- **Body** (`{colors.body}` — #333333): Default running-text color.
- **Muted** (`{colors.muted}` — #9b9b9b): Secondary text — captions, sub-labels.
- **Muted Soft** (`{colors.muted-soft}` — #bbbbbb): Tertiary text and footer link rows (frequency 48).
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #ffffff): Text on black buttons and dark surfaces.

### Semantic
No dedicated success/warning/error tokens were measured. See Known Gaps.

## Typography

### Font Family
No font metrics were captured in the measured analysis (the typography set was empty). The type roles below are **derived** from a standard enterprise-SaaS scale and a neutral Inter-based fallback stack; they are placeholders to be confirmed against the live stylesheet, not measured values. The fallback stack walks `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

The role split follows standard practice:
- Display (bold, 600–700 weight, negative tracking) — hero h1, section heads
- Title (semibold) — card titles, sub-heads
- Body / UI (regular–medium) — paragraphs, nav, buttons, captions

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use | Source |
|---|---|---|---|---|---|---|
| `{typography.display-xl}` | 60px | 700 | 1.1 | -1.5px | Homepage h1 | derived |
| `{typography.display-lg}` | 44px | 700 | 1.15 | -1px | Section heads | derived |
| `{typography.display-md}` | 32px | 600 | 1.2 | -0.5px | Sub-section heads, accent-band heads | derived |
| `{typography.title-lg}` | 24px | 600 | 1.3 | -0.3px | Pricing plan names, card titles | derived |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Feature card titles | derived |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Default running-text | derived |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print | derived |
| `{typography.caption}` | 13px | 500 | 1.4 | 0.2px | Badge labels, captions | derived |
| `{typography.button}` | 15px | 600 | 1.0 | 0 | Button labels | derived |
| `{typography.nav-link}` | 15px | 500 | 1.4 | 0 | Top-nav items | derived |

### Principles
Until measured, treat the scale as provisional. The contrast principle is firm regardless of font: headlines render at `{colors.ink}` (#000000) on `{colors.canvas}` (#ffffff) — maximum contrast for an enterprise security feel. Body text steps down to `{colors.body}` (#333333) for comfortable reading.

### Note on Font Substitutes
No licensed typeface was flagged in the analysis (`fonts_licensed` was empty), and no font family was measured. If the live site uses a custom or licensed display face, substitute **Inter** at the documented weights, or **Manrope** as a slightly more geometric alternative. Do not claim to ship a font that has not been confirmed present.

## Layout

### Spacing System
No spacing values were measured (the spacing set was empty). The tokens below are **derived** from a standard 4px-base SaaS rhythm and should be confirmed against the live layout.

- **Base unit:** 4px (derived).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px (all derived).
- **Section padding:** `{spacing.section}` (96px) between editorial bands (derived).
- **Card internal padding:** `{spacing.xl}` (32px) for feature/pricing cards; `{spacing.lg}` (24px) for product-mockup cards (derived).

### Grid & Container
- **Max content width:** ~1200px centered (derived — typical Webflow marketing container).
- **Feature card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile (derived).
- **Pricing grid:** 3-up at desktop, 1-up at mobile (derived).
- **Footer:** multi-column link list at desktop wrapping to single-column at mobile (derived).

### Whitespace Philosophy
The system reads as generous and high-contrast: white canvas with widely-spaced bands, light-gray cards breaking the rhythm, and hairline dividers (`{colors.hairline-soft}` — #eaecf0) where sections share the white floor. Exact measurements were not captured; this philosophy is inferred from the neutral palette structure and the reference screenshots.

## Elevation & Depth

No shadow tokens were measured (the shadows set was empty). The elevation strategy below is inferred from the palette and reference screenshots and should be confirmed.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero bands |
| Soft hairline | 1px `{colors.hairline}` (#d0d5dd) or `{colors.hairline-soft}` (#eaecf0) border | Inputs, dividers, outlined cards |
| Card surface | `{colors.surface-card}` (#f7f7f7) background — no measured shadow | Feature cards, content cards |
| Dark surface | `{colors.surface-dark}` (#222326) background | Footer, featured pricing tier — color contrast does the elevation work |
| Accent surface | `{colors.accent-teal}` (#093333) background | Scarce emphasis bands |

The elevation philosophy is **contrast-driven** — the system leans on surface-tone differences (white → light-gray → dark / teal) rather than shadows to create depth. Any drop-shadow values would need to be confirmed against the live stylesheet.

## Shapes

No radius values were measured (the radius set was empty). The scale below is **derived** from common Webflow-SaaS defaults and should be confirmed.

### Border Radius Scale

| Token | Value | Use | Source |
|---|---|---|---|
| `{rounded.xs}` | 4px | Badge accents | derived |
| `{rounded.sm}` | 6px | Small inline controls | derived |
| `{rounded.md}` | 8px | Buttons, text inputs | derived |
| `{rounded.lg}` | 12px | Content cards, pricing cards | derived |
| `{rounded.xl}` | 16px | Hero / large mockup containers | derived |
| `{rounded.pill}` | 9999px | Badge pills | derived |
| `{rounded.full}` | 9999px | Avatars, icon buttons | derived |

### Photography Geometry
Image and avatar geometry were not measured. Assume product mockups retain native aspect ratios inside `{rounded.lg}` cards until confirmed.

## Components

No component specs were measured (the components set was empty). The components below are **derived** from the measured color palette plus the reference screenshots; geometry (padding, height, radius) values are derived and should be confirmed against the live build. Color references resolve only to measured tokens.

### Top Navigation

**`top-nav`** — White nav bar pinned to the top of the page. `{colors.canvas}` background, ink-color wordmark and menu in `{typography.nav-link}`, right-side cluster ending in a `{component.button-primary}` CTA. Height ~72px (derived).

### Buttons

**`button-primary`** — The signature CTA. Background `{colors.primary}` (#000000), text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}`, padding 12px × 22px, height 44px (geometry derived). Active state `button-primary-active` shifts to `{colors.primary-active}` (#222222).

**`button-secondary`** — White button with hairline outline. Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, matching padding/height/radius (derived).

**`button-text-link`** — Inline text button, no background, `{colors.ink}` label. Used for tertiary nav actions.

**`text-link`** — Inline body links in `{colors.accent-blue}` (#3898ec) — the Webflow-default link color.

### Cards & Containers

**`hero-band`** — White-canvas hero with h1 in `{typography.display-xl}`, sub-headline, and a button row. Vertical padding `{spacing.section}` (96px, derived).

**`feature-card`** — Light-gray feature card. Background `{colors.surface-card}` (#f7f7f7), rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). Title in `{typography.title-md}`, body in `{typography.body-md}` (geometry derived).

**`feature-card-soft`** — A fainter variant on `{colors.surface-soft}` (#fafafa) for alternating bands (derived).

**`product-mockup-card`** — White card showing product UI fragments. Background `{colors.canvas}`, 1px `{colors.hairline}` border, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px, derived).

**`accent-band`** — A scarce emphasis band on `{colors.accent-teal}` (#093333) with `{colors.on-dark}` text and `{typography.display-md}` head. Padding 64px (derived).

### Pricing

**`pricing-tier-card`** — Standard tier card. Background `{colors.canvas}`, 1px `{colors.hairline}` border, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). Plan name in `{typography.title-lg}`, checklist in `{typography.body-md}`, `{component.button-primary}` at bottom (geometry derived).

**`pricing-tier-card-featured`** — The featured tier inverts to `{colors.surface-dark}` (#222326) with `{colors.on-dark}` text. The dark surface is the featured signal (derived from palette + screenshots).

### Inputs & Forms

**`text-input`** — Standard input. Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, type `{typography.body-md}`, rounded `{rounded.md}`, padding 10px × 14px, height 44px (geometry derived).

**`text-input-focused`** — Focus state; border shifts toward `{colors.ink}` for emphasis (derived).

### Tags / Badges

**`badge-pill`** — Small pill label. Background `{colors.surface-strong}` (#eeeeee), text `{colors.ink-soft}` (#222326), type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px × 12px (geometry derived).

### Footer

**`footer`** — Dark footer that closes the page. Background `{colors.surface-dark}` (#222326), text `{colors.muted-soft}` (#bbbbbb), body in `{typography.body-sm}`, padding 64px (derived). Multi-column link list. The dark surface is one of only two dark zones in the system.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#000000) for primary CTAs and headlines. The black-on-white contrast is the brand's loudest signal.
- Keep the system near-monochrome — lean on the gray ramp (`{colors.body}`, `{colors.muted}`, `{colors.muted-soft}`) for hierarchy rather than color.
- Use cool slate-gray hairlines (`{colors.hairline}` #d0d5dd, `{colors.hairline-soft}` #eaecf0) for borders and dividers.
- Reserve `{colors.accent-teal}` (#093333) for scarce emphasis surfaces — it is the only saturated color surface and should stay rare.
- Keep inline links in `{colors.accent-blue}` (#3898ec); keep CTAs black.
- Use `{colors.surface-dark}` (#222326) only for footer and featured pricing — the dark surface is a deliberate, scarce signal.

### Don't
- Don't introduce additional accent colors. The measured palette is overwhelmingly neutral; adding chroma breaks the enterprise-security voice.
- Don't put `{colors.accent-blue}` on CTA buttons — it is a link color, not an action surface.
- Don't reduce headline contrast below `{colors.ink}` on `{colors.canvas}` — the high contrast is the system.
- Don't add dark surfaces casually beyond footer / featured pricing / the teal accent band.
- Don't document hover states — default and active/pressed only.

## Responsive Behavior

Responsive breakpoints were not measured. The behavior below is **derived** from standard Webflow marketing-site defaults and should be confirmed.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down; feature grids 1-up; pricing 1-up; footer columns collapse to 1 |
| Tablet | 768–991px | Tightened horizontal nav; feature cards 2-up |
| Desktop | 992–1279px | Full nav; 3-up feature cards; multi-up pricing |
| Wide | > 1280px | Same as desktop with more outer breathing room; content caps ~1200px |

### Touch Targets
- `{component.button-primary}` at ~44px height (derived) meets the WCAG 44px minimum.
- `{component.text-input}` height ~44px (derived).

### Collapsing Strategy
- Top nav collapses to hamburger on mobile (derived — Webflow default).
- Feature and pricing grids reduce columns rather than scaling cards down.
- Footer link columns stack to single-column at mobile.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.pricing-tier-card-featured}`).
2. Variants of an existing component (`-active`, `-focused`, `-soft`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Confirm derived typography, spacing, radius, and shadow values against the live stylesheet before treating them as canonical — only the colors are measured ground-truth.
6. Keep the system near-monochrome; the teal and blue accents stay scarce.

## Known Gaps

- **Typography was not measured** (the analysis typography set was empty). All type roles, sizes, weights, line-heights, and letter-spacing are derived from a standard SaaS scale with an Inter fallback stack and must be confirmed against the live stylesheet. The actual font family is unknown.
- **Spacing was not measured** (empty set). The 4px-base spacing scale is derived.
- **Border radius was not measured** (empty set). The radius scale is derived from common Webflow defaults.
- **Shadows were not measured** (empty set). The elevation model is inferred from surface-tone contrast; no drop-shadow values are confirmed.
- **Components were not measured** (empty set). All component specs are derived from the measured color palette plus reference screenshots; geometry (padding, height) is provisional.
- **Semantic colors** (success / warning / error) were not measured; none are documented.
- The site appears to be built on **Webflow** — `{colors.accent-blue}` (#3898ec) is the Webflow default link blue, and several slate-grays (`#d0d5dd`, `#344054`, `#eaecf0`) belong to a Webflow/Untitled-UI neutral ramp. This is noted as measured fact; whether these are intentional brand choices or framework defaults is unconfirmed.
- Color **role assignments** (primary vs. ink vs. body) are interpreted from frequency data; the analysis labeled some teals/slates as "accent" and most grays as "neutral," but exact usage context per color was not captured.
- Animation, transition timings, and form validation states are out of scope.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/beyondidentity/design-md -->
