---
version: alpha
name: Dimension-design-analysis
description: A dark, cinematic AI-product marketing surface built on a near-black canvas (#0c0c0c) overlaid with a blue-to-warm gradient hero. The system reads as quiet, premium, and software-native — white Geist display headlines, DM Sans body, fully-pill-shaped buttons and a floating pill navigation bar, and a large rounded product-mockup panel that shows the actual Dimension briefing UI as the hero artifact. Brand voltage comes from the gradient atmosphere and the in-product chrome rather than from chromatic accents, which stay near-monochrome with a rare red.
colors:
  primary: "#ffffff"
  on-primary: "#000000"
  ink: "#ffffff"
  body: "#ededed"
  muted: "#b2b2b2"
  muted-soft: "#8f8f8f"
  canvas: "#0c0c0c"
  surface: "#161616"
  surface-raised: "#1c1c1c"
  surface-raised-alt: "#1e1e1e"
  hairline: "#171717"
  hairline-soft: "#111111"
  pure-black: "#000000"
  accent-slate: "#374151"
  accent-red: "#dc2626"
  accent-red-pure: "#ff0000"
typography:
  display:
    fontFamily: "Geist, sans-serif"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
  display-alt:
    fontFamily: "system-ui, sans-serif"
    fontSize: 50px
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: 0
  heading:
    fontFamily: "Geist, sans-serif"
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.111
    letterSpacing: 0
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  button:
    fontFamily: "DM Sans, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: 0
rounded:
  xs: 2px
  sm: 4px
  md: 10px
  lg: 12px
  xl: 16px
  xxl: 24px
  pill: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 40px
  huge: 56px
components:
  floating-nav:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 14px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.button}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 14px
  announcement-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 6px 16px
  hero-panel:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.display}"
  feature-list-item:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body}"
  handles-list-row:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body}"
    padding: 14px 16px
  handles-list-row-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 14px 16px
  product-mockup-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xxl}"
    padding: 40px
  inline-chip:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  section-label:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.body}"
---

## Overview

Dimension's landing page is a dark, cinematic product surface built on a near-black canvas (`{colors.canvas}` — #0c0c0c) overlaid with a soft blue-to-warm atmospheric gradient. The page divides into two columns: a left editorial rail (introduction, hero headline, feature bullets, and a numbered "what it handles" list) and a right-side `{component.product-mockup-card}` showing the actual Dimension "Morning Briefing" UI at scale. The system reads as quiet, premium, and engineered — the product is the hero, not marketing illustration.

Type voice splits across three families: **Geist** for display headlines (h1, h3), **DM Sans** for body and UI labels, and a `system-ui` fallback observed on the h2 role. Headlines run weight 500 (medium, never heavy), and body copy runs an unusually heavy DM Sans weight 700 at 16px — giving running text a confident, legible presence against the dark canvas.

The signature shape language is the **pill** — `{rounded.pill}` (9999px) was the single most frequent radius in the analysis (51 occurrences). Buttons, the floating bottom navigation bar, and the announcement banner are all fully pill-shaped. Larger content surfaces use a generous `{rounded.xxl}` (24px) — the product-mockup card being the marquee example.

