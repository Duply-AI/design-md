---
version: alpha
name: Vercel-design-analysis
description: The hard-edged monochrome standard for developer infrastructure — pure black on pure white (and the documented inverse), the Geist typeface at confident weights, one classic blue (#0070f3) for links and focus, and the famous develop/preview/ship tri-color gradient as the only expressive moment. Surfaces separate by hairlines and a precise layered shadow scale rather than color; radii stay tight (6px controls, 12px cards) with pills reserved for badges and theme toggles. The system reads as engineering certainty — maximal contrast, minimal palette, typography doing all the talking.
colors:
  ink: "#000000"
  body: "#444444"
  muted: "#666666"
  quiet: "#888888"
  faint: "#999999"
  canvas: "#ffffff"
  surface: "#fafafa"
  surface-raised: "#f5f5f5"
  hairline: "#eaeaea"
  hairline-strong: "#cccccc"
  inverse: "#000000"
  on-inverse: "#ffffff"
  blue: "#0070f3"
  develop-blue: "#0a72ef"
  preview-pink: "#de1d8d"
  ship-coral: "#ff5b4f"
  gradient-purple: "#7928ca"
  warning: "#f59e0b"
  error: "#ef4444"
colors-dark:
  ink: "#ededed"
  body: "#a1a1a1"
  muted: "#878787"
  canvas: "#000000"
  surface: "#0a0a0a"
  surface-raised: "#111111"
  hairline: "#333333"
  inverse: "#ffffff"
  on-inverse: "#000000"
typography:
  display-xl:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 72px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.035em
  display-lg:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.03em
  display-md:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  title-lg:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.01em
  title-md:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  code:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  button:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
rounded:
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  xxl: 16px
  pill: 9999px
  full: 9999px
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px
  section-lg: 128px
components:
  button-primary:
    backgroundColor: "{colors.inverse}"
    textColor: "{colors.on-inverse}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 0 14px
    height: 40px
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 0 14px
    height: 40px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.blue}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.nav-link}"
    height: 64px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 128px
  gradient-headline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.xl}"
    padding: 24px
  product-frame:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
  code-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 16px
  terminal-block:
    backgroundColor: "{colors.inverse}"
    textColor: "{colors.on-inverse}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 16px
  badge-pill:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 2px 10px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 0 12px
    height: 40px
  stat-highlight:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

Vercel's marketing surface is the purest monochrome system in developer infrastructure: black ink on white canvas, inverted wholesale in the documented dark theme. Color is rationed to one functional blue (`{colors.blue}` — #0070f3, links and focus rings) and the brand's tri-color moment — the **develop / preview / ship** gradient trio (`{colors.develop-blue}`, `{colors.preview-pink}`, `{colors.ship-coral}`, with `{colors.gradient-purple}` in legacy gradients) that paints exactly one headline per page.

