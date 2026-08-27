import { parseFrontmatter } from './frontmatter'

// Eagerly load every markdown file the CMS (or a developer) drops into
// src/content/blog/ — no manual registration needed for a new post to show up.
const modules = import.meta.glob('../content/blog/*.md', { eager: true, query: '?raw', import: 'default' })

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

const allPosts = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    return {
      slug: data.slug || slugFromPath(path),
      title: data.title || 'Untitled post',
      date: data.date || null,
      excerpt: data.excerpt || '',
      cover: data.cover || null,
      tags: Array.isArray(data.tags) ? data.tags : [],
      author: data.author || 'Oracle Dental Care',
      draft: data.draft === true || data.draft === 'true',
      content,
    }
  })
  .filter((post) => !post.draft)
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getAllPosts() {
  return allPosts
}

export function getPostBySlug(slug) {
  return allPosts.find((post) => post.slug === slug)
}

export function getAllTags() {
  const tags = new Set()
  allPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)))
  return Array.from(tags).sort()
}

export function formatDate(dateString) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
