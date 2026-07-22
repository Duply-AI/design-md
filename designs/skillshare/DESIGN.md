---
version: alpha
name: Skillshare-design-analysis
description: A bold, creative-education marketing interface built on a white canvas with near-black GT Walsheim display headlines, full-bleed photographic category tiles, and high-contrast black sections that anchor the long-scroll landing page. Brand voltage comes from a mint-green sign-up pill, a multi-accent palette (purple, cyan, green) drawn from the product's creative-class imagery, and chunky 700-weight geometric type. The system reads as friendly, energetic, and image-forward rather than minimal-corporate.

colors:
  canvas: "#ffffff"
  black: "#000000"
  ink: "#0b1215"
  body: "#394649"
  muted: "#767676"
  muted-soft: "#8e9699"
  muted-cool: "#9ca3af"
  neutral-dark: "#232424"
  slate: "#374151"
  slate-deep: "#4b5563"
  link: "#0000ee"
  accent-purple: "#5620c1"
  accent-purple-bright: "#6927ef"
  accent-cyan: "#24c2f2"
  accent-green: "#55da9b"
  surface-dark: "#0b1215"
  surface-dark-alt: "#002333"
  surface-soft: "#f4f4f4"
  border: "#d1d5db"
  hairline: "#e5e7eb"
  navy: "#111827"
  on-dark: "#ffffff"
  on-primary: "#ffffff"

typography:
  h1:
    fontFamily: "GT Walsheim Pro, Hanken Grotesk, sans-serif"
    fontSize: 46px
    fontWeight: 700
    lineHeight: 1.26
    letterSpacing: normal
  h2:
    fontFamily: "GT Walsheim Pro, Hanken Grotesk, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: normal
  h3:
    fontFamily: "GT Walsheim Pro, Hanken Grotesk, sans-serif"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: normal
  h4:
    fontFamily: "GT Walsheim Pro, Hanken Grotesk, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.55
    letterSpacing: normal
  body:
    fontFamily: "GT Walsheim Pro, Hanken Grotesk, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: normal
  button:
    fontFamily: "GT Walsheim Pro, Hanken Grotesk, sans-serif"
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: normal

rounded:
  xs: 4px
  md: 8px
  pill: 100px

spacing:
  xxs: 4px
  xs: 8px
  sm: 16px
  md: 20px
  lg: 24px
  xl: 32px
  xxl: 40px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  button-signup:
    backgroundColor: "{colors.accent-green}"
    textColor: "{colors.black}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 6px 24px
  button-text:
    backgroundColor: transparent
    textColor: "{colors.black}"
    typography: "{typography.button}"
    rounded: "0px"
    padding: 6px 0px 0px
  social-auth-button:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.xs}"
    padding: 16px 24px
  text-link-email:
    backgroundColor: transparent
    textColor: "{colors.accent-purple}"
    typography: "{typography.button}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.link}"
    typography: "{typography.body}"
  search-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 8px 16px
  category-tile:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.h3}"
    rounded: "0px"
  course-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    shadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px"
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "0px"
    shadow: none
  stat-block:
    backgroundColor: "{colors.surface-dark-alt}"
    textColor: "{colors.on-dark}"
    typography: "{typography.h3}"
    rounded: "{rounded.md}"
    padding: 24px
  section-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.h2}"
    padding: 40px
  category-filter-pill:
    backgroundColor: "{colors.link}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 20px
  category-filter-pill-inactive:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 20px
  expert-card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.h4}"
    rounded: "{rounded.md}"
  expert-card-purple:
    backgroundColor: "{colors.accent-purple}"
    textColor: "{colors.on-dark}"
    typography: "{typography.h4}"
    rounded: "{rounded.md}"
  testimonial-avatar:
    backgroundColor: "{colors.accent-cyan}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.pill}"
    size: 40px
  faq-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.h4}"
    padding: 20px 0px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    padding: 40px
---

## Overview

Skillshare's landing page is a bold, image-forward creative-education marketing surface. The page floor is white (`{colors.canvas}` — #ffffff), but the page is paced by full-width near-black bands (`{colors.surface-dark}` — #0b1215) that hold stats, feature lists, and expert grids. The visual energy comes from full-bleed photographic category tiles, a mint-green sign-up pill (`{colors.accent-green}` — #55da9b), and chunky 700-weight **GT Walsheim Pro** headlines.

Type is single-family: GT Walsheim Pro carries everything — display headlines at 700 weight (h1 at 46px down to h4 at 18px) and the running text. The headlines are confident and geometric; there is no secondary serif or mono voice in the measured set.

