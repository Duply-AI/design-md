---
version: alpha
name: AnimeJS-design-analysis
description: A dark, technical animation-engine landing page built on a near-black warm-charcoal canvas with a single red primary signal, condensed DIN-style display type, and a spectrum of code-syntax accent colors that surface inside the animated demos. The system reads as an engineer's tool — minimal chrome, sharp-edged interactive surfaces, large condensed headlines, and a multicolor animated ring as the sole brand spectacle on an otherwise restrained dark surface.

colors:
  primary: "#ff4b4b"
  ink: "#f6f4f2"
  body: "#d5d3d1"
  muted: "#b4b1af"
  muted-soft: "#93908e"
  canvas: "#252423"
  surface: "#2f2e2d"
  surface-raised: "#353433"
  surface-deep: "#2a2928"
  hairline: "#353433"
  syntax-gray: "#abb2bf"
  syntax-orange: "#d19a66"
  syntax-blue: "#61aeee"
  syntax-green: "#98c379"
  accent-mint: "#00ffaa"
  accent-yellow: "#ffcc2a"
  accent-lime: "#8dff55"
  accent-lime-soft: "#b7ff54"
  accent-blue: "#4d9cff"
  accent-cyan: "#05dbe9"
  accent-amber: "#ffa828"

typography:
  display:
    fontFamily: "DIN, Oswald, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 0.865
    letterSpacing: normal
  body:
    fontFamily: "DIN, Oswald, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: normal
  button:
    fontFamily: "DIN, Oswald, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: normal

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 12px
  lg: 20px
  pill: 50px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 28px
  xxl: 40px
  section: 64px
  jumbo: 128px

components:
  button-primary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 0px 12px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 0px 12px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 28px
  input:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 0px 12px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    padding: 16px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    padding: 64px
---

## Overview

AnimeJS's landing page is a developer-tool surface — a warm near-black canvas (`{colors.canvas}` — #252423) carrying one condensed display headline, a single red brand signal (`{colors.primary}` — #ff4b4b), and a single large animated multicolor ring as the page's only spectacle. The interface intentionally recedes so the animation engine itself is the hero: chrome is minimal, surfaces are flat, and the only chromatic energy comes from the spectrum-colored animated ring and code-syntax tints that appear inside the demos.

The type voice is condensed and industrial: a **DIN**-style geometric grotesque at heavy weights (600–700) with extremely tight display line-height (0.865 — derived from the measured h2 metric). The hero headline ("All-in-one animation engine.") stacks in tight near-touching lines, reading as engineered and dense rather than airy.

