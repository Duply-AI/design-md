---
version: alpha
name: Webflow-design-analysis
description: "A high-contrast, modern-SaaS marketing surface anchored on pure white canvas with near-black display type and an electric Webflow blue (#146ef5) carrying announcement bars, CTAs, and color-block cards. The system reads as confident and engineered — oversized WF Visual Sans display headlines, low-radius geometric cards, soft light-gray feature panels, and a near-black product showcase band. Brand voltage comes from the saturated blue blocks set against a quiet monochrome canvas and from product UI shown directly inside cards."
colors:
  ink: "#080808"
  ink-strong: "#171717"
  ink-soft: "#222222"
  ink-near: "#292929"
  neutral-700: "#333333"
  neutral-600: "#464646"
  body: "#5a5a5a"
  neutral-500: "#757575"
  muted: "#898989"
  black: "#000000"
  border-mid: "#cccccc"
  border-soft: "#dddddd"
  hairline: "#d8d8d8"
  hairline-soft: "#f0f0f0"
  surface-soft: "#fafafa"
  canvas: "#ffffff"
  blue: "#146ef5"
  accent-blue-soft: "#6ca7ff"
  accent-orange: "#ffa666"
  accent-green: "#60ed76"
  on-accent: "#ffffff"
  on-ink: "#ffffff"
typography:
  display-xl:
    fontFamily: "WF Visual Sans Variable, Inter, sans-serif"
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.8px
  display-lg:
    fontFamily: "WF Visual Sans Variable, Inter, sans-serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: normal
  title:
    fontFamily: "WF Visual Sans Variable, Inter, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: normal
  body:
    fontFamily: "WF Visual Sans Variable, Inter, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
  button:
    fontFamily: "WF Visual Sans Variable, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: -0.16px
rounded:
  xs: 2px
  sm: 4px
  md: 8px
  full: 1440px
spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  md: 12px
  base: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
components:
  announcement-bar:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    padding: 16px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    padding: 16px 24px
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.button}"
    rounded: "0px"
    padding: 20px 24px
  button-accent:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  card-accent:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.sm}"
  feature-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: 24px
  product-showcase-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: 16px
  testimonial-card:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  showcase-band-dark:
    backgroundColor: "{colors.black}"
    textColor: "{colors.on-ink}"
    typography: "{typography.display-lg}"
    padding: 48px
---

## Overview

Webflow's marketing surface is a high-contrast modern-SaaS interface — pure white canvas (`{colors.canvas}` — #ffffff) with near-black display type (`{colors.ink}` — #080808) and an electric **Webflow blue** (`{colors.blue}` — #146ef5) carrying the announcement bar, the accent CTA, and saturated color-block cards. The system reads as confident and engineered: oversized headlines, quiet body text, and bold blocks of blue against a mostly monochrome floor.

Type runs entirely on **WF Visual Sans Variable** — Webflow's custom variable display/UI family — across every role from the 80px hero h1 down to the 16px button label. The hierarchy is driven by size and weight rather than family contrast: weight 600 for headlines, 400 for body, 500 for buttons. The h1 carries a slight negative tracking (-0.8px); everything below sits at normal tracking.

Component voltage comes from two sources: **saturated blue color-blocks** (`{component.card-accent}`, `{component.announcement-bar}`, `{component.button-accent}`) and **real product UI shown inside cards** — the feature cards on the landing page each frame a fragment of the Webflow designer, an editorial photo, or an analytics dashboard. Webflow shows its product as content rather than illustrating around it.

