---
version: alpha
name: Default-design-analysis
description: A dark-mode, infrastructure-software interface for AI go-to-market agents, built on a near-black canvas (#0b0c0e) with barely-raised charcoal surfaces, white Inter display type set at light weight 400 with tight negative letter-spacing, and product-UI fragments (workflow canvases, data tables, chat panels) shown directly inside cards. Brand voltage is monochrome and product-led — a single white CTA pill against the dark field, with small saturated accent colors (blue, green, red, violet) appearing only inside the embedded product chrome.

colors:
  ink: "#ffffff"
  ink-soft: "#fafafa"
  off-white: "#f9f9f7"
  canvas: "#0b0c0e"
  surface: "#0e0f11"
  surface-raised: "#121315"
  surface-strong: "#151618"
  surface-edge: "#1f1f21"
  near-black: "#0a0a0a"
  near-black-soft: "#080808"
  pure-black: "#000000"
  ink-dark: "#171717"
  muted: "#71717a"
  accent-blue: "#3b82f6"
  accent-blue-bright: "#60a5fa"
  accent-blue-strong: "#2563eb"
  accent-green: "#22c55e"
  accent-green-bright: "#4ade80"
  accent-red: "#f87171"
  accent-violet: "#9333ea"

typography:
  display-xl:
    fontFamily: "Inter, sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: -1.28px
  display-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.9px
  display-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.8px
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 420
    lineHeight: 1.375
    letterSpacing: -0.32px
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal

rounded:
  xs: 4px
  sm: 5px
  md: 8px
  lg: 10px
  xl: 12px
  xxl: 16px
  xxxl: 24px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px

components:
  announcement-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 12px 16px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    padding: 16px 20px
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.near-black}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  login-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
  hero-subhead:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.body}"
  logo-cloud:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
  product-mockup-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: 16px
  feature-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 20px
  data-table-surface:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 12px
  ask-anything-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 12px 16px
  badge-success:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.accent-green}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 4px 8px
  badge-error:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.accent-red}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 4px 8px
  section-eyebrow:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.body}"
  testimonial-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.display-md}"
  footer:
    backgroundColor: "{colors.near-black}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    padding: 20px
---

## Overview

