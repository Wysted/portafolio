# Moodboard: sitios personales japoneses retro (個人サイト)

Capturado 2026-10-27, viewport 1024x768, Chromium (Playwright). Valores = computed styles / atributos medidos con `browser_evaluate`.
AVISO: las capturas usan fuentes IPA (IPAPGothic), NO las originales MS Pゴシック / Osaka. Fuente por defecto sin CSS en estas paginas = "Times New Roman" (latin) + fallback CJK del sistema.
Todas las paginas vivas se sirven hoy por https pero son HTML original (Shift_JIS, BackCompat/quirks mode).

---
## 01 阿部寛のホームページ
- URL: http://abehiroshi.la.coocan.jp/ (redirige a https). Screenshot: `01-abehiroshi.png`. Era: ~1990s-2000s, mantenido hasta hoy.
- compatMode BackCompat, charset Shift_JIS. FRAMESET: `<frameset cols="18,82">` -> `menu.htm` (izq, name=left) + `top.htm` (der, name=right), marginwidth/height 0.
- Fuente: default Times New Roman 16px, line-height normal, color #000 (sin CSS). Links default #0000ee subrayado.
- Menu (frame izq): `bgcolor=#F0F0FF`, tabla width 142, border 0, 8 `<font>`. Items con vineta `●`: トップ / 映画出演 / ドラマ出演 / 舞台出演 / 写真集 / 出版本 / 管理者 / English.
- Contenido: fondo `background=image/abehiroshi.jpg` (imagen de fondo), tabla principal width 820 centrada (`align=center`), tablas anidadas 100% / 256, border 0, cellpadding 0. `<hr width="100%" size="1">`. Foto 350x414.
- Titulo: texto "阿部 寛のホームページ" sin imagen. Seccion novedades: `★★★　最新情報　★★★`, items con `・` y `New!`.
- Colores: #000000, #808080 (texto secundario/bordes), #0000ee (links), #ff0000 (New!), #F0F0FF (menu bg). Sin contador, sin marquee.
- Nota: extremadamente austero; 16px defecto; 3 frames.

## 02 街の温泉めぐり (machispa)
- URL: http://machispa.la.coocan.jp/ . Screenshot: `02-machispa.png`. Era: ~2000s (Nifty-style).
- BackCompat, Shift_JIS, sin frames. 10 tablas anidadas, 241 `<font>`, 2 marquee/blink.
- Fuente 16px Times (default), color #000. `<body bgcolor=#3AF3D8 background=background7_3.gif>` (tile + color turquesa). Links default #0000ee, subrayado.
- Tablas: width 546 / 725 / 515 / 733, todas `border=1`, cellpadding 2/10/6, bgcolor #FFCACA, #BFFFFF, #FFD8A4 (cajas pastel por seccion).
- Menu = imagenes GIF 720x201 (menu_on_topics.gif, menu_tky.gif...) -> titulos de seccion como imagen.
- Widgets: "Last update　２０２６.０７.２６", contador ("あなたは、 番目の訪問者です｡"), `★　サイトの更新に関する新着情報　★` con items `･ ... (07.26)`, "お知らせ" con `－ お　知　ら　せ －`, marquee. Encabezado `●ちょいとひと浴び●`, `☆ 街の温泉めぐり ☆`.
- Colores: #3AF3D8, #FFCACA, #BFFFFF, #FFD8A4, #FF0080/#FF66B3 (rosa), #FF0000, #0000A0, #004080, #C0FEDE, #808080.

