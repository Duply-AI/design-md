---
version: alpha
name: Cerbos-design-analysis
description: "A developer-tooling marketing surface built on a bright white canvas with near-black CTAs and a single high-voltage amber-yellow accent system. The system reads as confident, technical, and friendly — Poppins display headlines paired with a monospace Fira Code body voice that signals \"engineering product,\" heavily rounded amber-tinted product illustration cards, and a strict monochrome action layer broken only by the yellow accent and the brand's cat mascot."
colors:
  primary: "#1b1c1e"
  primary-strong: "#000000"
  ink: "#1b1c1e"
  body: "#787776"
  muted: "#49494b"
  on-dark: "#ffffff"
  on-dark-soft: "#d0d0d0"
  accent: "#ffc11e"
  accent-bright: "#ffb901"
  accent-warm: "#ffc42a"
  accent-soft: "#ffe69c"
  accent-soft-2: "#ffe08f"
  accent-pale: "#fff0c7"
  accent-pale-2: "#fff4d6"
  accent-faint: "#fffaed"
  accent-tint: "#fde598"
  accent-deep: "#77520a"
  canvas: "#ffffff"
  surface-soft: "#f7f7f7"
  surface: "#eeeeee"
  hairline: "#dddcd9"
  hairline-soft: "#e5e5e5"
  on-primary: "#ffffff"

typography:
  h1:
    fontFamily: "Poppins, sans-serif"
    fontSize: 60px
    fontWeight: 600
    lineHeight: 1.067
    letterSpacing: normal
  h2:
    fontFamily: "Poppins, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.167
    letterSpacing: normal
  h4:
    fontFamily: "Poppins, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: normal
  h3:
    fontFamily: "Poppins, sans-serif"
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.412
    letterSpacing: normal
  body:
    fontFamily: "Fira Code, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.714
    letterSpacing: normal
  button:
    fontFamily: "Fira Code, ui-monospace, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal

rounded:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 32px
  xxl: 48px
  pill: 50px
  max: 72px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  huge: 72px

components:
  announcement-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    padding: 12px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    padding: 16px 32px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px 32px
  button-primary-active:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px 32px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  github-stars-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
  tab:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.h3}"
  tab-active:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.h3}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.h1}"
    padding: 72px
  feature-list-item:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.h3}"
  feature-icon-badge:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-deep}"
    rounded: "{rounded.md}"
  product-mockup-card:
    backgroundColor: "{colors.accent-faint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xxl}"
    padding: 32px
  capability-badge:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  status-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 8px 12px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 12px 16px
---

## Overview

Cerbos's marketing surface is a clean, developer-first interface — a bright white canvas (`{colors.canvas}` — #ffffff) with near-black primary CTAs (`{colors.primary}` — #1b1c1e), Poppins display headlines, and a single high-voltage amber-yellow accent system that carries the entire brand chroma. The system reads as confidently technical without being cold: generous whitespace, heavily rounded amber-tinted product cards, and a dark announcement strip that bookends the top of every page.

The typographic voice is the system's most distinctive signal: **Poppins** (geometric sans, weight 600) handles all headlines and labels, while **Fira Code** — a monospace face — handles body copy and button labels. That monospace body voice is deliberate: it signals "engineering product" and ties the marketing copy to the code-and-policy nature of the product. Few SaaS sites run monospace for running text; Cerbos does, and it reads as authentically developer-native.