Surfaces alternate between white canvas, barely-tinted light-gray feature panels (`{colors.surface-soft}` — #fafafa), and a near-black product showcase band that gives the long-scroll page its punctuation. Radius is intentionally low — 2/4/8px — keeping cards geometric and sharp rather than soft and friendly.

**Key Characteristics:**
- Pure white canvas with near-black ink (`{colors.ink}` — #080808) for all display headlines and high-contrast text.
- Custom **WF Visual Sans Variable** typeface used for the entire system — display, body, and UI (substituted with Inter here, see Typography).
- Electric **Webflow blue** (`{colors.blue}` — #146ef5) as the singular brand accent — announcement bar, accent button, and color-block cards.
- Low, geometric border radius: `{rounded.xs}` (2px), `{rounded.sm}` (4px), `{rounded.md}` (8px). No pill shapes except an outlier full-round container (`{rounded.full}` — 1440px).
- Light-gray feature panels (`{colors.surface-soft}` — #fafafa) holding product UI fragments at small scale.
- A black product-showcase band (`{colors.black}` — #000000) and dark testimonial cards (`{colors.ink}`) punctuate the otherwise white page.
- Deep, multi-layer soft drop shadows on floating product cards — up to five stacked shadow layers for a realistic lift.
- Two flat accent buttons coexist: the black `{component.button-primary}` (zero radius, full-bleed) and the blue `{component.button-accent}` (rounded `{rounded.md}`).

## Colors

### Brand & Accent
- **Blue** (`{colors.blue}` — #146ef5): The singular brand accent. Carries the top announcement bar, the "Start for free" accent CTA, and saturated color-block cards. The system's only saturated color used at block scale.
- **Accent Blue Soft** (`{colors.accent-blue-soft}` — #6ca7ff): A lighter blue used in product UI fragments and small accent moments inside cards.
- **Accent Orange** (`{colors.accent-orange}` — #ffa666): A warm accent appearing in product UI artifacts (charts, design canvas elements).
- **Accent Green** (`{colors.accent-green}` — #60ed76): A bright green used sparingly in product UI fragments (status, charts).

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor and the surface of floating product cards.
- **Surface Soft** (`{colors.surface-soft}` — #fafafa): The barely-tinted gray of the landing feature panels.
- **Hairline Soft** (`{colors.hairline-soft}` — #f0f0f0): A near-invisible divider tone between white sections.
- **Hairline** (`{colors.hairline}` — #d8d8d8): The 1px border tone on light surfaces.
- **Border Soft / Border Mid** (`{colors.border-soft}` — #dddddd, `{colors.border-mid}` — #cccccc): Secondary border tones for inputs and dividers.

### Text
- **Ink** (`{colors.ink}` — #080808): All display headlines and primary high-contrast text. Also used as the dark testimonial-card background.
- **Ink Strong / Soft / Near** (`{colors.ink-strong}` — #171717, `{colors.ink-soft}` — #222222, `{colors.ink-near}` — #292929): Dark surfaces and very-dark text shades.
- **Neutral 700 / 600** (`{colors.neutral-700}` — #333333, `{colors.neutral-600}` — #464646): Strong secondary text.
- **Body** (`{colors.body}` — #5a5a5a): The default running-text and sub-headline color.
- **Neutral 500** (`{colors.neutral-500}` — #757575): Tertiary text.
- **Muted** (`{colors.muted}` — #898989): Fine-print and caption text.
- **Black** (`{colors.black}` — #000000): The product-showcase band background — the deepest surface in the system.
- **On Accent / On Ink** (`{colors.on-accent}` / `{colors.on-ink}` — #ffffff): Text on blue blocks and dark surfaces.

## Typography

### Font Family
The system runs entirely on **WF Visual Sans Variable** — Webflow's custom variable sans-serif used for every role from the 80px hero down to the 16px button. There is no secondary family; hierarchy is carried by size and weight (600 display / 400 body / 500 button) rather than by family contrast. The fallback stack walks `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 80px | 600 | 1.04 | -0.8px | Homepage h1 ("Make your website a growth engine") |
| `{typography.display-lg}` | 56px | 600 | 1.04 | normal | Section heads ("Webflow is the agentic web marketing platform…") |
| `{typography.title}` | 20px | 600 | 1.4 | normal | Card titles, feature labels |
| `{typography.body}` | 20px | 400 | 1.5 | normal | Sub-headlines, running body copy |
| `{typography.button}` | 16px | 500 | 1.6 | -0.16px | Button labels, nav items (size and tracking derived — measured 15.98px / -0.1598px, rounded) |

### Principles
The system leans on dramatic size jumps (80 → 56 → 20px) to build hierarchy within a single family. Display weight stays at 600 — never heavier. Body copy uses the same 20px size as card titles but drops to weight 400, so the weight shift alone separates label from prose. Negative tracking is reserved for the largest display sizes and the button label; everything else sits at normal spacing.

### Note on Font Substitutes
**WF Visual Sans Variable** is Webflow's custom typeface and is not available as a public web font. **Inter** (variable, weights 400/500/600) is the recommended open-source substitute — it preserves the neutral geometric-humanist character and the weight steps. For a slightly more geometric feel closer to WF Visual Sans, **Hanken Grotesk** or **Geist** at matching weights are usable alternatives.

## Layout

### Spacing System
- **Base unit:** 4px (with frequent 6px and 8px steps).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 6px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px.
- **Dominant rhythm:** `{spacing.base}` (16px) is by far the most frequent value (130 occurrences) — the default gap and padding unit.
- **Card internal padding:** `{spacing.lg}` (24px) for feature and testimonial cards; `{spacing.base}` (16px) for tighter product-showcase cards.
- **Gutters:** `{spacing.base}` (16px) to `{spacing.lg}` (24px) between cards in multi-up grids.

### Grid & Container
- **Editorial body:** Centered max-width container with generous outer margins.
- **Hero:** Single centered column — h1, sub-headline, and a 3-up feature-card row below.
- **Feature grids:** 3-up at desktop, collapsing to fewer columns at smaller widths.
- **Testimonial row:** Horizontally scrolling card carousel ("300,000+ brands move the needle").

### Whitespace Philosophy
Webflow uses generous vertical whitespace around its oversized headlines — the 80px hero is given large breathing room top and bottom. Section rhythm relies on alternating surface modes (white → light-gray panels → black showcase band) more than on a single fixed section-gap token. Card grids stay tight (16px gaps) while the bands between them breathe.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, color-block cards |
| Color-block | `{colors.blue}` fill, no shadow | `{component.card-accent}`, `{component.announcement-bar}` |
| Soft panel | `{colors.surface-soft}` fill, no shadow | `{component.feature-card}` |
| Floating card | Multi-layer soft drop shadow | Product UI cards lifted off canvas |
| Deep float | Heaviest stacked shadow | Featured product showcase artifacts |

The system's signature elevation is a **deep multi-layer drop shadow** built from up to five stacked layers at increasing blur and decreasing opacity. Measured examples:
- Medium float: `0px 84px 24px rgba(0,0,0,0)`, `0px 54px 22px rgba(0,0,0,0.01)`, `0px 30px 18px rgba(0,0,0,0.04)`, `0px 13px 13px rgba(0,0,0,0.08)`, `0px 3px 7px rgba(0,0,0,0.09)`.
- Deep float: `0px 148px 42px rgba(0,0,0,0.01)`, `0px 95px 38px rgba(0,0,0,0.04)`, `0px 53px 32px rgba(0,0,0,0.15)`, `0px 24px 24px rgba(0,0,0,0.26)`, `0px 6px 13px rgba(0,0,0,0.29)`.

These shadows are reserved for product UI cards that visually float above the canvas — the realism of the layered shadow signals "real product chrome", not flat illustration.

### Decorative Depth
- Product UI fragments inside feature cards carry their own internal chrome and shadows from the product itself.
- The black showcase band uses color contrast (not shadow) for separation from the white sections above and below.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 2px | Smallest UI accents, tags |
| `{rounded.sm}` | 4px | Color-block cards (`{component.card-accent}`) |
| `{rounded.md}` | 8px | Feature cards, product cards, accent button — the dominant radius (94 occurrences) |
| `{rounded.full}` | 1440px | An outlier full-round container (measured once) — effectively a pill/circle on a single element |

The radius vocabulary is deliberately **low and geometric** — 8px is the workhorse, 4px for color-blocks, 2px for tiny accents. There is no general pill treatment; the 1440px value is a one-off full-round shape, not a system-wide pill token.

### Photography Geometry
Editorial photos inside feature cards retain rectangular crops with `{rounded.md}` (8px) corners. Product UI fragments keep their native chrome inside the cards.

## Components

### Navigation & Bars

**`announcement-bar`** — Full-width blue bar pinned above the nav ("New for Enterprise: Webflow AEO…"). Background `{colors.blue}`, text `{colors.on-accent}`, type `{typography.button}`, 16px vertical padding. Centered single-line promotional message.

**`top-nav`** — White nav bar below the announcement bar. Background `{colors.canvas}`, ink text, carries the Webflow wordmark + mark at left, the primary horizontal menu (Platform, Solutions, Resources, Enterprise, Pricing) center-left, and a right cluster with "Log in", "Contact Sales" text-links, and a `{component.button-accent}` "Start for free". Menu items in `{typography.button}` (WF Visual Sans 16px / 500).

### Buttons

**`button-primary`** — Black flat CTA. Background `{colors.ink}` (#080808), text `{colors.on-ink}`, type `{typography.button}`, **zero radius** (measured 0px), padding ~20px vertical (measured `20.775px 0px 19.177px` — often rendered full-bleed within its container). Used for primary editorial actions.

**`button-accent`** — The blue "Start for free" CTA. Background `{colors.blue}`, text `{colors.on-accent}`, type `{typography.button}`, rounded `{rounded.md}` (8px, derived from screenshot — radius not directly measured for this element). The most visible action in the top nav.

**`button-text-link`** — Inline text button, no background. Used for "Log in", "Contact Sales", and inline CTA links like "Get started →" in `{colors.ink}`.

### Cards & Containers

**`card-accent`** — A saturated blue color-block card. Background `{colors.blue}` (#146ef5), text `{colors.on-accent}`, rounded `{rounded.sm}` (4px), no shadow. The system's signature color-block component.

**`feature-card`** — The landing-page 3-up feature panels ("Enterprise", "Webflow AEO", "The Future of Search"). Background `{colors.surface-soft}` (#fafafa), rounded `{rounded.md}` (8px), padding `{spacing.lg}` (24px). Carries a `{typography.title}` heading, a short body description, and a framed product UI fragment or editorial photo at right.

**`product-showcase-card`** — A white card framing a fragment of the Webflow designer, an analytics dashboard, or editorial photography ("Build together", "Publish at scale", "Optimize for optimize"). Background `{colors.canvas}`, rounded `{rounded.md}`, padding `{spacing.base}` (16px). Lifted off the canvas with the system's multi-layer floating drop shadow.

**`testimonial-card`** — Dark customer-quote cards in the horizontal carousel ("300,000+ brands move the needle"). Background `{colors.ink}` (#080808), text `{colors.on-ink}`, rounded `{rounded.md}`, padding `{spacing.lg}` (24px). Carries an oversized stat ("32", "20%", "$6M"), a supporting line, the quote, and an attribution row.

**`showcase-band-dark`** — A full-bleed near-black band showing product UI in context ("Seamless solutions for compliance"). Background `{colors.black}` (#000000), text `{colors.on-ink}`, type `{typography.display-lg}`, generous vertical padding (`{spacing.xxl}` — 48px). The darkest surface in the system, used to punctuate the long-scroll page.

## Do's and Don'ts

### Do
- Reserve `{colors.blue}` (#146ef5) for the announcement bar, the accent CTA, and color-block cards. Blue is the only saturated color at block scale.
- Use WF Visual Sans Variable (substituted with Inter) for everything — display and body alike. Hierarchy comes from size and weight, not from mixing families.
- Keep display weight at 600. The system never goes heavier.
- Use `{component.feature-card}` (light gray) and `{component.product-showcase-card}` (white, floating) to show real product UI — Webflow shows its product as content.
- Apply the multi-layer floating drop shadow only to product cards that should appear lifted off the canvas.
- Keep radius low — `{rounded.md}` (8px) is the workhorse; `{rounded.sm}` (4px) for blue color-blocks.
- Punctuate long-scroll pages with the black `{component.showcase-band-dark}` between white sections.

### Don't
- Don't introduce accent colors beyond the measured set (blue, soft-blue, orange, green) — and keep orange/green inside product UI fragments, never on CTAs.
- Don't soften the geometry with large radii — nothing in the system rounds beyond 8px except the one-off full-round container.
- Don't bold display headlines past 600.
- Don't apply the heavy floating shadow to flat color-block cards — they sit flat by design.
- Don't repeat the same surface mode in consecutive bands; the system alternates white → light-gray panel → black showcase.
- Don't add hover-state styling beyond default and pressed.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 80→~40px (derived); feature cards stack 1-up; testimonial carousel becomes swipeable single-card |
| Tablet | 768–1024px | Top nav tightens; feature grids 2-up; showcase band stays full-bleed |
| Desktop | 1024–1440px | Full top-nav with all menu items; 3-up feature cards; full 80px hero |
| Wide | > 1440px | Same as desktop with larger outer margins; centered max-width container |

### Touch Targets
- `{component.button-accent}` and `{component.button-primary}` carry ~20px vertical padding (measured), comfortably exceeding 44px effective height.
- Nav text-links sit in `{typography.button}` with 16px surrounding padding.
- Exact mobile touch-target sizing was not measured — see Known Gaps.

### Collapsing Strategy
- Top nav collapses to a hamburger at small widths; the announcement bar shortens or wraps.
- The 3-up hero feature row collapses to a single column.
- The testimonial carousel ("300,000+ brands…") is a horizontal scroller at all widths and reduces to one visible card on mobile.
- The black showcase band stays full-bleed and scales its embedded product UI proportionally.

### Image Behavior
- Product UI fragments inside cards retain native aspect ratios; the cards resize around them.
- Editorial photos crop to rectangular 8px-radius frames.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.card-accent}`).
2. Variants of an existing component (`-active`, `-disabled`, `-focused`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay WF Visual Sans 600; body stays 400; buttons 500. Size carries the hierarchy.
6. Blue is the only block-scale accent — keep orange and green confined to product UI fragments.
7. When in doubt about emphasis: bigger display before heavier display.

## Known Gaps

- **WF Visual Sans Variable** is Webflow's custom typeface and is not publicly licensable; substitutes (Inter, Hanken Grotesk, Geist) are documented in the Typography section. `fonts_licensed` was empty in the analysis, so no font was machine-flagged — the substitution note is based on ground-truth knowledge that this is a proprietary face.
- The measured `button-primary` reports background `{colors.ink}` with 0px radius and odd asymmetric padding (`20.775px 0px 19.177px`), which reads as a full-bleed/black button — distinct from the visible blue "Start for free" CTA. The blue `{component.button-accent}` radius (8px) is derived from screenshots, not directly measured.
- Button typography (16px / -0.16px tracking) is rounded from measured values (15.9808px / -0.159808px) — marked derived.
- Card radius was measured at 4px for the blue color-block; feature and product card radii (8px) are inferred from the dominant measured 8px value.
- The `{rounded.full}` (1440px) value appeared only once and is an outlier — likely a single full-round container or avatar; its exact use was not isolated.
- No section-gap token was reliably measured (vertical band rhythm is driven by alternating surfaces); section padding values are approximate.
- Mobile-specific type scaling, touch-target sizing, and the hamburger menu sheet were not directly measured.
- Form/input components, animation and transition timings (carousel auto-scroll, card hover-lift), and the pricing-page-specific components were captured as pages but not extracted into discrete component tokens.
- Semantic states (success/warning/error) were not present in the measured palette.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/webflow/design-md -->
