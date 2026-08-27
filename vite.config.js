import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Mirror of the production Content-Security-Policy in netlify.toml. Applied to
// `vite preview` so that `npm run build && npm run preview` reproduces the real
// policy locally and any violation shows up in the browser console here rather
// than after a deploy. Keep the two in sync.
const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://images.unsplash.com https://images.pexels.com",
  'frame-src https://www.google.com',
  "connect-src 'self'",
  'upgrade-insecure-requests',
].join('; ')

export default defineConfig({
  plugins: [react()],
  preview: {
    headers: {
      'Content-Security-Policy': CSP,
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
})
