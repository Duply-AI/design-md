---
version: alpha
name: Permit.io-design-analysis
description: A dark, security-software interface built on a near-black navy canvas (#050816) with white Manrope headlines, a violet primary accent (#875cff), and cyan/orange secondary glows. The system reads as confident developer-infrastructure — deep-space backgrounds, soft-glowing cards that emit a purple halo rather than a drop shadow, pill-shaped chips and CTAs, and AI-rendered cinematic hero artwork. Brand voltage comes from the violet-to-cyan glow language and a tightly tracked Manrope 700 display face.
colors:
  primary: "#875cff"
  primary-deep: "#974ef2"
  canvas: "#050816"
  surface: "#0d1029"
  surface-strong: "#0f172a"
  surface-deep: "#111827"
  ink: "#ffffff"
  body: "#eaedf5"
  muted: "#cbd5e1"
  muted-soft: "#94a3b8"
  muted-slate: "#64748b"
  neutral: "#9ca3af"
  hairline: "#475569"
  hairline-soft: "#e2e8f0"
  hairline-mute: "#e5e7eb"
  accent-cyan: "#68deff"
  accent-cyan-bright: "#00bbff"
  accent-orange: "#f76808"
  accent-orange-soft: "#ff8841"
  accent-orange-bright: "#ff953f"
  on-primary: "#ffffff"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -1.5px
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: normal
  heading:
    fontFamily: "Manrope, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.5px
  subheading:
    fontFamily: "Manrope, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: normal
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.556
    letterSpacing: normal
  button:
    fontFamily: "Manrope, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
rounded:
  sm: 8px
  md: 12px
  lg: 15px
  xl: 16px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  ml: 20px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px
  section-lg: 128px
components:
  top-nav:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.button}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.button}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px 24px
  button-pill:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 8px 20px
  cta-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
  feature-card:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.body}"
    typography: "{typography.subheading}"
    rounded: "{rounded.md}"
    padding: 24px
  problem-list-item:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.body}"
  logo-chip:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.muted-soft}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 8px 16px
  badge-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent-orange-soft}"
    typography: "{typography.subheading}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  cta-band:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.xl}"
    padding: 48px
---

## Overview

Permit.io's marketing surface is a dark developer-infrastructure interface — a near-black navy canvas (`{colors.canvas}` — #050816) carrying white Manrope display headlines (`{colors.ink}` — #ffffff) and a violet primary accent (`{colors.primary}` — #875cff). The system reads as confident, slightly cinematic security software: deep-space backgrounds, AI-rendered hero artwork (a neon-lit Shiba Inu in a cyberpunk skyline), soft-glowing cards that emit a purple halo rather than a drop shadow, and pill-shaped CTAs.

