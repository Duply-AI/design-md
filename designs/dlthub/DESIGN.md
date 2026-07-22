---
version: alpha
name: dltHub-design-analysis
description: A developer-tools interface built on a deep indigo-navy canvas with monospaced display type, lime-chartreuse brand accents, and a periwinkle-purple action color. The system reads as engineered and product-first — dark hero bands carrying monospace headlines give way to crisp white proof sections, with rounded cards (~16px), pill-shaped controls, and embedded terminal/product UI fragments. Brand voltage comes from the ABC Diatype Mono headlines and the electric lime accent rather than from imagery.

colors:
  canvas: "#ffffff"
  ink: "#23262e"
  ink-deep: "#111827"
  surface-dark: "#191937"
  surface-purple: "#4c4898"
  on-primary: "#eceef2"
  lime: "#c6d300"
  lime-bright: "#f3ff36"
  cyan: "#59c1d5"
  cyan-soft: "#a8dee9"
  lavender: "#aaa8d4"
  body: "#b1b9c8"
  body-strong: "#374151"
  slate: "#505b73"
  slate-dark: "#4b5563"
  slate-muted: "#677590"
  muted: "#8693aa"
  neutral: "#9ca3af"
  hairline: "#e5e7eb"
  hairline-soft: "#d1d5db"

typography:
  display-xl:
    fontFamily: "ABC Diatype Mono, ui-monospace, monospace"
    fontSize: 62px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: normal
  title:
    fontFamily: "ABC Diatype Mono, ui-monospace, monospace"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: normal
  subtitle:
    fontFamily: "ABC Diatype Mono, ui-monospace, monospace"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.556
    letterSpacing: normal
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.556
    letterSpacing: normal
  button:
    fontFamily: "ABC Diatype Mono, ui-monospace, monospace"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: normal

rounded:
  xxs: 2px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px
  section: 48px

components:
  top-nav:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
  button-primary:
    backgroundColor: "{colors.surface-purple}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: 8px 12px
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: 8px 12px
  search-input:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 8px 12px
  hero-band:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    padding: 48px
  pro-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 32px
  feature-card-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.subtitle}"
    rounded: "{rounded.xl}"
    padding: 24px
  stat-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.xl}"
    padding: 24px
  testimonial-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body-strong}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 24px
  badge-pill:
    backgroundColor: transparent
    textColor: "{colors.lime}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 4px 8px
  card-pill:
    backgroundColor: "{colors.surface-purple}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  code-block:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 16px
  cta-band:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.title}"
    rounded: "{rounded.xl}"
    padding: 48px
---

## Overview

dltHub's marketing surface is a developer-tools interface that alternates between a deep indigo-navy canvas (`{colors.surface-dark}` — #191937) and crisp white proof sections (`{colors.canvas}` — #ffffff). The brand voice is engineered and product-first: monospaced display headlines, an electric lime accent (`{colors.lime}` — #c6d300), and a periwinkle-purple action color (`{colors.surface-purple}` — #4c4898) that carries every primary CTA.

The type system is unusual and central to the brand — **ABC Diatype Mono** (a monospaced display face) is used for the h1, h2, h3, AND button labels, while a plain `ui-sans-serif` system stack handles body copy. The monospace headlines signal "this is a tool built by engineers" and give the hero its distinct cadence ("Claude/Codex/Cursor-native data engineering" set at 62px / 700).

