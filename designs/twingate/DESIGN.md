---
version: alpha
name: Twingate-design-analysis
description: "A dark, engineering-confident Zero Trust security interface built on a near-black canvas (#0e0f11) with a single high-voltage chartreuse-yellow primary CTA (#eef35f), TT Hoves light-weight display headlines, and product-UI fragments rendered inside softly-rounded cards. The system reads as technical and modern — generous whitespace, monochrome dark surfaces, violet/lavender accent moments around product chrome, and pill-shaped action buttons that pop against the dark field."

colors:
  primary: "#eef35f"
  on-light: "#000000"
  canvas: "#0e0f11"
  surface: "#141617"
  surface-alt: "#121315"
  surface-raised: "#1d2023"
  hairline: "#3a3d40"
  ink: "#ffffff"
  body: "#cfcfd3"
  muted: "#a1a1aa"
  muted-soft: "#8d8d96"
  muted-strong: "#666666"
  neutral-quiet: "#cccccc"
  neutral-quieter: "#999999"
  accent-lavender: "#f0f0ff"
  accent-lavender-soft: "#f5f5ff"
  accent-violet: "#b6abff"
  accent-violet-strong: "#9988ff"
  accent-indigo: "#21223a"
  link: "#0000ee"
  neutral-black: "#000000"

typography:
  display-xl:
    fontFamily: "TT Hoves Light, Inter, sans-serif"
    fontSize: 55px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: -1px
  display-lg:
    fontFamily: "TT Hoves Light, Inter, sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.5px
  title:
    fontFamily: "TT Hoves Light, Inter, sans-serif"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
  body:
    fontFamily: "TT Hoves Medium, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: normal

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 20px
  xl: 24px
  pill: 50px
  full: 1000px

spacing:
  xxs: 4px
  xs: 8px
  sm: 10px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 40px
  section: 48px

components:
  announcement-bar:
    backgroundColor: "{colors.accent-lavender}"
    textColor: "{colors.on-light}"
    typography: "{typography.body}"
    padding: 8px 20px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 16px 20px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-light}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-light}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  badge-pill:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  hero-heading:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
  hero-visual-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    rounded: "{rounded.xl}"
    padding: 24px
  product-demo-card:
    backgroundColor: "{colors.accent-indigo}"
    textColor: "{colors.accent-violet}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 20px
  feature-item:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body}"
  platform-feature-card:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 20px
  customer-story-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 20px
  customer-story-card-lavender:
    backgroundColor: "{colors.accent-lavender}"
    textColor: "{colors.on-light}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 20px
  customer-story-card-yellow:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-light}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 20px
  rating-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 16px 24px
  code-panel:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.body}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 20px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    padding: 40px
---

## Overview

Twingate's marketing surface is a **dark, engineering-confident Zero Trust interface** — built on a near-black canvas (`{colors.canvas}` — #0e0f11) with white display headlines (`{colors.ink}` — #ffffff), a single high-voltage **chartreuse-yellow primary CTA** (`{colors.primary}` — #eef35f), and product-UI fragments rendered directly inside softly-rounded cards. The system reads as technical, precise, and modern — the kind of interface that signals "infrastructure software for engineers" without becoming cold.

Type voice is carried by **TT Hoves**, a geometric grotesque used in light weights for display (300–400) and a medium weight (500) for body. The headlines lean intentionally thin — the 55px hero h1 runs at weight 300 with -1px tracking — which gives the page an airy, premium feel against the dense dark field. The one place TT Hoves goes loud is the yellow accent fragment of the hero headline ("Pick Three.").

Brand voltage comes from two scarce sources: the **chartreuse-yellow CTA** (the only saturated warm color in the system, reserved almost exclusively for the primary action) and **violet/lavender accents** (`{colors.accent-violet}`, `{colors.accent-lavender}`) clustered around product chrome — the dashed-border "Device / User / Resource / Context" demo card, the announcement bar, and a highlighted customer-story tile. Everything else is monochrome dark-on-darker.

