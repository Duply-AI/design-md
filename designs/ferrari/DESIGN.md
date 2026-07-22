---
version: alpha
name: Ferrari-design-analysis
description: "A partial capture — Ferrari.com returned a CloudFront 403 bot-block instead of rendering the live page, so no font-family, radius, shadow, or component data could be measured. This entry documents only the color and spacing signals that were computed before the block (including the iconic Ferrari red family), and marks every unmeasured section as a derived placeholder pending a successful re-capture."

colors:
  primary: "#da291c"
  primary-bright: "#f13a2c"
  primary-active: "#b01e0a"
  primary-deep: "#9d2211"
  ink: "#000000"
  canvas: "#ffffff"
  surface-dark: "#181818"
  surface-dark-elevated: "#303030"
  surface-soft: "#f7f7f7"
  surface-strong: "#d2d2d2"
  hairline: "#cdcbcb"
  hairline-soft: "#ebebeb"
  muted: "#808080"
  muted-soft: "#969696"
  muted-softer: "#8f8f8f"
  body-gray: "#666666"
  accent-blue: "#4c98b9"
  accent-green: "#03904a"
  accent-yellow: "#fff200"
  accent-yellow-bright: "#f6e500"

typography:
  heading:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  sm: 4px
  md: 8px
  pill: 9999px

spacing:
  xs: 8px
  sm: 13px
  md: 20px
  lg: 21px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 13px 20px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.md}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body}"
  top-nav:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    padding: 8px 20px
---

## Overview

This entry is the product of a **failed capture**, not a fully realized design analysis. The request to ferrari.com was intercepted by CloudFront's bot-protection layer and returned a generic `403 ERROR` block page rather than the live marketing site (see reference screenshots — both captures show the identical CloudFront error page, confirming the block was consistent and not a one-off timeout).

Despite the block, the measurement pipeline recovered a small set of computed color and spacing values — likely pulled from cached CSS/asset responses that loaded before the block resolved. Those values are real and are documented below at full confidence. Everything else (typography, radius, shadows, components) has **zero measured signal** — `typography: []`, `radius: []`, `shadows: []`, `components: []` in the source analysis — and is filled here only with generic, clearly-labeled derived placeholders so the document satisfies the required schema. None of the placeholder values should be treated as representative of Ferrari's actual brand system.

