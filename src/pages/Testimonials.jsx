import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, MessageCircle, ExternalLink } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import TestimonialCard from '../components/TestimonialCard'
import { clinic, testimonials, testimonialCategories } from '../data/site'

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('All')

  // Only show category chips that actually have reviews behind them.
  const categories = useMemo(
    () => testimonialCategories.filter((c) => testimonials.some((t) => t.category === c)),
    [],
  )

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return testimonials
    return testimonials.filter((t) => t.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <SEO
        title="Patient Reviews"
        description={`Read ${testimonials.length}+ five-star patient reviews for Oracle Dental Care in Navsari — implants, root canals, braces, and gentle family dentistry by Dr. Konika Chhajed Zaveri.`}
        path="/testimonials"
      />
      <PageHero
        eyebrow="Patient Reviews"
        title="What our patients actually say"
        description={`Every review below is a real, verified five-star review from our Google Business Profile — in our patients' own words.`}
      />

      {/* Summary strip — every figure here is countable from the reviews below,
          so nothing is claimed that a visitor can't verify on Google. */}
      <section className="border-b border-ink-100 bg-white py-10">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            <Reveal>
              <div className="flex items-center justify-center gap-1 text-secondary-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-2 text-sm text-ink-500">Every review on this page is 5-star</p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="font-display text-3xl font-extrabold text-ink-900">
                {testimonials.length}
              </p>
              <p className="mt-2 text-sm text-ink-500">Five-star reviews</p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="font-display text-3xl font-extrabold text-ink-900">{categories.length}</p>
              <p className="mt-2 text-sm text-ink-500">Treatment areas covered</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          {/* Category filter */}
          <Reveal className="mb-12 flex flex-wrap justify-center gap-2">
            {['All', ...categories].map((category) => {
              const count =
                category === 'All'
                  ? testimonials.length
                  : testimonials.filter((t) => t.category === category).length
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    activeCategory === category
                      ? 'bg-primary-700 text-white'
                      : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                  }`}
                >
                  {category}
                  <span
                    className={`ml-2 text-xs ${
                      activeCategory === category ? 'text-primary-200' : 'text-primary-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </Reveal>

          {/* Masonry-style wall — CSS columns keep varied-length quotes tight */}
          <motion.div layout className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
            {filtered.map((testimonial, i) => (
              <motion.div
                key={testimonial.name + testimonial.quote.slice(0, 24)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.04 }}
                className="break-inside-avoid"
              >
                <TestimonialCard testimonial={testimonial} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-gradient py-20">
        <div className="absolute inset-0 bg-brand-radial" />
        <div className="container-page relative text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Ready to be our next happy patient?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
              Book a visit in under a minute — or read every review for yourself on Google.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${clinic.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent w-full sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" /> Book on WhatsApp
              </a>
              <a
                href={clinic.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light w-full sm:w-auto"
              >
                <ExternalLink className="h-5 w-5" /> View on Google
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
