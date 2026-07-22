---
version: alpha
name: Duolingo-design-analysis
description: "A playful, high-energy gamified-learning interface anchored on Duolingo's signature vivid-green brand color (#00b086), paired with a white canvas and bold, chunky, rounded UI chrome. The automated measurement pass captured only a single color token from this page, so nearly every other structural value documented below is a derived estimate from visual inspection of the reference screenshots rather than an extracted measurement — see Known Gaps for the full list of caveats before treating this as production-ready."

colors:
  primary: "#00b086"
  primary-active: "#00966f"
  canvas: "#ffffff"
  ink: "#3c3c3c"
  muted: "#777777"
  hairline: "#e5e5e5"
  on-primary: "#ffffff"

typography:
  display-lg:
    fontFamily: "Nunito, sans-serif"
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: 0
  title-md:
    fontFamily: "Nunito, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  body-md:
    fontFamily: "Nunito, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "Nunito, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.3px

rounded:
  sm: 8px
  md: 12px
  lg: 16px
  pill: 9999px

spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 16px 32px
    height: 56px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 16px 32px
    height: 56px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    height: 64px
  card-surface:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
---

## Overview

Duolingo's landing page is built around a single, unmistakable brand signal: a saturated green (`{colors.primary}` — #00b086), the one value this analysis pass actually measured (captured via `css/computed:frequency`, frequency 1). Everything else in this document — typography, spacing, radius, shadows, and component structure — comes from visual inspection of the reference screenshots rather than the extraction pipeline, because `analysis.json` returned empty arrays for `typography`, `spacing`, `radius`, `shadows`, and `components`. Every non-measured value below is explicitly marked **derived** and justified inline, per the faithfulness rule; nothing here should be treated as pixel-accurate until a fuller measurement pass is run.

At a visual level, the brand reads as friendly, rounded, and confident: a white canvas, one dominant green used for primary actions and brand marks, dark gray body text, and large, chunky, heavily-rounded button shapes. This is consistent with Duolingo's known gamified-education positioning, but because only one hex value was actually captured, the system described here should be read as a **provisional scaffold** — accurate on the one measured token, directional (derived) everywhere else.