**Key Characteristics (measured only):**
- A dominant near-black ink (`{colors.ink}` — #000000, frequency 14) paired with white canvas (`{colors.canvas}` — #ffffff, frequency 6) — a high-contrast base, consistent with a premium automotive brand.
- Two red accents at equal frequency — `{colors.primary}` (#da291c) and `{colors.primary-bright}` (#f13a2c) — both read as variants of "Ferrari Red," with two darker reds (`{colors.primary-active}` #b01e0a, `{colors.primary-deep}` #9d2211) appearing at lower frequency, plausibly pressed/gradient states.
- A neutral gray scale (#808080, #969696, #8f8f8f, #666666, #cdcbcb, #ebebeb, #d2d2d2, #f7f7f7, #181818, #303030) suggesting a dark-mode-capable surface system, though no component associated with any specific gray was captured.
- Three secondary hues appear at very low frequency — blue (`{colors.accent-blue}` #4c98b9), green (`{colors.accent-green}` #03904a), and yellow (`{colors.accent-yellow}` #fff200 / `{colors.accent-yellow-bright}` #f6e500) — likely status/category chips (e.g., F1 team colors, availability badges) rather than core brand hues.
- Spacing values are sparse and oddly clustered: 8px (×3), 13px, 20px, 21px — too few samples to construct a confident scale.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #da291c, frequency 5): The highest-frequency accent hue and the color most consistent with Ferrari's public brand identity ("Ferrari Red"). Treated as the primary action/brand color pending confirmation from a successful capture.
- **Primary Bright** (`{colors.primary-bright}` — #f13a2c, frequency 5): An equally-frequent red, slightly warmer/brighter than primary. Likely a gradient partner or a secondary red used in imagery overlays — exact usage unconfirmed.
- **Primary Active** (`{colors.primary-active}` — #b01e0a, frequency 3): A darker red, plausible pressed/hover state for the primary red.
- **Primary Deep** (`{colors.primary-deep}` — #9d2211, frequency 3): The darkest red in the sample; likely used in shadow/gradient overlays on hero imagery rather than as a flat UI fill.
- **Accent Blue** (`{colors.accent-blue}` — #4c98b9, frequency 2), **Accent Green** (`{colors.accent-green}` — #03904a, frequency 2), **Accent Yellow** (`{colors.accent-yellow}` — #fff200, frequency 1) and **Accent Yellow Bright** (`{colors.accent-yellow-bright}` — #f6e500, frequency 1): Low-frequency secondary hues, each distinct from primary red. Named per the accent-`<hue>` convention. Likely category tags, status dots, or social/media icons — not confirmed against any specific component.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): Highest-frequency neutral; presumed page floor.
- **Surface Soft** (`{colors.surface-soft}` — #f7f7f7): Light gray, single occurrence — presumed section-background candidate.
- **Surface Strong** (`{colors.surface-strong}` — #d2d2d2): Mid-gray, single occurrence.
- **Surface Dark** (`{colors.surface-dark}` — #181818) and **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #303030): Near-black tones, single occurrence each — consistent with a dark-mode section or footer, unconfirmed.
- **Hairline** (`{colors.hairline}` — #cdcbcb, frequency 2) and **Hairline Soft** (`{colors.hairline-soft}` — #ebebeb, frequency 2): Candidate border/divider tones.

### Text
- **Ink** (`{colors.ink}` — #000000, frequency 14): The single highest-frequency color in the entire sample — almost certainly the default text color.
- **Muted** (`{colors.muted}` — #808080, frequency 4), **Muted Soft** (`{colors.muted-soft}` — #969696), **Muted Softer** (`{colors.muted-softer}` — #8f8f8f), **Body Gray** (`{colors.body-gray}` — #666666): A cluster of mid-grays, each appearing once or a few times — likely secondary/tertiary text tones, but which maps to which text role is unconfirmed.

## Typography

**No typography was measured.** The `typography` array in the source analysis is empty — the CloudFront block page returned no computed font-family, size, weight, or line-height data for the actual Ferrari site (the block page itself renders in the browser's default serif/sans-serif/monospace stack, which is CloudFront's own error-page styling, not Ferrari's brand type, and is therefore excluded from this document entirely).

The `heading`, `body`, and `caption` roles declared in the frontmatter are **derived** — built from a generic system-font stack and conventional size/weight defaults purely to satisfy the required schema shape. Derived: no Ferrari-specific typeface, size, weight, or tracking value should be inferred from these three roles; they carry no brand signal whatsoever.

### Note on Font Substitutes
Because no license flag or family name was captured, no licensed-font substitution guidance applies here (rule 4 is not triggered — there is nothing to substitute for). If a future capture reveals Ferrari uses a custom or licensed display face, that finding should replace the `heading` role entirely rather than extend it.

## Layout

No grid, container width, or section-padding values were captured (no layout-bearing DOM was rendered). The only concrete numbers available are four spacing samples:

- `{spacing.xs}` — 8px (frequency 3, the most repeated spacing value)
- `{spacing.sm}` — 13px (frequency 1)
- `{spacing.md}` — 20px (frequency 1)
- `{spacing.lg}` — 21px (frequency 1)

The near-duplication of 20px/21px is likely a sub-pixel rounding artifact from two different computed elements rather than two intentionally distinct tokens, but per the faithfulness rule both measured values are preserved separately rather than merged/guessed into one.

No max-width, column count, or gutter system can be responsibly stated — this entire area is a Known Gap.

## Elevation & Depth

No shadow values were captured (`shadows: []`). No elevation system — soft, hard, or otherwise — can be documented. Any visual depth cues on the real Ferrari site (likely present, given automotive-brand conventions of glossy CTAs and image-overlay gradients) are unconfirmed and out of scope for this entry.

## Shapes

No radius values were captured (`radius: []`). The `{rounded.sm}` (4px), `{rounded.md}` (8px), and `{rounded.pill}` (9999px) tokens declared in the frontmatter are **derived** — generic small/medium/pill defaults included only so the `button-primary` component reference resolves. Derived: these do not reflect any observed Ferrari corner-radius value; treat them as non-authoritative until a real capture succeeds.

## Components

**No components were captured** (`components: []`). The four component entries in the frontmatter (`button-primary`, `button-primary-active`, `text-link`, `top-nav`) are **derived** minimal placeholders, built only from the measured color and spacing tokens so that every `{colors.*}` reference in this document resolves to something real. Derived: their padding (13px/20px, borrowed from the two measured mid-range spacing samples), background color (`{colors.primary}`), and radius (`{rounded.md}`) are speculative compositions, not observed component styles. No card, form, navigation, or badge pattern from the actual Ferrari site is represented here.

## Do's and Don'ts

### Do
- Treat `{colors.primary}` (#da291c) and its siblings as the most trustworthy finding in this entry — they were measured, they cluster around the same red hue family, and they align with Ferrari's known public brand color.
- Re-run capture with a residential/rotating proxy or a headless browser configuration that passes CloudFront's bot heuristics before trusting this document for anything beyond color reference.
- Use `{colors.ink}` / `{colors.canvas}` as the base text/background pairing — it is the highest-confidence signal in the dataset (frequency 14 and 6 respectively).

### Don't
- Don't use the `heading`, `body`, or `caption` typography roles as a source of truth for Ferrari's actual type system — they are generic system-font placeholders, explicitly not measured.
- Don't treat `button-primary`, `top-nav`, or any other component in this file as verified UI — they are derived scaffolding only.
- Don't assume the gray cluster (#808080, #969696, #8f8f8f, #666666, #d2d2d2, #f7f7f7) maps cleanly to a muted/body/caption text hierarchy — the sample sizes are too small (frequency 1 for most) to establish that hierarchy responsibly.
- Don't ship this entry as a production design token set without a successful re-capture — it should be treated as a diagnostic record of a blocked attempt, not a finished system.

## Responsive Behavior

No breakpoints, touch-target sizes, or responsive collapsing behavior were captured — the CloudFront error page is a single static, non-responsive document with no media queries. This entire section is a Known Gap.

## Iteration Guide

1. Before anything else, re-run the capture pipeline against ferrari.com with a configuration that avoids CloudFront's bot-protection trigger (rotate user-agent, use a real browser context, respect crawl-delay, or capture via an authenticated/allow-listed path).
2. Once a real page renders, replace every `derived` value in this document (typography, rounded, components) — do not merge derived placeholders with newly measured values; they should be fully superseded.
3. Re-validate the color list once real component context exists — right now colors are frequency-ranked with no DOM association, so role assignments (`primary` vs `primary-bright`, muted-vs-muted-soft) are best-guess groupings from hex proximity, not confirmed usage.
4. Expand the spacing scale only from newly measured values — do not interpolate additional steps (e.g., 32px, 48px) without direct measurement.
5. Once components are captured, follow the standard iteration rule: one component per entry, `{token}` references only, default + active/pressed states only, no hover documentation.

## Known Gaps

- **Root cause:** ferrari.com returned a CloudFront `403 ERROR` block page for both reference screenshots — the live site was never actually rendered or measured.
- **Typography:** Completely unmeasured. No font-family, size, weight, line-height, or letter-spacing data exists for the real site. The three roles in this document are generic derived placeholders only.
- **Radius:** Completely unmeasured (`radius: []`). The three rounded tokens are derived placeholders.
- **Shadows / Elevation:** Completely unmeasured (`shadows: []`). No elevation system is documented.
- **Components:** Completely unmeasured (`components: []`). The four components declared here are minimal derived scaffolding to satisfy schema requirements, not observed UI.
- **Layout/Grid:** No container widths, column systems, or section-padding rhythms were captured.
- **Color-to-role mapping confidence:** Colors themselves were measured (real frequency data exists), but which DOM element or component each color belongs to was not — role assignments (primary vs. primary-bright, muted vs. muted-soft, etc.) are inferred from hex proximity and frequency rank only.
- **Responsive behavior:** Entirely unmeasured — the captured page has no responsive breakpoints since it's a static error document.
- **Recommended next step:** Treat this DESIGN.md as provisional. It should be regenerated in full once a successful, non-blocked capture of ferrari.com is obtained.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/ferrari/design-md -->
