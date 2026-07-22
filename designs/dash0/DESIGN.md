---
version: alpha
name: Dash0-design-analysis
description: A dark-mode, OpenTelemetry-native observability product site built on a near-black canvas (#101010) with white display type in the Roobert typeface and a single hot coral-red primary action (#f8494d). The voice is engineer-confident and product-forward — real dashboard chrome (service maps, log views, trace timelines) is shown directly inside dark cards, and warm coral/orange accents carry the brand voltage against an otherwise monochrome dark palette. Headlines run at a calm 400 weight; cards stay flat with low radius.
colors:
  primary: "#f8494d"
  primary-soft: "#ff5f57"
  accent-red: "#f95e55"
  accent-coral: "#fd8c66"
  accent-coral-2: "#fc9c64"
  accent-orange: "#fd6f40"
  ink: "#ffffff"
  body: "#bdbdbd"
  muted: "#9e9e9e"
  muted-2: "#969696"
  muted-3: "#939396"
  neutral-mid: "#888888"
  neutral-soft: "#616161"
  canvas: "#101010"
  surface: "#111111"
  surface-2: "#18181b"
  surface-3: "#1f1f1f"
  surface-4: "#212121"
  surface-5: "#2c2c2c"
  hairline: "#424242"
  hairline-soft: "#2c2c2c"
  on-primary: "#ffffff"
typography:
  h1:
    fontFamily: "Roobert, Inter, sans-serif"
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: normal
  h2:
    fontFamily: "Roobert, Inter, sans-serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: normal
  h3:
    fontFamily: "Roobert, Inter, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: normal
  body:
    fontFamily: "Roobert, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: normal
  button:
    fontFamily: "Roobert, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0.1px
rounded:
  xs: 3px
  sm: 4px
  md: 8px
  lg: 14px
  xl: 32px
spacing:
  xxs: 4px
  hair: 6px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 40px
  xxxl: 48px
  section: 56px
components:
  announcement-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    padding: 8px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 24px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.body}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px
  button-cta-accent:
    backgroundColor: "{colors.accent-coral}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px
  badge-pill:
    backgroundColor: "{colors.surface-5}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  email-capture:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 8px
  text-input:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: 0px
  card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  feature-card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.h3}"
    rounded: "{rounded.md}"
    padding: 24px
  product-mockup-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 24px
  testimonial-card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  pricing-card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.h3}"
    rounded: "{rounded.md}"
    padding: 24px
  floating-overlay:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 24px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    padding: 48px
---

## Overview

