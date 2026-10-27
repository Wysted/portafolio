# Implementation toolkit: retro Japanese-web look in Astro 5 + Tailwind v4 (static)

Note on evidence quality: the search tool returned sparse results for several niche items (Best Ten, x12y16, JF Dot licenses, modern portfolio examples). Those are listed in Gaps rather than guessed.

## 1. Japanese pixel/retro fonts: licenses, sizes, subsetting, fallbacks

### Takeaway
DotGothic16 (OFL, on Google Fonts and Fontsource) is the lowest-friction choice. Misaki and PixelMplus are authentic but need self-hosting, and their web-embedding terms must be confirmed in the original license files. Japanese fonts are large; rely on unicode-range slicing (Google/Fontsource) or subset to only the glyphs actually used.

### Cited Findings
- DotGothic16: designer Fontworks Inc.; OFL 1.1; the OFL forbids selling the font file alone and forbids reusing the original name in modified versions. One ESOUI page credits Monotype KK instead, which conflicts with Google Fonts; trust Fontworks. — [search summary incl. Google Fonts / Fontworks repo](https://fonts.google.com/specimen/DotGothic16/about); [Gigazine on Fontworks fonts on Google Fonts](https://www.gigazine.net/gsc_news/en/20210120-google-fonts-fontworks/)
- DotGothic16 covers all Adobe-Japan1-3 glyphs + GF Latin Core; based on old 16x16 gothic bitmap design; Latin, Cyrillic, Japanese. — [Figma fonts](https://www.figma.com/fonts/dotgothic16/); [fontalternatives](https://fontalternatives.com/fonts/dotgothic16/)
- google/fonts repo ships `ofl/dotgothic16/` with DotGothic16-Regular.ttf, OFL.txt, METADATA.pb (file sizes not shown). Single weight (Regular). — [google/fonts](https://github.com/google/fonts/tree/main/ofl/dotgothic16)
- Fontsource publishes ready @font-face CSS for DotGothic16 with a Japanese subset and woff2/woff, usable via npm self-hosting (`@fontsource/dotgothic16`) — [Fontsource](https://fontsource.org/fonts/dotgothic16/cdn)
- Misaki (美咲フォント, Num Kadoma): 8x8 dot bitmap, JIS levels 1 and 2; glyphs mostly fit 7x7. Variants: Gothic, Mincho, Gothic 2nd (3x7 half-width, 7x7 kana). Formats (2021-05-05 release): TrueType (outline + embedded bitmap), BDF, PNG. Site says "フリーソフトウェア". — [littlelimit.net/misaki](https://littlelimit.net/misaki.htm)
- Misaki license text per Debian copyright: unlimited permission to use, copy, distribute, with or without modification, commercially and non-commercially. — [Debian fonts-misaki copyright](https://metadata.ftp-master.debian.org/changelogs/main/f/fonts-misaki/stable_copyright)
- Do not confuse with "MISAKI" by Vultype (different, restrictive license). — [FontSpace listing / search result](https://www.fontspace.com/misaki-font-f80467)
- k8x12: separate 8x12 dot Japanese bitmap font by the same author, recommended when 8x8 is hard to read. License text not retrieved; derivative MuzaiPixel is OFL 1.1. — [littlelimit.net](https://littlelimit.net/misaki.htm); [MuzaiPixel](https://diaowinner.itch.io/muzaipixel)
- PixelMplus (itouhiro): PixelMplus10 and PixelMplus12, Regular+Bold = 4 TTF files, outline TTF that looks like bitmap, monospaced, covers JIS L1/L2 kanji + Latin-1. License = M+ FONT LICENSE (full text at misc/mplus_bitmap_fonts/LICENSE_E). Repo has 2 commits, no releases (effectively static/archival). — [itouhiro/PixelMplus](https://github.com/itouhiro/PixelMplus)
- M+ FONTS license is permissive (use/copy/distribute, modified or not, commercial or not). — [SPDX mplus](https://spdx.org/licenses/mplus)
- Mona / IPAMonaPGothic: Mona is a Shinonome-derived proportional pixel font and TTF made for 2ch AA; IPAMonaPGothic derives from IPA Font, Sazanami, Mona, M+. Distro metadata says Modified BSD + Public Domain for mona-fonts (packaging metadata, not upstream). — [Wikipedia Mona](https://en.wikipedia.org/wiki/Mona_(font)); [mona-fonts package](https://linux.yz.yamagata-u.ac.jp/pub/Linux/momonga/7/Everything/i686/os/repoview/mona-fonts.html)
- JF Dot Shinonome 12 TTF ~2 MB, 7149 glyphs (third-party host); license label on that host is vague ("public domain, GPL, OFL"). — [fontmeme JF Dot](https://fontmeme.com/jfont/jf-dot-font/)
- Google Fonts Japanese delivery: fonts are sliced via unicode-range + woff2; first 3,000 chars in 20 slices cut bytes ~80% (2018 figure, may have changed). Browser only downloads slices whose characters appear on the page. — [Google Developers Blog](https://developers.googleblog.com/en/google-fonts-launches-japanese-support/); [demo](https://scrapbox.io/uknmr/Google_Fonts%E3%81%AEunicode-range%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%82%B5%E3%83%96%E3%82%BB%E3%83%83%E3%83%88%E3%81%8C%E3%82%8F%E3%81%8B%E3%82%8A%E3%82%88%E3%81%84%E3%83%87%E3%83%A2)
- Astro Fonts API: options listed in the config reference include provider, name, cssVariable, fallbacks, optimizedFallbacks, weights, styles, subsets, formats, display, unicodeRange, stretch, featureSettings. Google provider with `subsets` example in docs. — [Astro Fonts guide](https://docs.astro.build/en/guides/fonts/); [config reference](https://docs.astro.build/en/reference/configuration-reference/#fonts)
- Stability: fonts was `experimental.fonts` in Astro 5 and moved to a top-level `fonts` key in Astro 6 (third-party write-ups only; no official changelog retrieved). Current Astro docs show top-level `fonts: [...]` with `fontProviders.google()`. — [rezhajul.io](https://www.rezhajul.io/posts/upgrading-to-astro-6-what-changed-and-why-it-matters/); [lilting.ch](https://lilting.ch/articles/astro-6-stable-release-upgrade-guide)
- Typical DotGothic16 CSS: `font-family:'DotGothic16', sans-serif` on body (Zenn example uses Google Fonts @import). — [Zenn](https://zenn.dev/kendea/articles/c24130af85d0b6)

### Inferences
- With the user on Astro 5, the stable path is either `experimental: { fonts: [...] }` (verify on 5.x docs) or Fontsource npm packages (`@fontsource/dotgothic16`, works on any version, self-hosted, subset-sliced). Fontsource is the safer pick.
- For a portfolio whose Japanese text is only a few decorative strings (headings, nav labels, kaomoji), the smallest payload is to subset DotGothic16 (or Misaki/PixelMplus TTF) with `pyftsubset --text=...` or glyphhanger to woff2 containing just those characters plus Latin; this should be a few KB versus MBs. (Tool names are from general knowledge; not verified in this session.)
- Misaki's 8px design only looks crisp at multiples of 8px (8/16/24); set `font-size` accordingly and `font-smooth`/`-webkit-font-smoothing: none` for aliasing. (General knowledge, unverified.)
- MS Pゴシック fallback stack idea: `"MS PGothic","MS PGothic","ＭＳ Ｐゴシック","IPAMonaPGothic","Osaka",sans-serif` for the authentic 2ch/early-web look on Windows, with DotGothic16 as the webfont for guaranteed pixel look.

### Gaps
- Best Ten (ベストテン) and x12y16 pixel font: no sources found for license or file size.
- k8x12 and JF Dot upstream license text not retrieved; web-embedding rights for Misaki/PixelMplus not explicitly stated in any source found (broad grants likely cover it, inference).
- Exact woff2 sizes of DotGothic16 slices and of Zen/BIZ UDGothic/M PLUS not retrieved; BIZ UDGothic and Zen license not checked.
- Exact Astro minor version where experimental.fonts appeared in 5.x not verified from official changelog.

## 2. CSS libraries / frameworks

### Takeaway
98.css, XP.css, 7.css are Western Windows skins; they read as "Win95/98 nostalgia", not Japanese early web. No PC-98-specific CSS library was found; the practical route is a custom Tailwind theme (few colors, hard borders, pixel font). 

### Cited Findings
- 98.css: MIT, ~11.6k stars, 381 forks, 292 commits, no JS, `npm install 98.css` or unpkg; repo shows no releases listed and 30 open issues / 14 PRs (maintenance appears slow; unverified). — [jdan/98.css](https://github.com/jdan/98.css)
- XP.css extends 98.css, no JS. — [botoxparty/xp.css](https://github.com/botoxparty/xp.css)
- NES.css: MIT code, CC docs; npm version 2.3.0 seen; 8-bit game look. — [licenses.dev](https://licenses.dev/npm/nes.css/2.3.0)
- Other retro kits: Retro98 (1998 template), PSone.css, BOOTSTRA.386 (DOS). — [codeburst list](https://codeburst.io/10-amazing-and-retro-css-kits-24612169f550); [Retro98](https://resources.jijweb.com/downloads/download-info/retro98-a-responsive-tribute-to-the-90s-web)
- PC-98 reference palette: hardware did 8 colors at 640x400 (digital RGB); a theme file lists 951610, 16643C, 00499A, 3B3431 as identity colors. — [RetroDECK pc98 metadata](https://repo.retrodeck.net/Xargon/RetroDECK-theme/src/branch/main/system/metadata/pc98.xml)
- Hackaday: PC-9801 display controller supported a 4096-color palette (analog models). — [Hackaday](https://hackaday.com/blog/page/1272/?tag=led)
- Characteristics of real Japanese web design: dense text, small images, ~3 columns, little whitespace, persistent early-2000s feel. — [Gwern archive](https://gwern.net/doc/www/web.archive.org/78cbc5a4405eb949d9aa81c1f1ed892131a7e9d2.html); [birchtree](https://birchtree.me/blog/why-japanese-websites-look-different-than-you-may-expect); [Hongkiat](https://www.hongkiat.com/blog/japanese-web-design/amp/)

### Inferences
- Skip libraries; define `@theme` tokens in Tailwind v4 (palette of 8 PC-98 colors, `--font-pixel`, 1px/2px solid borders, `border-style: outset/inset` for bevels). Zero extra dependency.
- 98.css could be mined for bevel borders only if wanted; otherwise it pushes a Win98 identity.
- No Tailwind plugin specific to Japanese retro found.

### Gaps
- No PC-98-specific CSS library found. Latest release dates/maintenance for 98.css, XP.css, 7.css, NES.css not confirmed (7.css search returned nothing).

## 3. Techniques and gimmicks

### Takeaway
Static-friendly gimmicks are cheap: CSS animation marquee, image-rendering pixelated, tiled backgrounds, Cloudflare-Workers hit counter image. Anything auto-moving needs pause control (WCAG 2.2.2) and prefers-reduced-motion handling.

### Cited Findings
- WCAG SC 2.2.2 (Level A): moving/blinking/scrolling content that starts automatically, lasts >5s and sits beside other content needs pause/stop/hide; auto-updating content has no 5s exception; blinking >=3 times/s also hits flashing rules; one global control is recommended. A marquee falls under it. — [W3C Understanding 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
- Moe Counter CF: MIT, Cloudflare Workers + KV, image counter `https://count.dsrkafuu.net/{id}` with params theme, render=pixelated, length, darkmode, add=0|1; public instance requires a PR to settings.json, or self-host (worker + KV + wrangler). — [dsrkafuu/moe-counter-cf](https://github.com/dsrkafuu/moe-counter-cf)
- Tally: hosted counter, no signup, KV-backed, JSON + SVG badges, total hits and uniques, self-deployable. — [tally.yuki.sh/api](https://tally.yuki.sh/api)
- DIY pattern: a Worker reading/incrementing a KV value by path, called from static page JS. — [Cloudflare Workers Rust tutorial](https://pawelurbanek.com/cloudflare-workers-rust)

### Inferences
- Fake counter (build-time number, or seeded from git commit count) costs zero runtime and no privacy issue; a real one via Moe Counter is a single `<img>` with no JS. Third-party public instances can disappear: self-host or fake.
- Marquee: CSS `@keyframes` translateX in a `@media (prefers-reduced-motion: no-preference)` block, plus `animation-play-state: paused` on hover/focus, or limit to <5s. 
- `image-rendering: pixelated` for 88x31 banners and PC-98 pixel art; tiled backgrounds via `background-repeat` with small PNG/GIF/data-URI. CRT/scanlines via `repeating-linear-gradient` overlay with `pointer-events:none` (cheap, no JS; avoid full-screen filter/blur/animated layers). (General knowledge, not verified by sources.)
- Guestbook/BBS/clap options for static site: not researched with sources; candidates by general knowledge only (GitHub Discussions via giscus, a Cloudflare Worker + KV/D1, a mailto link, Web3Forms-type form). Treat as unverified.

### Gaps
- No sourced info on guestbook/掲示板, 拍手 equivalents, cursor trails, CRT performance cost, 88x31/200x40 banner resources.
- Moe Counter free-tier limits and the Tally service's reliability/pricing not verified.

## 4. Accessibility, responsive, SEO / recruiter readability

### Takeaway
Keep semantic HTML and style it to look table-like; the main risks are motion (2.2.2), tiny aliased fonts and low contrast, and recruiter friction. A "plain mode" toggle and a normal-readable content core mitigate it.

### Cited Findings
- Real Japanese sites were mobile-aware single layouts in the 2000s (feature phones), explaining density and persistence of the look. — [Hongkiat](https://www.hongkiat.com/blog/japanese-web-design/amp/)
- Japanese web's dense three-column, text-heavy look persisted after smartphones (2022 re-test). — [Randomwire follow-up via sabrinas.space](https://scriptagc.wasmer.app/https_sabrinas_space)

### Inferences (no direct sources found; from general knowledge, flag as unverified)
- Use CSS grid on semantic elements, not `<table>` for layout; keep headings, lists, `<nav>`, `<main>`; set `lang="ja"` on Japanese spans and `lang="es"/"en"` on the rest; wrap kaomoji/ASCII art in `aria-hidden="true"` with a text alternative, or `role="img" aria-label`.
- Check contrast >= 4.5:1 for body text (WCAG AA) for pixel fonts at 16px; avoid fonts under ~12px.
- Mobile: a fluid single-column below ~640px with pixel border styling is safer than a fixed 800px page; a ガラケー-style narrow single column (240px-ish) is a natural playful mobile layout.
- Recruiter readability: keep stack (Go, FastAPI, PostgreSQL, Redis, Docker), projects, and contact in plain crawlable HTML in English/Spanish; keep Japanese decorative; offer a "plain mode" toggle (CSS class swapping tokens, small inline script with localStorage) and `prefers-reduced-motion`/`prefers-contrast` respect. Add the CV PDF link prominently.
- Astro: static output ships zero JS by default; the only JS needed is the plain-mode toggle (inline script) and optionally a counter fetch. View Transitions / islands unnecessary for this look.

### Gaps
- No sourced guidance retrieved for ASCII art screen reader behavior, recruiter studies on gimmicky portfolios, or ガラケー layout precedents.
- View Transitions and Tailwind v4 specifics not researched in this session.

## 5. Real modern examples

### Takeaway
No concrete 2022-2026 developer portfolio or Neocities example in Japanese-retro/PC-98 style could be verified.

### Cited Findings
- Background reading on the aesthetic itself: [birchtree](https://birchtree.me/blog/why-japanese-websites-look-different-than-you-may-expect), [Gwern archive](https://gwern.net/doc/www/web.archive.org/78cbc5a4405eb949d9aa81c1f1ed892131a7e9d2.html), [sabrinas.space](https://scriptagc.wasmer.app/https_sabrinas_space)
- Neocities described as spiritual successor to GeoCities, popular with hobbyist web builders. — [Bulbagarden thread](https://bulbagarden.net/threads/neocities-hobbyist-web-development-thread.309007/)

### Gaps
- Searches for example portfolios/Neocities sites returned none; another researcher (visual catalog) or a manual browse of neocities.org/browse and Japanese tags (e.g. "PC-98風 サイト", "個人サイト") is needed. Do not cite any example URLs from this file.
