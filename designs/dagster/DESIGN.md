---
version: alpha
name: Dagster-design-analysis
description: A clean, developer-tooling marketing surface built on white canvas with near-black ink and a single indigo brand accent. The system reads as precise, technical, and modern — Geist typeface throughout, soft 12px cards with no shadow, pill-shaped CTAs, purple-tinted micro-shadows, and dark indigo product bands that anchor long-scroll pages. Brand voltage comes from the indigo accent (#4f43dd) used on the hero's second headline line and from real product-UI dashboards shown directly inside the page.

colors:
  primary: "#4f43dd"
  primary-active: "#332aa6"
  ink: "#030615"
  ink-dark: "#111927"
  ink-deep-purple: "#1b0130"
  neutral-black: "#000000"
  body: "#1f2a37"
  muted: "#384250"
  muted-soft: "#a4a7ae"
  canvas: "#ffffff"
  surface-soft: "#fbfaff"
  surface-lilac: "#f7f7ff"
  surface-gray: "#f7f8f9"
  surface-faint: "#fafafa"
  hairline: "#e3e8ef"
  neutral-cc: "#cccccc"
  neutral-dd: "#dddddd"
  accent-blue: "#3898ec"
  on-primary: "#ffffff"
  on-dark: "#ffffff"

typography:
  h1:
    fontFamily: "Geist, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: normal
  h2:
    fontFamily: "Geist, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.16px
  h3:
    fontFamily: "Geist, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: 0.18px
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.32px

rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 48px
  pill: 100px

spacing:
  xxs: 4px
  xtiny: 6px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 12px 24px
  button-primary:
    backgroundColor: "{colors.ink-deep-purple}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: 40px
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  product-mockup-card:
    backgroundColor: "{colors.ink-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
    padding: 20px
  feature-callout-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.h3}"
    rounded: "{rounded.md}"
    padding: 20px
  customer-story-card:
    backgroundColor: "{colors.surface-gray}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 20px
  logo-cloud:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    padding: 24px
  cta-band-dark:
    backgroundColor: "{colors.ink-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.h2}"
    rounded: "{rounded.xl}"
    padding: 32px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
  pricing-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
---

## Overview

Dagster's marketing surface is a clean, developer-tooling interface — white canvas (`{colors.canvas}` — #ffffff) with near-black ink (`{colors.ink}` — #030615), the **Geist** typeface throughout, and a single indigo brand accent (`{colors.primary}` — #4f43dd). The system reads as precise and technical without being cold: generous vertical whitespace, soft-cornered cards (`{rounded.md}` — 12px), pill-shaped CTAs, and real product-UI dashboards shown directly inside the page rather than illustrated.

Type voice is unusually unified: every role — h1, h2, h3, body — runs **Geist**, the open-source geometric sans. Hierarchy is carried by size and weight (600 for display, 500 for h3, 400 for body) rather than by switching families. The hero pairs a black first line ("Data your team trusts.") with an indigo second line ("AI that runs on it.") — the accent appears as a typographic highlight, not a button fill.

