---
version: alpha
name: x.ai-design-analysis
description: A stark, near-monochrome interface for xAI/Grok anchored on pure-black canvas with white text and a tightly disciplined grayscale ramp. The system reads as engineered and technical — minimal chrome, generous negative space, and macOS-style window dots (traffic lights) on embedded code/demo surfaces. Accent voltage is rationed to a single blue and a single mint-green, used sparingly against the black field so the product UI fragments carry the page rather than decorative color.

colors:
  canvas: "#000000"
  surface-dark: "#1a1a1a"
  surface-dark-soft: "#111827"
  surface-elevated: "#222222"
  surface-light: "#ffffff"
  on-dark: "#ffffff"
  ink: "#111827"
  body: "#374151"
  body-strong: "#4b5563"
  muted: "#6b7280"
  muted-soft: "#9ca3af"
  muted-faint: "#666666"
  hairline: "#e5e7eb"
  hairline-strong: "#d1d5db"
  accent-blue: "#2563eb"
  accent-green: "#75fba6"
  accent-peach: "#fed7aa"
  traffic-red: "#ff5f57"
  traffic-yellow: "#ffbd2e"
  traffic-green: "#28c840"
  success: "#248430"
  error: "#be2e31"

typography:
  display-xl:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -1.5px
  display-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1px
  display-md:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
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
  button-primary:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-primary-active:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-secondary-active:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.accent-blue}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 64px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 96px
  product-window-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 24px
  window-titlebar:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.muted-soft}"
    typography: "{typography.caption}"
    rounded: "{rounded.lg}"
    padding: 8px 12px
  feature-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  feature-card-soft:
    backgroundColor: "{colors.surface-dark-soft}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 14px
    height: 40px
  badge-pill:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.muted-soft}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  status-dot-success:
    backgroundColor: "{colors.traffic-green}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
    size: 12px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

