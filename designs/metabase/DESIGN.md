---
version: alpha
name: Metabase-design-analysis
description: "A clean, open-source analytics interface built on a white canvas with a single confident brand blue (#509ee3) as its only loud color. The system reads as trustworthy developer-friendly SaaS — Lato typography throughout, soft pale-blue tinted hero bands, light bordered feature cards, and real product dashboard chrome shown directly inside the marketing flow. Brand voltage comes almost entirely from the blue accent and from embedded product UI (charts, dashboards, query results) rather than from decorative imagery."

colors:
  canvas: "#ffffff"
  accent: "#509ee3"
  accent-strong: "#1c6bb0"
  accent-deep: "#12436e"
  accent-button: "#28609f"
  accent-tint: "#c2daf0"
  accent-soft: "#e4ecfb"
  accent-softer: "#eef6fc"
  accent-pale: "#fafbfe"
  ink: "#22242b"
  ink-alt: "#212529"
  black: "#000000"
  body: "#5a6072"
  muted: "#8d93a5"
  muted-blue: "#73859f"
  hairline: "#f1f2f4"
  border: "#c6c9d2"
  violet: "#5d60a2"
  error: "#dc3545"
  success: "#198754"
  chart-lime: "#80b946"
  on-accent: "#ffffff"

typography:
  h1:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: normal
  h2:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.111
    letterSpacing: normal
  h3:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: normal
  h4:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.571
    letterSpacing: normal
  body:
    fontFamily: "Lato, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.857
    letterSpacing: normal

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  xxxl: 36px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  xsm: 10px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 28px
  xxxl: 32px

components:
  announcement-bar:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 12px 20px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.h4}"
    padding: 16px 20px
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.h4}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent}"
    typography: "{typography.h4}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.h4}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.accent}"
    typography: "{typography.body}"
  hero-band:
    backgroundColor: "{colors.accent-pale}"
    textColor: "{colors.ink}"
    typography: "{typography.h2}"
    padding: 32px 20px
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.h3}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-grid-band:
    backgroundColor: "{colors.accent-pale}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 32px 20px
  product-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 20px
  whats-new-card:
    backgroundColor: "{colors.accent-softer}"
    textColor: "{colors.ink}"
    typography: "{typography.h4}"
    rounded: "{rounded.lg}"
    padding: 20px
  testimonial-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 20px
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    padding: 24px 20px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 10px 12px
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    rounded: "{rounded.md}"
    padding: 20px
  cookie-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-accent}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 20px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    padding: 32px 20px
---

## Overview

Metabase's marketing surface is a clean, developer-friendly analytics interface — white canvas (`{colors.canvas}` — #ffffff) lifted by pale-blue tinted bands (`{colors.accent-pale}` — #fafbfe and `{colors.accent-soft}` — #e4ecfb), with a single confident brand blue (`{colors.accent}` — #509ee3) as the only loud color in the system. The page reads as trustworthy open-source SaaS: lots of whitespace, Lato type throughout, soft drop shadows, and real product dashboard chrome shown directly in the marketing flow.

Type voice is monolithic: **Lato** carries everything — headlines at weight 700, body at weight 400. There is no display/body split; hierarchy comes from size and weight alone. Notably, the measured `h2` (36px) is larger than `h1` (30px) — section heads outweigh the page title, which is faithful to how Metabase scales its editorial bands.

Brand voltage comes almost entirely from two sources: the **brand blue accent** (CTAs, links, logo, in-product highlights) and **embedded product UI fragments** — actual Metabase dashboards, query results, chart grids, and revenue tiles shown at scale inside the marketing page. Metabase doesn't illustrate the product; it shows the product.