Color voltage comes from two accents layered over the navy: the lime-chartreuse pair (`{colors.lime}` — #c6d300 and `{colors.lime-bright}` — #f3ff36) used for the "dlt" wordmark, small status labels, and graph highlights; and a cyan family (`{colors.cyan}` — #59c1d5, `{colors.cyan-soft}` — #a8dee9) used in glow shadows and OSS-callout gradients. The periwinkle-purple is the action layer — buttons and key cards.

The page rhythm is a deliberate dark→light→dark sandwich: dark navy hero → white "agentic workflow" proof section → dark workflow band → white detail/stats → dark closing CTA. White sections show the actual product (terminal output, workflow lists, schedule pickers) at small scale; dark sections carry the narrative headlines.

**Key Characteristics:**
- Deep indigo-navy primary canvas (`{colors.surface-dark}` — #191937) with light text (`{colors.on-primary}` — #eceef2) for hero, workflow, and CTA bands.
- Monospaced display type (**ABC Diatype Mono**, substituted here) for ALL headings and buttons — a defining brand signal. Body copy switches to a neutral sans stack.
- Periwinkle-purple action color (`{colors.surface-purple}` — #4c4898) on primary buttons and feature cards. Buttons use a tight `{rounded.xs}` (4px) radius.
- Lime-chartreuse accent pair (`{colors.lime}` / `{colors.lime-bright}`) for the wordmark, micro-labels, and data highlights — used sparingly, never on large fills.
- White proof sections (`{colors.canvas}`) carrying real product/terminal UI fragments at small scale.
- Rounded language is split: tight `{rounded.xs}` (4px) on buttons, generous `{rounded.xl}` (16px) on content cards, and `{rounded.full}` (9999px) on pills, search field, and avatars.
- Soft colored glow shadows (cyan and indigo tints) provide elevation on dark surfaces rather than hard borders.

## Colors

### Brand & Accent
- **Action Purple** (`{colors.surface-purple}` — #4c4898): The primary action and card color. Primary CTAs, the Pro hero card, and category-block fills. The closest thing dltHub has to a "primary" brand color.
- **Lime** (`{colors.lime}` — #c6d300): The brand accent — the "dlt" half of the wordmark, micro-status labels ("PRO"), graph data, and a focus-ring glow (`rgba(198,211,0,0.145) 0 0 0 4px`). Used as a small chromatic spark, never as a large fill.
- **Lime Bright** (`{colors.lime-bright}` — #f3ff36): A higher-energy lime used in data-viz highlights and the growth-chart bars.
- **Cyan** (`{colors.cyan}` — #59c1d5) and **Cyan Soft** (`{colors.cyan-soft}` — #a8dee9): Secondary accents — they appear in the OSS-callout gradient panel and in glow shadows (`rgba(89,193,213,0.1) 0 18px 60px`).
- **Lavender** (`{colors.lavender}` — #aaa8d4): A muted periwinkle tint used in graph fills and subtle accent text on dark.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The white proof-section floor — workflow detail, stats, testimonials.
- **Surface Dark** (`{colors.surface-dark}` — #191937): The deep indigo-navy band — hero, agentic-workflow, and closing CTA. The dominant background of the page.
- **Surface Purple** (`{colors.surface-purple}` — #4c4898): Card and button fills layered over the navy.
- **Ink Deep** (`{colors.ink-deep}` — #111827): Near-black used for embedded code/terminal blocks.

### Text
- **Ink** (`{colors.ink}` — #23262e): Primary heading/body text on white sections.
- **Body Strong** (`{colors.body-strong}` — #374151): Running text in light testimonial cards.
- **Body** (`{colors.body}` — #b1b9c8): Default running-text color on dark surfaces — a light blue-gray.
- **On Primary** (`{colors.on-primary}` — #eceef2): Button labels and headlines on dark surfaces — a near-white.
- **Muted** (`{colors.muted}` — #8693aa): Secondary text on dark — sub-labels, placeholders, search field text.
- **Slate** (`{colors.slate}` — #505b73), **Slate Dark** (`{colors.slate-dark}` — #4b5563), **Slate Muted** (`{colors.slate-muted}` — #677590): Tertiary text and divider tones used across both modes.
- **Neutral** (`{colors.neutral}` — #9ca3af): Fine-print and disabled text.

### Lines
- **Hairline** (`{colors.hairline}` — #e5e7eb): 1px borders and dividers on white surfaces.
- **Hairline Soft** (`{colors.hairline-soft}` — #d1d5db): A slightly stronger divider on white surfaces.

## Typography

### Font Family
The system runs **ABC Diatype Mono** for all display and interactive type (h1, h2, h3, buttons) and a neutral `ui-sans-serif` system stack for body copy. ABC Diatype Mono is a commercial monospaced typeface — its even character widths and engineered look give dltHub its developer-tool identity. The mono face appears at weights 500–700; the body stack stays at 400.

The split is functional and strict:
- ABC Diatype Mono (mono, 500–700) — every headline, every button label
- ui-sans-serif (400) — paragraphs and long-form copy only

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 62px | 700 | 1.1 | normal | Hero h1 ("Claude/Codex/Cursor-native data engineering") |
| `{typography.title}` | 24px | 700 | 1.5 | normal | Section heads ("Complete agentic workflows…", CTA heads) |
| `{typography.subtitle}` | 18px | 600 | 1.556 | normal | Card titles, sub-section labels |
| `{typography.body}` | 18px | 400 | 1.556 | normal | Default running-text (sans) |
| `{typography.button}` | 16px | 500 | 1.0 | normal | Button labels, nav links, search placeholder (mono) |

### Principles
The monospace-for-everything-but-body rule is the brand voice — never set a headline or button in the sans face, and never set long-form body copy in the mono face. The mono headlines are what make dltHub read as engineered rather than marketed. Display weight tops out at 700 (h1, h2); h3 drops to 600; buttons sit at 500.

### Note on Font Substitutes
**ABC Diatype Mono** is a licensed commercial typeface (Dinamo) and is not freely redistributable. The closest open-source substitutes that preserve the geometric monospace signature are **Space Mono** (700 for display, 500 for buttons) or **JetBrains Mono**. **IBM Plex Mono** is a slightly humanist alternative. Never claim to ship ABC Diatype Mono — substitute and keep the weights (500/600/700) intact.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.xxxl}` 40px · `{spacing.section}` 48px.
- The highest-frequency measured steps are 8px (92×), 6px (43×), and 12px (52×) — the system leans on tight 4–12px increments for component-internal spacing, with 32–48px reserved for band separation.
- **Card internal padding:** `{spacing.xxl}` (32px) for the Pro card; `{spacing.xl}` (24px) for feature/stat/testimonial cards.
- **Button padding:** 8px × 12px (measured).

### Grid & Container
- **Editorial body:** Centered single-column content with a left-aligned hero (h1 + sub-copy + Pro card stacked on the left third).
- **Feature/workflow grids:** Multi-column category blocks at desktop; the agentic-workflow band uses a two-pane layout (skill list left, terminal/detail right).
- **Stat row:** 3-up metric cards ("6M+", "10,000+", "1,000+") at desktop.
- **Testimonials:** 2-up quote cards at desktop.

### Whitespace Philosophy
dltHub packs information densely inside its dark workflow bands (multi-column command lists, skill checklists) but opens up generous vertical breathing room (`{spacing.section}` 48px+) between major bands. The dark→light alternation does much of the visual separation work, so dividers are rarely needed.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, nav, hero text |
| Cyan glow | `rgba(89,193,213,0.1) 0px 18px 60px` and `rgba(89,193,213,0.14) 0px 0px 32px` | Floating product cards / terminal panels on dark |
| Indigo glow | `rgba(25,25,55,0.24) 0px 16px 40px` and `rgba(25,25,55,0.12) 0px 18px 50px` | Elevated cards over the navy canvas |
| Soft drop (light) | `rgba(52,57,70,0.1) 0px 20px 25px -5px, rgba(52,57,70,0.1) 0px 8px 10px -6px` | Cards on white proof sections |
| Ringed dark card | `rgba(255,255,255,0.1) 0px 0px 0px 1px, rgba(0,0,0,0.45) 0px 30px 80px` | High-emphasis floating dark panels (1px inset light hairline + deep cast shadow) |
| Lime focus ring | `rgba(198,211,0,0.145) 0px 0px 0px 4px` | Focus/active glow on interactive elements |

The elevation philosophy is **colored glow over hard shadow** — depth on dark surfaces comes from soft cyan and indigo light bleeds, occasionally paired with a 1px translucent-white inset ring. Light sections use a more conventional soft gray drop shadow.

### Decorative Depth
- A faint dotted/pixel texture overlays the dark hero band, adding subtle depth without competing with the headline.
- Embedded terminal and product-UI fragments carry their own internal chrome and shadows — shown as content, not system tokens.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xxs}` | 2px | Micro tags, tiny inline chips |
| `{rounded.xs}` | 4px | Primary + outline buttons (the signature tight CTA radius) |
| `{rounded.sm}` | 6px | Small inputs, list-row items |
| `{rounded.md}` | 8px | Code-snippet pills, secondary controls |
| `{rounded.lg}` | 12px | Embedded code/terminal blocks |
| `{rounded.xl}` | 16px | Content cards (Pro card, feature, stat, testimonial, CTA band) — the most frequent card radius |
| `{rounded.xxl}` | 24px | Larger panels / gradient callout containers |
| `{rounded.full}` | 9999px | Search field, badge pills, avatars, card-pill |

The radius language pairs a **tight 4px button** with **soft 16px cards** — the contrast is deliberate: controls feel crisp and engineered, content containers feel approachable. The `{rounded.full}` pill is the highest-frequency radius measured (38×), reflecting the search field, status pills, and avatars.

### Photography Geometry
Avatars in testimonial rows use `{rounded.full}` circles. Embedded product/terminal fragments retain native rectangular chrome with `{rounded.lg}`–`{rounded.xl}` corners.

## Components

### Top Navigation

**`top-nav`** — Dark navy nav bar (`{colors.surface-dark}`) pinned to the top of every page. Carries the dlt**Hub** wordmark at left (rendered with the lime "dlt" / off-white "Hub" split), a primary menu (Product, Customers, Resources, Pricing, Docs) center, and a right cluster: a `{component.search-input}` pill (⌘K), a GitHub star count, a `{component.button-primary}` ("Get started"), and a `{component.button-outline}` ("Login"). Menu items use `{typography.button}` (mono 16px / 500).

**`search-input`** — Pill-shaped search field. Background `{colors.surface-dark}`, placeholder text `{colors.muted}`, rounded `{rounded.full}`, padding 8px × 12px. Carries a search glyph and the ⌘K shortcut hint.

### Buttons

**`button-primary`** — The signature CTA ("Get started"). Background `{colors.surface-purple}` (#4c4898), text `{colors.on-primary}`, type `{typography.button}` (mono 16px / 500), padding 8px × 12px, rounded `{rounded.xs}` (4px). The tight 4px radius is a defining trait.

**`button-outline`** — Secondary CTA ("Login"). Transparent background with a 1px light outline, text `{colors.on-primary}`, same padding + radius as primary. Used for the lower-priority action in the nav cluster.

### Cards & Containers

**`hero-band`** — Dark navy hero (`{colors.surface-dark}`) carrying the 62px mono h1, a sans sub-paragraph in `{colors.body}`, and the Pro card at lower left. Vertical rhythm `{spacing.section}` (48px+).

**`pro-card`** — The dltHub Pro promo card inside the hero. Background `{colors.surface-dark}`, body text `{colors.body}`, rounded `{rounded.xl}` (16px), padding `{spacing.xxl}` (32px), 1px translucent border + indigo glow shadow. Carries the dltHub PRO lockup, a short description, a `{component.button-primary}`, and a fine-print line.

**`feature-card-light`** — Used in white proof sections (workflow detail, OSS callout). Background `{colors.canvas}`, text `{colors.ink}`, title in `{typography.subtitle}`, rounded `{rounded.xl}`, padding `{spacing.xl}` (24px), soft gray drop shadow.

**`stat-card`** — Metric cards ("6M+ PyPI downloads per month", "10,000+", "1,000+"). Background `{colors.canvas}`, large mono numeral in `{typography.title}`, supporting label in `{typography.body}`, rounded `{rounded.xl}`.

**`testimonial-card`** — Customer quote cards. Background `{colors.canvas}`, quote text in `{colors.body-strong}` via `{typography.body}`, rounded `{rounded.xl}`, padding `{spacing.xl}`. Carries a circular avatar + name + role at the bottom.

**`code-block`** — Embedded terminal / code snippet ("pip install dlt", "dltHub deploy --plat"). Background `{colors.ink-deep}` (#111827), mono text `{colors.on-primary}`, rounded `{rounded.lg}`, padding `{spacing.md}` (16px). Shown inside cards as real product chrome.

**`cta-band`** — The closing "Learn agentic data engineering" band. Background `{colors.surface-dark}`, text `{colors.on-primary}`, head in `{typography.title}`, a centered `{component.button-primary}` ("Start the free course"), rounded `{rounded.xl}`, padding `{spacing.section}` (48px).

### Tags / Pills

**`badge-pill`** — Small status labels ("PRO", "AVAILABLE IN DLTHUB PRO", "OPEN SOURCE FOUNDATION"). Transparent background, lime text (`{colors.lime}`), type `{typography.button}`, rounded `{rounded.full}`, padding 4px × 8px. Often paired with a small lime square glyph.

**`card-pill`** — A fully-rounded purple element (`{colors.surface-purple}`, `{rounded.full}`) measured on the page — used for avatar fills / circular accent tokens layered over the navy.

## Do's and Don'ts

### Do
- Set every headline and button in ABC Diatype Mono (substituted). The monospace voice is the core brand signal.
- Reserve `{colors.surface-purple}` (#4c4898) for primary CTAs and key cards. It is the action layer.
- Use the lime accents (`{colors.lime}`, `{colors.lime-bright}`) sparingly — wordmark, micro-labels, data highlights only.
- Alternate dark navy bands with white proof sections. The dark→light rhythm carries the page.
- Show real terminal/product UI fragments inside `{component.code-block}` and light cards — don't illustrate the product, embed it.
- Keep buttons at the tight `{rounded.xs}` (4px) radius and cards at `{rounded.xl}` (16px). The contrast is intentional.
- Use colored glow shadows (cyan / indigo) for elevation on dark surfaces.

### Don't
- Don't set body copy in the mono face, and never set a headline in the sans stack. The boundary is strict.
- Don't fill large surfaces with lime — it is a spark color, not a background.
- Don't put `{colors.surface-purple}` on white-section body cards; keep purple to actions and dark-mode cards.
- Don't round buttons beyond 4px or cards below 16px — it breaks the engineered/approachable contrast.
- Don't add hard borders for depth on dark surfaces; use the documented glow shadows.
- Don't document hover state — primary action and focus-ring (lime glow) only.

## Responsive Behavior

### Breakpoints
The captures were taken at desktop widths; the following is inferred from the layout structure and should be validated against live breakpoints (see Known Gaps).

| Name | Width | Key Changes (inferred) |
|---|---|---|
| Mobile | < 768px | Nav collapses to a menu trigger; hero h1 scales down from 62px; Pro card and hero copy stack single-column; feature/stat grids go 1-up |
| Tablet | 768–1024px | Nav tightens; workflow two-pane layout may stack; stat row 2-up |
| Desktop | 1024–1440px | Full nav with search + GitHub + dual CTAs; 3-up stat row; two-pane workflow band |
| Wide | > 1440px | Centered content with added outer margin |

### Touch Targets
- `{component.button-primary}` and `{component.button-outline}` measure 8px × 12px padding around a 16px mono label — verify these meet a 44px effective tap target on touch, padding up if needed.
- `{component.search-input}` is a full-width pill in the nav cluster.

### Collapsing Strategy
- The dark hero's left-aligned content column collapses to full-width on mobile, with the Pro card dropping below the copy.
- The agentic-workflow two-pane (skill list + terminal) stacks vertically on narrow screens.
- Stat and testimonial grids reduce column count rather than shrinking card content.

### Image Behavior
- Embedded terminal/product fragments retain native aspect ratios while their containing cards resize.
- Avatars crop to `{rounded.full}` circles at every breakpoint.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.pro-card}`, `{component.button-primary}`).
2. Variants (`-active`, `-disabled`, `-focused`) live as separate entries in `components:` — none are confirmed yet (see Known Gaps).
3. Use `{token.refs}` everywhere — never inline hex in a component.
4. Never document hover. Default and Active/Pressed only.
5. Headlines and buttons stay ABC Diatype Mono; body stays sans. The mono/sans split does not blur.
6. The action color is `{colors.surface-purple}`; the spark is `{colors.lime}`. Don't swap their roles.
7. When emphasizing on dark surfaces, reach for a colored glow shadow before a border.

## Known Gaps

- **Button states:** Only the default `button-primary` was measured (text `#eceef2`, radius 4px, padding 8px 12px). Active/pressed and disabled backgrounds were not captured; the lime focus-ring shadow (`rgba(198,211,0,0.145) 0 0 0 4px`) is the only interactive-state hint extracted. Background color for the primary button is taken from the periwinkle surface (`#4c4898`) observed in screenshots and the card measurement.
- **Card measurement ambiguity:** The single measured `card` returned `background #4c4898` with `radius 9999px` — likely a circular/pill element rather than a content card. Content-card radii are documented from the more frequent `{rounded.xl}` (16px) measurement and screenshot ground-truth.
- **ABC Diatype Mono** is a licensed commercial typeface; `fonts_licensed` was empty in the analysis but the family name confirms a paid face — open-source substitutes are documented in Typography. Do not ship the licensed font.
- **Letter-spacing** measured as "normal" across all roles; exact tracking values (if any) on the mono display face were not quantified.
- **Light-section text colors:** `#23262e` (ink) and `#374151` (body-strong) are mapped to white proof sections from frequency + screenshot context; per-element confirmation across all light cards was not performed.
- **Breakpoints and responsive collapse** are inferred from layout structure, not measured — only desktop captures were provided.
- **Animation/transition timings** (workflow accordion, chart reveal, copy-button feedback) are out of scope.
- **Gradient panels** (the cyan→purple OSS-callout background) were observed but not captured as discrete gradient tokens; only the constituent solid accents are recorded.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/dlthub/design-md -->
