---
version: alpha
name: LangChain-design-analysis
description: "A dark, developer-platform interface for the agent development lifecycle — built on a near-black blue-black canvas (#030710) with luminous pale-blue typography and a glowing cyan headline treatment. The system reads as engineered, technical, and calm: ultra-light Twklausanne display type at large sizes with tight negative tracking, monospaced-feeling Aeonik button/nav labels, square-cornered surfaces, and pill-shaped lifecycle tags floating over a faint line-art diagram. Brand voltage comes from the blue glow on the hero headline and the wide tonal range of pale-blue text on deep blue-black, not from saturated color blocks."
colors:
  canvas: "#030710"
  ink: "#cce9ff"
  muted: "#7fc8ff"
  accent: "#99d3ff"
  link: "#f2faff"
  surface-light: "#ffffff"
  black: "#000000"
  neutral-soft: "#eeeeee"
  neutral-mid: "#cccccc"
  neutral-dim: "#dddddd"
  surface-dark-soft: "#222222"
  surface-dark-mid: "#333333"
  accent-blue: "#3898ec"
  accent-soft: "#f8f7ff"
  accent-lavender: "#ebe8fe"
  accent-periwinkle: "#aeaef1"
  accent-sky: "#e5f4ff"
  accent-mauve: "#9d74a1"
  accent-rose: "#c8899a"
  accent-teal-dark: "#1d3d3c"
typography:
  display:
    fontFamily: "Twklausanne, Inter, sans-serif"
    fontSize: 56px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: -1.68px
  section:
    fontFamily: "Twklausanne, Inter, sans-serif"
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: -1.44px
  title:
    fontFamily: "Twklausanne, Inter, sans-serif"
    fontSize: 32px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: -0.96px
  body:
    fontFamily: "Twklausanne, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: normal
  button:
    fontFamily: "Aeonik, Space Grotesk, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 16px
  xl: 32px
  pill: 80px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  huge: 64px
components:
  promo-banner:
    backgroundColor: "{colors.accent-blue}"
    textColor: "{colors.surface-light}"
    typography: "{typography.button}"
    padding: 16px 24px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 16px 24px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  button-primary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 25.6px 10px
  button-filled:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 25.6px 10px
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 25.6px 10px
  pill-label:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    padding: 64px
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  product-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  use-case-card:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.canvas}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.neutral-soft}"
    padding: 32px
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 12px 16px
---

## Overview

LangChain's marketing surface is a dark developer-platform interface for "the Agent Development Lifecycle." The page floor is a near-black blue-black canvas (`{colors.canvas}` — #030710), and almost all text is rendered in luminous pale blues that sit on a single cool hue family: `{colors.ink}` (#cce9ff) for primary text, `{colors.muted}` (#7fc8ff) for secondary, `{colors.accent}` (#99d3ff) for highlights. The result reads as engineered, technical, and quiet — closer to a developer console than a consumer SaaS site.

Type voice splits into two roles. **Twklausanne** (a custom/commercial grotesque, substituted with Inter here) carries all display and body copy at an unusually light weight — 300 across every size, with tight negative letter-spacing (-0.96px to -1.68px on display sizes). **Aeonik** (also commercial, substituted with Space Grotesk) carries the button and nav labels at weight 400 — these read with an almost monospaced, technical cadence in the screenshots. The contrast between airy light display type and crisp utilitarian labels is the system's core typographic signature.

The brand's one moment of voltage is the **hero headline glow** — the words "Powering the Agent Development Lifecycle" carry a soft cyan halo (`rgba(127, 200, 255, 0.5) 0 0 32px`) that makes the type feel backlit against the blue-black void. Beneath the hero, a faint line-art "lifecycle" diagram fans out, captioned by pill-shaped tags (Build / Test / Deploy / Monitor).

