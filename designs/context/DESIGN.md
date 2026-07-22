---
version: alpha
name: Context.ai-design-analysis
description: "A dark, enterprise-AI platform interface built on near-black surfaces (#191919) with crisp white text, square-edged inputs, and a restrained two-tone accent system — electric purple (#c58cff) and signal green (#00d497). The system reads as serious, engineered tooling: tight letter-spacing on the SuisseIntl display face, product UI shown directly behind and inside the marketing flow, small 6px button radii, and pill-shaped chips. Brand voltage comes from real product chrome and the purple/green accent pair rather than decorative color."

colors:
  ink: "#191919"
  black: "#000000"
  canvas: "#ffffff"
  surface-soft: "#f8f8f8"
  surface-dark: "#191919"
  surface-dark-2: "#1f1f1f"
  surface-dark-3: "#1f2124"
  surface-dark-4: "#101618"
  surface-elevated: "#303235"
  border-dark: "#292f31"
  neutral-600: "#434547"
  muted: "#6b7280"
  muted-strong: "#5d5e61"
  on-dark: "#ffffff"
  accent-purple: "#c58cff"
  accent-purple-dark: "#2c152e"
  accent-green: "#00d497"
  accent-green-mid: "#236a4c"
  accent-green-deep: "#004e41"
  accent-green-deeper: "#003931"
  accent-green-deepest: "#002621"
  accent-teal-dark: "#162322"

typography:
  h1:
    fontFamily: "SuisseIntl, Inter, sans-serif"
    fontSize: 65px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -1.625px
  h2:
    fontFamily: "SuisseIntl, Inter, sans-serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.167
    letterSpacing: -0.468px
  h3:
    fontFamily: "SuisseIntl, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: 0.252px
  body:
    fontFamily: "SuisseIntl, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: 0.336px
  button:
    fontFamily: "SuisseIntl, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.143
    letterSpacing: normal

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 10px
  xxl: 12px
  img: 16px
  card: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 6px
  sm: 8px
  ms: 10px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 24px
  xxxl: 32px

components:
  button-primary:
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 0px 12px
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
  top-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
  chip-pill:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  product-surface-card:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
  product-surface-card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
  comparison-table-cell:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  newsletter-field:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
---

## Overview

Context.ai's marketing surface is a serious, engineered enterprise-AI interface. The visual signature is contrast: deep near-black surfaces (`{colors.surface-dark}` — #191919, the most-measured color by a wide margin) carrying crisp white text (`{colors.on-dark}` — #ffffff), alternating with clean white canvas (`{colors.canvas}` — #ffffff) sections holding product screenshots and comparison tables. The hero opens against a dark, blurred product-workspace mockup, then the page flows into light editorial bands.

The type voice is **SuisseIntl** at a single weight (400) across the entire system — there is no bold. Hierarchy comes from size and tight negative letter-spacing on the large display sizes (h1 at 65px with -1.625px tracking) rather than from weight contrast. This is a deliberately restrained, neutral-grotesque voice that reads as Swiss-precise and tool-like.