Brand voltage comes from the **amber-yellow accent family** (`{colors.accent}` — #ffc11e and a wide ladder of soft tints down to `{colors.accent-faint}` — #fffaed) and from the friendly cat mascot shown inside amber-tinted product illustration cards. The accent never appears on a primary CTA — the action layer stays strictly monochrome (near-black buttons, white secondary buttons). Yellow lives in feature icon badges, illustration backgrounds, and brand moments only.

**Key Characteristics:**
- White canvas with near-black primary CTA (`{colors.primary}` — #1b1c1e). Buttons carry monospace Fira Code labels — an unusual, distinctly engineering-flavored choice.
- Two-font system: Poppins 600 for display + labels, Fira Code 400 for body + buttons. The boundary is strict and functional.
- A deep amber-yellow accent ladder (#ffc11e down through #fffaed) used for icon badges, illustration card backgrounds, and brand fills — never on action buttons.
- Heavily rounded surfaces: content cards at `{rounded.lg}` (16px), large illustration/product cards at `{rounded.xxl}` (48px). The big-radius card is a signature shape.
- Pill-shaped capability badges (`{rounded.pill}` — 50px) for the feature checklist row (ABAC, RBAC, ReBAC, etc.).
- A dark announcement bar (`{colors.primary}`) pinned above the nav — the only dark band in the upper page.
- A single strong drop shadow (`rgba(0,0,0,0.3) 0px 32px 68px`) reserved for the floating product mockup card.
- Spacing rhythm built on a tight 16px/32px backbone — these two values dominate every measured layout.

## Colors

### Brand & Accent
- **Accent** (`{colors.accent}` — #ffc11e): The signature amber-yellow. The dominant brand chroma — feature icon badges, illustration fills, mascot surround, highlight moments.
- **Accent Bright / Warm** (`{colors.accent-bright}` — #ffb901, `{colors.accent-warm}` — #ffc42a): Saturated neighbors of the core accent used in illustration gradients and hover/active accent moments.
- **Accent Tint Ladder** — A wide set of pale amber tints used for soft card and illustration backgrounds: `{colors.accent-soft}` (#ffe69c), `{colors.accent-soft-2}` (#ffe08f), `{colors.accent-tint}` (#fde598), `{colors.accent-pale}` (#fff0c7), `{colors.accent-pale-2}` (#fff4d6), `{colors.accent-faint}` (#fffaed). These build the layered glow inside product mockup cards.
- **Accent Deep** (`{colors.accent-deep}` — #77520a): The dark amber used for icon glyphs and text sitting on yellow fills — the only legible "dark accent" tone.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor.
- **Surface Soft** (`{colors.surface-soft}` — #f7f7f7): Capability-badge fills, very-soft section backgrounds.
- **Surface** (`{colors.surface}` — #eeeeee): Slightly stronger neutral fill for nested chips and dividers.
- **Hairline** (`{colors.hairline}` — #dddcd9): The 1px border tone on light surfaces — input borders, card outlines, divider lines.
- **Hairline Soft** (`{colors.hairline-soft}` — #e5e5e5): A barely-visible divider between sections on the shared white canvas.

### Text
- **Ink / Primary** (`{colors.ink}` — #1b1c1e): All headlines and primary text. Also the primary button + announcement bar background.
- **Primary Strong** (`{colors.primary-strong}` — #000000): The pure-black press/active state for primary buttons.
- **Body** (`{colors.body}` — #787776): Default running-text color and secondary labels.
- **Muted** (`{colors.muted}` — #49494b): Tertiary text, fine print.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #ffffff): Text on near-black buttons and the dark announcement bar.
- **On Dark Soft** (`{colors.on-dark-soft}` — #d0d0d0): Muted light text used on dark surfaces.

### Note
No success/warning/error semantic tokens were measured — the green/red status chips visible in the product illustration are product chrome shown as content, and their exact colors were not captured (see Known Gaps).

## Typography

### Font Family
The system runs a two-font split, both open-source (Google Fonts) — nothing licensed or proprietary was flagged:
- **Poppins** (geometric sans, weight 600) — all headlines (h1–h4) and bold labels. Fallback stack: `Poppins, sans-serif`.
- **Fira Code** (monospace) — body copy and button labels at weight 400. Fallback stack: `Fira Code, ui-monospace, monospace`.

The monospace body voice is the defining typographic decision. Most marketing sites use a humanist sans for body text; Cerbos uses Fira Code, which signals "this is a developer / policy / code product" the moment you read a paragraph. The Poppins/Fira Code pairing — friendly geometric display over technical monospace body — is the brand's core type contrast.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.h1}` | 60px | 600 | 1.067 | normal | Hero headline ("Authorize every identity. Govern every action.") — Poppins |
| `{typography.h2}` | 48px | 600 | 1.167 | normal | Section heads — Poppins |
| `{typography.h4}` | 20px | 600 | 1.2 | normal | Sub-section / card titles — Poppins |
| `{typography.h3}` | 17px | 600 | 1.412 | normal | Feature list-item titles, tab labels — Poppins |
| `{typography.body}` | 14px | 400 | 1.714 | normal | Running text, badges, captions — Fira Code (monospace) |
| `{typography.button}` | 16px | 400 | 1.5 | normal | Button + nav labels — Fira Code (monospace) |

### Principles
Poppins is the display + label voice; Fira Code is the body + interactive voice. The boundary is functional — never set a headline in Fira Code, never set running copy in Poppins. Display weight stays at 600 across all sizes; body and buttons stay at 400. Note the unusual inversion: h3 (17px) is smaller than h4 (20px) — h3 is the dense feature-list title role while h4 is a slightly larger card/sub-section title. Both stay Poppins 600.

### Note on Font Substitutes
Both **Poppins** and **Fira Code** are freely available open-source typefaces (SIL Open Font License) and ship directly — no substitution is required. If Fira Code is unavailable, any monospace with similar weight (e.g. `JetBrains Mono`, `IBM Plex Mono`) preserves the engineering-body signature; if Poppins is unavailable, `Inter` or `Montserrat` at weight 600 approximate the geometric display feel.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.huge}` 72px.
- **Dominant rhythm:** 16px (`{spacing.md}`) and 32px (`{spacing.xl}`) overwhelmingly dominate the measured layout — they are the system's structural backbone for padding and gaps.
- **Section padding:** `{spacing.huge}` (72px) for major vertical band rhythm.
- **Card internal padding:** `{spacing.xl}` (32px).
- **Tight clusters:** `{spacing.xs}` (8px) and `{spacing.sm}` (12px) for chip/badge internal padding and small inline gaps.

### Grid & Container
- **Editorial body:** Centered single-column hero (headline + sub-head + button row stacked center), transitioning to multi-column feature and illustration layouts below.
- **Feature row:** Left-aligned feature-list-items (icon badge + title + description) paired with a right-side product illustration card.
- **Capability grid:** Pill badges wrap into centered multi-row rows (ABAC, RBAC, ReBAC, PBAC, Runtime, Event-time, etc.).

### Whitespace Philosophy
Cerbos uses generous centered whitespace in the hero, then tightens into a 16/32px rhythm for content bands. The layout favors a single clear hero message with one primary action ("Book a demo") and one secondary ("Try Cerbos"), never crowding the fold.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero band |
| Hairline | 1px `{colors.hairline}` border | Inputs, secondary buttons, capability badges |
| Soft fill | `{colors.surface-soft}` background, no shadow | Capability badges, neutral chips |
| Strong float | `rgba(0,0,0,0.3) 0px 32px 68px 0px` | The floating product mockup card — the single strong shadow in the system |

The elevation philosophy is **mostly flat with one dramatic exception**. Only one box-shadow was measured (`rgba(0,0,0,0.3) 0px 32px 68px 0px`) — a deep, soft, far-cast shadow reserved for the hero product mockup card to lift it off the canvas. Everything else relies on hairline borders and amber-tinted fills for separation.

### Decorative Depth
- The amber tint ladder (`{colors.accent-faint}` → `{colors.accent-soft}`) builds a layered radial glow inside product illustration cards.
- The cat mascot and green/red status chips inside illustration cards carry their own product-UI chrome shown as content — these are not system tokens.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 2px | Rare small accents |
| `{rounded.sm}` | 4px | Small inline elements |
| `{rounded.md}` | 8px | Buttons, small chips |
| `{rounded.lg}` | 16px | Content cards (the most common card radius) |
| `{rounded.xl}` | 32px | Larger nested cards |
| `{rounded.xxl}` | 48px | Large product / illustration cards (the signature big-radius shape) |
| `{rounded.pill}` | 50px | Capability badges, status pills, inputs |
| `{rounded.max}` | 72px | Largest rounded container corners |

The two dominant radii are `{rounded.lg}` (16px) and `{rounded.xxl}` (48px) — measured at high frequency. The 16px radius defines standard content cards; the 48px radius defines the big, friendly illustration and product mockup cards that carry the amber brand glow. The combination of a soft-but-tight 16px and an exaggerated 48px is part of the brand's friendly-technical character.

### Mascot & Illustration Geometry
The Cerbos cat mascot appears inside amber-filled illustration cards with `{rounded.xxl}` corners. Status chips inside those illustrations use pill radii. The brand logo lockup sits at top-left in the nav.

## Components

### Top Navigation

**`announcement-bar`** — A full-width dark strip pinned above the nav. Background `{colors.primary}` (#1b1c1e), text `{colors.on-dark}`, type `{typography.body}` (Fira Code 14px). Carries a single promotional message with an inline link ("IAM security checklist for 2026 → Download it here"). The only dark band in the upper page.

**`top-nav`** — White nav bar. Background `{colors.canvas}`, text `{colors.ink}`. Carries the Cerbos wordmark + cat logo at left, a GitHub stars badge ("4.5k"), the primary horizontal menu (Solutions, Product, Resources, Pricing) center, and a right-side cluster with `button-secondary` ("Try Cerbos") and `button-primary` ("Talk to an engineer"). Menu items in `{typography.button}` (Fira Code 16px).

**`nav-link`** — Inline nav menu item. Transparent background, `{colors.ink}` text, `{typography.button}`.

**`github-stars-badge`** — Inline GitHub star count chip in the nav. `{colors.canvas}` background, `{colors.body}` text, `{typography.body}`.

### Buttons

**`button-primary`** — The signature CTA. Background `{colors.primary}` (#1b1c1e), text `{colors.on-primary}` (#ffffff), type `{typography.button}` (Fira Code 16px / 400), rounded `{rounded.md}` (8px), padding 16px × 32px. Used for "Book a demo" and "Talk to an engineer". Active state `button-primary-active` shifts to pure black `{colors.primary-strong}` (#000000).

**`button-secondary`** — White outline button. Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.hairline}` border, same radius + padding as primary. Used for "Try Cerbos".

### Tabs

**`tab`** + **`tab-active`** — The hero feature switcher (Security / Engineering / IAM). Inactive: transparent background, `{colors.body}` text, `{typography.h3}`. Active: transparent background, `{colors.ink}` text, with an underline indicator. Used to filter the product mockup beneath the hero.

### Cards & Containers

**`hero-band`** — White-canvas centered hero. Eyebrow label ("Authorization management platform"), `{typography.h1}` headline, `{typography.body}` sub-head, then the button row. Vertical padding `{spacing.huge}` (72px).

**`product-mockup-card`** — The large amber-tinted illustration card beneath the hero showing the Cerbos mascot and access-decision UI fragments. Background `{colors.accent-faint}` (#fffaed) layered with the amber tint ladder, rounded `{rounded.xxl}` (48px), internal padding `{spacing.xl}` (32px). Carries the system's single strong drop shadow (`rgba(0,0,0,0.3) 0px 32px 68px`).

**`feature-list-item`** — Left-column feature entries inside the product band. Each pairs a `feature-icon-badge` with an `{typography.h3}` title and a `{typography.body}` description. Transparent background.

**`feature-icon-badge`** — Small rounded icon tile. Background `{colors.accent-soft}` (#ffe69c), glyph in `{colors.accent-deep}` (#77520a), rounded `{rounded.md}` (8px). The primary place the amber accent appears as a solid fill.

### Tags / Badges

**`capability-badge`** — Pill badges for the feature checklist row (ABAC, RBAC, ReBAC, PBAC, Runtime, Event-time, Admin-time, Audit-time, Cloud, Self-hosted, On-premise, Air-gapped, Workloads, etc.). Background `{colors.surface-soft}` (#f7f7f7), text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.pill}` (50px), padding 8px × 16px. Each carries a small checkmark glyph.

**`status-pill`** — Smaller pills shown inside the product illustration (e.g., "AI agent", "MCP client", "API", "Workload") with check/cross glyphs. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.pill}`, padding 8px × 12px. These are product chrome shown as content; their green/red accent glyph colors were not measured (see Known Gaps).

### Inputs

**`text-input`** — Standard text input. Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body}`, rounded `{rounded.pill}` (50px), padding 12px × 16px, 1px `{colors.hairline}` border. The pill radius matches the measured input radius (50px).

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#1b1c1e) for primary CTAs, headlines, and the announcement bar. Cerbos's button is near-black, never yellow.
- Use Poppins 600 for every headline and label; use Fira Code 400 for every paragraph and button. The two-font split is the brand voice.
- Keep the monospace body — it's the signature engineering signal. Don't swap Fira Code for a humanist sans on running text.
- Let the amber accent live in icon badges, illustration fills, and brand glow only. Keep the action layer monochrome.
- Use `{rounded.lg}` (16px) for content cards and `{rounded.xxl}` (48px) for big illustration/product cards. The big-radius card is signature.
- Use `{rounded.pill}` (50px) for capability badges and status chips.
- Reserve the strong drop shadow (`rgba(0,0,0,0.3) 0px 32px 68px`) for the floating hero product mockup — it's the only place that deep shadow belongs.

### Don't
- Don't put the amber accent on a primary CTA. The accent is a brand/illustration color, not an action color.
- Don't bold display weight beyond 600 or set body above 400. The weight contrast is fixed.
- Don't add additional drop shadows — the system is otherwise flat, relying on hairlines and tinted fills.
- Don't introduce dark surface cards on the white body; the only dark band is the announcement bar.
- Don't mix the radii randomly — 16px for content, 48px for illustration, 50px for pills, 8px for buttons.
- Don't document hover states — primary darkens to pure black on press; nothing else changes.

## Responsive Behavior

### Breakpoints
The captured renders confirm a desktop layout and a full-page narrow render; explicit breakpoint widths were not measured. The following is the observed collapsing behavior (the desktop→mobile transition is **derived** from the two captured render widths).

| Name | Behavior |
|---|---|
| Desktop | Full horizontal nav with all menu items, GitHub badge, and both CTAs; hero centered; feature list + product illustration side-by-side |
| Mobile (derived) | Nav collapses to a compact lockup; hero headline scales down from 60px; product illustration card stacks below the feature list; capability badges wrap into more rows |

### Touch Targets
- `{component.button-primary}` and `{component.button-secondary}` use 16px × 32px padding, producing comfortable 44px+ tap heights.
- `{component.capability-badge}` and `{component.status-pill}` use 8–12px vertical padding; effective tap area is adequate with the pill silhouette.
- `{component.text-input}` uses 12px × 16px padding.

### Collapsing Strategy
- Hero stays single-column and center-aligned at all widths; only the headline size scales.
- The feature-list + product-mockup-card pair stacks vertically on narrow screens.
- Capability badges wrap fluidly into additional rows rather than shrinking.

### Image Behavior
- The amber product illustration card scales proportionally; the mascot and embedded status chips stay legible.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.product-mockup-card}`, `{component.capability-badge}`).
2. Variants of an existing component (`-active`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and Active/Pressed states only (primary darkens to `{colors.primary-strong}`).
5. Keep the Poppins/Fira Code split intact — display in Poppins 600, body and buttons in Fira Code 400.
6. The amber accent stays off the action layer. If you need emphasis, use bigger Poppins or an amber icon badge — not a yellow button.
7. The deep float shadow belongs only to the hero product card; keep everything else flat.

## Known Gaps

- The measured `button-primary` component reported `radius: 0px` and `padding: 0px`, which conflicts with the visibly rounded, padded CTAs in the screenshots. Button radius is documented as `{rounded.md}` (8px, present in the measured radius scale) and padding as 16px × 32px (from the dominant spacing values) — treated as the measurement capturing an inner element rather than the styled button.
- The measured `input` component reported `background: #1863dc` and `radius: 50px`. The blue (#1863dc) appears nowhere else in the palette and is treated as a measurement artifact (likely a focused/native control or overlay); it is not declared as a token. The 50px radius is preserved as `{rounded.pill}`.
- The green/red status-chip colors inside the product illustration (✓ green, ✗ red) were not captured — no success/warning/error semantic tokens are declared. These are product chrome shown as content.
- The pink floating chat-launcher button (bottom-right) color was not measured and is not tokenized.
- Footer styling was not captured in the analysis; the footer surface, colors, and layout are out of scope.
- Pricing-page-specific components beyond shared elements were not separately measured.
- One outlier spacing value of 312px (frequency 1) was measured and excluded from the spacing scale as a one-off layout dimension rather than a rhythm token.
- Animation, transition, and tab-switch timings are not in scope.
- Explicit responsive breakpoint widths were not measured; collapsing behavior is derived from the two captured render widths.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/cerbos/design-md -->
