---
version: alpha
name: Monopo Saigon-design-analysis
description: "A cinematic, single-hero agency landing page built almost entirely in grayscale at the token level — white text floating over a full-bleed generative oil-slick render, with color voltage carried by the artwork rather than by systematized UI tokens. The measured CSS surface is spare: black/near-black canvases, one muted-gray pill button, zero shadows, and a nav column that stacks vertically at top-right instead of running horizontally. Minimal, editorial, agency-cool."

colors:
  ink: "#ffffff"
  canvas: "#000000"
  surface: "#181818"
  muted: "#6d6d6d"
  primary: "#777777"
  on-primary: "#bbbbbb"
  neutral-deep: "#030303"

typography:
  body:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 9px
    fontWeight: 400
    lineHeight: 1.317
    letterSpacing: 0
  button:
    fontFamily: "system-ui, -apple-system, sans-serif"
    fontSize: 9px
    fontWeight: 400
    lineHeight: 1.317
    letterSpacing: 0

rounded:
  none: 0px
  sm: 10px
  full: 75px

spacing:
  xxs: 6px
  xs: 8px
  sm: 12px
  md: 14px
  lg: 24px
  xl: 28px
  xxl: 29px
  xxxl: 37px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 11px 34px
  card:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  top-nav:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.body}"
  nav-link-active:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  logo-lockup:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
  scroll-indicator-badge:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
  language-switcher:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.body}"
---

## Overview

Monopo Saigon's landing page is built around a single cinematic hero: a full-bleed, generative oil-slick/marble render (amber, teal and black tones swirling across a sphere-like form) fills the entire viewport, with a spare white-text UI overlaid on top. Below the artwork, the measured CSS surface is almost entirely grayscale — `{colors.ink}` (#ffffff) for all text, `{colors.canvas}` (#000000), `{colors.surface}` (#181818), and `{colors.neutral-deep}` (#030303) for base/near-black surfaces, and a muted mid-gray pair — `{colors.primary}` (#777777) / `{colors.on-primary}` (#bbbbbb) — reserved for the one button style this capture surfaced. Every drop of chromatic energy in the brand comes from the generative artwork itself, not from a systematized palette — the token layer is intentionally colorless, letting the imagery carry the emotional register while the UI chrome stays quiet and out of the way.

Typography captured on this pass is sparse by design of the page itself: only `body` and `button` roles resolved to distinct computed styles, and both share the same system-ui stack, weight 400, line-height 1.317, and normal (0) letter-spacing. The large display headline visible in the hero ("Creative studio, Đến từ Tokyo," set in a geometric sans with stylized italic dots on the "i" characters) is a strong visual signature of the brand but was not captured as a distinct computed style in this measurement pass — it is called out explicitly in Known Gaps rather than tokenized with an invented size or family.

Structurally the page reads as agency-editorial: a small logotype lockup top-left ("monopo saigon"), a locale switcher (I / EN / VN / 中文) top-center, and — unusually — a *vertical stack* of nav labels (WORK, MANIFESTO, SAIGON SOULS, TEAM, CONTACT) at top-right rather than a horizontal menu bar. A circular "SCROLL DOWN" badge anchors the bottom-left corner. There is no shadow system, no rounded-card treatment (card radius measures 0px), and only one button radius value was observed — a fully-rounded 75px pill.

