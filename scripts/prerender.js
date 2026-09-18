// Static prerender step: renders each route to real HTML (with the correct
// per-page <title>, meta description/keywords, canonical, Open Graph,
// Twitter card and JSON-LD already baked in) so search engines get a fully
// formed page without needing to execute JavaScript first.
//
// Run after `vite build` + `vite build --ssr src/entry-server.jsx`. See the
// "build" script in package.json.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')

const routes = [
  '/',
  '/about',
  '/projects',
  '/projects/varam',
  '/projects/amber',
  '/projects/crossway-springs',
  '/contact',
]

const SEO_TAG_PATTERN =
  /\s*<title>[\s\S]*?<\/title>|\s*<meta\s+name="description"[^>]*\/?>|\s*<meta\s+name="keywords"[^>]*\/?>|\s*<meta\s+name="robots"[^>]*\/?>|\s*<link\s+rel="canonical"[^>]*\/?>|\s*<meta\s+property="og:[^>]*\/?>|\s*<meta\s+name="twitter:[^>]*\/?>/g

async function main() {
  const { render } = await import(path.join(root, 'dist-ssr/entry-server.js'))
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
  // Strip the static fallback SEO tags from the template — each route
  // supplies its own via Helmet, and we don't want duplicates.
  const baseTemplate = template.replace(SEO_TAG_PATTERN, '')

  for (const url of routes) {
    const { html, helmetTags } = render(url)

    const finalHtml = baseTemplate
      .replace('</head>', `    ${helmetTags}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

    const outDir = url === '/' ? distDir : path.join(distDir, url)
    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(path.join(outDir, 'index.html'), finalHtml)
    console.log(`prerendered  ${url.padEnd(28)} -> ${path.relative(root, path.join(outDir, 'index.html'))}`)
  }

  // Most static hosts (Netlify, GitHub Pages, S3, etc.) automatically serve
  // 404.html for unmatched routes — prerender the NotFound page into it.
  const notFound = render('/__not-found__')
  const notFoundHtml = baseTemplate
    .replace('</head>', `    ${notFound.helmetTags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${notFound.html}</div>`)
  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml)
  console.log(`prerendered  404                          -> dist/404.html`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
