---
version: alpha
name: Anthropic-design-analysis
description: A calm, editorial, research-first interface built on a warm off-white paper canvas (#faf9f5) with near-black ink, a custom two-family type system (Anthropic Sans for structural headings, Anthropic Serif for oversized display + body), and a single warm clay accent (#d97757). The system reads like a thoughtful print publication translated to the web — generous serif display, square-cornered black buttons, soft warm-gray cards, and a deep near-black footer that closes the page. Brand voltage comes from the giant Anthropic Serif display headline and the disciplined warm-neutral palette rather than from color.

colors:
  primary: "#141413"
  primary-active: "#000000"
  ink: "#141413"
  body: "#3d3d3a"
  muted: "#5e5d59"
  muted-strong: "#666666"
  muted-soft: "#87867f"
  neutral: "#b0aea5"
  neutral-soft: "#9c9a92"
  neutral-warm: "#aeaca0"
  hairline: "#d1cfc5"
  hairline-soft: "#dedcd1"
  canvas: "#faf9f5"
  surface-card: "#f0eee6"
  surface-card-alt: "#e8e6dc"
  surface-muted: "#efefef"
  surface-dark: "#141413"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-dark-soft: "#cccccc"
  accent-clay: "#d97757"
  accent-blue: "#6a9bcc"
  link: "#0000ee"
  white: "#ffffff"
  black: "#000000"

typography:
  display-sans:
    fontFamily: "Anthropic Sans, Inter, sans-serif"
    fontSize: 60.87px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: normal
  display-serif:
    fontFamily: "Anthropic Serif, Source Serif 4, serif"
    fontSize: 96px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 1.6px
  title:
    fontFamily: "Anthropic Sans, Inter, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: normal
  body:
    fontFamily: "Anthropic Serif, Source Serif 4, serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: normal
  button:
    fontFamily: "Anthropic Serif, Source Serif 4, serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: normal

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 31px
  xxl: 46px
  xxxl: 76px
  section: 91px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: 16px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 22.4px 12px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
  button-pill-outline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.display-sans}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-sans}"
    padding: 91px
  feature-globe-card:
    backgroundColor: "{colors.surface-card-alt}"
    textColor: "{colors.ink}"
    typography: "{typography.display-serif}"
    rounded: "{rounded.lg}"
    padding: 46px
  release-card:
    backgroundColor: "{colors.surface-card-alt}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: 24px
  list-row:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: 16px
  meta-label:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.title}"
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.title}"
    padding: 76px
---

## Overview

Anthropic's marketing surface is a calm, editorial, research-first interface. The page floor is a warm off-white paper tone (`{colors.canvas}` — #faf9f5), the text is a near-black warm ink (`{colors.ink}` — #141413), and the whole system reads like a thoughtful print publication rendered for the web. There is almost no chrome and almost no color — the emotional voltage is carried by an enormous Anthropic Serif display headline ("What 81,000 people want from AI") and by the disciplined warm-neutral palette.

Type voice splits cleanly into two custom families. **Anthropic Sans** handles the structural headings — the page h1 ("AI research and products that put safety at the frontier") at weight 700, and the smaller h3 section labels at weight 600. **Anthropic Serif** handles the oversized display moments (h2 at 96px) and, unusually, the running body copy too — body text is set in the serif at 24px / 400. This serif-for-body choice is core to the brand's editorial, considered tone.

