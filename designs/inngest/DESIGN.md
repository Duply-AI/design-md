---
version: alpha
name: Inngest-design-analysis
description: A dark, developer-infrastructure marketing surface built on near-black canvas with oversized Whyte Inktrap display headlines, monospace uppercase button labels, and a single hot-orange primary CTA. The system reads as confident, technical, and editorial — giant outlined display type, inline code fragments shown as content, near-monochrome neutrals, and a tightly restrained accent palette where orange carries all primary action voltage. Brand voltage comes from scale (huge condensed display type) and from real code shown in the hero rather than from color.

colors:
  primary: "#fb5536"
  primary-active: "#ff5536"
  accent-gold: "#c2a46a"
  accent-lime: "#a8ef3c"
  accent-blue: "#7ca6ff"
  accent-cyan: "#1cb4d5"
  ink: "#ffffff"
  body: "#f6f6f6"
  muted: "#b3b3b3"
  muted-soft: "#9ca3af"
  canvas: "#000000"
  surface: "#0a0a0a"
  surface-soft: "#1a1a1a"
  surface-card: "#212121"
  surface-dark: "#020202"
  hairline: "#eaeaea"
  slate-deep: "#0f172a"
  slate: "#1e293b"
  slate-muted: "#64748b"
  slate-soft: "#cbd5e1"
  on-primary: "#ffffff"

typography:
  display:
    fontFamily: "Whyte Inktrap, Space Grotesk, Arial, sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.64px
  mega-display:
    fontFamily: "Whyte Inktrap, Space Grotesk, Arial, sans-serif"
    fontSize: 115.2px
    fontWeight: 400
    lineHeight: 0.82
    letterSpacing: -2.88px
  heading:
    fontFamily: "Whyte, Space Grotesk, Arial, sans-serif"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.32px
  eyebrow:
    fontFamily: "CircularXX, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
  button:
    fontFamily: "WhyteMono, JetBrains Mono, ui-monospace, monospace"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0.8px

rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 10px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 0px 6.48px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 20px
  button-light:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px 16px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    padding: 16px 32px
  card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 24px
  code-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 20px
  diagram-panel:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 24px
  logo-strip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"
    padding: 32px

---

## Overview

Inngest's marketing surface is a dark, technical, developer-infrastructure interface — a near-black canvas (`{colors.canvas}` — #000000) overlaid with a faint particle/star field, oversized condensed display headlines in **Whyte Inktrap**, and a single hot-orange primary CTA (`{colors.primary}` — #fb5536). The system reads as confident and engineering-credible rather than friendly-SaaS: type does the shouting, color stays restrained, and real code fragments appear directly in the hero as proof rather than decoration.

The type voice is the dominant brand signal. The hero stacks giant filled display words ("UNBREAKABLE AGENTS.") against giant outlined display words ("INVISIBLE INFRA.") — the filled/outline contrast is the marquee move. Headlines use **Whyte Inktrap** (display) and **Whyte** (sub-heads), both at weight 400 with negative letter-spacing, while button labels switch to a monospace uppercase face (**WhyteMono**) at 12px with positive tracking — a deliberate "terminal" signal that matches the developer audience.

