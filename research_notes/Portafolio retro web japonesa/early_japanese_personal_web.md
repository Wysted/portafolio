# Early Japanese personal websites (個人サイト / ホームページ / ホムペ), c.1995-2008, and why Japanese sites still look rudimentary

Method note: ~22 tool calls. Search tool returned summaries; I fetched primary pages where possible. Several expected sources (niconico dic, ja.wikipedia 個人ホームページ, multilingual.com) returned 403/404. Items from general knowledge, not verified here, are placed under "Inferences" or "Gaps" and flagged UNVERIFIED.

## 1. Layout patterns (tables, frames, widths, left menus, splash/Enter, top page structure)

### Takeaway
Hand-coded pages (Notepad tags, FTP upload) with table layouts and frame menus; the Nifty/Impress recreation describes a typical top page as three columns (menu left, content center, diary/updates right) with a "ようこそ/Welcome" greeting. Fixed pixel width, splash pages and exact pixel widths are NOT confirmed by sources found.

### Cited Findings
- Personal-site era peaked late 1990s to early 2000s, before blogs (~2003) and SNS; sites were hand-coded, often with frame menus and table layouts, uploaded via FTP — [Moe Counter notes (scrapbox)](https://scrapbox.io/work4ai/Moe-Counter)
- Creation workflow: type tags in Notepad page by page, upload with an FTP client; higher barrier than today — [Moe Counter notes](https://scrapbox.io/work4ai/Moe-Counter)
- Typical top-page structure per Nifty's "好きがつながるプロジェクト" recreation (1995-2000 style): left menu, centre main content, right-hand diary/updates; top pages greeted with "ようこそ"/"Welcome" — [Impress Watch interview](https://internet.watch.impress.co.jp/docs/interview/2072587.html)
- Table layouts commonly broke when width percentages didn't sum to 100 (example 50%+60%); IE bugs caused overlaps; broken-image icons were common because of wrong paths/extensions — [Impress Watch interview](https://internet.watch.impress.co.jp/docs/interview/2072587.html)
- Tiled small wallpaper backgrounds were used because large images loaded slowly; a brick pattern was dropped from the recreation for hurting readability — [Impress Watch interview](https://internet.watch.impress.co.jp/docs/interview/2072587.html)
- Rainbow (red to blue/purple) gradient headers were made as pasted images since CSS gradients didn't exist; text was often pixelated rather than smoothly anti-aliased — [Impress Watch interview](https://internet.watch.impress.co.jp/docs/interview/2072587.html)
- Unrelated decorative GIFs (blinking cats, spinning floppy disks, homepage-builder clip art) — [Impress Watch interview](https://internet.watch.impress.co.jp/docs/interview/2072587.html)
- Source recreation: Nifty feature page https://csoption.nifty.com/sukigatsunagaru_pj/feature2/ ; project page https://csoption.nifty.com/sukigatsunagaru_pj/ (Nifty home-page service turned 30 in 2025; project launched Aug 2025) — [Impress Watch](https://internet.watch.impress.co.jp/docs/special/2037262.html) (via search snippet)
- Hiroshi Abe's site uses a wallpaper repeating the words "ABE Hiroshi"; film page wallpaper repeats "Movie" — [Wikipedia](https://en.wikipedia.org/wiki/Hiroshi_Abe%27s_home_page)
- Pattern for hospital site (aiseikai.or.jp): GIF-heavy, "psychedelic", nearly unchanged for 10+ years; earliest Wayback capture April 2000 — [Impress Watch 2013](https://internet.watch.impress.co.jp/docs/yajiuma/599571.html)

### Inferences
- Reproduction recipe supported by sources: 3-column table, left nav, right "what's new", tiled wallpaper, gradient header image, "ようこそ" greeting, intentional rough edges. Sources do not give exact widths; 600-800px is UNVERIFIED (general knowledge: 640/800x600 monitors dominated).
- Splash/Enter pages ("入口"): UNVERIFIED here (general knowledge). Not found in sources.

### Gaps
- No source confirmed fixed width values, iframe use, or splash/enter pages. Nifty's feature page named three sites (see Q6) but did not document layouts.

## 2. Standard page sections and conventions (update log, BBS, counters, kiriban, banners, 工事中...)

### Takeaway
Best-sourced iconic items: access counter + キリ番 (report on BBS, no reload cheating), update log with NEW GIFs, 工事中 icons, link pages full of banners, web clap, marquee. Banner sizes: 200x40 buttons (some with 88x31) per a modern personal-web author; an ad exchange in 1997 used 400x40.

### Cited Findings
- Counters + キリ番: visitors hitting round numbers reported it on the BBS — [Impress Watch interview](https://internet.watch.impress.co.jp/docs/interview/2072587.html)
- Update log: homepages lacked auto feeds so showed "Last Update" and a "What's New" list; blinking NEW GIFs marked new content; 工事中 icons marked unfinished pages, sometimes for years — [Impress Watch interview](https://internet.watch.impress.co.jp/docs/interview/2072587.html)
- Marquee: IE-only `marquee` tag, often too fast/bouncing — [Impress Watch interview](https://internet.watch.impress.co.jp/docs/interview/2072587.html)
- Mutual-link banners: sites offered small, sometimes animated banners; link pages filled with banners — [Impress Watch interview](https://internet.watch.impress.co.jp/docs/interview/2072587.html)
- キリ番 etiquette: reporting on BBS welcomed; many sites had pages honoring "キリバンゲッター"; deliberate reloading to hit it is near-vandalism; requiring report is "a kind of 踏み逃げ prohibition" and over-demanding sites could be criticized — [ja.wikipedia キリ番](https://ja.wikipedia.org/wiki/キリ番)
- 踏み逃げ (hit a kiriban and leave without acknowledging) was frowned upon — [Yugipedia/vket via search](https://store.vket.com/en/items/9223)
- Self-deprecating counter humor ("most of the counter was me") — [ITmedia kiriban keyword](https://www.itmedia.co.jp/keywords/kiriban.html) (via search snippet)
- Counter mechanics: CGI reads count file, +1, renders via pre-made 0-9 digit images concatenated in <img>; some store last IP to ignore reloads — [ja.wikipedia アクセスカウンター](https://ja.wikipedia.org/wiki/アクセスカウンター)
- Counter images were downloaded from "配布所" (distribution sites) with copyright/font credit notes; a cat-ear counter image was used by 2004 at least — [Moe Counter notes](https://scrapbox.io/work4ai/Moe-Counter)
- Material-site (素材屋) etiquette: report use ("借ります！"), 直リンク禁止 (no hotlinking) — [ねとらぼ キラキラサイト](https://nlab.itmedia.co.jp/cont/articles/3295709/)
- Web clap (Web拍手): viewers send applause; implemented as a record CGI plus a viewer CGI, offered as rental service; shows liking beyond counter — [All About](https://allabout.co.jp/gm/gc/23898/4), [Weblio](https://www.weblio.jp/content/Web+clap) (via search snippets)
- Modern Japanese personal web (still alive): banners usually 200x40, some also 88x31; guestbooks rarely public; contact via email forms or web clap (webclap.com, clap.fc2.com); owners often disclaim search engine indexing (検索避け); many welcome links only from other personal sites; "web unions (同盟)" are single link pages with banners; indexes: kn1.x0.to (Yorozulink), dabun-doumei.com, lony.jp — [Roy Tang on the Japanese personal web](https://roytang.net/collections/threads/bikobatanari-eastern-web/)
- 1997 banner exchange (CSJ): banners 400x40 px, <7KB, GIF/JPEG, no animated GIFs; members pasted HTML snippet; personal homepages eligible — [Impress Watch 1997](https://internet.watch.impress.co.jp/www/article/970610/csj.htm)
- Link pages: editors added commentary to links because personal site titles were unclear — [Phile-web 2001 via search](https://www.phileweb.com/news/d-av/200111/05/3540.html)
- Hosting: Yahoo! GeoCities Japan, closed 2019-03-31 — [Moe Counter notes](https://scrapbox.io/work4ai/Moe-Counter); [TechSpot](https://www.techspot.com/news/76732-yahoo-japan-soon-take-geocities-off-life-support.html)
- Hiroshi Abe's site: simple design, IPv4/IPv6, fast, used as device benchmark (3DS, a 2007 smartphone) — [Wikipedia](https://en.wikipedia.org/wiki/Hiroshi_Abe%27s_home_page)

### Inferences
- Iconic ranking (my judgment): counter/キリ番, 掲示板, 更新履歴 with NEW, 工事中, リンク集+バナー, 拍手, 素材 credit.
- A faithful portfolio could include: counter (fake digits image), "キリ番を踏んだら報告" note, 更新履歴, 掲示板 link, リンク集 with 200x40 banners, 拍手 button, 工事中 on an unfinished section, 当サイトについて/リンクフリー text.
- UNVERIFIED (general knowledge, not confirmed by fetched sources): 当サイトについて/注意事項/お約束 pages, サイトマップ, 相互リンク request etiquette ("リンクフリー", "報告不要"), 無断転載禁止, 右クリック禁止, プロフィール with 血液型/星座 style fields, 日記 → blog shift.

### Gaps
- Could not verify 88x31 vs 200x40 historical prevalence in 1995-2008; only modern source (Roy Tang). No source for お約束/注意事項 structure. 右クリック禁止 mentioned only in an Impress headline (2012 yajiuma https://internet.watch.impress.co.jp/docs/yajiuma/559189.html) not fetched.

## 3. Typography (MS Pゴシック, Osaka, small text, font tags, marquee/blink, kaomoji, symbols)

### Takeaway
Sources confirm pixelated (non-anti-aliased) text in the era, MS Pゴシック characteristics (proportional kana, designed for low-res displays), and marquee. Most other claims are unverified.

### Cited Findings
- MS Pゴシック: "P" = proportional (kana widths vary); MS ゴシック has uniform full-width; designed for low-resolution displays and poor text rendering; hiragana stroke weights uneven (い, う, の look heavier, こ looks angular); Meiryo later common — [Mynavi 2015](https://news.mynavi.jp/article/20150611-mspg/)
- Text in graphics (headers) was often pixelated rather than smooth — [Impress Watch interview](https://internet.watch.impress.co.jp/docs/interview/2072587.html)
- text sites (テキストサイト): plain HTML nearly all text, heavy emphasis and line breaks for comedic rhythm; peak late 1990s to ~2002 — [ja.wikipedia テキストサイト](https://ja.wikipedia.org/wiki/テキストサイト)
- Japanese lacks italics/capitals so hierarchy was built with decoration or text-as-image — [Gigazine](https://www.gigazine.net/gsc_news/en/20180130-japanese-web-design)

### Inferences
- UNVERIFIED (general knowledge): 12px/small body text, `<font color size>`, `<blink>` (Netscape), full-width characters and ★☆◆■ bullets, kaomoji, Osaka font on classic Mac. Sources fetched did not cover them; a designer should verify against Wayback snapshots.

### Gaps
- No source found for default browser font size, Osaka usage, font-tag habits, symbol bullets, kaomoji.

## 4. Color and imagery (素材サイト, lines, icons, GIFs, pastel vs dark, tiled backgrounds)

### Takeaway
Free "素材屋" sites supplied backgrounds, icons, lines and decorations; "キラキラサイト" (pastel pink/light blue/yellow, girl-oriented, early 2000s) is a well-documented subgenre; text sites were the austere opposite.

### Cited Findings
- キラキラサイト: early-2000s girls' homepages in pastel pink, light blue, yellow with sparkly cute decoration; core = background images, icons, decorations; also CSS-fixed corner images, "メル画", キリ番 and お題サイト — [ねとらぼ](https://nlab.itmedia.co.jp/cont/articles/3295709/)
- 素材屋 rankings: ふみコミュニティ ranking had ~300 material sites in early-to-mid 2000s; top sites Honey Drop (ミスズ) and ABC (まいまい); free, often run at a loss — [ねとらぼ](https://nlab.itmedia.co.jp/cont/articles/3295709/)
- Rainbow gradient headers, tiled wallpaper, GIF decorations — [Impress Watch interview](https://internet.watch.impress.co.jp/docs/interview/2072587.html)
- Cultural contrast: text sites were plain with no/little imagery — [ja.wikipedia テキストサイト](https://ja.wikipedia.org/wiki/テキストサイト)
- GifCities (Internet Archive search of Geocities GIFs) exists — [AV Club](https://avclub.com/here-are-4-5-million-delightfully-bad-geocities-gifs-1798253553)

### Inferences
- Palette split to adopt: (a) pastel kirakira (fan/girl culture), (b) white/gray plain text-site austerity, (c) dark "web-fantasy" sites (UNVERIFIED, no source).
- ライン素材 (divider lines) not directly sourced; general knowledge only.

### Gaps
- No source for lines (ライン素材) specifically, dark-theme conventions, or 素材 credit line wording beyond "借ります！".

## 5. Why Japanese sites still look dense/old (Abe Hiroshi, Yahoo! JAPAN, Rakuten, 2ch, government)

### Takeaway
Multiple hypotheses, none conclusive: writing system (no italics/caps, kanji density), risk-averse consumer/corporate culture wanting detailed info, outsourced/legacy operations, feature-phone (ガラケー) era, and spatial thrift. Abe's site is a deliberate keep-as-is (owner says "it's popular") plus ultra-light tech.

### Cited Findings
- Abe Hiroshi site: abehiroshi.la.coocan.jp; began as fan site by a fan with Yuko Natori, later official; viral in 2016 when Nifty @homepage planned to end; moved to LaCoocan; HTTPS added Oct 2025 — [Wikipedia](https://en.wikipedia.org/wiki/Hiroshi_Abe%27s_home_page)
- Reported: Abe declined update at a 2021 event saying "でも、あれ人気だから"; reportedly built with ホームページ・ビルダー (IBM Japan) — [J-Prime via search summary](https://www.jprime.jp/articles/-/39027). Secondary press; official reasons not confirmed.
- Gilbert/Gigazine three reasons: linguistic (kanji dense, no italics/caps), cultural (risk aversion, copy precedent, consumers want specs, narrow land/Shibuya signage comparison, outsourced official sites), technical (feature phones more widespread than PCs, obsolete systems) — [Gigazine](https://www.gigazine.net/gsc_news/en/20180130-japanese-web-design)
- Randomwire (2013): CJK fonts expensive/slow so designers use graphics; web as advertising; author later admitted "far from scientific" — [The Bridge](https://thebridge.jp/2013/11/why-japanese-web-design-is-so-different), [Randomwire](https://randomwire.com/why-japanese-web-design-is-so-different/comment-page-1)
- Sabrina's analysis: popular Japanese sites cluster in lighter/denser layouts; keitai had email 1999, camera 2000, digital TV 2005, so text-heavy norms; no visible shift ~2010 unlike US; examples Rakuten, Syosetu, FC2, Yahoo Japan, goo, Nico Nico; author concedes data (SEMrush) limits and regional comparison weakens language theory — [sabrinas.space](https://sabrinas.space)
- Fujitsu/Hofstede uncertainty avoidance argument, with a critic noting neighbors don't match — [search summary of Fujitsu blog](https://global.fujitsu/en-benelux/local/blog/2025/when-clutter-got-purpose-understanding-the-role-of-cultural-context-in-ux-ui)
- Agora: "blank space is a waste" feeling, narrow land; many sites unchanged since ~1998 style due to manual operations — [search summary](https://agora-web.jp/?p=10090) (opinion)
- Half of Japanese businesses still used IE when support ended — [sabrinas.space](https://sabrinas.space)

### Inferences
- For the portfolio, density is a defensible design choice: information-forward, no hero whitespace. Abe's site is the strongest "authentic rudimentary" reference.

### Gaps
- No source found specifically on Yahoo! JAPAN, 2channel, or government sites' design history; Rakuten mentioned only as example. Nikkei/ITmedia explanatory article not located. All causal claims are speculative blog/commentary, not research.

## 6. Living examples and archives

### Takeaway
Nifty's curated list, Abe's site, aiseikai hospital site, Neocities/Japanese personal web indexes, and Wayback/Archive Team Geocities Japan captures.

### Cited Findings
- 街の温泉めぐり https://machispa.la.coocan.jp/index.htm; 日本を旅する https://waux.la.coocan.jp/ (since 2007); 60年代 懐かしの宝箱 https://mtomisan.my.coocan.jp/ (~500 pages) — [Nifty feature page](https://csoption.nifty.com/sukigatsunagaru_pj/feature2/)
- Abe Hiroshi: http://abehiroshi.la.coocan.jp/ — [Wikipedia](https://en.wikipedia.org/wiki/Hiroshi_Abe%27s_home_page)
- Aiseikai hospital GIF site: http://www.aiseikai.or.jp/ (announced closure 2013; check whether it still exists) — [Impress Watch](https://internet.watch.impress.co.jp/docs/yajiuma/599571.html)
- 侍魂 (健): robot "先行者" series, ~200,000 PV/day at peak; ろじっくぱらだいす (ワタナベ); ちゆ12歳 (VNI genre) — [ja.wikipedia テキストサイト](https://ja.wikipedia.org/wiki/テキストサイト)
- Japanese personal-web indexes and webclap services listed above — [Roy Tang](https://roytang.net/collections/threads/bikobatanari-eastern-web/)
- GeoCities Japan closed 2019-03-31; Wayback Machine holds pages; Archive Team crawled (96 million URL figure from a likely AI-generated page, treat as unreliable) — [ZKM](https://extinction.zkm.de/events/geocities-japan-shutdown), [TechSpot](https://www.techspot.com/news/76732-yahoo-japan-soon-take-geocities-off-life-support.html)
- English-language GeoCities archives (US version): https://geocities.restorativland.org/ — [Lifehacker JP](https://www.lifehacker.jp/article/2306relive-the-internet-of-the-90s-with-neocities/)
- Neocities (launched 2013): web union examples e.g. unionmatome.web.fc2.com/jikoman/ — [Roy Tang](https://roytang.net/collections/threads/bikobatanari-eastern-web/)
- Moe Counter / cat-ear counter origin: artist 日下こかげ — [scrapbox](https://scrapbox.io/work4ai/Moe-Counter)

### Inferences
- Study order: Abe, Nifty three sites (all la.coocan.jp/my.coocan.jp, real hand-built), aiseikai, then Wayback captures of geocities.jp sites from 2000-2005.

### Gaps
- 侍魂 live URL, Wayback snapshot URLs, and WARP (NDL) not verified. Geocities.jp capture index URL not found.

## 7. Pitfalls when Western designers imitate

### Takeaway
No source directly addresses Western imitation; the following follows from findings only.

### Cited Findings
- Western GeoCities pastiche differs: Japanese kirakira sites are pastel and cute, text sites austere; Japanese personal-web banners are 200x40 not only 88x31 — [ねとらぼ](https://nlab.itmedia.co.jp/cont/articles/3295709/), [Roy Tang](https://roytang.net/collections/threads/bikobatanari-eastern-web/)
- Japanese sites mostly personal-site-only linking, 検索避け disclaimers, no public guestbooks (modern) — [Roy Tang](https://roytang.net/collections/threads/bikobatanari-eastern-web/)

### Inferences
- Likely pitfalls (my inference): using Western starfield/neon "Y2K"/vaporwave look; Comic Sans/English-only text; ignoring 全角 and MS Pゴシック rendering; fake Japanese (random kanji, mixed-up katakana); skipping the social conventions (リンクフリー, 報告, 借ります！); making it too clean/legible instead of dense.
- Authenticity requires real Japanese copy written by a native; the 1980s PC-98 look is a different aesthetic from web era and should not be mixed.

### Gaps
- No authoritative source on Western imitation errors.
