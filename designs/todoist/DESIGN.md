---
version: alpha
name: Todoist-design-analysis
description: A warm, calm productivity-app marketing surface built on a barely-off-white canvas (#fefdfc) with a single confident red CTA, Graphik display headlines, and Inter UI text. The system reads as friendly and uncluttered — soft peach hero washes, white product-screenshot cards with whisper-soft shadows, generous whitespace, and a restrained accent palette where one warm red carries every primary action. Brand voltage comes from the red "Start for free" button and from real Todoist app chrome shown inside hero cards rather than from heavy color or ornament.
colors:
  ink: "#25221e"
  canvas: "#fefdfc"
  surface: "#ffffff"
  surface-soft: "#fafafa"
  warm-gray: "#f9f7f6"
  warm-gray-soft: "#f2efed"
  accent-red: "#e34432"
  accent-red-dark: "#cf3520"
  accent-red-alt: "#d1453b"
  accent-blue: "#0f66ae"
  accent-blue-bright: "#316fea"
  accent-blue-vivid: "#3879fa"
  accent-yellow: "#ffc93e"
  accent-green: "#438952"
  accent-green-soft: "#539359"
  peach: "#fae8d6"
  peach-soft: "#fff6f0"
  peach-tint: "#fff9f3"
  mint: "#f4fbf7"
  black: "#000000"
  on-accent: "#ffffff"
typography:
  h1:
    fontFamily: "Graphik, Inter, sans-serif"
    fontSize: 55px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.55px
  h2:
    fontFamily: "Graphik, Inter, sans-serif"
    fontSize: 38px
    fontWeight: 600
    lineHeight: 1.28
    letterSpacing: -0.19px
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: 15.5px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0.155px
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: 15.5px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0.155px
rounded:
  none: 0px
  sm: 8px
  md: 10px
  lg: 13px
  xl: 15px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  button-primary:
    backgroundColor: "{colors.accent-red}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 9px 14px
  button-primary-active:
    backgroundColor: "{colors.accent-red-dark}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.sm}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.accent-red}"
    typography: "{typography.body}"
  promo-banner:
    backgroundColor: "{colors.peach-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
  hero-product-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  feature-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
  template-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
  text-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
---

## Overview

Todoist's marketing surface is a warm, calm, productivity-first interface built on a barely-off-white canvas (`{colors.canvas}` — #fefdfc) rather than pure white. The page reads as friendly and uncluttered — a single confident red CTA, generous whitespace, soft peach washes behind the hero, and white product-screenshot cards that show the actual Todoist app at small scale. The brand projects calm-and-capable: nothing shouts, one warm red does all the action work.

Type voice splits into two roles: **Graphik** (a neo-grotesque display face) for h1 and h2, set at weight 600 with negative letter-spacing (-0.55px on the hero h1, -0.19px on section heads), and **Inter** for body copy and buttons at weight 500. The headline "Clarity, finally." is the brand voice in miniature — large, tight, confident Graphik on a warm neutral.

Component voltage comes from two sources: the **red "Start for free" button** (`{colors.accent-red}` — #e34432), which is the single repeated primary action across every page, and **real Todoist app chrome shown inside white cards** — the Today view, the mobile quick-add, the calendar widget. Todoist doesn't illustrate the product abstractly; it embeds the product UI directly into the marketing flow.

The accent palette is broad but used sparely: warm reds for action, a small set of blues and greens that appear only inside product UI fragments and decorative wave illustrations, and a yellow used for sparkle accents. The dominant chromatic signal is warm — peach washes, off-white canvas, near-black warm ink (`{colors.ink}` — #25221e, a warm dark brown rather than true black).

**Key Characteristics:**
- Warm off-white canvas (`{colors.canvas}` — #fefdfc), not pure white — every surface sits on a slightly warm floor.
- Warm near-black ink (`{colors.ink}` — #25221e) for all headlines and body, giving the page a softer, less clinical feel than true `#000000`.
- A single red primary CTA (`{colors.accent-red}` — #e34432) repeated across every page. The red is the only loud color in the system.
- Graphik display headlines (substituted with Inter/Schibsted Grotesk here) at weight 600 with tight negative tracking; Inter weight 500 for everything else.
- White product-screenshot cards (`{component.hero-product-card}`, `{component.card}`) with whisper-soft shadows that show the real Todoist app UI embedded in the marketing surface.
- Soft peach hero wash (`{colors.peach}` — #fae8d6, `{colors.peach-soft}` — #fff6f0) and decorative green/yellow waves and sparkles in band transitions.
- Conservative radius scale — `{rounded.sm}` (8px) on buttons, `{rounded.md}` (10px) on cards, up to `{rounded.xl}` (15px) on the marquee hero card. No pill shapes measured.
- Inputs render with squared corners (`{rounded.none}` — 0px), an unusual choice against the otherwise-rounded system.

## Colors

### Brand & Action
- **Accent Red** (`{colors.accent-red}` — #e34432): The single primary action color. Every "Start for free" CTA and the brand logo mark. Press state shifts to `{colors.accent-red-dark}` (#cf3520) — derived from the measured darker red.
- **Accent Red Alt** (`{colors.accent-red-alt}` — #d1453b): A second red tone observed in product UI chrome (task priority markers, the mobile add-task button).

### Secondary Accents
These appear almost exclusively inside embedded product UI fragments and decorative illustrations — never on hero CTAs:
- **Accent Blue** (`{colors.accent-blue}` — #0f66ae), **Accent Blue Bright** (`{colors.accent-blue-bright}` — #316fea), **Accent Blue Vivid** (`{colors.accent-blue-vivid}` — #3879fa): link tones and product-UI accents.
- **Accent Green** (`{colors.accent-green}` — #438952) / **Accent Green Soft** (`{colors.accent-green-soft}` — #539359): success/completion markers in product UI and the decorative wave band.
- **Accent Yellow** (`{colors.accent-yellow}` — #ffc93e): the sparkle/star accents scattered in band transitions.

### Surface & Warm Neutrals
- **Canvas** (`{colors.canvas}` — #fefdfc): The default warm off-white page floor.
- **Surface** (`{colors.surface}` — #ffffff): Pure white card and product-screenshot backgrounds — a notch brighter than the canvas, giving cards subtle lift.
- **Surface Soft** (`{colors.surface-soft}` — #fafafa): Very-soft section dividers and subtle fills.
- **Warm Gray** (`{colors.warm-gray}` — #f9f7f6) / **Warm Gray Soft** (`{colors.warm-gray-soft}` — #f2efed): warm neutral fills for low-emphasis bands and inactive surfaces.
- **Peach** (`{colors.peach}` — #fae8d6), **Peach Soft** (`{colors.peach-soft}` — #fff6f0), **Peach Tint** (`{colors.peach-tint}` — #fff9f3): the warm hero washes and the promo banner background.
- **Mint** (`{colors.mint}` — #f4fbf7): a soft green-tinted surface used in template/feature bands.

### Text
- **Ink** (`{colors.ink}` — #25221e): All headlines and body text — a warm near-black.
- **On Accent** (`{colors.on-accent}` — #ffffff): White text on the red primary button.
- **Black** (`{colors.black}` — #000000): Present in the palette but used sparingly (icon glyphs, product UI); the brand text color is warm ink, not true black.

## Typography

### Font Family
The system runs **Graphik** for display headlines (h1, h2) and **Inter** for body copy and buttons. Graphik is a commercial neo-grotesque typeface (licensed from Commercial Type); the captured font name was obfuscated (`Graphik-1bbd4a4c7a2fb472`). Inter handles all running text and UI labels at weight 500.

The split is functional:
- Graphik (display, weight 600, negative tracking) — h1, h2
- Inter (body + UI, weight 500, slightly positive tracking) — paragraphs, buttons, nav

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.h1}` | 55px | 600 | 1.15 | -0.55px | Hero headline ("Clarity, finally.") — Graphik |
| `{typography.h2}` | 38px | 600 | 1.28 | -0.19px | Section heads ("Capture tasks at the speed of thought") — Graphik |
| `{typography.body}` | 15.5px | 500 | 1.35 | 0.155px | Running text, sub-headlines, captions — Inter |
| `{typography.button}` | 15.5px | 500 | 1.35 | 0.155px | CTA labels, nav links — Inter |

### Principles
Graphik carries the brand voice — every display headline uses it at weight 600 with negative tracking. Inter handles the supporting type at weight 500. Body and button share the same measured Inter spec (15.5px / 500 / 0.155px tracking); the difference is contextual, not typographic.

The negative letter-spacing on Graphik headlines is part of the voice — the hero h1 tightens to -0.55px, giving the large display type a precise, condensed feel. Body Inter runs slightly loose (+0.155px) for legibility at small size.

### Note on Font Substitutes
Graphik is a licensed commercial typeface and cannot be shipped freely. **Inter** at weight 600 with roughly -0.01em letter-spacing is a usable approximation for the display roles. **Schibsted Grotesk** or **Hanken Grotesk** at weight 600 are closer neo-grotesque alternatives that better preserve Graphik's geometric character. Body and button text already use Inter, which is open-source and ships directly.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px.
- **Most frequent measured steps:** 4px (60×), 12px (46×), 16px (46×), 9px (36×), 24px (31×). The 9px and 14px values recur as button internal padding (9px × 14px).
- **Card internal padding:** clusters at `{spacing.md}` (16px) and `{spacing.lg}` (24px).
- **Tight inner gaps:** `{spacing.xxs}` (4px) and `{spacing.sm}` (12px) dominate icon/label rows inside product UI fragments.

### Grid & Container
- **Editorial body:** centered single column with alternating left-text / right-product-card splits in the hero and feature bands.
- **Feature bands:** text block on one side, embedded product-screenshot card on the other.
- **Template grid:** multi-up card row (Work / Personal / Education / Management categories) below a filter tab strip.
- **Footer:** multi-column link list (Features / Resources / Company).

### Whitespace Philosophy
Todoist uses generous, calm whitespace — long vertical gaps between editorial bands keep the page uncluttered and reinforce the "clarity" message. Each band carries a single h2, a short paragraph, and one product artifact. Density only appears inside the embedded product UI; the marketing layer stays airy.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Body bands, nav, footer on warm canvas |
| Hairline lift | `rgba(37,34,30,0.04) 0px 1px 0px 0px` | Default card edge — a single-pixel warm shadow giving cards a whisper of lift |
| Soft peach glow | `rgba(42,29,48,0.06) 0px 1px 19px 0px, rgba(250,232,214,0.6) 0px 0px 48px 0px` | Hero product card — a diffuse shadow with a warm peach halo (`{colors.peach}` glow) |
| Floating panel | `rgba(37,34,30,0.07) 0px 14px 19px -9px, rgba(37,34,30,0.18) 0px 10px 48px 0px` | Elevated product screenshots / overlapping mobile mockups |

The elevation philosophy is **soft and warm** — shadows use the warm ink tone at very low alpha rather than neutral black, and the hero card adds a peach-tinted glow. No hard drop shadows, no neumorphism. Depth comes from layering white surfaces over the warm canvas plus these faint warm shadows.

### Decorative Depth
- The hero product card carries a peach halo glow that visually warms the surrounding canvas.
- Decorative green wave illustrations and yellow sparkle accents (`{colors.accent-yellow}`) sit in band transitions, adding playful depth without competing with content.
- Overlapping mobile + desktop mockups in the hero use the floating-panel shadow to imply stacking.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Text inputs — squared corners (measured) |
| `{rounded.sm}` | 8px | Primary buttons; most-frequent radius (43×) |
| `{rounded.md}` | 10px | Content cards, template cards, promo banner |
| `{rounded.lg}` | 13px | Feature cards |
| `{rounded.xl}` | 15px | The hero product card — the largest measured radius for the marquee component |

### Photography Geometry
Product screenshots are shown inside rounded cards (`{rounded.md}` to `{rounded.xl}`) retaining their native app chrome (which has its own internal radii — task rows, calendar cells, the mobile-keyboard panel). Note the system's one shape inconsistency: text inputs render squared (`{rounded.none}`) while every other surface is rounded.

## Components

### Top Navigation

**`top-nav`** — Warm-canvas nav bar carrying the Todoist logo (red leaf mark + "todoist" wordmark) at left, a horizontal menu ("Made For", "Resources", "Pricing") center-right, a "Log in" link, and the red `{component.button-primary}` ("Start for free") at far right. Menu items in `{typography.body}` (Inter 15.5px / 500). Height not measured.

### Buttons & Links

**`button-primary`** — The signature red CTA. Background `{colors.accent-red}` (#e34432) — derived: the button's background was not directly measured (the analyzer captured the `color` property as `{colors.ink}`), but every screenshot shows a solid red button, so the brand red is assigned as background. Text `{colors.on-accent}` (#ffffff), type `{typography.button}`, rounded `{rounded.sm}` (8px), padding 9px × 14px. Active state `button-primary-active` shifts to `{colors.accent-red-dark}` (#cf3520) — derived from the measured darker red.

**`nav-link`** — Inline top-nav menu item, transparent background, `{colors.ink}` text, `{typography.body}`.

**`text-link`** — Inline link in `{colors.accent-red}` (e.g., "Meet Ramble" inside the promo banner, "Learn more about teams").

### Banners & Cards

**`promo-banner`** — A full-width announcement bar below the nav ("Get ready to turn thinking into doing. Meet Ramble"). Background `{colors.peach-soft}` (#fff6f0), text `{colors.ink}`, rounded `{rounded.md}` (10px), with a close (×) control at right.

**`card`** — The base white content card. Background `{colors.surface}` (#ffffff), rounded `{rounded.md}` (10px), hairline-lift shadow (`rgba(37,34,30,0.04) 0px 1px 0px 0px`). The default container for product fragments and content blocks.

**`hero-product-card`** — The marquee hero artifact showing the real Todoist "Today" view plus an overlapping mobile quick-add mockup. Background `{colors.surface}`, rounded `{rounded.xl}` (15px), with the soft peach-glow shadow. The largest, most elevated card in the system.

**`feature-card`** — Used in alternating feature bands ("Capture tasks at the speed of thought", "Stay organized and focused"). Background `{colors.surface}`, rounded `{rounded.lg}` (13px), holding an embedded product screenshot beside an h2 + body description.

**`template-card`** — Used in the "Kickstart your next project with Todoist Templates" grid (Accounting Tasks, Business Travel Packing, etc.). Background `{colors.surface}`, rounded `{rounded.md}` (10px), each carrying a title in `{typography.body}` weight, a short description, and a "List" tag. Soft category-tinted backgrounds (`{colors.mint}`, `{colors.peach-tint}`) appear behind some cards.

### Inputs & Forms

**`text-input`** — Standard text input. Background `{colors.surface}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}` (0px — squared corners, measured). The one component that breaks the otherwise-rounded system.

### Footer

**`footer`** — Warm-canvas footer closing the page. Background `{colors.canvas}` (#fefdfc), text `{colors.ink}`, type `{typography.body}`. Carries the Todoist logo + tagline at left and multi-column link lists (Features / Resources / Company) plus a language selector. Unlike many SaaS footers, Todoist keeps the footer on the same warm light canvas as the body — there is no dark footer in the system.

## Do's and Don'ts

### Do
- Reserve `{colors.accent-red}` (#e34432) for primary CTAs and the brand mark. One red, used sparingly, carries every action.
- Use `{colors.ink}` (#25221e) — warm near-black — for all headlines and body. Never substitute true `#000000` for text; the warmth is part of the brand.
- Build on the warm `{colors.canvas}` (#fefdfc) floor and lift white cards (`{colors.surface}` — #ffffff) above it. The two-tone warm-off-white-vs-pure-white is how depth reads.
- Use Graphik (weight 600, negative tracking) for display headlines and Inter (weight 500) for everything else. Keep the boundary strict.
- Embed real Todoist app chrome inside `{component.hero-product-card}` and `{component.feature-card}`. Show the product, don't illustrate it abstractly.
- Keep shadows warm and faint — the ink-tinted, low-alpha shadows plus the peach hero glow are the system's depth language.
- Confine secondary accents (blues, greens, yellow) to product UI fragments and decorative waves/sparkles.

### Don't
- Don't use blue, green, or yellow on primary CTAs. The action layer is monochrome red.
- Don't use heavy or neutral-black shadows. All elevation uses warm ink at very low alpha.
- Don't round inputs — they're squared (`{rounded.none}`) by measurement, even though cards and buttons are rounded.
- Don't exceed `{rounded.xl}` (15px) on any surface; the hero card is the maximum.
- Don't add a dark footer or dark band — the entire system stays on warm light surfaces.
- Don't add hover-state styling beyond what's documented; primary darkens to `{colors.accent-red-dark}` on press, nothing else.

## Responsive Behavior

The reference set includes a desktop landing capture and a tall full-page landing scroll; specific breakpoint values were not measured. The observations below are derived from the captured layouts.

### Breakpoints

| Name | Width | Key Changes (derived) |
|---|---|---|
| Mobile | < 768px | Nav likely collapses; hero text stacks above the product card; feature bands stack to single column; template grid reduces columns |
| Tablet | 768–1024px | Feature bands tighten; template grid reduces to 2–3 up |
| Desktop | > 1024px | Full horizontal nav; alternating left-text / right-product-card feature bands; multi-up template grid |

### Touch Targets
- `{component.button-primary}` measures 9px × 14px padding on top of `{typography.button}` (15.5px) — comfortable but the small padding means the effective tap height should be verified against a 44px minimum on touch.
- Input and tab tap sizes were not measured.

### Collapsing Strategy (derived)
- Hero's text + product-card split collapses to a single stacked column on narrow viewports.
- Feature bands reduce from side-by-side text/screenshot to stacked.
- Template card grid reduces column count rather than shrinking cards.
- Footer link columns wrap to fewer columns.

### Image Behavior
- Embedded product screenshots retain native aspect ratios; their containing cards resize.
- The overlapping mobile + desktop mockups in the hero scale proportionally.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.hero-product-card}`).
2. Variants of an existing component (`-active`, etc.) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay Graphik (substitute Inter/Schibsted Grotesk) 600 with negative tracking; body stays Inter 500. The boundary does not blur.
6. The red CTA is the only loud color — resist adding accent colors to the action layer.
7. Keep the warm two-tone surface logic: warm canvas floor, pure-white cards lifted with faint warm shadows.

## Known Gaps

- The `{component.button-primary}` background was not directly measured — the analyzer captured the button `color` property as `{colors.ink}` (#25221e), but all screenshots show a solid red button. The brand red (`{colors.accent-red}`) is assigned as background (derived) and the darker red (`{colors.accent-red-dark}`) as the press state (derived).
- Only four typography roles were measured (h1, h2, body, button). Smaller caption, eyebrow-label, and footer-link type sizes are visible in screenshots (e.g., the colored section eyebrows "Clear your mind", "Focus on what's important") but were not extracted — they likely use a smaller Inter or Graphik size.
- Graphik is a licensed commercial typeface and was not flagged in `fonts_licensed`; an open-source substitute is documented in the Typography section and must be used in any shipped build.
- Top-nav height, input dimensions, and exact card padding values were not individually measured — spacing is documented from the aggregate spacing scale.
- The eyebrow label colors (the small colored category labels above section heads) appear to use the accent reds/greens but were not isolated per-element.
- Responsive breakpoints are derived from two desktop-oriented captures; no mobile or tablet screenshot was measured, so collapse behavior is inferred.
- Animation, transition timings, and hover/focus styling were not captured.
- Decorative wave and sparkle illustration colors (greens, yellow) are documented from the accent palette frequency data but their exact placement and SVG specs are out of scope.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/todoist/design-md -->
