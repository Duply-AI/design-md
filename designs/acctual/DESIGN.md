---
version: alpha
name: Acctual-design-analysis
description: A bright, fintech-friendly invoicing interface built on a near-white blue-tinted canvas (#f7fafc) with near-black pill CTAs and the rounded geometric Open Runde typeface. The system reads as approachable modern fintech — soft generously-rounded white cards, real invoice and payment-method UI shown as hero artifacts, a near-monochrome action layer, and small bursts of saturated accent color (blue, violet, magenta, green) used only inside product chrome and category highlights.
colors:
  ink: "#000000"
  body: "#1e1e1e"
  muted: "#666666"
  muted-soft: "#8d8d8d"
  neutral: "#999999"
  canvas: "#f7fafc"
  surface: "#ffffff"
  surface-soft: "#fafafa"
  primary: "#0d111b"
  primary-deep: "#0f0f0f"
  on-primary: "#ffffff"
  link: "#0000ee"
  accent-blue: "#0098f2"
  accent-cyan: "#1ab4d7"
  accent-violet: "#6c55fc"
  accent-magenta: "#f200ca"
  accent-green: "#5d9c06"
  accent-green-alt: "#2ca01c"
typography:
  display:
    fontFamily: "Open Runde, Nunito, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.125
    letterSpacing: -1.92px
  heading:
    fontFamily: "Open Runde, Nunito, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.96px
  body:
    fontFamily: "Open Runde, Nunito, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.21
    letterSpacing: -0.32px
rounded:
  sm: 10px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 32px
  pill: 100px
  full: 1250px
spacing:
  xxs: 4px
  xs: 8px
  sm: 10px
  base: 12px
  md: 16px
  lg: 24px
  xl: 28px
  xxl: 40px
components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-primary-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.link}"
    typography: "{typography.body}"
  badge-pill:
    backgroundColor: transparent
    textColor: "{colors.accent-blue}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  payment-method-pill:
    backgroundColor: transparent
    textColor: "{colors.accent-blue}"
    typography: "{typography.body}"
  invoice-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16px
  highlight-card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  testimonial-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.xxl}"
    padding: 40px
  payment-selector-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
---

## Overview

Acctual's marketing surface is a bright, approachable fintech interface built on a faintly blue-tinted near-white canvas (`{colors.canvas}` — #f7fafc) with near-black pill CTAs (`{colors.primary}` — #0d111b) and the rounded geometric **Open Runde** typeface. The system reads as friendly-but-precise invoicing software — soft generously-rounded white cards, real invoice and payment-method UI shown as the hero artifact, and a near-monochrome action layer punctuated by small bursts of saturated accent color.

The type voice is single-family: **Open Runde** carries everything from the 64px hero headline down to 16px body copy. Open Runde is a rounded-terminal reworking of Inter, and its soft corners reinforce the friendly fintech tone. All weights sit at 500–600 with consistent negative letter-spacing (-0.32px to -1.92px, scaling with size) — the tighter tracking on the big display sizes is part of the voice.

Component voltage comes from **real product UI shown directly in the flow** — an invoice card with FROM/TO blocks, avatar logos, line items, and a $45,000.00 total; a payment-method selector with Bank / Card / Crypto tabs. Acctual doesn't illustrate the product, it shows it. Saturated accents (`{colors.accent-blue}`, `{colors.accent-violet}`, `{colors.accent-magenta}`, `{colors.accent-green}`) appear only inside that product chrome and inside category-highlight cards — never on the primary CTA.

