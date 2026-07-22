---
version: alpha
name: Bridge-design-analysis
description: "A clean fintech / developer-platform interface for a stablecoin payments API — white canvas, near-black text and CTAs, and a precise cool-gray hairline system. The voice is engineered, calm, and trustworthy: lots of white space, light gray-blue surface tints for product and code cards, and a restrained blue-to-cyan accent range reserved for links, diagrams, and small highlights rather than for primary action."

colors:
  primary: "#000000"
  primary-active: "#222222"
  ink: "#030712"
  body: "#1f2937"
  body-strong: "#333333"
  muted: "#5d6c7b"
  muted-soft: "#999999"
  hairline: "#dbdfe5"
  hairline-soft: "#dddddd"
  border-strong: "#cccccc"
  border-mid: "#c8c8c8"
  border-mid-alt: "#c4c4c4"
  canvas: "#ffffff"
  surface-soft: "#fafafa"
  surface-card: "#f9fafb"
  surface-tint: "#eff5f8"
  on-primary: "#ffffff"
  brand-accent: "#3898ec"
  brand-accent-strong: "#0082f3"
  cyan: "#40cfff"
  cyan-soft: "#39bae5"

typography:
  display-xl:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1px
  display-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
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
    letterSpacing: 0
  code:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
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
    textColor: "{colors.brand-accent}"
    typography: "{typography.button}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.brand-accent}"
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
  product-mockup-card:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  code-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.body}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 24px
  diagram-card:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 14px
    height: 44px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  badge-pill:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Bridge's marketing surface is a calm, engineered fintech / developer-platform interface for a stablecoin payments API. The page floor is pure white (`{colors.canvas}` — #ffffff, the single most frequent measured color at 65), text and primary actions are near-black (`{colors.primary}` — #000000 / `{colors.ink}` — #030712), and structure is drawn almost entirely with a cool gray-blue hairline (`{colors.hairline}` — #dbdfe5, the second-most frequent color at 60). The result reads as precise, trustworthy infrastructure software rather than consumer-flashy crypto.

