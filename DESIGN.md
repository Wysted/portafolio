---
name: Vladimir Besser
colors:
  page: '#FFFFFF'
  ink: '#000000'
  menu: '#F0F0FF'
  rule: '#C0C0C0'
  border: '#808080'
  link: '#0000EE'
  link-visited: '#800080'
  link-active: '#FF0000'
  bar: '#000066'
  on-bar: '#FFFFFF'
  accent: '#FF8C00'
  on-accent: '#000000'
  box: '#FFD8A4'
  pastel-pink: '#FFCACA'
  pastel-cyan: '#BFFFFF'
  bubble: '#A0E0FF'
  pc98-bg: '#000000'
  pc98-fg: '#FFFFFF'
  pc98-cyan: '#00FFFF'
  pc98-yellow: '#FFFF00'
  pc98-green: '#00FF00'
  pc98-magenta: '#FF00FF'
  pc98-red: '#FF0000'
  pc98-blue: '#0000FF'
typography:
  body:
    fontFamily: '"MS PGothic", "ＭＳ Ｐゴシック", IPAPGothic, Osaka, sans-serif'
    fontSize: 16px
    lineHeight: '1.5'
  small:
    fontFamily: '"MS PGothic", "ＭＳ Ｐゴシック", IPAPGothic, Osaka, sans-serif'
    fontSize: 12px
    lineHeight: '1.5'
  pixel:
    fontFamily: DotGothic16
    fontSize: 16px
    lineHeight: '1.5'
  title:
    fontFamily: DotGothic16
    fontSize: 32px
    lineHeight: '1.25'
rounded:
  DEFAULT: 0px
spacing:
  page-width: 780px
  menu-width: 150px
  box-padding: 8px
  stack: 16px
---

# Vladimir Besser

Visual spec for the portfolio redesign. Every value below comes from real sites measured in
`design/moodboard/NOTES.md` (screenshots next to it). When in doubt, open the screenshots, not your
memory of "retro".

## Brand & Style

A hand-made Japanese-style personal homepage from around 2000, kept alive today like Hiroshi Abe's
homepage. Dense, text-first, no hero whitespace. The owner is a backend developer, so the register is
the austere text-site, not the pastel one. All visible text is Spanish; the Japanese influence is
purely visual.

One PC-98 (1980s NEC computer) layer on top: a single black "terminal window" on the top page. It is
the only place with pixel-art energy; the rest of the page is plain early-web HTML.

Never: rounded corners, shadows, gradients, blur, easing transitions, vaporwave neon/sunset grids,
Windows 98 grey bevels (98.css is the wrong lineage), invented or decorative-only kanji.

## Colors

