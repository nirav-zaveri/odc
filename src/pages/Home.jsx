import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MessageCircle,
  Phone,
  ShieldCheck,
  Award,
  Star,
  Sparkles,
  Anchor,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import BlogCard from '../components/BlogCard'
import FaqAccordion from '../components/FaqAccordion'
import StatCounter from '../components/StatCounter'
import SmartImage from '../components/SmartImage'
import ToothMark from '../components/ToothMark'
import ImplantHighlight from '../components/ImplantHighlight'
import LocalBusinessSchema from '../components/LocalBusinessSchema'
import { clinic, doctor, services, stats, testimonials, featuredTestimonials, faqs } from '../data/site'
import { photos } from '../data/images'
import { getAllPosts } from '../utils/blog'

// Only claims that can be independently verified: the council registration is
// on the clinic's letterhead, the years figure derives from the real founding
// date, and the review count is checkable on the Google listing.
const trustBadges = [
  { icon: ShieldCheck, label: 'Gujarat Dental Council Registered' },
  { icon: Award, label: `Serving Navsari since ${new Date(clinic.foundedDate).getFullYear()}` },
  // "+" rather than an exact count: these are the reviews transcribed onto the
  // site, and the clinic's Google listing has more.
  { icon: Star, label: `${testimonials.length}+ Five-Star Google Reviews` },
]

