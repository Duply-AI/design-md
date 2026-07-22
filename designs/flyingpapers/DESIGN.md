---
version: alpha
name: FlyingPapers-design-analysis
description: "A loud, playful age-gate landing surface for Flying Papers built on a flat violet canvas with an oversized amber display headline (\"HOW OLD ARE YOU?\"), a peeking cartoon mascot, and a single cream confirmation button. The system reads as neo-brutalist / character-brand — enormous ultra-wide 900-weight display type, a monospace secondary voice, near-zero border radii on interactive chrome, and a bright accent palette (yellow, amber, pastels) set against a saturated violet field. Voltage comes almost entirely from scale and color contrast rather than depth or ornament."

colors:
  primary: "#000000"
  ink: "#000000"
  neutral-dark: "#1a1a1a"
  canvas: "#ffffff"
  surface-cream: "#f9f5f2"
  accent-yellow: "#f4ed36"
  accent-amber: "#f9cc73"
  accent-violet: "#8584bd"
  accent-violet-deep: "#61609a"
  accent-blue: "#a7b5cc"
  accent-pink: "#f8c1ba"
  accent-green: "#b5c995"
  accent-magenta: "#ac4f98"
  accent-red: "#c94245"
  accent-forest: "#375027"

typography:
  display-h2:
    fontFamily: "ObviouslyVariable, Archivo, sans-serif"
    fontSize: 341px
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: normal
  display-h3:
    fontFamily: "ObviouslyVariable, Archivo, sans-serif"
    fontSize: 244px
    fontWeight: 900
    lineHeight: 1.0
    letterSpacing: normal
  body:
    fontFamily: "bergen_monoregular, Space Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: normal
  button:
    fontFamily: "DegularVariable, Inter, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: normal

rounded:
  none: 0px
  sm: 6px
  pill: 100px

spacing:
  xxs: 7px
  xs: 11px
  sm: 14px
  md: 17px
  lg: 20px
  xl: 30px
  xxl: 40px
  huge: 60px

components:
  button-primary:
    backgroundColor: "{colors.surface-cream}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.accent-violet-deep}"
    typography: "{typography.body}"
  card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  wordmark:
    backgroundColor: transparent
    textColor: "{colors.accent-amber}"
    typography: "{typography.button}"
---

## Overview

Flying Papers' captured surface is a single-purpose age-gate landing page — a flat, saturated violet field (`{colors.accent-violet}` — #8584bd) carrying one enormous amber display headline, a peeking black-and-white cartoon mascot, and a single primary action. The system reads as **neo-brutalist character brand**: it does not whisper. Almost all of its voltage comes from two moves — extreme type scale and high-chroma color contrast — rather than from shadows, gradients, or depth.

Type voice splits three ways: **Obviously** (an ultra-wide, ultra-heavy display face at weight 900) for the giant "HOW OLD ARE YOU?" headline; **Bergen Mono** (a monospace) for body / secondary text and the small "I'M NOT OVER 18 YET" link; and **Degular** for the tight button label. The display face is set at hundreds of pixels with line-height crushed to 0.9–1.0 so the two words stack as solid slabs that dominate the viewport.