- Page `#FFFFFF`, text `#000000`. Left menu column `#F0F0FF` (Abe's menu frame).
- Links keep browser defaults and stay underlined: `#0000EE`, visited `#800080`, active `#FF0000`.
- Section bars `#000066` with white text.
- One accent only: orange `#FF8C00`, always as a background with black text, never as text
  on white (contrast 2.3:1).
- Borders `#808080`, rules `#C0C0C0`.
- PC-98 window only: the 8 digital colors (`#000 #00F #F00 #F0F #0F0 #0FF #FF0 #FFF`). Text on black
  uses white, cyan or yellow.

## Typography

- Spanish body text: 16px in the MS PGothic stack (browser-default size of no-CSS sites). Visitors
  without MS PGothic/IPAPGothic fall back to their sans-serif, which is fine.
- Meta text (dates, footer, captions): 12px, same stack.
- DotGothic16 (OFL, via `@fontsource/dotgothic16`) for: site title, menu labels, section bars,
  and everything inside the PC-98 window. Never for Spanish paragraphs.
- All visible text is Spanish. No Japanese strings anywhere.
- Bold is used for emphasis; no italics (text-sites of the era had none).

## Layout & Spacing

- One centered "table" (CSS grid on semantic elements, not a real `<table>`), max 780px wide
  (measured range 720-830px), aligned center. Defined once as `--container-page: 780px` in
  `@theme` (utility `max-w-page`); the bubbles read the same variable.
- Two columns: left menu 150px (`#F0F0FF`, 1px right border `#808080`) and content.
- Boxes: `1px solid #808080`, padding 8px. Blocks separated by 16px or by an `hr` of 1px `#C0C0C0`
  at 80% width, centered.
- Below 640px: single column; the menu turns into one horizontal line of links separated by ` | `
  (Yahoo! JAPAN / waux pattern). No hamburger.

## Elevation & Depth

None. Hierarchy comes from solid color bars, 1px borders and symbol frames.

## Shapes

0px radius everywhere. Images are rectangles with an optional 1px `#808080` border.
Pixel images (badges, banners) use `image-rendering: pixelated`.

## Components

- **Site title**: `Vladimir Besser` in DotGothic16 32px, centered, with a 12px subtitle
  `Backend developer / Go · FastAPI · PostgreSQL`.
- **Welcome line**: under the title, `¡Bienvenido/a!` as a scrolling line
  (CSS marquee). The `■ Detener` button (toggles to `▶ Reanudar`, with `aria-pressed`) is hidden until the script
  runs, so no-JS visitors get no dead button. Stopping shows the full text, static (no animation,
  no offset). Static under `prefers-reduced-motion` (WCAG 2.2.2).
- **Menu**: vertical list, each item a colored `●` (cycle through the PC-98 colors except black, like
  Abe's menu) + Spanish label in DotGothic16, with `◀` on the current page:
  Inicio / Perfil / Experiencia / Proyectos / Stack / Contacto.
- **Section bar**: full-width `#000066` strip, white DotGothic16, prefixed with `■`.
  Minor headings use symbol frames instead: `◆◇◆ Proyectos ◆◇◆`.
- **PC-98 window** (top page only): black box, `3px double #FFFFFF` frame, inverted title row
  (white background, black text) reading `A:\VLADIMIR`. Inside, DotGothic16 in white/cyan/yellow:
  `A>whoami` then name and role, then a blinking block cursor (`steps()` animation, off under
  reduced motion). Decorative: `aria-hidden`, since the h1 and subtitle already say the same. No profile photo anywhere.
- **Home projects list** (`/`, right after the PC-98 window, SectionBar `Proyectos`): first 3 entries of
  `src/data/projects.ts` as a compact list: `●` bullet, bold name, description, bracket links
  (`[Sitio]` / `[GitHub]`), no badges; ends with `[Ver todos los proyectos]` -> `/projects`.
- **Experience table** (home, after Perfil, SectionBar `Experiencia`): a real `<table>` (tabular data)
  with `border-collapse`, 1px `#808080` borders and a `#000066` header row (Periodo | Empresa y cargo |
  Qué hice), most recent first, education as the last row. Below 640px the header is hidden and each
  row becomes a bordered block with stacked cells (no horizontal scroll).
- **Open Graph image**: `public/og.png` (1200x630): white page with the 1px "table" border, big PC-98
  window (`A:\VLADIMIR`, `A>whoami`, name in yellow, role in cyan/white, static cursor), navy bar with
  `portafolio.wysted.dev` and bubble rings with stack logos. `BaseLayout` emits `og:image`, `og:url`,
  `canonical` and `twitter:card=summary_large_image`; `site` is set in `astro.config.mjs`.
- **Project list (Proyectos)**: no cards. Each project is a bordered block: name as plain text, one-line
  description, stack as 88x31 badges, and links in brackets: `[GitHub] [Sitio]`.
  Unfinished things get an `En construcción` label, not a hidden state.
- **88x31 tech badges**: CSS-made, 88x31px, 1px black border, left square with the logo, right part
  with the name in DotGothic16 on a measured pastel (`#FFCACA`, `#BFFFFF`, `#FFD8A4`, `#F0F0FF`).
  The logo square is omitted when there is no logo. Saturated PC-98 colors stay only in the PC-98
  window and the menu bullets.
- **Background bubbles**: the page shell is opaque white with 1px side borders; the side gutters show
  bubbles (3px `#A0E0FF` ring, translucent white fill) carrying the stack logos or names, rising
  slowly with a small sway. Size, side position, speed and phase are random per build (no client
  JS); static under `prefers-reduced-motion`; hidden below the page width (780px), where the gutters no longer exist. Circles are the one exception to
  0px radius, as decorative background art (like the bubble tiles of the reference sites).
- **Footer** (12px, centered): `Última actualización 2026.10.27` / `En línea desde 2025.07.30` /
  `Probado en: Firefox, Chrome 1024x768` / `(C) 2026 Vladimir Besser`.
- **Contact banners**: Mail / LinkedIn / GitHub as 31px-high bordered banners on pastels
  (`pastel-pink`, `pastel-cyan`, `box`), never on saturated PC-98 colors.
- **Focus**: `:focus-visible` shows a 2px `link-active` outline with 2px offset.
- **CV**: always a plain, visible link `[CV (PDF)]` in profile and footer.

## Accessibility and content rules

- Semantic HTML: `nav`, `main`, `section`, `h1`-`h3`; the retro look is only CSS.
- Contrast 4.5:1 for all text (tokens above already pass on their intended backgrounds).
- Decorative symbols and kaomoji get `aria-hidden="true"`; the Spanish text carries the meaning.
- Zero JS by default; only the marquee stop button may need a tiny script.