Brand voltage comes from two places: real product UI fragments (chat workspaces, file tables, authorization panels, comparison grids) shown directly inside the marketing flow, and a tight two-tone accent pair — **electric purple** (`{colors.accent-purple}` — #c58cff) and **signal green** (`{colors.accent-green}` — #00d497), backed by a family of deep green/teal surface tints used in product chrome. Accents appear sparingly — on data highlights, status, and small chrome moments — never on big editorial fills.

**Key Characteristics:**
- Dark near-black surfaces (`{colors.surface-dark}` — #191919) for nav and product chrome, white canvas for editorial bands. The system lives on both light and dark grounds.
- Single-weight SuisseIntl typography (400 everywhere). Hierarchy is size + letter-spacing, never weight.
- Tight negative tracking on display sizes (-1.625px on h1, -0.468px on h2) and slightly positive tracking on body/h3 — a measured grotesque rhythm.
- Small button radius (`{rounded.md}` — 6px) and square-edged inputs (`{rounded.none}` — 0px) signal precision tooling.
- Pill-shaped chips (`{rounded.pill}` — 9999px) for tags, status labels, and the "Book a demo" pill button.
- Two-tone accent pair — purple `{colors.accent-purple}` + green `{colors.accent-green}` — plus a deep-green/teal surface family (`{colors.accent-green-deep}`, `{colors.accent-green-deeper}`, `{colors.accent-green-deepest}`, `{colors.accent-teal-dark}`) used inside product UI.
- Real product chrome shown as content — chat workspaces, file managers, auth panels, comparison tables rendered at small scale inside the marketing pages.
- 4px base spacing grid; the most common steps are 6px and 8px (`{spacing.xs}`, `{spacing.sm}`), giving tight, dense product-adjacent layouts.

## Colors

### Brand & Accent
- **Accent Purple** (`{colors.accent-purple}` — #c58cff): The primary brand accent. Used on highlights, small chrome, and interactive emphasis. `{colors.accent-purple-dark}` (#2c152e) is its deep companion tint used as a tinted dark surface.
- **Accent Green** (`{colors.accent-green}` — #00d497): The signal/positive accent — used on data highlights (e.g., "94%" success figures), status, and accent moments. Backed by a graded family of deep greens: `{colors.accent-green-mid}` (#236a4c), `{colors.accent-green-deep}` (#004e41), `{colors.accent-green-deeper}` (#003931), `{colors.accent-green-deepest}` (#002621), and `{colors.accent-teal-dark}` (#162322) — these appear as tinted surfaces inside product UI fragments, not as editorial fills.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default light page floor for editorial bands.
- **Surface Soft** (`{colors.surface-soft}` — #f8f8f8): Light card and product-surface fills on white sections.
- **Surface Dark** (`{colors.surface-dark}` — #191919): The dominant dark surface — nav bar, dark product chrome, dark cards.
- **Surface Dark 2 / 3 / 4** (`{colors.surface-dark-2}` — #1f1f1f, `{colors.surface-dark-3}` — #1f2124, `{colors.surface-dark-4}` — #101618): Nested dark surfaces and panels inside product mockups.
- **Surface Elevated** (`{colors.surface-elevated}` — #303235): A lighter raised tone for elements on dark grounds.
- **Border Dark** (`{colors.border-dark}` — #292f31): Hairline/divider tone on dark surfaces.
- **Black** (`{colors.black}` — #000000): Pure black, used in deep chrome and logos.

### Text
- **Ink** (`{colors.ink}` — #191919): All headlines and primary text on light surfaces.
- **Muted** (`{colors.muted}` — #6b7280): Secondary text, captions, form placeholders.
- **Muted Strong** (`{colors.muted-strong}` — #5d5e61) and **Neutral 600** (`{colors.neutral-600}` — #434547): Tertiary text and labels, mostly inside product chrome.
- **On Dark** (`{colors.on-dark}` — #ffffff): Text on dark surfaces — the hero headline, nav links, dark cards.

## Typography

### Font Family
The system runs **SuisseIntl** for everything — display, headings, body, and buttons — at a single weight of 400. SuisseIntl is a licensed neutral-grotesque typeface; **it is not shipped here**. The documented substitute is **Inter**, which shares the grotesque proportions. The fallback stack is `SuisseIntl, Inter, sans-serif`.

Because there is only one weight, hierarchy is built entirely from **size** and **letter-spacing**: large display sizes carry tight negative tracking (-1.625px on h1, -0.468px on h2), while body and h3 carry slightly positive tracking (+0.336px, +0.252px) for legibility at small sizes.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.h1}` | 65px | 400 | 1.0 | -1.625px | Hero headline ("Build, deploy, and improve AI agents.") |
| `{typography.h2}` | 36px | 400 | 1.167 | -0.468px | Section heads ("All in one unified platform.", "Built for production work.") |
| `{typography.h3}` | 18px | 400 | 1.333 | 0.252px | Sub-section titles, card titles |
| `{typography.body}` | 16px | 400 | 1.375 | 0.336px | Default running text, descriptions |
| `{typography.button}` | 14px | 400 | 1.143 | normal | Button labels, nav links |

### Principles
The single-weight constraint is the discipline: never reach for bold to create emphasis. Make the headline bigger, or rely on the tight negative tracking that gives the display sizes their precise, compressed character. Body copy keeps its slightly-open positive tracking — do not apply display tracking to body text.

### Note on Font Substitutes
SuisseIntl is a licensed typeface and is not bundled. **Inter** at weight 400 is the documented open-source substitute — apply roughly -0.025em tracking on display sizes to approximate SuisseIntl's compressed display feel. The metrics differ slightly (Inter is marginally wider), but weight and tracking signatures are preserved.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 6px · `{spacing.sm}` 8px · `{spacing.ms}` 10px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 20px · `{spacing.xxl}` 24px · `{spacing.xxxl}` 32px.
- **Most-used steps:** 6px (`{spacing.xs}`) and 8px (`{spacing.sm}`) dominate the measured set — the layout is tight and dense, in keeping with a product-adjacent marketing surface.
- **Larger rhythms:** 32px (`{spacing.xxxl}`) is the largest frequently-measured step; section-level vertical rhythm beyond this was not captured (see Known Gaps).

### Grid & Container
- Editorial bands are centered with generous outer margins; module rows render as multi-up card grids (the "Modules for every role" band shows a 4-up arrangement).
- Comparison tables use a fixed multi-column layout (Context / Codex / Cowork / Vertical tools) with row labels at left.
- Product mockup bands place a large dark or light product surface centered within the white canvas.

### Whitespace Philosophy
The marketing surface alternates dense product chrome (tight 6–8px internal spacing) with airy white editorial bands. The contrast is intentional: product fragments feel packed and real, while the editorial copy around them breathes.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Dark nav, editorial bands, flat product chrome |
| Inset hairline | `rgba(0,0,0,0.08) 0px -1px 0px inset` | Bottom-edge dividers on chrome rows |
| Soft lift | `rgba(0,0,0,0.18) 0px 1px 4px` | Small floating chips / popovers |
| Card lift | `rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.06) 0px 4px 6px -4px` | Elevated product cards |
| Deep panel | `rgba(0,0,0,0.14) 0px 8px 24px -6px, rgba(0,0,0,0.06) 0px 2px 6px` | Raised dropdowns and floating panels |
| Layered ring | `rgba(0,0,0,0.08) 0px 0px 0px 1px, … 0px 16px 24px -8px` | Multi-layer ring + drop combination on a key product surface |

The elevation philosophy is **soft and precise** — thin 1px rings, low-alpha drop shadows, and inset top-edge highlights (`rgba(255,255,255,0.7) 0px 1px 0px inset`) that give controls a subtle physical edge. No heavy shadows, no glassmorphism.

### Decorative Depth
- Product UI fragments carry their own internal shadows from the product chrome itself — these are content, not system tokens.
- The hero's dark blurred workspace mockup sits behind the headline as an out-of-focus depth layer.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Text inputs — square edges signal precision tooling |
| `{rounded.xs}` | 2px | Small chrome accents, tight chips |
| `{rounded.sm}` | 4px | Small controls, inner chrome |
| `{rounded.md}` | 6px | Standard buttons (most common control radius) |
| `{rounded.lg}` | 8px | Product surface cards, panels |
| `{rounded.xl}` | 10px | Larger panels |
| `{rounded.xxl}` | 12px | Occasional larger card |
| `{rounded.img}` | 16px | Image / media containers |
| `{rounded.card}` | 24px | Large feature container (rare) |
| `{rounded.pill}` / `{rounded.full}` | 9999px | Chips, tags, status pills, pill buttons, avatars |

### Photography Geometry
Product screenshots and media containers use `{rounded.img}` (16px). Avatars and status dots inside product chrome use `{rounded.full}`. The mix of square inputs (0px) and pill chips (9999px) is a deliberate tension — square for entry fields, round for labels and state.

## Components

### Top Navigation

**`top-nav`** — Dark nav bar carrying the "Context" wordmark at left, a horizontal menu (Product, Solutions, Marketplace, Resources, Company, Blog) center, and a right cluster with a theme toggle, "Login", and a "Get started" button. Background `{colors.surface-dark}`, text `{colors.on-dark}`, links in `{typography.button}` (SuisseIntl 14px / 400).

### Buttons

**`button-primary`** — The standard CTA. Text `{colors.on-dark}` (#ffffff), type `{typography.button}` (14px / 400), rounded `{rounded.md}` (6px), padding 0 × 12px. The background fill was not captured in the measured set (see Known Gaps) — pair with a dark or accent surface in implementation.

**`chip-pill`** — Pill-shaped label/button (e.g., the "Book a demo" pill in the hero, status chips, and tags). Background `{colors.surface-soft}` on light grounds, text `{colors.ink}`, type `{typography.button}`, rounded `{rounded.pill}`.

### Cards & Surfaces

**`card`** — Measured as a pill-radius surface (`{rounded.pill}`) with no shadow — used for chip/tag-style content rather than large content cards. Background `{colors.canvas}`, text `{colors.ink}`.

**`product-surface-card`** — Light product-UI fragment container used inside the white editorial bands (file tables, chat workspaces, module previews). Background `{colors.surface-soft}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.lg}` (8px).

**`product-surface-card-dark`** — The dark counterpart used for on-prem appliance shots, authorization panels, and dark chrome. Background `{colors.surface-dark}`, text `{colors.on-dark}`, rounded `{rounded.lg}`.

### Inputs & Forms

**`input`** — Square-edged text input. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.none}` (0px). The square edge is a deliberate precision-tool signal.

**`newsletter-field`** — The "Enter your email" subscribe field in the product-updates band. Background `{colors.canvas}`, placeholder text `{colors.muted}`, type `{typography.body}`, rounded `{rounded.none}`, paired with a subscribe button.

### Tables

**`comparison-table-cell`** — Cell in the multi-column comparison grid (Context / Codex / Cowork / Vertical tools). Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`. Row labels sit at left; the "Context" column is the highlighted reference column.

## Do's and Don'ts

### Do
- Keep all type at SuisseIntl weight 400. Build hierarchy from size and letter-spacing, never from bold.
- Apply tight negative tracking on display sizes (-1.625px h1, -0.468px h2) and slightly positive tracking on body/h3.
- Use `{colors.surface-dark}` (#191919) for nav and dark chrome; alternate with white canvas bands for editorial copy.
- Keep buttons at `{rounded.md}` (6px) and inputs square at `{rounded.none}` (0px) — the radius contrast is part of the tooling voice.
- Reserve accent purple (`{colors.accent-purple}`) and green (`{colors.accent-green}`) for highlights, data, and small chrome — never large fills.
- Embed real product UI fragments inside marketing bands. Context shows the actual workspace, not illustrations of it.
- Use the deep green/teal family (`{colors.accent-green-deep}` etc.) only as tinted surfaces inside product chrome.

### Don't
- Don't introduce a second font weight to create emphasis — the single-weight discipline is the brand.
- Don't round text inputs — square edges are intentional.
- Don't flood editorial bands with accent color; the system is near-monochrome at the editorial layer.
- Don't apply display negative tracking to body copy — body keeps positive tracking for legibility.
- Don't add hover-state styling beyond default and active/pressed.
- Don't use pill radius (`{rounded.pill}`) on large content cards — it belongs to chips, tags, status, and pill buttons.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Nav collapses to a menu; hero h1 scales down from 65px; module grids stack to 1-up; comparison tables scroll horizontally or stack |
| Tablet | 768–1024px | Nav tightens; module grids reduce to 2-up; product surfaces scale proportionally |
| Desktop | 1024–1440px | Full horizontal nav; 4-up module grids; full multi-column comparison tables |
| Wide | > 1440px | Same as desktop with more outer breathing room |

### Touch Targets
- `{component.button-primary}` padding is 0 × 12px — vertical sizing/height was not measured; ensure a 44px effective tap height in implementation.
- `{component.chip-pill}` and pill buttons rely on padding to reach tap size.
- `{component.input}` square fields should meet a minimum 44px height on touch.

### Collapsing Strategy
- The horizontal top nav collapses to a menu trigger on mobile.
- Module card grids reduce columns (4 → 2 → 1) rather than scaling cards down.
- Comparison tables either scroll horizontally or restack into per-column blocks at small widths.
- Product surface mockups scale proportionally to keep chrome legible.

### Image Behavior
- Product screenshots retain native aspect ratios inside `{rounded.img}` containers.
- The hero's dark blurred workspace backdrop scales to fill behind the headline.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.product-surface-card}`, `{component.chip-pill}`).
2. Variants of an existing component (`-active`, `-disabled`, `-dark`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and active/pressed states only.
5. Type stays SuisseIntl 400 (Inter 400 substitute). Emphasis = bigger, never bolder.
6. Keep accent purple and green scarce — they punctuate, they don't fill.
7. When in doubt about surface: dark chrome (`{colors.surface-dark}`) for product, white canvas for editorial copy.

## Known Gaps

- **SuisseIntl is a licensed typeface** and is not bundled; Inter is documented as the open-source substitute.
- The `button-primary` **background fill was not captured** — only its text color (#ffffff), 6px radius, and horizontal padding were measured. Button height/vertical padding is also unmeasured. The "Get started" and "Book a demo" backgrounds should be confirmed against ground-truth.
- The measured `card` component reports a 9999px (pill) radius with no shadow — this likely reflects a chip/tag element captured by the card selector rather than a large content card; large editorial card radii were not reliably isolated.
- Section-level vertical spacing beyond 32px was not captured; large band padding is unknown.
- The exact assignment of the deep green/teal family (`{colors.accent-green-deep}`, `{colors.accent-green-deeper}`, `{colors.accent-green-deepest}`, `{colors.accent-teal-dark}`) to specific surfaces is inferred from product chrome; precise usage may vary.
- Light vs. dark theme behavior (a theme toggle is visible in the nav) was not separately extracted — both light and dark surfaces appear, but a full dual-theme token mapping is out of scope.
- Animation, transition timings, and hover/focus interaction states are not in scope.
- Form validation, error, and success states beyond the base `{component.input}` were not extracted.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/context/design-md -->