Type is single-family: **Manrope** across every role, from the 60px / 700 display headline down to the 16px button label. The display face uses tight negative letter-spacing (-1.5px at h1, -0.5px at h3), which gives the headlines a compact, engineered density that suits an infra product. Body copy runs at a comfortable 18px / 500 with 1.556 line-height in `{colors.body}` (#eaedf5) — a barely-off-white that softens running text against the dark canvas.

Brand voltage comes from the **glow language**: cards and key elements carry a violet halo shadow (`rgba(135,92,255,…)`) sometimes paired with a cyan inner glow (`rgba(104,222,255,…)`). This replaces conventional drop-shadow elevation — depth is signalled by emitted light, not cast shadow. A secondary orange family (`{colors.accent-orange}` — #f76808 through `{colors.accent-orange-bright}` — #ff953f) appears as a gradient on accent words ("AI era.") and small highlight moments.

**Key Characteristics:**
- Dark navy canvas (`{colors.canvas}` — #050816) as the universal floor; surfaces step up through `{colors.surface}` (#0d1029), `{colors.surface-strong}` (#0f172a), and `{colors.surface-deep}` (#111827).
- Single-family Manrope typography — 700 weight for display/headings with negative tracking, 500 for body, 400/600 for UI.
- Violet primary accent (`{colors.primary}` — #875cff) on CTAs and as the dominant glow color.
- Glow-based elevation — cards emit a violet + cyan halo (`rgba(135,92,255,0.2) 0 0 16px`) rather than casting a dark drop shadow.
- Pill geometry is signature — `{rounded.full}` (9999px) on chips, logo tiles, ghost buttons, and the primary "Get Started Free" CTA. Frequency-measured 44 times.
- Content cards round to `{rounded.md}` (12px) — the most common non-pill radius.
- Cyan (`{colors.accent-cyan}` — #68deff) and orange (`{colors.accent-orange}` — #f76808) appear as secondary accents inside artwork and gradient highlight text, never on primary CTAs.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #875cff): The dominant violet. Primary CTA fills, the glow halo color, accent underlines. The single loudest brand signal.
- **Primary Deep** (`{colors.primary-deep}` — #974ef2): A slightly more saturated violet used in gradients and hover-adjacent glow moments.
- **Accent Cyan** (`{colors.accent-cyan}` — #68deff) and **Accent Cyan Bright** (`{colors.accent-cyan-bright}` — #00bbff): The secondary glow color — appears in card inner-glow shadows and inside the cinematic artwork.
- **Accent Orange family** (`{colors.accent-orange}` — #f76808, `{colors.accent-orange-soft}` — #ff8841, `{colors.accent-orange-bright}` — #ff953f): A warm gradient applied to accent words ("AI era.") and small highlight labels. The only warm note in an otherwise cool palette.

### Surface
- **Canvas** (`{colors.canvas}` — #050816): The near-black navy page floor.
- **Surface** (`{colors.surface}` — #0d1029): Default raised card / band background.
- **Surface Strong** (`{colors.surface-strong}` — #0f172a): Feature cards, logo chips.
- **Surface Deep** (`{colors.surface-deep}` — #111827): Deepest nested surface.

### Text
- **Ink** (`{colors.ink}` — #ffffff): All display headlines and max-contrast text.
- **Body** (`{colors.body}` — #eaedf5): Default running-text — a barely-off-white for comfortable reading on dark.
- **Muted** (`{colors.muted}` — #cbd5e1): Secondary copy.
- **Muted Soft** (`{colors.muted-soft}` — #94a3b8): Tertiary text, captions, logo-chip labels.
- **Muted Slate** (`{colors.muted-slate}` — #64748b) and **Neutral** (`{colors.neutral}` — #9ca3af): Fine-print and the lowest-emphasis labels.

### Lines & Borders
- **Hairline** (`{colors.hairline}` — #475569): Border tone on ghost buttons and dividers against dark surfaces.
- **Hairline Soft** (`{colors.hairline-soft}` — #e2e8f0) and **Hairline Mute** (`{colors.hairline-mute}` — #e5e7eb): Light-tone borders measured in the system; likely used on inverted or light-surface fragments.

Permit.io has no documented success/warning/error semantic colors in the measured set — see Known Gaps.

## Typography

### Font Family
The system runs **Manrope** for every role — display headlines, headings, body, and UI labels. Manrope is an open-source geometric sans (available via Google Fonts), so it ships natively with no substitution required. The fallback stack is simply `Manrope, sans-serif`.

The single-family approach leans on **weight and tracking** rather than family contrast for hierarchy: 700 with negative letter-spacing for display/headings, 500 for body, 600 for small headings, 400 for buttons.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 60px | 700 | 1.0 | -1.5px | Hero h1 ("Permissions for the AI era.") |
| `{typography.title}` | 30px | 700 | 1.2 | normal | Section heads ("AI agents don't fit legacy IAM") |
| `{typography.heading}` | 20px | 700 | 1.15 | -0.5px | Sub-section / card titles |
| `{typography.subheading}` | 16px | 600 | 1.5 | normal | Small labels, feature-card titles |
| `{typography.body}` | 18px | 500 | 1.556 | normal | Default running-text |
| `{typography.button}` | 16px | 400 | 1.5 | normal | Button + nav labels |

### Principles
Headlines stay Manrope 700 with negative tracking — the compactness is part of the voice. Body copy uses the lighter 500 weight to soften long text against the dark canvas. Never raise body above 500 or it competes with headings; never drop display below 700 or the headlines lose their engineered density.

### Note on Font Substitutes
Manrope is fully open-source — no licensed typeface is in use, so the production font matches the design 1:1. No substitution is necessary.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.ml}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 80px · `{spacing.section-lg}` 128px.
- **Most-used values:** 8px (58×), 12px (45×), 16px (41×), 24px (31×), 32px (24×) — the dense end of the scale dominates inline spacing.
- **Section rhythm:** `{spacing.section}` (80px) is the primary vertical band gap; `{spacing.section-lg}` (128px) appears once for the largest separation.
- **Card padding:** `{spacing.lg}` (24px) to `{spacing.xl}` (32px) internally; `{spacing.xxl}` (48px) on the larger CTA band.

### Grid & Container
- **Editorial body:** centered single column with multi-column feature grids.
- **Hero band:** full-bleed cinematic artwork with headline overlaid left and supporting copy + CTA cluster right.
- **Feature grids:** 3-up (Gateway / Application / Data) and 2-up ("What each team gets" — Architects / Heads of IAM / CISOs / Engineering) at desktop.
- **Logo wall:** a wrapping row of pill-shaped logo chips.

### Whitespace Philosophy
The system pairs dense inline spacing (8–16px) with generous 80px band separation. Bands breathe vertically while content within stays tightly packed — appropriate for an information-dense infra product that still wants to feel premium.

## Elevation & Depth

Permit.io signals depth with **emitted glow**, not cast shadow. The measured shadow set is dominated by violet/cyan halos rather than black drop shadows.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Body bands directly on canvas |
| Ambient glow | `rgba(135,92,255,0.07) 0 0 40px 8px, rgba(135,92,255,0.04) 0 0 80px 20px` | Large soft violet halos behind hero / feature artwork (10× measured) |
| Card glow | `rgba(135,92,255,0.2) 0 0 16px 0, rgba(104,222,255,0.1) 0 0 4px 0` | The signature card halo — violet outer + cyan inner glow (5× measured) |
| Colored drop | `rgba(88,28,135,0.1) 0 10px 15px -3px, rgba(88,28,135,0.1) 0 4px 6px -4px` | Soft violet-tinted drop shadow on a few raised cards (3× measured) |
| Inset highlight | `rgba(255,255,255,0.2) 0 1px 0 inset, rgba(0,0,0,0.3) 0 4px 12px -2px` | Top inner-light + dark drop on one elevated button-like element |

Two additional colored drops were measured — orange-tinted (`rgba(124,45,18,0.1)`) and cyan-tinted (`rgba(22,78,99,0.1)`) — matching the accent families and likely used on accent-themed cards.

The depth philosophy is **luminous, not shadowed**: cards look like they emit light against the dark canvas. There is no neumorphism or glassmorphism.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 8px | Rare — minor inset elements (1× measured) |
| `{rounded.md}` | 12px | Standard content cards (24× measured — most common non-pill radius) |
| `{rounded.lg}` | 15px | A secondary card radius (9× measured) |
| `{rounded.xl}` | 16px | Larger panels / CTA band (7× measured) |
| `{rounded.full}` | 9999px | Pills — chips, logo tiles, ghost buttons, primary CTA (44× measured) |

### Photography & Artwork Geometry
Hero and section artwork is AI-rendered cinematic imagery (the neon Shiba Inu, glowing gateway portals). Image containers round to `{rounded.md}` (12px). The full-bleed hero ignores corner radius entirely. Pill geometry (`{rounded.full}`) is the dominant interactive shape across chips and CTAs.

## Components

### Top Navigation

**`top-nav`** — Transparent bar over the hero artwork. Carries the Permit.io wordmark + Shiba logo at left, a horizontal menu (Products, Solutions, Platform, Resources, Pricing, Company) center, and a right cluster with a GitHub star chip (5.5k), a theme toggle, and a "Sign in" pill button. Labels in `{typography.button}` colored `{colors.body}`.

**`nav-link`** — Individual menu item, transparent background, `{colors.body}` text, `{typography.button}`. Each top-level item carries a dropdown chevron.

### Buttons

**`button-primary`** — The violet CTA ("Talk with our experts"). Background `{colors.primary}` (#875cff), text `{colors.on-primary}`, `{typography.button}`, rounded `{rounded.md}` (12px), padding ~16px × 24px (derived — measured component returned 0px padding/radius, corrected from screenshot ground-truth).

**`cta-pill`** — The fully-rounded primary CTA ("Get Started Free"). Background `{colors.primary}`, text `{colors.on-primary}`, rounded `{rounded.full}`, padding ~12px × 24px (derived from screenshots).

**`button-secondary`** — Ghost / outline button ("Start Building Policies"). Transparent background, `{colors.ink}` text, 1px `{colors.hairline}` border, rounded `{rounded.md}`, same padding footprint as primary.

**`button-pill`** — Pill-shaped ghost button ("Sign in"). Transparent background, `{colors.ink}` text, `{colors.hairline}` border, rounded `{rounded.full}`, padding ~8px × 20px.

### Cards & Containers

**`card`** — Base raised card. Background `{colors.surface}` (#0d1029), text `{colors.body}`, rounded `{rounded.md}` (12px), carrying the signature card-glow halo (`rgba(135,92,255,0.2) 0 0 16px` + cyan inner glow).

**`feature-card`** — Used in the 3-up (Gateway / Application / Data) and 2-up team grids. Background `{colors.surface-strong}` (#0f172a), title in `{typography.subheading}`, body in `{typography.body}`, rounded `{rounded.md}`, padding `{spacing.lg}` (24px). Carries a small icon at top-left.

**`problem-list-item`** — The bulleted problem list ("Identity blindness", "Session-only auth", etc.). Transparent, violet/orange bullet marker, label in `{colors.body}`, description in `{colors.muted}`, `{typography.body}`.

**`cta-band`** — Pre-footer "defense in depth" CTA block. Background `{colors.surface}`, heading in `{typography.title}`, rounded `{rounded.xl}` (16px), padding `{spacing.xxl}` (48px), containing a centered `{component.cta-pill}`.

### Chips & Badges

**`logo-chip`** — Pill-shaped tile in the "Trusted by the world's leading Enterprises" logo wall. Background `{colors.surface-strong}`, monochrome logo in `{colors.muted-soft}`, rounded `{rounded.full}`, padding ~8px × 16px.

**`badge-pill`** — Small eyebrow / section-label pill (e.g., "THE PROBLEM", "THE SHIFT"). Background `{colors.surface}`, label often tinted `{colors.accent-orange-soft}` or `{colors.primary}`, `{typography.subheading}`, rounded `{rounded.full}`, padding ~4px × 12px.

## Do's and Don'ts

### Do
- Keep `{colors.canvas}` (#050816) as the universal floor and step surfaces up through `{colors.surface}` → `{colors.surface-strong}` → `{colors.surface-deep}`.
- Reserve `{colors.primary}` (#875cff) for primary CTAs and the dominant glow color.
- Use glow-based elevation — the violet+cyan card halo (`rgba(135,92,255,0.2) 0 0 16px`) instead of dark drop shadows.
- Keep all headlines Manrope 700 with negative letter-spacing; keep body Manrope 500.
- Use `{rounded.full}` for chips, logo tiles, and ghost buttons — the pill is the signature interactive shape.
- Use the orange family (`{colors.accent-orange}`, `{colors.accent-orange-soft}`) only as gradient accent text and small highlight labels.

### Don't
- Don't put the orange or cyan accents on primary CTAs — those stay violet.
- Don't replace the glow halo with heavy black drop shadows; the system reads as luminous, not shadowed.
- Don't raise body text weight above 500 — it competes with the 700 headings.
- Don't mix in a second typeface; Manrope carries every role.
- Don't use radius larger than `{rounded.xl}` (16px) on rectangular cards — beyond that, go full pill.
- Don't add hover-state styling beyond default and active/pressed.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 scales down from 60px; CTA cluster stacks; feature grids 1-up; logo wall wraps to multi-row |
| Tablet | 768–1024px | Nav tightens; feature grids 2-up; hero artwork remains full-bleed |
| Desktop | 1024–1440px | Full horizontal nav; 3-up Gateway/Application/Data grid; 2-up team grid |
| Wide | > 1440px | Same as desktop with more outer breathing room |

### Touch Targets
- `{component.cta-pill}` and `{component.button-primary}` carry ~12–16px vertical padding, comfortably exceeding 44px effective height.
- `{component.button-pill}` ("Sign in") with ~8px × 20px padding meets tap-target size with its pill silhouette.
- Nav links rely on generous inline spacing for tappable area on collapsed menus.

### Collapsing Strategy
- Top nav collapses to a hamburger on mobile; the GitHub chip and theme toggle move into the menu sheet.
- Hero headline + supporting copy stack vertically over the artwork on mobile.
- Feature grids reduce columns (3 → 2 → 1) rather than shrinking cards.
- The logo wall wraps its pill chips to additional rows.

### Image Behavior
- Full-bleed cinematic hero artwork crops to fill at every breakpoint, keeping the central subject (the Shiba Inu) framed.
- In-card artwork retains its `{rounded.md}` container and scales proportionally.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.feature-card}`, `{component.cta-pill}`).
2. Variants of an existing component (`-active`, `-disabled`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and active/pressed states only.
5. Headlines stay Manrope 700 with negative tracking; body stays Manrope 500. The weight contrast carries the hierarchy.
6. Depth is glow, not shadow — reach for the violet+cyan halo before any black drop shadow.
7. When in doubt about emphasis: bigger Manrope before brighter color — the palette stays cool and restrained.

## Known Gaps

- The `button-primary` component returned `radius: 0px` and `padding: 0px` from the measurement tool — almost certainly a capture artifact on a styled link element. Button radius (`{rounded.md}`) and padding are documented as **derived** from screenshot ground-truth.
- No semantic success / warning / error colors were measured. The orange and cyan families read as decorative/brand accents, not validation states; a form flow would be needed to confirm.
- Several light-tone borders (`{colors.hairline-soft}` — #e2e8f0, `{colors.hairline-mute}` — #e5e7eb) were measured but their exact application (likely inverted or light-surface fragments) is not confirmed from the captured dark pages.
- The footer was not clearly captured; its exact surface, link structure, and padding are not measured.
- Animation and transition timings (glow pulses, dropdown reveals, video-card playback) are out of scope.
- Form input, dropdown-menu, and theme-toggle (light mode) styling were not extracted — the analysis captured the dark theme only.
- Exact shadow-to-component bindings beyond `{component.card}` are inferred from the measured shadow frequency list, not confirmed per element.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/permit/design-md -->
