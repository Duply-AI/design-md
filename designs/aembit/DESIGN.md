---
version: alpha
name: Aembit-design-analysis
description: "A security-software marketing interface built on a deep indigo-purple hero canvas, bright orange CTAs, and the Be Vietnam Pro typeface used in both an upright and italic display voice. The system pairs near-black-purple ink (#291843) with a warm cream secondary surface (#f5f0ed) and pill-shaped integration tiles, reading as enterprise-confident but energetic — voltage comes from the orange (#ff5417) action color and italic display accents rather than from decoration."

colors:
  primary: "#ff5417"
  ink: "#291843"
  ink-deep: "#190035"
  surface-dark: "#29204c"
  surface-purple: "#45355d"
  surface-navy: "#141b38"
  canvas: "#ffffff"
  cream: "#f5f0ed"
  cream-alt: "#f6f3ef"
  hairline: "#e6e6eb"
  body: "#434960"
  muted: "#69727d"
  neutral-strong: "#333333"
  neutral: "#444444"
  neutral-soft: "#666666"
  near-black: "#222222"
  black: "#000000"
  accent-blue: "#0068a0"
  accent-violet: "#511295"
  accent-maroon: "#841919"
  on-dark: "#ffffff"

typography:
  display-xl:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: 72px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -1px
  heading-lg:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1.08px
  heading-md:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.21
    letterSpacing: -0.28px
  body:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0.3px
  button:
    fontFamily: "Be Vietnam Pro, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.8px

rounded:
  xs: 8px
  sm: 12px
  md: 20px
  lg: 30px
  xl: 36px
  pill: 50px
  pill-xl: 80px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 28px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    padding: 16px 20px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 16px 28px
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 16px 28px
  button-demo:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 16px 28px
  hero-band:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 28px
  integration-pill:
    backgroundColor: "{colors.surface-purple}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 20px
  case-study-card:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 24px
  cta-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-lg}"
    padding: 28px
  feature-tab:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 16px 20px
  feature-tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 16px 20px
  toggle-pill:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
  testimonial-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.md}"
    padding: 28px
  data-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 20px
  announcement-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    padding: 16px 20px
---

## Overview

Aembit's marketing surface is an enterprise-security interface with energy. The hero opens on a deep indigo-purple canvas (`{colors.surface-dark}` — #29204c) carrying a huge upright/italic display headline ("IAM **for Agentic AI**"), then alternates down the page between white (`{colors.canvas}`), warm cream (`{colors.cream}` — #f5f0ed), and bright orange (`{colors.primary}` — #ff5417) bands. The result reads as confident and modern, with the orange action color doing the brand-voltage work against an otherwise serious purple-and-cream palette.

Type runs entirely on **Be Vietnam Pro** — a single geometric humanist family used across every role. The brand voice splits not by family but by style: upright weight 500/600 for primary text and an **italic** display cut for emphasis phrases ("for Agentic AI", "Isn't Enough", "Reinventing Identity Security"). The h1 is large (72px) with tight negative tracking (-1px); body copy is set generously loose (1.75 line-height, +0.3px tracking) for readability in dense security-explainer text.

Component voltage comes from **pill geometry**: integration logos sit in rounded pill tiles (`{rounded.pill}` — 50px) flanking the hero, primary CTAs are full pill buttons, and toggle switchers are pill-wrapped. Cards are softly rounded (`{rounded.md}` — 20px) and shadowless, relying on the band's background contrast for separation.