// These four are drawn from what patients actually praise most often in the
// clinic's Google reviews — not generic clinic marketing claims.
const whyChooseUs = [
  {
    icon: HeartHandshake,
    title: 'Genuinely Painless',
    description:
      'The thing our patients mention most: treatment that was far more comfortable than they expected — extractions, root canals, and implants included.',
  },
  {
    icon: ShieldCheck,
    title: 'Honest Advice',
    description:
      'We recommend what you actually need, and explain why. No unnecessary treatments, no pressure — just a clear plan and fair pricing.',
  },
  {
    icon: Anchor,
    title: 'Implant Expertise',
    description:
      'A dedicated implant and full-mouth rehabilitation focus, with digital planning for predictable, natural-feeling results.',
  },
  {
    icon: Sparkles,
    title: 'Modern & Spotless',
    description:
      'Digital X-rays, rotary endodontics, and strict single-use sterilization protocols in a calm, immaculately clean clinic.',
  },
]

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3)

  return (
    <>
      <SEO
        description="Oracle Dental Care — multi-speciality dental clinic & implant centre in Navsari. Dr. Konika Chhajed Zaveri (BDS) offers gentle, painless dental care for the whole family. Book on WhatsApp."
        path="/"
      />
      <LocalBusinessSchema />

      {/* ---------------------------------------------------------------- HERO */}
      <section className="relative overflow-hidden bg-brand-gradient">
        <div className="absolute inset-0 bg-brand-radial" />
        <motion.div
          className="absolute -right-16 top-10 text-white/10"
          animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ToothMark className="h-64 w-64 sm:h-80 sm:w-80" />
        </motion.div>
        <motion.div
          className="absolute -left-10 bottom-0 text-white/5"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <ToothMark className="h-48 w-48 sm:h-64 sm:w-64" />
        </motion.div>

        <div className="container-page relative grid grid-cols-1 items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:py-32">
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-inset ring-white/20 backdrop-blur-sm sm:text-sm"
            >
              <Sparkles className="h-3.5 w-3.5" /> {clinic.taglineLong} · Navsari
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Your family's oral health journey, <span className="text-secondary-200">guided with care</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mx-auto mt-6 max-w-xl text-lg text-primary-100 lg:mx-0"
            >
              Advanced dentistry with a gentle touch, led by Dr. Konika Chhajed Zaveri — right in the heart of
              Navsari.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <a
                href={`https://wa.me/${clinic.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent w-full sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" /> Book on WhatsApp
              </a>
              <a href={`tel:${clinic.phoneDial}`} className="btn-ghost-light w-full sm:w-auto">
                <Phone className="h-5 w-5" /> {clinic.phone}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-white/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft-lg ring-1 ring-white/20">
              <SmartImage photo={photos.heroClinic} className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]" loading="eager" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-soft-lg sm:flex sm:items-center sm:gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success-50 text-success">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-ink-900">Sterile & Safe</p>
                <p className="text-xs text-ink-400">Hygiene-first protocols</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust strip */}
        <div className="relative border-t border-white/10 bg-primary-950/30 py-5 backdrop-blur-sm">
          <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm font-semibold text-white">
                <badge.icon className="h-5 w-5 text-secondary-300" />
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- SERVICES */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Treat"
            title="Comprehensive dental care, under one roof"
            description="From routine cleanings to advanced treatments, we provide complete oral health solutions for your entire family."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link to="/services" className="btn-outline">
              View All Treatments <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- IMPLANT CENTRE */}
      <ImplantHighlight />

      {/* ---------------------------------------------------------------- WHY CHOOSE US + STATS */}
      <section className="relative overflow-hidden bg-primary-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-brand-radial opacity-60" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Why Oracle Dental Care"
            title="Trusted care, backed by modern dentistry"
            description="Experience the perfect blend of advanced technology, personalized care, and community trust."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-secondary-300 ring-1 ring-inset ring-white/10">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-primary-200">{item.description}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-14 sm:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- DOCTOR PREVIEW */}
      <section className="py-20 sm:py-28">
        <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right" className="relative mx-auto w-full max-w-sm">
            {/* Same portrait card as the About page — the photo sets its own aspect. */}
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-primary-50 to-secondary-50 p-3 shadow-soft-lg">
              <SmartImage
                photo={photos.doctorPortrait}
                className="w-full rounded-[1.5rem] bg-white object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="left">
            <span className="eyebrow">Meet Your Dentist</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {doctor.name}
            </h2>
            <p className="mt-1 font-semibold text-primary-700">{doctor.credentials}</p>
            <p className="mt-5 text-lg text-ink-500">{doctor.bio[0]}</p>
            <ul className="mt-6 space-y-3">
              {doctor.highlights.map((point) => (
                <li key={point} className="flex items-start gap-3 text-ink-600">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-secondary-500" />
                  {point}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary mt-8">
              More About Dr. Konika <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- TESTIMONIALS */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Patient Reviews"
            title="What our patients say"
            description="Real, verified five-star reviews from families across Navsari — and from patients who travelled a lot further."
          />
          <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
            {featuredTestimonials.map((t, i) => (
              <div key={t.name} className="break-inside-avoid">
                <TestimonialCard testimonial={t} index={i} />
              </div>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link to="/testimonials" className="btn-outline">
              Read more patient reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- BLOG PREVIEW */}
      {latestPosts.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="container-page">
            <SectionHeading
              eyebrow="From the Blog"
              title="Dental knowledge, straight from Dr. Konika"
              description="Tips, myth-busting, and updates from our clinic — to help you make confident decisions about your smile."
            />
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {latestPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
            <Reveal className="mt-12 text-center">
              <Link to="/blog" className="btn-outline">
                Read the Blog <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------------------------------------------------------------- FAQ */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <SectionHeading
              align="left"
              eyebrow="Good to Know"
              title="Frequently asked questions"
              description="Can't find what you're looking for? Reach out to us directly."
            />
          </div>
          <Reveal className="lg:col-span-2">
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- FINAL CTA */}
      <section className="relative overflow-hidden bg-brand-gradient py-20 sm:py-24">
        <div className="absolute inset-0 bg-brand-radial" />
        <div className="container-page relative text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Ready to feel great about your smile again?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
              Book your visit in under a minute — no forms, no hassle. We'll take it from there.
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
              <a href={`tel:${clinic.phoneDial}`} className="btn-ghost-light w-full sm:w-auto">
                <Phone className="h-5 w-5" /> Call {clinic.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
