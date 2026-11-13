# Celotti Tech Talent website

React web app for the Celotti Tech Talent (CTT) Phase 1 site, built by DevGriffins.

- React 18 + React Router 6, bundled with Vite
- Every page is prerendered to static HTML at build time, then hydrated in the browser, so search engines and link previews get full content without running JavaScript
- Output is a plain static site (`dist/`) that can go on any host

## Getting started

Requires Node 20 or newer.

```bash
npm install
npm run dev        # local development at http://localhost:5173
npm run build      # production build + prerender into dist/
npm run preview    # serve the production build locally
```

## Deploying

Upload the contents of `dist/` to the web root. Each route is a folder with its own `index.html`
(for example `dist/about/index.html` is served at `/about/`), so no server rewrites are needed.
`404.html` is the not-found page; the included `.htaccess` wires it up on Apache hosts.

## Settings: `src/site.config.js`

| Setting | What it does |
| --- | --- |
| `url` | Production domain. Used for canonical URLs, Open Graph tags, `sitemap.xml` and `robots.txt`. **Confirm before launch.** |
| `allowIndexing` | `false` on staging (adds `noindex` and a disallow-all `robots.txt`). **Set to `true` for launch.** |
| `trailingSlash` | Whether canonical URLs end in `/`. Keep `true` for folder-based static hosting. |
| `monthlyFee` | Monthly fee shown across Talent as a Service. |
| `accent.default` | `"blue"` or `"off"`: whether the blue accent is on by default. |
| `accent.showToggle` | Shows the "Blue accent" review switch on every page. Set to `false` once the client has decided. |

## Blue accent (third colour)

Yellow stays the primary accent. Electric Blue `#2B6EF5` (the proposed accent in the 2026 brand guidelines) is used as a small
third colour only: outline icons, the 01–04 counters, small tags, the "Where AI helps" label, step connectors and a soft glow
behind page heroes.

- All of it lives in `src/styles/accent.css` and only applies when `<html data-accent="blue">` is set.
- Elements opt in with the `ax-*` classes (`ax-tint`, `ax-text`, `ax-icon`, `ax-glow` ...).
- Reviewers can switch it with the toggle in the bottom-left corner, or with `?accent=off` / `?accent=blue` in the URL.
- To remove blue for good: set `accent.default` to `"off"` and `accent.showToggle` to `false`.
  (`public/og-image.png` also carries a faint blue glow and would need re-exporting.)

## SEO setup

- Per-page title, description, canonical URL, Open Graph and Twitter tags: edit them in `src/seo.js`
- Structured data (JSON-LD): Organization on every page, WebSite on the home page, BreadcrumbList on inner pages
- `sitemap.xml` and `robots.txt` are generated on every build (`scripts/prerender.mjs`)
- Clean URLs, one `<main>` landmark per layout, skip link, `lang="en"`
- Self-hosted Figtree (no third-party font requests), one small script chunk per page
- `public/og-image.png` (1200×630) is the share image

## Project structure

```
index.html                  HTML shell (head placeholders are filled in at build time)
scripts/prerender.mjs       writes static HTML for every route, plus 404, sitemap and robots
public/                     logos, favicon, share image, web manifest
src/
  site.config.js            site-wide settings (see above)
  seo.js                    page titles/descriptions and all <head> logic
  App.jsx                   picks the page for the current URL
  entry-client.jsx          browser entry (hydration)
  entry-server.jsx          prerender entry
  components/
    Layout.jsx              page shell: headers, footers, mobile menu, accent toggle
    HeaderDesktop.jsx, HeaderMobile.jsx, FooterDesktop.jsx, FooterMobile.jsx, MobileMenu.jsx
    AccentToggle.jsx
  lib/behaviors.js          menu, dropdowns, FAQ accordions, filters and form handling
  pages/
    index.js                route table (path -> page)
    Home.jsx, TalentAsAService.jsx, ...   one file per page
  styles/
    site.css                global styles and hover states
    accent.css              the optional blue accent + review toggle
```

### Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/talent-as-a-service` | Talent as a Service (pricing) |
| `/specialisms/ai` | AI Talent (template for Data, Deep Tech, Robotics) |
| `/how-we-work` | How We Work |
| `/case-studies` | Case Studies |
| `/insights`, `/insights/article` | Insights hub and article template |
| `/about` | About |
| `/join`, `/open-roles`, `/open-roles/role` | Talent community, open roles, job template |
| `/contact` | Book a consultation / contact |
| `/singapore`, `/australia`, `/united-states` | Market pages |
| `/privacy-policy` | Privacy Policy |

### How pages are built

Each page file exports two components, `Desktop` and `Mobile`. `Layout.jsx` renders both and CSS shows the one that fits
the screen (breakpoint 768px, `.v-desk` / `.v-mob`). To add a page: create the file in `src/pages/`, add it to
`src/pages/index.js` and give it a title and description in `src/seo.js`.

## Still to do

- Forms show a notice on submit; connect them to HubSpot / the ATS (`onSubmit` in `src/lib/behaviors.js`)
- Calendly embed, CMS content for Insights and Open Roles, and the items marked `CLIENT TO PROVIDE` / `TO CONFIRM`
- Template pages (`/insights/article`, `/open-roles/role`) are excluded from the sitemap until they have real content
- Each page currently carries separate desktop and mobile markup. Merging them into one responsive layout would halve
  the HTML size and is the main remaining performance improvement
