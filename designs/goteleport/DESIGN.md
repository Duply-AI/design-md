---
version: alpha
name: goteleport-design-analysis
description: A dark, security-infrastructure marketing surface built on deep navy-purple gradients, a vivid electric-purple primary CTA, and a cyan announcement strip. The system reads as serious enterprise infrastructure software — Lato across the entire type stack at a single regular weight, large quiet headlines, white content cards floating between dark editorial bands, and soft purple glow shadows instead of hard drop shadows. Brand voltage comes from the saturated purple action color and the dark-to-light band alternation rather than from decorative color.

colors:
  primary: "#512fca"
  primary-alt: "#512fc9"
  primary-deep: "#29176e"
  primary-deeper: "#281e60"
  ink: "#09113a"
  navy: "#182954"
  navy-deep: "#0c143d"
  navy-deeper: "#0f1840"
  canvas: "#ffffff"
  surface-dark: "#0a0a0a"
  black: "#000000"
  on-dark: "#ffffff"
  on-dark-accent: "#c4a9ff"
  lavender: "#c5b6ff"
  lavender-soft: "#c8c8ff"
  lavender-bg: "#f1ecff"
  muted: "#b5bec7"
  link-default: "#0000ee"
  accent-cyan: "#13c5e0"
  accent-coral: "#ff6b6b"
  accent-red: "#dc323c"

typography:
  display-xl:
    fontFamily: "Lato, sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.062
    letterSpacing: normal
  display-lg:
    fontFamily: "Lato, sans-serif"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.214
    letterSpacing: normal
  title-md:
    fontFamily: "Lato, sans-serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.357
    letterSpacing: normal
  body-md:
    fontFamily: "Lato, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 1px

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 40px
  pill: 100px
  full: 999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px

components:
  announcement-bar:
    backgroundColor: "{colors.accent-cyan}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
  hero-band:
    backgroundColor: "{colors.navy-deeper}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
  hero-eyebrow:
    backgroundColor: transparent
    textColor: "{colors.on-dark-accent}"
    typography: "{typography.body-md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 14px 28px
  button-cta-lavender:
    backgroundColor: "{colors.lavender-bg}"
    textColor: "{colors.primary-deep}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  button-outline-pill:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  button-contact-sales:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  problem-band:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
  tag-pill-alert:
    backgroundColor: transparent
    textColor: "{colors.accent-coral}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  diagram-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 32px
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  outcomes-band:
    backgroundColor: "{colors.primary-deeper}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
  stat-block:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
  testimonial-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  testimonial-card-highlight:
    backgroundColor: "{colors.lavender-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  cta-band:
    backgroundColor: "{colors.navy-deeper}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    padding: 32px
  footer:
    backgroundColor: "{colors.navy-deeper}"
    textColor: "{colors.muted}"
    typography: "{typography.body-md}"
    padding: 32px
---

## Overview

Teleport's marketing surface is a dark, enterprise-infrastructure interface anchored on deep navy-purple gradient bands (`{colors.navy-deeper}` — #0f1840, `{colors.surface-dark}` — #0a0a0a, pure `{colors.black}` — #000000) with a single vivid electric-purple primary action color (`{colors.primary}` — #512fca). The page opens with a cyan announcement strip (`{colors.accent-cyan}` — #13c5e0), drops into a dark gradient hero, then alternates dark editorial bands with white content sections holding floating cards. The tone is serious, technical, and confident — security software for infrastructure teams.

The type voice is unusually monolithic: **Lato at weight 400 across the entire stack** — from the 64px hero headline to 16px body copy. There is no display-vs-body family split and no heavy weight. Hierarchy is built purely through size and color, which gives the headlines a quiet, almost understated authority. Body copy carries a distinctive 1px letter-spacing that gives running text an airy, slightly technical rhythm.

