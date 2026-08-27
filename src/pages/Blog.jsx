import { useMemo, useState } from 'react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import BlogCard from '../components/BlogCard'
import Reveal from '../components/Reveal'
import { getAllPosts, getAllTags } from '../utils/blog'

export default function Blog() {
  const posts = getAllPosts()
  const tags = getAllTags()
  const [activeTag, setActiveTag] = useState('All')

  const filteredPosts = useMemo(() => {
    if (activeTag === 'All') return posts
    return posts.filter((post) => post.tags.includes(activeTag))
  }, [posts, activeTag])

  return (
    <>
      <SEO
        title="Blog"
        description="Dental health tips, myth-busting, and clinic updates from Dr. Konika Chhajed Zaveri and the Oracle Dental Care team in Navsari."
        path="/blog"
      />
      <PageHero
        eyebrow="The Oracle Journal"
        title="Dental knowledge worth reading"
        description="Straightforward guidance from Dr. Chhajed — no jargon, no scare tactics, just what actually helps your smile."
      />

      <section className="py-20 sm:py-24">
        <div className="container-page">
          {/* Keeps the heading outline from jumping h1 -> h3 (post titles). */}
          <h2 className="sr-only">All blog posts</h2>
          {tags.length > 0 && (
            <Reveal className="mb-12 flex flex-wrap justify-center gap-2">
              {['All', ...tags].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    activeTag === tag
                      ? 'bg-primary-700 text-white'
                      : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </Reveal>
          )}

          {filteredPosts.length === 0 ? (
            <p className="text-center text-ink-500">No posts yet in this category — check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} featured={i === 0 && activeTag === 'All'} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