**Key Characteristics:**
- The only hard-measured token is `{colors.primary}` (#00b086) — Duolingo's signature green, appearing at the CSS-computed level. Treated here as the primary brand/action color since it visually anchors CTAs and header treatment on the captured landing page.
- All neutral colors (canvas, ink, muted, hairline, on-primary) are derived from screenshot inspection — a white page background with dark-gray body copy and white text on green buttons is the visually obvious pattern, but exact hex values were not extracted.
- Typography family, sizes, weights, and line-heights are entirely derived — the analysis pipeline returned zero typography tokens. A rounded, bold, geometric sans-serif look is visually apparent; the open-source family "Nunito" is documented as a substitute approximation (see Typography section).
- Border radius, spacing, and shadow values are entirely derived — no radius/spacing/shadow tokens were present in `analysis.json`. Values below are directional placeholders only, flagged accordingly.
- No component structure was measured (`components: []` in the source file). The component list below is a minimal derived scaffold covering the button and nav elements visible in the screenshots, not an extracted inventory.

## Colors

### Brand
- **Primary** (`{colors.primary}` — #00b086): The one measured token in this analysis, captured at CSS-computed frequency 1 with role `accent` in the source data. It is documented here as `primary` because visually it functions as Duolingo's dominant brand/action color on the captured landing page — reused across the CTA buttons and header brand marks. This is the only color value in this document with direct measurement backing.
- **Primary Active** (`{colors.primary-active}` — #00966f): A darker press-state derived from the measured primary by visually approximating the shade used on Duolingo's characteristic "pressed" 3D button state observed in the screenshots. No exact hex was extracted for this state — treat as derived.

### Neutral
- **Canvas** (`{colors.canvas}` — #ffffff): The page background observed in the screenshots — derived, not extracted; Duolingo's landing sections read as a plain white floor.
- **Ink** (`{colors.ink}` — #3c3c3c): Approximate dark-gray body/heading text color — derived from screenshot contrast, not a measured value.
- **Muted** (`{colors.muted}` — #777777): Approximate secondary text tone (sub-headlines, captions) — derived.
- **Hairline** (`{colors.hairline}` — #e5e5e5): Approximate light divider/border tone visible between sections — derived.
- **On Primary** (`{colors.on-primary}` — #ffffff): White text/iconography sitting on the green primary buttons — derived from visible contrast in screenshots.

### Note on Secondary Accents
Duolingo's product surfaces are known for a broader gamification palette (blues, reds, golds) beyond the single green captured here. Because none of those hues were present in `analysis.json` and this analysis only covers the landing page, no `accent-<hue>` roles are declared — per the role vocabulary rule, an absent role is the correct outcome when a value isn't measured. Do not assume a wider palette exists until it is actually captured.

## Typography

### Font Family
No typography was captured by the measurement pipeline (`typography: []`). Visual inspection of the reference screenshots shows a bold, rounded, geometric sans-serif voice on headlines and a lighter-weight version of the same family in body copy — consistent with Duolingo's known brand typeface family, which is not open-source. Because no licensed-font flag was present in `fonts_licensed` (the array was empty), this document does not assert a specific proprietary name; instead, **Nunito** is documented as an open-source substitute that visually approximates the rounded, high-x-height, heavy-weight display character seen in the screenshots — this substitution is derived, not confirmed.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-lg}` | 40px | 800 | 1.15 | 0 | Hero headline — derived from screenshot proportion, not measured |
| `{typography.title-md}` | 20px | 700 | 1.3 | 0 | Section sub-heads and card titles — derived |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Running body copy — derived |
| `{typography.button}` | 16px | 700 | 1.0 | 0.3px | Button labels — derived from the bold, slightly-spaced button text visible in screenshots |

### Principles
The visible type voice is heavy, rounded, and friendly — bold weights dominate headlines and buttons, with a lighter body weight for supporting copy. Because none of these values were extracted numerically, treat the table above as a directional starting point (derived) rather than a spec to build pixel-perfect components from.

### Note on Font Substitutes
If Duolingo's actual production typeface differs from the visual approximation used here, **Nunito** (weight 800 for display, 400/700 for body/button) or **Baloo 2** are reasonable open-source rounded-sans alternatives that preserve the friendly, high-weight brand character observed in the screenshots.

## Layout

### Spacing System
No spacing tokens were present in `analysis.json` (`spacing: []`). The scale below is a derived, conventional 8px-based rhythm inferred from general proportion in the screenshots, not from extracted measurements:
- `{spacing.xs}` 8px (derived) · `{spacing.sm}` 16px (derived) · `{spacing.md}` 24px (derived) · `{spacing.lg}` 32px (derived) · `{spacing.section}` 80px (derived) — approximate vertical rhythm between major landing-page bands.

### Grid & Container
Screenshot inspection suggests a centered, single-column editorial layout on the landing hero with a large illustrated/mascot area alongside headline and CTA — but exact container widths and grid-column counts were not measured and are not asserted here.

### Whitespace Philosophy
The page reads as spacious and uncluttered around its hero CTA, consistent with a conversion-focused landing page, but this is a qualitative screenshot observation (derived), not a measured spacing audit.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Base page background (derived observation) |
| Pressed-button depth | A solid lower-edge color band beneath the primary button, suggesting Duolingo's known "3D pressed key" button treatment | `{component.button-primary}` (derived from screenshot silhouette; no shadow value was measured) |

No shadow tokens were present in `analysis.json` (`shadows: []`). The pressed-button depth effect described above is a qualitative, derived observation of button silhouette in the screenshots, not an extracted shadow/elevation value. Do not implement exact blur/offset/alpha values from this document — they are not known.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 8px (derived) | Small inline elements |
| `{rounded.md}` | 12px (derived) | Cards |
| `{rounded.lg}` | 16px (derived) | Primary/secondary buttons — screenshots show noticeably rounded, chunky button corners |
| `{rounded.pill}` | 9999px (derived) | Reserved for pill-shaped tags/badges if present; not confirmed on this page |

No radius tokens were present in `analysis.json` (`radius: []`). The values above are derived approximations based on the visibly rounded corner treatment on buttons and cards in the screenshots — treat as directional, not exact.

## Components

No component structure was captured by the measurement pipeline (`components: []`). The entries below are a minimal, derived scaffold reflecting only what is visually confirmable in the reference screenshots.

**`top-nav`** — A white (`{colors.canvas}`, derived) navigation bar at the top of the page, approximately 64px tall (derived), carrying the brand mark and primary sign-up/login actions in `{typography.body-md}`.

**`button-primary`** — The dominant CTA style, background `{colors.primary}` (#00b086, the one measured token), text `{colors.on-primary}`, type `{typography.button}` (derived), rounded `{rounded.lg}` (derived), padding and height derived from screenshot proportion (16px × 32px padding, 56px height). This is the highest-confidence component in this document because its background color is the single measured value in the source data.

**`button-primary-active`** — Pressed state, background shifts to `{colors.primary-active}` (derived darker shade), consistent with the "pressed key" silhouette visible in screenshots.

**`button-secondary`** — A white-background, green-text outline variant observed alongside the primary CTA in the screenshots — background `{colors.canvas}`, text `{colors.primary}`, same derived padding/height/radius as the primary button.

**`card-surface`** — A generic white content-card treatment for supporting sections, background `{colors.canvas}`, text `{colors.ink}`, rounded `{rounded.md}`, padding 24px (derived). No specific card component was distinguishable enough in the available data to document further variants.

## Do's and Don'ts

### Do
- Treat `{colors.primary}` (#00b086) as the one high-confidence token in this document — it is safe to reuse for primary CTAs and brand marks.
- Clearly label every other value in an implementation as provisional/derived until a full measurement pass captures real typography, spacing, radius, and shadow tokens.
- Keep primary buttons large, rounded, and high-contrast (white text on green) — consistent with the derived screenshot observation.
- Re-run the analysis pipeline against the live site to fill the empty `typography`, `spacing`, `radius`, `shadows`, and `components` arrays before treating this as a production spec.

### Don't
- Don't invent additional brand hues (blue/red/gold accents commonly associated with Duolingo's product) as `accent-<hue>` tokens — none were measured on this page, so none are declared.
- Don't treat the derived font family (Nunito) as confirmed production typography — it is a visual substitute, not an extracted value.
- Don't build pixel-exact shadow, radius, or spacing implementations from this document — those scales are directional derivations only.
- Don't assume the single captured page (landing) represents the full site's component inventory; no in-app/product-surface data was captured at all.

## Responsive Behavior

No responsive/breakpoint data was present in `analysis.json`. Any breakpoint behavior implied by the screenshots (e.g., nav collapsing, hero stacking) is not documented here because it was not verifiable from the available single-viewport capture. This entire section is a **known gap** — see below.

## Iteration Guide

1. Prioritize re-running the measurement pipeline on `duolingo.com` to populate the currently-empty `typography`, `spacing`, `radius`, `shadows`, and `components` arrays — this document cannot mature past a provisional scaffold without that data.
2. Once additional colors are measured, check whether Duolingo's known multi-hue gamification palette should be documented as `accent-<hue>` roles — only add them when actual hex values are captured, not from assumption.
3. Confirm the actual production typeface (proprietary vs. licensed) so the correct open-source substitute can be documented per the licensed-typeface rule, if applicable.
4. Reference component YAML keys directly (`{component.button-primary}`) once real component data exists; do not expand the current minimal scaffold without new measurements.
5. Keep the single measured value (`{colors.primary}`) stable across iterations — it is the one anchor point with real evidentiary support.

## Known Gaps

- `typography`, `spacing`, `radius`, `shadows`, and `components` were all empty arrays in `analysis.json` — none of the values presented in those sections above are measured; all are derived from qualitative screenshot inspection and are flagged as such throughout this document.
- Only one color was measured (`#00b086`, role `accent`, frequency 1, source `css/computed:frequency`). All other colors (canvas, ink, muted, hairline, on-primary, primary-active) are derived approximations, not extracted values.
- `fonts_licensed` was empty, so no licensed-typeface substitution was formally triggered by the pipeline; however, the actual production typeface was not identified at all, so the "Nunito" reference in the Typography section is a visual best-guess substitute, not a confirmed licensed-font replacement.
- Only the `landing` page was captured (`captured_pages: ["landing"]`) — no in-app/product UI, no pricing, no footer, no responsive breakpoints were analyzed.
- No shadow/elevation values, exact button padding/height, or grid/container widths were measured; all such figures in this document are illustrative placeholders pending a full extraction pass.
- No hover/hairline/border-width data was captured; border treatments mentioned above are inferred from screenshot silhouette only.
- This document should be treated as a low-confidence scaffold and revisited once a complete `analysis.json` (with populated typography, spacing, radius, shadows, and components arrays) is available.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/duolingo/design-md -->