Brand voltage comes from two places: the **indigo accent** used sparingly on headline highlights and inline links, and **real product chrome** — dark dashboard mockups (`{colors.ink-dark}` — #111927) showing the actual Dagster catalog, run timelines, and Dagster+ AI panels embedded directly into the marketing flow. Dagster shows the product; it doesn't paint marketing illustrations of it.

The system also has a signature detail: **purple-tinted micro-shadows**. Cards and elevated surfaces carry `rgba(79, 67, 221, 0.05)` 1–2px shadows — the brand indigo bled into the shadow color rather than a neutral gray.

**Key Characteristics:**
- White canvas with near-black ink (`{colors.ink}` — #030615), single indigo accent (`{colors.primary}` — #4f43dd).
- **Geist** typeface across every role — hierarchy by size/weight, not by family switching.
- Pill-shaped CTAs (`{rounded.pill}` — 100px): a dark deep-indigo primary ("Sign In", "Talk to sales") and a white-outline secondary ("Get started for free", "Try Dagster+").
- Soft 12px cards (`{rounded.md}`) that mostly run shadowless — flat surfaces on white canvas.
- Real dark product-UI dashboards (`{colors.ink-dark}` — #111927) embedded as content, not illustration.
- Purple-tinted shadow signature: `rgba(79, 67, 221, 0.05)` micro-shadows on elevated elements.
- Indigo as a typographic highlight (hero second line) and inline-link color rather than a CTA fill.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #4f43dd): The indigo brand accent. Used on the hero's second headline line, inline links, and the purple-tinted shadow color. Press/deepened state shifts to `{colors.primary-active}` (#332aa6 — derived as the active/darker pairing observed in the palette).
- **Accent Blue** (`{colors.accent-blue}` — #3898ec): A secondary blue appearing rarely on small UI accents inside product chrome. Not used on marketing CTAs.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor.
- **Surface Soft** (`{colors.surface-soft}` — #fbfaff): Barely-tinted off-white band background.
- **Surface Lilac** (`{colors.surface-lilac}` — #f7f7ff): A faint lilac wash used on alternating sections.
- **Surface Gray** (`{colors.surface-gray}` — #f7f8f9): Neutral light-gray card / panel fill (customer-story cards).
- **Surface Faint** (`{colors.surface-faint}` — #fafafa): The lightest neutral divider tone.
- **Ink Dark** (`{colors.ink-dark}` — #111927): The dark dashboard / product-mockup surface and the dark CTA band background.
- **Ink Deep Purple** (`{colors.ink-deep-purple}` — #1b0130): The deepest near-black indigo — used as the primary button fill.
- **Hairline** (`{colors.hairline}` — #e3e8ef): 1px border tone on light surfaces — inputs, dividers, card outlines.
- **Neutral CC / DD** (`{colors.neutral-cc}` — #cccccc, `{colors.neutral-dd}` — #dddddd): Faint neutral borders and disabled tones.

### Text
- **Ink** (`{colors.ink}` — #030615): All headlines and primary text.
- **Body** (`{colors.body}` — #1f2a37): Default running-text color.
- **Muted** (`{colors.muted}` — #384250): Secondary text and labels.
- **Muted Soft** (`{colors.muted-soft}` — #a4a7ae): Tertiary text, logo-cloud captions, fine print.
- **Neutral Black** (`{colors.neutral-black}` — #000000): Pure black used in icons/logos.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #ffffff): Text on dark buttons, dark CTA bands, and product mockups.

### Semantic
No dedicated success/warning/error tokens were measured on the marketing surface — status colors appear only inside embedded product chrome (red/yellow run-failure dots) and are not extractable as system tokens. See Known Gaps.

## Typography

### Font Family
The entire system runs **Geist** — Vercel's open-source geometric sans — across display and body. There is no secondary family. Geist is an open-source typeface (`fonts_licensed` is empty), so it can ship directly with the recommended fallback stack `Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

The notable detail is positive letter-spacing on the smaller roles: h3 carries +0.18px and body carries +0.32px tracking — a slightly loosened, technical-feeling rhythm. Only h2 uses negative tracking (-0.16px); h1 sits at `normal`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.h1}` | 64px | 600 | 1.12 | normal | Hero headline ("Data your team trusts. / AI that runs on it.") |
| `{typography.h2}` | 48px | 600 | 1.2 | -0.16px | Section heads ("Bad data breaks decisions, not just pipelines.") |
| `{typography.h3}` | 18px | 500 | 1.55 | 0.18px | Sub-heads, card titles, eyebrow lines |
| `{typography.body}` | 14px | 400 | 1.25 | 0.32px | Running text, button labels, nav links, captions |

### Principles
Hierarchy is driven by size and weight inside one family. Display sizes (h1/h2) sit at weight 600; the h3 sub-head role drops to 500; body runs 400. The accent (`{colors.primary}`) appears in headlines as a colored span — the hero's second line is the canonical example — rather than as decoration.

Button labels and nav links are not separately measured; they reuse `{typography.body}` (Geist 14px). The slightly loosened tracking is part of the technical voice — don't tighten body copy to 0.

### Note on Font Substitutes
Geist is open-source and ships directly — no substitution required. If unavailable in a given context, **Inter** is the closest fallback (both are humanist-leaning geometric sans), though Inter's letterforms are slightly wider; preserve the +0.32px body tracking signature either way.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xtiny}` 6px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px.
- **Dominant rhythm:** 12px (`{spacing.sm}`) is by far the most frequent gap/padding value, followed by 20px and 24px — the system favors tight 12px internal spacing with 20–24px between grouped elements.
- **Card internal padding:** `{spacing.xl}` (24px) for content cards; `{spacing.lg}` (20px) for product mockups and callout cards.
- **Section-level vertical rhythm** between major bands is large but was not captured as a discrete token — see Known Gaps.

### Grid & Container
- **Editorial body:** Centered single-column hero with the headline + sub-head + CTA row stacked and centered, then a full-width product dashboard below.
- **Logo cloud:** Multi-column grid of grayscale customer logos (≈6-up at desktop, wrapping on smaller widths).
- **Customer-story cards:** 2–3-up card row with prev/next carousel controls.
- **Pricing:** Multi-column tier cards (`{component.pricing-card}`).

### Whitespace Philosophy
Dagster uses generous vertical whitespace around a centered hero and lets large dark product mockups carry the visual weight. Internal element spacing is tight (12px dominant), but band-to-band spacing is open — the contrast between dense product chrome and airy marketing copy is the core layout tension.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, most cards (`{component.card}` ships `shadow: none`) |
| Hairline | 1px `{colors.hairline}` border | Inputs, dividers, occasional card outlines |
| Purple micro-shadow | `rgba(79, 67, 221, 0.05) 0px 1px 2px 0px` (and 1px 1px variant) | The signature elevated-element shadow — brand indigo bled into the shadow color |
| Neutral micro-shadow | `rgba(10, 13, 18, 0.05) 0px 1px 2px 0px` / `rgba(0,0,0,0.06) 0px 1px 8px 0px` | Small neutral elevation on a handful of UI chips |
| Floating panel | `rgba(0,0,0,0.05) 0px 12px 33px 3px` and `rgba(16,24,40,0.08) 0px 12px 16px -4px, rgba(16,24,40,0.03) 0px 4px 6px -2px` | Floating notification toasts and elevated product panels |

The elevation philosophy is **soft and mostly flat** — the dominant shadow is a barely-there 1–2px purple-tinted micro-shadow at 0.05 alpha. Larger drop shadows appear only on floating product notifications (the "Freshness failure" / "Run failure" toasts in the hero). No heavy shadows, no neumorphism.

### Decorative Depth
- Embedded product dashboards carry their own internal chrome shadows from the product UI — these are content, not system tokens.
- A faint white-glow shadow `rgba(255,255,255,0.1) 0px 2px 15px 0px` appears once on dark surfaces to lift content off the dark band.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 8px | The most frequent radius — inputs, small chips, inner panels |
| `{rounded.md}` | 12px | Standard content cards and product-mockup containers |
| `{rounded.lg}` | 16px | Larger customer-story cards |
| `{rounded.xl}` | 24px | Large feature/CTA band containers |
| `{rounded.xxl}` | 48px | Oversized rounded feature panels / decorative blocks |
| `{rounded.pill}` | 100px | Pill CTAs and circular icon buttons |

Two minor radii (10px, 14px) were measured at low frequency and are treated as incidental rounding rather than system tokens — see Known Gaps.

### Photography & Geometry
Customer-story cards crop imagery to `{rounded.lg}` (16px) corners. Product dashboard mockups use `{rounded.md}` (12px). Logos in the logo cloud are rendered as flat grayscale marks with no container radius. The note worth flagging: the `input` component was measured at **0px radius** in one form context, contradicting the otherwise rounded system — see Components and Known Gaps.

## Components

### Top Navigation

**`top-nav`** — White nav bar pinned to the top of every page. `{colors.canvas}` background, `{colors.ink}` text in `{typography.body}` (Geist 14px). Carries the Dagster wordmark + spiral logo at left, a center menu (Product, Solutions, Pricing, Company, Resources with dropdown carets), and a right-side cluster: a circular GitHub icon button, a white-outline "Try Dagster+" pill, and a dark "Sign In" pill.

### Buttons

**`button-primary`** — The dark pill CTA ("Sign In", "Talk to sales"). Background `{colors.ink-deep-purple}` (#1b0130), text `{colors.on-dark}`, type `{typography.body}`, rounded `{rounded.pill}` (100px), padding ~12px × 24px (derived from the dominant spacing tokens). Active/deepened state `button-primary-active` shifts toward `{colors.primary-active}` (#332aa6).

**`button-secondary`** — White-outline pill ("Get started for free", "Try Dagster+"). Background `{colors.canvas}`, text `{colors.primary}` (indigo), 1px `{colors.hairline}` border, same pill radius and padding as primary.

**`button-icon-circular`** — The GitHub icon button in the nav. Background `{colors.canvas}`, ink-color icon, rounded `{rounded.pill}` for a full circle (the analyzer measured `radius: 50%`, mapped here to the pill token), ~40px diameter. The measured `button` props (`color: #ffffff, radius: 50%, padding: 0px`) correspond to this circular icon button.

### Cards & Containers

**`card`** — Standard content card. Background `{colors.canvas}`, rounded `{rounded.md}` (12px), and explicitly **shadow: none** (measured). The flat-on-white card is the system default.

**`product-mockup-card`** — Dark dashboard surface showing real Dagster product UI (catalog, run timeline, Dagster+ AI panel). Background `{colors.ink-dark}` (#111927), text `{colors.on-dark}`, rounded `{rounded.md}` (12px), padding `{spacing.lg}` (20px). These display the actual product chrome at scale — they're content, not decoration.

**`feature-callout-card`** — Small card with a heading + "Learn More" link used in the floating "The trust layer for your entire stack" sequence (Orchestrate / Observe / Activate). Background `{colors.canvas}`, type `{typography.h3}`, rounded `{rounded.md}`, padding `{spacing.lg}` (20px), with the signature purple micro-shadow.

**`customer-story-card`** — Image-topped story card ("14x fresher data", "90x faster onboarding"). Background `{colors.surface-gray}`, rounded `{rounded.lg}` (16px), padding `{spacing.lg}` (20px). Carries a cropped image with overlaid stat label.

**`logo-cloud`** — Grayscale customer-logo grid ("Adopted worldwide"). Background `{colors.canvas}`, logo marks in `{colors.muted}`/grayscale, caption in `{typography.body}`, padding `{spacing.xl}` (24px).

**`cta-band-dark`** — The dark mid-page band ("From operational context to confident action"). Background `{colors.ink-dark}` (#111927), text `{colors.on-dark}`, heading in `{typography.h2}`, rounded `{rounded.xl}` (24px), padding `{spacing.xxl}` (32px). Contains an embedded Dagster+ AI conversation panel and a "Meet Dagster+ AI" button.

**`pricing-card`** — Tier card on the pricing page. Background `{colors.canvas}`, rounded `{rounded.md}` (12px), padding `{spacing.xl}` (24px). Carries plan name, feature list in `{typography.body}`, and a CTA button.

### Inputs & Forms

**`input`** — Text input. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, 1px `{colors.hairline}` border. **Note:** the measured input radius was **0px** (square corners) in the captured form context — this conflicts with the system's otherwise-rounded surfaces. The frontmatter applies `{rounded.sm}` (8px) as the recommended system-consistent value; treat the 0px measurement as a documented gap rather than canon.

## Do's and Don'ts

### Do
- Use **Geist** for every text role. Hierarchy comes from size and weight (600 / 500 / 400), not from family switching.
- Reserve the indigo accent (`{colors.primary}` — #4f43dd) for headline highlights and inline links — apply it as a colored span, like the hero's second line.
- Keep cards flat on white — `{component.card}` ships shadow-none by default.
- When you do elevate, use the purple-tinted micro-shadow (`rgba(79, 67, 221, 0.05)`) — the brand-bled shadow is signature.
- Embed real product dashboards (`{component.product-mockup-card}`) on `{colors.ink-dark}` rather than illustrating the product.
- Use pill CTAs (`{rounded.pill}`): dark deep-indigo for primary, white-outline for secondary.
- Preserve the loosened body tracking (+0.32px) — it's part of the technical voice.

### Don't
- Don't fill primary CTAs with the bright indigo `{colors.primary}` — the button fill is the deep near-black indigo `{colors.ink-deep-purple}`; the bright indigo is a type/link accent.
- Don't add heavy or colored drop shadows beyond the floating-toast level. Default is flat.
- Don't introduce a second typeface. The system is single-family Geist.
- Don't bold display weight past 600.
- Don't scatter dark surfaces — `{colors.ink-dark}` is reserved for product mockups and the single dark CTA band.
- Don't tighten body letter-spacing to 0 — keep the +0.32px technical tracking.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 64→~32px and stays centered; product dashboard scales down below the fold; logo cloud wraps to 2–3 per row; story cards 1-up; pricing tiers 1-up |
| Tablet | 768–1024px | Nav tightens but stays horizontal; logo cloud reduces columns; story cards 2-up |
| Desktop | 1024–1440px | Full top-nav with all dropdown menus; centered hero; logo cloud ~6-up; story-card carousel |
| Wide | > 1440px | Same as desktop with more outer breathing room around the centered content column |

### Touch Targets
- `{component.button-primary}` / `{component.button-secondary}` pills meet comfortable tap height at ~12 × 24 padding on `{typography.body}`.
- `{component.button-icon-circular}` is ~40px diameter — close to but slightly under the 44px ideal; the full-circle silhouette compensates.
- `{component.input}` uses body-scale text with 12 × 16 padding for a tappable field.

### Collapsing Strategy
- Top nav collapses to a hamburger sheet on mobile.
- The centered hero stacks naturally (eyebrow → headline → sub-head → CTA row) at every breakpoint.
- Product dashboard mockups scale proportionally and keep their dark surface intact.
- Story-card rows become a swipeable carousel on narrow widths.

### Image Behavior
- Embedded product dashboards retain native aspect ratios; their containers resize.
- Customer-story imagery crops to `{rounded.lg}` corners at every breakpoint.
- Logo-cloud marks stay grayscale and scale uniformly.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.product-mockup-card}`, `{component.cta-band-dark}`).
2. Variants of an existing component (`-active`, etc.) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Keep the single-family Geist discipline — change size/weight, not typeface.
6. The bright indigo is a type/link accent; the deep near-black indigo is the button fill. Don't swap them.
7. Use the purple-tinted micro-shadow for any elevation; reserve large shadows for floating toasts.

## Known Gaps

- **Section-level vertical spacing** between major bands was not captured as a discrete token — only padding/margin/gap values up to 32px were measured. Large band rhythm is derived from screenshots, not measured.
- **Button padding** (12 × 24) is derived from the dominant spacing tokens, not directly measured — the only measured button props (`radius: 50%, padding: 0px`) correspond to the circular GitHub icon button, not the pill CTAs.
- **Input radius conflict:** the measured `input` radius was 0px, contradicting the otherwise-rounded system. The frontmatter recommends `{rounded.sm}` (8px) for consistency; the 0px measurement is flagged rather than enshrined.
- **Minor radii (10px, 14px)** were measured at low frequency and excluded as incidental rounding.
- **Semantic status colors** (success/warning/error) appear only inside embedded product chrome (run-failure red/yellow dots) and could not be extracted as reliable system tokens.
- **`primary-active` (#332aa6)** is documented as the active/pressed pairing for the indigo primary based on its presence as a darker sibling in the measured palette; the exact interaction state was not captured.
- **Pricing page specifics** (tier counts, featured-tier treatment, toggle controls) were captured at the palette/type level but individual pricing components beyond `{component.pricing-card}` are not fully specified.
- Animation, transition timings, and dropdown-menu open states are out of scope.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/dagster/design-md -->