**Key Characteristics:**
- Blue-black canvas (`{colors.canvas}` — #030710) under everything; the page is dark-first, with one inverted light section ("Build with our open source frameworks") on `{colors.surface-light}` (#ffffff).
- Monochrome-blue text system: `{colors.ink}`, `{colors.muted}`, `{colors.accent}`, `{colors.link}` are all variations of pale blue — hierarchy is built from tonal steps within one hue, not from color contrast.
- Ultra-light display type: Twklausanne at weight 300, never heavier, with tight negative tracking.
- Square corners: buttons and cards measure `{rounded.none}` (0px); only inputs (6px), product mockups (16px), and lifecycle pills (80px) round off.
- The hero headline glow (`rgba(127, 200, 255, 0.5) 0 0 32px`) is the single decorative-depth effect in the system.
- A bright blue promo bar (`{colors.accent-blue}` — #3898ec) pins the very top of the page — the only saturated color block.
- Pill-shaped lifecycle labels (`{rounded.pill}` — 80px) float over a faint diagram, captioning the build→monitor flow.

## Colors

### Brand & Accent
- **Ink** (`{colors.ink}` — #cce9ff): The dominant text color — pale ice-blue used for headlines, primary body, and most button labels. On the dark canvas it behaves like "white" but carries a cool tint.
- **Muted** (`{colors.muted}` — #7fc8ff): Secondary text — sub-headings, captions, the lifecycle pill labels. Also the source hue of the hero glow shadow.
- **Accent** (`{colors.accent}` — #99d3ff): Highlight blue used on emphasized words and small accent moments.
- **Link** (`{colors.link}` — #f2faff): Near-white blue used on link text — the brightest text tone in the system.
- **Accent Blue** (`{colors.accent-blue}` — #3898ec): The single saturated brand blue — used only on the top promo banner. It is the loudest color on the page.

### Surface
- **Canvas** (`{colors.canvas}` — #030710): The blue-black page floor under hero, nav, cards, and most bands.
- **Surface Light** (`{colors.surface-light}` — #ffffff): The inverted light section background (open-source frameworks band) and use-case cards.
- **Black** (`{colors.black}` — #000000): Deepest fill, used in nested UI chrome and mockup screens.
- **Neutral steps** (`{colors.neutral-soft}` #eeeeee, `{colors.neutral-mid}` #cccccc, `{colors.neutral-dim}` #dddddd): Light grays used for logo-strip marks and text on the inverted light section.
- **Dark neutrals** (`{colors.surface-dark-soft}` #222222, `{colors.surface-dark-mid}` #333333): Hairline/divider and nested-card tones on the dark canvas.

### Accent Pastels (product UI / chart palette)
A small pastel set appears inside the product-mockup chart fragments and decorative diagrams: `{colors.accent-soft}` (#f8f7ff), `{colors.accent-lavender}` (#ebe8fe), `{colors.accent-periwinkle}` (#aeaef1), `{colors.accent-sky}` (#e5f4ff), `{colors.accent-mauve}` (#9d74a1), `{colors.accent-rose}` (#c8899a), `{colors.accent-teal-dark}` (#1d3d3c). These are data-viz and embedded-product tones, never used on hero CTAs.

## Typography

### Font Family
The system runs **Twklausanne** for all display + body copy and **Aeonik** for button/nav labels. Twklausanne (a commercial grotesque) is used exclusively at weight 300 — its airy lightness at large sizes is the brand's defining feature. Aeonik (also commercial) handles UI labels at weight 400, reading with a crisp, technical, near-monospaced cadence in the captured screenshots.

The split is functional:
- Twklausanne (display + body, weight 300, negative tracking) — h1–h4, paragraphs
- Aeonik (UI labels, weight 400, normal tracking) — buttons, nav, pill captions

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 56px | 300 | 1.1 | -1.68px | Hero h1 / h3 ("Powering the Agent Development Lifecycle") — Twklausanne |
| `{typography.section}` | 48px | 300 | 1.1 | -1.44px | Section heads (h2) — Twklausanne |
| `{typography.title}` | 32px | 300 | 1.1 | -0.96px | Sub-section heads (h4), card titles — Twklausanne |
| `{typography.body}` | 18px | 300 | 1.4 | normal | Default running text, descriptions |
| `{typography.button}` | 16px | 400 | 1.5 | normal | Button labels, nav links, pill captions — Aeonik |

### Principles
Display weight never moves off 300 — the airy lightness is the brand. Pair light Twklausanne display with the slightly heavier Aeonik labels; never set body copy in Aeonik or button labels in Twklausanne. The negative tracking on display sizes (-0.96 to -1.68px) is part of the voice — set without it, the headlines read too loose for the system.

### Note on Font Substitutes
Both **Twklausanne** (TWK Lausanne) and **Aeonik** are commercial typefaces and are not shipped here. For Twklausanne, **Inter** at weight 300 with ~-0.03em tracking is a usable open-source approximation; **Hanken Grotesk Light** is a closer grotesque match. For Aeonik, **Space Grotesk** at weight 400 preserves the technical, slightly geometric cadence of the UI labels. The fallback stacks in this spec encode those substitutes.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.huge}` 64px.
- **Most frequent units:** 16px (30×), 8px (27×), 24px (27×), 4px (26×), 12px (22×) — the dense small-step rhythm dominates, with 40/48/64px reserved for band separation.
- **Card / band padding:** `{spacing.lg}` (24px) inside content cards; `{spacing.huge}` (64px) for major vertical band separation.

### Grid & Container
- **Editorial body:** Centered single column for hero; multi-column grids for logo strips and use-case cards.
- **Logo strip:** Multi-row wrapped grid of customer marks beneath the hero.
- **Product feature rows:** Two-up split — text on the left, `{component.product-mockup-card}` on the right (Observability, Evaluation, Deployment, Fleet bands).
- **Use-case cards:** 3-up on the inverted light section (Klarna / monday.com / Podium).

### Whitespace Philosophy
The hero is generous and centered — large light headline, short sub-line, two CTAs, then a tall faint diagram zone. Below the fold the rhythm tightens into dense feature rows with embedded product UI. The dark canvas does a lot of the spacing work: large negative areas of blue-black let the pale-blue type and glowing headline breathe.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Cards (`shadow: none`), most bands, nav |
| Hero glow | `rgba(127, 200, 255, 0.5) 0 0 32px` | The hero headline backlit halo — the system's signature depth effect |
| Embedded product chrome | Native shadows inside mockup UI | Product-mockup cards (charts, agent consoles) carry their own internal chrome shadows as content |

The elevation philosophy is **flat-on-dark with one glow**. Surfaces don't lift off the canvas with drop shadows — the page reads as a single deep plane. Depth is implied only by the cyan glow on the hero headline and by the faint line-art lifecycle diagram fanning out behind the hero.

### Decorative Depth
- The lifecycle diagram (curved hairline paths fanning from Build/Test/Deploy/Monitor pills) is a faint line-art layer behind the hero — pure decoration, drawn in low-alpha blue strokes.
- Product-mockup cards display real LangSmith product UI (trace consoles, evaluation charts, agent dashboards) — these carry their own internal shadows from the product chrome, not system tokens.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Buttons (measured 0px) and cards (measured 0px) — the dominant square-corner look |
| `{rounded.sm}` | 6px | Text inputs (most frequent radius, 24×) |
| `{rounded.md}` | 8px | Small UI chips inside product mockups |
| `{rounded.lg}` | 16px | Product-mockup cards, use-case cards |
| `{rounded.xl}` | 32px | Larger rounded containers / image frames |
| `{rounded.pill}` | 80px | Lifecycle pill labels (Build / Test / Deploy / Monitor), rounded nav button wrappers |

### Photography & Diagram Geometry
The page is largely illustration- and UI-driven rather than photographic — the hero diagram is hairline line-art, and product imagery is real LangSmith UI shown inside `{rounded.lg}` (16px) mockup cards. Customer logos in the logo strip are monochrome marks.

## Components

### Promo Banner

**`promo-banner`** — A full-width bright blue bar pinned above the nav ("Catch up on everything we shipped at Interrupt → Explore the launches"). Background `{colors.accent-blue}` (#3898ec) — the only saturated block in the system — with `{colors.surface-light}` text in `{typography.button}`. Padding 16px × 24px.

### Top Navigation

**`top-nav`** — Dark nav bar on `{colors.canvas}`, carrying the LangChain wordmark + mark at left, a center menu (Products, Learn, Docs, Company, Pricing), and a right cluster with a filled "Try LangSmith" and an outlined "Get a demo." The right-side button cluster sits inside a `{rounded.lg}` rounded container. Labels in `{typography.button}` (Aeonik 16px / 400).

**`nav-link`** — Inline menu items, transparent background, `{colors.ink}` text in `{typography.button}`.

### Buttons

**`button-primary`** — The measured default button: transparent background, `{colors.ink}` (#cce9ff) text in `{typography.button}`, square corners (`{rounded.none}`), padding 25.6px × 10px. This matches the light-blue-on-dark outlined/ghost CTAs (e.g., "Get a demo," "Try LangSmith").

**`button-filled`** — The light filled CTA ("Start building"). Background `{colors.accent-soft}` (#f8f7ff, derived from screenshot — the filled background tone was not separately measured), text `{colors.canvas}`, square corners, padding 25.6px × 10px. Used as the single primary action in the hero.

**`button-outline`** — Hairline-bordered ghost button on the dark canvas, transparent background, `{colors.ink}` text, square corners. Used for secondary actions ("Get a demo," "Read the announcement").

### Lifecycle Pills

**`pill-label`** — Small pill-radius tags (Build / Test / Deploy / Monitor) floating over the hero diagram. Transparent fill with a faint border, `{colors.muted}` text in `{typography.button}`, rounded `{rounded.pill}` (80px), padding 8px × 16px.

### Cards & Containers

**`hero-band`** — Centered hero on `{colors.canvas}` with the glowing `{typography.display}` headline, a `{typography.body}` sub-line, the two hero CTAs, and the faint lifecycle diagram below. Vertical padding `{spacing.huge}` (64px).

**`card`** — Base content card: square corners (`{rounded.none}`), no shadow, `{colors.canvas}` background, `{colors.ink}` text. The flattest possible surface — it reads as part of the page plane.

**`product-mockup-card`** — Cards showing real LangSmith product UI (trace consoles, evaluation scatter charts, deployment graphs, Fleet dashboards). Background `{colors.canvas}`, rounded `{rounded.lg}` (16px), padding `{spacing.lg}` (24px). The product chrome inside carries its own internal styling and the pastel chart palette.

**`use-case-card`** — Cards on the inverted light section (Klarna / monday.com / Podium customer stories). Background `{colors.surface-light}` (#ffffff), text `{colors.canvas}`, `{typography.body}`, rounded `{rounded.lg}`, padding `{spacing.lg}`. These are the only light-surface cards in the system.

**`logo-strip`** — Multi-row customer logo grid beneath the hero. Background `{colors.canvas}`, monochrome marks tinted toward `{colors.neutral-soft}`. Padding `{spacing.xl}` (32px).

### Inputs

**`input`** — Text input (e.g., pricing/contact forms). Background `{colors.canvas}` (#030710), text `{colors.ink}`, `{typography.body}`, rounded `{rounded.sm}` (6px) — the one component that consistently rounds its corners. Padding 12px × 16px.

## Do's and Don'ts

### Do
- Build text hierarchy from tonal steps within the pale-blue family (`{colors.ink}` → `{colors.muted}` → `{colors.accent}`), not from saturated color.
- Keep display type in Twklausanne weight 300 with negative tracking. The airy lightness is the brand.
- Reserve `{colors.accent-blue}` (#3898ec) for the promo banner. It is the only saturated block — using it elsewhere breaks the monochrome calm.
- Use square corners (`{rounded.none}`) on buttons and cards. The hard edges are intentional and technical.
- Show real product UI inside `{component.product-mockup-card}` — LangChain documents its platform with actual LangSmith consoles, not illustrations.
- Apply the hero glow (`rgba(127, 200, 255, 0.5) 0 0 32px`) only to the marquee headline. It is a scarce, signature effect.
- Set UI labels in Aeonik weight 400 — the crisper, near-monospaced cadence differentiates actions from prose.

### Don't
- Don't bold Twklausanne display type past weight 300. Heavier weights destroy the light, engineered feel.
- Don't introduce a second saturated accent. The system is monochrome-blue with one promo blue.
- Don't add drop shadows to cards — they are flat on the canvas (`shadow: none`).
- Don't round button or card corners. Rounding is reserved for inputs (6px), mockups (16px), and lifecycle pills (80px).
- Don't put body copy in Aeonik or button labels in Twklausanne — the two faces have strict roles.
- Don't document hover state styling beyond default + pressed.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero display 56→~32px; CTAs stack; logo strip wraps to more rows; feature rows stack text-over-mockup; use-case cards 1-up |
| Tablet | 768–1024px | Nav tightens; feature rows may stay two-up or stack; use-case cards 2-up |
| Desktop | 1024–1440px | Full top nav with all menu items; two-up feature rows (text + mockup); 3-up use-case cards |
| Wide | > 1440px | Same as desktop with more outer breathing room; centered hero column caps width |

### Touch Targets
- `{component.button-primary}` / `{component.button-filled}` carry generous vertical padding (25.6px) yielding tall, comfortable tap targets.
- `{component.pill-label}` at 8px × 16px padding is small — used as a caption/tag, not a primary touch control.
- `{component.input}` uses 12px × 16px padding for a comfortable field height.

### Collapsing Strategy
- Top nav collapses to a hamburger on mobile; the button cluster moves into the menu sheet.
- The hero diagram (lifecycle fan) compresses; pill labels reflow above the curves.
- Feature rows collapse from two-up (text + `{component.product-mockup-card}`) to stacked single-column.
- Logo strip reflows to more rows at narrower widths rather than shrinking marks.
- Use-case cards step 3 → 2 → 1.

### Image Behavior
- Product-mockup UI retains aspect ratio inside `{rounded.lg}` cards; the cards resize.
- Customer logos stay monochrome and scale within the wrapped strip.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.product-mockup-card}`, `{component.pill-label}`).
2. Variants of an existing component (`-filled`, `-outline`, `-focused`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display type stays Twklausanne 300 with negative tracking; labels stay Aeonik 400. The split does not blur.
6. The page is dark-first; the inverted light section and use-case cards are the only `{colors.surface-light}` surfaces — add light surfaces sparingly.
7. The hero glow and the promo-banner blue are the only loud moments — keep everything else monochrome and flat.

## Known Gaps

- The button measurement reported `radius: 0px` and `padding: 25.6px 10px`, while the screenshots show subtly rounded CTA corners; the rounded appearance was not captured numerically, so square corners are documented from the measured value. The filled-button background (`button-filled`) is derived from the screenshot (`{colors.accent-soft}`) since only the text color (`{colors.ink}`) was measured.
- Twklausanne and Aeonik are commercial typefaces (not present in `fonts_licensed`, but clearly proprietary); open-source substitutes are documented in the Typography section and encoded in the fallback stacks. Exact licensed metrics may differ from substitutes.
- Card and surface fills on the dark canvas (nested feature cards, mockup container fills) were not separately measured beyond `radius` and `shadow: none`; `{colors.canvas}` is used as the documented background.
- Border/hairline tones for dividers and ghost-button outlines were not measured; `{colors.surface-dark-soft}`/`{colors.surface-dark-mid}` are noted as the likely divider family from the captured palette.
- Radius values of 19px and 20px appeared at very low frequency (1–2×) and are not promoted to named tokens.
- Only `landing` and `pricing` were captured; footer structure, form validation states, and full pricing-table component specs are not in scope.
- Animation/transition timings (diagram reveal, carousel on use-case cards, glow behavior) were not extracted.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/langchain/design-md -->
