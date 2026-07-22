---
version: alpha
name: Doppler-design-analysis
description: "A dark, developer-tooling marketing interface built on a deep plum-purple canvas (#1c1624) with an electric-green primary CTA and violet brand glows. The system reads as confident security-infrastructure SaaS — soft-rounded dark cards holding real product UI fragments, light-ivory \"spec sheet\" cards for proof points, and a custom geometric display face (Doppler Repro) carrying near-white headlines. Brand voltage comes from the violet→pink gradient applied to hero sub-headlines and the single neon-green action color used sparingly across an otherwise monochrome dark surface."

colors:
  primary: "#00f575"
  ink: "#f1f0ec"
  body: "#d0c9c4"
  muted: "#000000"
  canvas: "#1c1624"
  surface: "#f2f1ed"
  surface-dark-elevated: "#2d2734"
  surface-dark-soft: "#302c37"
  hairline: "#45403d"
  hairline-light: "#e5e7eb"
  accent-violet: "#6b13f5"
  accent-violet-soft: "#b997ff"
  accent-violet-muted: "#b498f8"
  accent-pink: "#ff9efa"
  accent-orange: "#f55c15"
  white: "#ffffff"
  neutral: "#cccccc"
  neutral-soft: "#9ca3af"
  neutral-warm: "#8b877d"
  neutral-warm-soft: "#a4a2a4"

typography:
  display:
    fontFamily: "Doppler Repro, Inter, sans-serif"
    fontSize: 48px
    fontWeight: 450
    lineHeight: 1.2
    letterSpacing: -0.96px
  heading:
    fontFamily: "Doppler Repro, Inter, sans-serif"
    fontSize: 32px
    fontWeight: 450
    lineHeight: 1.2
    letterSpacing: -0.64px
  body:
    fontFamily: "Doppler Repro, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: -0.18px
  button:
    fontFamily: "Doppler Repro, Inter, sans-serif"
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.15px

rounded:
  sm: 8px
  md: 12px
  lg: 20px
  blob: 80px
  blob-lg: 120px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 14px
  md: 16px
  lg: 20px
  xl: 32px
  xxl: 50px
  huge: 80px
  section: 100px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    padding: 8px 32px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.body}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 20px
  button-sign-in:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 20px
  button-secondary:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 20px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    padding: 100px
  product-mockup-card:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  integration-card:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  proof-card-light:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  testimonial-card:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 50px
  stat-card:
    backgroundColor: "{colors.surface-dark-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.blob}"
    padding: 50px
  cta-band:
    backgroundColor: "{colors.accent-violet}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.blob-lg}"
    padding: 80px
  enterprise-banner:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  footer:
    backgroundColor: "{colors.surface-dark-elevated}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    padding: 56px

---

## Overview

Doppler's marketing surface is a dark, developer-infrastructure interface anchored on a deep plum-purple canvas (`{colors.canvas}` — #1c1624). It reads as confident, modern security-SaaS: near-white display headlines in a custom geometric face, soft-rounded dark cards (`{rounded.lg}` — 20px) holding real product UI fragments, and a single electric-green action color (`{colors.primary}` — #00f575) used sparingly across an otherwise monochrome dark field.

The brand's chromatic voltage comes from two places: the **violet→pink gradient** applied to the hero sub-headline ("Prevent breaches.") and section heads, drawn from `{colors.accent-violet}` (#6b13f5), `{colors.accent-violet-soft}` (#b997ff) and `{colors.accent-pink}` (#ff9efa); and the **neon-green CTA** that is the only saturated action signal in the system. Everything else stays in the warm-gray text family (`{colors.ink}` — #f1f0ec, `{colors.body}` — #d0c9c4) on dark plum.