Color is bright and slightly retro. The dominant accent is a lemon yellow (`{colors.accent-yellow}` — #f4ed36) that shows up as the most-frequently-measured value, paired with a softer amber (`{colors.accent-amber}` — #f9cc73) used for the headline and wordmark. A supporting pastel set — pink, green, blue-gray, magenta, red, forest — appears in smaller doses (the mascot, decorative moments, secondary bands). The single confirmation button is a cream slab (`{colors.surface-cream}` — #f9f5f2) with black text.

Interactive chrome is deliberately hard-edged. Measured card, input, and button radii come back at 0px; the visible radius scale tops out at a small 6px and a 100px pill. There are no measured shadows — the flat, borders-and-blocks aesthetic is intentional.

**Key Characteristics:**
- Flat saturated violet canvas (`{colors.accent-violet}` — #8584bd) as the whole-page field; a lighter blue-gray band (`{colors.accent-blue}` — #a7b5cc) appears lower on the long page.
- Oversized ultra-wide 900-weight **Obviously** display headlines (measured at 341px / 244px) with crushed line-heights (0.9–1.0).
- **Bergen Mono** as the secondary/body voice (14px) — monospace gives the brand a technical, zine-like texture.
- Cream primary button (`{component.button-primary}`) with black label — the single call to action on the age gate.
- Bright accent palette led by lemon yellow (`{colors.accent-yellow}`) and amber (`{colors.accent-amber}`), backed by a soft pastel set.
- Near-zero radii on interactive chrome (measured 0px on card / input / button) with a small 6px and a 100px pill available in the radius scale.
- No measured shadows — a flat, block-based, neo-brutalist depth model.

## Colors

### Brand & Accent
- **Accent Yellow** (`{colors.accent-yellow}` — #f4ed36): The single most-frequently-measured color. The brand's loud lemon-yellow accent.
- **Accent Amber** (`{colors.accent-amber}` — #f9cc73): The headline and wordmark color on the violet field — the warm, softer companion to the lemon yellow.
- **Accent Violet** (`{colors.accent-violet}` — #8584bd): The page canvas — a saturated periwinkle violet covering the full viewport.
- **Accent Violet Deep** (`{colors.accent-violet-deep}` — #61609a): A darker violet used for the secondary text-link and outline accents against the violet field.
- **Accent Blue** (`{colors.accent-blue}` — #a7b5cc): A lighter blue-gray band visible lower on the long-scroll page.
- **Pastel accents** — a small supporting set measured at low frequency, appearing on the mascot and decorative moments: `{colors.accent-pink}` (#f8c1ba), `{colors.accent-green}` (#b5c995), `{colors.accent-magenta}` (#ac4f98), `{colors.accent-red}` (#c94245), `{colors.accent-forest}` (#375027). These are secondary; none carry the primary action.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): White, measured on the input surface; used sparingly.
- **Surface Cream** (`{colors.surface-cream}` — #f9f5f2): The off-white slab fill of the primary button.

### Text
- **Ink** (`{colors.ink}` — #000000): Pure-black text — button label, primary copy.
- **Neutral Dark** (`{colors.neutral-dark}` — #1a1a1a): The near-black used on the mascot outline and heavy fills.

### Semantic
No dedicated success / warning / error tokens were measured on this single-page capture — see Known Gaps.

## Typography

### Font Family
The system runs three custom/proprietary typefaces:
- **Obviously** (`ObviouslyVariable`) — an ultra-wide, ultra-heavy display face used at weight 900 for the giant headline. This is the brand's shout.
- **Bergen Mono** (`bergen_monoregular`) — a monospace used for body and secondary text (14px), giving a technical, zine-like texture.
- **Degular** (`DegularVariable`) — a contemporary grotesque used for the small button label (10px).

None of these was flagged in `fonts_licensed`, but Obviously (OHno Type Co.), Bergen Mono (Atipo), and Degular (OHno Type Co.) are all commercial/proprietary faces — this analysis does not ship them and documents open substitutes below.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-h2}` | 341px | 900 | 0.9 | normal | The hero headline slab ("HOW OLD ARE YOU?") — Obviously |
| `{typography.display-h3}` | 244px | 900 | 1.0 | normal | Secondary large display line — Obviously |
| `{typography.body}` | 14px | 400 | 0.8 | normal | Body / secondary text, the "I'M NOT OVER 18 YET" link — Bergen Mono |
| `{typography.button}` | 10px | 400 | 1.0 | normal | Button label ("I'M OVER 18, LET ME IN") + wordmark — Degular |

### Principles
The display face carries the entire brand voice at extreme scale with crushed line-heights (0.9–1.0) so words stack as solid slabs. The monospace body is the deliberate counterweight — small, technical, understated. Never mix the two roles: display is always Obviously weight 900; body is always Bergen Mono. The 341px / 244px sizes are measured on a wide desktop capture and scale down aggressively at smaller viewports.

### Note on Font Substitutes
- For **Obviously**, use **Archivo** (specifically Archivo Expanded) at weight 900 — a wide, heavy open-source grotesque that preserves the slab-like display impression. **Anton** is a fallback for the ultra-heavy feel (though narrower).
- For **Bergen Mono**, use **Space Mono** or **JetBrains Mono** — both open-source monospaces that keep the technical texture.
- For **Degular**, use **Inter** or **Hanken Grotesk** at regular weight for the small button label.

## Layout

### Spacing System
- **Measured tokens:** `{spacing.xxs}` 7px · `{spacing.xs}` 11px · `{spacing.sm}` 14px · `{spacing.md}` 17px · `{spacing.lg}` 20px · `{spacing.xl}` 30px · `{spacing.xxl}` 40px · `{spacing.huge}` 60px.
- The measured spacing distribution is irregular (7, 11, 17, 20, 30 appear most often) rather than a clean 4/8 grid — consistent with a hand-composed single-page layout rather than a systematized product surface.
- Smaller values (`{spacing.xxs}`–`{spacing.md}`) sit around the button, wordmark, and link cluster; larger values (`{spacing.xl}`–`{spacing.huge}`) separate the headline from the action zone.

### Grid & Container
- The captured page is a single centered column: wordmark at top, giant headline centered, action cluster (button + link) below.
- No multi-column grid was observed on this landing capture — the long-scroll page below the fold is mostly empty violet field.

### Whitespace Philosophy
Whitespace is dominated by the headline's own scale — the display slabs consume most of the fold, and the surrounding violet field provides generous breathing room around a single action. The long page below the fold is intentionally sparse.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | The entire page — canvas, headline, cards |
| Block contrast | Color-block against the violet field | Headline, button, mascot — depth comes from chroma, not shadow |

No shadows were measured (`shadows: []`). The system is deliberately flat: the primary button reads as a hard-edged cream slab, and separation between elements is achieved through color contrast (amber-on-violet, cream-on-violet, black-on-cream) rather than elevation. Any offset "sticker" shadow visible on the button in the screenshot was not captured as a token — see Known Gaps.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Measured on card, input, and the button element — hard-edged chrome |
| `{rounded.sm}` | 6px | The small radius on the visible confirmation button slab |
| `{rounded.pill}` | 100px | Fully-rounded pill radius, measured on small round elements / mascot chrome |

The radius language is bimodal: hard 0px edges on structural chrome, a small 6px softening on the button, and a 100px pill for anything circular. There is no mid-range radius — the system does not do the "gently rounded card" look.

### Photography / Illustration Geometry
The mascot is a flat vector cartoon (a peeking skull-like character in black outline over white) rendered directly over the headline — not framed, cropped, or contained in a card.

## Components

### Wordmark

**`wordmark`** — "Flying Papers" set small at the top-center of the page in `{colors.accent-amber}` on the violet field, in `{typography.button}` (Degular, small). Acts as the only persistent brand marker on the page.

### Buttons

**`button-primary`** — The single call to action ("I'M OVER 18, LET ME IN"). A cream slab: background `{colors.surface-cream}`, black label in `{colors.ink}`, type `{typography.button}` (Degular 10px), rounded `{rounded.sm}` (6px, from the visible button). It sits centered below the headline. Measured element-level radius/padding came back at 0px; the visible slab shows a small radius and a hard-edged frame — see Known Gaps for the offset-shadow treatment.

**`button-text-link`** — The secondary underlined link ("I'M NOT OVER 18 YET"), rendered in `{typography.body}` (Bergen Mono 14px) in `{colors.accent-violet-deep}`, no background. The deliberate downgrade signal — monospace, small, underlined — for the non-primary path.

### Containers

**`card`** — Measured with `{rounded.none}` (0px) and no shadow, transparent background. On this capture the "card" language is flat and hard-edged; content sits directly on the violet field rather than in an elevated container.

### Inputs & Forms

**`input`** — Background `{colors.canvas}` (#ffffff), rounded `{rounded.none}` (0px). A hard-edged white field. No focused/error variant was captured on this age-gate page — see Known Gaps.

## Do's and Don'ts

### Do
- Let the **Obviously** display headline dominate — extreme scale with crushed line-height (0.9–1.0) is the primary brand move.
- Keep the violet field (`{colors.accent-violet}`) flat and let color contrast carry separation — amber-on-violet, cream-on-violet, black-on-cream.
- Use **Bergen Mono** for all secondary and body text; keep it small and understated as the counterweight to the shouting display type.
- Reserve `{colors.surface-cream}` for the single primary action; the cream slab is the brand's one button treatment.
- Keep interactive chrome hard-edged — 0px to 6px radii, never soft/pill on rectangular elements.
- Use the pastel accents (`{colors.accent-pink}`, `{colors.accent-green}`, etc.) sparingly — they support the mascot and decorative moments, never the primary CTA.

### Don't
- Don't add drop shadows or gradients to the flat surfaces — the system's depth model is color-block contrast, not elevation.
- Don't set the display headline below weight 900 or in the mono/grotesque faces — the ultra-heavy Obviously slab is non-negotiable.
- Don't put body copy in the display face, or headlines in Bergen Mono — the three-way voice split is strict.
- Don't introduce a second primary button — the age gate has exactly one affirmative action and one downgrade link.
- Don't soften structural chrome with mid-range radii; the language is 0px hard edges with a small 6px button softening and a 100px pill.

## Responsive Behavior

### Breakpoints
No explicit breakpoint tokens were captured. The provided screenshots show a wide desktop capture (headline at full 341px scale) and a narrow mobile-width capture where the headline shrinks dramatically to fit two stacked lines. Exact breakpoint widths were not measured — see Known Gaps.

### Observed Scaling
- **Desktop:** Headline at measured display scale (~341px), mascot peeking through the middle of the two words, button + link centered below.
- **Mobile (narrow capture):** Headline shrinks to a compact two-line slab; wordmark, button, and link stack tightly; the long violet field extends far below the fold.

### Touch Targets
- `{component.button-primary}` is the sole primary target; on the narrow capture it remains a clearly tappable centered slab. Precise measured height was not captured — the 10px label sits inside generous slab padding.
- `{component.button-text-link}` is a small underlined mono link — its tap area is minimal and should be enlarged for touch in implementation.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.button-primary}`, `{component.button-text-link}`).
2. Variants of an existing component (`-active`, `-focused`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay Obviously weight 900 with crushed line-height. Body stays Bergen Mono. Button labels stay Degular. The three voices do not blur.
6. Depth is color contrast, not shadow. Don't add elevation casually.
7. When in doubt about emphasis: bigger Obviously before any new color.

## Known Gaps

- Only ONE page (the age-gate landing) was captured. The full site behind the gate — product pages, navigation, forms, footers — is entirely out of scope; the palette and component set beyond this single surface are unknown.
- **Obviously**, **Bergen Mono**, and **Degular** are proprietary/commercial typefaces (not flagged in `fonts_licensed` but not open-source); open substitutes are documented in the Typography section and this analysis does not ship the originals.
- The measured display sizes (341px / 244px) are captured from a wide desktop viewport; the underlying responsive type scale and breakpoint widths were not measured.
- No shadows were captured (`shadows: []`), but the confirmation button in the screenshot shows a hard offset "sticker" drop shadow — this depth treatment could not be tokenized and is a gap.
- Element-level radius on card / input / button measured 0px, which conflicts with the visible ~6px softening on the button slab and the 100px pill in the radius scale; the button is documented with `{rounded.sm}` from screenshot ground-truth (derived reconciliation).
- Button and card padding/height came back as 0px at the element level (likely inner-element measurement); real slab padding is visible in the screenshot but was not reliably measured.
- No semantic color roles (success / warning / error) and no input focus / error states were captured on this single action-only page.
- The mascot illustration and the lower blue-gray band (`{colors.accent-blue}`) appear as content/decoration; their exact usage rules beyond the landing capture are unknown.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/flyingpapers/design-md -->
