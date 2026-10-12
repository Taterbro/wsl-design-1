---
name: Waterlight Group
description: Building a Sustainable Future
colors:
  bronze: "#7e5c2e"
  bronze-hi: "#a87c40"
  bronze-lo: "#543d1e"
  verdigris: "#4e6b57"
  verdigris-2: "#35503f"
  verdigris-hi: "#7c9c82"
  stone: "#e6dcc6"
  stone-sediment: "#ded2b8"
  stone-bed: "#cdbe9f"
  stone-deep: "#b9a982"
  paper: "#f3edda"
  carve: "#2b2620"
  carve-2: "#3a342b"
  carve-soft: "#4c443a"
  night: "#1b1916"
  night-2: "#242220"
  night-3: "#302d29"
  night-ink: "#cabd9f"
typography:
  display:
    fontFamily: "Forum, Georgia, serif"
    fontSize: "clamp(2.7rem, 8.2vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Forum, Georgia, serif"
    fontSize: "clamp(1.9rem, 4.6vw, 3.2rem)"
    fontWeight: 400
    lineHeight: 1.02
  title:
    fontFamily: "Forum, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    letterSpacing: "0.16em"
rounded:
  sm: "2px"
  md: "3px"
spacing:
  gutter: "clamp(2rem, 6vw, 5.5rem)"
  section: "clamp(5rem, 12vh, 9rem)"
  rail: "1px"
components:
  plaque:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.92rem 1.5rem"
  plaque-ghost:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.carve}"
    rounded: "{rounded.sm}"
    padding: "0.92rem 1.5rem"
  badge:
    backgroundColor: "{colors.verdigris-2}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.3rem 0.6rem"
  input:
    backgroundColor: "{colors.night-2}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 0.9rem"
---

# Design System: Waterlight Group

## Overview

**Creative North Star: "The Foundation Stone"**

Waterlight Group is an institution incised into water-formed stone. The surface is a wall of travertine laid by sediment: layered stone grounds, chiselled V-cut lettering, bronze plaques pressed into the rock as the actions, and verdigris on the fittings that carry status. Nothing is painted on top of the stone; everything is cut into it and read back by a single raking light that travels across the wall as the visitor descends. Depth is letterpress, not glow.

The system is deliberately sober because its audience is sober: institutional investors, development-finance institutions and family offices performing a first-contact read. Trust is earned by restraint and by honesty — every figure that is not yet verified appears as an empty cartouche or a marked placeholder, never as an invented number. Density is paced like a quarry face: a monumental opening, then a dense sector relief, then a shadowed band that dramatises the process, then a calm close.

**Key Characteristics:**

- Stone grounds (warm travertine) with two metal voices: bronze for actions, verdigris for status and focus.
- Full-bleed dark bands (night quarry) as regions, never as accents.
- Incised type: emphasis through carve, light and scale — never gradient fill.
- Squared, chiselled geometry: 1px hairlines, incised seams, 2–3px radii only.
- One authored motion system: a raking light, plus a paced reveal; no scattered effects.

## Colors

A limestone palette: warm neutral stone carries the whole page; bronze and verdigris do every functional job; near-black night bands give the process and the closing CTA their stage.

### Primary