**Key Characteristics:**
- Blue-tinted near-white canvas (`{colors.canvas}` — #f7fafc) instead of pure white — a subtle cool wash across the whole page.
- Near-black pill CTAs (`{colors.primary}` — #0d111b) at `{rounded.pill}` (100px). Every primary action — "Sign up for free", "Send my first invoice", "Create an invoice" — is a fully-rounded dark pill.
- Single typeface (**Open Runde**, 500–600 weight) with size-scaled negative letter-spacing. Rounded terminals carry the friendly tone.
- Generously-rounded cards: `{rounded.lg}` (16px) for content cards, `{rounded.xxl}` (32px) for the large testimonial block.
- Real invoice + payment-method UI shown as the hero artifact rather than marketing illustration.
- Near-monochrome action layer; saturated accents reserved for product chrome and category highlight cards.
- Soft, low-alpha drop shadows on floating cards — never heavy.

## Colors

### Brand & Action
- **Primary** (`{colors.primary}` — #0d111b): The near-black action color. All primary pill CTAs and the nav "Sign up for free" button. Press state derived as `{colors.ink}` (#000000).
- **Ink** (`{colors.ink}` — #000000): Headlines and primary text. Also the derived button press state.
- **Link** (`{colors.link}` — #0000ee): Inline anchor color (classic browser-blue measured on `a` elements).

### Accents
Acctual is near-monochrome at the action layer; accents appear only inside product chrome and category highlights.
- **Accent Blue** (`{colors.accent-blue}` — #0098f2): The dominant accent — payment-method check pills ("Cards 2.7%", "Bank transfer 1%", "Stablecoin 1%"), the "Used by 5,000+ businesses" badge text, section eyebrows.
- **Accent Cyan** (`{colors.accent-cyan}` — #1ab4d7): Secondary blue accent in product UI.
- **Accent Violet** (`{colors.accent-violet}` — #6c55fc): Category-highlight accent (e.g. the "Confusing" column).
- **Accent Magenta** (`{colors.accent-magenta}` — #f200ca): Category-highlight accent (e.g. the "Expensive" column).
- **Accent Green / Green Alt** (`{colors.accent-green}` — #5d9c06, `{colors.accent-green-alt}` — #2ca01c): Positive figures and the Quickbooks-style integration mark inside product UI.

### Surface
- **Canvas** (`{colors.canvas}` — #f7fafc): The page floor — a faint cool wash, not pure white.
- **Surface** (`{colors.surface}` — #ffffff): Floating cards (invoice card, feature cards, payment selector).
- **Surface Soft** (`{colors.surface-soft}` — #fafafa): The large testimonial block background and very-soft zones.

### Text
- **Ink** (`{colors.ink}` — #000000): Headlines, high-contrast labels.
- **Body** (`{colors.body}` — #1e1e1e): Default running text.
- **Muted** (`{colors.muted}` — #666666): Secondary copy, sub-headings.
- **Muted Soft** (`{colors.muted-soft}` — #8d8d8d): Tertiary labels, captions, invoice meta ("INVOICE NO", "FROM", "TO").
- **Neutral** (`{colors.neutral}` — #999999): Faintest labels, placeholder-weight text.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on the dark pill CTAs.

## Typography

### Font Family
The system runs a single family — **Open Runde** — across every role, from the 64px hero headline to 16px body copy. Open Runde is an open-source (SIL OFL) rounded-terminal reworking of Inter; its softened corners give Acctual its approachable fintech tone. Because it is open-source, it can ship directly. A reasonable fallback stack walks `Nunito, -apple-system, BlinkMacSystemFont, sans-serif` — Nunito shares the rounded-geometric character.

Weights are restrained: 600 for display + headings, 500 for body. There is no measured light or 700 weight in the system.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 64px | 600 | 1.125 | -1.92px | Hero h1 ("Get paid on time") |
| `{typography.heading}` | 32px | 600 | 1.25 | -0.96px | Section heads, testimonial quote |
| `{typography.body}` | 16px | 500 | 1.21 | -0.32px | Running text, button labels, nav, captions |

### Principles
Letter-spacing scales negatively with size — the larger the type, the tighter the tracking (-1.92px at 64px, -0.32px at 16px). This is the single most consistent typographic signature. Keep weight at 600 for display/heading and 500 for body; the system never goes to 700 or to a light weight. Open Runde's rounded terminals are intrinsic to the brand voice — substituting a sharp-cornered sans changes the tone.

### Note on Font Substitutes
Open Runde is open-source and ships directly. If unavailable, **Nunito** at matching weights is the closest rounded-geometric substitute. The intermediate sizes between body (16px) and heading (32px) — e.g. sub-heads and small labels — were not individually measured; see Known Gaps.

## Layout

### Spacing System
- **Base unit:** 4px (with a frequent 12px step).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 10px · `{spacing.base}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 28px · `{spacing.xxl}` 40px.
- **Most frequent steps:** 12px (gaps/padding) and 24px (card gutters) dominate the measured distribution, with 10px and 28px close behind.
- **Card internal padding:** `{spacing.lg}` (24px) for content cards; `{spacing.xxl}` (40px) for the large testimonial block; `{spacing.md}` (16px) for tight feature cards.

### Grid & Container
- **Hero band:** centered single column — eyebrow badge, h1, sub-line, dark pill CTA, payment-method pill row, then the invoice card artifact below.
- **Feature grids:** 3-up "Who is this for?" grid of feature cards at desktop.
- **Category bands:** 3-column comparisons (Slow / Expensive / Confusing) with pastel highlight cards.
- Section-padding values above 40px were not captured by the measurement; larger vertical rhythm is documented as a gap.

### Whitespace Philosophy
The hero is centered and airy, with the product artifact (invoice card) anchoring the lower half of the fold. Cards favor soft generous rounding and breathing internal padding (24px) over dense packing. The blue-tinted canvas keeps the whole page reading as one continuous bright surface rather than hard-edged sections.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow on `{colors.canvas}` | Hero band, nav, body sections |
| Hairline ring | `rgb(36,38,40) 0 0 0 1px, rgba(27,28,29,0.48) 0 1px 2px` | Outlined / bordered controls |
| Soft card | `rgba(0,0,0,0.06) 0 2.5px 2.5px` | Feature cards, small floating cards |
| Lifted card | `rgba(0,0,0,0.05) 0 1.78px 8px, rgba(0,0,0,0.04) 0 0.89px 2.67px` | Invoice card, payment-selector card |
| Faint lift | `rgba(10,13,20,0.03) 0 1px 2px` and `rgba(0,0,0,0.06) 0 2px 3px -1px` | Subtle separators, badges |

The elevation philosophy is **soft and low-alpha** — shadows stay under 0.06 opacity and small blur radii. No heavy drop shadows, no glow, no neumorphism. The invoice card carries the most pronounced lift to read as a floating document over the canvas.

### Decorative Depth
- The hero composition layers physical desk props (a paperclip, keyboard, binder clip) photographed with their own real shadows behind/around the invoice card — these are photographic content, not system shadow tokens.
- Stacked invoice papers (INVOICE NO 001 / 002) behind the main card create a literal paper-stack depth cue.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 10px | Small inner controls |
| `{rounded.md}` | 12px | Inputs, small chips |
| `{rounded.lg}` | 16px | Content cards (invoice, feature, payment selector) — the most common radius |
| `{rounded.xl}` | 20px | Slightly larger card variants |
| `{rounded.xxl}` | 32px | The large testimonial block |
| `{rounded.pill}` | 100px | Pill CTAs, nav container, badges, payment-method pills |
| `{rounded.full}` | 1250px | Effectively-full rounding on capsule elements (clamps to a pill) |

The radius system is generous throughout — there is no sharp-corner mode. `{rounded.lg}` (16px, the most frequent measured value) is the default card radius; `{rounded.pill}` (100px) makes every button and badge a full capsule.

### Photography Geometry
Avatar/logo marks inside the invoice card (the blue scalloped Marble Studio mark, the green Charm AI badge) are organic/circular shapes. The hero composition mixes photographed physical objects (paperclip, keyboard, binder clip) with the digital invoice cards, all sharing the rounded vocabulary.

## Components

### Navigation

**`top-nav`** — A pill-shaped nav container floating on `{colors.canvas}`, rounded `{rounded.pill}`. Carries the Acctual wordmark + logo at left, a horizontal menu (Freelancer, Agency, Pricing, Blog, Guides) in `{typography.body}`, and a right cluster with a "Log in" `{component.nav-link}` and a "Sign up for free" `{component.button-primary}`. Text in `{colors.ink}`.

**`nav-link`** — Inline text nav item, transparent background, `{colors.ink}` text, `{typography.body}`.

**`text-link`** — Inline anchor links in `{colors.link}` (#0000ee).

### Buttons

**`button-primary`** — The signature CTA. Background `{colors.primary}` (#0d111b), text `{colors.on-primary}`, `{typography.body}`, rounded `{rounded.pill}` (100px), padding 12px × 24px. Used for "Sign up for free", "Send my first invoice", "Create an invoice", "Get paid with Acctual".

**`button-primary-active`** — Press state, derived: background shifts to `{colors.ink}` (#000000), text stays `{colors.on-primary}`, rounded `{rounded.pill}`. (Press state not directly measured — derived from the near-black palette.)

### Badges & Pills

**`badge-pill`** — The "Used by 5,000+ businesses worldwide" eyebrow pill. Rounded `{rounded.pill}`, `{typography.body}`, text `{colors.accent-blue}`. Background renders as a pale blue tint that was not captured in measurement (see Known Gaps) — declared `transparent` here pending a measured value.

**`payment-method-pill`** — The check-prefixed payment rows under the hero ("Cards 2.7% ▾0.2%", "Bank transfer 1%", "Stablecoin 1%"). Transparent background, label text in `{colors.accent-blue}` with a blue circular check icon, `{typography.body}`.

### Cards & Containers

**`invoice-card`** — The hero product artifact. Background `{colors.surface}` (#ffffff), rounded `{rounded.lg}` (16px), lifted soft shadow. Carries an "INVOICE NO 001" header row, a two-column FROM / TO block with circular brand avatars (Marble Studio / Charm AI), email lines in `{colors.muted-soft}`, addresses in `{colors.muted}`, and a line-item table totaling $45,000.00. The card shows the real product, not an illustration of it.

**`feature-card`** — Used in the 3-up "Who is this for?" grid (Freelancers, Agencies, Consultants, Contractors, eCommerce, Cross border). Background `{colors.surface}`, rounded `{rounded.lg}`, padding `{spacing.md}` (16px). Carries a small icon, a bold title, and a short description in `{typography.body}`.

**`highlight-card`** — The pastel comparison cards in the "Accounting platforns are a slow, expensive way to invoice clients" band (Slow / Expensive / Confusing). Rounded `{rounded.lg}`, with a colored label above (`{colors.accent-blue}`, `{colors.accent-magenta}`, `{colors.accent-violet}` respectively). The pastel card fills are tints of those accents that were not captured in measurement — declared `transparent` here pending measured values.

**`testimonial-card`** — The large centered quote block ("Acctual makes invoices so easy..."). Background `{colors.surface-soft}` (#fafafa), rounded `{rounded.xxl}` (32px), padding `{spacing.xxl}` (40px). Quote in `{typography.heading}`, attribution in `{colors.muted}`.

**`payment-selector-card`** — The product-UI fragment showing payment-method tabs (Bank / Card / Crypto, USD / ACH) with a "Get paid with Acctual" `{component.button-primary}` inside. Background `{colors.surface}`, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px).

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#0d111b) for primary pill CTAs. The action layer is near-monochrome.
- Use Open Runde everywhere, with size-scaled negative letter-spacing (-1.92px at display, -0.32px at body).
- Make every button and badge a full pill (`{rounded.pill}`, 100px).
- Show real invoice / payment-method UI as the hero artifact — don't illustrate the product abstractly.
- Keep accent colors (`{colors.accent-blue}`, `{colors.accent-violet}`, `{colors.accent-magenta}`, `{colors.accent-green}`) inside product chrome and category highlights only.
- Keep card shadows soft and low-alpha (≤0.06 opacity).
- Use the blue-tinted canvas (`{colors.canvas}`) rather than pure white for the page floor.

### Don't
- Don't color the primary CTA with an accent — it stays near-black.
- Don't introduce a 700 weight or a light weight; the system lives at 500–600.
- Don't drop the negative letter-spacing on display type — it flattens the voice.
- Don't use sharp-cornered cards; the system has no hard-corner mode (16px minimum on cards).
- Don't apply heavy drop shadows — the deepest lift is the floating invoice card.
- Don't document hover state styling; primary darkens on press, nothing else changes.

## Responsive Behavior

### Breakpoints
Specific breakpoint widths were not captured in measurement. The following is inferred from the captured landing + pricing screenshots:

| Name | Behavior (inferred) |
|---|---|
| Mobile | Pill nav likely collapses to a compact bar; hero h1 scales down from 64px; invoice card scales proportionally; feature/comparison grids stack to 1-up |
| Tablet | Feature grids likely 2-up; comparison cards stack or 2-up |
| Desktop | Full pill nav with all menu items; 3-up feature grid; 3-column comparison band; hero centered with invoice card below |

### Touch Targets
- `{component.button-primary}` uses 12px × 24px padding on `{typography.body}`, comfortably exceeding 40px tall.
- Pill nav items and `{component.payment-method-pill}` rows sit within the floating capsule nav with adequate spacing.

### Collapsing Strategy
Exact collapse thresholds are a gap. From the screenshots, the centered hero and stacked-card composition are intrinsically single-column-friendly, and the multi-column feature/comparison grids are the primary candidates for column reduction on smaller viewports.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.invoice-card}`, `{component.button-primary}`).
2. Variants of an existing component (`-active`, etc.) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Keep the type to Open Runde at 500/600 with size-scaled negative tracking.
6. Keep the action layer near-monochrome; route saturated accents into product chrome and category highlights.
7. When adding cards, default to `{rounded.lg}` (16px) and a soft ≤0.06-alpha shadow.

## Known Gaps

- **Components were not auto-extracted** (`components: []`); every component above is documented from screenshot ground-truth plus measured color/type/radius/shadow tokens.
- **Badge and pastel-highlight fills were not measured.** The pale-blue eyebrow badge and the Slow/Expensive/Confusing pastel card backgrounds are clearly tinted but their exact hex values weren't captured — their `backgroundColor` is declared `transparent` pending measurement.
- **Intermediate type sizes are missing.** Only h1 (64px), h4 (32px), and body (16px) were measured; sub-heads, small labels, and button/caption sizes between 16px and 32px were not individually captured.
- **No measured h2/h3.** Section heading scale below 32px is inferred.
- **Section-level vertical rhythm** above 40px was not captured; only intra-component spacing (4–40px) is measured.
- **Hairline/border colors** on feature cards weren't isolated; card outlines are inferred from the soft shadow tokens.
- **Breakpoints and responsive thresholds** were not measured — responsive behavior is inferred from the captured landing/pricing screenshots.
- **The pricing page** was captured but its specific tier-card tokens were not separately extracted.
- **Open Runde is open-source (SIL OFL)** and ships directly; no licensed-font substitution is required, though Nunito is documented as a fallback.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/acctual/design-md -->