Typography is **Geist** (Vercel's own open-source face) at semibold 600 for every display size with tightening negative tracking; body text drops to the gray ramp (`{colors.body}` #444 → `{colors.quiet}` #888) rather than softening weight. Depth comes from an unusually precise **layered shadow scale** (their `ds-shadow-*` tokens stack 1px borders with 2–32px diffuse layers) and hairlines — never from colored surfaces.

**Key Characteristics:**
- Pure #000 on #fff, with a documented full dark inverse (`colors-dark`) — the rare marketing site with a real two-theme system.
- Geist at 600 for all display type; tracking from -0.02em to -0.035em as size grows; body at 400/1.6.
- One blue for interaction (`{colors.blue}`); the tri-color gradient for exactly one hero headline; everything else grayscale.
- The accents ramp (#fafafa → #eaeaea → #999 → #666 → #444 → #111) is the entire surface-and-text hierarchy.
- Radius discipline: `{rounded.md}` (6px) for buttons/inputs, `{rounded.xl}` (12px) for cards/frames; pills only for badges.
- Black terminal blocks (`{component.terminal-block}`) and light code panels alternate; triangle mark and product screenshots carry the visuals.
- 40px control height across buttons and inputs; 64px nav; 96–128px section rhythm.

## Colors

### Brand & Accent
- **Blue** (`{colors.blue}` — #0070f3): links, focus rings, primary interactive accents. The only persistent color.
- **Develop / Preview / Ship** (`{colors.develop-blue}` #0a72ef, `{colors.preview-pink}` #de1d8d, `{colors.ship-coral}` #ff5b4f): the brand gradient trio for the hero headline treatment (`{component.gradient-headline}`); `{colors.gradient-purple}` (#7928ca) survives in legacy gradient pairings.
- **Semantic**: `{colors.warning}` #f59e0b, `{colors.error}` #ef4444 — product UI and callouts only.

### Surface & Text (the gray ramp)
- **Canvas** #ffffff; **Surface** `{colors.surface}` #fafafa (alt bands, code panels); **Surface Raised** #f5f5f5 (badges, table headers).
- **Hairline** `{colors.hairline}` #eaeaea (+ `{colors.hairline-strong}` #cccccc for emphasis borders).
- **Ink** #000000 for headlines and buttons; **Body** #444444; **Muted** #666666; **Quiet** #888888; **Faint** #999999 for metadata.
- **Inverse pair** (`{colors.inverse}` / `{colors.on-inverse}`): black buttons and terminal blocks on light; flips in dark.

### Documented dark theme (`colors-dark`)
True inverse, not a tint: canvas #000000, surface #0a0a0a, raised #111111, hairline #333333, ink #ededed, body #a1a1a1, muted #878787; the inverse pair flips to white-on-black. Blue stays #0070f3 in both themes.

## Typography

### Font Family
**Geist** (and **Geist Mono** for code) — Vercel's own typeface, released open-source under SIL OFL, so no substitute is required: use Geist itself. Fallback stack: Inter, then system sans.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px† | 600 | 1.05 | -0.035em | Homepage h1 (fluid 24–72px via clamp) |
| `{typography.display-lg}` | 48px | 600 | 1.08 | -0.03em | Section heads |
| `{typography.display-md}` | 32px | 600 | 1.15 | -0.02em | Sub-section heads, stats |
| `{typography.title-lg}` | 24px | 600 | 1.3 | -0.01em | Card titles |
| `{typography.title-md}` | 20px | 600 | 1.4 | 0 | Feature titles |
| `{typography.body-lg}` | 18px | 400 | 1.6 | 0 | Hero sub-copy |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Running text |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | Secondary copy, footer |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badges, labels |
| `{typography.code}` | 14px | 400 | 1.6 | 0 | Code/terminal — Geist Mono |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | Button labels |
| `{typography.nav-link}` | 14px | 400 | 1.4 | 0 | Nav items |

† Their hero size is literally `clamp(24px, …, 72px)` in CSS — 72px is the desktop ceiling.

### Principles
Weight 600 owns every display size — no 700s, no light display cuts. Hierarchy below the display level is carried by the gray ramp (#000 → #444 → #666 → #888), not by weight changes. Buttons and labels take 500.

### Note on Font Substitutes
None needed — Geist is freely available (SIL OFL). If unavailable in an environment, **Inter** at the same weights with -0.02em display tracking is the closest drop-in.

## Layout

### Spacing System
- 8px grid: `{spacing.xs}` 8 · `{spacing.sm}` 12 · `{spacing.md}` 16 · `{spacing.lg}` 24 · `{spacing.xl}` 32 · `{spacing.xxl}` 48 · `{spacing.section}` 96 · `{spacing.section-lg}` 128.
- Controls: 40px height, 12–14px horizontal padding. Cards pad `{spacing.lg}`.

### Grid & Container
- Max content ~1080px; hero text centered with the product/terminal demo below.
- Feature grids 2–3-up `{component.feature-card}` separated by hairlines (grid-with-borders pattern, not floating cards).
- Footer: 4–5 link columns + theme toggle (pill with sun/moon/system segments).

### Whitespace Philosophy
Engineering-spec spacing: consistent 8px multiples, no optical improvisation. Sections breathe at 96–128px while in-card density stays tight (16–24px).

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | none | Most bands and text blocks |
| Hairline | 1px #eaeaea (light) / #333 (dark) | Card grid separators, inputs, nav edge |
| Shadow scale | layered `0 0 0 1px` border-shadow + 2xs→2xl diffuse stack | Cards, dropdowns, tooltips — each step adds one soft layer |
| Inverse block | solid #000 (light) / #fff (dark) | Terminal blocks, primary buttons |

The signature: shadows always include a 1px border layer (`0 0 0 1px rgba(0,0,0,.08)`) so elevation never loses its crisp edge.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` 2px / `{rounded.sm}` 4px | micro-controls, checkboxes |
| `{rounded.md}` | 6px | Buttons, inputs, selects — the workhorse |
| `{rounded.lg}` | 8px | Code blocks, small panels |
| `{rounded.xl}` | 12px | Cards, product frames |
| `{rounded.xxl}` | 16px | Large media frames |
| `{rounded.pill}` | 9999px | Badges, theme toggle |
| `{rounded.full}` | 9999px / 50% | Avatars |

## Components

**`top-nav`** — White (or black, in dark) 64px bar, triangle logo + wordmark left, product menu center-left in `{typography.nav-link}`, right cluster "Log In" `{component.button-secondary}` + "Sign Up" `{component.button-primary}`. Hairline bottom edge.

**`button-primary`** — Inverse block: `{colors.inverse}` background, `{colors.on-inverse}` label, 40px, `{rounded.md}`, `{typography.button}`. The active/pressed state deepens to near-black gray (`{colors.body}`-adjacent) rather than changing hue.

**`button-secondary`** — Canvas background, `{colors.body}` label, 1px `{colors.hairline}` border, same geometry. Hover ink: label darkens to `{colors.ink}` (documented as state direction, not styling).

**`text-link`** — `{colors.blue}` inline links, no underline at rest.

**`hero-band`** — Centered display-xl headline (often `{component.gradient-headline}` with the tri-color treatment), body-lg sub-copy in `{colors.muted}`, button pair, then a `{component.product-frame}` or `{component.terminal-block}` demo.

**`gradient-headline`** — The brand moment: heading text filled with the develop→preview→ship gradient sweep (blue → pink → coral). One per page, hero only.

**`feature-card`** — White card in hairline-separated grids: icon, `{typography.title-md}`, body-sm copy in `{colors.muted}`; `{rounded.xl}` with the bordered-shadow treatment when floating.

**`product-frame`** — Dashboard/deploy screenshots in `{colors.surface}` frames, `{rounded.xl}`, layered shadow.

**`code-block` / `terminal-block`** — Light gray panel for code samples; solid black terminal with white text and `▲ ~ vercel deploy`-style prompt lines. Both `{rounded.lg}`, `{typography.code}`.

**`badge-pill`** — `{colors.surface-raised}` pill, caption type: "New", framework logos, changelog tags.

**`text-input`** — 40px, `{rounded.md}`, hairline border, focus ring in `{colors.blue}`.

**`stat-highlight`** — Display-md numbers in pure ink with muted captions.

**`footer`** — Light canvas, hairline top, 4–5 columns body-sm in `{colors.muted}`, theme toggle pill bottom-left, triangle mark.

## Do's and Don'ts

### Do
- Keep it two-tone: ink on canvas, inverted in dark. Let the gray ramp do every hierarchy job.
- Reserve `{colors.blue}` for links/focus; reserve the tri-color gradient for one hero headline.
- Use the bordered-shadow recipe (1px ring + soft layers) for anything elevated.
- Set all display type in Geist 600 with negative tracking; never bold to 700.
- Keep controls at 40px/6px-radius; pills are for badges and toggles only.
- Alternate black terminal blocks with light panels to pace developer-content pages.

### Don't
- Don't introduce colored surfaces — color appears in text, links, and the single gradient, never as backgrounds.
- Don't use off-blacks for primary surfaces in light mode; canvas is #fff and ink is #000 (the dark theme has its own documented values).
- Don't round cards past 16px or square off buttons below 4px.
- Don't use drop shadows without the 1px border layer — floating blur without an edge reads off-system.
- Don't mix gradient colors into UI states (the pink/coral are brand, not semantic).

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hamburger nav; hero clamps toward 24–32px; grids 1-up; terminal blocks full-bleed |
| Tablet | 640–1024px | 2-up grids; nav keeps core items + CTA |
| Desktop | 1024–1440px | Full layout, 3-up grids |
| Wide | > 1440px | Content capped ~1080px |

### Touch Targets
Buttons/inputs hold 40px (44px effective with padding on touch); nav rows expand to full-width sheets on mobile.

### Collapsing Strategy
Hero type is fluid (`clamp(24px → 72px)`); grids drop columns before shrinking type; hairline-separated grids become stacked hairline rows.

## Iteration Guide

1. One component at a time by key (`{component.terminal-block}`, `{component.gradient-headline}`).
2. Variants are separate entries; no hover styling documented (state directions only).
3. `{token.refs}` everywhere — never inline hex.
4. Need emphasis? Step the gray ramp before adding color; color means blue, and blue means interactive.
5. Dark mode = the documented `colors-dark` inverse; never invent intermediate grays.
6. The gradient budget is one headline. A second gradient on the page is off-system.

## Known Gaps

- **Dark values partially from the published Geist system**: light values were captured from vercel.com CSS (`accents-1..8`, shadows, blue); the dark set documents Vercel's well-known inverse (#000/#0a0a0a/#111/#333/#ededed/#a1a1a1) but a full dark-mode CSS capture was not performed this pass — re-capture with forced `prefers-color-scheme: dark` planned.
- **Geist font naming**: served via next/font with hashed family names; documented as "Geist" per their published system rather than from the CSS string.
- **Display sizes are fluid** (`clamp(24px, …, 72px)` captured literally); intermediate viewport behavior not tabulated.
- **Shadow recipes**: the `ds-shadow-*` stack is documented directionally in Elevation; exact per-level values live in their CSS and were captured only partially.
- **Gradient angles/stops** for develop/preview/ship vary by campaign; colors documented, geometry not.
- **Dashboard/product UI** (the Vercel dashboard's Geist application) is a separate dashboard-surface analysis — high-value future entry.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/vercel/design-md -->