Brand voltage comes from two places: the saturated purple CTA (`{colors.primary}`) that anchors every action, and the **dark-to-light band alternation** that paces the long scroll. Light-purple tints (`{colors.on-dark-accent}` — #c4a9ff for eyebrow labels, `{colors.lavender-bg}` — #f1ecff for highlight cards) soften the dark surfaces without breaking the monochrome-purple identity.

**Key Characteristics:**
- Deep navy-purple dark bands (`{colors.navy-deeper}`, `{colors.surface-dark}`, `{colors.black}`) as the dominant canvas; white content sections (`{colors.canvas}`) carry floating cards.
- A single electric-purple primary CTA (`{colors.primary}` — #512fca) with 14px × 28px padding — the only saturated action color in the system.
- Pill-shaped buttons (`{rounded.pill}` — 100px / `{rounded.full}` — 999px) for nav and hero CTAs; content cards use `{rounded.lg}` (12px).
- Lato weight 400 everywhere — hierarchy through size + color, never weight.
- Body copy with 1px letter-spacing — a deliberate technical-airy reading rhythm.
- Soft purple glow shadows (`rgba(219, 203, 255, 0.44) 0 0 60px`) rather than hard drop shadows — depth reads as ambient light, not as lift.
- Cyan announcement bar (`{colors.accent-cyan}`) as the single high-chroma non-purple accent.
- Coral/red accent tags (`{colors.accent-coral}` — #ff6b6b, `{colors.accent-red}` — #dc323c) used sparingly to flag problem/risk states.

## Colors

### Brand & Action
- **Primary** (`{colors.primary}` — #512fca): The electric-purple action color. Measured directly off the primary button background. Every primary CTA uses it.
- **Primary Alt** (`{colors.primary-alt}` — #512fc9): A one-digit variant of primary, measured as the button's `color` property. It is functionally identical to `{colors.primary}` and is recorded for fidelity — see Known Gaps regarding the button label color.
- **Primary Deep** (`{colors.primary-deep}` — #29176e) and **Primary Deeper** (`{colors.primary-deeper}` — #281e60): Darker purple tones used for the outcomes band and as label text on light-lavender CTA buttons.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): White content sections holding floating cards.
- **Navy / Navy Deep / Navy Deeper** (`{colors.navy}` — #182954, `{colors.navy-deep}` — #0c143d, `{colors.navy-deeper}` — #0f1840): The gradient navy-purple family that builds the hero, CTA band, and footer.
- **Surface Dark** (`{colors.surface-dark}` — #0a0a0a) and **Black** (`{colors.black}` — #000000): Near-black editorial bands (e.g., the "Identity is fragmented" problem section).
- **Lavender BG** (`{colors.lavender-bg}` — #f1ecff): The lightest tint — highlight testimonial cards and lavender CTA pill backgrounds.

### Text
- **Ink** (`{colors.ink}` — #09113a): Primary dark text on white surfaces. Measured as the default link color.
- **On Dark** (`{colors.on-dark}` — #ffffff): All text on dark bands and hero.
- **On Dark Accent** (`{colors.on-dark-accent}` — #c4a9ff): Light-purple eyebrow/label text over dark bands ("THE AI INFRASTRUCTURE IDENTITY COMPANY").
- **Lavender / Lavender Soft** (`{colors.lavender}` — #c5b6ff, `{colors.lavender-soft}` — #c8c8ff): Secondary purple text and diagram labels on dark surfaces.
- **Muted** (`{colors.muted}` — #b5bec7): Footer and secondary gray text.

### Accent / Semantic
- **Accent Cyan** (`{colors.accent-cyan}` — #13c5e0): The top announcement bar — the only non-purple high-chroma accent.
- **Accent Coral / Accent Red** (`{colors.accent-coral}` — #ff6b6b, `{colors.accent-red}` — #dc323c): Risk/problem flags such as the "CREDENTIAL SPRAWL" / "LATERAL MOVEMENT RISK" tag pills.
- **Link Default** (`{colors.link-default}` — #0000ee): Captured as a raw link color; likely an unstyled anchor — see Known Gaps.

## Typography

### Font Family
The entire system runs **Lato** — an open-source Google font (no licensed/custom typeface was flagged in analysis). There is no display/body split: headlines and body all use Lato at weight 400. The fallback stack is `Lato, sans-serif`. Because Lato is open-source, it ships directly — no substitute is required.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 400 | 1.062 | normal | Hero h1 ("Unified Identity Securing Classic & AI Infrastructure") |
| `{typography.display-lg}` | 56px | 400 | 1.214 | normal | Section heads ("The Unified Identity Layer", "Results that compound") |
| `{typography.title-md}` | 28px | 400 | 1.357 | normal | Sub-section heads, card titles |
| `{typography.body-md}` | 16px | 400 | 1.5 | 1px | Default running text, labels, button labels, nav |

### Principles
Hierarchy is built entirely through **size and color**, never weight — Lato stays at 400 across all four roles. This gives Teleport's headlines a quiet, technical authority rather than a loud marketing shout. The 1px letter-spacing on body copy is a measured signature: it widens running text into an airy, infrastructure-documentation rhythm. Headlines use `normal` letter-spacing — the spacing treatment is reserved for body.

Button and nav labels reuse `{typography.body-md}` (16px / 400 / Lato); a dedicated heavier button role was not measured.

## Layout

### Spacing System
- **Base unit:** 4px (by far the most frequent measured value).
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px.
- 16px and 24px are the two most common structural values (gutters, card padding). Intermediate values of 14px, 18px, 22px and 28px were also measured and appear in component padding (e.g., button padding is 14px × 28px).
- **Card internal padding:** `{spacing.lg}` (24px) for feature and testimonial cards; `{spacing.xl}` (32px) for the larger diagram card.

### Grid & Container
- **Editorial body:** Centered single-column hero with a max content width near ~1200px (derived from the screenshot ground-truth; not directly measured).
- **Feature grids:** 3-up at desktop ("Contain & Control Agentic AI" / "Accelerate Engineering" / "Vault-free Privileged Access").
- **Outcomes / stat band:** 3-up stat blocks on the deep-purple outcomes section.
- **Footer:** Multi-column link list (Platform / Use Cases / Explore / Learn / Company).

### Whitespace Philosophy
Teleport paces a long scroll by alternating dark and light bands rather than by heavy spacing. Each band carries one large headline, a short supporting paragraph, and a row of cards or stats. The rhythm is calm and scannable — generous vertical breathing room around centered headlines, tight 16/24px gutters inside card rows.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow | Dark editorial bands, hero, footer |
| Purple glow | `rgba(219, 203, 255, 0.44) 0px 0px 60px 0px` | Floating elements over dark surfaces — depth reads as ambient light |
| Soft navy glow | `rgba(21, 28, 71, 0.1) 0px 0px 50px 0px` | Cards on light surfaces — a faint, spread shadow with no offset |

The elevation philosophy is **ambient glow, not lift**. Both measured shadows have zero x/y offset and a large blur (50–60px), so cards appear to emit a soft halo rather than cast a directional drop shadow. The purple-tinted glow reinforces the brand purple even in the shadow layer.

### Decorative Depth
- The hero sits over a dotted-globe particle field with faint purple and coral node highlights — product-themed decoration, not a system token.
- The "Unified Identity Layer" diagram uses stacked translucent purple planes to imply depth — bespoke illustration chrome, not a reusable elevation token.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | The most common small radius — inputs, small chips, tag corners |
| `{rounded.sm}` | 6px | Minor inline elements |
| `{rounded.md}` | 8px | Mid-size cards and containers |
| `{rounded.lg}` | 12px | Content cards (feature cards, testimonial cards, diagram card) |
| `{rounded.xl}` | 40px | Large rounded containers / soft-cornered panels |
| `{rounded.pill}` | 100px | Pill buttons (nav CTAs, hero CTAs) |
| `{rounded.full}` | 999px | Fully rounded pills / circular controls |

### Photography & Logo Geometry
Customer logos (Nasdaq, DoorDash, Accenture, Discord, GitLab) sit in a clean logo strip on white. Product UI fragments and the layered identity diagram retain their own native chrome inside `{rounded.lg}` cards.

## Components

### Announcement & Navigation

**`announcement-bar`** — A full-width cyan strip (`{colors.accent-cyan}` — #13c5e0) pinned above the nav, carrying a launch message and a "Learn More" link in `{colors.ink}`. The single high-chroma non-purple moment in the system.

**`top-nav`** — Transparent bar layered over the dark hero gradient. Logo + wordmark at left, center menu (Platform, Solutions, Pricing, Resources, Company) and a search icon, with a right cluster of `{component.button-outline-pill}` ("Try for Free") and `{component.button-contact-sales}` ("Contact Sales"). Text in `{colors.on-dark}`, type `{typography.body-md}`.

### Buttons

**`button-primary`** — The signature purple CTA. Background `{colors.primary}` (#512fca), label `{colors.on-dark}`, padding 14px × 28px, rounded `{rounded.lg}` (12px per measurement; rendered as a pill in several hero placements — see Known Gaps).

**`button-cta-lavender`** — The hero's primary action ("Contact Sales"). Light lavender background (`{colors.lavender-bg}` — #f1ecff), label `{colors.primary-deep}`, rounded `{rounded.pill}`, padding 14px × 28px.

**`button-outline-pill`** — Transparent pill with a 1px outline ("Try for Free" in nav, "Try Teleport for Free" in hero). Background transparent, label `{colors.on-dark}`, rounded `{rounded.pill}`.

**`button-contact-sales`** — White pill in the top-right nav cluster. Background `{colors.canvas}`, label `{colors.ink}`, rounded `{rounded.full}`, padding 14px × 28px.

### Bands & Cards

**`hero-band`** — Dark navy-purple gradient hero (`{colors.navy-deeper}`). Carries the `{component.hero-eyebrow}` label, a `{typography.display-xl}` headline in `{colors.on-dark}`, a bold sub-line, a paragraph, and the CTA pair (`{component.button-cta-lavender}` + `{component.button-outline-pill}`).

**`hero-eyebrow`** — Light-purple all-caps label ("THE AI INFRASTRUCTURE IDENTITY COMPANY") in `{colors.on-dark-accent}`, type `{typography.body-md}`.

**`problem-band`** — Near-black editorial band (`{colors.surface-dark}`) presenting "Identity is fragmented. Credentials are everywhere." in `{colors.on-dark}` with a product screenshot and a row of `{component.tag-pill-alert}` risk tags.

**`tag-pill-alert`** — Pill-shaped risk flags ("CREDENTIAL SPRAWL", "LATERAL MOVEMENT RISK", "AI IDENTITY BLINDSPOT", "NO UNIFIED AUDIT TRAIL"). Transparent background, text + outline in `{colors.accent-coral}`, rounded `{rounded.pill}`.

**`diagram-card`** — A white rounded panel holding the "Unified Identity Layer" architecture diagram. Background `{colors.canvas}`, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). Carries the soft navy glow shadow.

**`feature-card`** — Used in the 3-up "Remove identity friction" grid. Background `{colors.canvas}`, title in `{typography.title-md}`, body in `{typography.body-md}` (`{colors.ink}`), with a "Learn More →" link. Rounded `{rounded.lg}`, padding `{spacing.lg}` (24px).

**`outcomes-band`** — Deep-purple results band (`{colors.primary-deeper}`) with "Results that compound." and three `{component.stat-block}` columns in `{colors.on-dark}`.

**`stat-block`** — Large numeric stat ("100%", "95%", "80%") in `{typography.display-lg}`, label below in `{typography.body-md}`, on transparent background over the outcomes band.

### Testimonials & Closing

**`testimonial-card`** — Customer-quote cards on the "Trusted by teams" band. Background `{colors.canvas}`, quote in `{typography.body-md}` (`{colors.ink}`), attribution row with name + role. Rounded `{rounded.lg}`, padding `{spacing.lg}`.

**`testimonial-card-highlight`** — A featured quote variant with `{colors.lavender-bg}` background, carrying the purple glow shadow to lift it above the white surface.

**`cta-band`** — The pre-footer "Ready to Teleport?" band on `{colors.navy-deeper}`, headline in `{typography.display-lg}` (`{colors.on-dark}`), with `{component.button-cta-lavender}` ("Contact Sales") + `{component.button-outline-pill}` ("Start Free Trial").

**`footer`** — Dark navy footer (`{colors.navy-deeper}`) closing the page. Multi-column link list (Platform / Use Cases / Explore / Learn / Company), body text in `{colors.muted}`, type `{typography.body-md}`, padding `{spacing.xl}`.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` (#512fca) for the primary action layer. It is the only saturated color in the system besides the cyan announcement bar.
- Build type hierarchy through size and color, not weight — Lato stays at 400 everywhere.
- Keep the 1px letter-spacing on body copy (`{typography.body-md}`); it is a measured brand signature.
- Alternate dark bands (`{colors.navy-deeper}`, `{colors.surface-dark}`, `{colors.black}`) with white content sections to pace the long scroll.
- Use soft, offset-free glow shadows for elevation; depth should read as ambient light, not lift.
- Use pill buttons (`{rounded.pill}` / `{rounded.full}`) for nav and hero CTAs; reserve `{rounded.lg}` for content cards.
- Use coral/red tags (`{colors.accent-coral}`, `{colors.accent-red}`) only to flag risk/problem states.

### Don't
- Don't introduce a second display typeface — the system is intentionally all-Lato.
- Don't bold headlines to create emphasis; go bigger or shift color instead.
- Don't add hard directional drop shadows; the measured shadows are zero-offset 50–60px glows.
- Don't spread the cyan accent (`{colors.accent-cyan}`) beyond the announcement bar — it is a single, scarce signal.
- Don't place the saturated purple CTA on coral or cyan; the action color stays purple.
- Don't document hover states — default and active/pressed only.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 64→~32px; CTA pair stacks; feature grids 1-up; stat blocks stack; footer columns collapse |
| Tablet | 768–1024px | Nav tightens; feature cards 2-up; stat blocks 3-up may wrap |
| Desktop | 1024–1440px | Full horizontal nav; 3-up feature cards; 3-up stat blocks |
| Wide | > 1440px | Same as desktop with more outer breathing room; content width caps near ~1200px (derived) |

### Touch Targets
- `{component.button-primary}` carries 14px × 28px padding on `{typography.body-md}` text, comfortably exceeding 44px effective height.
- Nav pill buttons (`{component.button-outline-pill}`, `{component.button-contact-sales}`) use the same 14px × 28px padding.
- Exact touch-target dimensions and nav height were not directly measured — see Known Gaps.

### Collapsing Strategy
- Top nav collapses to a hamburger on mobile; the right-side CTA cluster moves into the menu sheet.
- Hero CTA pair stacks vertically on narrow viewports.
- Feature and testimonial card rows reduce columns rather than shrinking cards.
- Stat blocks on the outcomes band stack to a single column on mobile.
- Footer link columns wrap down to fewer columns.

### Image Behavior
- The dotted-globe hero particle field scales with the hero band.
- Product screenshots and the identity-layer diagram retain native aspect ratios inside their cards.
- Customer logo strip wraps to fewer-per-row on narrow viewports.

## Iteration Guide

1. Focus on ONE component at a time and reference its YAML key directly (`{component.feature-card}`, `{component.button-cta-lavender}`).
2. Variants of an existing component (`-highlight`, `-outline-pill`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex into a component.
4. Document default and active/pressed states only — never hover.
5. Keep all type Lato 400; build emphasis with size and color, not weight.
6. Keep the dark/light band alternation; don't stack two dark or two light bands without a break.
7. When in doubt about emphasis: bigger headline before any weight or color change.

## Known Gaps

- The measured `button-primary` reported `color: #512fc9` (a near-duplicate of the #512fca background) and an asymmetric `border-radius: 0px 12px`. The screenshots show white button labels and pill-shaped CTAs, so the label color is documented as `{colors.on-dark}` and pill radius (`{rounded.pill}`) is applied to hero/nav CTAs; the raw measured values are preserved in `{colors.primary-alt}` and `{rounded.lg}` for fidelity. The true button label color needs DOM confirmation.
- Only one component (`button-primary`) was machine-extracted; all other components (nav, bands, cards, footer) are documented from screenshot ground-truth plus measured tokens.
- Font weights for bold sub-lines and button labels were not measured — analysis reported weight 400 for all four type roles, though some screenshot text appears heavier. The bold appearance needs DOM confirmation.
- A 10px radius value appeared once in the data and was omitted from the scale as a likely one-off.
- `{colors.link-default}` (#0000ee) is the browser default link blue and is likely an unstyled anchor rather than an intentional brand color.
- Nav height, exact container max-width, section vertical padding, and touch-target dimensions were not directly measured (content width ~1200px is derived from screenshots).
- The cyan, coral, and red accents were captured at low frequency; their full usage rules (beyond announcement bar and risk tags) are inferred from screenshots.
- Animation/transition timings, form input and validation states, and the pricing-page-specific components are out of scope for this extraction.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/goteleport/design-md -->
