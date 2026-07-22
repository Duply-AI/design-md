---
version: alpha
name: Slite-design-analysis
description: A warm, editorial knowledge-base SaaS interface built on a near-white canvas (#fdfdfd) with cream content surfaces (#fdf9f4), an oversized Garnett display headline, and a single warm-orange CTA (#f67748). The system reads as calm and document-first — large pill buttons, deeply rounded cream cards (32px), real product UI fragments embedded inside cards, and hand-drawn doodle accents that soften an otherwise clean grid. Brand voltage comes from the big Garnett wordmark-scale headline and the warm orange action color against the cream paper.

colors:
  primary: "#f67748"
  primary-soft: "#ffbda6"
  primary-tint: "#f9efe4"
  ink: "#2d2f34"
  ink-strong: "#1d1e20"
  body: "#3f434a"
  muted: "#5e646e"
  muted-alt: "#6a707c"
  faint: "#9da3af"
  faint-alt: "#98999a"
  dark: "#2f2f30"
  black: "#000000"
  canvas: "#fdfdfd"
  surface: "#fdf9f4"
  white: "#ffffff"
  on-primary: "#ffffff"
  accent-purple: "#a478c4"
  accent-blue: "#176ae5"
  accent-blue-deep: "#0f57db"
  accent-blue-deeper: "#0a4ecd"
  accent-blue-soft: "#a2c3f5"

typography:
  display:
    fontFamily: "Garnett, Inter, sans-serif"
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: normal
  title-lg:
    fontFamily: "Universal Sans, Inter, sans-serif"
    fontSize: 21.75px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: normal
  title-md:
    fontFamily: "Universal Sans, Inter, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: normal
  body:
    fontFamily: "Universal Sans, Inter, sans-serif"
    fontSize: 19.2px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: normal
  button:
    fontFamily: "Universal Sans, Inter, sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: normal

rounded:
  none: 0px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 18px
  xl: 32px
  xxl: 40px
  pill: 999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 40px
  xxxl: 48px
  huge: 60px
  section: 72px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.button}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 0px 12px
  button-dark:
    backgroundColor: "{colors.ink-strong}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 0px 12px
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 0px 12px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
  feature-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  product-ui-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
  badge-pill:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 0px 12px
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
---

## Overview

Slite's marketing surface is a calm, document-first knowledge-base interface built on a warm near-white canvas (`{colors.canvas}` — #fdfdfd) with cream content surfaces (`{colors.surface}` — #fdf9f4). The voice is editorial and paper-like rather than glossy SaaS: an oversized **Garnett** display headline anchors the hero, and a single warm-orange action color (`{colors.primary}` — #f67748) carries every primary CTA against the cream paper.

Type splits into two roles: **Garnett** (a high-personality display face used at the hero scale of 64px / weight 500) and **Universal Sans** (the workhorse for headings, body, buttons, and UI labels). The display headline runs at a near-wordmark scale and sits beside hand-drawn doodle circles and underlines that soften the grid — the brand's signature visual flourish.

Component voltage comes from **real product UI fragments embedded directly inside cards** — the Slite editor sidebar, channel trees, "Verified / Self-maintained" badges, and maintenance-routine panels appear as actual product chrome at small scale rather than as marketing illustration. The cream `{component.card}` (deeply rounded at `{rounded.xl}` — 32px) is the system's primary container; product fragments often render on a brighter white surface (`{colors.white}`) nested inside.

Buttons are fully pill-shaped (`{rounded.pill}` — 999px). The dominant CTA is orange; a near-black `{component.button-dark}` ("Start for free") and an outlined `{component.button-outline}` ("Book demo") complete the action set in the top nav.

