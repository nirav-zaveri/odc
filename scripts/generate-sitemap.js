// Generates dist/sitemap.xml after the Vite build.
//
// Static routes are listed here; blog URLs are derived from the Markdown files
// in src/content/blog so a new post added through the CMS appears in the sitemap
// automatically on the next deploy. Drafts are excluded.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://oracledental.in'

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'yearly' },
  { path: '/testimonials', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'yearly' },
]

function readPosts() {
  const dir = join(root, 'src/content/blog')
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const raw = readFileSync(join(dir, file), 'utf8')
      const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ''
      const field = (name) => {
        const m = fm.match(new RegExp(`^${name}:\\s*(.*)$`, 'm'))
        return m ? m[1].trim().replace(/^["']|["']$/g, '') : ''
      }
      return {
        slug: field('slug') || file.replace(/\.md$/, ''),
        date: field('date'),
        draft: field('draft') === 'true',
      }
    })
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

const posts = readPosts()
const today = new Date().toISOString().slice(0, 10)

const urls = [
  ...staticRoutes.map((r) => ({ loc: SITE + r.path, lastmod: today, ...r })),
  ...posts.map((p) => ({
    loc: `${SITE}/blog/${p.slug}`,
    lastmod: p.date || today,
    changefreq: 'yearly',
    priority: '0.6',
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(join(root, 'dist/sitemap.xml'), xml)
console.log(`sitemap.xml: ${urls.length} URLs (${posts.length} blog posts)`)
