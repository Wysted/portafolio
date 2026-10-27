# Japanese 1980s computing aesthetics as a design source for a modern web portfolio

Research scope note: ~20 search/fetch calls were made. Several sources were blocked (403) or lacked numeric data. Where a number could not be verified it is in Gaps, or labeled "unverified / from background knowledge" inside Inferences. Nothing below the "Cited Findings" headings is unsourced unless it says so.

## 1. PC-98 (NEC PC-9800): resolutions, palettes, text mode, kanji fonts, software UI, game art

### Takeaway
The PC-98 look is 640x400 with either a fixed 8-color digital palette (1982) or 16 simultaneous colors chosen from 4096 (from 1985), dense JIS kanji text over graphics, and dithered anime-style art. Exact hex values for the PC-98 palette were NOT found in any verifiable source; only the structure (1-bit RGB digital; 12-bit analog) is confirmed.

### Cited Findings
- Original PC-9801 (Oct 1982): max 640x400, 8 colors. PC-9801VF/VM (1985): 640x400, 8 colors (16 optional) from 4096. PC-9801VX (1986): 16 from 4096 with 256 KB planar VRAM. PC-9821 (1992): 640x480, 256 colors. High-res models (PC-98XA/XL/H98): 1120x750 for CAD/word processing — [Wikipedia EN, PC-9800 series](https://en.wikipedia.org/wiki/PC-9800_series)
- Japanese Wikipedia confirms: PC-9801 "640ドット×400ドット8色", a fixed palette of 1-bit R, G, B ("digital RGB"); from PC-9801VM, analog RGB output with "4096色中16色同時発色"; PC-98XA 1120x750, 16 colors, 24-dot font; PC-9821 640x480 256 colors. Hardware scrolling 1 line vertical / 16 dots horizontal — [Wikipedia JA, PC-9800シリーズ](https://ja.wikipedia.org/wiki/PC-9800シリーズ)
- Graphics: two μPD7220 GDCs (master = text, slave = graphics); text VRAM is separate from graphics VRAM and text can overlay graphics. Each text cell = 2 bytes code + 1 byte attribute; attributes: secret, blink, reverse, underline, 3 intensity bits (colour) — [Wikipedia EN, PC-9800 series](https://en.wikipedia.org/wiki/PC-9800_series)
- Font ROM holds 7,000+ glyphs including JIS X 0201 and JIS X 0208. Base system showed only JIS X 0201 (alphanumerics + half-width kana); an optional kanji ROM board was typical. PC-9801F2 had JIS level 1 (2,965 kanji); PC-9801U had levels 1 and 2 — [Wikipedia EN, PC-9800 series](https://en.wikipedia.org/wiki/PC-9800_series)
- Hardware accelerators: GRCG (1985), EGC blitter (1986) — [Wikipedia EN](https://en.wikipedia.org/wiki/PC-9800_series)
- Ichitaro (一太郎) word processor used the text screen for input and the graphics screen for print-preview layout — [Wikipedia JA](https://ja.wikipedia.org/wiki/PC-9800シリーズ)
- Pixel-art tools of the era on PC-98: Z's STAFF, FUNNY, CANDY2, Pluskit; artist Kenichi Shinohara drew pixel ukiyo-e in 1987 (LOGiN magazine) traced from pasted print copies on the monitor — [Gingerbeardman blog](https://blog.gingerbeardman.com/2023/10/13/kenichi-shinohara-pixel-art-ukiyo-e)
- PC-98 and FM Towns used a true 640x400 mode (not pixel-doubled), per a forum claim — [VOGONS](https://www.vogons.org/viewtopic.php?p=1234288) (forum, weak source)
- A Lospec palette exists following PC-98 specs: 16 colors at 12-bit RGB color depth (i.e. 4 bits/channel) — [Lospec dithering palettes](https://lospec.com/palette-list/tag/dithering)
- The PC-98 art style was sometimes cute, sometimes extremely detailed with a very limited palette; community describes it as an "eerie palette of 4096 colours" — [PC Gamer](https://www.pcgamer.com/games/adventure/steam-is-about-to-start-getting-some-of-the-best-japanese-pixel-art-in-gaming-history/), [MetaFilter via search summary](https://Metafilter.com/203718/The-weird-and-wonderful-world-of-the-PC-98)
- Artists of the era had to reuse shades and dither because games were restricted to 16-256 colors — [itch.io post](https://itch.io/post/7395153)

### Inferences
- The 8-color digital palette therefore = every combination of R/G/B at 0 or full: black, blue, red, magenta, green, cyan, yellow, white. Usable CSS equivalents: `#000000 #0000ff #ff0000 #ff00ff #00ff00 #00ffff #ffff00 #ffffff`. (Derived from "1-bit per channel"; actual CRT luminance not verified.)
- The 16-from-4096 palette means every swatch has 4 bits/channel, i.e. hex values in multiples of 0x11 (`#rgb` shorthand: `#f80`, `#48c`, etc.). For a web design, restricting CSS to 3-digit hex shorthand is an authentic, cheap constraint.
- From background knowledge (NOT verified here): PC-98 games' typical default text/UI palette used saturated pure RGB corners plus mid greys; common UI is white text on black or deep-blue message boxes with a 1-2 px white frame. Treat as a design suggestion, not a fact.
- Text-mode colored attributes on a black background (8 colors) is the closest authentic reference for "terminal" sections of a portfolio.

### Gaps
- No verifiable source for PC-98 default hex values, exact 24 kHz vs 15.98 kHz monitor details, 80x25 text grid, or 8x16 / 16x16 font cell sizes (the JA/EN Wikipedia pages fetched didn't contain them). The search tool found nothing for MS-DOS Japanese screen look or Ichitaro screenshots. Suggested next stops: Neko Project II source, IPSJ Computer Museum (https://museum.ipsj.or.jp/en/computer/personal/0011.html — cited by daisyUI but not fetched), 98 technical data books.
- No source found on whether PC-98 pixel aspect was non-square on typical monitors (a 640x400 mode on a 4:3 CRT implies tall pixels; unverified for PC-98 specifically).
- No source found describing the "PC-98 look" in terms of specific named dithering patterns (ordered vs. hand dither).

## 2. MSX/MSX2, X68000, FM-7/FM Towns, Famicom

### Takeaway
MSX1 has a fixed 15-color+transparent palette (verified hex below, gamma-corrected); MSX2 expands to 512 colors (9-bit), 16 simultaneous at 256x212 or 512x212. X68000 offers 65,536 colors at up to 512x512. FM-7, FM Towns and Famicom palettes were not obtained.

### Cited Findings
- TMS9918 (MSX1): 256x192, 15 colors + transparent; gamma-corrected hex: black 000000, medium green 0AAD1E, light green 34C84C, dark blue 2B2DE3, light blue 514BFB, dark red BD2925, cyan 1EE2EF, medium red FB2C2B, light red FF5F4C, dark yellow BDA22B, light yellow D7B454, dark green 0A8C18, magenta AF329A, gray B2B2B2, white FFFFFF. Text mode 40x24 cells of 6x8 px; Graphics I 32x24 of 8x8 with 2 colors per cell; Graphics II 2 colors per 8x1 line (the "color clash" look); 32 sprites, 4 per scanline — [Wikipedia, TMS9918](https://en.wikipedia.org/wiki/TMS9918)
- MSX2 (Yamaha V9938): bitmap 256x212 and 512x212; 16 or 4 colors from a 512-color palette (9-bit) and a fixed 256-color mode (SCREEN 8) — [Wikipedia, V9938 via search summary](https://en.wikipedia.org/wiki/Yamaha_V9938); [MSX Technical Handbook ch.4](https://unpkg.com/@nataliapc/mcp-openmsx@1.2.13/resources/book--msx2-technical-handbook/Chapter4a__VDP_and_Display_Screen.md)
- Sharp X68000 (1987): 16-bit RGB palette; all 65,536 colors at up to 512x512, or 16 at 1024x1024 — [Wikipedia, 16-bit palettes list](https://en.wikipedia.org/wiki/List_of_16-bit_computer_color_palettes)
- MSX was also used as the base of CAPTAIN multi-station terminals (see section 4) — [Wikipedia JA, キャプテンシステム](https://ja.wikipedia.org/wiki/キャプテンシステム)

### Inferences
- MSX1's "2 colors per 8x1 line/8x8 cell" is the origin of the attribute-clash look; a CSS imitation is blocks of flat color with hard 8px grid edges.
- MSX1 palette is more muted and saturated-primary than modern "retro" palettes; the hex list above is directly usable as a design token set.

### Gaps
- FM-7 (8 colors digital, 640x200 — from background knowledge, unverified), FM Towns (4096/32,768 colors, 640x480 — unverified) and Famicom (NES PPU palette, 256x240) palettes were not researched/fetched. MSX2 default 16-color palette hex not found.

## 3. Japanese text-mode conventions, 罫線, AA culture

### Takeaway
Shift_JIS art (AA) is a distinctly Japanese pop-text-art tradition, designed around the proportional MS PGothic font on 2channel; it dates from late-1990s, not the 80s, so it is a later layer. 罫線 and 全角/半角 grids were not verified through sources in this pass.

### Cited Findings
- Shift_JIS art is "designed around the proportional-width MS PGothic font" (Western ASCII art assumes monospace); early examples: Giko neko (1997, あやしいわーるど), Monā (2000, 2channel). Free "Mona Font" mimics PGothic widths for systems that lack it — [Wikipedia, Shift JIS art](https://en.wikipedia.org/wiki/Shift_JIS_art)
- PC-98 text cell = 2-byte code + 1-byte attribute and font ROM contains JIS X 0208 glyphs (which include box-drawing ruled lines 罫線 as part of the JIS X 0208 symbol set — the last clause is background knowledge, not stated in the fetched source) — [Wikipedia EN](https://en.wikipedia.org/wiki/PC-9800_series)

### Inferences
- Full-width/half-width grid: half-width kana + ASCII = 1 cell, kanji/full-width = 2 cells. A CSS equivalent: `font-family` monospace with `ch` units, grid layouts on 2:1 widths. (Concept; not sourced.)
- Using MS PGothic/Mona-style AA in a portfolio ties to 2ch-era web (1997-2003), so it is a bridge to the early-Japanese-web researcher, not an 80s element.

### Gaps
- No source fetched for: 全角/半角 rules in PC-98 text mode, JIS box-drawing set listing, 8x16 vs 16x16 font cell sizes, typical MS-DOS Japanese prompt look.

## 4. CAPTAIN system (キャプテンシステム) screens

### Takeaway
CAPTAIN (NTT videotex, trial 1979, commercial 30 Nov 1984, ended 31 Mar 2002) displayed pages at 248x204 with a 12-dot fixed header, 15x8 standard text or 21x16 small text, and chunky graphics where each 4x4 block takes 2 of 16 colors. This is the real "80s Japanese online page" and its constraints are specific enough to emulate. No screenshots could be retrieved in this pass.

### Cited Findings
- Resolution: 248 x 204 dots, top 12 dots fixed header area. Text capacity: 15 chars x 8 lines (standard) / 21 x 16 (small). Graphics: 4x4-dot blocks, each block can specify 2 of 16 colors. High-res mode 512x204 with configs: 1 page x 16 colors, 2 pages x 4 colors, or 4 pages x 2 colors — [MSX Resource Center wiki, CAPTAIN](https://msx.org/wiki/CAPTAIN); [Wikipedia JA](https://ja.wikipedia.org/wiki/キャプテンシステム)
- A patent text gives 248 horizontal x 192 lines (discrepancy with 204; likely header treatment, unconfirmed) — [US4694406](https://patents.google.com/patent/US4694406)
- Name: Character And Pattern Telephone Access Information Network System; experimental service in Tokyo's 23 wards (~2,000 terminals) from Dec 1979 — [昭和58年版 通信白書](https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/s58/html/s58a02070702.html)
- Timeline: experiments 25 Dec 1979 - Jul 1984; commercial launch 30 Nov 1984 (Kanto and Keihanshin parts); near-national coverage by end of March 1987; service ended 31 Mar 2002 — [Wikipedia JA](https://ja.wikipedia.org/wiki/キャプテンシステム)
- Navigation: dial 166 + center number (NTT central center 36100); move between pages by typing page number + "#", or "*" + digits. Optional melody feature (MUSCOT encoding) — [Wikipedia JA](https://ja.wikipedia.org/wiki/キャプテンシステム)
- Terminals: Cap Mate (TV adapter), Cap Mate V10/V15, street-terminal V14, Matsushita TU-CP410/200, NEC NTX-2000/3000/5000, MSX-based Captain Multi Station (NTT + ASCII + Takaoka), coin-operated CP-1000/CP-3000/NM-21 (3 min per 100 yen) — [Wikipedia JA](https://ja.wikipedia.org/wiki/キャプテンシステム)
- Documented as an interactive "videotex" system sending text and figures over phone lines, unlike one-way TV — [Patent JPS6257382A](https://patents.google.com/patent/JPS6257382A/ja)

### Inferences
- Visual signature (inferred from specs): a roughly 4:3 low-res screen, ~15 wide kanji per line, big blocky 4x4 mosaic graphics, saturated 16-color fills, a thin top header strip, numbered menus ("1. ニュース 2. 天気 ... 9. 戻る  #") — that last UI is inferred from the # / * navigation rule. Good web analog: a numbered-link index page, a 12px-equivalent top strip, and chunk-pixel illustrations at 4x4 block grid.
- 248 / 4 = 62 block columns x 48 block rows (192/4) — an easy CSS grid for chunky illustration (arithmetic from cited numbers).

### Gaps
- No screenshots or color list (the 16 colors' RGB) located. Hitachi Review 1985/05 PDF (https://www.hitachihyoron.com/jp/pdf/1985/05/1985_05_02.pdf) is a scanned image and was unreadable by tools; it likely has the answers. English Wikipedia "Captain System" URL returned 404 (page title differs). Suggested: IPSJ museum, NTT history pages, CAPTAIN screenshots on Japanese retro blogs; search "キャプテン端末 画面 スクリーンショット".
- Font/typeface used on CAPTAIN (a coarse dot-matrix kanji) not verified.

## 5. Print/graphic aesthetics: city pop, Showa ads, katakana logos

### Takeaway
City pop covers by Hiroshi Nagai (airbrushed blue skies, pools, palms) and Eizin Suzuki (flat color, bold ligne-claire outlines) define the "bright summer" end of 80s Japan; they are print/illustration, not computing, and are often misused by vaporwave. Showa ad and katakana logotype research was NOT completed.

### Cited Findings
- Nagai: blue base layer, airbrushed white and sky-blue from the horizon; recurring cloudless ultramarine sky reflected in a large white pool, palm shadows; clear blues and sharp shadows — [Phillips / Sydney JPF / Vinyl Factory results](https://archive.thevinylfactory.com/?p=126106), [Japan Foundation Sydney](https://sydney.jpf.go.jp/events/hiroshi-nagai-paintings-for-music)
- Eizin Suzuki: bright colors, bold lines, flat planes, vacation subjects; began in advertising, illustrator debut 1980; influenced by Hergé's ligne claire for Tatsuro Yamashita "For You" (1982) — [People's Graphic Design Archive](https://peoplesgdarchive.org/item/7861/tatsuro-yamashita-for-you-album-cover)

### Inferences
- Nagai = gradient skies (hard to replicate with 16 colors; would need dithering to be consistent with PC-98 look). Suzuki = flat color + black outline, easy to combine with a limited palette. For a pixel-grid portfolio, Suzuki-style flat fills fit better.
- This is a different register from PC-98 UI (summer pastel vs. black/primary-RGB text-mode); mixing both is a deliberate design choice.

### Gaps
- Nothing verifiable on katakana logotype conventions, Showa-era ads, NHK teletext, or specific City Pop palette hexes.

## 6. Modern revivals and real websites/portfolios

### Takeaway
Active PC-98 revival is mostly through pixel-art communities and publishing (Reddit r/VintagePixelArt, a Bluesky PC-98 bot, Fakku reissues) and style guides (daisyUI). I found no verified, current (2023-2026) personal portfolio site with a PC-98 look; this remains a gap the report writer should know about.

### Cited Findings
- daisyUI "PC-98" trend page: indexed ~16-color scene palettes, checker/line/noise dithering rather than gradients; 8:5 landscape frame; bottom dialogue box / side command list / portrait inset / status strip; sharp pixel frames, 1px rules, inset status bands; radius 0-0.25rem; blinking cursors, stepped frames, palette cycling, hard wipes; suggested fonts: DotGothic16, IBM Plex Mono, M PLUS 1 Code, Pixelify Sans, Kosugi Maru. Mentions "narrative portfolios" as a good fit — [daisyUI trends](https://trends.daisyui.com/trend/pc-98/)
- Same page cites the IPSJ Computer Museum PC-9801 entry and the National Museum of Nature and Science article on Japan's most popular 16-bit computer as sources — [IPSJ](https://museum.ipsj.or.jp/en/computer/personal/0011.html), [NMNS PDF](https://sts.kahaku.go.jp/english/material/2016pdf/no221.pdf) (listed, not fetched by me)
- SilverStone showed a PC-9801-inspired PC case at SilverStone EXPO 2024 — [PC Watch](https://pc.watch.impress.co.jp/img/pcw/docs/1655/014/html/04_o.jpg.html)
- Community hubs: r/VintagePixelArt (~23k members, pre-2000 pixel art), "PC-98 Bot" on Bluesky, Fakku acquiring FairyTale catalog for Steam — [PC Gamer](https://www.pcgamer.com/games/adventure/steam-is-about-to-start-getting-some-of-the-best-japanese-pixel-art-in-gaming-history/), [r/VintagePixelArt](https://gummysearch.com/r/VintagePixelArt/)
- Tooling/palette: Lospec has PC-98-spec palettes; GIMP indexed-16 + ordered dither is a recommended workflow; there's an itch.io "PC-98 Color Space Parser" — [Lospec](https://lospec.com/palette-list/tag/dithering), [JREF thread](https://jref.com/threads/i-love-the-look-of-japanese-pc-9800-games-ive-been-interested-in-making-a-game-or-pixel-art-using-an-emulator-but-dont-know-how.105375/?amp=1), [itch.io tool](https://madsonweb.itch.io/pc-98-color-space-parser)
- Contrast case (Western retro, NOT Japanese): Win98-style CSS (98.css) and the A24 Y2K microsite — [Creative Review](https://www.creativereview.co.uk/y2k-film-microsite-a24-design/), [Gigazine on 98.css](https://gigazine.net/gsc_news/en/20200423-98-css/)

### Inferences
- The daisyUI page is a style guide and the only concrete "PC-98 on the web" design spec found; it is useful as a checklist but is not an example of a real portfolio.

### Gaps
- No real PC-98-styled personal/portfolio site (2023-2026) URLs verified. Searches in English and Japanese returned only freelancer profiles and palette tools. Next step: search for "PC-98 style" on itch.io/neocities, Awwwards/siteInspire "PC-98", Japanese "PC-98風 ホームページ", and game-publisher sites (e.g., fan games with PC-98-styled pages).

## 7. What makes it authentically Japanese-80s vs generic Western retro

### Takeaway
Based on collected evidence: authenticity rests on constraints (indexed 16-color or 3-bit-per-channel palette, dithering instead of gradients, kanji-dense full-width text, 8:5 640x400 framing, command-window UI) rather than on motifs like neon/grid/sunset. Win95/98 bevelled-gray UI and synthwave gradients belong to other lineages.

### Cited Findings
- daisyUI frames PC-98 as no anti-aliased curves, dithered shadow fields, rectangular command windows, dialogue-box-plus-art layout — [daisyUI](https://trends.daisyui.com/trend/pc-98/)
- Shift_JIS art is built on MS PGothic proportional spacing, unlike Western monospace ASCII art — [Wikipedia](https://en.wikipedia.org/wiki/Shift_JIS_art)
- Western retro counterparts: 98.css (Win98), A24 Y2K microsite — [Gigazine](https://gigazine.net/gsc_news/en/20200423-98-css/), [Creative Review](https://www.creativereview.co.uk/y2k-film-microsite-a24-design/)

### Inferences
- Concrete tells for authenticity (design recommendations derived from the above, not from a single source): (1) CJK text at real kanji density with half-width katakana accents; (2) a 3-hex-digit palette; (3) dither patterns for shadows/gradients; (4) hard 1px frames and no radius or shadow blur; (5) numbered/command menus (CAPTAIN `#`/`*`-style navigation); (6) 8:5 art panel + dialogue box; (7) low-res chunky 4x4 mosaic graphics reminiscent of CAPTAIN.
- Things that read as generic Western retro and should be avoided: Win9x bevel gray chrome, purple/pink neon grid sunsets, glow-heavy CRT bloom, VHS glitch overlays, "vaporwave" Greek statues.
- The ~1997-2003 2ch/AA layer and MS PGothic are later than the source era (1979-1992); mixing them is fine for a blend but should be conscious.

### Gaps
- No authoritative source comparing authentic vs. misused vaporwave/city-pop aesthetics. The above comes from synthesis, not a citation.