**Key Characteristics:**
- Warm paper palette: near-white canvas (`{colors.canvas}` — #fdfdfd) over cream card surfaces (`{colors.surface}` — #fdf9f4). No stark pure-white background page.
- Single warm-orange CTA (`{colors.primary}` — #f67748) for the primary action; everything else stays neutral.
- Oversized Garnett display headline (64px / weight 500) — high-personality, near-wordmark scale.
- Pill-shaped buttons (`{rounded.pill}` — 999px) across primary, dark, and outline variants.
- Deeply rounded cream cards (`{rounded.xl}` — 32px) holding embedded product UI fragments.
- Hand-drawn doodle accents (circles, underlines, scribbles) layered behind headlines and around hero artifacts.
- Soft, layered drop shadows on product cards; cream cards themselves run flat (shadow none).
- A secondary chromatic accent set — purple (`{colors.accent-purple}`) and a blue family (`{colors.accent-blue}` → `{colors.accent-blue-deeper}`) — surfaces only inside product UI fragments and integration glyphs, never on CTAs.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #f67748): The warm-orange action color. All primary CTAs ("Keep your docs up to date"), plus the single orange focus-glow shadow observed on one interactive element. The defining brand voltage.
- **Primary Soft** (`{colors.primary-soft}` — #ffbda6): A lighter orange used for tints, doodle accents, and soft highlights.
- **Primary Tint** (`{colors.primary-tint}` — #f9efe4): A pale cream-orange wash used for badge pills and gentle highlight zones.
- **Accent Purple** (`{colors.accent-purple}` — #a478c4): Appears inside product UI fragments (icon accents, status dots). Not used on marketing CTAs.
- **Accent Blue family** (`{colors.accent-blue}` — #176ae5, `{colors.accent-blue-deep}` — #0f57db, `{colors.accent-blue-deeper}` — #0a4ecd, `{colors.accent-blue-soft}` — #a2c3f5): A blue ramp surfacing in product chrome, links, and integration glyphs. Slite keeps blue out of the hero action layer.

### Surface
- **Canvas** (`{colors.canvas}` — #fdfdfd): The default warm near-white page floor.
- **Surface** (`{colors.surface}` — #fdf9f4): Cream card background — feature cards, content cards, section panels.
- **White** (`{colors.white}` — #ffffff): A brighter pure white used for nested product UI fragments inside cream cards, and for input fills.

### Text
- **Ink** (`{colors.ink}` — #2d2f34): Headlines and max-contrast text (h3 measured ground-truth).
- **Ink Strong** (`{colors.ink-strong}` — #1d1e20): Near-black used for the dark button surface and the wordmark.
- **Body** (`{colors.body}` — #3f434a): Default running-text color (the most frequent measured text tone).
- **Muted** (`{colors.muted}` — #5e646e) / **Muted Alt** (`{colors.muted-alt}` — #6a707c): Secondary text, sub-labels, nav.
- **Faint** (`{colors.faint}` — #9da3af) / **Faint Alt** (`{colors.faint-alt}` — #98999a): Tertiary text, placeholders, fine-print.
- **Dark** (`{colors.dark}` — #2f2f30) / **Black** (`{colors.black}` — #000000): Deep neutral tones used in dark glyphs and compliance marks.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on the orange and dark buttons.

## Typography

### Font Family
The system runs two custom faces: **Garnett** for the hero display headline and **Universal Sans** for everything else (headings below h1, body, buttons, nav, UI labels). Both are commercial/custom typefaces — neither was flagged in `fonts_licensed`, but both are licensed faces that should not be assumed shippable. See the substitute note below.

The split is functional:
- Garnett (display, weight 500) — the hero h1 only, at near-wordmark scale
- Universal Sans (weights 400–700) — section headings, body copy, buttons, navigation

### Hierarchy

| Token | Family | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `{typography.display}` | Garnett | 64px | 500 | 1.2 | normal | Hero h1 ("Verified knowledge, kept in sync with reality") |
| `{typography.title-lg}` | Universal Sans | 21.75px | 700 | 1.3 | normal | Section headings (h2) |
| `{typography.title-md}` | Universal Sans | 20px | 700 | 1.25 | normal | Card titles, sub-section heads (h3) |
| `{typography.body}` | Universal Sans | 19.2px | 400 | 1.4 | normal | Default running-text, descriptions |
| `{typography.button}` | Universal Sans | 15px | 600 | 1.0 | normal | Button labels, nav links, badge pills |

### Principles
Garnett is reserved for the single biggest moment on the page — the hero headline. Everything else is Universal Sans. Section headings use weight 700 at a relatively modest 20–22px, which keeps hierarchy reading as document-like rather than billboard-like. Body copy runs large (≈19px) for comfortable reading, in keeping with the knowledge-base subject matter.

### Note on Font Substitutes
**Garnett** and **Universal Sans** are commercial typefaces and should not be self-hosted without a license. For Garnett (a high-contrast geometric display face), **Fraunces** at a lower optical weight or **Inter** at weight 500 with slightly tightened tracking are usable substitutes — the substitution preserves the calm, mid-weight display feel but loses Garnett's character. For Universal Sans (a neutral grotesque), **Inter** is a close open-source substitute across all weights. The fallback stacks declared above walk `Inter, sans-serif`.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 40px · `{spacing.xxxl}` 48px · `{spacing.huge}` 60px · `{spacing.section}` 72px.
- **Dominant rhythm:** `{spacing.xs}` (8px) is by far the most frequent measured gap (158 occurrences), with `{spacing.sm}` (12px) next — the system packs UI fragments tightly inside cards.
- **Card / band spacing:** `{spacing.xl}` (32px) and `{spacing.xxl}` (40px) carry card internal padding and inter-card gaps; `{spacing.huge}` (60px) and `{spacing.section}` (72px) handle larger band separations.

### Grid & Container
- **Editorial body:** Centered single-column hero with the headline + sub-head + CTA stacked, followed by a large product-mockup card.
- **Feature grids:** 3-up feature cards ("Single source of truth" / "Knowledge bases go stale" / "Slite Agent finds answers"), reducing on smaller widths.
- **Sub-feature row:** 4-up label rows (Engineering / Product / Support / Sales) under the agent band.
- **Two-up content cards:** Larger maintenance cards pair 2-up below the feature grid.

### Whitespace Philosophy
Slite uses generous vertical breathing room between bands while keeping UI fragments inside cards tightly packed (8–12px gaps). The contrast — airy bands, dense product chrome — reinforces the "real product shown at small scale" reading.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Cream `{component.card}` surfaces, top nav, body bands |
| Soft layered | `rgba(0,0,0,0.1) 0 1px 3px`, `rgba(0,0,0,0.05) 0 2px 6px`, `rgba(0,0,0,0.01) 0 4px 12px` | Product UI cards / embedded fragments (most common elevated shadow, 17 occurrences) |
| Deeper layered | `rgba(0,0,0,0.01) 0 4px 16px`, `rgba(0,0,0,0.04) 0 4px 16px`, `rgba(0,0,0,0.06) 0 2px 12px`, `rgba(0,0,0,0.08) 0 1px 4px` | Larger floating product panels |
| Strong drop | `rgba(0,0,0,0.2) 0 2px 6px` | Small high-contrast popovers / chips |
| Orange focus glow | `rgb(246,119,72) 0 0 8px 1px` | A single focused/active interactive element — the orange focus ring |

The elevation philosophy is **soft and layered** — multiple low-alpha shadow stacks create gentle depth around product fragments. Cream content cards stay deliberately flat; depth is reserved for the embedded product chrome to make it feel "lifted off the page."

### Decorative Depth
- Hand-drawn doodle accents (circles around the headline, scribbled underlines, marginalia strokes) sit behind and beside content as a signature flourish — they read as ink-on-paper, reinforcing the cream-canvas voice.
- Embedded product UI fragments carry their own internal chrome shadows; these are product content, not system tokens.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Text inputs (measured square corners) |
| `{rounded.xs}` | 8px | Small chips, inner UI elements (most common small radius) |
| `{rounded.sm}` | 12px | Small cards, badges within product fragments |
| `{rounded.md}` | 16px | Medium cards, nested panels |
| `{rounded.lg}` | 18px | Product-UI cards and panels (frequent measured radius) |
| `{rounded.xl}` | 32px | Primary cream content cards — the signature deep round |
| `{rounded.xxl}` | 40px | Largest container rounding |
| `{rounded.pill}` | 999px | Buttons, badge pills |
| `{rounded.full}` | 9999px | Avatars, circular icon buttons (most frequent radius overall) |

### Photography & Glyph Geometry
Avatars and circular icon tiles use `{rounded.full}`. Integration glyphs and small status dots inside product fragments use the smaller radii (8–18px). The cream cards' 32px corners are the visual signature — soft, generous, paper-like.

## Components

### Top Navigation

**`top-nav`** — Warm near-white nav bar (`{colors.canvas}`). Carries the "slite" wordmark at left, a horizontal menu (Product, Solutions, Resources, Pricing) using `{component.nav-link}`, and a right cluster: "Sign in" text link, `{component.button-outline}` ("Book demo"), and `{component.button-dark}` ("Start for free"). Nav labels in `{typography.button}` (Universal Sans 15px / 600), text color `{colors.body}`.

**`nav-link`** — Inline menu item. Transparent background, `{colors.body}` text, `{typography.button}`.

### Buttons

**`button-primary`** — The signature warm-orange CTA. Background `{colors.primary}` (#f67748), text `{colors.on-primary}`, type `{typography.button}`, fully pill-shaped `{rounded.pill}` (999px), measured padding 0px 12px (the rendered button is much taller than the inline padding suggests — see Known Gaps). Used for "Keep your docs up to date" and inline section CTAs.

**`button-dark`** — Near-black secondary CTA. Background `{colors.ink-strong}` (#1d1e20), text `{colors.on-primary}`, `{rounded.pill}`. Used for "Start for free" in the top nav.

**`button-outline`** — Outlined tertiary button. Transparent background, `{colors.ink}` text, 1px outline, `{rounded.pill}`. Used for "Book demo."

### Cards & Containers

**`card`** — The primary cream content container. Background `{colors.surface}` (#fdf9f4), rounded `{rounded.xl}` (32px), no shadow (flat). Holds headings, body copy, and embedded product fragments.

**`feature-card`** — Used in the 3-up feature grid. Background `{colors.surface}`, rounded `{rounded.xl}`, internal padding `{spacing.xl}` (32px). Carries a small kicker label, a `{typography.title-md}` headline, and an inline CTA button; often embeds a product UI fragment (channel tree, approval row) below.

**`product-ui-card`** — A brighter white surface (`{colors.white}`) holding real Slite product chrome — editor sidebar, "Verified / Self-maintained" badges, maintenance-routine panels. Rounded `{rounded.lg}` (18px), carries the soft layered drop shadow to lift it off the cream card behind it.

### Tags / Badges

**`badge-pill`** — Small pill label ("Self-maintaining doc", "Knowledge base audit", "Agent-triggered review"). Background `{colors.primary-tint}` (#f9efe4), text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.pill}`, padding 0px 12px.

### Inputs & Forms

**`input`** — Text input with measured square corners. Background `{colors.white}`, text `{colors.body}`, type `{typography.body}`, rounded `{rounded.none}` (0px). The square-cornered input is an unusual contrast against the otherwise heavily-rounded system — confirm before extending.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#f67748) for the single primary action. Slite's brand voltage is one warm orange against cream paper.
- Use `{colors.surface}` (#fdf9f4) cream cards as the default container, with `{colors.canvas}` as the page floor — avoid stark pure white at the page level.
- Keep Garnett for the hero headline only; everything else is Universal Sans.
- Embed real product UI fragments inside cards — show the actual Slite editor, channel tree, and verification badges rather than illustrating them.
- Pill-shape all buttons (`{rounded.pill}`) and deeply round content cards (`{rounded.xl}` — 32px).
- Let the doodle accents (circles, underlines) carry personality near the headline — they are signature, not noise.
- Reserve drop shadows for lifted product fragments; keep cream content cards flat.

### Don't
- Don't put the blue or purple accents on CTAs — those tones live inside product chrome and integration glyphs only.
- Don't bolden the Garnett display past weight 500; the mid-weight is part of the calm voice.
- Don't add heavy single-layer shadows; depth here is built from soft layered stacks at low alpha.
- Don't mix square corners outside inputs — the system is otherwise consistently rounded.
- Don't introduce a second action color; the orange CTA must stay singular.
- Don't add hover-state styling beyond default and pressed.

## Responsive Behavior

The reference captures were taken at desktop widths; the following describes observed structure and standard collapsing behavior. Exact breakpoint pixel values were not measured (see Known Gaps).

### Layout Adaptation
- The top nav's full horizontal menu collapses toward a condensed/hamburger arrangement at narrow widths; the dark "Start for free" CTA stays visible.
- The hero stays single-column (headline + sub-head + CTA, then the product-mockup card below) at all widths — it scales rather than re-flows.
- 3-up feature grids reduce to 2-up then 1-up; 4-up label rows reduce similarly.
- 2-up maintenance cards stack to single-column on narrow screens.
- Embedded product UI fragments scale proportionally; the cream cards resize around them.

### Touch Targets
- Pill buttons are tall enough to meet comfortable tap targets despite the small measured inline padding; verify final rendered height meets 44px.
- Nav links and badge pills should be padded to ≥44px effective tap area on touch.

## Iteration Guide

1. Focus on ONE component at a time and reference its YAML key directly (`{component.feature-card}`, `{component.product-ui-card}`).
2. Variants (`button-dark`, `button-outline`) are separate entries in `components:` — keep adding variants as discrete entries rather than props.
3. Use `{token.refs}` everywhere — never inline a hex.
4. Document default and active/pressed states only; never hover.
5. The hero is the only place Garnett appears. Body and headings stay Universal Sans.
6. The orange CTA is singular — when in doubt, scale Garnett up before adding a second accent color.
7. Cream cards stay flat; reserve the layered shadow stack for lifted product fragments.

## Known Gaps

- The measured `button-primary` reported text color `#3f434a` and padding `0px 12px` — the orange background and the rendered (much taller) button height were not directly captured by the component selector. Button background (`{colors.primary}`), dark variant, and outline variant are documented from screenshot ground-truth combined with the measured pill radius.
- **Garnett** and **Universal Sans** are commercial/custom typefaces though not flagged in `fonts_licensed`; open-source substitutes are documented in the Typography section and should be used unless a license is held.
- Button height, nav height, and exact card padding values were not all individually measured; padding figures are derived from the dominant spacing tokens where noted.
- Active/pressed and focus states are undocumented beyond the single observed orange focus-glow shadow (`rgb(246,119,72) 0 0 8px 1px`).
- Responsive breakpoint pixel values were not measured; collapsing behavior is inferred from desktop captures and standard SaaS patterns.
- The square-cornered `{component.input}` (radius 0px) is from a single measured input; form field fill, border color, and focus treatment were not captured.
- Animation and transition timings (doodle reveals, card hover lift, agent panels) are out of scope.
- The blue/purple accent ramp is observed inside product UI fragments; precise semantic roles (link vs. icon vs. status) were not individually resolved.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/slite/design-md -->
