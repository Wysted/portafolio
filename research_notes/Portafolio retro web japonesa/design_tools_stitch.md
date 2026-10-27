# Design tools for a retro-Japanese portfolio redesign: Google Stitch and alternatives (state as of Oct 2026)

Research caveat: most sources are secondary blogs/vendor content. Official Stitch docs pages (stitch.withgoogle.com/docs) returned only their titles when fetched (JS-rendered), so no official doc text was verified. Several quota/model claims conflict (flagged below). No hands-on test of Stitch with a retro/brutalist/Japanese-dense prompt was found.

## 1. What Stitch is in 2026, models, features, pricing/quotas, MCP, what changed

### Takeaway
Stitch is a free Google Labs AI UI design tool (launched May 2025 at I/O as Galileo AI's successor), overhauled in March 2026 into an infinite-canvas "vibe design" agent with DESIGN.md, voice, prototypes, MCP server and SDK. Quotas are credit-based and free as of April 2026; models are reported as Gemini 3-series but this comes only from third-party blogs.

### Cited Findings
- Official March 18, 2026 post (Google Labs PM Rustin Banks): new AI-native infinite canvas accepting images, text or code as context; design agent that reasons across project history; agent manager for parallel ideas; interactive prototypes with a "Play" button and auto-generated next screens; voice interaction (live critiques, edits); design-system extraction from any URL; DESIGN.md as agent-friendly markdown to import/export design rules; Stitch MCP server and SDK "recently released"; skills repo; export to AI Studio and Antigravity. The post does not state models, pricing or limits. — [Google blog](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/)
- Origin: launched May 2025 at Google I/O as the next generation of Galileo AI, powered by Gemini. — [TechCrunch](https://techcrunch.com/2025/05/20/google-launches-stitch-an-ai-powered-tool-to-help-design-apps) (as surfaced in search; URL title only, not fetched); [Superdesign review snippet](https://www.superdesign.dev/blog/google-stitch-review) (competitor, biased)
- Models: Banani reports Gemini 3 Flash, Gemini 3.1 Pro and Nano Banana Pro (April 2026). A different Banani review says "latest Gemini 3.1 Pro and Flash". Earlier (2025) era: Standard = Gemini 2.5 Flash, Experimental = 2.5 Pro. Not confirmed by Google. — [Banani credits](https://www.banani.co/blog/google-stitch-pricing-and-credits); [Banani review](https://www.banani.co/blog/google-stitch-ai-review)
- Quotas, new system: from ~April 2026 (Stitch 2.0), daily credits: 400 design + 15 redesign per day (~12,450/mo), reset midnight UTC; simple prompt ~3 credits, multi-screen flows double digits; no paid plans as of April 2026, credits cannot be purchased; author's quirk: redesign drew from standard credits. Page byline Apr 20, 2026 but metadata says Oct 22, 2026 (conflict; treat as possibly updated). — [Banani credits](https://www.banani.co/blog/google-stitch-pricing-and-credits)
- Quotas, old system (2025 to early 2026): 350 Standard + 200 Experimental generations/month (Experimental raised from 100 to 200 by a Google forum moderator; some pages still say 50). Several 2026 blogs still repeat 350/50 or 350/month, so they are stale. — [Banani credits](https://www.banani.co/blog/google-stitch-pricing-and-credits); [Redwerk](https://redwerk.com/blog/google-stitch-ai-vibe-design-tool/); [Pasquale Pillitteri](https://pasqualepillitteri.it/en/news/647/google-stitch-mcp-export-claude-code-design-to-code)
- Pricing outlook: one guide says free with no paid tiers as of March 2026; another says paid plans "expected around Q4 2026" (speculation). — [NxCode search snippet](https://www.nxcode.io/ja/resources/news/google-stitch-pricing-plans-complete-guide-2026)
- Google I/O 2026 (May 19-20): only passing mentions found: Stitch (and Pomelli) got updates for website design and real-time layout steering; a "Stitch Agent" streaming work onto the canvas and multi-user editing are reported by secondary blogs; details unverified. — [I/O recap (Medium)](https://medium.com/@codebykrishna/everything-google-announced-in-ai-at-i-o-2026-gemini-agents-search-youtube-and-more-a8c2aac5c29a); [Kingy AI](https://kingy.ai/news/google-just-rewrote-the-rules-of-ui-design-inside-the-2026-stitch-overhaul/)
- MCP in practice (Japanese hands-on, Classmethod): remote MCP server with API key or OAuth; `claude mcp add` connected and exposed 12 tools; Claude Code could fetch screen details (layout, design features). Seven community/official skills (Stitch Design, Enhance Prompt, Design MD, React Components...) installed; Enhance Prompt expands a one-liner into a detailed design-system-based prompt. — [Classmethod](https://dev.classmethod.jp/articles/new-stitch-ai-design/)
- Older setup path used a `npx` proxy (`@_davideast/stitch-mcp`) plus gcloud auth because Claude Code did not natively support Google's auth for the official endpoint; community wrappers exist. May be superseded by the API-key remote MCP above. — [Pillitteri](https://pasqualepillitteri.it/en/news/647/google-stitch-mcp-export-claude-code-design-to-code); [search results listing](https://glama.ai/mcp/servers/huyy6ibnmw)
- Caveats from hands-on (Classmethod): designs used for AI training by default (opt out in settings); annotation/AI editing regenerates the whole design so unrelated parts may shift; MCP API key stored in plaintext in `~/.claude.json`; skills carry "Med Risk" ratings. — [Classmethod](https://dev.classmethod.jp/articles/new-stitch-ai-design/)
- Contradiction: mcp.directory (May 2026) says Stitch is "not MCP-accessible", which conflicts with Google's own post and the hands-on report; that source is outdated/wrong on this point. — [mcp.directory](https://mcp.directory/blog/claude-design-vs-stitch-vs-v0-vs-lovable-vs-figma-make-2026) vs [Google blog](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/)

### Inferences
- The user's environment already exposes Stitch MCP tools (create_project, generate_screen_from_text, create_design_system_from_design_md...), so the connection cost is zero; free credits (400/day) are ample for a one-page portfolio.
- Quota figures older than April 2026 should be discarded; verify in Profile -> Stitch Settings.

### Gaps
- No official Stitch docs/changelog text retrieved; exact models and Oct 2026 pricing unconfirmed.
- No reliable detail on I/O 2026 Stitch changes.

## 2. Stitch on niche / anti-modern aesthetics and Japanese text

### Takeaway
Reviewers consistently call Stitch output generic and drifting toward modern-UI defaults; no one has published a retro/brutalist/PC-98 Stitch test. Japanese text rendering appears fine in one hands-on. Steering would rely on DESIGN.md/design-system constraints.

### Cited Findings
- "Functional, usable designs, not premium ones"; generic buttons/cards, lacks unique brand identity. — [Banani review](https://www.banani.co/blog/google-stitch-ai-review)
- LLM-based outputs "drift toward generic results rather than distinctive brand expression"; quality ranges "fine for a prototype" to "I wouldn't show this to a client". — [Redwerk](https://redwerk.com/blog/google-stitch-ai-vibe-design-tool/)
- Another review found the Flash-model output "a bit too generic"; a secondhand report ranks Stitch last in a same-prompt AI-tool comparison, compared to a free WordPress template (unverified). — [search results, Unite.ai/others](https://www.unite.ai/google-stitch-review/)
- Style presets exist (e.g. Bauhaus, Neon Tokyo, Candy) and a "Vibrant" theme switch; Bauhaus is the nearest to brutalist, untested. — [Banani review search summary](https://www.banani.co/blog/google-stitch-ai-review); [Classmethod](https://dev.classmethod.jp/articles/new-stitch-ai-design/)
- Japanese: a full Japanese prompt for a bakery page was reproduced "faithfully" with no reported rendering problems; DESIGN.md sample "Japanese Soft Minimalism". This is modern minimalism, not retro. — [Classmethod](https://dev.classmethod.jp/articles/new-stitch-ai-design/)
- Community skills exist that write DESIGN.md with an explicit "vibe" (Minimalist/Vibrant/Brutalist) and "anti-generic" rules; unverified for quality. — [skills.sh stitch-design-taste](https://www.skills.sh/leonxlnx/taste-skill/stitch-design-taste)
- Stitch limitations: no animation/micro-interactions, DESIGN.md "rudimentary", accessibility inconsistent. — [Redwerk](https://redwerk.com/blog/google-stitch-ai-vibe-design-tool/)
- Reference material for the target style: daisyUI trend page on Web 1.0 "webcore" (default type, blue underlined links, tiled backgrounds, bevel buttons, GIFs, visitor counters) and a structured PC-98 JSON prompt (640x480, limited palette, 16-color, CRT texture) for game UI. Context article: Japanese sites dense/colourful, likely due to early mobile internet standards. — [daisyUI](https://trends.daisyui.com/trend/web-1-0-webcore/); [YouMind PC-98 prompt](https://youmind.com/prompts/pc98-gothic-visual-novel-18948); [Randomwire](https://randomwire.com/japanese-web-design-redux/)

### Inferences
- Stitch's strengths (modern app/landing UIs, rounded cards, Material-ish tokens) are the opposite of table layouts, 12px MS Gothic, hard 1px borders and no radius. Expect to fight it; a DESIGN.md with explicit "no border-radius, no shadows, no gradients, 12px monospace/MS Gothic, 640-800px fixed width, table layout" rules is the best lever. Whether Stitch honors that is untested.
- Pixel/bitmap fonts and dithering are probably beyond what a screen generator will render faithfully.

### Gaps
- No example of Stitch generating retro/brutalist/PC-98 output; no evidence on how it handles MS Gothic or dense small Japanese text.

## 3. Stitch code export quality (HTML + Tailwind) for Astro + Tailwind v4

### Takeaway
Export is HTML with inline Tailwind (config in-page, CDN-style) plus screenshot and DESIGN.md; visually faithful but described as "chaos code" and needing cleanup. Conversion skills exist for React, none found for Astro.

### Cited Findings
- ZIP export contains `code.html`, `DESIGN.md`, `screen.png`; AI Studio export gives Tailwind + JS preview. — [Classmethod](https://dev.classmethod.jp/articles/new-stitch-ai-design/)
- Google AI forum, Dec 27 2025: "wild usage of tailwind token" in generated HTML; reply (Jan 2, 2026): no hard rule for aligning HTML with design guides, edit exported code yourself. — [Google AI forum](https://discuss.ai.google.dev/t/awesome-design-chaos-code/113405)
- Exports are HTML with inline `tailwind.config` (colors, fonts, spacing), custom style blocks, Material Symbols icons; skills recommend mapping tokens to project tokens and splitting into components. Tool-fetch may fail on Google Cloud Storage URLs; use shell download. — [stitch-to-react skill](https://skillselion.com/skills/acedergren/agentic-tools/stitch-to-react)
- Redwerk calls export "clean HTML, CSS, Tailwind" but says not production-ready ("Short answer: no"). — [Redwerk](https://redwerk.com/blog/google-stitch-ai-vibe-design-tool/)
- Figma export has layers/auto layout but imports may be cluttered. — [Banani review](https://www.banani.co/blog/google-stitch-ai-review)
- No Astro-specific or Tailwind v4-specific Stitch guidance found. — [search results](https://skills.cat/skills/joaquimscosta/arkhe-claude-plugins/stitch-to-react)

### Inferences
- Stitch likely emits Tailwind v3 CDN-style inline config; porting to Tailwind v4 (`@theme` CSS tokens) is a manual/Claude Code translation. For this style (few components, plain HTML), the code is mostly a layout reference, not something to copy.

### Gaps
- No independent measurement of Stitch export vs Tailwind v4 compatibility.

## 4. Alternatives and fit

### Takeaway
All mainstream tools bias toward modern SaaS aesthetics. Claude Design (Anthropic Labs, April 2026) has the tightest Claude Code handoff; v0 is React/shadcn-shaped (poor fit for Astro/retro); Figma is useful for pixel-level hand layout but costs time. Direct coding with references is the most natural fit for this style.

### Cited Findings
- Positioning (May 2026, vendor-affiliated): Stitch = mockups for non-designers; v0 = shadcn/Tailwind/Next components; Lovable = full-stack React+Vite apps; Figma Make = frames in Figma format needing a design-to-code step. Prices: v0 Premium $20/mo, Lovable Pro $25/mo, Figma Pro $15/seat. — [mcp.directory](https://mcp.directory/blog/claude-design-vs-stitch-vs-v0-vs-lovable-vs-figma-make-2026)
- Claude Design: launched April 17, 2026 as Anthropic Labs research preview, Claude Opus 4.7; exports zip/PDF/PPTX/Canva/standalone HTML; "Send to Claude Code" handoff bundle with component spec, tokens, layout hierarchy, assets; reads linked codebase for design system; included in Pro/Max/Team/Enterprise; token-heavy (one session used >50% of a weekly Pro allotment); canvas not Figma-precise. — [claudefa.st](https://claudefa.st/blog/guide/mechanics/claude-design-handoff); [dev.to](https://dev.to/0xgosu/claude-design-anthropic-labs-first-step-into-visual-collaboration-38od)
- No independent hands-on of Claude Design's handoff fidelity found. — [readysolutions.ai](https://readysolutions.ai/blog/2026-04-24-claude-design-handoff-not-canvas/) (not fetched)
- Anthropic cookbook (Oct 2025): Claude defaults to conservative "AI slop" design without guidance; fix by specifying aesthetic direction, typography, color, citing inspirations, naming defaults to avoid. — [Anthropic cookbook](https://platform.claude.com/cookbook/coding-prompting-for-frontend-aesthetics)
- Taste comes from design system + skill + reference images; Claude cannot see own output, so use screenshot loop (SuperDesign is a competitor). — [SuperDesign](https://www.superdesign.dev/blog/claude-code-ui-design); [OpenDesigner](https://opendesigner.io/agents/claude-code-design)
- Stitch is Galileo AI's successor (Galileo not a separate product now). Uizard, Framer AI, Bolt: not researched in depth (see Gaps).

### Inferences
- v0 and Lovable are the wrong shape (React/shadcn/Next); Astro static + hand HTML wins nothing from them.
- Figma Make adds a layer for a site whose appeal is crude HTML.
- Claude Design is plausible for mood exploration, but it is Labs-tier, token-hungry and unproven for retro styles.

### Gaps
- Not researched: Framer AI, Bolt, Uizard, Figma Make hands-on for retro; pricing in Oct 2026 for any tool; Figma MCP details beyond tool names the user already has.

## 5. Recommended workflows reported in 2025-2026

### Takeaway
Common pattern: reference images + explicit aesthetic direction/DESIGN.md -> generate -> hand-tune; Stitch -> DESIGN.md/MCP -> Claude Code is the documented route, but reviewers add that Claude Code (not Stitch) must supply polish.

### Cited Findings
- Stitch -> MCP -> Claude Code flow: design (~5 min), export/MCP fetch (~2), build in Claude Code reading DESIGN.md tokens; author recommends design skills to keep quality; times are "developer reports". — [Pillitteri](https://pasqualepillitteri.it/en/news/647/google-stitch-mcp-export-claude-code-design-to-code)
- Redwerk workflow: explore in Stitch, refine in Figma, build with dev team. — [Redwerk](https://redwerk.com/blog/google-stitch-ai-vibe-design-tool/)
- Skill-based: Enhance Prompt -> Stitch Design -> Design MD -> React Components. — [Classmethod](https://dev.classmethod.jp/articles/new-stitch-ai-design/)
- Reference-driven: anti-slop skills (Hallmark, Impeccable) extract style from screenshots/URLs and lint for generic patterns. — [Medium Hallmark](https://medium.com/@slakhyani20/anti-ai-slop-design-skill-for-claude-code-cursor-and-codex-to-help-you-build-and-design-better-49543e0f5ff7); [AI Leverage](https://theaileverage.beehiiv.com/p/top-5-claude-code-front-end-skills)

### Inferences
- A lean workflow for this project: (1) collect 6-10 real screenshots of 1998-2005 Japanese personal sites + PC-98 screens (Wayback Machine, etc.); (2) write a DESIGN.md by hand; (3) optionally ask Stitch for 2-3 variants via MCP to explore layout composition only; (4) have Claude Code build the Astro page directly, with Playwright screenshot loop against references.

### Gaps
- No source describing an experienced dev doing exactly this for a retro niche.

## 6. Is a design tool necessary for an intentionally rudimentary style?

### Takeaway
Arguments both ways; no source addresses this directly, so this is reasoned from findings.

### Cited Findings
- Early-web aesthetics were hand-built without a coordinated look; the nostalgia is a later reconstruction. — [daisyUI](https://trends.daisyui.com/trend/web-1-0-webcore/)
- Generic-drift is the dominant criticism of AI design tools; Stitch lacks animation and finely controlled styling. — [Redwerk](https://redwerk.com/blog/google-stitch-ai-vibe-design-tool/)
- Regeneration side effects: edits regenerate the whole screen. — [Classmethod](https://dev.classmethod.jp/articles/new-stitch-ai-design/)

### Inferences
- For "no tool": table layouts and fixed-width text are faster to iterate in browser than in a design canvas; the HTML is the design; the real risk is authenticity (specific details like spacing, bevels, 16-color palettes, font stack), solved by references not tools; Stitch/Claude Design add generic assumptions you must undo.
- For "use a tool": a dense, many-element layout (marquee, counter, link lists, banners, window frames) benefits from seeing 2-3 compositions cheaply; Stitch is free (400 credits/day) and already connected via MCP, so the downside is low; DESIGN.md can capture tokens; Figma helps only if you want to draw pixel assets/banners (88x31 buttons) by hand.
- Best-fit compromise: moodboard + hand-written DESIGN.md first; use Stitch only as a time-boxed variant generator; treat its code as reference.

### Gaps
- No evidence on actual time savings for this niche.
