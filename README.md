# Chain & Links — Real Estate Website

A React + Vite premium real-estate site for Chain & Links, covering the home page,
about page, projects listing, three individual project detail pages (Varam, Amber,
Ponmar), and a contact page. Built from an original React component architecture
inspired by the layout/spacing/interaction patterns you referenced — not copied
source code.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Routes

- `/` — Home (hero, about teaser, projects grid, testimonials, enquiry form)
- `/about` — About Us
- `/projects` — Projects listing (Varam, Amber, Ponmar)
- `/varam`, `/amber`, `/crossway-springs` — Project detail pages,
  all rendered from the single reusable `ProjectDetails` component + `src/data/projects.js`
- `/contact` — Contact page with enquiry form + info card

## Project detail page sections

Hero banner (price ribbons) → Enquire Now bar → About the project → Amenities
carousel → Why Choose [Project] → Highlights (stat cards) → Configuration
(villa/plot cards) → Proximity (accordion + map) → Layout (masterplan + lightbox
zoom) → Gallery (main + thumbnails + lightbox) → FAQ accordion → floating
WhatsApp/Call/Enquire buttons + a desktop vertical "Contact Us" tab.

## Images

No real photography is included. Every image slot renders a labeled placeholder
via `src/components/Common/PlaceholderImage.jsx`, using descriptive names that
match what real assets should be called (e.g. `varam-hero`, `varam-gallery-1`,
`ponmar-amenity-3`). Drop real photos into `src/assets/<project>/` and wire them
into `src/data/projects.js` — no component code needs to change.

## Editing project content

All project copy, pricing, amenities, configurations, proximity data, and FAQs
live in `src/data/projects.js`. Add a new project by adding a new key to the
`projects` object — the detail page, header dropdown, and footer links all pick
it up automatically. Update the route in `src/App.jsx` if you add a new slug.

If you add a new page route, also add it to `scripts/prerender.js`'s `routes`
array and to `public/sitemap.xml` so it gets prerendered and indexed.

## SEO

Every page's `<title>`, meta description/keywords, canonical URL, Open Graph,
Twitter card and JSON-LD structured data are managed centrally in
`src/components/SEO/SEO.jsx` (per-page and per-project copy) and
`src/components/Layout.jsx` (site-wide RealEstateAgent schema). Edit the
`pageSEO` / `projectSEO` objects in `SEO.jsx` to change any page's SEO copy.

`npm run build` does three things in order:
1. `vite build` — the normal client bundle.
2. `vite build --ssr src/entry-server.jsx` — a Node-runnable SSR bundle.
3. `node scripts/prerender.js` — renders every route in `scripts/prerender.js`
   to real static HTML (baking in that page's title/meta/JSON-LD) into
   `dist/<route>/index.html`, plus `dist/404.html` for unmatched routes.

This means search engines get a fully formed page for each route without
needing to execute JavaScript first — deploy the `dist/` folder as-is to any
static host (Netlify, Vercel static, S3 + CloudFront, GitHub Pages, etc.) with
directory-style routing. `npm run dev` is unaffected and still runs the normal
fast client-only dev server.

Update `public/robots.txt` / `public/sitemap.xml` if the production domain
ever changes from `chainandlinks.com`.

## Structure

```
src/
  components/   Header, Footer, Hero, Projects, Forms, About, Amenities,
                Highlights, Configuration, Proximity, Layout, Gallery, FAQ,
                FloatingActions, Testimonials, ProjectDetails, Common, SEO
  data/         projects.js (Varam, Amber, Crossway Springs)
  hooks/        useReveal.js (scroll-reveal animations)
  pages/        Home, About, Projects, ProjectDetailPage, Contact, NotFound
  styles/       global.css (tokens/reset/utilities), pages.css (page-level blocks)
  entry-server.jsx   SSR render entry used by scripts/prerender.js
scripts/
  prerender.js  Renders every route to static HTML with correct SEO tags baked in
```
