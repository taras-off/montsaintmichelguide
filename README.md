# montsaintmichelguide.com — TouringBee niche site (Astro)

Ultra-light static site (Astro → Cloudflare Pages). Pillar landing + cluster articles, sells the
TouringBee Mont-Saint-Michel audio guide via Bokun. Blue brand per TouringBee v5 design system.

## Run locally
```
npm install
npm run dev       # http://localhost:4321
npm run build     # -> ./dist  (static)
```

## Structure
- `src/config/site.ts` — ALL commercial/config values (Bokun UUID, product ID, price, rating, product URL,
  affiliate wpam_id, UTM). Edit here only. `ctaUrl()` builds product links with ?wpam_id=40 + UTM.
- `src/pages/index.astro` — the PILLAR landing (Hero, What Is, Preview, Why, What You'll Discover, How it works,
  Visiting/Map, Live tours, Reviews, Plan Your Visit = cluster links, FAQ, Final CTA). JSON-LD:
  TouristAttraction + Product + FAQPage + BreadcrumbList.
- `src/content/articles/*.md` — cluster articles (one example so far). Add one .md per article; slug = filename.
- `src/pages/articles/[slug].astro` — renders each article + audio preview + Bokun CTA.
- `src/layouts/Base.astro` — head/SEO, hreflang×8, inline CSS, Bokun loader.
- `src/styles/tokens.css` — design system (inlined).
- `public/robots.txt` — points to Astro sitemap.

## Deploy (Cloudflare Pages)
1. Push this folder to a new GitHub repo (e.g. `montsaintmichelguide`).
2. Cloudflare dashboard → Pages → Create → Connect to Git → pick the repo.
3. Build command: `npm run build` · Output dir: `dist` · Framework preset: Astro.
4. Add custom domain `montsaintmichelguide.com` (Cloudflare will guide DNS; easiest if the domain's
   nameservers are on Cloudflare).
5. Deploy. Sitemap will be at /sitemap-index.xml → submit in Google Search Console.

## TODO (next steps)
- Port all 30 article masters from Drive (MSM — Working) into `src/content/articles/`.
- Move the pillar's full long-form "Story" content in from the pillar master.
- Wire images from the WP media library (hero, inline) with ALT.
- Fact-check [VERIFY 2026] items before go-live.
- Add per-language builds (fr/de/es/it/pt/pl/ru) once translations approved (i18n routing).
- Live Guided Tours: add real GetYourGuide/Tiqets/Musement affiliate widgets.
- Replace seed reviews with real ones.