The accent layer is deliberately restrained. A Webflow-default-family blue (`{colors.brand-accent}` — #3898ec) and a deeper blue (`{colors.brand-accent-strong}` — #0082f3) carry inline links and small interactive cues, while a bright cyan pair (`{colors.cyan}` — #40cfff, `{colors.cyan-soft}` — #39bae5) appears in product diagrams and flow illustrations. None of these accents are heavily used (each measured at 4–14 frequency) — Bridge keeps the action layer monochrome and saves color for explanation surfaces.

Surface depth comes from very light tints rather than shadows: `{colors.surface-soft}` (#fafafa), `{colors.surface-card}` (#f9fafb), and the faint blue-tinted `{colors.surface-tint}` (#eff5f8) hold feature cards, code blocks, and product diagrams. The system is flat — color blocks and hairlines do the structural work.

**Key Characteristics:**
- White canvas with near-black CTAs (`{colors.primary}` — #000000). The action layer is monochrome; color is reserved for links and diagrams.
- A precise cool gray-blue hairline system (`{colors.hairline}` — #dbdfe5) draws nearly all structure — card outlines, dividers, input borders.
- Restrained blue accent range (`{colors.brand-accent}` — #3898ec, `{colors.brand-accent-strong}` — #0082f3) for inline links and interactive cues.
- A bright cyan pair (`{colors.cyan}` — #40cfff, `{colors.cyan-soft}` — #39bae5) used inside product diagrams and money-flow illustrations.
- Faint tinted surfaces (`{colors.surface-soft}`, `{colors.surface-card}`, `{colors.surface-tint}`) for cards instead of drop shadows — the system is flat.
- A layered neutral-gray ramp (`{colors.muted}` — #5d6c7b, `{colors.muted-soft}` — #999999, `{colors.body}` — #1f2937, `{colors.body-strong}` — #333333) gives fine-grained text hierarchy.
- Developer-facing surfaces: code cards (`{component.code-card}`) and orchestration diagrams (`{component.diagram-card}`) are first-class marketing components.

## Colors

### Brand & Accent
- **Brand Accent** (`{colors.brand-accent}` — #3898ec): The primary accent — inline text links, small interactive cues, focus highlights. Measured at frequency 14, the most-used accent.
- **Brand Accent Strong** (`{colors.brand-accent-strong}` — #0082f3): A deeper blue used for active link / emphasized link states.
- **Cyan** (`{colors.cyan}` — #40cfff) and **Cyan Soft** (`{colors.cyan-soft}` — #39bae5): Bright cyan pair appearing inside product diagrams, flow illustrations, and small data-viz moments. These never appear on CTAs.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor.
- **Surface Soft** (`{colors.surface-soft}` — #fafafa): Faint section fills and code-card backgrounds.
- **Surface Card** (`{colors.surface-card}` — #f9fafb): Feature-card and content-card fills.
- **Surface Tint** (`{colors.surface-tint}` — #eff5f8): A blue-tinted surface for product mockups and diagram cards — the strongest tint in the system, yet still very light.

### Lines & Borders
- **Hairline** (`{colors.hairline}` — #dbdfe5): The dominant structural line tone — card outlines, dividers, input borders. The second-most-frequent color overall.
- **Hairline Soft** (`{colors.hairline-soft}` — #dddddd): A slightly lighter divider used between sections sharing the white canvas.
- **Border Strong** (`{colors.border-strong}` — #cccccc), **Border Mid** (`{colors.border-mid}` — #c8c8c8), **Border Mid Alt** (`{colors.border-mid-alt}` — #c4c4c4): A small ramp of mid-gray borders used on controls, table cells, and disabled outlines.

### Text
- **Ink** (`{colors.ink}` — #030712): Headlines and primary display type — a near-black with a faint cool cast.
- **Primary** (`{colors.primary}` — #000000): Pure black used on CTAs and the strongest text moments.
- **Body** (`{colors.body}` — #1f2937): Default running-text color.
- **Body Strong** (`{colors.body-strong}` — #333333): Slightly heavier body text and sub-labels.
- **Muted** (`{colors.muted}` — #5d6c7b): Secondary text — captions, slate-toned sub-copy, footer columns.
- **Muted Soft** (`{colors.muted-soft}` — #999999): Tertiary text — fine print, placeholder text.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on the black primary button.

### Semantic
No dedicated success / warning / error tokens were measured. See Known Gaps — semantic state colors must be confirmed from a form or status surface before they are documented.

## Typography

### Font Family
No typography was captured in the measured analysis (the `typography` array is empty). The families, sizes, weights, and tracking below are **derived** from the reference screenshots and standard fintech / Webflow-platform baselines — they should be confirmed against the live computed styles before being treated as ground truth. The documented stack uses **Inter** as a neutral grotesque substitute for the site's sans face, with a monospace (**JetBrains Mono**) for code surfaces. No licensed/custom typefaces were flagged (`fonts_licensed` is empty).

The split is functional:
- A single sans family (Inter substitute) carries display headlines, body, navigation, and buttons.
- A monospace face carries API / code snippets shown in `{component.code-card}`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 600 | 1.05 | -1.5px | Hero h1 — derived |
| `{typography.display-lg}` | 48px | 600 | 1.1 | -1px | Section heads — derived |
| `{typography.display-md}` | 36px | 600 | 1.15 | -0.5px | Sub-section heads, card titles — derived |
| `{typography.title-lg}` | 24px | 600 | 1.3 | -0.3px | Feature headings — derived |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Card titles, intro lines — derived |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running-text — derived |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine print — derived |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions — derived |
| `{typography.code}` | 14px | 400 | 1.6 | 0 | API / code snippets — derived |
| `{typography.button}` | 15px | 600 | 1.0 | 0 | Button labels — derived |
| `{typography.nav-link}` | 15px | 500 | 1.4 | 0 | Top-nav menu items — derived |

### Principles
The voice is a single confident sans across display and UI, with negative letter-spacing on the largest display sizes to keep big headlines tight and engineered. Code surfaces switch to monospace — the only typographic register change in the system. Until live styles are measured, keep the weight ceiling at 600 (semibold) to match the calm, infrastructure-software tone observed in the screenshots.

### Note on Font Substitutes
**Inter** (weight 400–600) is the documented open-source substitute for the site's sans face. If a tighter grotesque is desired, **Söhne** or **Suisse Int'l** are closer commercial matches, with **Geist** or **Manrope** as open alternatives. **JetBrains Mono** substitutes for code blocks. None of these should be claimed as the production font until the live face is confirmed.

## Layout

### Spacing System
No spacing scale was captured (the `spacing` array is empty). The token scale below is **derived** from a standard 4px base and the apparent rhythm in the screenshots — confirm against live measurements before relying on exact values.
- **Base unit:** 4px (derived).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) between major editorial bands (derived).
- **Card internal padding:** `{spacing.xl}` (32px) for feature and diagram cards; `{spacing.lg}` (24px) for product-mockup and code cards (derived).

### Grid & Container
- **Max content width:** ~1200px centered (derived).
- **Hero band:** typically a single-column or 6/6 split (headline + product visual).
- **Feature grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile (derived).
- **Footer:** multi-column link list at desktop, collapsing toward single-column on mobile (derived).

### Whitespace Philosophy
Bridge leans on generous white space and thin hairlines rather than dense layout or heavy borders. Each band carries a single headline, supporting copy, and one product / code artifact — the page reads as calm and scannable, consistent with developer-platform marketing.

## Elevation & Depth

No shadow tokens were captured (the `shadows` array is empty), which is consistent with the flat, hairline-driven look in the screenshots.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero band |
| Soft hairline | 1px `{colors.hairline}` border | Inputs, card outlines, dividers |
| Tinted surface | `{colors.surface-card}` / `{colors.surface-tint}` fill, no shadow | Feature cards, product mockups, diagram cards |
| Code surface | `{colors.surface-soft}` fill | Code / API snippet cards |

The elevation philosophy is **flat and structural** — color-block contrast and thin cool-gray hairlines carry depth. No drop shadows were measured; if any exist they are extremely subtle and must be confirmed (see Known Gaps).

### Decorative Depth
- Product diagrams and money-flow illustrations inside `{component.diagram-card}` carry the cyan accent pair (`{colors.cyan}`, `{colors.cyan-soft}`) — the strongest chromatic moments in the system, used purely to explain the product.

## Shapes

### Border Radius Scale
No radius values were captured (the `radius` array is empty). The scale below is **derived** from the screenshots' apparent corner treatments — confirm before relying on exact values.

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small inline accents — derived |
| `{rounded.sm}` | 6px | Small controls, dropdown items — derived |
| `{rounded.md}` | 8px | Buttons, inputs — derived |
| `{rounded.lg}` | 12px | Content cards, code cards, diagram cards — derived |
| `{rounded.xl}` | 16px | Large hero / product-mockup containers — derived |
| `{rounded.pill}` | 9999px | Badge pills — derived |
| `{rounded.full}` | 9999px | Avatars, circular icon controls — derived |

### Photography Geometry
The system favors product UI fragments, diagrams, and code over photography. Cards and visual containers use soft rounded corners (`{rounded.lg}` / `{rounded.xl}`), consistent with the calm developer-platform tone.

## Components

> Note: the measured `components` array is empty. All components below are reconstructed from the reference screenshots and reference only measured `{colors.*}` tokens plus derived typography / radius / spacing tokens. Confirm exact paddings and heights against live styles.

### Top Navigation

**`top-nav`** — White nav bar pinned to the top of the page, ~72px tall, `{colors.canvas}` background with a hairline (`{colors.hairline}`) bottom divider. Carries the Bridge wordmark at left, a center / right menu in `{typography.nav-link}` (`{colors.ink}`), and a right-side cluster ending in a `{component.button-primary}`.

### Buttons

**`button-primary`** — The signature CTA. Background `{colors.primary}` (#000000), text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}`, padding ~12px × 22px, height ~44px. Active state `button-primary-active` shifts to `{colors.primary-active}` (#222222).

**`button-secondary`** — White button with a hairline outline. Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, same padding / height / radius as primary.

**`button-text-link`** — Inline text button, no background, text in `{colors.brand-accent}`. Used for secondary "Learn more" / docs links.

**`text-link`** — Inline body links in `{colors.brand-accent}` (#3898ec); emphasized state uses `{colors.brand-accent-strong}` (#0082f3).

### Cards & Containers

**`hero-band`** — White-canvas hero with the h1 in `{typography.display-xl}` (`{colors.ink}`), supporting copy in `{colors.body}`, and a button row. Vertical padding `{spacing.section}` (96px, derived).

**`feature-card`** — Used in feature grids. Background `{colors.surface-card}` (#f9fafb), 1px `{colors.hairline}` outline, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). Carries a small icon, a `{typography.title-md}` title, and `{typography.body-md}` body.

**`product-mockup-card`** — Shows Bridge product UI fragments. Background `{colors.surface-tint}` (#eff5f8), rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). Displays the product chrome rather than decorating around it.

**`code-card`** — A developer-facing API / code snippet block. Background `{colors.surface-soft}` (#fafafa), text `{colors.body}`, monospace `{typography.code}`, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px).

**`diagram-card`** — A money-flow / orchestration diagram container (prominent on the orchestration page). Background `{colors.surface-tint}`, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). The diagram lines and nodes use the cyan accent pair (`{colors.cyan}`, `{colors.cyan-soft}`) and brand blue (`{colors.brand-accent}`).

### Inputs & Forms

**`text-input`** — Standard input. Background `{colors.canvas}`, text `{colors.ink}`, placeholder `{colors.muted-soft}`, type `{typography.body-md}`, 1px `{colors.hairline}` border, rounded `{rounded.md}`, padding ~12px × 14px, height ~44px.

**`text-input-focused`** — Focus state; border shifts toward `{colors.brand-accent}` for emphasis (derived — confirm focus treatment against live styles).

### Tags / Badges

**`badge-pill`** — Small pill label for section eyebrows / category tags. Background `{colors.surface-tint}`, text `{colors.body}`, type `{typography.caption}`, rounded `{rounded.pill}`, padding 4px × 12px.

### Footer

**`footer`** — A light footer on `{colors.canvas}` with a hairline (`{colors.hairline}`) top divider. Multi-column link list with column text in `{colors.muted}`, body in `{typography.body-sm}`, vertical padding ~64px. Unlike many SaaS sites, Bridge keeps the footer light to match the all-white body (confirm against live capture).

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#000000) for primary CTAs and the strongest text. The action layer is monochrome.
- Draw structure with the cool gray-blue hairline (`{colors.hairline}` — #dbdfe5) — it is the system's defining structural tone.
- Keep accents (`{colors.brand-accent}`, `{colors.cyan}`) confined to links, diagrams, and small highlights, never on primary buttons.
- Use the faint tinted surfaces (`{colors.surface-card}`, `{colors.surface-tint}`, `{colors.surface-soft}`) instead of drop shadows — the system is flat.
- Show real product UI and code inside cards (`{component.product-mockup-card}`, `{component.code-card}`) rather than decorative illustration.
- Use the cyan accent pair only inside explanatory diagrams (`{component.diagram-card}`).

### Don't
- Don't paint primary CTAs in blue or cyan — Bridge's button is black.
- Don't introduce drop shadows; depth comes from tint and hairline, not elevation.
- Don't over-saturate the page — accents are scarce (each measured at 4–14 frequency) and should stay that way.
- Don't blur the text-color hierarchy: `{colors.ink}` for headlines, `{colors.body}` for copy, `{colors.muted}` for secondary, `{colors.muted-soft}` for fine print.
- Don't add hover-state styling beyond the documented default + active; primary darkens to `{colors.primary-active}` on press.

## Responsive Behavior

> Breakpoint behavior below is **derived** from standard platform-marketing patterns — only two pages (landing, orchestration) were captured and no responsive measurements exist.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down; feature grids 1-up; diagram cards scroll or stack |
| Tablet | 768–1024px | Top nav tightens; feature grids 2-up |
| Desktop | 1024–1440px | Full nav; 3-up feature grids; side-by-side hero + product visual |
| Wide | > 1440px | Same as desktop with more outer margin; content caps near 1200px |

### Touch Targets
- `{component.button-primary}` at ~44px height meets WCAG minimums.
- `{component.text-input}` at ~44px height.
- Nav links and footer links should retain ≥44px effective tap area (confirm against live styles).

### Collapsing Strategy
- Top nav collapses to a hamburger on mobile (derived).
- Hero collapses to single-column; product visual moves below copy.
- Diagram cards (`{component.diagram-card}`) are the most fragile at small widths — they likely require horizontal scroll or simplified node layouts on mobile (confirm).

### Image Behavior
- Product UI fragments and diagrams retain native aspect ratios while their containing cards resize.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.diagram-card}`).
2. Variants of a component (`-active`, `-focused`, `-disabled`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and Active/Pressed states only.
5. Keep the action layer black-and-white; spend color only on links and explanatory diagrams.
6. Before treating typography, spacing, and radius as final, re-measure them — they are currently derived and flagged in Known Gaps.
7. When in doubt about emphasis: more white space and a tighter hairline before more color.

## Known Gaps

- **Typography was not measured** (the `typography` array is empty). All families, sizes, weights, line heights, and letter-spacing are derived from screenshots and standard baselines; the live sans face is unconfirmed and documented only as an Inter-family substitute.
- **Spacing scale was not measured** (the `spacing` array is empty). The 4px-based scale is derived and must be confirmed.
- **Border radius was not measured** (the `radius` array is empty). The radius scale is derived from apparent corner treatments.
- **No shadow tokens were captured** (the `shadows` array is empty). The flat / hairline interpretation matches the screenshots, but any subtle elevation must be confirmed.
- **No components were measured** (the `components` array is empty). All component specs are reconstructed from reference screenshots; exact paddings, heights, and border treatments need live confirmation.
- **Semantic state colors** (success / warning / error) were not measured; a form, validation, or status surface is needed to extract them.
- Only two pages were captured (landing, product-orchestration); component coverage for docs, pricing, and dashboard surfaces is unknown.
- The blue/cyan accent ramp (#3898ec, #0082f3, #40cfff, #39bae5) appears at low frequency; exact roles for each accent (link vs. diagram vs. highlight) are inferred and should be validated.
- Animation, transition timings, and scroll-driven diagram behavior are out of scope.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/bridge/design-md -->