Color voltage is intentionally scarce. Almost everything is white text (`{colors.ink}`) on black, with secondary copy stepping down to `{colors.body}` (#f6f6f6) and `{colors.muted}` (#b3b3b3). The only loud color is orange — it carries all primary action voltage (the START BUILDING button, the active code-step indicator). A small set of secondary accents (gold, lime, blue, cyan) and Tailwind-slate tones appear inside diagrams and throughput charts, never on CTAs.

**Key Characteristics:**
- Near-black canvas (`{colors.canvas}` — #000000) across the entire page; the only "surface" variation is subtle step-ups (`{colors.surface}` #0a0a0a → `{colors.surface-soft}` #1a1a1a → `{colors.surface-card}` #212121) for cards, code blocks, and diagram panels.
- Oversized condensed display type in `Whyte Inktrap` (substituted here with Space Grotesk) — filled vs. outlined headline contrast is the signature hero treatment.
- Single hot-orange CTA (`{colors.primary}` — #fb5536) is the only loud color in the action layer; everything else is monochrome.
- Monospace uppercase button + nav labels (`{typography.button}` — WhyteMono 12px / 600 / +0.8px tracking) signal "developer tool".
- Inline code fragments (`step.run()`, `step.waitForEvent()`) shown directly in the hero as content — the product's API is the marketing.
- Sharp-cornered buttons (`{rounded.none}` — 0px measured on the primary) sit alongside softly-rounded cards (`{rounded.sm}` — 6px). The radius split distinguishes action elements from content surfaces.
- Outline/inset borders rendered as `2px inset` white box-shadows on secondary buttons, rather than CSS borders.
- Tight, technical spacing rhythm on a 4px base; the densest values cluster at 8px, 16px, and 32px.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #fb5536): The single loud color and the only one used for primary action. The START BUILDING CTA, the active code-step dot. Press state shifts to `{colors.primary-active}` (#ff5536) — a near-identical hue measured separately (derived as the press/hover variant).
- **Accent Gold** (`{colors.accent-gold}` — #c2a46a): A secondary accent appearing in editorial/diagram moments. Never on CTAs.
- **Accent Lime** (`{colors.accent-lime}` — #a8ef3c), **Accent Blue** (`{colors.accent-blue}` — #7ca6ff), **Accent Cyan** (`{colors.accent-cyan}` — #1cb4d5): Series colors used inside the throughput chart and data-flow diagrams (the "Total runs throughput" graph and BEFORE/AFTER architecture panel). These are data-visualization accents, not brand accents.

### Slate / Diagram Neutrals
- **Slate Deep** (`{colors.slate-deep}` — #0f172a), **Slate** (`{colors.slate}` — #1e293b), **Slate Muted** (`{colors.slate-muted}` — #64748b), **Slate Soft** (`{colors.slate-soft}` — #cbd5e1): A cool Tailwind-slate ramp used inside architecture diagrams and chart gridlines. Distinct from the warm-neutral page surfaces.

### Surface
- **Canvas** (`{colors.canvas}` — #000000): The default page floor — pure black with a faint particle texture.
- **Surface Dark** (`{colors.surface-dark}` — #020202): The deepest section background, nearly indistinguishable from canvas.
- **Surface** (`{colors.surface}` — #0a0a0a): Code blocks, logo strips, low-elevation bands.
- **Surface Soft** (`{colors.surface-soft}` — #1a1a1a): Diagram panels, mid-elevation containers.
- **Surface Card** (`{colors.surface-card}` — #212121): The lightest dark surface — cards and elevated content blocks.
- **Hairline** (`{colors.hairline}` — #eaeaea): A light tone used for thin dividers and outline strokes on the dark canvas (also expressed as inset box-shadows — see Elevation).

### Text
- **Ink** (`{colors.ink}` — #ffffff): All display headlines and primary text — the dominant color by frequency.
- **Body** (`{colors.body}` — #f6f6f6): Running paragraph copy — a near-white that sits just below pure white.
- **Muted** (`{colors.muted}` — #b3b3b3): Secondary copy, code-comment text, captions.
- **Muted Soft** (`{colors.muted-soft}` — #9ca3af): Tertiary text, logo-strip labels, fine print.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on the orange CTA.

## Typography

### Font Family
The system runs a custom commercial type stack: **Whyte Inktrap** and **Whyte** (Dinamo) for display + headings, **CircularXX** (Lineto) for the small UI/eyebrow role, and **WhyteMono** for button and nav labels. None of these are open-source web fonts (see substitution note). The visual signature is condensed neo-grotesque display type at weight 400 with strong negative letter-spacing, paired with a wide-tracked monospace for UI controls.

The split is functional:
- Whyte Inktrap (display, 400 weight, negative tracking) — hero headlines, section heads
- Whyte (heading, 400 weight, -0.32px) — sub-section heads
- CircularXX (16px, 400) — small eyebrow / UI text role
- WhyteMono (12px, 600, +0.8px, uppercase) — buttons, nav links, code-step labels

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.mega-display}` | 115.2px | 400 | 0.82 | -2.88px | The very largest stacked hero display words (filled + outlined treatment) — Whyte Inktrap |
| `{typography.display}` | 64px | 400 | 1.25 | -0.64px | Section display headlines ("UNBREAKABLE AGENTS.") — Whyte Inktrap |
| `{typography.heading}` | 32px | 400 | 1.25 | -0.32px | Sub-section heads, large editorial paragraph lead-ins — Whyte |
| `{typography.eyebrow}` | 16px | 400 | 1.5 | normal | Small UI text / eyebrow role — CircularXX |
| `{typography.button}` | 12px | 600 | 1.0 | +0.8px | Button labels, nav links, code-step labels (uppercase mono) — WhyteMono |

### Principles
Scale carries the brand, not color. Inngest uses display type at extreme sizes (up to ~115px) with tight negative tracking to create editorial impact on the dark canvas. The filled-vs-outlined headline pairing is the signature — solid white display words stacked against stroked-outline display words.

Weight stays at 400 for all display and heading roles — the type face is condensed enough that weight 400 already reads as confident. The only weight shift is the monospace button label at 600. Keep the negative letter-spacing on display sizes; without it, the condensed grotesque loses its precision.

### Note on Font Substitutes
None of the production typefaces are open-source. Recommended substitutes that preserve the signature:
- **Whyte / Whyte Inktrap** → **Space Grotesk** (or **Archivo**) at weight 400 with negative letter-spacing approximates the condensed neo-grotesque character. The Inktrap variant's ink-trap detailing will not reproduce exactly, but the proportion and tracking signature survive.
- **CircularXX** → **Inter** or **Geist** at weight 400.
- **WhyteMono** → **JetBrains Mono** or **IBM Plex Mono** at weight 600 with uppercase + positive tracking.

Never claim to ship Whyte, Whyte Inktrap, Circular, or WhyteMono — they are licensed commercial faces.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px.
- **Most frequent values:** 32px (22 occurrences), 8px (21), 16px (19), 12px (17), 20px (16) — the rhythm clusters tightly, signaling a dense, technical layout rather than airy marketing whitespace.
- **Off-grid values:** 6px, 10px, 14px also appear (derived sub-steps); treat them as exceptions, not scale members.
- **Card internal padding:** `{spacing.xl}` (24px) for cards and diagram panels; `{spacing.lg}` (20px) for code blocks.

### Grid & Container
- **Hero:** A two-column split — giant display headlines + CTAs on the left, an inline code fragment column on the right (`step.run()` / `step.waitForEvent()` / `step.invoke()` with the expanded `waitForEvent` snippet).
- **Logo strip:** A single horizontal row of customer logos (cohere, SOUNDCLOUD, GITBOOK, Resend, AVOCA, Tripadvisor) directly below the hero.
- **Editorial bands:** Single-column large-type paragraph lead-ins, full-width diagram/chart panels.
- **Feature rows:** Multi-column ("Guardrails for scale" / "Full traces and metrics" / "Faster troubleshooting") above the throughput chart.

### Whitespace Philosophy
Inngest's whitespace is tight and technical, not generous. Type fills the frame; the dark canvas provides separation between bands rather than large empty margins. The dense spacing scale (heavy use of 8/16/32) keeps elements packed and engineered-feeling — closer to a developer dashboard than a consumer landing page.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border — pure `{colors.canvas}` | Body sections, hero, top nav |
| Surface step | Background lightens (`{colors.surface}` → `{colors.surface-soft}` → `{colors.surface-card}`) | Code blocks, diagram panels, cards — elevation by tone, not shadow |
| Inset outline | `rgb(255,255,255) 0px 0px 0px 2px inset` (measured, freq 4) | Secondary/outline buttons — a 2px white inner stroke instead of a CSS border |
| Floating element | `rgba(255,255,255,0.4) 0px 0px 0px 1px, rgba(0,0,0,0.45) 0px 4px 18px 0px` (measured, freq 1) | A single elevated floating element — 1px light ring + soft dark drop shadow |

The elevation philosophy is **tone-based, not shadow-based**. On a black canvas, lifting a surface means lightening it (#0a0a0a → #1a1a1a → #212121) rather than casting a shadow. Shadows appear only as crisp 2px inset outlines on buttons and one soft floating-element drop shadow.

### Decorative Depth
- A faint particle / star field overlays the canvas with sparse orange and white dots — purely decorative texture, not a token.
- The throughput chart and BEFORE/AFTER architecture diagram carry their own internal line colors (the lime/blue/cyan accents and slate gridlines) — these are content chrome, not system surfaces.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Primary CTA (measured 0px) — sharp-cornered action buttons |
| `{rounded.sm}` | 6px | Cards, code blocks, diagram panels (dominant radius, freq 24) |
| `{rounded.md}` | 8px | Slightly larger containers |
| `{rounded.lg}` | 10px | Larger panels (9px also measured as an off-step variant) |
| `{rounded.pill}` | 9999px | Pill elements — toggles, fully-rounded chips |

### Shape Language
The radius story splits cleanly: **action elements are sharp** (the orange primary CTA measured at 0px), while **content surfaces are softly rounded** (6px on cards and code blocks). This sharp-vs-soft contrast reinforces the technical, precise brand voice — buttons feel like keys, cards feel like panels. Pill radius (9999px) appears only on small toggle/chip elements.

## Components

### Top Navigation

**`top-nav`** — Black nav bar (`{colors.canvas}`) pinned to the top of every page. Carries the INNGEST wordmark + infinity-loop logo at left, a horizontal menu (PLATFORM, USE CASES, CUSTOMERS, RESOURCES, DOCS, PRICING) in uppercase mono `{typography.button}`, and a right-side cluster: an "OPEN SOURCE 6.9K" GitHub-stars indicator, a SIGN IN text link, and a START FREE `{component.button-light}`. Horizontal padding `{spacing.xxl}` (32px).

### Buttons

**`button-primary`** — The signature orange CTA (START BUILDING). Background `{colors.primary}` (#fb5536), text `{colors.on-primary}`, type `{typography.button}` (uppercase mono 12px / 600). Sharp corners (`{rounded.none}` — measured 0px). Press state `button-primary-active` shifts to `{colors.primary-active}` (#ff5536). Measured padding (0px × 6.48px) is anomalous — see Known Gaps; screenshot ground-truth shows roughly `{spacing.sm}` × `{spacing.lg}` internal padding.

**`button-secondary`** — Outline button (BOOK A DEMO). Transparent background, text `{colors.ink}`, rendered with a `2px inset` white box-shadow stroke rather than a CSS border. Type `{typography.button}`, sharp corners.

**`button-light`** — The white START FREE button in the top-right nav. Background `{colors.ink}` (#ffffff), text `{colors.canvas}` (near-black), type `{typography.button}`, rounded `{rounded.sm}` (6px). The only light-surface control in the system.

### Content Surfaces

**`card`** — Standard content card. Background `{colors.surface-card}` (#212121), rounded `{rounded.sm}` (6px), no shadow (elevation by tone). Internal padding `{spacing.xl}` (24px).

**`code-block`** — Inline API code fragment shown in the hero and feature sections (`step.run()`, the `await step.waitForEvent(...)` snippet). Background `{colors.surface}` (#0a0a0a), code text in `{colors.muted}` with active lines/labels stepping to `{colors.ink}` or `{colors.primary}`. Type `{typography.button}` (mono). Rounded `{rounded.sm}`, padding `{spacing.lg}` (20px). The code is the marketing — real API surface displayed as content.

**`diagram-panel`** — Full-width architecture/data-flow panel (the BEFORE/AFTER infrastructure diagram, the "Total runs throughput" chart). Background `{colors.surface-soft}` (#1a1a1a), rounded `{rounded.sm}`, padding `{spacing.xl}` (24px). Internal series colors draw from the accent ramp (`{colors.accent-lime}`, `{colors.accent-blue}`, `{colors.accent-cyan}`) and slate gridlines.

**`logo-strip`** — Horizontal customer-logo row below the hero. Background `{colors.surface}` (#0a0a0a), logos rendered in `{colors.muted}` monochrome, label text in `{typography.eyebrow}`. Vertical padding `{spacing.xxl}` (32px).

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#fb5536) for primary action only. Orange is the one loud color — keep it scarce.
- Use giant `Whyte Inktrap` display type as the primary brand expression; pair filled headlines against outlined headlines for the signature hero contrast.
- Keep display weight at 400 with negative letter-spacing. The condensed grotesque already reads as confident — don't bold it.
- Set buttons and nav labels in uppercase mono (`{typography.button}`) with positive tracking. The terminal voice is intentional.
- Express elevation by lightening the surface (#0a0a0a → #1a1a1a → #212121), not by adding shadows.
- Show real code fragments as content. Inngest sells durable execution — the API snippet IS the proof.
- Keep action elements sharp-cornered (`{rounded.none}`) and content surfaces softly rounded (`{rounded.sm}`). The split is deliberate.

### Don't
- Don't introduce a second loud accent on CTAs. The lime/blue/cyan/gold accents belong inside diagrams and charts only.
- Don't put body copy in the mono face or in Whyte Inktrap — keep running copy in the body/eyebrow roles.
- Don't add drop shadows to cards. Tone-based elevation is the system rule; only buttons (inset outline) and one floating element carry shadows.
- Don't round the primary CTA. Its sharp 0px corners are part of the technical voice.
- Don't lighten the canvas toward gray for whole sections — the brand lives on true black with subtle texture.
- Don't document hover states; the system encodes default and active/pressed (orange darkens to #ff5536) only.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Nav collapses to a condensed bar; hero display type scales down dramatically; hero code column stacks below headlines; multi-column feature rows go 1-up; diagram panels scroll/scale |
| Tablet | 768–1024px | Nav tightens; hero retains stacked display words at reduced size; feature rows 2-up |
| Desktop | 1024–1440px | Full hero two-column split (display + code), full horizontal nav, multi-column feature rows |
| Wide | > 1440px | Same as desktop with additional canvas breathing room; display type reaches its largest measured sizes |

### Touch Targets
- `{component.button-primary}` and `{component.button-secondary}` should meet a 44px minimum tap height; the measured component padding is anomalous (see Known Gaps) — pad to a comfortable target in implementation.
- `{component.button-light}` (START FREE) in the nav is a compact pill — ensure 44px effective tap area on touch.
- Nav links in mono 12px need generous surrounding padding to remain tappable.

### Collapsing Strategy
- The hero's two-column (display | code) layout collapses to single-column on mobile — headlines first, code fragment below.
- The mega-display type (115px) must scale aggressively on small screens to avoid horizontal overflow given its tight -2.88px tracking.
- Diagram panels (architecture BEFORE/AFTER, throughput chart) become horizontally scrollable or scale to fit rather than reflowing their internal nodes.
- The logo strip wraps to multiple rows on narrow viewports.

### Image / Diagram Behavior
- The particle/star background texture scales with the canvas and stays subtle at every breakpoint.
- Chart and diagram internal labels must remain legible — these panels scale proportionally rather than truncating.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.button-primary}`, `{component.code-block}`).
2. Variants of an existing component (`-active`, `-secondary`, `-light`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only (primary orange → #ff5536).
5. Display headlines stay Whyte Inktrap 400 with negative tracking; UI labels stay WhyteMono 600 uppercase. The boundary does not blur.
6. Orange is the only action color. Don't promote diagram accents (lime/blue/cyan/gold) into the CTA layer.
7. Elevate by tone, not shadow. When a surface needs to lift, step it up the #0a0a0a → #212121 ramp.
8. When in doubt about emphasis: bigger display type before any color change.

## Known Gaps

- **`button-primary` padding is anomalous.** The measured value `0px 6.48px` is almost certainly a capture artifact (an icon-padded or transform-scaled element). Real button padding should be derived from screenshot ground-truth — roughly `{spacing.sm}`–`{spacing.md}` vertical × `{spacing.lg}`–`{spacing.xl}` horizontal.
- **`body` typography measurement is anomalous.** The analysis recorded the body role at 115.2px / line-height 0.82 / -2.88px — this is the oversized hero display text, not running paragraph copy. Documented here as `{typography.mega-display}`. A clean running-body role (the "How you build apps and agents will change…" paragraph) was not cleanly measured and should be confirmed; it appears to be a Whyte/Circular face near 16–20px.
- **`h1` role measured at 16px CircularXX** — this is the small UI/eyebrow role, not the visual hero headline (which is an `h2` at 64px). Documented as `{typography.eyebrow}`.
- All production typefaces (Whyte, Whyte Inktrap, CircularXX, WhyteMono) are licensed commercial fonts; `fonts_licensed` was empty in the analysis but these are not open-source. Substitutes are documented in Typography.
- The accent ramp (gold / lime / blue / cyan) and slate tones were captured at low frequency from diagrams and charts; their exact roles within data-visualization series are inferred from screenshots, not fully mapped.
- The footer was not captured in the provided pages — its background, link structure, and treatment are unknown.
- Pricing-page-specific components (pricing tier cards, plan toggles) were captured as a page but no distinct pricing components surfaced in the measured component set; they are not documented here.
- Animation and transition timings (code-step cycling, BEFORE/AFTER diagram reveal, chart animation) are out of scope.
- Form/input states are not present in the measured data and are not documented.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/inngest/design-md -->
