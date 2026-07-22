---
version: alpha
name: Memotron-design-analysis
description: A soft, paper-calm marketing surface for a personal-knowledge-management super-app, built on a near-white canvas with charcoal (#333333) ink and a single rounded geometric typeface (Sen) used for everything from the oversized hero headline to button labels. The system reads as quiet, friendly utility software — generous centered whitespace, dark pill-shaped CTAs, a warm amber accent scale for highlights, and product screenshots floated on a soft-gray media frame. Brand voltage comes from the rounded Sen wordmark voice and a hand-drawn coral/pastel illustration backing the product mockups rather than from saturated UI color.

colors:
  primary: "#333333"
  ink: "#333333"
  body: "#333333"
  on-primary: "#545454"
  muted: "#808080"
  muted-soft: "#9ca3af"
  canvas: "#ffffff"
  surface-soft: "#fafafa"
  black: "#000000"
  hairline: "#e5e7eb"
  hairline-strong: "#d4d4d4"
  accent-blue: "#2c70dd"
  accent-green: "#24b26d"
  accent-gold: "#eab308"
  amber-bg: "#fffbeb"
  amber-soft: "#fef3c7"
  amber-100: "#fde68a"
  amber-200: "#fcd34d"
  amber-300: "#fbbf24"
  amber-500: "#f59e0b"
  amber-600: "#d97706"
  amber-700: "#b45309"

typography:
  heading-xl:
    fontFamily: "Sen, sans-serif"
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: normal
  heading-sm:
    fontFamily: "Sen, sans-serif"
    fontSize: 18.79px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: normal
  body:
    fontFamily: "Sen, sans-serif"
    fontSize: 21.93px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
  button:
    fontFamily: "Sen, sans-serif"
    fontSize: 16.7px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: normal

rounded:
  sm: 6px
  md: 13px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 13px
  md: 17px
  lg: 25px
  xl: 33px
  xxl: 50px
  section: 84px

components:
  top-nav:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    padding: 17px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  nav-cta-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 16.7px
  icon-button-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 16.7px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-xl}"
    padding: 84px
  hero-subtext:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  hero-caption:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.button}"
  media-frame:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 25px
  card:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.pill}"
  amber-highlight:
    backgroundColor: "{colors.amber-soft}"
    textColor: "{colors.amber-700}"
    rounded: "{rounded.sm}"
---

## Overview

Memotron's marketing surface is a quiet, paper-calm interface for a personal-knowledge-management "super app." The page floor is white (`{colors.canvas}` — #ffffff) with a barely-there soft-gray (`{colors.surface-soft}` — #fafafa) used on the nav strip and the media frame holding product screenshots. All text sits in a single charcoal ink (`{colors.ink}` — #333333) rather than pure black, which keeps the page feeling soft and editorial. The composition is centered and generous: an oversized hero headline, a single supporting line of body copy, one dark pill CTA, and a fine-print availability caption — then a large product-mockup media frame below.

The type voice is unusually unified: the entire site runs on **Sen**, a rounded open-source geometric sans. The hero wordmark, headings, body copy, and button labels are all Sen — there is no secondary typeface. Sen at weight 500 gives the 44px hero heads a friendly, slightly soft-cornered character; weight 400 carries the larger-than-usual 21.93px body copy, which reinforces the calm, readable, reading-app feel.