- **Carved Bronze** (#7e5c2e): every primary action. Plaques are pressed bronze; hover brightens the metal and lifts it one pixel. The light stop (#a87c40) highlights the bevel; the dark stop (#543d1e) is the recessed edge and small-label ink.

### Secondary

- **Verdigris Fitting** (#4e6b57): status and interaction. Stage badges, the active lifecycle node, the home-market marker on the map, selection and focus rings. The dark (#35503f) seats it; the light (#7c9c82) is the live highlight.

### Neutral

- **Travertine Stone** (#e6dcc6): the page ground. Sediment (#ded2b8) and bed (#cdbe9f) layer cards, rails and panels; the deep tone (#b9a982) is the recess shadow and scrollbar thumb.
- **Limewash Paper** (#f3edda): the lightest lift — card and panel highlights, text on dark metal.
- **Carved Ink** (#2b2620 / #3a342b / #4c443a): lettering in three weights of depth. Ink is for primary type, Ink-2 for body, Ink-soft for secondary text and captions.
- **Night Quarry** (#1b1916 / #242220 / #302d29): the dark bands. Night Ink (#cabd9f) is the *only* text colour on them — a value pulled from the warm stone, never a desaturated gray.

### Named Rules

**The Tinted-From-The-Stone Rule.** Secondary text on a dark or metal surface is tinted from that surface's own hue (Night Ink on night bands, bronze on metal) — never a neutral gray. Gray is the tell of an assembled page.

**The Verified Rule.** Color never signals a fact that is not yet verified. No green "operating presence" is shown for a market without approved activity.

## Typography

**Display Font:** Forum (with Georgia, serif)
**Body Font:** Archivo (with system-ui, sans-serif)
**Label Font:** Archivo (uppercase, tracked)

**Character:** Forum is an epigraphic Roman — thin, carved, ceremonial — and carries every heading and large statement as if cut by chisel. Archivo is the workhorse: neutral, confident, and set in tracked uppercase for the many small institutional labels. The pairing reads as public monument plus ledger.

### Hierarchy

- **Display** (400, `clamp(2.7rem, 8.2vw, 6rem)`, 0.98): the hero thesis and the largest section statements. Uppercase, near-neutral tracking.
- **Headline** (400, `clamp(1.9rem, 4.6vw, 3.2rem)`, 1.02): section titles.
- **Title** (400, 1.35–1.5rem): card, tablet and entry titles; a Forum voice inside the stone.
- **Body** (400, 1rem–1.2rem, 1.65): running copy, max width 60–62ch; secondary body never below 0.8rem (12.8px).
- **Label** (600–700, 0.7–0.78rem, tracking 0.14–0.24em, uppercase): kicker-free institutional labels — sector names, status, table heads, nav.

### Named Rules

**The Incised Rule.** Emphasis comes from carve and light, not fill. Large headings use the `.carve-deep` treatment (a light top edge and a dark under-shadow). Gradient text is never used.

**The Label Floor.** No uppercase label drops below 0.7rem and no body copy below 0.8rem.

## Layout

A 1280px shell, centred, with a generous fluid gutter (`clamp(2rem, 6vw, 5.5rem)`) that also sets the left edge of the fixed vertical **datum** line. Sections are separated by incised hairline seams that span the text column — never full-bleed borders — so the wall reads as joined stone blocks. Vertical rhythm is one system: `clamp(5rem, 12vh, 9rem)` above and below a section, with more space above a heading than below it. The sector frieze uses an eight-column relief rail with an intentional stepped base (each stone slightly taller than the last). Responsive: nav collapses to a full-screen drawer at 1080px; the frieze folds to two columns at 1000px; editorial and multi-column grids collapse to single columns between 800–900px.

## Elevation & Depth

Hybrid, and quiet: the world is surfaces that are *flat at rest* and gain depth only from a single directional light. Depth is expressed as letterpress — an inset top highlight (`rgba(255,252,240,·)`) over an inset bottom shadow (`rgba(43,38,32,·)`), so elements read as pressed into or raised out of the stone. Shadows always carry an offset and a soft blur; a zero-offset coloured halo is refused as decoration.

### Shadow Vocabulary

- **Pressed plaque** (`inset 0 1px 0 rgba(255,236,200,.35), inset 0 -2px 4px rgba(20,12,4,.5), 0 2px 5px rgba(43,38,32,.3)`): bronze actions.
- **Recessed panel** (`inset 0 2px 6px rgba(43,38,32,.14), inset 0 1px 0 rgba(255,252,240,.6)`): cartouches and stone panels.
- **Floating slab** (`inset 0 1px 0 rgba(255,252,240,.7), 0 22px 40px -24px rgba(43,38,32,.75), 0 2px 0 rgba(43,38,32,.12)`): the mega-menu panel.

### Named Rules

**The Raking Light Rule.** There is one light source, and it moves across the wall once as the page is read (the `.rake` overlay follows scroll and pointer). Depth, hover lift and the reveal all answer to it. No element introduces its own independent glow.

## Shapes

Squared and chiselled. Radii are 2px (actions, tags, inputs) and 3px (panels, cards, mega-menu) — enough to soften a cut edge, never enough to read as a rounded UI. Structure is carried by 1px hairlines, 3px base edges on relief stones, and incised seam gradients at section joints. Iconography is authored line SVG (sector reliefs, the WSWIS flow, the map): one consistent thin stroke, no glyph characters and no icon fonts.

## Components

### Buttons

- **Shape:** squared (2px radius).
- **Primary — Plaque:** pressed bronze (`linear-gradient(180deg,#7a5828,#5c4220 52%,#432f18)`) with limewash text, uppercase 0.72rem label at 0.16em tracking, padding `0.92rem 1.5rem`. Hover brightens the metal (`filter: brightness(1.09)`) and lifts 1px.
- **Ghost:** limewash-tinted stone ground with a 1px ink border; same geometry, used for the secondary path.
- **Small:** `0.62rem 1rem` padding, `0.72rem` label.

### Chips (status badges)

- **Style:** solid verdigris (#35503f) seat with limewash uppercase label (0.7rem, 0.14em), 2px radius, `0.3rem 0.6rem`.
- **State:** carries development stage only (Concept / Development / Investment Ready / Financing).

### Cards / Containers

- **Corner Style:** 3px.
- **Background:** stone gradient from limewash-lifted top to sediment bed.
- **Shadow Strategy:** recessed panel (see Elevation).
- **Border:** 1px ink hairline at ~0.16–0.3 alpha; relief stones add a 3px stone-deep base edge.
- **Internal Padding:** 1.5–1.8rem.

### Inputs / Fields

- **Style:** night ground (#211e1a) with limewash text, 1px light hairline, 2px radius.
- **Focus:** verdigris ring, 2px offset.
- **Error:** native validity reporting on focus; the newsletter swaps to a confirmation state on submit.

### Navigation

- **Style:** sticky chiselled lintel in translucent stone with a blurred backdrop and a hairline base. Primary links are Archivo uppercase 0.74rem at 0.07em, with a bronze underline that scales from the left on hover/focus. Sub-pages open in a floating stone **slab** (mega-menu) grouped in labelled columns. Below 1080px the nav collapses to a burger and a full-screen drawer.

### Signature Component — the Stelae Relief

The sector frieze is eight carved stones on a rail. Each opens with an authored 42px line-relief, then the sector name, then a one-line definition, then a Roman-numeral index; stones step in height and lift on hover. It is the page's clearest statement of the world and must stay a physical relief, never become eight identical floating cards.

## Do's and Don'ts

### Do:

- **Do** use a bronze **plaque** for every primary action, uppercase, 0.16em tracking, 2px radius.
- **Do** keep all grounds within the travertine stone family; reserve full-bleed night bands for the process section and the closing gateway.
- **Do** tint secondary text from its surface (Night Ink on night, bronze on metal) — never gray.
- **Do** express depth as letterpress: inset highlight over inset shadow, offset + soft blur.
- **Do** show every unverified figure as an empty cartouche or a marked placeholder.
- **Do** draw icons as authored line SVG in one consistent thin stroke.
- **Do** theme browser surfaces from the palette: focus ring and selection in verdigris, scrollbar thumb in stone-deep, caret in verdigris.

### Don't:

- **Don't** add a kicker or eyebrow above a heading; the heading carries its own weight.
- **Don't** use gradient text — emphasis is carve, weight or scale.
- **Don't** use hard offset block shadows or zero-offset coloured halos.
- **Don't** use Unicode glyphs or emoji as icons; draw the mark as SVG.
- **Don't** exceed a 3px radius, and don't introduce rounded-UI geometry.
- **Don't** claim presence, partnerships or outcomes before they are verified; leave the placeholder.
- **Don't** scatter hover effects; motion belongs to the one raking light and the paced reveal.