Color is split into two layers. The **brand layer** is monochrome-plus-red: warm charcoal surfaces, soft off-white ink (`{colors.ink}` — #f6f4f2), and a single red (`{colors.primary}`) for the wordmark accent, sponsor heart, and link cues. The **demo layer** is a full spectrum — `{colors.accent-mint}`, `{colors.accent-lime}`, `{colors.accent-blue}`, `{colors.accent-cyan}`, `{colors.accent-yellow}`, `{colors.accent-amber}` — appearing on the animated ring and as code-syntax tints (`{colors.syntax-orange}`, `{colors.syntax-blue}`, `{colors.syntax-green}`, `{colors.syntax-gray}`). These accents live inside content, never on chrome.

**Key Characteristics:**
- Warm-charcoal dark canvas (`{colors.canvas}` — #252423) with raised surface steps at `{colors.surface}` (#2f2e2d) and `{colors.surface-raised}` (#353433). No pure black; everything is warm near-black.
- Condensed DIN-style display type at weight 700, tight 0.865 line-height — headlines stack densely. Substituted with Oswald here (see Typography).
- A single red brand signal (`{colors.primary}` — #ff4b4b) reserved for the wordmark dot, sponsor heart, and link cues. The system is otherwise monochrome at the chrome layer.
- A full spectrum of accent colors lives only inside the animated ring and code-syntax demos — never on buttons or navigation.
- Sharp-edged primary action: the primary button/code-pill renders at `{rounded.none}` (0px). Cards round to `{rounded.md}` (12px); inputs to `{rounded.sm}` (4px).
- No measured shadows. Elevation is signaled purely by warm surface-step contrast (canvas → surface → surface-raised).
- Spacing rhythm anchors on a 16px base (the most frequent measured value) with a 64px section step.

## Colors

### Brand & Signal
- **Primary** (`{colors.primary}` — #ff4b4b): The single brand-red signal. Appears on the "anime.js" wordmark accent dot, the "Sponsor" heart, and inline link/divider cues (the small red underline after "library to animate"). Measured as the button text color and the page's most-frequent computed foreground. Never used as a fill behind text.

### Surface
- **Canvas** (`{colors.canvas}` — #252423): The default page floor — warm near-black.
- **Surface** (`{colors.surface}` — #2f2e2d): Card backgrounds and raised panels.
- **Surface Raised** (`{colors.surface-raised}` — #353433): Input fields ("npm i animejs" copy field) and higher panels.
- **Surface Deep** (`{colors.surface-deep}` — #2a2928): A slightly-darker-than-canvas tone for recessed dividers.
- **Hairline** (`{colors.hairline}` — #353433): The 1px border tone, sharing the surface-raised value.

### Text
- **Ink** (`{colors.ink}` — #f6f4f2): Headlines and primary text — soft off-white, max-contrast vs canvas.
- **Body** (`{colors.body}` — #d5d3d1): Default running text and sub-headline copy (low-contrast).
- **Muted** (`{colors.muted}` — #b4b1af): Secondary UI text, nav labels, button labels — the most frequent neutral.
- **Muted Soft** (`{colors.muted-soft}` — #93908e): Tertiary text — "Sponsored by", fine-print captions.

### Demo / Syntax Accents
These appear exclusively inside the animated ring and code-syntax demos — never on chrome. They are documented from frequency-measured CSS values:
- **Syntax tints** — `{colors.syntax-gray}` (#abb2bf), `{colors.syntax-orange}` (#d19a66), `{colors.syntax-blue}` (#61aeee), `{colors.syntax-green}` (#98c379) — the One-Dark-style code highlight palette.
- **Ring spectrum** — `{colors.accent-mint}` (#00ffaa), `{colors.accent-yellow}` (#ffcc2a), `{colors.accent-lime}` (#8dff55), `{colors.accent-lime-soft}` (#b7ff54), `{colors.accent-blue}` (#4d9cff), `{colors.accent-cyan}` (#05dbe9), `{colors.accent-amber}` (#ffa828) — the arc colors on the animated brand ring.

## Typography

### Font Family
The system runs **DIN** — a condensed industrial geometric grotesque — across every measured role (display, body, button). There is no secondary family; DIN carries everything from the hero headline to button labels. The weight range runs 600–700, and the brand voice depends on DIN's tall, condensed letterforms paired with very tight line-height.

DIN is a commercially-licensed typeface and should not be assumed shippable. **Oswald** (Google Fonts, condensed grotesque, weights 600/700) is the closest open-source substitute and is set as the fallback in the stack; **Archivo Narrow** at weight 700 is an alternative. The substitution preserves the condensed-industrial proportions and heavy weight that define the AnimeJS voice.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 64px | 700 | 0.865 | normal | Hero headline ("All-in-one animation engine.") and section heads — DIN |
| `{typography.body}` | 20px | 600 | 1.25 | normal | Sub-headline + running copy ("A fast and flexible JavaScript library to animate") — DIN |
| `{typography.button}` | 16px | 700 | 1.5 | normal | Button labels, nav items, code-pill text — DIN |

### Principles
The display line-height is unusually tight (0.865) — headline lines nearly touch, producing the dense, stacked block seen in the hero. Keep display type heavy (700) and condensed; never widen tracking — DIN's voice lives in its tall, narrow forms. Body text steps down only to 20px / weight 600, so even running copy reads with bold confidence rather than light passages.

### Note on Font Substitutes
DIN is licensed. Use **Oswald** weight 700 for display and 600 for body, or **Archivo Narrow** weight 700, as the shipped substitute. Both preserve the condensed silhouette; expect slightly different aperture and terminal shapes from true DIN.

## Layout

### Spacing System
- **Base unit:** the measured rhythm clusters on multiples of 4px, with 16px as the dominant value.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 28px · `{spacing.xxl}` 40px · `{spacing.section}` 64px · `{spacing.jumbo}` 128px.
- **Section padding:** `{spacing.section}` (64px) is the major vertical step between bands.
- **Card internal padding:** `{spacing.xl}` (28px) — the second-most-frequent measured value, used inside panels.
- **Nav / chrome padding:** `{spacing.md}` (16px) — the dominant measured value, used for nav and inline gaps.

### Grid & Container
- **Hero layout:** A two-zone split — left column carries the headline + sub-line + bottom-anchored button row; right zone is dominated by the large animated ring centered in the viewport.
- **Vertical anchoring:** The hero's CTA row (the "npm i animejs" code pill + "Learn more") is bottom-anchored to the viewport, with the sponsor block pinned bottom-right.

### Whitespace Philosophy
AnimeJS uses dark negative space as the primary compositional tool — the animated ring floats in a wide field of warm-charcoal canvas. Chrome is sparse, copy blocks are short and dense, and the page leans on the animation itself rather than dense content grids. The 64px section step and 128px jumbo step create generous breathing room around the single hero spectacle.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Canvas | `{colors.canvas}` (#252423), no shadow | Page floor, hero band, nav |
| Recessed | `{colors.surface-deep}` (#2a2928) | Subtle recessed dividers |
| Raised panel | `{colors.surface}` (#2f2e2d), no shadow | Cards |
| Input / higher | `{colors.surface-raised}` (#353433), no shadow | Input fields, code pills |

No box-shadows were measured (`shadows: []`; card shadow is explicitly `none`). Elevation is communicated entirely through warm surface-step contrast: each level lightens slightly toward `#353433`. The depth philosophy is **flat-with-tonal-steps** — no drop shadows, no glow, no glass.

### Decorative Depth
- The animated brand ring carries its own internal luminosity and spectrum arcs (rendered live by the engine) — this is content, not a system shadow token. Its glow and motion are the page's only depth spectacle.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Primary action button / code-pill — sharp-edged |
| `{rounded.xs}` | 2px | Small inline accents, fine dividers |
| `{rounded.sm}` | 4px | Input fields (left-rounded `4px 0 0 4px` on the copy field) |
| `{rounded.md}` | 12px | Cards and panels |
| `{rounded.lg}` | 20px | Larger rounded containers |
| `{rounded.pill}` | 50px | Circular / fully-rounded elements |

The system mixes sharp (0px primary action) and soft (12px cards) intentionally — the sharp-edged code pill reads as terminal/technical, while content cards stay rounded. Inputs use asymmetric radius (`4px 0px 0px 4px`) where they join an adjacent button into a unified control.

### Geometry
The dominant geometric motif is the **circle** — the large animated ring is the page's central form. Beyond it, surfaces are rectangular with the radius scale above.

## Components

### Top Navigation

**`top-nav`** — A minimal nav row on `{colors.canvas}`. Left holds the "anime.js" wordmark with its red accent dot (`{colors.primary}`); right holds text links (Docs, Easings, Learn), icon links (CodePen, GitHub), and a "Sponsor" pill with a red heart. Labels in `{typography.button}` (DIN 16px / 700) tinted `{colors.muted}`. Padding `{spacing.md}` (16px).

### Buttons

**`button-primary`** — The signature action, rendered sharp-edged at `{rounded.none}` (0px). Transparent background with text in `{colors.primary}` (or `{colors.ink}` for the "Learn more" variant), type `{typography.button}` (DIN 16px / 700), padding `0px 12px`. Used for the "Learn more ↓" CTA and the copy-code pill.

**`button-secondary`** — Soft-surface variant on `{colors.surface}` with `{colors.muted}` text, rounded `{rounded.sm}` (4px), padding `0px 12px`. Used for muted secondary actions in the hero CTA row.

### Cards & Containers

**`card`** — Standard content panel. Background `{colors.surface}` (#2f2e2d), text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.md}` (12px), padding `{spacing.xl}` (28px). No shadow — it sits one tonal step above canvas.

### Inputs & Forms

**`input`** — Text/code input field. Background `{colors.surface-raised}` (#353433), text `{colors.muted}`, rounded `{rounded.sm}` with asymmetric `4px 0px 0px 4px` corners where it joins an adjacent copy button (as in the "npm i animejs" pill). Type `{typography.button}`, padding `0px 12px`.

### Hero

**`hero-band`** — Full-viewport hero on `{colors.canvas}`. Carries the stacked display headline ("All-in-one animation engine.") in `{typography.display}`, a `{typography.body}` sub-line in `{colors.body}`, the large animated multicolor ring at center-right, and a bottom-anchored CTA row (`{component.input}` code pill + `{component.button-primary}`). Padding `{spacing.section}` (64px).

## Do's and Don'ts

### Do
- Keep chrome monochrome — warm charcoal surfaces + soft off-white ink. Reserve `{colors.primary}` (#ff4b4b) for the wordmark dot, sponsor heart, and link cues only.
- Let the spectrum accents (`{colors.accent-mint}`, `{colors.accent-lime}`, `{colors.accent-blue}`, etc.) live inside the animated ring and code demos — they are content, not chrome.
- Stack display headlines tight (line-height 0.865, weight 700). The dense block is the AnimeJS voice.
- Step elevation through warm surface tones (canvas → surface → surface-raised), not shadows. No shadows were measured anywhere.
- Render the primary action sharp-edged (`{rounded.none}`) and cards soft (`{rounded.md}`). The contrast is intentional.
- Use DIN (or its Oswald substitute) everywhere — there is no second family in this system.

### Don't
- Don't put accent or spectrum colors on buttons or navigation. Chrome stays monochrome-plus-red.
- Don't add drop shadows or glows to surfaces — depth is tonal only.
- Don't widen display tracking or lighten the weight below 600. DIN's voice depends on heavy condensed forms.
- Don't introduce pure black (#000000) as canvas — the system is warm near-black (#252423).
- Don't round the primary action button — it is deliberately sharp at 0px.

## Responsive Behavior

The analysis captured a single desktop landing snapshot, so responsive rules below are conservative and grounded in the measured layout. Detailed breakpoints are a Known Gap.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop | captured viewport | Two-zone hero: headline left, animated ring center-right; CTA row bottom-anchored |
| Mobile / Tablet | not captured | Not measured — see Known Gaps |

### Touch Targets
- `{component.button-primary}` and `{component.input}` use `0px 12px` padding; vertical tap height is driven by the `{typography.button}` line-height (1.5 × 16px) — adequate but tight. Confirm against a 44px minimum if rebuilt for touch.

### Collapsing Strategy
- Not measured. The hero's two-zone split would most plausibly stack (headline above, ring below) on narrow viewports, but this was not captured.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.card}`, `{component.button-primary}`).
2. Variants of an existing component live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Keep the chrome monochrome-plus-red; spectrum accents stay inside content/demos.
6. Display stays DIN (Oswald substitute) weight 700 with the tight 0.865 line-height. Don't blur the single-family system.
7. Elevation is tonal — reach for a lighter warm surface step before adding any shadow.

## Known Gaps

- DIN is a commercially-licensed typeface; it was not flagged in `fonts_licensed` (which is empty), but it should not be assumed shippable — an Oswald substitute is documented in Typography.
- Only one page (landing) and one viewport were captured. Mobile/tablet breakpoints, nav collapse behavior, and the hero stacking strategy are not measured.
- Only three type roles (display/h2, body, button) were measured — there is no captured h1, h3, caption, or code-block typography spec. The hero headline likely uses a dedicated h1 size not in the data.
- `letterSpacing` was measured as `normal` on all roles; precise tracking values were not extracted.
- The full set of spacing values (10px and 48px were measured at low frequency) was simplified into the token scale; minor spacings may be approximations.
- No shadow tokens were captured (`shadows: []`); the flat tonal-step elevation model is inferred from surface colors.
- The animated brand ring's exact arc colors, segment order, and motion timing are out of scope — the spectrum accents are documented from frequency-measured CSS values only.
- Active/pressed states for buttons and inputs were not captured and are not documented.
- The two CTA-row buttons share `0px 12px` padding measurements; their distinct fills ("Learn more" outline vs. copy pill) are inferred from screenshot ground-truth.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/animejs/design-md -->
