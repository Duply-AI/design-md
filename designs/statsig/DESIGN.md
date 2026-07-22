---
version: alpha
name: Statsig-design-analysis
description: A precise, data-platform marketing interface built on a soft light-gray canvas (#f6f6f6) with crisp white cards, near-black CTAs, and the Geist typeface carrying tightly tracked display headlines. The system reads as engineering-confident SaaS — generous whitespace, very soft 10px card radii with a near-invisible ambient shadow, pill-shaped buttons (30px radius), real product UI artifacts embedded in feature cards, and a restrained blue accent reserved for the announcement banner and inline highlights rather than primary actions.

colors:
  ink: "#1f2328"
  ink-strong: "#000000"
  body: "#343941"
  muted: "#535963"
  muted-soft: "#808080"
  canvas: "#f6f6f6"
  surface: "#ffffff"
  surface-alt: "#ededed"
  hairline: "#d4d7dc"
  accent: "#367eed"
  accent-strong: "#1b63d2"
  accent-soft: "#e5f0ff"
  accent-muted: "#accfff"
  highlight: "#fd492c"
  on-dark: "#ffffff"

typography:
  h1:
    fontFamily: "Geist, sans-serif"
    fontSize: 65px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -2px
  h2:
    fontFamily: "Geist, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  h3:
    fontFamily: "Geist, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  h4:
    fontFamily: "Geist, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  button:
    fontFamily: "Geist, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.714
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 5px
  md: 10px
  lg: 30px
  pill: 100px

spacing:
  xxs: 6px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 40px
  xxl: 60px
  xxxl: 80px
  section: 100px

components:
  button-primary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 6px 20px
  button-cta:
    backgroundColor: "{colors.ink-strong}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 6px 20px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  announcement-banner:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  product-mockup-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  category-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 6px 20px
  input:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
---

## Overview

Statsig's marketing surface is a precise, engineering-first SaaS interface — a soft light-gray canvas (`{colors.canvas}` — #f6f6f6) holding crisp white cards (`{colors.surface}` — #ffffff), near-black CTAs, and the **Geist** typeface carrying tightly tracked display headlines. The system reads as confident and technical without shouting: large centered hero type, a single primary action, and real product UI shown directly inside the layout rather than illustrated around it.

Type voice is single-family: **Geist** does all the work — display headlines, section heads, and button labels. The h1 ("Measure what ships. Ship what matters.") runs Geist at 65px weight 500 with aggressive -2px letter-spacing, giving the headline a compact, precise feel. Sub-heads and section titles step up to weight 600 with normal tracking.

Component voltage comes from **product UI fragments embedded directly in feature cards** — metrics explorers, experiment dashboards, feature-flag panels, session-replay frames. Statsig shows the actual console chrome at small scale inside the marketing flow rather than painting marketing illustrations of the product.

The accent blue (`{colors.accent}` — #367eed) is restrained — it appears on the top announcement banner and on inline highlights/links, never on primary CTAs. The action layer stays monochrome: white outline buttons and near-black filled CTAs.

**Key Characteristics:**
- Soft light-gray page canvas (`{colors.canvas}` — #f6f6f6) with white cards floating on a near-invisible ambient shadow (`rgba(27,37,40,0.05) 0px 0px 20px`).
- Geist single-family type system; h1 at weight 500 with -2px tracking is the brand signature.
- Pill-shaped buttons — `{rounded.lg}` (30px) radius on a low-height button reads as fully rounded. White-outline (`{component.button-primary}`) and near-black filled (`{component.button-cta}`) variants.
- Restrained accent blue confined to the announcement banner and inline links — the action layer is monochrome.
- Real product UI embedded in feature cards (`{component.product-mockup-card}`).
- Very soft 10px card radius (`{rounded.md}`) with a single diffuse ambient shadow as the only elevation cue.
- Centered, generously spaced editorial bands with a large section rhythm (`{spacing.section}` — 100px).

## Colors

### Accent
- **Accent** (`{colors.accent}` — #367eed): The brand blue. Used on the top announcement banner and inline link highlights. Not used on primary CTAs — the action layer stays monochrome.
- **Accent Strong** (`{colors.accent-strong}` — #1b63d2): Deeper blue for emphasis / pressed accent states and chart strokes inside product UI.
- **Accent Soft** (`{colors.accent-soft}` — #e5f0ff): Pale blue fill — chart area gradients and soft callout backgrounds inside product mockups.
- **Accent Muted** (`{colors.accent-muted}` — #accfff): Mid-tone blue used in chart fills and small UI artifacts.
- **Highlight** (`{colors.highlight}` — #fd492c): A warm red-orange used sparingly as a data highlight (e.g., the flagged metric chip in the hero mockup). Appears once — a scarce accent.

### Surface
- **Canvas** (`{colors.canvas}` — #f6f6f6): The default page floor — a soft off-white gray.
- **Surface** (`{colors.surface}` — #ffffff): White cards, product mockup frames, white outline buttons.
- **Surface Alt** (`{colors.surface-alt}` — #ededed): Input field background; soft filled regions.
- **Hairline** (`{colors.hairline}` — #d4d7dc): The 1px inset border tone (`rgb(212,215,220) 0px 0px 0px 1px inset`) used on bordered cards and field outlines.

### Text
- **Ink** (`{colors.ink}` — #1f2328): All headlines and primary text — a near-black with a slight cool cast. The dominant text color across the system.
- **Ink Strong** (`{colors.ink-strong}` — #000000): Pure black — used for the filled CTA button background and the wordmark.
- **Body** (`{colors.body}` — #343941): Running-text / secondary copy.
- **Muted** (`{colors.muted}` — #535963): Secondary text, footer links, captions.
- **Muted Soft** (`{colors.muted-soft}` — #808080): Tertiary text — fine print and disabled labels.
- **On Dark** (`{colors.on-dark}` — #ffffff): Text on the dark CTA button and on the blue announcement banner.

## Typography

### Font Family
The system runs a single typeface — **Geist** (Vercel's open-source grotesque) — across display headlines, section heads, and button labels. The fallback stack is `Geist, sans-serif`. No second family was measured. Geist is freely available as an open-source web font, so no licensed substitute is required.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.h1}` | 65px | 500 | 1.1 | -2px | Hero headline ("Measure what ships. Ship what matters.") |
| `{typography.h2}` | 40px | 600 | 1.25 | 0 | Section heads ("Backed by proven infrastructure") |
| `{typography.h3}` | 32px | 600 | 1.25 | 0 | Sub-section heads, large card titles |
| `{typography.h4}` | 24px | 600 | 1.25 | 0 | Feature card titles |
| `{typography.button}` | 14px | 600 | 1.714 | 0 | Button labels, nav items, pill labels |

### Principles
The h1 is the brand's signature voice: weight 500 (not 600) with a tight -2px letter-spacing — light but compact, precise without being heavy. Below h1, everything steps to weight 600 with normal tracking. The single-family discipline keeps the system clean: hierarchy is driven by size and weight alone, not by mixing typefaces.

### Note on Font Substitutes
No licensed faces were flagged. Geist is open-source (SIL Open Font License) and can be shipped directly. If unavailable, **Inter** is the closest fallback in metrics and grotesque character.

## Layout

### Spacing System
- **Base unit:** the scale clusters on 4px-ish increments measured at 6 / 8 / 12 / 16 / 20 / 40 / 60 / 80 / 100px.
- **Tokens:** `{spacing.xxs}` 6px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 40px · `{spacing.xxl}` 60px · `{spacing.xxxl}` 80px · `{spacing.section}` 100px.
- **Dominant rhythm:** 20px (`{spacing.lg}`) is by far the most frequent gap/padding value — the system's workhorse unit for component internal spacing.
- **Section padding:** `{spacing.section}` (100px) and `{spacing.xxxl}` (80px) for vertical band separation.
- **Card internal padding:** clusters around `{spacing.xl}` (40px) and `{spacing.lg}` (20px).

### Grid & Container
- **Centered editorial layout:** the hero and most bands are center-aligned within a constrained content width.
- **Feature card grids:** 2-up at desktop (Experimentation / Feature Management / Product Analytics / Session Replays), collapsing to 1-up on mobile.
- **Stat row:** 4-up metric band ("1+ Trillion / 2.5 Billion / 99.99% / <1ms").
- **Footer:** multi-column link list (Platform / Why Statsig / Resources / Company).

### Whitespace Philosophy
Statsig uses generous, calm whitespace with large section gaps (80–100px). Each band carries one clear heading plus supporting cards. The centered hero and abundant breathing room make the layout read as confident and uncluttered.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Page canvas, top nav, editorial sections |
| Inset hairline | `rgb(212,215,220) 0px 0px 0px 1px inset` (`{colors.hairline}`) | Bordered cards, input outlines |
| Ambient card | `rgba(27,37,40,0.05) 0px 0px 20px 0px` | White cards and product mockup frames — the system's primary elevation cue |

The elevation philosophy is **soft and minimal** — a single diffuse, very-low-alpha ambient shadow (5% opacity, 20px blur, no offset) lifts white cards off the gray canvas. There are no heavy drop shadows, no layered depth, no glassmorphism. Depth comes almost entirely from the white-on-gray surface contrast.

### Decorative Depth
- The hero product mockups are shown in a tilted/perspective 3D arrangement, layering two console panels — this perspective treatment is illustrative composition, not a system shadow token.
- Product UI fragments inside cards carry their own internal chrome (chart fills using `{colors.accent-soft}` / `{colors.accent-muted}`), shown as content.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small chips, tags, inline UI artifacts |
| `{rounded.sm}` | 5px | Input fields |
| `{rounded.md}` | 10px | Content cards, product mockup frames |
| `{rounded.lg}` | 30px | Buttons and category pills — on low-height controls this reads as fully rounded |
| `{rounded.pill}` | 100px | Fully-rounded toggles / segmented controls |

### Geometry
Cards use a soft 10px radius. Buttons and category pills use the 30px radius, which on ~40px-tall controls produces a pill silhouette. Inputs use a tighter 5px radius, keeping form fields visually distinct from the rounder action buttons.

## Components

### Top Navigation

**`top-nav`** — Nav bar across the top of every page on the `{colors.canvas}` floor. Carries the STATSIG wordmark + logo at left, primary horizontal menu (Products, Solutions, Resources, Docs, Pricing) center, and a right cluster with a "Sign In" white button (`{component.button-primary}`) and a near-black "Contact Us" CTA (`{component.button-cta}`). Menu items in `{typography.button}` (Geist 14px / 600).

**`announcement-banner`** — A full-width blue bar directly below the nav ("Statsig is partnering with Amplitude · Read the announcement"). Background `{colors.accent}` (#367eed), text `{colors.on-dark}`. This is the primary place the brand blue appears.

### Buttons

**`button-primary`** — White outline button. Background `{colors.surface}` (#ffffff), text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.lg}` (30px), padding 6px × 20px. Used for "Sign In", "See how it works", "View Docs" — secondary-rank actions.

**`button-cta`** — The near-black filled primary CTA ("Contact Us", "Create a free account", "Sign Up Free"). Background `{colors.ink-strong}` (#000000) — derived from screenshot ground-truth (the measured button entry captured the white outline variant), text `{colors.on-dark}`, type `{typography.button}`, rounded `{rounded.lg}`, padding 6px × 20px.

### Cards & Containers

**`card`** — Standard white content card. Background `{colors.surface}`, rounded `{rounded.md}` (10px), elevation from the ambient `rgba(27,37,40,0.05) 0px 0px 20px` shadow. Used for stat callouts, testimonial cards, and customer-story panels.

**`product-mockup-card`** — Feature cards that embed real Statsig console UI (metrics explorer, experiment results, feature-flag panels, session-replay frames). Background `{colors.surface}`, rounded `{rounded.md}`, same ambient shadow. The product UI inside carries its own chrome — these cards show the product, they don't decorate around it.

**`category-pill`** — Pill-shaped filter/label chips (e.g., the product-category grid: "PRODUCT ANALYTICS", "EXPERIMENTATION", "FEATURE MANAGEMENT"). Background `{colors.surface}`, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.lg}`, padding 6px × 20px.

### Inputs & Forms

**`input`** — Text/select field (e.g., the SDK framework picker, the install command field). Background `{colors.surface-alt}` (#ededed), text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.sm}` (5px). The tighter radius distinguishes form fields from the pill-shaped buttons.

### Footer

**`footer`** — Multi-column footer on the `{colors.canvas}` floor with link lists (Platform / Why Statsig / Resources / Company) in `{colors.muted}`. Carries the STATSIG wordmark at top-right and a copyright line at the bottom. No surface inversion — the footer stays light like the rest of the page.

## Do's and Don'ts

### Do
- Keep the action layer monochrome — white outline (`{component.button-primary}`) and near-black filled (`{component.button-cta}`). Reserve blue for the announcement banner and inline links.
- Use Geist for everything, with the h1 at weight 500 and -2px tracking. That tight, light headline is the brand signature.
- Float white cards on the soft gray canvas with the single ambient shadow — that surface contrast is the system's only elevation cue.
- Embed real product UI inside feature cards rather than illustrating around the product.
- Use the 30px pill radius for buttons and chips; keep inputs at the tighter 5px radius.
- Step hierarchy with size and weight, not by introducing a second typeface.

### Don't
- Don't put blue (`{colors.accent}`) on primary CTAs — the brand keeps actions monochrome.
- Don't add heavy or layered drop shadows; the ambient 5%/20px shadow is the only elevation in the system.
- Don't bold the h1 to 600 — it should stay at weight 500 to preserve the precise, compact display voice.
- Don't overuse `{colors.highlight}` (#fd492c) — it appears once as a data highlight; treat it as scarce.
- Don't round content cards past `{rounded.md}` (10px); the soft-but-restrained card radius is part of the technical, precise feel.

## Responsive Behavior

### Breakpoints
Specific breakpoint pixel values were not measured. The captured desktop and a narrower rendering imply the following behavior (derived from screenshot comparison):

| Name | Behavior |
|---|---|
| Mobile | Nav collapses (wordmark + condensed actions); hero h1 scales down from 65px; feature card grid stacks 1-up; stat row wraps; footer columns stack |
| Tablet | Nav tightens; 2-up feature cards may reduce; category-pill grid wraps to more rows |
| Desktop | Full horizontal nav; 2-up feature card grid; 4-up stat row; multi-column footer |

### Touch Targets
- Buttons (`{component.button-primary}` / `{component.button-cta}`) use 6px × 20px padding on a Geist 14px/1.714 label — effective height clears comfortable tap sizing but exact pixel height was not measured (see Known Gaps).
- Category pills share the button padding and pill radius.

### Collapsing Strategy
- The centered hero stacks naturally; the perspective product mockup beneath the CTAs scales proportionally.
- Feature card grids reduce columns rather than shrinking the embedded product UI illegibly.
- Footer link columns reflow to fewer columns on narrow viewports.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.product-mockup-card}`, `{component.category-pill}`).
2. Variants (e.g., a future `-active` / `-disabled` state) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Keep the h1 at Geist weight 500 / -2px tracking — don't drift it toward 600.
6. Blue stays off the action layer. If you need emphasis, use weight or size, not accent color.
7. When adding surfaces, prefer white cards on the gray canvas with the ambient shadow rather than introducing new fills.

## Known Gaps

- **Body / paragraph and nav-link type were not measured** — only h1–h4 and the button role were captured by the analyzer. Running-text size, weight, and line-height need confirmation from a deeper extraction; they are intentionally omitted rather than guessed.
- **The dark filled CTA background is derived from screenshots** — the measured `button-primary` entry captured the white outline variant (#ffffff background, #1f2328 text). The near-black "Contact Us" / "Create a free account" CTA (`{component.button-cta}`) is reconstructed using the measured `{colors.ink-strong}` (#000000); exact background hex and label color should be re-confirmed.
- **Button height** was not measured (only padding); rendered height is inferred from padding + line-height.
- **Pricing and roles pages** were captured but no page-specific component variants were extracted beyond the shared system; pricing-tier card specs are not documented.
- **Breakpoint pixel values** were not measured; responsive behavior is inferred from desktop + narrow screenshots.
- **The 100px radius** (`{rounded.pill}`) appears once and its exact application (segmented toggle vs. circular control) is unconfirmed.
- **Animation / transition timings** (carousel, chart reveals, mockup perspective) are out of scope.
- **Customer-logo and integration-grid treatments** were observed but their exact tile sizing and spacing were not individually measured.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/statsig/design-md -->