Color is near-monochrome: white ink (`{colors.ink}`), a ladder of grays for body and muted text, dark surface grays for raised panels, and a rare red (`{colors.accent-red}` — #dc2626 / `{colors.accent-red-pure}` — #ff0000) that appears only sparingly. There is no vivid brand accent in the chrome — the gradient atmosphere supplies the warmth.

**Key Characteristics:**
- Near-black canvas (`{colors.canvas}` — #0c0c0c) under a blue→warm gradient hero atmosphere. All chrome stays dark.
- Pill everything — `{rounded.pill}` buttons, floating nav, announcement banner. The pill is the dominant interactive silhouette.
- White primary button (`{colors.primary}` — #ffffff) with dark label (`{colors.on-primary}` — #000000), fully pill-shaped, compact 10×14 padding.
- Geist display headlines at weight 500 with tight line-height (1.0 at the largest size) — modern, precise, restrained.
- Heavy DM Sans body (weight 700, 16px) — body copy reads bold against the dark field.
- A floating pill navigation bar (`{component.floating-nav}`) anchored at the bottom of the viewport rather than a top bar.
- The product-mockup card (`{component.product-mockup-card}`) shows real Dimension UI — briefing text, inline chips, avatars — as the hero artifact.
- Inline chips (`{component.inline-chip}`) with small `{rounded.sm}` corners wrap entities (meeting names, people, channels) inside the briefing copy.

## Colors

### Brand & Action
- **Primary** (`{colors.primary}` — #ffffff): The action surface. The "Get Started" button is a white pill with dark text. White is the brand's loudest move on the dark canvas.
- **On Primary** (`{colors.on-primary}` — #000000): Dark label color on the white primary button.

### Accent (used sparingly)
- **Accent Slate** (`{colors.accent-slate}` — #374151): A muted slate observed in low frequency — used on subtle borders and UI tints inside the product mockup.
- **Accent Red** (`{colors.accent-red}` — #dc2626) and **Accent Red Pure** (`{colors.accent-red-pure}` — #ff0000): A rare red, the only chromatic accent in the system. Reserved for alerts / emphasis moments; appears at very low frequency and never on primary chrome.

### Surface
- **Canvas** (`{colors.canvas}` — #0c0c0c): The page floor — near-black with the gradient layered above.
- **Surface** (`{colors.surface}` — #161616): Raised panels — the product-mockup card, active list rows, announcement pill.
- **Surface Raised** (`{colors.surface-raised}` — #1c1c1c): The floating nav background and inline chips — one step brighter than `{colors.surface}`.
- **Surface Raised Alt** (`{colors.surface-raised-alt}` — #1e1e1e): An alternate raised tone for nested elements.
- **Hairline** (`{colors.hairline}` — #171717) and **Hairline Soft** (`{colors.hairline-soft}` — #111111): The barely-there divider tones between dark surfaces.
- **Pure Black** (`{colors.pure-black}` — #000000): Deepest shadow / text-on-light tone.

### Text
- **Ink** (`{colors.ink}` — #ffffff): Headlines and primary text — maximum contrast against the canvas.
- **Body** (`{colors.body}` — #ededed): Default running-text — the most frequent text color measured (954 occurrences).
- **Muted** (`{colors.muted}` — #b2b2b2): Secondary text — nav links, list labels, timestamps.
- **Muted Soft** (`{colors.muted-soft}` — #8f8f8f): Tertiary text — fine-print, captions, the smallest labels.

## Typography

### Font Family
The system runs three families. **Geist** carries the display headlines (h1, h3) — a modern geometric grotesque, weight 500. **DM Sans** carries body copy and UI labels (buttons, list rows) — notably at weight 700 for body, giving running text bold presence on the dark field. A `system-ui` fallback was measured on the h2 role (`{typography.display-alt}`) — this is the OS-native sans (San Francisco / Segoe / Roboto) and should be reconciled to Geist for consistency (see Known Gaps).

Both Geist and DM Sans are open-source (`fonts_licensed` is empty) and can ship directly. No substitution is required.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-alt}` | 50px | 500 | 1.12 | 0 | h2 role (measured `system-ui` — reconcile to Geist) |
| `{typography.display}` | 48px | 500 | 1.0 | 0 | Hero h1 ("The AI coworker that never sleeps.") — Geist |
| `{typography.heading}` | 36px | 500 | 1.111 | 0 | Section / sub headings ("Morning Briefing") — Geist |
| `{typography.body}` | 16px | 700 | 1.25 | 0 | Running text, feature bullets, list rows — DM Sans (heavy) |
| `{typography.button}` | 14px | 500 | 1.0 | 0 | Button labels, nav links, chips — DM Sans |

### Principles
Headlines stay at weight 500 — medium, never bold. Tight line-heights (1.0–1.12) keep multi-line display headlines compact and architectural. Body copy inverts the expectation by running heavy (DM Sans 700) — this is deliberate, making 16px text read confidently against the low-luminance canvas. Letter-spacing is `normal` (0) across every role; the type voice does not rely on tracking.

### Note on Font Substitutes
No licensed faces were detected. Geist and DM Sans are both freely available open-source web fonts and should be shipped as-is. Where `system-ui` was measured (the h2 role), prefer Geist to keep display type consistent with h1/h3.

## Layout

### Spacing System
- **Base unit:** 4px, with a frequent 6px and 8px secondary rhythm.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 40px · `{spacing.huge}` 56px.
- **Most frequent gaps:** 8px (34×) and 6px (25×) dominate small-element spacing (icon-to-label, chip padding); 16px (20×) and 40px (14×) handle component and section spacing.
- **Card internal padding:** `{spacing.xxl}` (40px) on the product-mockup card.
- **List-row padding:** ~14×16 on the numbered "handles" rows.

### Grid & Container
- **Two-column split:** A left editorial rail (~35% width) and a right product-mockup column (~65%) form the primary page layout.
- **Left rail:** Single-column stack — intro label, display headline, feature bullet list, CTA, then the numbered "What Dimension handles for you" list.
- **Right column:** A single large `{component.product-mockup-card}` that bleeds off the right edge.

### Whitespace Philosophy
The dark canvas does the heavy lifting — generous negative space around the hero headline and bullet list lets the gradient atmosphere breathe. The numbered list packs rows tightly with thin dividers, while the product mockup is given the most internal padding (40px) of any surface.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Editorial rail text, feature bullets, body sections |
| Inset hairline | `rgba(255,255,255,0.1) 0 0 0 1px inset` | Subtle 1px inner highlight on raised dark surfaces |
| Inner glow | `rgb(255,255,255) 0 6.7px 50.4px inset` | A bright inner-top glow on the product-mockup / hero surface — gives the dark panel a lit-from-above feel |
| Floating element | `rgba(0,0,0,0.08) 0 4px 12px` | The floating bottom nav and small lifted pills |
| Ringed surface | `rgba(255,255,255,0.1) 0 0 5px inset, rgba(0,0,0,0.4) 0 0 0 0.5px` | Hairline ring + soft inner glow on raised cards |

The elevation philosophy is **subtle and luminous** — on a dark canvas, depth comes from faint inner white glows and thin 0.5px dark rings rather than heavy drop shadows. The brightest measured shadow is a 50px inner-top white glow that makes panels feel lit from above.

### Decorative Depth
- The blue→warm gradient behind the hero is the primary atmospheric layer — it sits behind everything and is not a token; it is decorative background imagery.
- Inline chips inside the briefing copy carry their own faint surface tint (`{colors.surface-raised}`) to read as embedded tokens within running text.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 2px | Rare — micro accents |
| `{rounded.sm}` | 4px | Inline chips wrapping entities in briefing copy |
| `{rounded.md}` | 10px | Active list rows, small panels |
| `{rounded.lg}` | 12px | Mid-size cards / panels |
| `{rounded.xl}` | 16px | Larger nested cards |
| `{rounded.xxl}` | 24px | The product-mockup card and large surfaces (13× measured) |
| `{rounded.pill}` | 9999px | Buttons, floating nav, announcement banner — the dominant radius (51× measured) |

The radius story is bimodal: small inline chips at `{rounded.sm}`, large content surfaces at `{rounded.xxl}`, and a heavy reliance on `{rounded.pill}` for every interactive control. Mid-scale radii (16/17/19px) were also measured but cluster around the larger-surface end. Values such as 19px, 32px, 40px, 42px and 50px appeared at lower frequency and are folded into the nearest scale token.

### Photography / Mockup Geometry
The hero artifact is the product UI shown inside `{component.product-mockup-card}` at `{rounded.xxl}` (24px). Avatars inside the briefing (Dana, Marcus) are circular (`{rounded.pill}`). Inline entity chips use the small `{rounded.sm}` corner to read as tokens within text.

## Components

### Navigation

**`floating-nav`** — A pill-shaped navigation bar floating at the bottom-center of the viewport (not a top bar). Background `{colors.surface-raised}` (#1c1c1c), fully `{rounded.pill}`, padding 10×14. Carries the Dimension wordmark + mark at left, horizontal links (Features, Use Cases, Pricing) center, and a white `{component.button-primary}` "Get Started" at the right.

**`nav-link`** — Inline nav menu items in `{typography.button}` (DM Sans 14px / 500), color `{colors.muted}`. No background.

**`announcement-pill`** — A small pill banner pinned at the top ("Dimension is winding down on May 20, 2026 →"). Background `{colors.surface}`, text `{colors.muted}`, `{typography.button}`, fully `{rounded.pill}`.

### Buttons

**`button-primary`** — The signature CTA. Background `{colors.primary}` (#ffffff), label `{colors.on-primary}` (#000000), `{typography.button}` (DM Sans 14px / 500), fully `{rounded.pill}`, padding 10×14. Appears both in the hero rail and in the floating nav.

### Editorial Rail

**`hero-panel`** — Transparent over the gradient canvas. Carries a small intro label ("Introducing Dimension"), the `{typography.display}` h1, a feature bullet list, and the primary CTA. Text `{colors.ink}`.

**`feature-list-item`** — Icon + label rows in the hero ("Helps you get work done across 30+ apps"). Transparent background, text `{colors.body}`, `{typography.body}`. Small icon precedes each line with an ~8px gap.

**`section-label`** — Muted section caption ("What Dimension handles for you", "DUBAI 24°", "MORNING BRIEFING"). Text `{colors.muted}` (or `{colors.muted-soft}` for the smallest), `{typography.body}`.

**`handles-list-row`** — A row in the numbered capability list (Catch Up · 02, Action Plan · 03, …). Transparent background, text `{colors.body}`, `{typography.body}`, padding 14×16, separated by hairline dividers. The right edge carries a two-digit index in `{colors.muted-soft}`.

**`handles-list-row-active`** — The currently-selected row (Morning Briefing · 01). Background `{colors.surface}`, text `{colors.ink}`, rounded `{rounded.md}`, with a small vertical accent bar at the left edge.

### Product Mockup

**`product-mockup-card`** — The hero artifact: a large rounded panel showing the actual Dimension "Morning Briefing" UI. Background `{colors.surface}` (#161616), rounded `{rounded.xxl}` (24px), internal padding `{spacing.xxl}` (40px), lit with the inner-top white glow (see Elevation). Contains the briefing headline ("Good Morning, Steve.") in large display type, body briefing copy in `{typography.body}`, and embedded inline chips + circular avatars. The card bleeds off the right edge of the viewport.

**`inline-chip`** — Small token chips wrapping entities inside the briefing copy ("Product Roadmap Planning", "Dana", "#Eng"). Background `{colors.surface-raised}`, text `{colors.body}`, `{typography.button}`, rounded `{rounded.sm}`, padding 4×8. Often preceded by a small icon or circular avatar.

## Do's and Don'ts

### Do
- Keep the canvas near-black (`{colors.canvas}` — #0c0c0c) and let the blue→warm gradient supply the only warmth. Chrome stays dark.
- Use `{rounded.pill}` for every interactive control — buttons, nav, banners. The pill is the brand silhouette.
- Reserve `{rounded.xxl}` (24px) for large content surfaces like the product-mockup card.
- Make the primary CTA a white pill (`{colors.primary}`) with dark text (`{colors.on-primary}`) — it is the loudest element on the page.
- Show real product UI inside `{component.product-mockup-card}` — Dimension leads with its actual briefing chrome, not illustration.
- Keep headlines at Geist weight 500 with tight line-height; keep body at DM Sans 700 for confident legibility on dark.
- Use `{component.inline-chip}` to wrap meeting names, people, and channels inside running briefing copy.
- Float the navigation as a bottom pill (`{component.floating-nav}`) — the system's signature nav placement.

### Don't
- Don't introduce a vivid brand accent. The system is near-monochrome; the red (`{colors.accent-red}`) is rare and reserved for alerts.
- Don't use square corners on interactive controls — pills are mandatory for buttons and nav.
- Don't apply heavy drop shadows. Depth comes from faint inner white glows and thin 0.5px rings on dark surfaces.
- Don't lighten the canvas to a mid-gray; the dark floor is what makes the gradient and white type read.
- Don't set body copy below DM Sans 700 weight on the dark canvas — lighter weights lose presence.
- Don't mix `system-ui` and Geist in display headlines — reconcile h2 to Geist.

## Responsive Behavior

### Breakpoints
The analysis captured the desktop landing page only; the values below are derived from the observed two-column layout and standard practice.

| Name | Width | Key Changes (derived) |
|---|---|---|
| Mobile | < 768px | Two-column split stacks: editorial rail first, product mockup below; floating nav stays pill-shaped, links may collapse |
| Tablet | 768–1024px | Columns tighten; product mockup scales down but retains 24px corners |
| Desktop | 1024–1440px | Full two-column split — editorial rail left, product-mockup card bleeding off the right edge |
| Wide | > 1440px | Same layout with more outer breathing room around the canvas |

### Touch Targets
- `{component.button-primary}` padding 10×14 yields a compact pill; on touch surfaces it should grow toward a 44px effective tap height.
- `{component.floating-nav}` links sit within the pill bar; effective tap area is the surrounding pill.
- `{component.handles-list-row}` rows at 14×16 padding meet comfortable tap sizing.

### Collapsing Strategy (derived)
- The two-column hero collapses to a single column on mobile — headline + bullets + CTA first, then the product mockup.
- The floating bottom nav remains the persistent navigation affordance across breakpoints.
- The numbered "handles" list remains a single-column stack at every width.

### Image Behavior
- The product-mockup card scales proportionally; its briefing type and inline chips must remain legible at smaller sizes.
- The gradient background covers the full canvas at every breakpoint.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.product-mockup-card}`, `{component.floating-nav}`).
2. Variants of an existing component (e.g. `-active`) live as separate entries in `components:` — see `{component.handles-list-row-active}`.
3. Use `{token.refs}` everywhere — never inline hex in components.
4. Never document hover. Default and Active/Pressed states only.
5. Pills are the interactive silhouette — buttons, nav, banners stay `{rounded.pill}`; large surfaces stay `{rounded.xxl}`.
6. Headlines stay Geist 500; body stays DM Sans 700. Reconcile any `system-ui` display type to Geist.
7. The red accent is scarce — reach for white/gray emphasis before color.

## Known Gaps

- Only the desktop landing page was captured (`captured_pages: ["landing"]`); all responsive breakpoint behavior is derived, not measured.
- The h2 role was measured as `system-ui` 50px (`{typography.display-alt}`), while h1/h3 use Geist — this likely reflects a font-load fallback at capture time. The intended display face is Geist; treat the `system-ui` reading as a gap to reconcile.
- The single measured component (`button-primary`) reports `color: #ffffff` and a 9999px radius; whether `#ffffff` is the fill or the label was inferred from screenshot ground-truth (white pill, dark label). Button background/text mapping is documented but not independently measured.
- The blue→warm hero gradient is decorative background imagery and was not captured as a token (no gradient stops measured); its exact color stops are unknown.
- Numerous one-off radii (17, 19, 32, 40, 42, 50px) and spacing values were measured at low frequency and folded into the nearest scale token; the precise intended scale may differ.
- The red accents (`{colors.accent-red}` #dc2626, `{colors.accent-red-pure}` #ff0000) appeared at very low frequency (8× each); their exact semantic use (error vs. emphasis) could not be confirmed from a single page.
- Animation, transition timings, and any interactive states of the floating nav and list selection are out of scope.
- Form/input components were not present on the captured surface and are undocumented.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/dimension/design-md -->
