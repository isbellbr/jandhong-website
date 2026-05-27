# J&Hong Construction — Website

Marketing website for [J&Hong Construction](https://jandhongconstruction.com) — a family-run roofing, siding, and exteriors company in Gambrills, MD, in business since 1998.

Built as a static site with [Astro 5](https://astro.build) and [Tailwind CSS 4](https://tailwindcss.com).

---

## What's in the box

```
├── astro.config.mjs        – Astro config (sitemap, Tailwind via Vite plugin)
├── site.config.ts          – Single source of truth for all business data (NAP, hours, etc.)
├── src/
│   ├── assets/photos/      – Source photos (auto-optimized at build to WebP/AVIF)
│   ├── components/         – Header, Footer, Hero, ServiceCard, QuoteForm, Lightbox, …
│   ├── content/            – Markdown for services, projects, testimonials
│   ├── content.config.ts   – Astro Content Collections schema
│   ├── layouts/            – BaseLayout (head, header, footer, sticky call button)
│   ├── pages/              – index, services, gallery, about, reviews, contact, 404
│   └── styles/global.css   – Design tokens + Tailwind base
├── public/                 – favicon, og-image, robots.txt, _headers, _redirects
├── netlify.toml            – Netlify build & header rules
├── vercel.json             – Vercel build & header rules
└── wrangler.toml           – Cloudflare Pages config
```

---

## Quick start

```bash
npm install
npm run dev          # localhost:4321
```

| Command          | Purpose                                                              |
| ---------------- | -------------------------------------------------------------------- |
| `npm run dev`    | Local dev server with HMR                                            |
| `npm run build`  | Type-check + production build → `./dist`                             |
| `npm run preview`| Preview the production build locally                                 |
| `npm run format` | Format with Prettier (Astro + Tailwind plugins)                      |

---

## Editing content

All copy and imagery is driven by a single config file plus Markdown — no CMS required.

- **Business info** (phone, address, hours, license #, service area): `site.config.ts`
- **Services**: `src/content/services/*.md` — five entries, each with a hero photo, summary, and bullet list
- **Gallery / projects**: `src/content/projects/*.md` — title, caption, category, photo
- **Testimonials**: `src/content/testimonials/*.md` — author, location, rating, source, body

Photos referenced from frontmatter live in `src/assets/photos/` and are automatically responsive-resized and converted to WebP at build time by Astro.

---

## Wiring up the contact form

The quote form on `/contact` submits to [Web3Forms](https://web3forms.com) — a free, no-backend form service.

1. Visit [web3forms.com](https://web3forms.com), enter the address Mr. Hong wants quote requests sent to (e.g. `estimates@jandhongconstruction.com`).
2. Copy the **access key** they email you.
3. Open `site.config.ts` and replace:
   ```ts
   web3formsKey: "REPLACE_WITH_WEB3FORMS_ACCESS_KEY",
   ```
   with the real key.
4. Optional: in the Web3Forms dashboard, lock the key to the production domain to block abuse.

The form already includes a hidden-field honeypot for spam.

---

## Deploying

The site is a fully static build — drop `dist/` on any host. Three first-class options:

### Cloudflare Pages (recommended — free, global CDN)

```bash
npm install -g wrangler
wrangler pages deploy dist --project-name=jandhong-construction
```

Or connect the GitHub repo in the Cloudflare dashboard and set:
- **Build command:** `npm run build`
- **Output directory:** `dist`

### Vercel

```bash
npm install -g vercel
vercel --prod
```

Settings auto-detected from `vercel.json`.

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

Settings auto-detected from `netlify.toml`.

---

## After deploy

1. **Verify Google Business Profile** — claim and update [the listing](https://www.google.com/search?q=J%26Hong+Construction+Gambrills+MD) so the JSON-LD `aggregateRating` matches reality.
2. **Submit sitemap** in Google Search Console: `https://jandhongconstruction.com/sitemap-index.xml`
3. **Add Plausible or Google Analytics** if desired — the `<head>` is in `src/layouts/BaseLayout.astro`.
4. **Wire the real email** in `site.config.ts` (`estimates@jandhongconstruction.com` is a placeholder).

---

## Brand quick-reference

| Token       | Value     | Use                              |
| ----------- | --------- | -------------------------------- |
| `--color-ink`     | `#0F1B2D` | Headings, dark sections, primary surface |
| `--color-paper`   | `#F7F4EE` | Page background (warm white)             |
| `--color-copper`  | `#B87333` | Primary CTA, accents                     |
| `--color-slate`   | `#3A4756` | Body text                                |
| `--color-leaf`    | `#2F6F4F` | Success messages                         |

Typography: **Fraunces Variable** (display serif) + **Inter Variable** (sans).

---

Built with care, like the roofs.