Color voltage is multi-accent and pulled straight from the product's creative subject matter: blue links (`{colors.link}` — #0000ee), a violet "Continue with email" link and expert-card panels (`{colors.accent-purple}` — #5620c1), cyan avatar fills (`{colors.accent-cyan}` — #24c2f2), and green sign-up moments (`{colors.accent-green}`). Unlike a monochrome-SaaS brand, Skillshare leans into a saturated, creative palette.

The structural rhythm alternates white editorial bands against full-bleed black sections — the hero stays white, the photographic category strip is dark, the "Creative Learning Made Easy" stats band is black, the course-card grid returns to white, and the footer closes on black again.

**Key Characteristics:**
- White canvas with full-width near-black bands (`{colors.surface-dark}` — #0b1215) for stats, feature lists, and expert grids.
- Single display family — GT Walsheim Pro at weight 700 for all headlines; substituted with Hanken Grotesk here (GT Walsheim is a commercial license).
- Mint-green pill sign-up CTA (`{colors.accent-green}`) — the one consistently colored primary action, rendered with `{rounded.pill}` (100px) radius.
- Multi-accent creative palette: blue (`{colors.link}`), violet (`{colors.accent-purple}`), cyan (`{colors.accent-cyan}`), green (`{colors.accent-green}`).
- Full-bleed photographic category tiles ("Graphic Design", "Illustration", "Animation", "Film & Video", "Freelance") with white overlay labels and zero radius.
- Soft drop shadows on elevated course cards — `rgba(0,0,0,0.1) 0px 2px 4px` and `rgba(180,184,184,0.5) 0px 2px 4px`.
- Pill-shaped category filter chips (`{rounded.pill}`) above the course grid.
- Radius is restrained: `{rounded.xs}` (4px) for inputs, `{rounded.md}` (8px) for cards, `{rounded.pill}` (100px) for buttons and chips. Many cards and tiles use 0px (sharp corners).

## Colors

### Brand & Accent
- **Accent Green** (`{colors.accent-green}` — #55da9b): The mint sign-up pill and the green underline on "7 free days". The signature brand-action color.
- **Link Blue** (`{colors.link}` — #0000ee): Inline links and the active category filter pill.
- **Accent Purple** (`{colors.accent-purple}` — #5620c1): The "Continue with email" text link and the violet expert-card panels.
- **Accent Purple Bright** (`{colors.accent-purple-bright}` — #6927ef): A brighter violet used in gradient/illustration accents.
- **Accent Cyan** (`{colors.accent-cyan}` — #24c2f2): Avatar fills in the testimonial section and small icon accents.

### Surface
- **Canvas** (`{colors.canvas}` — #ffffff): The default page floor and card background.
- **Surface Soft** (`{colors.surface-soft}` — #f4f4f4): Faint section dividers and very-soft fills.
- **Surface Dark** (`{colors.surface-dark}` — #0b1215): The full-width near-black bands — stats, feature list, expert grid, footer.
- **Surface Dark Alt** (`{colors.surface-dark-alt}` — #002333): A dark-teal variant used for the inset stat blocks within the dark band.

### Text
- **Ink** (`{colors.ink}` — #0b1215): Headlines and primary near-black text.
- **Black** (`{colors.black}` — #000000): Button label color (measured on the primary button element).
- **Body** (`{colors.body}` — #394649): Default running-text color.
- **Muted** (`{colors.muted}` — #767676): Secondary text — captions, sub-labels.
- **Muted Soft** (`{colors.muted-soft}` — #8e9699): Tertiary text.
- **Muted Cool** (`{colors.muted-cool}` — #9ca3af): Fine-print and faint metadata.
- **Slate** (`{colors.slate}` — #374151) / **Slate Deep** (`{colors.slate-deep}` — #4b5563): Cool-gray secondary text tones.
- **Neutral Dark** (`{colors.neutral-dark}` — #232424): A warm near-black used on small UI text.
- **On Dark** (`{colors.on-dark}` — #ffffff): Text on the black bands and footer.

### Lines & Hairlines
- **Border** (`{colors.border}` — #d1d5db): Visible 1px borders on social-auth buttons and inputs.
- **Hairline** (`{colors.hairline}` — #e5e7eb): Faint dividers (e.g., FAQ row separators).

### Note
No dedicated semantic success/warning/error tokens were measured on the landing page. Document any future status colors in Known Gaps until extracted from a flow.

## Typography

### Font Family
The system runs **GT Walsheim Pro** — a geometric grotesque commercial typeface — across all measured roles, headlines and body alike. Display headlines use weight 700; running body uses weight 400; buttons use weight 700. There is no secondary serif or monospace family in the measured set.

GT Walsheim Pro is a licensed commercial font and is **not shippable as a public web font**. The recommended open-source substitute is **Hanken Grotesk** (weight 700 for display, 400 for body), which preserves the geometric, slightly rounded grotesque character. **Inter** or **Manrope** are acceptable fallbacks if Hanken Grotesk is unavailable. The fallback stack here is `GT Walsheim Pro, Hanken Grotesk, sans-serif`.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.h1}` | 46px | 700 | 1.26 | normal | Hero headline ("Creative Classes Taught by the Best Creative Pros") |
| `{typography.h2}` | 28px | 700 | 1.43 | normal | Section heads ("Why Students Love Skillshare", "Explore Inspiring Online Courses") |
| `{typography.h3}` | 22px | 700 | 1.45 | normal | Sub-section heads, category-tile labels, stat figures |
| `{typography.h4}` | 18px | 700 | 1.55 | normal | Card titles, FAQ row labels, feed step headers |
| `{typography.body}` | 11px | 400 | 1.4 | normal | Running text, captions, course-card metadata, fine print |
| `{typography.button}` | 15px | 700 | 1.0 | normal | Button labels, nav items, filter pills |

### Principles
Headlines stay heavy — weight 700 across every display size. The geometric grotesque does the work; the brand never lightens display type below 700. Letter-spacing stays `normal` everywhere measured — Skillshare does not use negative tracking on its display sizes. Buttons and nav items also run at weight 700 (15px), giving the chrome a chunky, confident feel that matches the headlines.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 16px · `{spacing.md}` 20px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 40px.
- **Most frequent steps:** 8px (43×), 24px (41×), 16px (37×) dominate — the system's working rhythm is 8 / 16 / 24.
- **Card & section padding:** `{spacing.lg}` (24px) for card interiors; `{spacing.xxl}` (40px) for major dark-band vertical padding.

### Grid & Container
- **Hero band:** Two-column split — h1 + supporting copy on the left, the sign-up auth stack on the right.
- **Category strip:** A horizontally-scrolling row of equal-width full-bleed photographic tiles.
- **Course-card grid:** 4-up at desktop, reducing on narrower viewports.
- **Expert grid:** 4-up of photo cards over a second 4-up row of violet panels.
- **Footer:** Multi-column link list on the dark band.

### Whitespace Philosophy
Skillshare alternates dense, photographic, full-bleed bands with breathing white editorial bands. The pacing is deliberate: white hero → dark photographic strip → black stats band → white course grid → white feed → white expert grid → black team band → white FAQ → black footer. The contrast between white and black bands carries the page rhythm more than whitespace alone.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | White editorial bands, full-bleed category tiles, dark sections |
| Hairline border | 1px `{colors.border}` | Social-auth buttons, search input |
| Soft drop shadow (neutral) | `rgba(0, 0, 0, 0.1) 0px 2px 4px 0px` | Elevated course cards |
| Soft drop shadow (cool) | `rgba(180, 184, 184, 0.5) 0px 2px 4px 0px` | Cool-toned card elevation variant |

The elevation philosophy is **soft and shallow** — only a 2px-offset, 4px-blur shadow appears in the measured set. There is no heavy elevation, no neumorphism, no glassmorphism. Most depth comes from color-block contrast (white vs. near-black bands) rather than shadow.

### Decorative Depth
- Full-bleed photographic category tiles carry their own imagery and white overlay labels — they create depth through photography, not shadow.
- The hero's swirling green/cyan/magenta gradient ribbon (visible at left) is a decorative brand graphic, not a tokenized surface.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Search input, social-auth buttons |
| `{rounded.md}` | 8px | Course cards, stat blocks, expert cards |
| `{rounded.pill}` | 100px | Sign-up button, category filter pills, avatars |

Note: many surfaces (full-bleed category tiles, the measured `card` and `button-primary` elements) use **0px** — sharp corners. The system mixes sharp-cornered full-bleed imagery with rounded interactive controls.

### Photography Geometry
Category tiles are sharp-cornered full-bleed rectangles with white overlay labels. Expert photo cards use `{rounded.md}` (8px). Testimonial avatars are perfect circles via `{rounded.pill}` (~40px). The course-card thumbnails sit inside `{rounded.md}` card frames.

## Components

### Top Navigation

**`top-nav`** — White nav bar across the top. Carries the "SKILL SHARE." stacked wordmark at left (with the green period dot), a "Browse" dropdown, a wide `{component.search-input}`, and a right cluster with "Sign In" text and the `{component.button-signup}` pill. Items render in `{typography.button}` (GT Walsheim 15px / 700).

### Buttons & Links

**`button-signup`** — The signature mint-green pill CTA. Background `{colors.accent-green}` (#55da9b), label `{colors.black}`, type `{typography.button}`, rounded `{rounded.pill}` (100px). The one consistently colored primary action on the page.

**`button-text`** — The measured primary button element: transparent background, `{colors.black}` label, 0px radius, top-padded (`6px 0px 0px`). Used for inline text-style actions and nav links.

**`social-auth-button`** — White button with a 1px `{colors.border}` outline used in the hero auth stack ("Continue with Google / Facebook / Apple"). Background `{colors.canvas}`, label `{colors.ink}`, rounded `{rounded.xs}` (4px), with the provider glyph at left.

**`text-link-email`** — The "Continue with email" link in `{colors.accent-purple}` (#5620c1), type `{typography.button}`. The violet is reserved for this secondary auth path.

**`text-link`** — Inline body links in `{colors.link}` (#0000ee), type `{typography.body}`.

### Inputs

**`search-input`** — The wide nav search field. Background `{colors.canvas}`, placeholder/text in `{colors.ink}`, rounded `{rounded.xs}` (4px), padding 8px × 16px, with a leading magnifier glyph. Placeholder: "Search classes, digital products, teachers, and more".

### Cards & Tiles

**`category-tile`** — Full-bleed photographic tiles in the category strip. Sharp corners (0px radius), full-cover photography, white overlay label in `{typography.h3}` ("Graphic Design", "Illustration", "Animation", "Film & Video", "Freelance"). The dark backstop is `{colors.surface-dark}`.

**`course-card`** — Used in the "Explore Inspiring Online Courses" grid. Background `{colors.canvas}`, rounded `{rounded.md}` (8px), with the soft drop shadow `rgba(0, 0, 0, 0.1) 0px 2px 4px 0px`. Carries a thumbnail with a "Staff Pick." flag, student count, duration, course title in `{typography.h4}`, and an instructor name in `{typography.body}`.

**`card`** — The generic measured card: white background, 0px radius, no shadow. Used for flat content containers where no elevation is needed.

**`stat-block`** — Inset blocks inside the black "Creative Learning Made Easy" band. Background `{colors.surface-dark-alt}` (#002333), text `{colors.on-dark}`, rounded `{rounded.md}`, padding `{spacing.lg}` (24px). Holds a large figure in `{typography.h3}` (425k+, 30k+, 9k+, 4.8★) over a small caption.

**`section-dark`** — Full-width near-black bands. Background `{colors.surface-dark}` (#0b1215), text `{colors.on-dark}`, headings in `{typography.h2}`, vertical padding `{spacing.xxl}` (40px). Used for stats, "Learn from Creative Experts", "Skillshare for Teams", and the footer region.

### Expert Grid

**`expert-card`** — Photo cards in the "Learn from Creative Experts" row. Background `{colors.surface-dark}`, text `{colors.on-dark}`, rounded `{rounded.md}`, with a name + role overlay in `{typography.h4}`.

**`expert-card-purple`** — The second row's violet panels. Background `{colors.accent-purple}` (#5620c1), text `{colors.on-dark}`, rounded `{rounded.md}`. Carries "MEET {name}" + discipline label. The violet panels are a deliberate chromatic counterpoint to the photographic cards above.

### Filters & Pills

**`category-filter-pill`** — Active filter chip above the course grid. Background `{colors.link}` (#0000ee), text `{colors.on-dark}`, rounded `{rounded.pill}`, padding 8px × 20px. Labels: "Featured", "Music", "Marketing", etc.

**`category-filter-pill-inactive`** — Inactive chip: white background, `{colors.ink}` text, same pill radius and padding.

### Testimonials

**`testimonial-avatar`** — Circular avatar in the "Why Students Love Skillshare" grid. `{rounded.pill}`, ~40px diameter, cyan fill (`{colors.accent-cyan}`). Sits beside a reviewer name in `{typography.h4}` over a quote in `{typography.body}`.

### FAQ & Footer

**`faq-row`** — Accordion rows in "Frequently Asked Questions". White background, label in `{typography.h4}`, a trailing "+" affordance, separated by `{colors.hairline}` dividers, padding 20px vertical.

**`footer`** — The closing dark band. Background `{colors.surface-dark}` (#0b1215), text `{colors.on-dark}`, body type `{typography.body}`, padding `{spacing.xxl}` (40px). Multi-column link list (Art and Illustration / Graphic Design / Creative Career) over a "Featured In:" and "Follow us on:" row and the © Skillshare line.

## Do's and Don'ts

### Do
- Reserve `{colors.accent-green}` (#55da9b) for the sign-up pill and the "free days" highlight — it's the brand's primary-action signal.
- Keep all display headlines in GT Walsheim Pro (Hanken Grotesk substitute) at weight 700. The chunky geometric weight is the type voice.
- Alternate white editorial bands with full-width `{component.section-dark}` bands. The white/black pacing carries the page.
- Use full-bleed photographic `{component.category-tile}` with white overlay labels and sharp (0px) corners.
- Apply soft 2px/4px drop shadows only on elevated `{component.course-card}` — keep everything else flat.
- Let the violet `{component.expert-card-purple}` panels counterpoint the photographic expert cards. The two-row treatment is signature.
- Keep pill radius (`{rounded.pill}`) for buttons, filter chips, and avatars; keep 4px/8px radius for inputs and content cards.

### Don't
- Don't lighten display headlines below weight 700 — GT Walsheim at 400 reads as off-brand for headings.
- Don't add negative letter-spacing to display type. Measured tracking is `normal` everywhere.
- Don't recolor the sign-up CTA — green is the one consistent action color; blue/violet/cyan are accents, not CTA fills.
- Don't put drop shadows on category tiles or dark-band content; depth there comes from photography and color contrast.
- Don't round the full-bleed category tiles — they stay sharp-cornered (0px).
- Don't document hover states — only default and active/pressed (e.g., active vs. inactive filter pill) are in scope.

## Responsive Behavior

The analysis captured a single desktop landing page; the screenshots show one desktop composition plus a full-length scroll. Breakpoint behavior below is inferred from layout structure and marked accordingly.

### Breakpoints (inferred — derived)

| Name | Width | Key Changes (derived) |
|---|---|---|
| Mobile | < 768px | Nav collapses; hero two-column stacks to single column; course grid 4-up → 1-up; category strip remains horizontal-scroll |
| Tablet | 768–1024px | Course grid 4-up → 2-up; expert grid 4-up → 2-up; footer columns wrap |
| Desktop | > 1024px | Full top-nav with wide search; 4-up course grid; 4-up expert rows |

### Touch Targets
- `{component.button-signup}` and `{component.social-auth-button}` read as comfortably tappable (button type at 15px / 700 with generous pill/padded geometry).
- `{component.category-filter-pill}` chips use 8px × 20px padding; effective tap area is the full pill.
- Exact mobile target sizes were not measured — see Known Gaps.

### Image Behavior
- Category tiles are full-bleed and scale to fill their column; labels overlay in white.
- Course thumbnails and expert photos retain aspect ratios inside their card frames.
- Testimonial avatars crop to circles at every breakpoint.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key directly (`{component.course-card}`, `{component.expert-card-purple}`).
2. Variants of an existing component (active / inactive filter pill) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere — never inline a hex in a component.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay GT Walsheim 700 (Hanken Grotesk substitute) with `normal` tracking. Body stays 400.
6. Green is the action color; blue/violet/cyan are accents. Don't let an accent take over the sign-up CTA.
7. When adding a new band, decide white vs. `{colors.surface-dark}` first — the alternation is the page's rhythm.

## Known Gaps

- **GT Walsheim Pro is a licensed commercial typeface** (not flagged in `fonts_licensed`, but commercial nonetheless) and cannot ship as a public web font. Hanken Grotesk is documented as the open-source substitute; final rendering will differ slightly in letterform.
- The measured **body size is 11px**, which likely reflects fine-print / metadata sampling rather than the primary running-paragraph size. The true marketing body size (visually ~16px in screenshots) was not isolated by the analyzer — treat 11px as the measured value and validate the running-text size before production.
- The measured **`button-primary` has 0px radius and transparent-style padding** (`6px 0px 0px`) — this captured a text-style link element, not the green pill. The green `{component.button-signup}` pill geometry (radius, padding) is read from screenshot ground-truth and marked derived.
- **No semantic status colors** (success / warning / error) were measured. They would require a sign-up or checkout flow to extract.
- **Breakpoint and touch-target specifics are inferred** from layout structure; only a desktop landing page was captured.
- The hero's **green/cyan/magenta gradient ribbon** and the multi-color photographic backdrops are brand graphics, not tokenized surfaces — their exact gradient stops are out of scope.
- **Animation and transition timings** (category-strip auto-scroll, FAQ accordion expand, video play controls) were not captured.
- The exact **accent assignment of cyan vs. purple vs. green inside small product UI fragments** may shift; values are documented from the single captured landing page.

<!-- Documented by Duply · real-world design systems as ready-to-use DESIGN.md for AI coding agents · https://duply.ai/skillshare/design-md -->