x.ai (the marketing surface for xAI / Grok) is a stark, near-monochrome interface built on a **pure-black canvas** (`{colors.canvas}` — #000000) with **white text** (`{colors.on-dark}` — #ffffff). The system reads as engineered and technical — minimal chrome, large fields of negative space, and a tightly disciplined grayscale ramp running from black through `{colors.surface-dark}` (#1a1a1a) and `{colors.surface-elevated}` (#222222) up to white. The page is meant to feel like infrastructure, not marketing.

Color is rationed deliberately. The measured palette is dominated by neutrals — white at 40% frequency, black at 24%, and a long gray ramp (`{colors.muted}` #6b7280, `{colors.muted-soft}` #9ca3af, `{colors.body}` #374151, `{colors.body-strong}` #4b5563) below them. Against this monochrome field, only two true accents appear: a single blue (`{colors.accent-blue}` — #2563eb) for inline links/actions and a single mint-green (`{colors.accent-green}` — #75fba6) for highlights and live-status moments.

A signature motif is the **macOS-style window chrome** — the three "traffic light" dots (`{colors.traffic-red}` #ff5f57, `{colors.traffic-yellow}` #ffbd2e, `{colors.traffic-green}` #28c840) that sit atop embedded code/terminal and demo surfaces. These window cards are how x.ai shows the product (Grok chat, API output, code) inside the marketing flow rather than illustrating around it.

**Key Characteristics:**
- Pure-black canvas with white type — the inverse of light-mode SaaS. The black is true #000000, not a softened off-black.
- A long, disciplined gray ramp (#666666 → #6b7280 → #9ca3af → #d1d5db → #e5e7eb) carries all secondary text and hairline tones; there is no decorative mid-tone color.
- Primary CTA is a **white button on black** (`{component.button-primary}`) — maximal contrast, no fill color.
- Two scarce accents only: blue (`{colors.accent-blue}`) and mint-green (`{colors.accent-green}`). The peach (`{colors.accent-peach}` #fed7aa) appears as a rare third tint.
- macOS traffic-light window dots on code/demo cards — the system's most recognizable component motif.
- Elevation is built from near-black surface steps (#000000 → #1a1a1a → #222222) rather than shadows, since shadows are invisible on a black field.

## Colors

### Brand & Accent
- **Accent Blue** (`{colors.accent-blue}` — #2563eb): The single interactive/link accent. Used on inline `{component.text-link}` and occasional action highlights. Appears rarely against the black canvas.
- **Accent Green** (`{colors.accent-green}` — #75fba6): A bright mint-green used for highlights and live/active moments. The brightest hue in the system.
- **Accent Peach** (`{colors.accent-peach}` — #fed7aa): A soft peach tint observed as a rare third accent; used sparingly.

### Surface
- **Canvas** (`{colors.canvas}` — #000000): The default page floor — true black on every band.
- **Surface Dark** (`{colors.surface-dark}` — #1a1a1a): The first elevation step — product-window cards, feature cards, inputs.
- **Surface Dark Soft** (`{colors.surface-dark-soft}` — #111827): A faintly blue-tinged dark surface used as an alternate card fill.
- **Surface Elevated** (`{colors.surface-elevated}` — #222222): The highest near-black step — window title bars, badges, pressed states.
- **Surface Light** (`{colors.surface-light}` — #ffffff): The inverted surface — the white primary button.
- **Hairline** (`{colors.hairline}` — #e5e7eb) / **Hairline Strong** (`{colors.hairline-strong}` — #d1d5db): Light-tone borders and dividers, used at low opacity to separate dark surfaces.

### Text
- **On Dark** (`{colors.on-dark}` — #ffffff): All headlines and primary text on the black canvas.
- **Ink** (`{colors.ink}` — #111827): Text on the inverted white button surface.
- **Body** (`{colors.body}` — #374151) / **Body Strong** (`{colors.body-strong}` — #4b5563): Running-text tones used on lighter inverted surfaces.
- **Muted** (`{colors.muted}` — #6b7280): Secondary text — footer body, captions.
- **Muted Soft** (`{colors.muted-soft}` — #9ca3af): Tertiary text — window-card labels, fine print.
- **Muted Faint** (`{colors.muted-faint}` — #666666): The lowest-contrast text tone — disabled/placeholder copy.

### Window Chrome (Traffic Lights)
- **Traffic Red** (`{colors.traffic-red}` — #ff5f57), **Traffic Yellow** (`{colors.traffic-yellow}` — #ffbd2e), **Traffic Green** (`{colors.traffic-green}` — #28c840): The three macOS-style window-control dots that crown embedded code/demo cards.

### Semantic
- **Success** (`{colors.success}` — #248430): Confirmation/success states.
- **Error** (`{colors.error}` — #be2e31): Validation errors and destructive states.

## Typography

### Font Family
The analysis captured **no typography measurements** (the `typography` array in analysis.json is empty), so every value in this section is **derived** from screenshot ground-truth and standard near-monochrome SaaS baselines, not measured. x.ai renders headlines and UI text in a clean grotesque/neo-grotesque sans; an `Inter` stack with system fallbacks is documented here as a faithful, openly-available approximation. Code and terminal fragments inside window cards use a monospace stack (`ui-monospace, SFMono-Regular, Menlo`). No licensed/custom typefaces were flagged in `fonts_licensed`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 600 | 1.05 | -1.5px | Hero h1 (derived) |
| `{typography.display-lg}` | 48px | 600 | 1.1 | -1px | Section heads (derived) |
| `{typography.display-md}` | 32px | 600 | 1.2 | -0.5px | Sub-section heads, card titles (derived) |
| `{typography.title-lg}` | 22px | 600 | 1.3 | -0.3px | Pricing plan names (derived) |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Feature card titles (derived) |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running-text (derived) |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Footer body, fine-print (derived) |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, window-card labels (derived) |
| `{typography.code}` | 14px | 400 | 1.5 | 0 | Code/terminal fragments — monospace (derived) |
| `{typography.button}` | 14px | 600 | 1 | 0 | Button labels (derived) |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items (derived) |

### Principles
The type system is functional and quiet: a single sans for everything, a monospace for code fragments. Headlines lean on weight 600 with mild negative tracking to read as precise and technical. On the black canvas, hierarchy is driven by size + opacity (white → gray ramp) rather than color. All values above are derived; confirm against live computed styles before shipping.

## Layout

### Spacing System
All spacing values are **derived** — the `spacing` array in analysis.json was empty.
- **Base unit:** 4px (derived).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) between major bands (derived).
- **Card internal padding:** `{spacing.xl}` (32px) for feature/pricing cards; `{spacing.lg}` (24px) for product-window cards (derived).

### Grid & Container
- **Max content width:** ~1200px centered (derived).
- **Hero:** centered single-column headline with the product-window card below or beside it (derived from screenshots).
- **Feature grids:** 3-up at desktop, collapsing toward 1-up on mobile (derived).
- **Pricing grid:** multi-up tier cards collapsing to single column (derived).

### Whitespace Philosophy
x.ai leans on large black negative space — the page feels uncluttered and infrastructural. Content is anchored center-stage with generous margins; the black field around each band does the visual breathing.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Base | `{colors.canvas}` (#000000), flat | Page floor, hero, footer |
| Step 1 | `{colors.surface-dark}` (#1a1a1a) | Product-window cards, feature cards, inputs |
| Step 1-alt | `{colors.surface-dark-soft}` (#111827) | Alternate card fill |
| Step 2 | `{colors.surface-elevated}` (#222222) | Window title bars, badges, pressed states |
| Inverted | `{colors.surface-light}` (#ffffff) | Primary button — maximal contrast |

On a pure-black canvas, drop shadows are effectively invisible, so **elevation is encoded as near-black surface steps** (#000000 → #1a1a1a → #222222) and thin light hairlines (`{colors.hairline}` / `{colors.hairline-strong}`) rather than shadow blur. No shadow tokens were measured (`shadows` array empty), so shadow treatment is documented as a known gap.

### Decorative Depth
- Embedded product-window cards carry their own internal chrome — the traffic-light dot cluster and a title bar (`{colors.surface-elevated}`) — which reads as depth without any shadow.
- The white primary button is the single brightest object on most bands; its contrast against black does the elevation work.

## Shapes

### Border Radius Scale
All radius values are **derived** — the `radius` array in analysis.json was empty.

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small inline accents (derived) |
| `{rounded.sm}` | 6px | Dropdown items, small buttons (derived) |
| `{rounded.md}` | 8px | CTA buttons, text inputs (derived) |
| `{rounded.lg}` | 12px | Content cards, product-window cards (derived) |
| `{rounded.xl}` | 16px | Larger feature/demo containers (derived) |
| `{rounded.pill}` | 9999px | Badge pills (derived) |
| `{rounded.full}` | 9999px / 50% | Traffic-light dots, avatars (derived) |

### Window-Chrome Geometry
Product-window cards use `{rounded.lg}` (12px) outer corners; the title bar carries the three traffic-light dots as perfect `{rounded.full}` circles at ~12px each. This is the most recognizable shape signature in the system.

## Components

### Top Navigation
**`top-nav`** — Black nav bar pinned to the top of every page. ~64px tall (derived), `{colors.canvas}` background, white wordmark at left, sparse menu items in `{typography.nav-link}`, and a right-side `{component.button-primary}` (white) call to action.

### Buttons
**`button-primary`** — The signature CTA: white fill (`{colors.surface-light}`) with ink text (`{colors.ink}`), `{typography.button}`, rounded `{rounded.md}`, padding 12px × 20px, height 40px (derived). Maximal black-on-white-on-black contrast. Active state `button-primary-active` shifts toward `{colors.hairline}`.

**`button-secondary`** — Transparent on the black canvas with white text (`{colors.on-dark}`), 1px hairline border, same padding + radius as primary. Active state `button-secondary-active` fills `{colors.surface-elevated}`.

**`button-text-link`** — Inline text button, no background, white text. Used for utility nav items.

**`text-link`** — Inline body links in `{colors.accent-blue}` — the one place blue appears in running text.

### Cards & Containers
**`hero-band`** — Black-canvas hero with a centered h1 in `{typography.display-xl}` and a product-window card. Vertical padding `{spacing.section}` (96px, derived).

**`product-window-card`** — The signature embedded-product surface: `{colors.surface-dark}` background, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). Shows Grok chat / code / terminal output in `{typography.code}`. Crowned by `{component.window-titlebar}`.

**`window-titlebar`** — The macOS-style chrome strip atop a product-window card. Background `{colors.surface-elevated}`, label text `{colors.muted-soft}` in `{typography.caption}`, carrying the three traffic-light dots (`{colors.traffic-red}`, `{colors.traffic-yellow}`, `{colors.traffic-green}`).

**`feature-card`** — Used in feature grids. Background `{colors.surface-dark}`, white text, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). Title in `{typography.title-md}`.

**`feature-card-soft`** — A variant using the blue-tinged `{colors.surface-dark-soft}` (#111827) as fill — used to subtly distinguish a feature band from neighboring `{colors.surface-dark}` cards.

**`pricing-tier-card`** — Tier card on the pricing page. Background `{colors.surface-dark}`, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). Plan name in `{typography.title-lg}`, feature list in `{typography.body-md}`, `{component.button-primary}` at the bottom.

### Inputs & Forms
**`text-input`** — Background `{colors.surface-dark}`, white text, `{typography.body-md}`, rounded `{rounded.md}`, padding 10px × 14px, height 40px (derived). Hairline border in `{colors.hairline-strong}` at low opacity.

### Tags / Status
**`badge-pill`** — Small pill label. Background `{colors.surface-elevated}`, text `{colors.muted-soft}`, `{typography.caption}`, rounded `{rounded.pill}`, padding 4px × 12px.

**`status-dot-success`** — A small live-status indicator. `{colors.traffic-green}` fill, `{rounded.full}`, ~12px diameter — reuses the window-dot motif for online/active states.

### Footer
**`footer`** — Black footer that continues the canvas. Background `{colors.canvas}`, text `{colors.muted}` in `{typography.body-sm}`, vertical padding 64px (derived). Because the whole page is black, the footer doesn't invert — it simply lists links in the muted gray ramp.

## Do's and Don'ts

### Do
- Keep the canvas pure black (`{colors.canvas}` — #000000). The true-black field is the brand.
- Drive hierarchy with the gray ramp (white → #9ca3af → #6b7280 → #666666), not with color.
- Use the white `{component.button-primary}` as the single highest-contrast action on each band.
- Reserve `{colors.accent-blue}` for inline links and `{colors.accent-green}` for live/highlight moments — keep both scarce.
- Show the product inside `{component.product-window-card}` with the traffic-light `{component.window-titlebar}` rather than illustrating around it.
- Build elevation from near-black surface steps (#000000 → #1a1a1a → #222222), not shadows.

### Don't
- Don't soften the canvas to an off-black — the system uses #000000 deliberately.
- Don't introduce additional accent hues beyond blue, green, and the rare peach. The traffic-light reds/yellows/greens belong only to window chrome and status dots.
- Don't put accent color on the primary CTA — it stays white.
- Don't rely on drop shadows for separation; they vanish on black. Use surface steps and hairlines.
- Don't document hover states — default and active/pressed only.

## Responsive Behavior

> Note: No breakpoint or layout metrics were measured. The behavior below is **derived** from the captured landing + pricing screenshots and standard practice; confirm against the live site.

### Breakpoints (derived)

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down; product-window card full-width; feature grids 1-up; pricing 1-up |
| Tablet | 768–1024px | Tightened nav; feature cards 2-up; pricing 2-up |
| Desktop | 1024–1440px | Full nav; 3-up feature cards; multi-up pricing tiers |
| Wide | > 1440px | Same as desktop, content capped ~1200px with more black margin |

### Touch Targets
- `{component.button-primary}` at ~40px height minimum (derived).
- `{component.text-input}` height ~40px (derived).

### Collapsing Strategy (derived)
- Top nav collapses to a hamburger on mobile.
- Product-window cards stay legible by reflowing their code/terminal content; the window chrome remains fixed.
- Feature and pricing grids reduce column count rather than shrinking cards.

## Iteration Guide

1. Focus on ONE component at a time, referencing its YAML key (`{component.product-window-card}`, `{component.pricing-tier-card}`).
2. Variants (`-active`, `-soft`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex.
4. Never document hover. Default and Active/Pressed states only.
5. The canvas stays #000000; hierarchy comes from the gray ramp and surface steps.
6. The traffic-light window chrome is the signature motif — reuse it for product surfaces and status dots only.
7. Before shipping, replace all values marked "derived" (typography, spacing, radius, shadows) with measured values from live computed styles.

## Known Gaps

- The analysis captured **only colors** — the `typography`, `spacing`, `radius`, `shadows`, and `components` arrays in analysis.json were all empty. Every typography, spacing, radius, and component dimension in this document is therefore **derived** from screenshot ground-truth and standard baselines, not measured. Treat these as provisional until confirmed against live computed styles.
- Exact font family is unmeasured; an `Inter` + system stack is documented as a faithful open-source approximation. No licensed font was flagged in `fonts_licensed`, but the true face should be verified.
- Shadow/elevation values are unmeasured; the document infers a surface-step model (#000000 → #1a1a1a → #222222) because shadows are not visible on a black field — but no shadow tokens exist to confirm.
- Color roles were auto-assigned by frequency; some "accent" hexes (#fed7aa peach, #be2e31 dark red, #248430 dark green) appear at low frequency (2–4%) and their precise usage context could not be confirmed from the data alone.
- Breakpoints, grid widths, and touch-target sizes are derived, not measured.
- Animation, transition timings, and interaction states (chat streaming, code reveal) are out of scope.
- Form validation states beyond a base `{component.text-input}` were not extracted.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/x/design-md -->