Dash0 is a dark-mode, OpenTelemetry-native observability product site. The entire surface sits on a near-black canvas (`{colors.canvas}` — #101010) with white display type (`{colors.ink}` — #ffffff) and a single hot coral-red primary action (`{colors.primary}` — #f8494d). The system reads as engineer-confident, product-forward SaaS — dark, dense with real product chrome, and warm at the action layer.

The typographic voice is **Roobert** at a calm 400 weight for all headlines (h1/h2/h3), shifting to weight 500 for body and button labels. Headlines do not shout — the h1 sits at 44px / 400 with normal letter-spacing. Brand voltage comes not from bold type but from the coral-red CTA and the warm orange accent family used on the "AI era." headline highlight and gradient announcement bar.

Component voltage comes from **real product UI shown directly inside cards** — the hero embeds an actual service-map / trace dashboard with a "CRITICAL" badge, RED metrics, and a live service graph; feature bands show log filtering, metrics charts, trace timelines, and integration grids as actual product fragments rather than marketing illustrations. Dash0 shows the product, it doesn't paint around it.

The palette is monochrome-dark with a warm accent: a deep ladder of near-black surfaces (`{colors.surface}` #111111 → `{colors.surface-5}` #2c2c2c) holds cards, and the coral/orange accent family (`{colors.primary}`, `{colors.accent-coral}`, `{colors.accent-orange}`) supplies the only chroma.

**Key Characteristics:**
- Near-black canvas (`{colors.canvas}` — #101010) under everything. There is no light mode on the marketing surface.
- Single coral-red primary CTA (`{colors.primary}` — #f8494d), low radius (`{rounded.sm}` — 4px), tight 8px padding, weight-500 14px label.
- Roobert headlines at weight 400 — calm, never bold. The middle weight (500) is reserved for body and buttons.
- Warm accent family (`{colors.accent-coral}` #fd8c66, `{colors.accent-orange}` #fd6f40, `{colors.primary-soft}` #ff5f57) used on the "AI era." highlight, the gradient announcement bar, and secondary form CTAs.
- Real product UI fragments embedded in dark cards — service maps, log views, trace timelines, dashboards shown at small scale.
- Flat cards (`{rounded.md}` — 8px, no shadow) on a layered dark-surface ladder; depth comes from surface-tone steps rather than shadows.
- A single large soft drop shadow (`rgba(0,0,0,0.3) 0 30px 70px`) reserved for floating overlays like the cookie consent panel.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #f8494d): The dominant action color — the "Start Free Trial" CTA, primary buttons, and the gradient announcement bar at page top. This is the single high-chroma signal in the system.
- **Primary Soft** (`{colors.primary-soft}` — #ff5f57): A slightly lighter coral used in the warm gradient blends near the primary.
- **Accent Coral** (`{colors.accent-coral}` — #fd8c66) / **Accent Coral 2** (`{colors.accent-coral-2}` — #fc9c64): Warm coral-orange used on the secondary "Start for free" form button and on the "AI era." headline highlight gradient.
- **Accent Orange** (`{colors.accent-orange}` — #fd6f40) / **Accent Red** (`{colors.accent-red}` — #f95e55): The remainder of the warm gradient ramp — used in the announcement bar blend and headline accent runs.

### Surface
- **Canvas** (`{colors.canvas}` — #101010): The page floor — top nav, footer, and all section backgrounds.
- **Surface** (`{colors.surface}` — #111111): The deepest card / product-mockup surface, only a hair above canvas.
- **Surface 2** (`{colors.surface-2}` — #18181b): The default card background — feature cards, testimonial cards, pricing cards.
- **Surface 3 / 4** (`{colors.surface-3}` — #1f1f1f, `{colors.surface-4}` — #212121): Nested panels and inner product chrome.
- **Surface 5** (`{colors.surface-5}` — #2c2c2c): Badge pills, raised inner chips, the highest near-black step.
- **Hairline** (`{colors.hairline}` — #424242): 1px divider / border tone on dark surfaces.
- **Hairline Soft** (`{colors.hairline-soft}` — #2c2c2c): A barely-visible divider between sections sharing the canvas.

### Text
- **Ink** (`{colors.ink}` — #ffffff): All headlines and primary text on the dark canvas.
- **Body** (`{colors.body}` — #bdbdbd): Light-gray running text on dark surfaces.
- **Muted** (`{colors.muted}` — #9e9e9e): Secondary text — sub-headings, nav links, footer body.
- **Muted 2 / 3** (`{colors.muted-2}` — #969696, `{colors.muted-3}` — #939396): Tertiary captions and fine print.
- **Neutral Mid** (`{colors.neutral-mid}` — #888888) / **Neutral Soft** (`{colors.neutral-soft}` — #616161): Disabled labels, placeholder text, inactive icons.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on the coral primary button and announcement bar.

### Semantic
No dedicated success / warning / error tokens were measured on the marketing surface. Status colors (e.g. the red "CRITICAL" pill inside the product mockup) belong to product chrome shown as content, not the marketing token set — see Known Gaps.

## Typography

### Font Family
The system runs **Roobert** (`roobertPrimary` in the measured CSS) across every role — display, headings, body, and buttons. Roobert is a commercial typeface from Displaay Type Foundry and is **not** an open-source web font; it was not flagged in `fonts_licensed`, but because it is a licensed face it should not be assumed redistributable. The fallback / substitute stack documented here is `Roobert, Inter, sans-serif` — **Inter** is the recommended open-source substitute, with **Geist** or **Hanken Grotesk** as close geometric-humanist alternatives.

The weight split is the system's signature:
- Roobert **400** — h1, h2, h3 (headlines stay light, never bold)
- Roobert **500** — body text and button labels

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.h1}` | 44px | 400 | 1.3 | normal | Hero headline ("Observability for the AI era.") |
| `{typography.h2}` | 36px | 400 | 1.3 | normal | Section heads ("Observability in Minutes, not Months") |
| `{typography.h3}` | 20px | 400 | 1.4 | normal | Feature card titles, pricing column heads |
| `{typography.body}` | 16px | 500 | 1.4 | normal | Default running text, nav links, footer |
| `{typography.button}` | 14px | 500 | 1.0 | 0.1px | Button labels, badge pills, announcement bar |

### Principles
The headline weight stays at 400 across all display sizes — never 600 or 700. Dash0's confidence is expressed through scale and the coral accent, not heavy type. Body and buttons step up to 500 for legibility on dark surfaces. Letter-spacing is `normal` everywhere except buttons, which carry a faint +0.1px tracking.

### Note on Font Substitutes
If Roobert is unavailable, **Inter** is the closest widely-licensed substitute and is already the documented fallback. Keep headline weight at 400 to preserve the calm voice; do not bump substitutes to 500+ for headings. **Geist** (weight 400) is a strong geometric alternative that matches Roobert's even rhythm.

## Layout

### Spacing System
- **Base unit:** 4px (with a recurring 6px and 8px micro-step).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.hair}` 6px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 40px · `{spacing.xxxl}` 48px · `{spacing.section}` 56px.
- **Dominant rhythm:** 8px (measured 69×) and 24px (measured 55×) are the two most frequent values — 8px for tight internal padding (buttons, chips), 24px for card padding and inter-card gutters.
- **Card internal padding:** `{spacing.lg}` (24px) for feature, testimonial, and pricing cards.
- **Section padding:** larger steps (`{spacing.xxxl}` 48px, `{spacing.section}` 56px) separate editorial bands. Exact section-to-section vertical rhythm beyond 56px was not isolated — see Known Gaps.

### Grid & Container
- **Feature card grids:** 3-up at desktop (the "Live Insights / From instrumentation to code fixes / Keeps your context" row and the larger feature matrix below it).
- **Hero:** centered single column — badge, h1, email-capture row, then a full-width product-mockup dashboard below.
- **Footer:** 4-column link list (Resources / Company / Compare / Contact).

### Whitespace Philosophy
Dash0 uses generous vertical whitespace between bands but dense, information-rich cards — each feature card carries a real product screenshot plus a title and description. The contrast between the airy dark canvas and the dense product chrome inside cards is the layout's defining tension.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat canvas | No shadow, no border | Page sections, top nav, footer |
| Surface step | Card sits on a higher near-black tone (`{colors.surface-2}` over `{colors.canvas}`) | Feature cards, testimonial cards |
| Nested step | Inner panel one tone higher again (`{colors.surface-4}`, `{colors.surface-5}`) | Chips, badge pills, inner product chrome |
| Hairline | 1px `{colors.hairline}` (#424242) border | Card outlines, dividers |
| Floating overlay | `rgba(0, 0, 0, 0.3) 0px 30px 70px 0px` | Cookie consent panel and other floating modals |

The depth philosophy is **tonal, not shadow-driven**. Cards are flat (`shadow: none` was measured on the card primitive) and rely on stepping up the near-black surface ladder to read as elevated. The single large soft drop shadow is reserved for true floating overlays such as the cookie consent dialog.

### Decorative Depth
- Product UI fragments embedded in cards carry their own internal chrome (graph glows, the red "CRITICAL" status pill, colored trace bars). These are product content, not system tokens.
- The warm coral/orange accents create perceived "glow" against the dark surface without using actual shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 3px | Small inner chips, tight inline tags |
| `{rounded.sm}` | 4px | Primary + secondary buttons, badge pills (most common — measured 32×) |
| `{rounded.md}` | 8px | Cards, feature cards, product-mockup cards, email-capture wrapper (most common overall — measured 48×) |
| `{rounded.lg}` | 14px | Rare — a single larger container element |
| `{rounded.xl}` | 32px | Pill / large rounded containers (measured 4×) |

Inputs were measured at **0px radius** — the email-address text field inside the capture row is square-cornered, contrasting with the 4px buttons beside it.

### Photography Geometry
Dash0 uses no photographic imagery on the marketing surface — visuals are product screenshots and dashboard chrome shown inside `{rounded.md}` (8px) cards. Customer logos in the "Trusted by" strip render as monochrome wordmarks, not framed photos.

## Components

### Navigation & Announcement

**`announcement-bar`** — A full-width coral gradient bar pinned above the nav ("Dash0 Raises $110M Series B at $1B Valuation"). Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, padding `{spacing.xs}` (8px). The warmest, most saturated element on every page.

**`top-nav`** — Canvas-colored bar (`{colors.canvas}`) carrying the dash0 wordmark at left, primary menu (Product, Pricing, Docs, Resources, About) center, and a right cluster with search (⌘K), "Book a demo" (`{component.button-ghost}`), "Sign in" (`{component.button-ghost}`), and "Start Free Trial" (`{component.button-primary}`). Menu items in `{component.nav-link}`.

**`nav-link`** — Inline nav menu item. Transparent background, `{colors.muted}` text, `{typography.body}`.

### Buttons

**`button-primary`** — The signature CTA. Background `{colors.primary}` (#f8494d), text `{colors.on-primary}`, type `{typography.button}` (Roobert 14px / 500, +0.1px tracking), rounded `{rounded.sm}` (4px), padding `{spacing.xs}` (8px). Used for "Start Free Trial" in the nav and primary actions throughout.

**`button-cta-accent`** — The secondary "Start for free" button inside the email-capture row. Background `{colors.accent-coral}` (#fd8c66 — derived: the warm coral form button reads lighter than the primary red), text `{colors.ink}`, same radius + padding as primary.

**`button-ghost`** — Transparent text button ("Book a demo", "Sign in"). No background, `{colors.ink}` text, `{typography.button}`.

### Badges & Chips

**`badge-pill`** — Small uppercase label chip ("OPENTELEMETRY-NATIVE", section eyebrow tags). Background `{colors.surface-5}` (#2c2c2c), text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.sm}`, padding 4px × 8px.

### Inputs & Forms

**`email-capture`** — The hero email-capture row wrapper. Background `{colors.surface-2}`, rounded `{rounded.md}` (8px), padding `{spacing.xs}` (8px). Holds a square text input plus the `{component.button-cta-accent}`.

**`text-input`** — The email-address field. Transparent background, `{colors.ink}` text, `{typography.body}`, **square corners (0px radius)** — distinct from the rounded buttons. Placeholder in `{colors.neutral-soft}` (derived).

### Cards & Containers

**`card`** — Base card primitive. Background `{colors.surface-2}` (derived from observed dark card tone), rounded `{rounded.md}` (8px), no shadow.

**`feature-card`** — The 3-up and matrix feature cards ("Instant log filtering and search", "Monitor the metrics that matter", etc.). Background `{colors.surface-2}`, rounded `{rounded.md}`, padding `{spacing.lg}` (24px). Each carries a product screenshot at top, an uppercase eyebrow tag, an `{typography.h3}` title, and a `{typography.body}` description.

**`product-mockup-card`** — The hero dashboard and larger product fragments. Background `{colors.surface}` (#111111, the deepest surface), rounded `{rounded.md}`, padding `{spacing.lg}`. Displays actual Dash0 product chrome — service maps, RED metrics, trace timelines, the "Ask Agent0" panel. Dash0 shows the product itself, not a rendering of it.

**`testimonial-card`** — Customer-quote card ("What Our Customers Say"). Background `{colors.surface-2}`, text `{colors.body}`, type `{typography.body}`, rounded `{rounded.md}`, padding `{spacing.lg}`. Carries a name + role line above the quote.

**`pricing-card`** — Pricing / "Cost Under Control" column card. Background `{colors.surface-2}`, text `{colors.ink}`, head in `{typography.h3}`, rounded `{rounded.md}`, padding `{spacing.lg}`.

**`floating-overlay`** — The cookie consent panel (and similar floating modals). Background `{colors.surface}`, text `{colors.ink}`, rounded `{rounded.md}`, padding `{spacing.lg}`, with the system's only drop shadow (`rgba(0,0,0,0.3) 0 30px 70px`). Contains toggle switches (Necessary / Preferences / Statistics / Marketing — the active toggles render in `{colors.primary}`) and Deny / Allow selection / Allow all buttons.

### Footer

**`footer`** — Canvas-colored footer (`{colors.canvas}`) closing the page. Text `{colors.muted}`, type `{typography.body}`, padding `{spacing.xxxl}` (48px). 4-column link list (Resources / Company / Compare / Contact) with the dash0 wordmark above.

## Do's and Don'ts

### Do
- Keep `{colors.primary}` (#f8494d) reserved for the single most important action and the announcement bar. The system is monochrome-dark with one coral signal.
- Keep all headlines in Roobert weight 400. The calm headline weight is the brand voice.
- Step up the near-black surface ladder (`{colors.canvas}` → `{colors.surface-2}` → `{colors.surface-5}`) to express elevation instead of adding shadows.
- Embed real product UI inside cards. Show the service map, the log view, the trace timeline — don't illustrate them.
- Use `{rounded.sm}` (4px) for buttons and chips, `{rounded.md}` (8px) for cards. Keep the radius low and consistent.
- Use the warm coral/orange accents (`{colors.accent-coral}`, `{colors.accent-orange}`) sparingly — on the headline highlight and secondary form CTA only.

### Don't
- Don't bold headlines past weight 400, and don't drop body/buttons below 500.
- Don't introduce a light-mode surface — the entire system is dark.
- Don't add drop shadows to cards. Only floating overlays (cookie panel, modals) carry the `rgba(0,0,0,0.3) 0 30px 70px` shadow.
- Don't round inputs — the text field is intentionally square (0px) against the 4px buttons.
- Don't scatter the coral accent across multiple CTAs in one band — one primary action per band.
- Don't document hover states — primary and active/pressed only.

## Responsive Behavior

The two captured pages (landing, pricing) were measured at desktop width. Breakpoint behavior below is inferred from the layout structure and marked accordingly — exact breakpoint pixel values were not measured (see Known Gaps).

### Breakpoints (inferred — derived)

| Name | Width | Key Changes (derived) |
|---|---|---|
| Mobile | < 768px | Nav collapses to hamburger; hero stays single-column; feature grids 1-up; footer columns stack |
| Tablet | 768–1024px | Feature grids 2-up; nav tightens |
| Desktop | > 1024px | Full horizontal nav; 3-up feature cards; full-width product-mockup dashboard |

### Touch Targets
- `{component.button-primary}` uses 8px padding around a 14px label — at desktop scale this reads compact; verify a minimum 44px effective tap height on touch builds (the measured padding alone does not guarantee 44px — derived caution).
- Nav links and footer links sit in dense rows; spacing should be increased for touch.

### Collapsing Strategy
- Hero remains centered single-column at all sizes; the product-mockup dashboard below scales proportionally while keeping its internal chrome legible.
- Feature card grids reduce column count (3 → 2 → 1) rather than shrinking individual cards.
- The dark canvas and surface-ladder treatment hold at every breakpoint.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.button-primary}`).
2. Variants of an existing component (`-active`, `-disabled`, `-focused`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component color prop.
4. Never document hover. Default and Active/Pressed states only.
5. Headlines stay Roobert 400; body and buttons stay 500. The weight split does not blur.
6. The coral `{colors.primary}` is the only saturated action color — don't multiply CTAs.
7. Express depth by stepping the near-black surface ladder, not by adding shadows.

## Known Gaps

- **Roobert is a licensed commercial typeface** (Displaay Type Foundry). It was not flagged in `fonts_licensed`, but it cannot be assumed redistributable; the documented substitute stack is `Roobert, Inter, sans-serif` with Inter as the open-source fallback.
- Section-to-section vertical rhythm beyond 56px was not isolated — the largest measured spacing value is 56px, so multi-band vertical gaps are estimated, not measured.
- Card and surface background assignments for `{component.card}`, `{component.feature-card}`, etc. are **derived** from the observed dark-surface ladder; the analysis measured radius and shadow on the card primitive but not its exact background hex.
- The secondary form button color (`{component.button-cta-accent}`) is mapped to `{colors.accent-coral}` (#fd8c66) as the closest measured warm tone — **derived** from screenshot ground-truth; the exact button background was not isolated separately from the measured primary.
- No semantic success / warning / error tokens were measured. Status colors visible inside product mockups (e.g. the red "CRITICAL" pill) are product chrome, not marketing tokens.
- Breakpoint pixel values and responsive collapse behavior are **inferred** from layout structure — only desktop-width captures exist.
- Animation, transition timings, and toggle-switch interaction states (cookie panel) are out of scope.
- Input focus, disabled, and error states were not extracted — only the default `{component.text-input}` (0px radius) is documented.
- The pricing page was captured but its tier-specific component structure was not separately measured beyond the shared card primitives.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/dash0/design-md -->