A deliberate counterpoint runs through the proof sections: **light-ivory "spec sheet" cards** (`{colors.surface}` — #f2f1ed) with near-black text (`{colors.muted}` — #000000) appear for compliance and capability call-outs — a high-contrast inversion against the dark canvas that makes those claims feel printed and authoritative.

**Key Characteristics:**
- Deep plum-purple canvas (`{colors.canvas}` — #1c1624) as the universal page floor; the system is dark-first end to end.
- Single neon-green primary CTA (`{colors.primary}` — #00f575) rendered as a `{rounded.pill}` button — the only saturated action color.
- Custom **Doppler Repro** display typeface at an unusual weight 450 with tight negative tracking (-0.96px at display size) — geometric, low-contrast, precise.
- Violet→pink gradient headlines (`{colors.accent-violet}` → `{colors.accent-pink}`) for emphasis lines and section heads.
- Two card modes that alternate deliberately: dark elevated cards (`{colors.surface-dark-elevated}` — #2d2734) holding product UI fragments, and light-ivory proof cards (`{colors.surface}` — #f2f1ed) for compliance/spec claims.
- Generous radius hierarchy: `{rounded.lg}` (20px) for content cards, `{rounded.pill}` for buttons and tags, and oversized `{rounded.blob}` (80px) / `{rounded.blob-lg}` (120px) for the stat cluster and the closing CTA band.
- Flat depth — no measured shadows. Elevation comes from surface-color steps (canvas → dark-soft → dark-elevated) and from violet radial glows behind hero and CTA bands.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #00f575): The electric-green CTA color. Used on "Start for Free" buttons and the "All Systems Operational" status dot. The single saturated action color in the system — never used for text or large fills.
- **Accent Violet** (`{colors.accent-violet}` — #6b13f5): The brand's core purple. Powers the closing CTA band background and the violet radial glows behind hero/CTA sections.
- **Accent Violet Soft** (`{colors.accent-violet-soft}` — #b997ff) and **Accent Violet Muted** (`{colors.accent-violet-muted}` — #b498f8): The lighter violet steps in the gradient headlines and section heads ("Your central hub for secure integrations", "Why companies choose Doppler").
- **Accent Pink** (`{colors.accent-pink}` — #ff9efa): The warm end of the gradient — the tail of "Prevent breaches." and gradient sweeps.
- **Accent Orange** (`{colors.accent-orange}` — #f55c15): A rare accent appearing inside integration-tile artwork and product chrome. Never on CTAs.

### Surface
- **Canvas** (`{colors.canvas}` — #1c1624): The deep plum-purple page floor across every band.
- **Surface Dark Soft** (`{colors.surface-dark-soft}` — #302c37): A slightly lifted dark surface — used for the stat cards in the "Securing the world's secrets" cluster.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #2d2734): The standard dark card surface — product mockup cards, integration cards, testimonial card, enterprise banner, footer.
- **Surface** (`{colors.surface}` — #f2f1ed): The light-ivory "spec sheet" card surface used for proof / compliance call-outs. The deliberate inversion against the dark canvas.
- **Hairline** (`{colors.hairline}` — #45403d): The 1px border tone on dark surfaces.
- **Hairline Light** (`{colors.hairline-light}` — #e5e7eb): Border / divider tone inside the light-ivory cards.

### Text
- **Ink** (`{colors.ink}` — #f1f0ec): Near-white headline color on dark surfaces. All display + heading type.
- **Body** (`{colors.body}` — #d0c9c4): Warm-gray running-text color on dark surfaces.
- **Muted** (`{colors.muted}` — #000000): Near-black text used on the light-ivory proof cards (measured as the low-contrast body color — it reads as the on-light text token).
- **White** (`{colors.white}` — #ffffff): Used rarely for maximum-contrast moments inside product chrome and logo lockups.
- **Neutral family** (`{colors.neutral}` — #cccccc, `{colors.neutral-soft}` — #9ca3af, `{colors.neutral-warm}` — #8b877d, `{colors.neutral-warm-soft}` — #a4a2a4): Tertiary text tones for captions, disabled product-UI labels, and fine print.

### Note on Semantics
No dedicated success/warning/error palette was measured. `{colors.primary}` (green) doubles as the "operational" signal. Add semantic tokens only after measuring a form or status surface — see Known Gaps.

## Typography

### Font Family
The system runs a single custom typeface across every role — measured as **`__DopplerRepro_a18e76`** (referenced here as **Doppler Repro**). It is a geometric, low-contrast display + text face used uniformly for headlines, body copy, and buttons. The notable signature is weight **450** for display and heading roles — between book and medium — paired with tight negative letter-spacing.

Doppler Repro was not flagged as a licensed font in the analysis, but it is a bundled/custom web font and is not a standard public family. **If Doppler Repro is unavailable, substitute Inter** (or Geist) at the matching sizes: use Inter weight 500 to approximate the 450 display weight, and preserve the negative tracking signature (-0.96px at 48px, -0.64px at 32px). Inter's humanist forms differ slightly from the measured geometric character, but the weight + tracking discipline transfers.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 48px | 450 | 1.2 | -0.96px | Hero h1 ("Secure secrets. Prevent breaches."), big stat heads |
| `{typography.heading}` | 32px | 450 | 1.2 | -0.64px | Section heads, "Securing the world's secrets", CTA band head |
| `{typography.body}` | 18px | 400 | 1.4 | -0.18px | Running text, card descriptions, footer links |
| `{typography.button}` | 15px | 700 | 1.0 | 0.15px | Button labels, nav items — the only bold (700) + positive-tracked role |

### Principles
The type system is unusually disciplined: one family, two display weights (450 for headings, 400 for body), and a single bold/positive-tracked role reserved for buttons and nav. The 450 display weight is the brand's quiet signature — it avoids the bombast of 700 headlines while staying legible on the dark canvas. Negative tracking on display and body keeps text tight and engineered; the lone positive 0.15px on button labels gives small UPPER-weight labels breathing room.

## Layout

### Spacing System
- **Base unit:** loosely 4px, but the system favors an 8 / 16 / 32 progression — the three highest-frequency steps measured (8px ×70, 32px ×50, 16px ×21).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 14px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 32px · `{spacing.xxl}` 50px · `{spacing.huge}` 80px · `{spacing.section}` 100px.
- **Card internal padding:** `{spacing.xl}` (32px) is the dominant card padding; larger feature/testimonial surfaces step up to `{spacing.xxl}` (50px).
- **Section rhythm:** `{spacing.huge}` (80px) to `{spacing.section}` (100px) between major editorial bands.
- **Tight clusters:** `{spacing.xs}` (8px) dominates micro-spacing — icon-to-label gaps, nav item gaps, inline stacks.

### Grid & Container
- **Hero band:** Two-column split — h1 + sub-head + CTA on the left, the product dashboard mockup card on the right.
- **Integration grid:** 4-up at desktop ("Doppler + AWS / Azure / GCP / Find your integrations").
- **Why-Doppler grid:** 3-up proof cards, then a 2-up feature row below.
- **Stat cluster:** 3 oversized blob cards in a row ("76,000+", "75B+", "99.99%").
- **Footer:** Multi-column link list (Product / Resources / Developers / Integrations / Community / Company / Legal).

### Whitespace Philosophy
Doppler pairs tight internal spacing (8px clusters) with generous band separation (80–100px). The result is dense, scannable cards floating in a dark field — content feels engineered and compact while the overall page breathes between sections.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat canvas | `{colors.canvas}` — no shadow | Page floor, hero, all bands |
| Surface step (soft) | `{colors.surface-dark-soft}` fill | Stat cards — lifted by color, not shadow |
| Surface step (elevated) | `{colors.surface-dark-elevated}` fill | Product / integration / testimonial cards, footer |
| Inverted proof | `{colors.surface}` ivory fill | Compliance / spec cards — high-contrast inversion reads as "lifted" |
| Glow | Violet radial wash (`{colors.accent-violet}`) | Behind hero mockup and the closing CTA band |

No box-shadows were measured (`shadows: []`). The system creates depth entirely through **surface-color stepping** (canvas → dark-soft → dark-elevated) and **violet radial glows** behind marquee moments. The light-ivory proof cards earn their prominence through contrast inversion rather than shadow.

### Decorative Depth
- The hero's right-side product mockup carries its own internal product chrome (sidebar, project cards, search bar) — shown as content, not decorated around.
- Faint hairline curves (`{colors.hairline}`) trace the canvas behind the hero, suggesting topology/network lines.
- The closing CTA band uses an oversized `{rounded.blob-lg}` (120px) corner and a violet glow to feel like a soft floodlit panel.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 8px | Small inner elements, tags inside product chrome |
| `{rounded.md}` | 12px | Inputs, small buttons, nested card chrome |
| `{rounded.lg}` | 20px | Standard content cards — product mockup, integration, testimonial, proof cards |
| `{rounded.pill}` | 9999px | CTA buttons, "Sign In", status pill, category tabs |
| `{rounded.blob}` | 80px | Oversized stat cards in the metrics cluster |
| `{rounded.blob-lg}` | 120px | The closing CTA band's super-soft corner |

### Photography & Artwork Geometry
Integration tiles (AWS, Azure, GCP logos paired with the Doppler mark) sit on dark `{rounded.lg}` cards with their own internal glow artwork. Avatar thumbnails in the testimonial row are small and rounded. Customer logos (Duolingo, Perplexity, PUMA, Tripadvisor) render as monochrome wordmarks on the dark testimonial surface.

## Components

### Top Navigation

**`top-nav`** — Dark nav bar pinned to the top, `{colors.canvas}` background. Carries the Doppler logo + wordmark at left (the multi-color spark glyph + "Doppler"), a primary menu (Platform, Solutions, Resources, Customers, Pricing) center-left, and a right cluster: "Get Demo" text link, the green `{component.button-primary}` ("Start for Free"), and `{component.button-sign-in}` (outlined). Items in `{typography.button}` (Doppler Repro 15px / 700).

**`nav-link`** — Inline nav item, transparent background, `{colors.ink}` text. Dropdown menus (Platform / Solutions / Resources) carry a chevron.

### Buttons

**`button-primary`** — The signature green CTA. Background `{colors.primary}` (#00f575), label `{colors.body}`, type `{typography.button}`, rendered as a `{rounded.pill}`. The only saturated action color — used for "Start for Free" in both nav and hero. (See Known Gaps for the measured radius/padding discrepancy.)

**`button-sign-in`** — Outlined dark button ("Sign In"). Transparent background with a hairline border, `{colors.ink}` text, `{rounded.pill}`. Sits at the far right of the nav.

**`button-secondary`** — Dark filled secondary action ("Get Demo"). Background `{colors.surface-dark-elevated}`, `{colors.ink}` text, `{rounded.pill}`. Appears alongside the green CTA in the closing band.

### Cards & Containers

**`hero-band`** — Two-column hero with `{typography.display}` h1 ("Secure secrets." in `{colors.ink}`, "Prevent breaches." in the violet→pink gradient), a `{typography.body}` sub-paragraph, and the green CTA. The right column holds the product dashboard mockup. Vertical rhythm at `{spacing.section}` (100px).

**`product-mockup-card`** — Large dark card showing the actual Doppler dashboard UI (project grid, sidebar nav, search bar, "Take a self-guided tour" overlay). Background `{colors.surface-dark-elevated}`, `{rounded.lg}` (20px), padding `{spacing.xl}` (32px). Displays real product chrome rather than illustration.

**`integration-card`** — Used in the 4-up "central hub" grid (Doppler + AWS / Azure / GCP / Find your integrations). Background `{colors.surface-dark-elevated}`, `{rounded.lg}`, padding `{spacing.xl}`. Carries integration logo artwork at top, a `{typography.body}` title + description, and a "Learn More →" link.

**`proof-card-light`** — The inverted ivory "spec sheet" card for proof claims ("For humans and machines", "SOC 2 and ISO compliant", "Resources"). Background `{colors.surface}` (#f2f1ed), text `{colors.muted}` (#000000), `{rounded.lg}`, padding `{spacing.xl}`. The high-contrast inversion against the dark canvas makes these claims read as authoritative.

**`stat-card`** — Oversized blob-radius metric card ("76,000+ Startups and enterprises", "75B+ Secrets read every month", "99.99% Historical annual uptime"). Background `{colors.surface-dark-soft}`, big number in `{typography.heading}`, label in `{typography.body}`, `{rounded.blob}` (80px), padding `{spacing.xxl}` (50px).

**`testimonial-card`** — Wide quote card (the Paradox / Dan Steen testimonial). Background `{colors.surface-dark-elevated}`, quote in `{typography.body}`, with avatar + name + role and a logo column at right; a tab row above switches industries (Software development / Finance / Health / Agriculture). `{rounded.lg}`, padding `{spacing.xxl}`. A customer-logo strip (Duolingo, Perplexity, PUMA, Tripadvisor) runs beneath.

**`enterprise-banner`** — Slim full-width call-out ("Interested in Enterprise? See how onboarding with Doppler works."). Background `{colors.surface-dark-elevated}`, `{typography.body}`, with a green `{component.button-primary}`-style "Learn More" at right, `{rounded.lg}`, padding `{spacing.xl}`.

**`cta-band`** — The closing "Enter the new era of secrets management" panel. Background `{colors.accent-violet}` with a violet glow, head in `{typography.heading}` (`{colors.ink}`), `{rounded.blob-lg}` (120px), padding `{spacing.huge}` (80px). Carries "Start for Free" + "Get Demo" buttons.

### Footer

**`footer`** — Dark footer closing the page. Background `{colors.surface-dark-elevated}`, links in `{typography.body}` (`{colors.body}`). Multi-column link list across Product / Resources / Developers / Integrations / Community / Company / Legal, with the Doppler wordmark and an "All Systems Operational" green status pill at top. Vertical padding `{spacing.huge}`-class (56px measured).

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#00f575) for primary actions and the operational status signal only. It is the system's single saturated color.
- Keep headlines in Doppler Repro at weight 450 with negative tracking. The mid-weight is the brand's quiet signature — don't push to 700.
- Use the violet→pink gradient (`{colors.accent-violet}` → `{colors.accent-pink}`) for emphasis lines and section heads, not for body copy.
- Alternate dark elevated cards (`{component.integration-card}`) with light-ivory proof cards (`{component.proof-card-light}`) — the inversion is the system's rhythm.
- Show real product UI inside `{component.product-mockup-card}` rather than illustrating around it.
- Create depth with surface-color steps (canvas → dark-soft → dark-elevated) and violet glows, not box-shadows.
- Use the oversized `{rounded.blob}` / `{rounded.blob-lg}` radii only on the stat cluster and the closing CTA band — they are scarce, deliberate gestures.

### Don't
- Don't add a second saturated action color. The green CTA stands alone; orange/pink are artwork accents, never buttons.
- Don't put body text on the ivory `{colors.surface}` in light gray — light cards use near-black `{colors.muted}` text only.
- Don't apply the blob radii (80/120px) to standard content cards — those stay at `{rounded.lg}` (20px).
- Don't introduce drop shadows; the measured system has none.
- Don't render display headlines in the button weight (700) — display stays at 450.
- Don't document hover states — default and active/pressed only.

## Responsive Behavior

### Breakpoints
No explicit breakpoint widths were measured. The following are **derived** from the captured landing and pricing layouts and standard SaaS practice — treat as guidance, not measured spec.

| Name | Width | Key Changes (derived) |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero collapses to single column with the dashboard mockup below; integration grid 4-up → 1-up; stat cluster stacks |
| Tablet | 768–1024px | Nav tightens; integration grid 4-up → 2-up; proof cards 3-up → 2-up |
| Desktop | 1024–1440px | Full nav; 4-up integrations; 3-up proof cards; 3-across stat cluster |
| Wide | > 1440px | Same as desktop with more outer breathing room |

### Touch Targets
- `{component.button-primary}` and `{component.button-sign-in}` use ~14px vertical padding plus the pill silhouette — derived to meet ~44px effective height.
- Nav items in `{typography.button}` carry 8px gaps; effective tap area depends on surrounding padding.

### Collapsing Strategy
- Hero's two-column split collapses to single-column on mobile (text first, mockup below).
- Integration and proof grids reduce column count rather than scaling cards down.
- The stat blob cards stack vertically while retaining their oversized radius.
- The footer's multi-column link list wraps to fewer columns on narrow screens.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.integration-card}`, `{component.cta-band}`).
2. Variants of an existing component (`-active`, `-disabled`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline hex in a component.
4. Never document hover. Default and Active/Pressed only.
5. Keep the green CTA scarce — one saturated action color is a core constraint.
6. Display headlines stay Doppler Repro 450 with negative tracking; body stays 400; buttons stay 700.
7. When adding depth, step the surface color or add a violet glow — do not introduce shadows.

## Known Gaps

- **Doppler Repro is a custom/bundled font** (measured as `__DopplerRepro_a18e76`); it was not flagged as licensed in the analysis, but it is not a public web family. Inter is documented as the substitute in the Typography section.
- The measured `button-primary` props (`color: #d0c9c4`, `radius: 0px`, `padding: 28px 8px`) appear to be a capture artifact — the screenshots clearly show a neon-green pill with dark text. The component entry uses `{colors.primary}` background and `{rounded.pill}` to match ground-truth, with the measured text color retained as `{colors.body}`. Exact label color and padding should be re-measured.
- The `muted` text color was measured as `#000000` (flagged "low-contrast text"); it is documented as the on-light text token for the ivory proof cards. Whether it is also used elsewhere is unconfirmed.
- No box-shadow values were measured (`shadows: []`); the violet glow washes behind the hero and CTA band are visible in screenshots but their exact color/blur/spread are not extracted.
- The violet→pink gradient stops are inferred from the measured violet/pink accents; exact gradient angles and stop positions are not in the analysis.
- No semantic success/warning/error palette was measured; green doubles as the operational signal. Form validation and status states need a sign-up or status surface to confirm.
- Breakpoint widths and touch-target heights are derived, not measured — the analysis captured landing + pricing at a single viewport.
- The pricing page was captured but no pricing-specific components (tier cards, toggles) were measured; those need a dedicated extraction pass.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/doppler/design-md -->