Component voltage is intentionally low-key: square-cornered solid-black buttons (`{component.button-primary}` — radius 0), soft warm-gray content cards (`{colors.surface-card-alt}` — #e8e6dc), and thin hairline-divided list rows. The only true color accents are the warm clay (`{colors.accent-clay}` — #d97757) and a muted utility blue (`{colors.accent-blue}` — #6a9bcc), both used sparingly.

The footer flips to a deep near-black (`{colors.surface-dark}` — #141413) with muted light text (`{colors.on-dark-soft}` — #cccccc), the single dark surface in the system, which visually closes the long-scroll landing page.

**Key Characteristics:**
- Warm paper canvas (`{colors.canvas}` — #faf9f5), never pure white. The entire neutral ramp is warm-toned.
- Two custom type families: Anthropic Sans (structural headings, 600–700) and Anthropic Serif (display + body, 400). Serif body copy is a deliberate editorial signature.
- Solid-black, square-cornered primary buttons (`{rounded.none}`) — the sharp 0px corner is a measured, deliberate choice against the otherwise soft, rounded cards.
- Soft warm-gray cards (`{colors.surface-card-alt}`, `{colors.surface-card}`) at `{rounded.md}` (8px) and `{rounded.lg}` (16px) holding releases and the feature globe.
- A near-monochrome accent strategy — one warm clay (#d97757) and one muted blue (#6a9bcc) appear only in small moments (map highlight, links).
- Deep near-black footer (`{colors.surface-dark}`) closes the page; the only dark surface in the system.
- Generous editorial whitespace with a roughly 91px section rhythm.

## Colors

### Brand & Accent
- **Accent Clay** (`{colors.accent-clay}` — #d97757): Anthropic's signature warm clay/terracotta. Appears in small accent moments (the highlighted country tag on the globe, brand marks) — never on the primary CTA.
- **Accent Blue** (`{colors.accent-blue}` — #6a9bcc): A muted, dusty utility blue used sparingly for secondary highlights inside product/data UI.
- **Link** (`{colors.link}` — #0000ee): The browser-default link blue, present on some plain inline links in body content.

### Surface
- **Canvas** (`{colors.canvas}` — #faf9f5): The warm paper-tone page floor.
- **Surface Card** (`{colors.surface-card}` — #f0eee6): The lightest warm card tone.
- **Surface Card Alt** (`{colors.surface-card-alt}` — #e8e6dc): The slightly deeper warm-gray used for the globe feature card and the "Latest releases" cards.
- **Surface Muted** (`{colors.surface-muted}` — #efefef): A neutral light fill used in incidental UI.
- **Surface Dark** (`{colors.surface-dark}` — #141413): The footer background — the only dark surface on the page.
- **Hairline** (`{colors.hairline}` — #d1cfc5): The warm 1px divider tone on list rows and card meta dividers.
- **Hairline Soft** (`{colors.hairline-soft}` — #dedcd1): A barely-visible warm divider for low-contrast separation.

### Text
- **Ink** (`{colors.ink}` — #141413): All headlines and primary text.
- **Body** (`{colors.body}` — #3d3d3a): Slightly softened running-text ink.
- **Muted** (`{colors.muted}` — #5e5d59): Secondary text — meta labels ("DATE", "CATEGORY"), captions.
- **Muted Strong** (`{colors.muted-strong}` — #666666) / **Muted Soft** (`{colors.muted-soft}` — #87867f): Tertiary text tones for fine print and de-emphasized rows.
- **Neutral ramp** (`{colors.neutral}` — #b0aea5, `{colors.neutral-soft}` — #9c9a92, `{colors.neutral-warm}` — #aeaca0): Warm grays for the globe linework, decorative dot navigation, and disabled/quiet states.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #ffffff): Text on black buttons.
- **On Dark Soft** (`{colors.on-dark-soft}` — #cccccc): Footer link text — muted light gray against the near-black footer.

### Neutral Anchors
- **Black** (`{colors.black}` — #000000) and **White** (`{colors.white}` — #ffffff): Pure anchors used in logos, button press state, and high-contrast UI moments; the brand otherwise stays on its warm ramp.

## Typography

### Font Family
The system runs two **custom Anthropic typefaces**: **Anthropic Sans** (structural headings) and **Anthropic Serif** (oversized display + body). Anthropic Sans is a clean geometric grotesque used at weight 600–700; Anthropic Serif is a high-contrast transitional serif used at weight 400, both for the giant h2 display and, distinctively, for body copy.

The split is functional:
- Anthropic Sans (600–700) — the page h1 and h3 section labels, nav links
- Anthropic Serif (400) — the oversized h2 display headline, body paragraphs, and button labels

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-serif}` | 96px | 400 | 1.1 | 1.6px (derived rounding of measured 1.59936px) | The marquee serif display headline ("What 81,000 people want from AI") — Anthropic Serif |
| `{typography.display-sans}` | 60.87px (measured 60.8653px) | 700 | 1.1 | normal | Page h1 ("AI research and products that put safety at the frontier") — Anthropic Sans |
| `{typography.title}` | 24px | 600 | 1.3 | normal | h3 section labels ("Latest releases"), nav items, card titles — Anthropic Sans |
| `{typography.body}` | 24px | 400 | 1.4 | normal | Running body copy, intro paragraphs — Anthropic Serif |
| `{typography.button}` | 20px | 400 | 1.4 | normal | Button labels — Anthropic Serif |

### Principles
The two-family split is the brand's voice: Anthropic Sans for structure, Anthropic Serif for expression and reading. The serif-for-body choice is unusual for modern SaaS and is intentional — it makes the site feel like a considered research publication rather than a product page. Never substitute the sans for the serif body copy or vice versa.

Display headlines stay at the large serif (h2, 96px, weight 400) — the brand draws emphasis from size and the serif's contrast, not from heavy weight. The structural h1 is the only place weight 700 appears.

### Note on Font Substitutes
Anthropic Sans and Anthropic Serif are proprietary/custom typefaces and are not available as public web fonts (the analyzer's `fonts_licensed` list was empty, but these faces are clearly bespoke and must not be claimed as shippable). Open-source substitutes:
- **Anthropic Sans** → **Inter** (weight 600/700) or **Space Grotesk** for a slightly more geometric feel.
- **Anthropic Serif** → **Source Serif 4** (weight 400) or **Newsreader** for the high-contrast display moments.

These approximations preserve the structural-sans / editorial-serif contrast but not the exact letterforms.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 31px · `{spacing.xxl}` 46px · `{spacing.xxxl}` 76px · `{spacing.section}` 91px.
- **Section rhythm:** roughly `{spacing.section}` (91px) between major editorial bands; the footer uses `{spacing.xxxl}` (76px) vertical padding.
- **Card internal padding:** `{spacing.xxl}` (46px) on the large globe feature card; `{spacing.lg}` (24px) on the release cards.
- **Tight rhythm:** the 31px (`{spacing.xl}`) value recurs frequently for stacked text gaps within content blocks.

### Grid & Container
- **Hero band:** a two-column split — Anthropic Sans h1 on the left, a serif body intro paragraph on the right.
- **Latest releases:** a 3-up card grid at desktop.
- **List section:** a two-column editorial layout — a left intro statement, a right-aligned list of linked rows with category labels.
- **Footer:** a 4+ column link list (Products / Solutions / Resources / Company plus sub-columns).

### Whitespace Philosophy
Anthropic uses generous, unhurried whitespace — the page reads slowly and deliberately. Large empty margins around the hero, big gaps before the globe card, and roomy card padding all reinforce the "considered research" tone. Density is reserved only for the footer link directory.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero band |
| Hairline divider | 1px `{colors.hairline}` / `{colors.hairline-soft}` | List rows, card meta dividers |
| Card surface | Warm-gray fill (`{colors.surface-card-alt}`) — usually no shadow | Release cards, globe feature card |
| Soft layered shadow | `rgba(0,0,0,0.01) 0 2px 2px, rgba(0,0,0,0.02) 0 4px 4px, rgba(0,0,0,0.04) 0 16px 24px` | Subtly elevated cards / floating elements (measured, used sparingly — 3 instances) |
| Dark closing surface | `{colors.surface-dark}` background, no shadow | Footer — color contrast does the work |

The elevation philosophy is **flat and editorial**. The single measured box-shadow is extremely soft and low-alpha — a quiet layered lift, never a dramatic drop. Most separation is achieved with warm-gray fills and hairlines rather than shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Primary buttons — the square corner is a deliberate, measured choice |
| `{rounded.sm}` | 4px | Small inline UI accents (2 measured instances) |
| `{rounded.md}` | 8px | Release cards, outline pill buttons (most common card radius — 17 instances) |
| `{rounded.lg}` | 16px | The large globe feature card (8 instances) |

### Photography & Decorative Geometry
The hero's "81,000 people" band uses a fine line-drawn globe illustration in warm neutral tones (`{colors.neutral}`, `{colors.neutral-soft}`) with a single clay-highlighted country region (`{colors.accent-clay}`) and a small `{rounded.lg}` (16px) card frame. There are no photographic crops in the captured pages — imagery is restrained, line-art, and warm-toned.

## Components

### Top Navigation

**`top-nav`** — Warm-canvas nav bar at the top of every page. Background `{colors.canvas}`, ink-colored wordmark ("ANTHROP\C") at left, horizontal menu (Research, Policy, Commitments, Learn, News) center-right in `{typography.title}` scale, and a `{component.button-primary}` "Try Claude" at the far right with an adjacent dropdown caret. Padding around `{spacing.md}` (16px).

**`nav-link`** — Inline menu item, transparent background, `{colors.ink}` text. Several items carry a dropdown caret.

### Buttons

**`button-primary`** — The signature CTA ("Try Claude", "Read announcement"). Background `{colors.primary}` (#141413), text `{colors.on-primary}` (#ffffff), label in `{typography.button}` (Anthropic Serif 20px / 400), **square corners** (`{rounded.none}` — measured 0px), padding 22.4px × 12px (measured). Press state `button-primary-active` deepens to `{colors.primary-active}` (#000000).

**`button-pill-outline`** — The lighter-weight "Read more →" control inside the globe card. Transparent background, `{colors.ink}` text + trailing arrow glyph, thin hairline outline, rounded `{rounded.md}` (8px). Padding ~12px × 16px (derived from the spacing scale — not directly measured).

**`text-link`** — The underlined keywords inside the hero h1 ("research", "products"). Set in `{typography.display-sans}` with an ink underline; the underline is the emphasis mechanism inside the headline.

### Cards & Containers

**`hero-band`** — Two-column hero: Anthropic Sans h1 (`{typography.display-sans}`) on the left with inline underlined keywords, and a serif intro paragraph (`{typography.body}`) on the right. Background `{colors.canvas}`, vertical rhythm around `{spacing.section}` (91px).

**`feature-globe-card`** — The large marquee card holding the "What 81,000 people want from AI" serif display, sub-line, a `{component.button-pill-outline}`, and the line-art globe with a clay-highlighted country and a small dot-pager. Background `{colors.surface-card-alt}` (#e8e6dc), rounded `{rounded.lg}` (16px), internal padding `{spacing.xxl}` (46px).

**`release-card`** — Used in the 3-up "Latest releases" grid. Background `{colors.surface-card-alt}`, rounded `{rounded.md}` (8px), padding `{spacing.lg}` (24px). Carries a `{typography.title}` headline, a serif body description, a hairline-divided meta block ("DATE" / "CATEGORY" in `{component.meta-label}`), and a `{component.button-primary}` "Read announcement" at the bottom.

### Lists & Meta

**`list-row`** — A hairline-divided editorial link row (e.g., "Core views on AI safety" → "Announcements"). Transparent background, `{colors.ink}` title at left, `{colors.muted}` category label right-aligned, 1px `{colors.hairline}` divider beneath. Padding around `{spacing.md}` (16px).

**`meta-label`** — Small uppercase meta labels ("DATE", "CATEGORY") and right-aligned values inside cards. Transparent background, `{colors.muted}` text.

### Footer

**`footer`** — The deep near-black footer that closes the landing page. Background `{colors.surface-dark}` (#141413), link text `{colors.on-dark-soft}` (#cccccc), column headers in `{colors.on-dark}` white. Multi-column link directory (Products / Solutions / Resources / Company plus sub-groups like Models, Claude Platform, Help and security), the "A\" brandmark at top-left, a copyright line and social icons at the bottom. Vertical padding `{spacing.xxxl}` (76px). The dark surface is the only inversion in the system and deliberately closes the page.

## Do's and Don'ts

### Do
- Keep the canvas warm (`{colors.canvas}` — #faf9f5). Never use pure white as the page floor; the warm paper tone is core to the brand.
- Set body copy in Anthropic Serif (`{typography.body}`) at weight 400. The serif-for-body choice is an intentional editorial signature.
- Use Anthropic Sans (`{typography.display-sans}`, `{typography.title}`) only for structural headings, nav, and card titles.
- Keep primary buttons solid black with **square corners** (`{rounded.none}`). The sharp corner against soft cards is a measured, deliberate contrast.
- Reserve `{colors.accent-clay}` (#d97757) for small accent moments — the brand is near-monochrome at the action layer.
- Use warm-gray fills (`{colors.surface-card-alt}`) and hairlines for separation before reaching for shadow.
- End the page with the dark footer (`{colors.surface-dark}`). The warm-to-dark transition closes the long scroll.

### Don't
- Don't color the primary CTA. It stays `{colors.primary}` black; accents never land on buttons.
- Don't substitute Anthropic Sans for serif body copy or push body to a sans family — it breaks the editorial tone.
- Don't round the primary button. 0px is measured and intentional.
- Don't introduce cool grays. The entire neutral ramp (`{colors.hairline}`, `{colors.neutral}`, `{colors.muted}`) is warm.
- Don't add dark surfaces anywhere except the footer.
- Don't add heavy shadows — the system's only measured shadow is a very soft, low-alpha layered lift.
- Don't document hover styling beyond the press state — primary darkens to `{colors.primary-active}` on press; nothing else changes.

## Responsive Behavior

### Breakpoints
The two captured viewports (a ~1400px desktop and a narrower laptop/mid-width render) both keep the hero as a two-column split and the releases as a 3-up grid; the mid-width view simply tightens scale. Exact breakpoint widths were not measured.

| Name | Width | Key Changes (inferred) |
|---|---|---|
| Mobile | < 768px | Hero two-column likely stacks; release grid 3→1; footer columns wrap; display serif scales down from 96px |
| Tablet | 768–1024px | Release grid likely 3→2; nav may collapse |
| Desktop | 1024–1440px | Full two-column hero, 3-up release grid, full horizontal nav |
| Wide | > 1440px | As desktop with more outer margin |

### Touch Targets
- `{component.button-primary}` carries 22.4px × 12px padding (measured) — vertical padding is generous; effective target height is comfortable for touch.
- `{component.list-row}` rows use ~16px padding and full-width hairline separation, giving large tap areas.
- Exact minimum touch-target dimensions were not extracted.

### Collapsing Strategy
- Hero's two-column split (sans h1 / serif intro) collapses to single column on narrow screens.
- Release cards reduce column count rather than shrinking type.
- Footer's multi-column directory wraps to fewer columns at narrow widths.
- The oversized serif display (96px) must scale down substantially on mobile to remain legible — exact mobile size not measured.

### Image Behavior
- The line-art globe illustration scales within the `{component.feature-globe-card}` frame; its native warm-neutral linework remains legible at smaller sizes.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.release-card}`, `{component.feature-globe-card}`).
2. Variants of an existing component (`-active`, etc.) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and Active/Pressed only.
5. Keep the two-family discipline: Anthropic Sans for structure, Anthropic Serif for display + body. Don't blur it.
6. Keep the canvas warm and the footer the only dark surface.
7. When in doubt about emphasis: bigger serif (size) before bolder — the brand draws power from scale, not weight.

## Known Gaps

- Anthropic Sans and Anthropic Serif are custom/proprietary typefaces; the analyzer's `fonts_licensed` array was empty, but these faces are bespoke and not shippable. Open-source substitutes are documented in the Typography section.
- Only `button-primary` was captured by the component analyzer (color #141413, radius 0px, padding 22.4px × 12px). The "Read more" outline pill, list rows, and meta labels are documented from screenshot ground-truth; their exact padding/border values are partly derived from the measured spacing scale and marked accordingly.
- The measured h1 size (60.8653px) and h2 letter-spacing (1.59936px) are rounded for readability (60.87px / 1.6px) — derived rounding noted inline.
- Breakpoint widths, mobile type scaling, and exact touch-target minimums were not measured — responsive behavior is inferred from two desktop-class captures.
- The yellow/clay "MOROCCO" highlight tag and dot-pager in the globe card were observed but not measured as discrete tokens; the clay highlight is mapped to `{colors.accent-clay}`.
- Accent blue (#6a9bcc) and the default link blue (#0000ee) were measured at low frequency; their precise usage contexts (product UI vs. inline links) are partly inferred.
- Animation/transition timings (globe rotation, carousel paging) are out of scope.
- Form, input, and validation components were not present in the captured pages.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/anthropic/design-md -->