**Key Characteristics:**
- Deep indigo-purple hero canvas (`{colors.surface-dark}` — #29204c) anchoring the brand; near-black-purple ink (`{colors.ink}` — #291843) for text on light bands.
- Bright orange (`{colors.primary}` — #ff5417) as the singular action / emphasis color — CTAs, the orange feature band, active tabs, and the top announcement bar.
- One typeface, Be Vietnam Pro, across all roles. Emphasis comes from an italic display cut rather than a second family.
- Pill geometry everywhere — integration logo tiles, primary buttons, toggle pills all use `{rounded.pill}` (50px).
- Warm cream secondary surface (`{colors.cream}` — #f5f0ed) for case-study and quote bands, softening the otherwise high-contrast purple/orange palette.
- Softly rounded shadowless cards (`{rounded.md}` — 20px, no shadow) — separation comes from band background contrast, not elevation.
- Loose body rhythm (1.75 line-height, +0.3px letter-spacing) for dense security explainer copy.

## Colors

### Brand & Action
- **Primary** (`{colors.primary}` — #ff5417): The singular action and emphasis color. Primary CTAs ("TALK TO AN ENGINEER", "REQUEST A DEMO"), the orange "IAM for Humans Isn't Enough" feature band, active feature tabs, and the top announcement bar.
- **Ink** (`{colors.ink}` — #291843): The dominant text color on light bands and the dark "GET AN AEMBIT TENANT" button surface. A near-black with a purple cast.
- **Ink Deep** (`{colors.ink-deep}` — #190035) and **Surface Navy** (`{colors.surface-navy}` — #141b38): Deeper purple/navy tones used for darker band transitions and the "How Aembit Accelerates" dark section.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): Default light band floor.
- **Surface Dark** (`{colors.surface-dark}` — #29204c): The indigo-purple hero canvas and testimonial card surface.
- **Surface Purple** (`{colors.surface-purple}` — #45355d): A lighter purple used for integration logo pills floating over the hero canvas.
- **Cream** (`{colors.cream}` — #f5f0ed) and **Cream Alt** (`{colors.cream-alt}` — #f6f3ef): Warm off-white secondary surfaces for case-study and quote bands.
- **Hairline** (`{colors.hairline}` — #e6e6eb): The 1px divider / border tone on light surfaces.

### Text
- **Ink** (`{colors.ink}` — #291843): Headlines and primary text on light bands.
- **Body** (`{colors.body}` — #434960): Default running-text color — a muted indigo-gray.
- **Muted** (`{colors.muted}` — #69727d): Secondary text, captions, fine print.
- **Neutral Strong / Neutral / Neutral Soft** (`{colors.neutral-strong}` — #333333, `{colors.neutral}` — #444444, `{colors.neutral-soft}` — #666666): Mid-gray neutrals used in body and UI text.
- **Near Black / Black** (`{colors.near-black}` — #222222, `{colors.black}` — #000000): Deepest text and logo marks.
- **On Dark** (`{colors.on-dark}` — #ffffff): Text on the purple hero, orange bands, and dark buttons.

### Secondary Accents
- **Accent Blue** (`{colors.accent-blue}` — #0068a0): Appears in integration logo chrome and small UI accents.
- **Accent Violet** (`{colors.accent-violet}` — #511295) and **Accent Maroon** (`{colors.accent-maroon}` — #841919): Low-frequency accents observed in gradient/overlay tints over the hero and dark sections.

## Typography

### Font Family
The system runs entirely on **Be Vietnam Pro** — an open-source geometric humanist sans (available on Google Fonts), so no licensed-font substitution is required. Every role from the 72px hero headline to 16px body uses it. The fallback stack walks `Be Vietnam Pro, sans-serif`.

The voice splits by **style, not family**: upright weight 500/600 for primary text, and an italic cut for emphasis phrases embedded inside headlines ("IAM **for Agentic AI**", "**Isn't Enough**", "**Reinventing Identity Security**"). The italic-within-headline treatment is the brand's signature display device.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 500 | 1.0 | -1px | Hero h1 ("IAM for Agentic AI") |
| `{typography.heading-lg}` | 36px | 600 | 1.1 | -1.08px | Section heads ("How Aembit Accelerates AI Development") |
| `{typography.heading-md}` | 28px | 600 | 1.21 | -0.28px | Sub-section heads, card titles, testimonial quotes (h3 / h4) |
| `{typography.body}` | 16px | 400 | 1.75 | 0.3px | Default running-text, descriptions |
| `{typography.button}` | 16px | 600 | 1.2 | -0.8px | Button labels, nav links, tab labels |

### Principles
Display sizes carry tight negative letter-spacing (h1 -1px, h2 -1.08px) for a dense, confident headline; body copy reverses this with a loose 1.75 line-height and slightly positive +0.3px tracking for legibility in long security-explainer paragraphs. Emphasis is achieved by switching to the italic cut of Be Vietnam Pro, never by introducing a second family. Buttons use the 600 weight with notably tight -0.8px tracking, giving labels a compact, deliberate feel.

### Note on Font Substitutes
Be Vietnam Pro is open-source and ships directly — no substitute needed. If unavailable, **Inter** or **Plus Jakarta Sans** at weights 500/600 are the closest geometric-humanist fallbacks, though both lack Be Vietnam Pro's distinctive italic display character.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 28px.
- **Dominant rhythm:** 20px (`{spacing.lg}`) is by far the most-measured value (124 occurrences) — the system's default gap and internal padding unit. 16px (`{spacing.md}`) is the second-most common (41 occurrences).
- **Card internal padding:** `{spacing.lg}` (20px) for white cards; `{spacing.xxl}` (28px) for testimonial and CTA bands.

### Grid & Container
- **Hero:** Centered single-column headline + sub-head + CTA, flanked by two vertical columns of integration logo pills (left = "Agents & Workloads", right = "Tools & Services").
- **Case-study bands:** 2-up and asymmetric quote + video splits over cream surface.
- **Feature bands:** Left-rail vertical tab list ("Access Control Plane", "MCP Gateway", "No Stored Secrets"…) paired with a content panel.
- **Data table:** Full-width tabular layout inside the orange "IAM for Humans" band.

### Whitespace Philosophy
Aembit alternates full-bleed colored bands (purple hero → white → cream case studies → orange feature band → dark accelerate section) for editorial pacing. Within bands, the 20px base gap keeps content tight and scannable rather than airy — appropriate for a security product that needs to explain dense concepts.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, hero, most cards (card shadow measured as `none`) |
| Band contrast | Full-bleed background color shift | Primary separation device — purple / white / cream / orange / dark bands |
| Focus ring | `rgb(120, 110, 161) 0px 0px 0px 1.8px` | A ~1.8px purple focus ring observed on an interactive element |
| Light ring | `rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px` | A faint hairline ring on a dark-surface element |

The elevation philosophy is **flat with color-block separation**. Cards carry no drop shadow (measured `shadow: none`); the system relies on band background contrast and pill geometry to establish hierarchy. The only measured shadows are thin focus/outline rings, not lift shadows.

### Decorative Depth
- Floating warm gradient orbs (orange/violet) appear in the lower marketing bands as decorative background flourishes over the dark sections.
- Integration logo pills float over the hero canvas with subtle tonal contrast (`{colors.surface-purple}` over `{colors.surface-dark}`) rather than shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 8px | Minimal use — small inline elements |
| `{rounded.sm}` | 12px | Case-study cards, feature tabs (most frequent radius — 18 occurrences) |
| `{rounded.md}` | 20px | Standard content cards (measured card radius), data table container |
| `{rounded.lg}` | 30px | Larger rounded containers |
| `{rounded.xl}` | 36px | Extra-large rounded panels |
| `{rounded.pill}` | 50px | Primary buttons, integration logo pills, toggle pills |
| `{rounded.pill-xl}` | 80px | Largest pill / capsule containers |

### Photography Geometry
Video thumbnails and case-study media sit in softly rounded frames (`{rounded.sm}`–`{rounded.md}`). Integration partner logos render inside `{rounded.pill}` capsule tiles. Decorative gradient orbs are perfect circles.

## Components

### Navigation

**`top-nav`** — White nav bar with the Aembit wordmark + orange mark at left, primary menu (Platform, Solutions, Resources, Docs, Pricing) center, and a right-side cluster pairing a dark "GET AN AEMBIT TENANT" (`{component.button-dark}`) and an orange "TALK TO AN ENGINEER" (`{component.button-primary}`). Menu items in `{typography.button}`.

**`announcement-bar`** — Full-width orange (`{colors.primary}`) bar pinned above the nav carrying a single underlined promotional link in `{colors.on-dark}` with a close affordance at right.

**`nav-link`** — Transparent inline nav item in `{colors.ink}`, type `{typography.button}`.

### Buttons

**`button-primary`** — The signature orange CTA. Background `{colors.primary}` (#ff5417), text `{colors.on-dark}`, type `{typography.button}`, full pill `{rounded.pill}` (50px), padding 16px × 28px.

**`button-dark`** — Dark navy CTA ("GET AN AEMBIT TENANT"). Background `{colors.ink}` (#291843), text `{colors.on-dark}`, same pill radius and padding as primary. (The measured button color #291843 corresponds to this dark variant.)

**`button-demo`** — Hero "REQUEST A DEMO →" pill with trailing arrow. Background `{colors.primary}`, text `{colors.on-dark}`, pill radius, padding 16px × 28px.

### Cards & Containers

**`hero-band`** — Deep indigo-purple (`{colors.surface-dark}` — #29204c) hero carrying an uppercase eyebrow, the 72px display headline with italic accent, sub-head, demo CTA, and flanking integration pill columns. Vertical padding `{spacing.xxl}` (28px) base unit.

**`integration-pill`** — Capsule tiles holding partner logos (LangChain, OpenAI, Anthropic, Snowflake, Vault, Azure…). Background `{colors.surface-purple}` (#45355d), text `{colors.on-dark}`, pill radius `{rounded.pill}` (50px), padding 12px × 20px.

**`card`** — Standard white content card. Background `{colors.canvas}`, rounded `{rounded.md}` (20px), no shadow (measured `none`), padding `{spacing.lg}` (20px).

**`case-study-card`** — Customer-quote / feature card on cream bands ("Secretless Authentication", "Developer Productivity"). Background `{colors.cream}` (#f5f0ed), text `{colors.ink}`, rounded `{rounded.sm}` (12px), padding `{spacing.xl}` (24px).

**`testimonial-card`** — Large quote panel on the purple surface ("Agentic AI was driving our search…"). Background `{colors.surface-dark}`, text `{colors.on-dark}`, type `{typography.heading-md}`, rounded `{rounded.md}`, padding `{spacing.xxl}` (28px). Carries an avatar + name + role row.

**`data-table`** — Tabular access-policy matrix shown inside the orange feature band (Client Workload / Identity Type / Trust Provider / Access Type…). Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}`, padding `{spacing.lg}` (20px).

### Bands & Tabs

**`cta-band`** — Full-bleed orange band ("IAM for Humans Isn't Enough for AI and Software Workloads"). Background `{colors.primary}`, text `{colors.on-dark}`, headline in `{typography.heading-lg}`, with an inline "SEE IT WORKS →" link and the embedded `{component.data-table}`.

**`feature-tab`** + **`feature-tab-active`** — Vertical left-rail tabs in the "Proactive Access Management" band. Inactive: transparent background, `{colors.ink}` text. Active: `{colors.primary}` background, `{colors.on-dark}` text. Type `{typography.button}`, rounded `{rounded.sm}`, padding 16px × 20px.

**`toggle-pill`** — Pill-wrapped segmented toggle ("IT Engineering" / "Security"). Background `{colors.surface-dark}`, text `{colors.on-dark}`, rounded `{rounded.pill}`, padding 12px × 20px.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#ff5417) for action and emphasis — CTAs, active tabs, the orange feature band, announcement bar. It is the one voltage color.
- Use the italic cut of Be Vietnam Pro for emphasis phrases inside headlines. This italic-within-headline device is the brand's signature.
- Set body copy loose (1.75 line-height, +0.3px tracking) and headlines tight (-1px to -1.08px) — the rhythm contrast is intentional.
- Use pill geometry (`{rounded.pill}` — 50px) for buttons, integration tiles, and toggles. Keep content cards at `{rounded.md}` (20px).
- Separate sections with full-bleed color bands (purple → white → cream → orange → dark), not shadows.
- Keep the warm cream surfaces (`{colors.cream}`) for quote and case-study moments — they soften the high-contrast purple/orange palette.

### Don't
- Don't add drop shadows to cards — the system is flat (measured `shadow: none`); separation comes from band contrast.
- Don't introduce a second typeface. Be Vietnam Pro covers every role; emphasis comes from weight and italic style.
- Don't use orange for body text or large surfaces beyond the designated CTA band — it must stay a punctuation color.
- Don't mix radii arbitrarily — buttons and tiles are pills, cards are 20px, tabs/case-studies are 12px.
- Don't document hover state styling beyond default + active/pressed.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Nav collapses to a compact bar; hero h1 scales down from 72px; integration pill columns stack/wrap below the headline; feature tab rail stacks above its content panel; data table scrolls horizontally |
| Tablet | 768–1024px | Nav tightens; hero retains flanking pills in narrower columns; case-study cards reduce to 1-up where needed |
| Desktop | 1024–1440px | Full hero with both integration pill columns; left-rail feature tabs beside content; full-width data table |
| Wide | > 1440px | Same as desktop with additional outer margin; centered content |

### Touch Targets
- `{component.button-primary}` and `{component.button-dark}` carry 16px × 28px padding, comfortably exceeding 44px minimum height.
- `{component.feature-tab}` rows use 16px × 20px padding for full-width tap targets.
- `{component.toggle-pill}` segments at 12px × 20px meet target size within the pill wrapper.

### Collapsing Strategy
- The hero's three-zone layout (left pills / center headline / right pills) collapses to a single stacked column on mobile.
- The vertical feature-tab rail stacks above its content panel on small screens.
- The orange-band data table becomes horizontally scrollable rather than reflowing its columns.
- Cream case-study cards reduce from multi-up grids to single-column.

### Image Behavior
- Video thumbnails retain native aspect ratio inside their rounded frames.
- Integration logo pills keep fixed capsule height and wrap to multiple rows on narrow viewports.
- Decorative gradient orbs scale/crop with their band.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.button-primary}`, `{component.feature-tab-active}`).
2. Variants of an existing component (`-active`, `-dark`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Headlines stay Be Vietnam Pro with tight negative tracking; emphasis switches to the italic cut, never a second family.
6. Orange (`{colors.primary}`) is the only voltage color — apply sparingly to actions and emphasis.
7. Keep cards flat and shadowless; lean on band-color contrast for hierarchy.

## Known Gaps

- The measured `button-primary` component returned `radius: 0px, padding: 0px, color: #291843` — this reflects a captured text/link element rather than the rendered pill CTA. Button specs are documented from screenshot ground-truth using measured spacing (16/20/28px) and the pill radius (50px); exact button height was not measured.
- The uppercase eyebrow label style ("IDENTITY & ACCESS MANAGEMENT", "FEATURES") was not captured as a distinct typography role — its size, weight, and letter-spacing are not extracted.
- Nav-link sizing is documented from the measured `button` role as the closest match; a dedicated nav-link type measurement was not captured.
- Footer styling was not captured in the analysis; its colors, columns, and spacing are unknown.
- Pricing-page and product-overview component specifics (pricing tier cards, product feature modules) were captured as pages but no per-component tokens were extracted for them.
- The two measured shadows are thin focus/outline rings, not card-lift shadows; full focus-state and form-validation styling were not extracted.
- Secondary accent hexes (`{colors.accent-violet}`, `{colors.accent-maroon}`, `{colors.accent-blue}`) appear at low frequency, likely from gradient overlays and partner-logo chrome; their precise application roles are inferred.
- Animation and transition timings (logo carousels, tab switching, orb motion) are out of scope.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/aembit/design-md -->