**Key Characteristics:**
- White canvas with a single brand-blue CTA (`{colors.accent}` — #509ee3). Primary buttons are filled blue with white text; secondary buttons are white with a blue label and hairline border.
- One typeface — **Lato** — for everything. Headlines 700, body 400. Hierarchy is size/weight only.
- Pale-blue tinted section bands (`{colors.accent-pale}` — #fafbfe, `{colors.accent-soft}` — #e4ecfb) gently separate editorial zones from pure-white content zones.
- Real product dashboard chrome embedded in cards — donut charts, revenue tiles, US-map heatmaps, query tables. Chart colors include `{colors.chart-lime}` (#80b946), `{colors.violet}` (#5d60a2), and the blue family.
- Soft, low-alpha shadows (`rgba(16,24,40,0.05) 0 1px 2px` is the dominant card shadow at 130 occurrences). No heavy elevation.
- Hairline-bordered feature cards (`{colors.hairline}` — #f1f2f4, `{colors.border}` — #c6c9d2) arranged in 3-up grids.
- Spacing rhythm built on a 4px base, with 20px (`{spacing.lg}`) as the dominant unit (236 occurrences).
- Modest border-radius scale — `{rounded.md}` (8px) is the workhorse for buttons and cards, `{rounded.xs}` (4px) for inputs.

## Colors

### Brand & Accent
- **Accent** (`{colors.accent}` — #509ee3): The Metabase brand blue. Primary CTAs, links, logo, in-product highlights. This is the system's one loud color (1228 occurrences).
- **Accent Strong** (`{colors.accent-strong}` — #1c6bb0): A deeper blue used for pressed/active link states and denser blue accents.
- **Accent Button** (`{colors.accent-button}` — #28609f): The measured fill tone captured on the button element — a mid-deep blue used for the active/pressed button surface.
- **Accent Deep** (`{colors.accent-deep}` — #12436e): The darkest blue in the palette — used in chart fills and dark-blue text moments.
- **Accent Tint** (`{colors.accent-tint}` — #c2daf0): A light blue used for chart fills and subtle highlights.
- **Accent Soft / Softer / Pale** (`{colors.accent-soft}` — #e4ecfb, `{colors.accent-softer}` — #eef6fc, `{colors.accent-pale}` — #fafbfe): The tinted-band family. Softest pale-blue washes used for the announcement bar, hero zone, "What's new" cards, and alternating section backgrounds.
- **Violet** (`{colors.violet}` — #5d60a2): A secondary chart/data-viz color seen in the embedded dashboards.

### Surface & Neutral
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor.
- **Hairline** (`{colors.hairline}` — #f1f2f4): The faint divider tone between sections and on card edges.
- **Border** (`{colors.border}` — #c6c9d2): The visible 1px card / input border on white surfaces.
- **Black** (`{colors.black}` — #000000): Used sparingly for max-contrast moments (e.g., the cookie bar surface tends toward ink/black).

### Text
- **Ink** (`{colors.ink}` — #22242b): All headlines and primary text (measured from h1, max contrast vs canvas).
- **Ink Alt** (`{colors.ink-alt}` — #212529): A near-twin dark used in some UI chrome.
- **Body** (`{colors.body}` — #5a6072): Default running-text color (976 occurrences).
- **Muted** (`{colors.muted}` — #8d93a5): Secondary / low-contrast text — captions, logo-strip labels.
- **Muted Blue** (`{colors.muted-blue}` — #73859f): A blue-tinted gray for tertiary text and labels.
- **On Accent** (`{colors.on-accent}` — #ffffff): Text on blue buttons and dark surfaces.

### Semantic & Chart
- **Success** (`{colors.success}` — #198754): Positive deltas, success states.
- **Error** (`{colors.error}` — #dc3545): Negative deltas, validation errors.
- **Chart Lime** (`{colors.chart-lime}` — #80b946): A green chart-fill color seen in revenue-goal bars and progress visualizations inside the embedded product UI.

## Typography

### Font Family
The system runs **Lato** for absolutely everything — display headlines, section heads, body copy, buttons, nav, and captions. Lato is an open-source, freely available Google font, so it can be shipped directly with no substitution needed. The fallback stack walks `-apple-system, BlinkMacSystemFont, sans-serif`.

There is no display/body typeface split. Hierarchy is built purely from size + weight: headlines use weight 700, body uses weight 400. Letter-spacing stays at `normal` across every role — Metabase does not tighten or expand tracking.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.h2}` | 36px | 700 | 1.111 | normal | Section heads ("Business intelligence your team can use", "Keeps up as you grow") — the largest type in the system |
| `{typography.h1}` | 30px | 700 | 1.2 | normal | Hero / page headline ("Open source analytics that answers back") |
| `{typography.h3}` | 20px | 700 | 1.4 | normal | Feature-card titles, sub-section heads |
| `{typography.h4}` | 14px | 700 | 1.571 | normal | Small labels, nav links, button text, eyebrow headings |
| `{typography.body}` | 14px | 400 | 1.857 | normal | Default running-text, descriptions, footer links |

### Principles
Lato 700 is the headline voice; Lato 400 is the body voice. The notable quirk is that `h2` (36px) is set larger than `h1` (30px) — section bands carry more typographic weight than the page title itself, which keeps long-scroll editorial bands feeling like clear new chapters. Body copy runs at a generous 1.857 line-height (14px) — airy, readable, and forgiving on long descriptions.

### Note on Font Substitutes
Lato is open-source (SIL Open Font License) and was not flagged as licensed in the analysis — it ships directly. If unavailable, **Inter** or the system sans stack at matching weights is an acceptable fallback, though Lato's slightly rounder, warmer humanist forms are part of the brand's friendly tone.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.xsm}` 10px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 28px · `{spacing.xxxl}` 32px.
- **Dominant unit:** `{spacing.lg}` (20px) is by far the most frequent value (236 occurrences) — it is the system's default gap and padding step.
- **Card internal padding:** `{spacing.xl}` (24px) on feature cards; `{spacing.lg}` (20px) on product-mockup and testimonial cards.
- **Section vertical rhythm:** `{spacing.xxxl}` (32px) is the largest measured spacing token; larger section gaps are composed from stacked spacing units (derived).

### Grid & Container
- **Editorial body:** Centered single-column content with 3-up card grids.
- **Hero band:** Centered single-column — headline + sub-head + dual CTA row, with the product dashboard mockup spanning full width below.
- **Feature grids:** 3-up at desktop ("Get up and running in no time", the "Keeps up as you grow" matrix).
- **Logo strip:** Single horizontal row of customer logos under the hero.
- **Footer:** Multi-column link list (Product / Use Cases / Features / Company / Resources).

### Whitespace Philosophy
Metabase uses generous whitespace with a 20px default rhythm. Editorial bands alternate between pure-white content zones and pale-blue tinted bands (`{colors.accent-pale}`) to chunk the long-scroll page. The result reads calm and technical — never cramped, never shouting.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, hairline border only (`{colors.hairline}` / `{colors.border}`) | Feature cards, nav, body sections |
| Soft hairline shadow | `rgba(16,24,40,0.05) 0px 1px 2px 0px` | The dominant card/elevation tone (130 occurrences) — subtle lift on cards and bars |
| Medium card shadow | `rgba(16,24,40,0.1) 0px 4px 8px -2px, rgba(16,24,40,0.06) 0px 2px 4px -2px` | Elevated cards, dropdown menus |
| High float shadow | `rgba(24,39,75,0.12) 0px 16px 28px -6px, rgba(24,39,75,0.14) 0px 32px 88px -4px` | The hero product-dashboard mockup and other marquee floating surfaces (6 occurrences) |

The elevation philosophy is **soft and restrained** — almost all depth is the faint 1px-2px shadow. The big two-layer float shadow is reserved for the hero dashboard mockup, which is the page's marquee artifact.

### Decorative Depth
- The hero band carries faint line-art topographic illustrations (mountains, bridges) in pale blue at the left and right margins — decorative, not a system token.
- Embedded product dashboards carry their own internal chrome shadows from the actual Metabase UI — these are product chrome shown as content, not system elevation tokens.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Text inputs (measured), small controls |
| `{rounded.sm}` | 6px | Small inline elements |
| `{rounded.md}` | 8px | Standard buttons and cards — the workhorse radius (32 occurrences) |
| `{rounded.lg}` | 12px | Larger content cards, "What's new" cards (13 occurrences) |
| `{rounded.xl}` | 16px | Occasional larger container |
| `{rounded.xxl}` | 24px | Large rounded surfaces / pill-ish badges (7 occurrences) |
| `{rounded.xxxl}` | 36px | A single large-radius element |
| `{rounded.full}` | 9999px | Circular avatars, icon chips, fully-rounded pills |

### Photography Geometry
Testimonial avatars and customer logos render as small circular or square chips. Embedded product dashboards retain their native rectangular chrome with their own internal cell radii. Hero illustration line-art is decorative vector, not contained in a frame.

## Components

### Bars & Navigation

**`announcement-bar`** — The top promo strip ("OUTER JOIN · Where data people meet · Book your seat"). Pale-blue background `{colors.accent-soft}`, ink text, dismissible with an × at right. Type in `{typography.body}`.

**`top-nav`** — White nav bar with the Metabase wordmark + dotted-grid logo at left, primary menu (Product, Features, Docs, Resources, Pricing) center, and a right-side cluster with "Log in" text-link and a "Get started" `{component.button-primary}`. Background `{colors.canvas}`, menu items in `{typography.h4}` (Lato 14px / 700).

**`nav-link`** — Inline nav menu item. Transparent background, `{colors.ink}` text, `{typography.h4}`. Carries a small dropdown chevron.

### Buttons

**`button-primary`** — The signature filled CTA ("Try Metabase Cloud free", "Get started", "Sign up"). Background `{colors.accent}` (#509ee3), text `{colors.on-accent}` (#ffffff), type `{typography.h4}`, rounded `{rounded.md}` (8px, derived from screenshots — see Known Gaps), padding 12px × 24px (derived). The pressed/active surface darkens toward `{colors.accent-button}` (#28609f).

**`button-secondary`** — White outline button ("Deploy Metabase Open Source"). Background `{colors.canvas}`, text `{colors.accent}`, 1px `{colors.border}` outline, same type, radius, and padding as primary.

**`text-link`** — Inline blue links ("Learn more about embedding…", "See more love for Metabase"). Transparent background, `{colors.accent}` text, `{typography.body}`.

### Cards & Containers

**`hero-band`** — The pale-tinted hero zone. Background `{colors.accent-pale}`, centered h1 in `{typography.h2}`/`{typography.h1}` scale, sub-head in `{colors.body}`, dual CTA row, and decorative pale-blue line-art at the margins.

**`product-mockup-card`** — The marquee artifact: a full Metabase dashboard ("Business overview" — donut charts, revenue tiles, US-map heatmap, bar charts) shown at scale. Background `{colors.canvas}`, rounded `{rounded.md}`, internal padding `{spacing.lg}` (20px), lifted by the high float shadow. Metabase shows the actual product, not an illustration of it.

**`feature-card`** — Used in 3-up grids ("Always open-source", "Connect to 20+ data sources", "Enterprise-grade security"). Background `{colors.canvas}`, 1px hairline/border, rounded `{rounded.lg}`, padding `{spacing.xl}` (24px). Carries an icon or product chip at top, an `{typography.h3}` title, and a `{typography.body}` description.

**`feature-grid-band`** — A tinted section wrapper ("Keeps up as you grow") holding a matrix of feature cards. Background `{colors.accent-pale}`, section padding built from spacing units.

**`whats-new-card`** — A pale-blue highlight card ("What's new — Open source deploys with AI features") with a circular arrow affordance at right. Background `{colors.accent-softer}`, rounded `{rounded.lg}`, padding `{spacing.lg}`, label in `{typography.h4}`.

**`testimonial-card`** — Customer-quote card in the "Analytics that people straight up love" grid. Background `{colors.canvas}`, rounded `{rounded.md}`, padding `{spacing.lg}`. Top row carries a circular avatar + name + handle; quote in `{typography.body}`.

**`card`** — The generic content container. Background `{colors.canvas}`, rounded `{rounded.md}`, padding `{spacing.lg}`. (Measured component data reported radius 0 / no shadow — see Known Gaps; observed cards carry hairline borders and the soft 1px-2px shadow.)

**`logo-strip`** — The "trusted by 90,000+ companies" row (Hugging Face, Capital One, Mistral, Linear, etc.). Background `{colors.canvas}`, logos rendered in muted gray `{colors.muted}`.

### Inputs & Forms

**`input`** — Standard text input (e.g., newsletter "Email address" field). Background `{colors.canvas}` (#ffffff), text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.xs}` (4px, measured), padding 10px × 12px, 1px `{colors.border}` outline.

### Overlay

**`cookie-bar`** — The bottom cookie-consent bar. Dark ink/near-black surface (`{colors.ink}`), white text, rounded `{rounded.lg}` corners, with "Settings" and "Accept cookies" buttons. The only dark surface visible on the marketing pages.

### Footer

**`footer`** — White footer with a multi-column link list (Product / Use Cases / Features / Company / Resources). Background `{colors.canvas}`, links in `{typography.body}` in `{colors.body}`, section headings slightly darker. Padding built from spacing units.

## Do's and Don'ts

### Do
- Reserve `{colors.accent}` (#509ee3) for primary CTAs, links, and the logo. It is the system's single loud color — keep it deliberate.
- Use Lato for everything; build hierarchy from size + weight (700 for heads, 400 for body), not from a second typeface.
- Embed real Metabase product UI inside the marketing flow — dashboards, charts, query results. Show the product, don't illustrate it.
- Alternate pure-white content zones with pale-blue tinted bands (`{colors.accent-pale}`, `{colors.accent-soft}`) to chunk the long page.
- Keep elevation soft — the `rgba(16,24,40,0.05) 0 1px 2px` shadow is the default. Reserve the big float shadow for the hero dashboard.
- Use the 20px (`{spacing.lg}`) rhythm as the default gap and padding step.
- Render data-viz chart colors (`{colors.chart-lime}`, `{colors.violet}`, the blue family, `{colors.success}`, `{colors.error}`) only inside product chrome.

### Don't
- Don't introduce a second accent color at the action layer — the brand is monochrome-blue for CTAs.
- Don't set body copy in weight 700 or headlines in weight 400 — the weight split carries the hierarchy.
- Don't add heavy shadows or dark card surfaces to the body — the only dark surface is the cookie bar.
- Don't tighten or expand letter-spacing; Lato runs at `normal` tracking throughout.
- Don't shrink the line-height on body copy — the airy 1.857 leading is part of the readable, technical tone.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero CTAs stack; feature grids 1-up; logo strip wraps; footer columns stack |
| Tablet | 768–1024px | Top nav tightens; feature grids 2-up; dashboard mockup scales down proportionally |
| Desktop | 1024–1440px | Full horizontal nav; 3-up feature grids; full-width product mockup |
| Wide | > 1440px | Same as desktop with extra outer breathing room around centered content |

### Touch Targets
- `{component.button-primary}` and `{component.button-secondary}` carry generous 12px × 24px padding — comfortably above minimum tap size.
- `{component.input}` height comes from 10px vertical padding plus body line-height.
- Nav links rely on surrounding padding to meet tap-area minimums on mobile.

### Collapsing Strategy
- Top nav collapses to a hamburger menu on mobile.
- The hero's dual CTA row stacks vertically on narrow viewports.
- Feature-card grids reduce columns (3 → 2 → 1) rather than shrinking cards excessively.
- The product dashboard mockup scales proportionally; chart tiles remain legible.
- The customer logo strip wraps to multiple rows.

### Image Behavior
- Embedded product dashboards retain native aspect ratios; their containers resize.
- Avatars crop to circles at every breakpoint.
- Hero line-art illustrations are decorative and clip/fade at the margins on smaller screens.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.product-mockup-card}`).
2. Variants of an existing component (`-active`, `-secondary`, `-disabled`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex into a component.
4. Never document hover. Default and Active/Pressed states only (primary button darkens toward `{colors.accent-button}` on press).
5. Keep the type system to Lato; build emphasis with size + weight, not a new face.
6. Brand blue is the only loud color — resist adding accent hues at the action layer.
7. When in doubt about emphasis: bigger Lato before a new color.

## Known Gaps

- **Button geometry is derived from screenshots.** The measured `button-primary` component reported `radius: 0px` and `padding: 1px 6px`, which captured the wrong element (likely an inline link or icon span). Screenshots clearly show rounded (~8px) filled blue buttons with generous padding, so `{rounded.md}` and 12px × 24px are documented as derived. Exact measured button padding/radius were not reliably captured.
- **Card geometry similarly derived.** The measured `card` reported `radius: 0px` / `shadow: none`, but observed feature cards carry hairline borders and the soft 1px-2px shadow with rounded corners; `{rounded.md}` is derived.
- The measured `accent-button` (#28609f) was captured on a button element; whether it is the resting or pressed fill is inferred — the resting CTA reads as `{colors.accent}` (#509ee3) in screenshots.
- The `h1` (30px) measuring smaller than `h2` (36px) is faithful to the analysis but unusual; confirm intended page-title vs section-head scaling before reuse.
- Hover-state styling is out of scope per policy; only default and pressed states are documented.
- Chart/data-viz colors (`{colors.chart-lime}`, `{colors.violet}`, `{colors.accent-tint}`) are observed inside embedded product UI; their exact roles in the broader Metabase product palette are out of marketing-page scope.
- Animation and transition timings (dropdown reveals, dashboard demo) were not extracted.
- Form validation states (error/success on inputs) were not captured beyond the base input; semantic colors `{colors.error}` and `{colors.success}` are documented from frequency data, not from a confirmed validation flow.
- Lato was not flagged as licensed (`fonts_licensed: []`) and ships directly under the SIL Open Font License — no substitute required.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/metabase/design-md -->