**Key Characteristics:**
- Near-black canvas (`{colors.canvas}` — #0e0f11) with layered dark surfaces (`{colors.surface}` — #141617, `{colors.surface-raised}` — #1d2023) for cards and the nav.
- A single saturated yellow primary CTA (`{colors.primary}` — #eef35f) rendered as a pill (`{rounded.pill}` — 50px), dark text on yellow. The scarcest, loudest element on the page.
- Light-weight TT Hoves display type — h1 at weight 300, h2 at 400 — giving thin, premium, modern-infra headlines.
- Product-UI fragments shown inside cards: a dashed-violet "Zero Trust" matrix card, admin-console fragments, blocked-domain lists, a Terraform code panel. Twingate shows the actual product, not illustrations of it.
- Lavender announcement bar (`{colors.accent-lavender}` — #f0f0ff) pinned at the very top — the only light surface on the page.
- Hierarchical radius: pill (50px) for buttons + badges, `{rounded.md}` (12px) for content cards, `{rounded.xl}` (24px) for the hero visual container.
- Spacing rhythm built on a 4px base, with `{spacing.xxl}` (40px) and `{spacing.section}` (48px) as the major band separators.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #eef35f): The chartreuse-yellow CTA color and the highlighted fragment of the hero headline. The single loudest, scarcest color — reserved for primary actions and one customer-story tile. Always paired with `{colors.on-light}` text.
- **Accent Lavender** (`{colors.accent-lavender}` — #f0f0ff): The top announcement-bar background and one highlighted customer-story tile. The only light surface in the system.
- **Accent Lavender Soft** (`{colors.accent-lavender-soft}` — #f5f5ff): A near-white lavender variant used in subtle accent fills.
- **Accent Violet** (`{colors.accent-violet}` — #b6abff) & **Accent Violet Strong** (`{colors.accent-violet-strong}` — #9988ff): Used for the product-demo card labels, dashed borders, and small product-UI accent moments.
- **Accent Indigo** (`{colors.accent-indigo}` — #21223a): The deep indigo fill of the "Zero Trust with No Boundaries" demo card.

### Surface
- **Canvas** (`{colors.canvas}` — #0e0f11): The default page floor — near-black, the dominant surface.
- **Surface** (`{colors.surface}` — #141617): Card and nav surfaces one step above canvas.
- **Surface Alt** (`{colors.surface-alt}` — #121315): A near-canvas surface used on code panels and quiet bands.
- **Surface Raised** (`{colors.surface-raised}` — #1d2023): The most-elevated dark surface — badge pills, raised chips.
- **Hairline** (`{colors.hairline}` — #3a3d40): The 1px border tone on dark surfaces (also observed as `rgb(58,61,64)` and `rgb(48,52,56)` 0.5px ring shadows).

### Text
- **Ink** (`{colors.ink}` — #ffffff): All display headlines and primary text on dark surfaces.
- **Body** (`{colors.body}` — #cfcfd3): Default running-text on dark.
- **Muted** (`{colors.muted}` — #a1a1aa): Secondary text — sub-labels, footer body.
- **Muted Soft** (`{colors.muted-soft}` — #8d8d96): Tertiary text.
- **Muted Strong** (`{colors.muted-strong}` — #666666): Quietest captions and fine print.
- **Neutral Quiet / Quieter** (`{colors.neutral-quiet}` — #cccccc / `{colors.neutral-quieter}` — #999999): Additional gray steps observed in fine-grain UI text.
- **On Light** (`{colors.on-light}` — #000000): Text on the yellow CTA, the white secondary button, and the lavender/yellow light tiles.

### Other
- **Link** (`{colors.link}` — #0000ee): Default unstyled anchor color captured in computed styles — likely browser-default link tone in raw markup, not a designed brand link. Documented for completeness; verify before use.
- **Neutral Black** (`{colors.neutral-black}` — #000000): The most-frequent measured color — deep black used in shadow stacks and the darkest fills.

## Typography

### Font Family
The system runs **TT Hoves** across all roles — a geometric grotesque sans. Display headlines use the **Light** cut at weight 300–400; body text uses the **Medium** cut at weight 500. TT Hoves is a **commercial/licensed typeface** (TypeType foundry) and cannot be redistributed — see the substitution note below.

The split is by weight rather than by family:
- TT Hoves Light (300–400, negative tracking on display) — h1, h2, h3
- TT Hoves Medium (500) — body, labels, buttons, nav

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 55px | 300 | 1.1 | -1px | Hero h1 ("Security, Performance, Simplicity. Pick Three.") |
| `{typography.display-lg}` | 48px | 400 | 1.2 | -0.5px | Section heads ("The Twingate Zero Trust Platform") |
| `{typography.title}` | 22px | 400 | 1.5 | normal | Sub-section heads, card titles |
| `{typography.body}` | 16px | 500 | 1.5 | normal | Default running-text, buttons, nav, labels, captions |

Buttons, nav links, badges, and captions all reference `{typography.body}` (TT Hoves Medium 16px / 500) — the system does not measure a separate button or caption role.

### Principles
The display voice is intentionally thin — weight 300 at the hero size with -1px tracking — which keeps the dark page feeling airy and premium rather than heavy. Body type steps up to weight 500 (Medium) so running copy stays legible at 16px against the dark field. Never bold the display weight past 400; the lightness is the brand signature.

### Note on Font Substitutes
TT Hoves is a licensed commercial typeface and must **not** be shipped or self-hosted without a license. For an open-source substitute, **Inter** (Light 300 for display, Medium 500 for body) is the closest practical match in proportion and x-height; **Hanken Grotesk** is a strong alternative that better preserves TT Hoves's geometric grotesque character. Preserve the weight-300 display + weight-500 body split and the negative display tracking to keep the voice intact.

## Layout

### Spacing System
- **Base unit:** 4px (the most-frequent measured value alongside 10px and 20px).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 10px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 40px · `{spacing.section}` 48px.
- **Dominant rhythms:** 20px (the single most-used value) for card and gutter spacing; 40px and 48px for major band separation.
- **Card internal padding:** `{spacing.lg}` (20px) to `{spacing.xl}` (24px).

### Grid & Container
- **Hero band:** two-column split — headline + CTA cluster left, product-demo visual card right.
- **Feature row:** 3-up grid ("Powerful Control / High Performance / Simple to Manage").
- **Platform bands:** alternating two-column rows — text + nested feature links on one side, a large colored-border product-UI card on the other.
- **Customer-story grid:** a mosaic of tiles at varying widths, with one lavender and one yellow highlight tile breaking the monochrome rhythm.

### Whitespace Philosophy
Twingate uses generous vertical whitespace between bands (40–48px), letting the thin display type and the dark canvas breathe. The dark field makes negative space read as depth rather than emptiness — content cards float as distinct surfaces a step or two above the canvas.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow — surface contrast only | Body sections, nav, feature rows |
| Hairline ring | `rgba(255,255,255,0.1) 0px 0px 0px 0.5px inset` or `rgb(58,61,64) 0px 0px 0px 0.5px` | Card outlines, chips on dark surfaces |
| Top-edge highlight | `rgba(255,255,255,0.1) 0px 2.5px 0px -2px inset` | Subtle top sheen on raised buttons/chips |
| Soft drop shadow | `rgba(0,0,0,0.18) 0px 0.6px 0.6px -1.25px, rgba(0,0,0,0.16) 0px 2.29px 2.29px -2.5px, rgba(0,0,0,0.06) 0px 10px 10px -3.75px` | Elevated cards (most frequent shadow, 37×) |
| Deep drop shadow | `rgba(0,0,0,0.17) 0px 0.48px 2.41px, rgba(0,0,0,0.15) 0px 1.83px 9.15px, rgba(0,0,0,0.08) 0px 8px 40px -3.5px` | Marquee floating cards |

The elevation philosophy is **layered-dark** — depth comes from stacking near-black surfaces with subtle inset hairline rings and low-alpha drop shadows. On a dark canvas the 0.5px inset white ring does most of the separation work; large drop shadows are reserved for floating product-UI cards.

### Decorative Depth
- The hero product-demo card uses a **dashed violet border** (`{colors.accent-violet}`) around a deep-indigo fill (`{colors.accent-indigo}`) — a deliberate "schematic / wiring diagram" treatment.
- Platform-feature cards carry thick saturated colored borders (yellow-olive, violet, and a green/teal tone) framing embedded product screenshots — the border color is the band's accent signal.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Small inline elements, fine UI chrome |
| `{rounded.sm}` | 8px | Inputs, small cards, list-row chips (147× measured) |
| `{rounded.md}` | 12px | Standard content cards (the most-used radius, 187×) |
| `{rounded.lg}` | 20px | Larger panels |
| `{rounded.xl}` | 24px | Hero visual container, large platform cards |
| `{rounded.pill}` | 50px | Primary/secondary buttons, badge pills |
| `{rounded.full}` | 1000px | Fully-round elements, large circular toggles/avatars |

Very large radii (91px, 100px, 133px, 300px, 500px) were also measured — these correspond to oversized decorative shapes and circular product-UI affordances rather than reusable UI tokens.

### Geometry
The two dominant radii — 8px and 12px — define almost every card and chip. Buttons and badges go fully pill. The hero visual container steps up to 24px for a softer, marquee feel.

## Components

### Top Bars & Navigation

**`announcement-bar`** — A lavender (`{colors.accent-lavender}`) full-width strip pinned above the nav ("Live Onboarding Sessions · Live Workshop · Ongoing · Register"). Dark text (`{colors.on-light}`), `{typography.body}`. The only light surface on the page.

**`top-nav`** — Dark nav bar on `{colors.canvas}`. Twingate wordmark + logo at left, horizontal menu (Product, Docs, Customers, Resources, Partners, Pricing) center, and a right cluster: "Sign in" `{component.button-text-link}`, "Request Demo" `{component.button-secondary}`, "Try for Free" `{component.button-outline}`. Menu items in `{typography.body}`, color `{colors.ink}`.

**`nav-link`** — Inline nav menu item. Transparent background, `{colors.ink}` text, `{typography.body}`.

### Buttons

**`button-primary`** — The signature CTA. Background `{colors.primary}` (#eef35f), text `{colors.on-light}`, `{typography.body}`, rounded `{rounded.pill}` (50px), padding 10px × 20px (derived from measured spacing tokens). Used for "Try Twingate for Free" / "Try for Free". The only saturated warm element on the page.

**`button-secondary`** — White button. Background `{colors.ink}` (#ffffff), text `{colors.on-light}`, `{typography.body}`, rounded `{rounded.pill}`, padding 10px × 20px. Used for "Request Demo".

**`button-outline`** — Transparent button with a hairline outline. Background transparent, text `{colors.ink}`, rounded `{rounded.pill}`, padding 10px × 20px. Used for the secondary "Try for Free" in the nav and "Learn more" affordances.

**`button-text-link`** — Inline text button, no background. `{colors.ink}` text, `{typography.body}`. Used for "Sign in" and "Request a Demo" inline links.

### Badges & Chips

**`badge-pill`** — Small pill chip ("New | Twingate MSP Portal"). Background `{colors.surface-raised}` (#1d2023), text `{colors.ink}`, `{typography.body}`, rounded `{rounded.pill}`, padding 4px × 10px (derived from measured spacing).

### Cards & Containers

**`hero-heading`** — The hero h1 in `{typography.display-xl}`, `{colors.ink}`, with the closing fragment ("Pick Three.") set in `{colors.primary}` yellow.

**`hero-visual-card`** — The large dark container on the hero's right. Background `{colors.surface}`, rounded `{rounded.xl}` (24px), holding the monospace "Zero Trust with No Boundaries" label and the product-demo card.

**`product-demo-card`** — The dashed-border schematic showing "Device / User / Resource / Context" rows with circular toggles. Background `{colors.accent-indigo}` (#21223a), accent text/border `{colors.accent-violet}`, rounded `{rounded.md}`, padding `{spacing.lg}` (20px). The schematic dashed border is a signature treatment.

**`feature-item`** — A 3-up feature row item ("Powerful Control", "High Performance", "Simple to Manage"). Transparent background, icon + title in `{colors.ink}`, description in `{colors.body}`, `{typography.body}`.

**`platform-feature-card`** — Large product-UI cards in the alternating platform bands, each framed by a thick saturated colored border around an embedded admin-console / blocked-domains / cluster-config screenshot. Background `{colors.surface-alt}`, rounded `{rounded.xl}`, padding `{spacing.lg}`. The border accent color signals the band (yellow-olive, violet, green/teal).

**`customer-story-card`** — Default tile in the customer-story mosaic. Background `{colors.surface}`, text `{colors.body}`, rounded `{rounded.md}`, padding `{spacing.lg}`.

**`customer-story-card-lavender`** — Highlight variant. Background `{colors.accent-lavender}` (#f0f0ff), dark text `{colors.on-light}` (the "Blend" story tile).

**`customer-story-card-yellow`** — Highlight variant. Background `{colors.primary}` (#eef35f), dark text `{colors.on-light}` (the "Kooapps" story tile).

**`rating-block`** — The "4.9 ★★★★★ Based on … reviews" G2 block. Background `{colors.surface}`, text `{colors.ink}`, `{typography.body}`, rounded `{rounded.pill}`, padding 16px × 24px.

**`code-panel`** — The Terraform / Pulumi / API code panel in the "Automate your journey to Zero Trust" band. Background `{colors.surface-alt}`, monospace-style code text in `{colors.body}` (font not measured — see Known Gaps), rounded `{rounded.md}`, padding `{spacing.lg}`. Includes a yellow "Deploy with Terraform" `{component.button-primary}` at the bottom.

### Footer

**`footer`** — Dark footer on `{colors.canvas}`, link rows in `{colors.muted}`, `{typography.body}`, padding `{spacing.xxl}` (40px). Continues the canvas tone — there is no light-surface footer inversion in this system (the page is dark throughout).

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#eef35f) for the single primary action per band. The yellow is the scarcest, loudest element — overuse kills it.
- Keep display headlines in TT Hoves Light (weight 300–400) with negative tracking. The thin weight is the brand signature.
- Layer dark surfaces (`{colors.canvas}` → `{colors.surface}` → `{colors.surface-raised}`) with 0.5px inset hairline rings to create depth instead of heavy shadows.
- Show real product UI inside cards — admin consoles, blocked-domain lists, cluster config, Terraform code. Twingate demonstrates the product, it doesn't illustrate it.
- Use the dashed-violet schematic treatment (`{colors.accent-violet}` + `{colors.accent-indigo}`) only for the conceptual Zero Trust matrix card.
- Make buttons fully pill (`{rounded.pill}` — 50px) and keep content cards at `{rounded.md}` (12px).

### Don't
- Don't bold display type past weight 400 — the lightness is intentional.
- Don't introduce additional saturated warm colors; yellow is the system's only warm accent.
- Don't put body copy or running text in the Light display weight — body steps up to TT Hoves Medium (500) for legibility on dark.
- Don't add light surfaces beyond the announcement bar and the two highlight customer-story tiles. The system is dark end-to-end.
- Don't ship TT Hoves without a license — use Inter or Hanken Grotesk as the open-source substitute.
- Don't document hover states — default and active/pressed only.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero collapses to single column (headline → CTA → visual card stacked); feature row 1-up; platform bands stack text above the product card; customer mosaic 1-up |
| Tablet | 768–1024px | Top nav tightens; feature row 2-up; platform bands keep two-column where space allows |
| Desktop | 1024–1440px | Full horizontal nav; hero two-column split; feature row 3-up; platform bands alternate two-column |
| Wide | > 1440px | Same as desktop with additional outer breathing room |

### Touch Targets
- `{component.button-primary}` / `{component.button-secondary}` use 10px × 20px padding on `{typography.body}` (16px) — effective height clears comfortable tap minimums.
- `{component.nav-link}` items rely on surrounding padding for tap area.

### Collapsing Strategy
- The hero's two-column layout collapses to a single stacked column on mobile, headline first.
- Platform bands stack the descriptive text + nested feature links above the large product-UI card.
- The customer-story mosaic reduces to a single column; the lavender and yellow highlight tiles retain their accent fills at every breakpoint.

### Image Behavior
- Product-UI screenshots inside platform-feature cards retain native aspect ratios while the framing card resizes.
- The dashed-border product-demo card scales proportionally and stays legible on mobile.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.platform-feature-card}`, `{component.product-demo-card}`).
2. Variants of an existing component (`-lavender`, `-yellow`, `-active`, `-disabled`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay TT Hoves Light (300–400); body stays TT Hoves Medium (500). The weight split does not blur.
6. The yellow CTA is scarce by design — one primary action per band.
7. When in doubt about emphasis: bigger thin display type before bolder type.

## Known Gaps

- **TT Hoves is licensed** (TypeType foundry) and was not flagged in `fonts_licensed` but must not be shipped without a license; open-source substitutes (Inter, Hanken Grotesk) are documented in Typography.
- A **monospace typeface** is clearly used for the "Zero Trust with No Boundaries" label, the product-demo card row labels, and the Terraform code panel — it was not captured in the measured typography, so its family/size/weight are unknown.
- **Button, nav-link, badge, and caption** all fall back to the single measured `{typography.body}` role; if distinct smaller label sizes exist they were not extracted.
- **Component padding values** (button, badge) are derived from measured spacing tokens rather than per-component computed measurements — verify against source before production use.
- **Platform-feature card border colors** include a green/teal tone visible in screenshots that was not captured in the measured palette; only yellow (`{colors.primary}`) and violet accents are confirmed token values.
- The `{colors.link}` value (#0000ee) is a browser-default anchor color from computed styles, not necessarily a designed link tone — confirm before using.
- **Component heights** (nav bar, buttons) were not directly measured and are omitted rather than guessed.
- Animation/transition timings (card reveals, toggle states in the demo card) are out of scope.
- Form/input states beyond static surfaces were not captured (no sign-up or booking flow analyzed).

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/twingate/design-md -->
