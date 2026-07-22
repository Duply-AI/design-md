---
version: alpha
name: Dala-design-analysis
description: A dramatic dark-canvas product teaser anchored on pure black (#000000) with a single electric-violet CTA color (#8052ff) and oversized PP Neue Montreal display type. The system reads as confident, gallery-dark, and minimal — one enormous tightly-tracked headline, an eyebrow in warm amber, thin low-weight body copy, and a particle-cloud brain visualization filling the right half of the hero. Brand voltage comes entirely from scale (a 112px headline), the violet pill CTA, and the multicolored particle field against deep black.

colors:
  primary: "#8052ff"
  primary-soft: "#ecd6ff"
  accent-amber: "#ffb829"
  ink: "#ffffff"
  body: "#bdbdbd"
  muted: "#9a9a9a"
  canvas: "#000000"
  canvas-soft: "#070707"
  surface: "#2f2f2f"
  hairline: "#e9e9e9"
  slate: "#3d424e"
  social-twitter: "#1da1f2"
  social-linkedin: "#2867b2"
  brand-teal: "#15846e"
  brand-teal-alt: "#189b81"

typography:
  display:
    fontFamily: "PPNeueMontreal, Inter, sans-serif"
    fontSize: 112.5px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -4.5px
  heading:
    fontFamily: "PPNeueMontreal, Inter, sans-serif"
    fontSize: 42px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  title:
    fontFamily: "PPNeueMontreal, Inter, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  body:
    fontFamily: "PPNeueMontreal, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 200
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  sm: 10px
  lg: 22px
  xl: 24px
  pill: 50px

spacing:
  xxs: 6px
  xs: 14px
  sm: 16px
  md: 24px
  lg: 30px
  xl: 38px
  xxl: 48px
  section: 60px

components:
  top-nav:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: 24px 60px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: 14px 30px
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    padding: 60px
  hero-eyebrow:
    backgroundColor: transparent
    textColor: "{colors.accent-amber}"
    typography: "{typography.title}"
  hero-body:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.body}"
  card:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  cookie-banner:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
  cookie-accept-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.pill}"
    padding: 6px 16px
---

## Overview

Dala's landing surface is a single, dramatic dark hero — pure black canvas (`{colors.canvas}` — #000000) with white display type (`{colors.ink}` — #ffffff) and one electric-violet pill CTA (`{colors.primary}` — #8052ff). The page reads as a confident, gallery-dark product teaser: an oversized 112px headline ("Unlock collective wisdom."), a warm amber eyebrow line (`{colors.accent-amber}` — #ffb829), thin low-weight body copy, and a generative particle-cloud brain visualization filling the right half of the frame.

The type system is monolithic: every role runs **PP Neue Montreal** — a tight neo-grotesque used at 112px for the hero headline (with aggressive -4.5px letter-spacing), 42px for sub-heads, 24px bold for nav and labels, and a delicate 18px weight-200 for body copy. There is exactly one display headline on the page; the rest is supporting type.

Brand voltage comes from three things only: **scale** (the enormous tightly-tracked headline), **the violet pill** (`{component.button-primary}`), and the **multicolored particle field** — thousands of tiny triangles in amber, violet, teal, and white scattered against the black. Every accent color in the system (`{colors.accent-amber}`, `{colors.brand-teal}`, `{colors.social-twitter}`, etc.) appears within that particle cloud rather than in flat UI chrome.

The measured page captured only the landing hero, so this entry documents the hero band, navigation, the violet CTA, and the white cookie-consent pill. Lower-page sections are not in scope (see Known Gaps).