## 03 日本を旅する (waux) 
- URL: http://waux.la.coocan.jp/ . Screenshot: `03-waux.png`. Era: 2000s, CSS parcial.
- BackCompat, Shift_JIS. Tablas width 830 (border 0, cellpadding 0, cellspacing 0), spacer.gif 1x1 por todos lados (layout con GIF espaciador).
- Fuente: Verdana 12px / line-height 18px, texto #4c4c4c; body bg #f3f3f3. Tamanos usados: 13px (mayoria), 12, 14, 18, 24, 10, 9.
- Links: #cc3300 sin subrayado (CSS); otros #2b60ff. Acentos #ad3116, #613a1e, #e6ded3, #bf4077, #30ac00.
- Nav: `Home | Mountain | Travel | Flower | Hokkaido | Others | Link` (texto en ingles, separado por `|`) + botones kanji 山 旅 花 北 他.
- Widgets: `WELCOME TO MY GALLERY !`, `WHAT'S NEW ↓クリックできます` con fechas `2026/10/25  Mountain  ...`, `※過去のトップ写真は こちら`, imagen hero 550x110, contador cgi (hanakulog.cgi 1x1 tracker).

## 04 60年代 懐かしの宝箱 (mtomisan)
- URL: http://mtomisan.my.coocan.jp/ . Screenshot: `04-mtomisan.png`. Era: 2006-presente, estilo 1999 puro.
- BackCompat, Shift_JIS. `<body bgcolor=#ffff00 text=#000000 link=#0000ff vlink=#b8860b alink=#ff0000 background=img001.gif>` (amarillo + tile).
- font-family body: "ＭＳ Ｐゴシック" 16px. 38 tablas, 230 `<font>`. Tablas width 869/865 (computed 880) `align=center`, border 0 cellpadding 0/4; caja de logos width 229 border=1 cellpadding 2 cellspacing 1.
- Tamanos `<font size>`: 16,18,24,27,32px mezclados. Links #0000ff sin subrayado en menu (a: #000 none en el primero).
- Banners/botones: 72x15, 128x40, 430x110 (logo), 468x60, 100x45, 156x41, 243x64, 130x40, 140x40; hero 555x429.
- Contenido: `開設　2006年1月13日`, `更新　2026年10月20日`, lista de menu en columna (60年代特集 / 想い出の時を求めて / 掲示板（新） / サイトマップ / 開け！宝箱 ...), `ブログ開設`, `掲示板ＵＲＬ変更`, `仲間の掲示板`.
- Colores: #ffff00, #ffc0cb, #f0e68c, #800000, #b8860b, #006400, #c71585, #da70d6, #9400d3, #ff7f50, #32cd32, #9acd32, #0000ff, #ff0000, #808080, #cccccc.

## 05 Recreacion Nifty 2025 (Impress Watch)
- Articulo: https://internet.watch.impress.co.jp/docs/interview/2072587.html ("なにこの平成レトロ感!?　SNSより新しいかも"). Imagen de la recreacion: https://asset.watch.impress.co.jp/img/iw/docs/2072/587/nifty01_l.jpg (480x320). Screenshot: `05-nifty-recreation-img.png`. Otras: nifty15_l.jpg (480x75), nifty11_l.jpg (480x197), nifty16_l.jpg (480x24).
- Campana Nifty: https://csoption.nifty.com/sukigatsunagaru_pj/ (feature1-5). feature2 lista sitios reales: machispa, waux, mtomisan (sitios 02-04). No hay sitio recreado navegable aparte.

## 06 Yahoo!ジオシティーズ index (Wayback 2002-01-25)
- URL: https://web.archive.org/web/20020125084051if_/http://www.geocities.co.jp/ . Screenshot: `06-geocities-jp-index-2002.png`.
- Barrios (neighborhoods) reales: SweetHome, MusicStar, Outdoors, Athlete, AnimalPark, AnimeComic, WallStreet, CollegeLife, SiliconValley, SilkRoad, Stylish, Technopolis, NatureLand, NeverLand, HeartLand, HiTeens, PowderRoom, Hollywood, Beautycare, Foodpia, Bookend, Playtown, MusicHall, Milano, Milkyway, MotorCity. URL de pagina: /Barrio-Subbarrio/NNNN/.