Brand voltage is intentionally low-saturation. Primary action is a near-black charcoal pill (`{colors.primary}` — #333333), not a colored CTA. Color appears in two restrained places: a small set of functional accents (`{colors.accent-blue}` #2c70dd, `{colors.accent-green}` #24b26d, `{colors.accent-gold}` #eab308) seen inside product chrome, and a full warm **amber scale** (#fffbeb → #b45309) that reads as the system's highlight/annotation palette. The hand-drawn coral and pastel line illustration behind the device mockups supplies the only real visual warmth.

**Key Characteristics:**
- Near-white canvas (`{colors.canvas}`) with charcoal ink (`{colors.ink}` — #333333) — no pure-black body text.
- Single typeface: **Sen** across headlines, body, and buttons. Friendly rounded geometric character at every size.
- Dark charcoal pill CTAs (`{colors.primary}`, `{rounded.pill}`) — the action layer is monochrome, never colored.
- Oversized 21.93px body copy (`{typography.body}`) — larger than typical marketing body, reinforcing the reading-app voice.
- Soft-gray media frame (`{colors.surface-soft}`, `{rounded.md}` 13px) holding floated device mockups over a hand-drawn pastel illustration.
- A warm amber accent scale (`{colors.amber-bg}` through `{colors.amber-700}`) used for highlights/annotations rather than CTAs.
- Flat depth system — no measured shadows. Hierarchy comes from surface tone and whitespace, not elevation.
- Two radius personalities: `{rounded.md}` (13px) for content frames, `{rounded.pill}`/`{rounded.full}` (9999px) for buttons, the wordmark mark, and the circular icon button.

## Colors

### Brand & Action
- **Primary** (`{colors.primary}` — #333333): The dominant action color — the dark pill "Download for Mac" and "Go to web app" CTAs. Same charcoal as ink; the system deliberately keeps the action layer monochrome.
- **On Primary** (`{colors.on-primary}` — #545454): Measured button label color. See Known Gaps — the rendered CTA label reads as white over the dark pill, so this measured value likely captured a secondary state.

### Accents (functional, sparse)
- **Accent Blue** (`{colors.accent-blue}` — #2c70dd): Appears inside product UI fragments (selected states, links). Not used on marketing CTAs.
- **Accent Green** (`{colors.accent-green}` — #24b26d): Status / success accent seen inside product chrome (the small green pill in the mockup).
- **Accent Gold** (`{colors.accent-gold}` — #eab308): A single saturated gold accent, distinct from the amber scale below.

### Amber Highlight Scale
A full warm amber ramp is present in the measured palette and reads as a highlight / annotation set:
- **Amber BG** (`{colors.amber-bg}` — #fffbeb), **Amber Soft** (`{colors.amber-soft}` — #fef3c7), **Amber 100** (`{colors.amber-100}` — #fde68a), **Amber 200** (`{colors.amber-200}` — #fcd34d), **Amber 300** (`{colors.amber-300}` — #fbbf24), **Amber 500** (`{colors.amber-500}` — #f59e0b), **Amber 600** (`{colors.amber-600}` — #d97706), **Amber 700** (`{colors.amber-700}` — #b45309).
- Use the lightest tones as highlight fills and the darkest (#b45309) as readable text on those fills.

### Text
- **Ink / Body** (`{colors.ink}` / `{colors.body}` — #333333): All headlines and running text.
- **Muted** (`{colors.muted}` — #808080): Secondary text.
- **Muted Soft** (`{colors.muted-soft}` — #9ca3af): Tertiary text — fine-print captions like "Available as web, chrome extension, iOS and macOS apps."

### Surface & Line
- **Canvas** (`{colors.canvas}` — #ffffff): Default page floor.
- **Surface Soft** (`{colors.surface-soft}` — #fafafa): Nav strip and media-frame background.
- **Black** (`{colors.black}` — #000000): Reserved utility — icon glyphs, the play-button circle in the media frame.
- **Hairline** (`{colors.hairline}` — #e5e7eb) and **Hairline Strong** (`{colors.hairline-strong}` — #d4d4d4): Fine dividers and borders.

## Typography

### Font Family
The system runs entirely on **Sen** — an open-source, rounded geometric sans-serif (available on Google Fonts under the SIL Open Font License). There is no second typeface; Sen carries the wordmark, headings, body, and buttons. No licensed/custom faces were flagged (`fonts_licensed` is empty), so Sen ships as-is with a `sans-serif` fallback.

The voice is set by Sen's soft corners and slightly geometric construction: friendly, calm, and legible at large body sizes. Headings use weight 500–600; body uses 400.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.heading-xl}` | 44px | 500 | 1.5 | normal | Section heads (`h2`) — Sen medium |
| `{typography.heading-sm}` | 18.79px | 600 | 1.5 | normal | Sub-heads / small titles (`h3`) — Sen semibold |
| `{typography.body}` | 21.93px | 400 | 1.5 | normal | Default running text and hero sub-line |
| `{typography.button}` | 16.7px | 400 | 1.25 | normal | Button labels and nav links |

### Principles
Sen is the entire voice — keep headlines and body in the same family and lean on weight and size for hierarchy rather than introducing a second typeface. Body copy intentionally runs large (≈22px) for a comfortable reading-app feel; don't shrink it to typical marketing-body sizes. Headlines stay at weight 500 (medium), not bold — Sen's friendliness depends on the lighter weight.

### Note on Font Substitutes
Sen is open-source and ships directly. If unavailable, **Nunito Sans** or **Quicksand** preserve the rounded-geometric character; **Inter** is a flatter humanist fallback that loses Sen's soft corners.

## Layout

### Spacing System
- **Base rhythm:** roughly a 4px-derived but irregular scale (the measured values cluster at 4/8/13/17/25/33/50/84px).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 13px · `{spacing.md}` 17px · `{spacing.lg}` 25px · `{spacing.xl}` 33px · `{spacing.xxl}` 50px · `{spacing.section}` 84px.
- **Section padding:** `{spacing.section}` (84px) is the dominant large vertical step between major bands.
- **Component padding:** `{spacing.lg}` (25px) is the most frequent measured spacing value and serves as the default internal padding for the media frame and content blocks.

### Grid & Container
- **Composition:** centered single-column marketing layout — headline, sub-line, CTA, caption, then a full-width media frame.
- **Content alignment:** hero content is center-aligned within a constrained column; the media frame spans wider beneath it.
- Multi-column grids were not measured on the captured pages — see Known Gaps.

### Whitespace Philosophy
Memotron leans on whitespace as its primary structuring tool. The hero is mostly empty space with a single centered message, and the only visual weight is the dark CTA pill and the product media frame. The effect is calm and unhurried — appropriate for a "memory atlas" reading/knowledge app.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | The entire system — no shadows were measured (`shadows: []`) |
| Surface tone | `{colors.surface-soft}` fill | Nav strip and media frame separate from canvas by tone alone |
| Illustration depth | Hand-drawn pastel line art | The coral/pastel illustration behind the device mockups provides visual depth without UI shadow |

Depth is communicated through surface tone and the decorative illustration, not elevation. No drop shadows, no glass, no neumorphism were captured. If elevation is ever added, keep it extremely soft to match the paper-calm voice.

### Decorative Depth
- The media frame floats laptop, desktop, and phone mockups over a hand-drawn coral and pastel line illustration — this provides the page's only sense of layering and warmth.
- The circular play button (`{colors.black}` fill) centered on the media frame is the one high-contrast focal element.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 6px | Small inline elements (e.g., amber highlight chips) |
| `{rounded.md}` | 13px | Content frames — the media/mockup frame (the dominant measured radius) |
| `{rounded.pill}` | 9999px | CTA buttons (the dark "Download" / "Go to web app" pills) |
| `{rounded.full}` | 9999px | The circular icon button and the round logo mark |

### Geometry Notes
The system has a clear two-tier radius personality: gently rounded 13px frames for content, fully rounded pills for every interactive button. The brand mark itself is a circle. Device mockups inside the media frame retain their native product chrome and corner radii.

## Components

### Navigation

**`top-nav`** — Light nav strip on `{colors.surface-soft}` running the full width. Left: the round logo mark + "Memotron" wordmark in Sen. Center: text nav links (Resources ▾, Pricing, Compare, Extension, Discord) in `{typography.button}` at `{colors.ink}`. Right: a circular icon button and the dark `{component.nav-cta-pill}`.

**`nav-link`** — Inline text nav item, transparent background, `{colors.ink}` text, `{typography.button}`.

**`nav-cta-pill`** — The "Go to web app" pill at the top-right. Background `{colors.primary}` (#333333), label `{colors.canvas}`, fully rounded `{rounded.pill}`, padding ~16.7px. The same pill silhouette as the hero CTA.

**`icon-button-circular`** — Small round icon button (the GitHub/extension glyph) at the nav right. Background `{colors.canvas}`, `{colors.ink}` glyph, hairline outline, `{rounded.full}`.

### Buttons

**`button-primary`** — The signature CTA ("Download for Mac"). Background `{colors.primary}` (#333333), label in `{typography.button}` (Sen 16.7px), padding ~16.7px, fully rounded `{rounded.pill}`. Includes a leading platform glyph (Apple logo) inside the pill. Label color is documented as `{colors.on-primary}` per measurement, though it renders light on the dark pill (see Known Gaps).

### Hero & Content

**`hero-band`** — Centered hero on `{colors.canvas}`. Carries the oversized headline ("Your memory atlas"), a single `{component.hero-subtext}` line, the `{component.button-primary}`, and a `{component.hero-caption}`. Generous vertical padding around `{spacing.section}` (84px).

**`hero-subtext`** — The supporting line ("A thoughtfully crafted super app for your personal knowledge management.") in `{typography.body}` at `{colors.ink}`.

**`hero-caption`** — Fine-print availability line in `{typography.button}` at `{colors.muted}` ("Available as web, chrome extension, iOS and macOS apps.").

**`media-frame`** — The large soft-gray panel holding the device mockups and the centered play button. Background `{colors.surface-soft}`, rounded `{rounded.md}` (13px), internal padding ~`{spacing.lg}` (25px). Contains the hand-drawn pastel illustration and floated laptop/desktop/phone product screenshots.

**`card`** — A dark, fully-rounded surface element measured at `{colors.primary}` background, `{rounded.pill}`, no shadow. In practice this matches the dark pill-shaped UI tokens (CTA/badge) rather than a rectangular content card — documented here as measured.

### Highlights

**`amber-highlight`** — Highlight/annotation chip drawn from the amber scale. Background `{colors.amber-soft}` (#fef3c7), text `{colors.amber-700}` (#b45309), rounded `{rounded.sm}`. Use the lighter amber tones for fills and the darker for text.

## Do's and Don'ts

### Do
- Keep the action layer monochrome — primary CTAs are the charcoal pill (`{colors.primary}`), not a colored button.
- Run everything in Sen. Use weight and size for hierarchy; the single-typeface discipline is the brand voice.
- Keep body copy large (`{typography.body}` ≈22px). The reading-app feel depends on it.
- Use `{colors.surface-soft}` tone (not shadow) to separate the nav and media frame from the canvas.
- Reserve the amber scale for highlights/annotations; reserve accent blue/green for in-product UI states.
- Use `{rounded.pill}` for buttons and `{rounded.md}` (13px) for content frames — keep the two-tier radius personality consistent.
- Let whitespace and the hand-drawn illustration carry warmth and depth.

### Don't
- Don't introduce drop shadows or glass effects — the measured system is flat.
- Don't add a second typeface; Sen does all roles.
- Don't color the primary CTA — it stays charcoal.
- Don't use pure black (`{colors.black}`) for body text; ink is #333333.
- Don't bold the hero headline beyond weight 500 — Sen medium is the intended headline weight.
- Don't document hover states; the system encodes default and pressed/active only.

## Responsive Behavior

The captured pages were desktop-width only, so responsive rules are inferred from the centered single-column composition.

### Breakpoints

| Name | Width | Key Changes (inferred) |
|---|---|---|
| Mobile | < 768px | Nav likely collapses to a menu; hero headline scales down from 44px; media frame stacks device mockups; CTA pill stays full-rounded |
| Tablet | 768–1024px | Centered column tightens; nav stays inline |
| Desktop | > 1024px | Full nav with all links; wide media frame as captured |

Exact mobile breakpoints, collapse behavior, and scaled type sizes were not measured — see Known Gaps.

### Touch Targets
- `{component.button-primary}` and `{component.nav-cta-pill}` use ~16.7px padding, giving comfortable tap height.
- `{component.icon-button-circular}` is a round target; exact diameter was not measured.

### Image Behavior
- The media-frame illustration and device mockups should scale proportionally; the play button stays centered.

## Iteration Guide

1. Focus on ONE component at a time and reference its YAML key directly (`{component.media-frame}`, `{component.button-primary}`).
2. Variants (`-active`, `-disabled`) belong as separate `components:` entries.
3. Use `{token.refs}` everywhere — never inline hex in components.
4. Document default and pressed states only — never hover.
5. Keep Sen as the only typeface; reach for size and weight before any new family.
6. Keep the action layer monochrome; if color is needed, it belongs in highlights (amber) or in-product UI (blue/green), never on the primary CTA.
7. When emphasis is needed, add whitespace and scale before adding shadow or color.

## Known Gaps

- The oversized hero headline ("Your memory atlas") is visibly larger than the measured `h2` (44px); a distinct `h1`/display size was not captured. The largest measured heading is documented as `heading-xl`.
- The `button-primary` measured radius was `0px`, which contradicts the clearly pill-shaped CTAs in the screenshots; the pill radius (`{rounded.pill}` 9999px, measured elsewhere) is documented per screenshot ground-truth.
- The measured `on-primary` button text color (#545454) reads as a dark gray, but the rendered CTA label appears white over the dark pill — the measurement likely captured a secondary/inactive label state. Treat the on-pill label color as needing confirmation.
- No shadows were measured (`shadows: []`); the system is treated as flat. Any elevation tokens would need re-extraction.
- The `card` component measured a dark `{colors.primary}` background at `{rounded.pill}` — this resembles a pill button/badge more than a rectangular content card; documented as measured but its true role is ambiguous.
- Accent blue/green/gold and the full amber scale were measured but their exact application (in-product UI vs. marketing highlights) is inferred from screenshots, not confirmed per element.
- Pricing page was captured but specific pricing-tier, table, and toggle components were not extracted.
- Grid structure, multi-column layouts, and responsive breakpoints are inferred from a desktop-only capture; mobile/tablet behavior and scaled type sizes are unmeasured.
- Animation, transition, and video-player interaction timings are out of scope.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/memotron/design-md -->
