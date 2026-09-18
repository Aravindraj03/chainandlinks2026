import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

// Renders the app for a given URL to a static HTML string, and returns the
// Helmet tags (title/meta/JSON-LD) collected for that route so the
// prerender script can inject them into a per-route static index.html.
export function render(url) {
  const helmetContext = {}

  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>,
  )

  const { helmet } = helmetContext

  const helmetTags = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join('\n    ')

  return { html, helmetTags }
}
