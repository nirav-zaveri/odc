import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar } from 'lucide-react'
import { formatDate } from '../utils/blog'

export default function BlogCard({ post, index = 0, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={`group card flex flex-col overflow-hidden ${featured ? 'md:col-span-2 md:flex-row' : ''}`}
    >
      <Link
        to={`/blog/${post.slug}`}
        className={`relative block overflow-hidden bg-primary-50 ${featured ? 'md:w-1/2 aspect-[16/10] md:aspect-auto' : 'aspect-[16/10]'}`}
      >
        {post.cover ? (
          <img
            src={post.cover}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-gradient text-white">
            <span className="font-display text-sm font-semibold opacity-80">Oracle Dental Care</span>
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="rounded-full bg-secondary-50 px-3 py-1 text-xs font-semibold text-secondary-700">
                {tag}
              </span>
            ))}
          </div>
        )}
        <Link to={`/blog/${post.slug}`}>
          <h3 className={`font-display font-bold text-ink-900 group-hover:text-primary-700 transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
            {post.title}
          </h3>
        </Link>
        <p className="line-clamp-2 flex-1 text-sm text-ink-500">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-2 text-xs text-ink-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.date)}
          </span>
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-primary-700"
          >
            Read more <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
