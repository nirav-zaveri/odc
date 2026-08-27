import { useParams, Link, Navigate } from 'react-router-dom'
import { Calendar, User, ArrowLeft, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import MarkdownContent from '../components/MarkdownContent'
import BlogCard from '../components/BlogCard'
import { getAllPosts, getPostBySlug, formatDate } from '../utils/blog'
import { clinic } from '../data/site'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3)

  return (
    <>
      <SEO title={post.title} description={post.excerpt} image={post.cover} path={`/blog/${post.slug}`} />

      <article>
        <header className="relative overflow-hidden bg-brand-gradient py-20 sm:py-24">
          <div className="absolute inset-0 bg-brand-radial" />
          <div className="container-page relative max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-100 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-inset ring-white/20">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-100">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" /> {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> {formatDate(post.date)}
              </span>
            </div>
          </div>
        </header>

        <div className="container-page -mt-10 max-w-3xl pb-6 sm:-mt-14">
          {post.cover && (
            <Reveal className="overflow-hidden rounded-2xl shadow-soft-lg">
              <img src={post.cover} alt={post.title} className="aspect-[16/9] w-full object-cover" />
            </Reveal>
          )}
        </div>

        <div className="container-page max-w-3xl py-12">
          <Reveal>
            <MarkdownContent content={post.content} />
          </Reveal>

          <Reveal className="mt-12 rounded-2xl bg-primary-50 p-6 sm:p-8">
            <p className="font-display font-bold text-ink-900">Have a question about this?</p>
            <p className="mt-1 text-sm text-ink-500">
              Message us on WhatsApp — Dr. Chhajed's team is happy to help.
            </p>
            <a
              href={`https://wa.me/${clinic.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent mt-4"
            >
              <MessageCircle className="h-4 w-4" /> Chat With Us
            </a>
          </Reveal>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="border-t border-ink-100 bg-surface py-16 sm:py-20">
          <div className="container-page">
            <h2 className="font-display text-2xl font-bold text-ink-900">Related reading</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