**Key Characteristics:**
- Pure-black canvas (`{colors.canvas}` — #000000) with white type — a maximally dark, gallery-style frame.
- One electric-violet pill CTA (`{colors.primary}` — #8052ff) shaped with `{rounded.pill}` (50px). The violet is the only saturated UI color; everything else is white, gray, or black.
- Oversized PP Neue Montreal display headline at 112.5px with -4.5px letter-spacing — the single loudest element on the page.
- Warm amber eyebrow (`{colors.accent-amber}` — #ffb829) in small bold caps sits directly above the body paragraph — the lone warm note in the layout.
- Thin body copy: weight 200 at 18px in a soft gray (`{colors.body}` — #bdbdbd / `{colors.muted}` — #9a9a9a), deliberately delicate against the bold headline.
- A generative particle cloud carries the full color palette (amber, violet, teal, blue) as thousands of small triangles against black — color lives in the artwork, not the chrome.
- Flat, shadowless system — no measured shadows; depth comes purely from the black-on-color particle field.
- Rounded geometry clusters at `{rounded.xl}` (24px) and `{rounded.pill}` (50px) for the violet buttons.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #8052ff): The single brand action color. The "REQUEST ACCESS" pill in the nav and hero, and the cookie "ACCEPT" button. Electric violet is the system's only saturated chrome color.
- **Primary Soft** (`{colors.primary-soft}` — #ecd6ff): A pale lavender tint appearing as light violet particles in the cloud and as a possible soft-state accent.
- **Accent Amber** (`{colors.accent-amber}` — #ffb829): The eyebrow line ("STOP MANAGING KNOWLEDGE. START USING IT.") and a dominant particle color. The warmest note in an otherwise cool palette.

### Particle-Field Accents
These colors were measured at low frequency and appear within the generative triangle cloud rather than in flat UI:
- **Social Twitter** (`{colors.social-twitter}` — #1da1f2) and **Social LinkedIn** (`{colors.social-linkedin}` — #2867b2): cool blue particle tones (also likely social-icon brand colors).
- **Brand Teal** (`{colors.brand-teal}` — #15846e) and **Brand Teal Alt** (`{colors.brand-teal-alt}` — #189b81): green-teal particle tones.
- **Slate** (`{colors.slate}` — #3d424e): a desaturated blue-gray used in low-frequency UI or particle shading.

### Surface
- **Canvas** (`{colors.canvas}` — #000000): The page floor — pure black, full-bleed behind the hero and particle cloud.
- **Canvas Soft** (`{colors.canvas-soft}` — #070707): A near-black used for nested surfaces / card backgrounds.
- **Surface** (`{colors.surface}` — #2f2f2f): A dark-gray surface tone for subtle raised elements.
- **Hairline** (`{colors.hairline}` — #e9e9e9): A near-white tone — most likely the white cookie-banner surface and any light dividers.

### Text
- **Ink** (`{colors.ink}` — #ffffff): The headline and all primary text on the dark canvas.
- **Body** (`{colors.body}` — #bdbdbd): The lighter gray for body copy.
- **Muted** (`{colors.muted}` — #9a9a9a): Secondary text and link color — measured on `a` elements.

## Typography

### Font Family
The system runs **PP Neue Montreal** for every role — a tight, modern neo-grotesque. There is no secondary typeface; hierarchy is driven entirely by size and weight. The fallback stack walks `Inter, sans-serif`.

The roles span an unusually wide weight range for a single family:
- Display headline — weight 400 at 112.5px with -4.5px tracking
- Sub-heads — weight 400 at 42px
- Nav / labels — weight 700 at 24px
- Body — weight **200** at 18px (a genuinely thin weight, used deliberately against the heavy headline)

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display}` | 112.5px | 400 | 1.1 | -4.5px | Hero headline ("Unlock collective wisdom.") |
| `{typography.heading}` | 42px | 400 | 1.2 | 0 | Section sub-heads (h3) |
| `{typography.title}` | 24px | 700 | 1.5 | 0 | Nav links, button labels, eyebrow caps, logo wordmark |
| `{typography.body}` | 18px | 200 | 1.5 | 0 | Body paragraphs, cookie-banner copy |

### Principles
The contrast that defines the page is **weight against scale**: a 112px headline at weight 400 sitting above an 18px paragraph at weight 200. The headline reads heavy purely because of its size; the body reads delicate because of its thinness. The -4.5px letter-spacing on the display size is part of the voice — PP Neue Montreal without the negative tracking at that scale loses the tightly-packed signature.

The eyebrow (`{typography.title}` rendered in amber caps) is the only place bold weight 700 appears in running flow; it acts as a colored label, not a headline.

### Note on Font Substitutes
PP Neue Montreal is a commercial typeface (Pangram Pangram) and should not be assumed freely redistributable. If it is unavailable, **Inter** is the closest widely-available open substitute for the body and label roles; for the tightly-tracked display headline, **Space Grotesk** or **Inter** at weight 400 with roughly -0.04em tracking preserves the neo-grotesque, condensed-display character. Note: `fonts_licensed` was empty in the measured analysis, so no substitute was machine-flagged — this recommendation is added on inspection of the family name.

## Layout

### Spacing System
- **Base unit:** measured spacing clusters at multiples of 6px and at a recurring 60px band value.
- **Tokens:** `{spacing.xxs}` 6px · `{spacing.xs}` 14px · `{spacing.sm}` 16px · `{spacing.md}` 24px · `{spacing.lg}` 30px · `{spacing.xl}` 38px · `{spacing.xxl}` 48px · `{spacing.section}` 60px.
- **Most frequent value:** 6px (48 occurrences) — fine-grained internal gaps, icon spacing, inline padding.
- **Band rhythm:** 60px (8 occurrences) — the dominant outer-margin / section padding value.

### Grid & Container
- **Hero layout:** a two-zone split — text column (headline, eyebrow, body, CTA) on the left ~40% of the frame; particle-cloud visualization filling the right ~60%.
- **Nav:** single horizontal row — logo at far left, text links (MANIFESTO, TEAM, BLOG) right of center, violet "REQUEST ACCESS" pill at far right.
- **Outer padding:** ~60px (`{spacing.section}`) framing the hero content from the viewport edges.

### Whitespace Philosophy
The hero is built on negative space — the black canvas is allowed to dominate, with the text column compact at lower-left and the particle cloud expanding from the right. The result is a poster-like composition that reads as a single statement rather than a dense layout.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | All measured surfaces — nav, hero text, cards |
| Color-on-black field | Multicolored particle cloud over pure black | The hero visualization — depth from density and color, not shadow |
| Pill on canvas | Solid `{colors.primary}` pill against `{colors.canvas}` | Violet CTA reads as elevated purely through color contrast |

The shadow analysis returned **no measured shadows** — the system is entirely flat. Depth is implied two ways: by the dense particle cloud (thousands of overlapping triangles fading into the black) and by the high-contrast violet pill against the void. No drop shadows, no glows, no borders were measured.

### Decorative Depth
- The generative particle cloud is the only depth device — small triangles in amber, violet, teal, blue, and white scatter outward from a brain-shaped mass, fading into the black at the edges. This carries the entire color palette and is content, not chrome.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 10px | Smallest measured radius — minor rounded elements |
| `{rounded.lg}` | 22px | Secondary rounded surfaces (4 occurrences) |
| `{rounded.xl}` | 24px | Dominant card / container radius (18 occurrences) |
| `{rounded.pill}` | 50px | Violet CTA pills and the cookie-consent banner |

The radius language is soft: the most common value is `{rounded.xl}` (24px), and interactive pills round fully to `{rounded.pill}` (50px). Note that the measured `card` and `button` selectors returned 0px radius — this conflicts with the visibly pill-shaped CTA and rounded surfaces in the screenshots (see Known Gaps).

### Visualization Geometry
The hero artwork is built from thousands of small triangle glyphs — the brand's particle motif. These are vector shapes rendered procedurally, not photographic; they retain crisp edges at every scale.

## Components

### Navigation

**`top-nav`** — Transparent bar over the black canvas. Logo wordmark ("Dala") at far left in white, three text links (MANIFESTO, TEAM, BLOG) right of center, and the violet "REQUEST ACCESS" pill anchored far right. Links in `{typography.title}` (PP Neue Montreal). No background fill, no border — the nav floats directly on the canvas.

**`nav-link`** — Inline text links in `{colors.ink}` (white) on the dark nav. Small-caps treatment, `{typography.title}` weight.

### Buttons

**`button-primary`** — The signature CTA ("REQUEST ACCESS"). Background `{colors.primary}` (#8052ff), white label (`{colors.ink}`), fully rounded `{rounded.pill}` (50px). Appears twice: in the nav and below the hero body copy. It is the only saturated interactive element on the page.

### Hero

**`hero-band`** — The full-bleed black hero. Background `{colors.canvas}` (#000000), padding ~`{spacing.section}` (60px). Hosts the display headline, eyebrow, body paragraph, CTA, and the particle-cloud visualization.

**`hero-eyebrow`** — The small amber caps line ("STOP MANAGING KNOWLEDGE. START USING IT.") in `{colors.accent-amber}` (#ffb829), `{typography.title}` weight. Sits directly above the body paragraph as a colored label.

**`hero-body`** — The supporting paragraph in `{colors.body}` (#bdbdbd) at `{typography.body}` (18px / weight 200) — deliberately thin against the heavy headline.

### Containers

**`card`** — Generic content container. Background `{colors.canvas-soft}` (#070707), rounded `{rounded.xl}` (24px). No shadow (the system is flat). Note: the measured `card` selector returned 0px radius — the 24px value here reflects the dominant measured radius across the page.

### Cookie Consent

**`cookie-banner`** — A small white pill anchored bottom-right ("This website uses cookies. Learn more"). Background `{colors.ink}` (#ffffff — inverted from the dark page), text `{colors.canvas}` (black), rounded `{rounded.pill}`, padding ~14px × 24px. The only light surface on the page.

**`cookie-accept-button`** — The violet "ACCEPT" pill inside the cookie banner. Background `{colors.primary}`, white label, rounded `{rounded.pill}`, compact padding (~6px × 16px).

## Do's and Don'ts

### Do
- Keep the canvas pure black (`{colors.canvas}` — #000000) and let it dominate. The composition is a poster, not a dashboard.
- Reserve `{colors.primary}` (#8052ff) exclusively for CTAs. It is the only saturated chrome color — its scarcity is what makes it read as the action.
- Run a single huge display headline (`{typography.display}`, 112px) per view. The page's voltage is scale, not quantity.
- Keep the -4.5px tracking on the display size. PP Neue Montreal at 112px without it loses its tightly-packed signature.
- Pair the heavy headline with thin (weight 200) body copy. The weight contrast is the system's defining move.
- Let the particle cloud carry the full color palette (amber, teal, blue, violet). Color belongs in the artwork.
- Round CTAs fully to `{rounded.pill}` (50px) and containers to `{rounded.xl}` (24px).

### Don't
- Don't introduce a second saturated UI color alongside the violet — the accents (amber, teal, blue) belong in the particle field, not in buttons or bars.
- Don't put body copy in a bold weight. The thin 200 weight against the headline is intentional.
- Don't add shadows or glows — the system is flat; depth comes from the particle density and color contrast.
- Don't lighten the canvas. Any gray dilution kills the gallery-dark contrast that makes the violet pop.
- Don't crowd the hero. The negative space around the text column is part of the composition.

## Responsive Behavior

The measured capture included a desktop landing render and a tall mobile-proportioned render; both show the same hero composition. Exact breakpoint values were not measured, so the following is observed from the two captures.

### Observed Behavior

| Context | Observed Changes |
|---|---|
| Desktop | Two-zone hero — text column lower-left, particle cloud filling the right; full horizontal nav with all links visible |
| Narrow / mobile | The entire hero (headline, eyebrow, body, CTA, particle cloud) compresses into a single top band; the headline scales down substantially; the page below stays black void |

### Touch Targets
- `{component.button-primary}` renders as a generously sized pill — comfortably above minimum tap size at desktop scale.
- Nav links are compact; their exact tap dimensions were not measured.

### Collapsing Strategy
- The display headline scales down on narrow viewports while preserving its tight tracking.
- The particle cloud appears to shrink/reposition rather than reflow — it remains a single visual mass anchored beside or below the text.
- Exact breakpoints, a hamburger menu, and stacking order are not confirmed (see Known Gaps).

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.button-primary}`, `{component.hero-band}`).
2. Variants of an existing component (`-active`, `-disabled`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex into a component.
4. Never document hover. Default and Active/Pressed states only.
5. The headline stays PP Neue Montreal at scale with negative tracking; body stays thin (weight 200). The weight-vs-scale contrast does not blur.
6. Violet is the only saturated chrome color — don't promote a particle accent (amber, teal, blue) into UI without explicit reason.
7. When in doubt about emphasis: bigger headline before brighter color.

## Known Gaps

- Only the landing hero was captured. Lower-page sections (Manifesto, Team, Blog content, footer) were not measured and are entirely out of scope.
- The measured `button-primary` returned `color: #000000`, `radius: 0px`, `padding: 1px 6px` — this conflicts with the clearly violet, fully-rounded "REQUEST ACCESS" pill in the screenshots. The button is documented here from screenshot ground-truth (`{colors.primary}` fill, white label, `{rounded.pill}`); the measured values likely captured a hidden or utility element. Exact pill padding is derived from visual proportion, not measurement.
- The measured `card` selector also returned 0px radius, conflicting with the dominant measured `border-radius` of 24px (18 occurrences). The card entry uses 24px; the discrepancy is unresolved.
- No shadows were measured; the flat-system claim is therefore confirmed by absence, but any subtle glows on the particle cloud (if present) were not captured.
- PP Neue Montreal is a commercial typeface but was NOT machine-flagged in `fonts_licensed` (empty array). The open-source substitute recommendation was added on manual inspection and should be verified against licensing.
- Exact letter-spacing for the heading/title/body roles was reported as "normal" and is documented as 0; precise values were not measured.
- Responsive breakpoint values, mobile nav behavior (hamburger vs. inline), and stacking order are inferred from two screenshots, not from measured media queries.
- Animation and transition timings (the particle cloud is plainly animated/generative) are not in scope.
- The exact role of low-frequency accents (`{colors.social-twitter}`, `{colors.social-linkedin}`, `{colors.brand-teal}`) — particle colors vs. social-icon brand colors — could not be disambiguated from the landing capture alone.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/dala/design-md -->