**Key Characteristics:**
- Grayscale-only CSS token layer (`{colors.ink}`, `{colors.canvas}`, `{colors.surface}`, `{colors.muted}`, `{colors.neutral-deep}`) — all chroma comes from the full-bleed generative background render, never from UI chrome.
- One button style measured: `{component.button-primary}`, a fully-rounded pill (`{rounded.full}` — 75px) with a muted gray fill (`{colors.primary}` — #777777) and lighter gray label (`{colors.on-primary}` — #bbbbbb) — a deliberately low-contrast, quiet CTA rather than a loud primary action.
- Card/content-block radius measures 0px (`{rounded.none}`) — sharp, unrounded rectangles everywhere except the one pill button.
- No shadows were measured anywhere on the page — the design is entirely flat; depth comes from the photographic/generative artwork, not from elevation tokens.
- Nav is vertical-stacked at top-right rather than horizontal — an editorial-agency signature distinct from typical SaaS top-nav patterns.
- A locale switcher (I / EN / VN / 中文) sits top-center, with the active locale ("EN") rendered brighter (`{colors.ink}`) against the other locales in a dimmer tone (`{colors.muted}`).
- Body and button type share identical computed metrics (system-ui, weight 400, line-height 1.317) — the system does not differentiate UI text roles by weight or family, only by color and context.

## Colors

### Text & Surface
- **Ink** (`{colors.ink}` — #ffffff, frequency 492 — the single most-used computed color on the page): All text — headline, nav labels, logotype, button-adjacent copy where active.
- **Canvas** (`{colors.canvas}` — #000000, frequency 67): The base black floor beneath the generative artwork; letterboxing at the extreme top/bottom of the hero.
- **Surface** (`{colors.surface}` — #181818, frequency 44): A secondary near-black tone, likely underlying panel/overlay surfaces distinct from pure black.
- **Neutral Deep** (`{colors.neutral-deep}` — #030303, frequency 1): An near-pure-black variant, rare — likely a compositing edge case in the generative canvas rendering.
- **Muted** (`{colors.muted}` — #6d6d6d, frequency 8): Secondary/inactive text — used for non-active locale labels and de-emphasized nav items.

### Action
- **Primary** (`{colors.primary}` — #777777): The single button background captured on this page. Notably desaturated and low-contrast rather than a bold brand color — consistent with the grayscale-first system.
- **On Primary** (`{colors.on-primary}` — #bbbbbb): Button label color — a light gray, not full white, keeping the button's contrast deliberately soft.

### Note on the Palette
This is a **colorless token system by design**. The visual richness of Monopo Saigon comes entirely from the full-bleed generative/photographic hero render (ambers, olives, teals visible in the screenshot) — none of those hues are extracted as reusable CSS tokens; they live only in the artwork layer. See Known Gaps.

## Typography

### Font Family
Both captured roles resolve to the **system-ui** stack (falling through to `-apple-system, sans-serif`) — no custom webfont was measured loading for body or button text in this pass.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.body}` | 9px | 400 | 1.317 | 0 | Base running text / nav labels (computed value) |
| `{typography.button}` | 9px | 400 | 1.317 | 0 | Button label (computed value, identical metrics to body) |

### Principles
Body and button type are computed as identical in family, weight, and line-height — the system does not lean on weight contrast for UI hierarchy at this layer; hierarchy instead comes from color (`{colors.ink}` vs `{colors.muted}`) and scale differences visible only in the hero headline, which sits well outside the measured range (see Known Gaps).

### Note on Measured Font Size
The 9px figure is the literal computed value returned for both roles. This is atypically small for legible body copy and most likely reflects a transform-scaled or reduced-viewport capture context rather than the production font-size actually rendered to end users. Treat the **family, weight, and line-height** as reliable; treat the **absolute pixel size** as an artifact rather than a design intent, and do not scale UI off of it directly.

## Layout

### Spacing System
- **Tokens:** `{spacing.xxs}` 6px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 14px · `{spacing.lg}` 24px · `{spacing.xl}` 28px · `{spacing.xxl}` 29px · `{spacing.xxxl}` 37px.
- These are the full set of padding/margin/gap values measured on the captured landing page — a fine-grained, non-power-of-two scale, consistent with an art-directed one-off page rather than a systematized 4px/8px grid.
- The two near-duplicate values (`{spacing.xl}` 28px and `{spacing.xxl}` 29px) both recur with meaningful frequency (8 and 12 occurrences respectively) — likely two different components independently converging on "roughly 28-29px," not a single canonical spacing decision.

### Grid & Structure
- **Top bar:** Logotype lockup (`{component.logo-lockup}`) pinned top-left; locale switcher (`{component.language-switcher}`) centered; vertical nav stack (`{component.nav-link}` × 5) pinned top-right.
- **Hero:** A single full-bleed generative render fills the viewport; the headline sits left-of-center, vertically centered in the lower-middle third.
- **Scroll cue:** A circular "SCROLL DOWN · SCROLL DOWN" badge (`{component.scroll-indicator-badge}`) anchors the bottom-left corner, rotating text set around its rim.
- Only one page/viewport was captured — no secondary content sections, footer, or grid system beyond this single hero screen were measured.

## Elevation & Depth

No shadow values were measured anywhere on the captured page (`shadows: []`). The design language is **entirely flat**:

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Nav, logotype, locale switcher, headline, scroll badge |
| Flat card | `{rounded.none}` radius, no shadow | The one measured "card" component — 0px radius, `shadow: none` |
| Pill button | `{rounded.full}` radius, no shadow | `{component.button-primary}` — depth communicated purely through color contrast (`{colors.primary}` fill against dark canvas), not elevation |

Depth in this design comes entirely from the generative/photographic artwork's own internal lighting and gradient — not from a shadow or elevation token system. Do not add drop shadows to any component; none were observed.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | The one measured card/content-block element — sharp, unrounded rectangles |
| `{rounded.sm}` | 10px | A single low-frequency measurement (freq 1) — likely a small inline element; exact application unconfirmed |
| `{rounded.full}` | 75px | `{component.button-primary}` — radius exceeds half the button's height, producing a fully-rounded pill |

The system pairs hard-edged rectangles (0px) with one fully-pill button (75px) — there is no measured mid-range "soft corner" radius in active use, which reads as a deliberate two-mode shape language: sharp content, round action.

## Components

### Navigation

**`top-nav`** — Transparent-background bar overlaying the hero artwork directly (no canvas fill of its own), text in `{colors.ink}`. Houses the logo lockup, locale switcher, and vertical nav stack.

**`logo-lockup`** — "monopo saigon" wordmark, top-left, `{colors.ink}` text over the artwork.

**`language-switcher`** — Inline locale row (I / EN / VN / 中文). Inactive locales render in `{colors.muted}` (#6d6d6d); the active locale ("EN" in the reference screenshot) renders in `{colors.ink}` for contrast.

**`nav-link`** / **`nav-link-active`** — A vertically stacked list (WORK, MANIFESTO, SAIGON SOULS, TEAM, CONTACT) at top-right, an editorial-agency pattern distinct from a horizontal SaaS nav. Default items sit in `{colors.muted}`; the active/current item switches to `{colors.ink}`.

### Hero

**`hero-band`** — Full-bleed background `{colors.canvas}` (#000000) beneath the generative render, with the headline and all overlay chrome set in `{colors.ink}`. This is the entire content of the captured page — no scroll-revealed sections were included in this pass.

**`scroll-indicator-badge`** — A small circular badge, bottom-left, `{colors.ink}` text/stroke on a transparent fill, with "SCROLL DOWN" set on a circular rim path around a small center glyph. Signals more content below the fold.

### Actions

**`button-primary`** — The one button style measured. Background `{colors.primary}` (#777777), label `{colors.on-primary}` (#bbbbbb), type `{typography.button}`, radius `{rounded.full}` (75px, fully pill-shaped), padding 11px × 34px. Notably low-contrast and quiet rather than a bold, attention-grabbing CTA — consistent with the page's restrained, art-forward tone.

### Content

**`card`** — A generic flat content block: transparent background, `{colors.ink}` text, `{rounded.none}` (0px radius), no shadow. Only structural metadata (radius, shadow) was captured for this component; no background color or padding was measured — treat its background as inheriting the surrounding canvas rather than an opaque fill.

## Do's and Don'ts

### Do
- Keep the UI chrome grayscale (`{colors.ink}`, `{colors.muted}`, `{colors.canvas}`, `{colors.surface}`) and let a full-bleed generative or photographic render carry all chromatic energy, exactly as the hero does.
- Use `{rounded.full}` (75px) exclusively for pill-shaped interactive elements (buttons, badges); keep content blocks at `{rounded.none}` (0px) for sharp contrast against the round action shape.
- Reserve `{colors.ink}` for active/current state (active locale, active nav item) and `{colors.muted}` for inactive/default state — this is the system's primary hierarchy mechanism in the absence of weight or size contrast.
- Keep buttons deliberately low-contrast (`{colors.primary}` fill, `{colors.on-primary}` label) rather than loud — this system does not use a bold, saturated primary action color.
- Preserve the vertical nav-stack pattern at top-right if extending this page — it's a distinctive structural signature, not an accident.

### Don't
- Don't add drop shadows to any component. None were measured; the system is flat by design, with depth carried by the artwork instead.
- Don't introduce a mid-range "soft" border radius (e.g., 8-16px) on cards — the measured system pairs 0px content blocks with a single 75px pill button only.
- Don't invent a saturated brand color for buttons or nav — the entire measured palette is grayscale; any chroma belongs to the background artwork layer, not UI chrome.
- Don't assume the 9px measured type size is production-accurate — treat it as a capture artifact (see Known Gaps) rather than a literal design instruction.
- Don't add hover-only styling beyond default/active — no hover states were measured, and none should be invented.

## Responsive Behavior

Only a single desktop-width capture of the landing page was analyzed — no tablet or mobile breakpoints, resize behavior, or media queries were measured in this pass.

### What Can Be Inferred From Structure
- The vertical nav-stack (top-right) and centered locale switcher would need an explicit mobile treatment (likely collapsing to a hamburger or hidden menu) — but no such breakpoint was captured.
- The full-bleed generative hero render is likely built to scale/crop responsively (common for this style of agency site), but no mobile screenshot or computed style confirms this.
- The scroll-indicator badge's fixed bottom-left position and the button's fixed pill padding (11px × 34px) are the only concrete pixel values available; how they'd adapt at narrower viewports is unconfirmed.

Do not fabricate breakpoint tables or mobile-specific component variants for this system — see Known Gaps.

## Iteration Guide

1. Treat every color as grayscale-first. If a new component needs a color, choose from `{colors.ink}`, `{colors.muted}`, `{colors.canvas}`, `{colors.surface}`, `{colors.neutral-deep}`, or the `{colors.primary}` / `{colors.on-primary}` button pair — never introduce a new hue without a fresh measurement.
2. New interactive elements should default to `{rounded.full}` (pill) if they're an action, or `{rounded.none}` if they're a content block — the system's shape vocabulary is binary.
3. Use `{colors.ink}` vs `{colors.muted}` as the primary hierarchy lever for nav/label states, since weight and size are not differentiators at the UI-chrome layer.
4. Never add a shadow token without new measurement — this system is confirmed flat.
5. Do not extrapolate the hero headline's size/family from the 9px body/button measurement — they are visually and almost certainly technically distinct; capture the headline directly before tokenizing it.
6. When extending to new pages/breakpoints, capture fresh — this entry is grounded in a single desktop hero screen and should not be treated as validated beyond that scope.

## Known Gaps

- Only one page (the landing/hero screen) and one viewport width were captured — no secondary content sections, footer, work/manifesto/team/contact pages, or responsive breakpoints were measured.
- The large hero display headline ("Creative studio, Đến từ Tokyo," a geometric sans with a distinctive stylized italic dot on the letter "i") is clearly a deliberate brand typographic choice visible in the screenshots but was not captured as a distinct computed style — no font-family, size, weight, or letter-spacing token exists for it. Do not substitute or guess this value; re-measure before documenting.
- The measured body/button font-size of 9.072px is implausibly small for production body text and is flagged as a likely capture/scaling artifact rather than true design intent — family/weight/line-height are considered more reliable than the absolute size.
- Nav label letter-spacing appears visually tracked/uppercase in the screenshots (WORK, MANIFESTO, etc.) but no letter-spacing value beyond "normal" (0) was captured for this specific element — insufficient to justify a `caption-uppercase` role per the measured data.
- No shadow values were present in the analysis (`shadows: []`) — confirmed flat, but this also means no elevation states exist to document for modals, dropdowns, or hover-lifted cards if the site adds them later.
- The generative/photographic hero artwork's colors (ambers, olives, teals visible in screenshot) are not systematized as CSS tokens anywhere in the measured data — they exist only as a rendered background asset, not as reusable design tokens. Any future token derived from this artwork would need direct extraction, not inference from this document.
- `card` component data included only radius and shadow (both null-ish/zero) — no background color, text color, or padding were measured for this component; its `backgroundColor: transparent` here is a structural default, not a confirmed measured value.
- fonts_licensed was empty in the source analysis — no licensing conflict was flagged, but this is also consistent with system-ui being a stack rather than a shipped webfont; if a custom headline font is confirmed on re-measurement, licensing should be re-checked at that time.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/monopo/design-md -->