## 07 GeoCities JP "恐竜おもちゃの博物館" (Wayback 2003-02-10)
- URL: https://web.archive.org/web/20030210120148if_/http://www.geocities.co.jp/HeartLand-Suzuran/3621/ . Screenshot: `07-geocities-dino-toys-2003.png` (la pagina hace redireccion a infoseek; captura/medicion hechas sobre la pagina GeoCities; no revisada visualmente).
- BackCompat, Shift_JIS, blanco `bgcolor=white`, `link=vlink=alink=#FF00CC` (rosa). Links 12px sin subrayado.
- Tablas width 468 / 720 / 700, border 0, `<hr width="720">`. Texto 12px.
- Botones de nav 12px de alto en GIF: 99x12, 78x12, 84x12, 104x12 (logo/rank/tour/guestbook/chat/pages/search/send/forums: son los botones del GeoGuide). `SINCE 1998-8-15`, contador ("人目のお客さまです。"), `ようこそ！`.
- Colores: #FF00CC, #FF0066, #003399, #ffff00, #808080.

## 08 GeoCities JP "収納しよう" (Wayback 2001-12-13)
- URL: https://web.archive.org/web/20011213215625if_/http://www.geocities.co.jp/SweetHome-Green/7529/ . Screenshot: `08-geocities-shuno-2001.png` (IMAGENES ROTAS: Wayback no sirve los GIF; solo sirve de referencia del banner de Yahoo 468x60 inyectado arriba).
- Estructura medida: fondo tile `xmas_bg05_a.gif`, tabla 468 centrada (bgcolor #000066, banner 468x60), tabla 60% con border=1. `<hr width="80%" color="#C0C0C0">`. 99 `<font>` a 13px, colores #FFFF80 (texto), #FF80C0, #8080FF, #FFFFFF.
- Textos: `更新日　2001年12月07日`, `ようこそ、いらっしゃいませ♪`, `あなたは 番目のお客様です。` (geocounter), `◆◇◆　はじめまして　◆◇◆`, `◆　１０万ヒット達成しました　◆`. Menu: 収納しよう / 自己紹介&わが家紹介 / 掲示板 / リンク / キリ番ゲットの部屋 / ランキング.

## 09 GeoCities JP "ORANGEADE" (Wayback 2001-12-15)
- URL: https://web.archive.org/web/20011215055056if_/http://www.geocities.co.jp/Playtown-Queen/2725/ . Screenshot: `09-geocities-orangeade-2001.png` (imagenes rotas, texto y banner Yahoo 468x60 visibles).
- Layout centrado de una columna, texto naranja/rojo centrado, `THIS PAGE IS JAPANESE ONLY / SINCE 2001/7/25 / LAST UPDATE 2001/12/11`, `++ WELCOME ++`, `■□登録、参加させて頂いているWEB RING様/同盟様□■`, disclaimer fansite ("個人ファンサイトです。無断転載、複製は禁止です。").

## 10 Yahoo! JAPAN (Wayback 2001-01-06)
- URL: https://web.archive.org/web/20010106if_/http://www.yahoo.co.jp/ (resolvio a 20010106195500). Screenshot: `10-yahoo-japan-2001.png`.
- charset EUC-JP, BackCompat, 17 tablas, 7 `<font>`. Texto 13px (tamano de sistema), fondo blanco, links #0000ee subrayado. Colores: #6699cc, #99ccff, #dcdcdc, #ffffcc, #efefef.
- Banner 600x60, logo 224x33. Nav horizontal con ` - `: `ニュース - スポーツ - 株価 - 天気 - TV - 音楽 - 旅行 - グルメ - 路線 - 地図 - きっず - モバイル`. Directorio: categorias en 2 columnas con subcategorias en gris `写真, 建築, 美術館, 歴史, 文学, ...`.

## 11 侍魂 (Wayback 2004-06-11)
- URL: https://web.archive.org/web/20040611224333if_/http://homepage3.nifty.com/samurai-spirit/ (redirect desde samurai-spirit.com 2002). Screenshot: `11-samurai-damashii-2004.png`. Era: 2001-2004. Es un sitio de texto (テキストサイト): "samurai - Page: 1 of 20".
- Shift_JIS, BackCompat, `<body bgcolor=#ffffff text=#000000 link=#0000FF vlink=#800080 alink=#FF0000>`. Tablas: width 200 con bgcolor #FF8C00 (naranja) y width 130. Fuente 16px default + `<font>` de 10px/13px para notas. Links #0000ff.
- Nav: `BACK RANDOM NEXT | LIST BBS HOME`. Aviso: `動作確認　WindowsMe Windows98 IE5.5 サイズ1200×5000 16bit | Macやネスケでは表示デザインが崩れる可能性があります。`, `last update 2004.5.13`, `侍SPIRITは、マシンガー；リングに参加しています` (webring), `NEWS`.
- Colores: #000, #fff, #0000ff, #800080, #FF8C00, #808080, #C0C0C0. Banner 85x15 (Mini), imagen 122x66.

## 12 よろずりんく (kn1.x0.to) - moderno que mantiene el estilo
- URL: http://kn1.x0.to/ . Screenshot: `12-modern-yorozu-links-kn1.png`. Servicio de サーチ para sitios 同人/創作. Encontrado via roytang.net.
- CSS1Compat (doctype presente), Shift_JIS, font-family "ＭＳ Ｐゴシック", 12px (975 nodos), links #000 sin subrayado, color de acento #66BBDD, #99DDDD, #CCEEEE. Tabla 1027 y 300.
- Banners: 200x40 (x2) y 88x31. Nav: `TOP | ご案内 | 新規登録 | 新着サイト | 更新サイト`. Texto: "バナーアドレス", "ご利用者様に寄贈頂いたバナー", formulario con `AND/OR`, `10件 25件 50件 100件`, orden `新着順 ランダム ...`.

## 13 PC-98 reference (daisyUI trends)
- URL: https://trends.daisyui.com/trend/pc-98/ . Screenshot: `13-pc98-daisyui-trend.png`. No lista hex. Specs textuales: 640x400, ~16 colores simultaneos de un banco mayor, dither (checker/linea/ruido) en lugar de gradientes, marcos pixel de 1px, bandas de estado inset, ventanas rectangulares de comando/dialogo, escenas 8:5, radius 0, movimiento escalonado (cursor parpadeante, texto que avanza, wipes duros). Sugiere `--noise:1; --depth:1; radius 0/0.25rem`.
- (Conocimiento general, NO medido en esta pagina) paleta digital PC-98 de 8 colores: #000000 negro, #0000FF azul, #FF0000 rojo, #FF00FF magenta, #00FF00 verde, #00FFFF cian, #FFFF00 amarillo, #FFFFFF blanco.

## Fallidos / descartados
- https://www.bikobatanari.art/ : dominio secuestrado (spam turco "Güncel Rehber"). Descartado. lony.jp y dabun-doumei.com no visitados (presupuesto).
- Wayback GeoCities JP: las imagenes de las paginas personales (fondos, botones, logos) no cargan (timestamps distintos) -> 08 y 09 son capturas parciales. www.geocities.co.jp/Playtown etc. solo funciona la home de barrios.
- 05: la recreacion de Nifty solo existe como imagenes del articulo; no hay sitio navegable.

---
# Patrones comunes

**Tecnica**: quirks mode (BackCompat) en 10/12 paginas; Shift_JIS (Yahoo en EUC-JP); layout con `<table>` anidadas, `<font>`, spacer.gif 1x1; framesets en Abe (cols 18%/82%) y en menu-izq.
**Tamano de texto**: default 16px (Times/MS Pゴシック) en sitios sin CSS (01, 02, 04, 11); 12-13px en sitios con estilo o GeoCities (03: 13px sobre base 12px/18px; 07: 12px; 08: 13px; 10: 13px; 12: 12px). Mas frecuente: 16px por defecto, 12-13px como "texto chico". line-height normal o 18px (18/12 = 1.5).
**Ancho de contenido**: 468 (banner/cabecera GeoCities), 546-733 (cajas), 720-830 (tabla principal), 820 (Abe), 869-880 (mtomisan), 830 (waux). Moda: 720-830px, centrado con align=center; a 800x600 historico ~760.
**Fondos**: blanco #FFFFFF, o color fuerte (#FFFF00, #3AF3D8, #F0F0FF para menu, #f3f3f3) + tile GIF `background=`. Texto #000 (o #4c4c4c). Links: azul default #0000EE / #0000FF, visitado #800080 (#b8860b en 04), activo #FF0000; subrayados salvo cuando hay CSS.
**Paleta recurrente (hex)**: #000000, #FFFFFF, #808080, #C0C0C0, #0000EE/#0000FF, #800080, #FF0000, #FFFF00, #FF00CC/#FF0080/#FFC0CB (rosa), #FF8C00, #000066, #FFCACA/#BFFFFF/#FFD8A4 (pasteles), #F0F0FF.
**Bordes**: `border=1` en tablas de caja (02, 04, 08), cellpadding 2-10, cellspacing 0-1; `<hr width=720|80% size=1 color=#C0C0C0>`; color de borde #808080 muy frecuente.
**Vinetas/simbolos**: ● ■ □ ◆ ◇ ★ ☆ ♪ ・ ･ ※ ↓ y marcos `★★★ 最新情報 ★★★`, `◆◇◆ ... ◆◇◆`, `－ お　知　ら　せ －`, `++ WELCOME ++`.
**Secciones/widgets recurrentes**: contador (あなたは N 番目の訪問者です / キリ番), 最終更新 (Last update / 更新日), 最新情報/更新履歴 con `(MM.DD)` o `YYYY/MM/DD`, 掲示板 (BBS), リンク集, ランキング, ウェブリング, banners 88x31 / 200x40 / 468x60 (+ 128x40, 130x40), `New!`, ようこそ, プロフィール, "動作確認" (aviso de navegador), disclaimer de 無断転載禁止, mail link.
**Nav**: en columna izquierda con `●` (Abe) o fila horizontal con `|` / ` - ` (waux, Yahoo, kn1); etiquetas cortas kanji: トップ, プロフィール, 日記, 掲示板, リンク, 更新履歴, 管理者.

## Reglas concretas para DESIGN.md
1. Layout: una `<table>`-like (grid) centrada de 760-820px max; menu izquierdo ~142px (18% en frame) con fondo #F0F0FF; contenido a la derecha. Sin responsive fino: en movil colapsar a 1 columna.
2. Tipografia: base 16px, `font-family: "MS PGothic","ＭＳ Ｐゴシック","IPAPGothic","DotGothic16",monospace`; texto chico 12-13px; line-height 1.5; sin antialiasing suave de titulos (usar bitmap font solo en acentos PC-98).
3. Color base: fondo blanco o color solido saturado + tile pequeno repetido; texto #000; links #0000EE subrayados, visited #800080, active #FF0000. Rosa #FF00CC o naranja #FF8C00 como unico acento.
4. Cajas: `border: 1px solid #808080`, padding 6-10px, fondos pasteles planos (#FFCACA, #BFFFFF, #FFD8A4); `hr` de 1px #C0C0C0 al 80%.
5. Titulos de seccion: barra de color solido con texto blanco/negro, o marco de simbolos (`★ 最新情報 ★`, `◆◇◆ ... ◆◇◆`); no sombras ni radius.
6. Secciones obligatorias: ようこそ, 最新情報/更新履歴 con fechas `(MM.DD)` + New!, プロフィール, リンク集, 掲示板, contador de visitas con digitos, `Last update`, `リンクフリー`/無断転載禁止, mail.
7. Widgets: banner 88x31 propio y 200x40, contador (img digits o monoespaciado), marquee/blink solo como acento (respetar prefers-reduced-motion).
8. Vinetas: `●`, `■`, `・` en listas; menu con `●` + etiqueta kanji corta.
9. Capa PC-98: marcos duros 1px/2px (blanco sobre azul/negro), paleta 8 colores digitales (#000, #00F, #F00, #F0F, #0F0, #0FF, #FF0, #FFF), dither checker, radius 0, wipes escalonados; reservar para hero/terminal, no para todo el cuerpo.
10. Aviso de compatibilidad estilo `動作確認 ... 1024x768` y footer con año de apertura (`開設 2006年1月13日`) como firma de autenticidad.
