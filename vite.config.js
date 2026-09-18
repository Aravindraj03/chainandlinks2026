import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
  },
  ssr: {
    // Bundle react-helmet-async (a CJS package) into the SSR output so its
    // named exports interop correctly when the prerender script runs the
    // bundle directly with Node's ESM loader.
    noExternal: ['react-helmet-async'],
  },
})