Default is a dark-mode infrastructure-software marketing surface for AI go-to-market agents. The entire system sits on a near-black canvas (`{colors.canvas}` — #0b0c0e) with barely-raised charcoal surfaces (`{colors.surface}` — #0e0f11) holding product UI fragments. There is no light mode on these pages — the dark field is the brand, and white Inter type does the talking.

Type voice is monolithic: **Inter** at every level, set at light weight 400 for display headlines with aggressive negative letter-spacing (-0.8px to -1.28px on the big sizes). The h1 "Deploy agents that work across your go-to-market" reads at 64px / weight 400 / 0.94 line-height — the thin-weight-at-large-size treatment gives the page an engineered, restrained confidence rather than a shouty marketing tone.

Brand voltage comes from **product UI fragments shown directly inside cards** — an agentic workflow canvas with trigger/condition nodes, a CRM-style data table of opportunities, a chat panel, a version-history governance panel. Default doesn't paint marketing illustrations of the product; it composites the actual product chrome at small scale onto the dark canvas. Saturated accent colors (`{colors.accent-blue}`, `{colors.accent-green}`, `{colors.accent-red}`, `{colors.accent-violet}`) appear almost exclusively *inside* these product fragments — status pills, node icons, selection highlights — never on the marketing CTAs.

The single primary action is a white pill: **`button-primary`** uses `{colors.ink}` (#ffffff) as its fill with dark text (`{colors.near-black}` — #0a0a0a). Against the dark field, the white CTA is the brightest object on the page — color contrast does all the work of drawing the eye.

**Key Characteristics:**
- Near-black canvas (`{colors.canvas}` — #0b0c0e) with charcoal surfaces (`{colors.surface}` — #0e0f11) one notch lighter. The whole system lives in a tight dark value band.
- Single white CTA pill (`{component.button-primary}`) — `{colors.ink}` fill, `{colors.near-black}` text. The only high-brightness element in the marketing layer.
- All-Inter typography at light weight 400, even at 64px display size, with negative letter-spacing. Engineered, not bombastic.
- Product UI fragments composited directly onto the canvas — workflow canvas, data tables, chat, governance panels. Accent colors live inside these fragments.
- Muted gray (`{colors.muted}` — #71717a) for sub-heads, eyebrows, logo-cloud labels, and footer text — a single secondary text tone throughout.
- Saturated accents (blue / green / red / violet) reserved for product chrome: status pills like "booked" (green) and "not booked" (red), node icons, selection outlines.
- Border radius clusters tight: `{rounded.sm}` (5px) and `{rounded.lg}` (10px) are the most frequent measured values, with `{rounded.xl}` (12px) on larger card containers.

## Colors

### Brand & Accent
Default's marketing layer is effectively monochrome — white-on-near-black. The saturated accents are tools that appear inside the product fragments rather than brand colors used on CTAs.
- **Accent Blue** (`{colors.accent-blue}` — #3b82f6), **Accent Blue Bright** (`{colors.accent-blue-bright}` — #60a5fa), **Accent Blue Strong** (`{colors.accent-blue-strong}` — #2563eb): The dominant accent family — selected workflow nodes, the run/play control, link affordances inside product chrome.
- **Accent Green** (`{colors.accent-green}` — #22c55e) and **Accent Green Bright** (`{colors.accent-green-bright}` — #4ade80): Positive status — "Live" indicators, "booked" path pills.
- **Accent Red** (`{colors.accent-red}` — #f87171): Negative status — "not booked" path pills.
- **Accent Violet** (`{colors.accent-violet}` — #9333ea): Tool / sequence node icons inside the workflow canvas.

### Surface
The dark surfaces stack in a very narrow value band — distinguishing them is about subtle elevation, not contrast.
- **Canvas** (`{colors.canvas}` — #0b0c0e): The page floor, body background.
- **Surface** (`{colors.surface}` — #0e0f11): Default card background — one notch above canvas.
- **Surface Raised** (`{colors.surface-raised}` — #121315): Nested panels and table rows inside cards.
- **Surface Strong** (`{colors.surface-strong}` — #151618): Higher-elevation inner chrome, pill backgrounds.
- **Surface Edge** (`{colors.surface-edge}` — #1f1f21): The lightest charcoal — used for hairline-like edges and the top edge of raised elements.
- **Near Black** (`{colors.near-black}` — #0a0a0a), **Near Black Soft** (`{colors.near-black-soft}` — #080808), **Pure Black** (`{colors.pure-black}` — #000000): Deepest tones — the footer floor, text-on-white-button color, and deepest recesses.
- **Ink Dark** (`{colors.ink-dark}` — #171717): A measured neutral used in borders / dividers on dark surfaces.

### Text
- **Ink** (`{colors.ink}` — #ffffff): All headlines and primary text. Also the fill of the white CTA pill.
- **Ink Soft** (`{colors.ink-soft}` — #fafafa) and **Off White** (`{colors.off-white}` — #f9f9f7): Near-white tones for secondary white text and slightly warm surfaces.
- **Muted** (`{colors.muted}` — #71717a): The single secondary text tone — sub-heads, eyebrows, captions, logo-cloud labels, footer body, placeholder text.

### Semantic
- **Success** (`{colors.accent-green}` — #22c55e): Positive status inside product fragments.
- **Error** (`{colors.accent-red}` — #f87171): Negative status inside product fragments.

## Typography

### Font Family
The system runs **Inter** for everything — display headlines, body, navigation, buttons, and the product UI labels. No second typeface was measured. The fallback stack is `Inter, sans-serif`. No licensed/custom typefaces were flagged (`fonts_licensed` is empty), so Inter ships as-is.

The defining characteristic is **light weight at large size**: the h1 renders at 64px / weight 400, not the typical 600–700 display weight. Combined with tight negative letter-spacing (-1.28px at 64px), the headlines read as precise and engineered rather than loud.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 400 | 0.94 | -1.28px | Hero h1 ("Deploy agents that work across your go-to-market") |
| `{typography.display-lg}` | 48px | 400 | 1.05 | -0.9px | Section heads ("The infrastructure agents need to run on your revenue stack") |
| `{typography.display-md}` | 32px | 400 | 1.05 | -0.8px | Sub-section heads, testimonial quote, card-block titles |
| `{typography.body}` | 16px | 420 | 1.375 | -0.32px | Default running-text, sub-heads, captions |
| `{typography.button}` | 16px | 400 | 1.5 | normal | Button labels, nav links |

### Principles
Weight stays low — 400 across all display sizes, ~420 for body (measured). The hierarchy is built from **size and letter-spacing**, not weight. Larger sizes pull tighter tracking (-1.28px at 64px → -0.32px at 16px). Body text carries a slight negative tracking (-0.32px) that keeps even paragraph copy feeling tight and modern.

The body weight measured at 420 (an Inter variable-font intermediate) — keep this in mind when implementing with a static Inter cut, where weight 400 is the nearest available.

### Note on Font Substitutes
No licensed fonts are in use — Inter is open-source and ships directly. If Inter variable is unavailable, static Inter weight 400 is the nearest match for the body 420 weight.

## Layout

### Spacing System
- **Base unit:** 4px (the smallest measured value; the scale clusters densely between 4–20px).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px.
- **Component padding:** Cards and product-mockup surfaces use `{spacing.md}`–`{spacing.lg}` (16–20px) internally; pills and inline chrome use `{spacing.xxs}`–`{spacing.sm}` (4–12px).
- The measured spacing distribution is dense at the small end (highest frequencies at 5, 7, 8, 9, 10px) — this is a tightly-packed product-UI rhythm, consistent with embedding real application chrome at small scale.

### Grid & Container
- **Hero band:** Two-column split — h1 + headline at left, sub-headline + CTA at right.
- **Logo cloud:** Single horizontal row of partner logos in `{colors.muted}`, edge-faded.
- **Feature bands:** Left rail of category labels (Data / Tools / Agent / Governance) paired with a large right-side product-mockup card per section.
- **Capability grid:** 2-up text blocks at the bottom (Native access / Integrations, Unified data / Audit logs).

### Whitespace Philosophy
The marketing bands use generous vertical whitespace between sections — long dark stretches separate each product-fragment reveal, letting the embedded UI mockups breathe against the near-black field. Inside the product fragments themselves, spacing is dense (4–10px) because that's real application chrome at scale. Section-level vertical rhythm was not reliably measured (see Known Gaps).

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat canvas | No shadow — `{colors.canvas}` | Hero band, body sections, top nav |
| Raised surface | `{colors.surface}` one value-notch above canvas | Product-mockup cards, feature cards |
| Soft drop | `rgba(0,0,0,0.1) 0px 1px 4px, rgba(0,0,0,0.1) 0px 0px 1px` | The most frequent measured shadow (39×) — small floating chrome, pills, inner panels |
| Inset edge | `rgba(0,0,0,0.25) 0px 1px 2px inset` + soft drop | Inputs and recessed fields |
| Big ambient lift | `rgba(0,0,0,0.05) 0px 100px 106px, …42px 44px, …22px 24px, …12px 12px` | The marquee product-mockup card floating above the hero — a very large, very soft multi-layer ambient shadow |
| Hairline ring | `rgba(0,0,0,0.04) 0px 0px 0px 1px` + soft drops | Card edge definition on dark surfaces |

On a dark canvas, elevation is communicated as much by **value steps between surfaces** (`{colors.canvas}` → `{colors.surface}` → `{colors.surface-raised}` → `{colors.surface-strong}`) as by shadow. The largest measured shadow is a deep, very-soft ambient lift used on the hero's floating product mockup — it reads as the product UI hovering over the dark page. Some shadows also carry a `rgba(255,255,255,0.06) inset` top highlight to fake a 1px lit edge on dark chrome.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small inline chrome, tight controls |
| `{rounded.sm}` | 5px | The most frequent measured radius (73×) — pills, small buttons, table cells inside product fragments |
| `{rounded.md}` | 8px | Standard buttons, status badges |
| `{rounded.lg}` | 10px | Nested panels, inner cards (57×) |
| `{rounded.xl}` | 12px | Content cards, product-mockup containers |
| `{rounded.xxl}` | 16px | Larger card containers |
| `{rounded.xxxl}` | 24px | The largest measured radius — big rounded container shells |

The radius distribution is dense and small-clustered (5px / 9px / 10px dominate), consistent with a product-UI-heavy surface. There is no measured pill/full radius (9999px) — rounded elements top out around 24px.

### Photography / Mockup Geometry
There is no marketing photography. The visual content is product UI mockups composited onto the canvas, each carrying its own internal chrome radii (5–12px). Partner logos in the logo cloud are flat monochrome marks in `{colors.muted}`.

## Components

### Announcement & Navigation

**`announcement-bar`** — Full-width top banner on `{colors.canvas}` carrying a funding/news line ("Default raised $20M in total funding to build go-to-market agents · Read more") in `{colors.ink}` with a dismiss × at the right edge. Type in `{typography.body}`.

**`top-nav`** — Transparent-over-canvas nav bar. Wordmark + logo mark ("Default") at left, center menu (Platform ▾, Agent, Resources), right cluster with `{component.login-link}` and `{component.button-primary}` ("Request a Demo"). Menu items use `{typography.button}` in `{colors.ink}`.

**`nav-link`** / **`login-link`** — Inline text links, transparent background, `{colors.ink}` text, `{typography.button}`. Used for top-nav menu items and the "Login" affordance.

### Buttons

**`button-primary`** — The single white CTA pill ("Request a Demo"). Fill `{colors.ink}` (#ffffff), text `{colors.near-black}` (#0a0a0a), `{typography.button}`, rounded `{rounded.md}`. The brightest object on every page — color contrast against the dark canvas is the entire emphasis mechanism. (Padding/radius documented from screenshot ground-truth — see Known Gaps.)

### Hero & Sections

**`hero-band`** — Two-column hero on `{colors.canvas}`. Left: h1 in `{typography.display-xl}` (white, 64px / 400). Right: sub-headline in `{component.hero-subhead}` + `{component.button-primary}`.

**`hero-subhead`** — Supporting line in `{colors.muted}`, `{typography.body}` ("Build, deploy, and improve your existing agents for every go-to-market function.").

**`logo-cloud`** — Single horizontal row of partner marks (cortex, DUST, Decagon, Owner, Airbyte, tailscale, Listen) rendered as flat monochrome logos in `{colors.muted}`, edge-faded on a `{colors.canvas}` band.

**`section-eyebrow`** — Small category label above section heads ("Introducing Default", "Capabilities", "Security") and the inline tags (Data / Tools / Agent / Governance) in `{colors.muted}`, `{typography.body}`.

**`testimonial-band`** — Centered pull-quote band on `{colors.canvas}`. The quote ("It's the control layer we're using to run GTM from the same brain.") renders large in `{typography.display-md}`, attributed below to name + role (Matt McGonegle, Director of GTM Operations, Cortex) in `{colors.muted}`.

### Cards & Product Fragments

**`product-mockup-card`** — The signature component. A `{colors.surface}` (#0e0f11) card holding real product UI fragments — the workflow canvas with trigger/condition nodes, the CRM data table, the chat panel, the version-history governance panel. Rounded `{rounded.xl}`, padding `{spacing.md}`. These cards display the actual product chrome rather than decorating around it; accent colors live exclusively inside them.

**`feature-card`** — A `{colors.surface}` content card pairing a category label with copy and a "Learn More" link. Rounded `{rounded.xl}`, padding `{spacing.lg}`, text `{colors.ink}` over `{typography.body}`.

**`data-table-surface`** — The CRM-style opportunity table inside product mockups (Work Email / Company / Amount rows). Background `{colors.surface-raised}`, rounded `{rounded.lg}`, dense row padding `{spacing.sm}`. Rows carry small company-logo glyphs and link-blue email text.

### Inputs

**`ask-anything-input`** — The "Ask Anything" prompt field shown in product mockups. Background `{colors.surface}`, placeholder text `{colors.muted}`, `{typography.body}`, rounded `{rounded.xl}`, padding `{spacing.sm}` `{spacing.md}`. Carries inline + / send controls.

### Badges / Status

**`badge-success`** — A small status pill ("booked", "Live"). Background `{colors.surface-strong}`, text `{colors.accent-green}`, rounded `{rounded.md}`, padding 4px × 8px.

**`badge-error`** — Negative status pill ("not booked"). Same geometry as `badge-success`, text `{colors.accent-red}`.

### Footer

**`footer`** — Deepest-floor footer on `{colors.near-black}` (#0a0a0a) closing the page below the capability grid (Native access / Integrations / Unified data / Audit logs / Enterprise-ready · "SOC 2 Type II, SSO/SAML, role-based permissions, and dedicated support."). Body text in `{colors.muted}`, `{typography.body}`.

## Do's and Don'ts

### Do
- Keep the marketing layer monochrome — white type and a single white CTA pill on near-black. Let `{colors.ink}` against `{colors.canvas}` carry emphasis.
- Reserve saturated accents (`{colors.accent-blue}`, `{colors.accent-green}`, `{colors.accent-red}`, `{colors.accent-violet}`) for *inside* product fragments — status pills, node icons, selection highlights.
- Set display headlines in Inter at weight 400 with negative letter-spacing. The thin-weight-at-large-size treatment is the brand voice.
- Use `{component.product-mockup-card}` to show real product chrome composited on the canvas — don't draw abstract illustrations of the product.
- Build elevation from value steps between dark surfaces (`{colors.canvas}` → `{colors.surface}` → `{colors.surface-raised}` → `{colors.surface-strong}`) as much as from shadow.
- Use `{colors.muted}` as the single secondary text tone — sub-heads, eyebrows, captions, footer, logo-cloud labels all share it.

### Don't
- Don't bold display headlines to 600/700. Hierarchy comes from size and tracking, not weight.
- Don't put saturated accent colors on the primary CTA — the action layer is monochrome white.
- Don't introduce a light-mode surface; the system is dark end-to-end.
- Don't exceed `{rounded.xxxl}` (24px) on containers — there is no full-pill radius in the measured system.
- Don't add a second typeface — Inter does every role.
- Don't document hover states; only default and active/pressed are in scope.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Nav collapses to hamburger; hero two-column stacks to single column (h1 → sub-head → CTA); product-mockup cards stack vertically; logo cloud wraps or scrolls |
| Tablet | 768–1024px | Hero tightens; feature bands keep left-rail + right-mockup but compress; capability grid stays 2-up |
| Desktop | 1024–1440px | Full two-column hero; left-rail category labels beside large product-mockup cards |
| Wide | > 1440px | Same as desktop with more outer breathing room around the centered content |

### Touch Targets
- `{component.button-primary}` is the primary tap target; padding (~12px × 20px) keeps it comfortably tappable.
- `{component.ask-anything-input}` and nav links sit at standard 16px type with adequate padding.
- Exact touch-target dimensions were not measured (see Known Gaps).

### Collapsing Strategy
- The hero's two-column split collapses to single column on mobile.
- Product-mockup cards stack and scale proportionally — the embedded UI chrome (tables, canvas nodes) stays at native scale within scrollable cards.
- The logo cloud reduces to fewer visible marks with edge-fade.

### Image Behavior
- There is no marketing photography. Product mockups retain native aspect ratios and resize proportionally within their cards.
- Partner logos render as flat monochrome marks that scale uniformly.

## Iteration Guide

1. Focus on ONE component at a time, referencing its YAML key directly (`{component.product-mockup-card}`, `{component.button-primary}`).
2. Variants (`-active`, `-disabled`, `-focused`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex into a component.
4. Never document hover. Default and active/pressed only.
5. Keep the monochrome discipline: white CTA, muted secondary text, accents only inside product fragments.
6. Hierarchy is size + letter-spacing, not weight — display stays at Inter 400.
7. When emphasizing on the dark canvas: brighter surface step before bolder type.

## Known Gaps

- The `button-primary` was measured with `radius: 0px` and `padding: 0px` — almost certainly a capture artifact (the CTA renders as a styled link/element the selector didn't fully read). Its radius and padding are documented from screenshot ground-truth; treat them as derived approximations pending confirmation.
- The `card` component was measured with `radius: 0px` and `shadow: none`, but screenshots clearly show rounded, softly-shadowed cards. Card radius is documented as `{rounded.xl}` derived from the screenshots and the measured radius distribution; the measured 0px is treated as a capture artifact.
- Section-level vertical rhythm (the large gaps between marketing bands) was not reliably captured — the spacing scale measured only the dense 4–20px range from internal padding/gaps. Larger section spacing tokens are a gap.
- Body weight measured at 420 (an Inter variable-font intermediate); implementations using a static Inter cut should fall back to weight 400.
- Nav bar height, exact CTA dimensions, and touch-target sizes were not measured.
- Accent color *usage rules inside product fragments* (which accent maps to which node type) are inferred from screenshots, not from a measured component spec.
- Animation, transition timings, and interaction states of the live product (workflow canvas, chat) are out of scope — these are product, not marketing, surfaces.
- The "Login" / secondary text-link treatment beyond color + typography (e.g., underline, hover) was not extracted, per the no-hover policy and absence of measured state data.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/default/design-md -->
