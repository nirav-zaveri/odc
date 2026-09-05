import { ShieldCheck, HeartHandshake, GraduationCap, Users2, MessageCircle, Phone } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SmartImage from '../components/SmartImage'
import { clinic, doctor } from '../data/site'
import { photos } from '../data/images'

const values = [
  {
    icon: HeartHandshake,
    title: 'Patient-First, Always',
    description: "Every recommendation starts with what's genuinely best for you — never what's easiest for us.",
  },
  {
    icon: ShieldCheck,
    title: 'Hygiene Without Compromise',
    description: 'Strict sterilization and single-use protocols on every instrument, for every patient, every time.',
  },
  {
    icon: GraduationCap,
    title: 'Continual Learning',
    description: "We stay current with modern techniques so your care reflects the best of today's dentistry.",
  },
  {
    icon: Users2,
    title: 'Rooted in Navsari',
    description: 'A local clinic that knows its patients by name, built for the long term — not just one visit.',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Dr. Konika Chhajed Zaveri"
        description="Meet Dr. Konika Chhajed Zaveri, BDS, founder of Oracle Dental Care, and learn about our approach to gentle, multi-speciality dental care in Navsari."
        path="/about"
      />
      <PageHero
        eyebrow="About Us"
        title="Care that feels personal, backed by real expertise"
        description="Get to know the clinic — and the person — behind Oracle Dental Care."
      />

      {/* Doctor bio */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <Reveal direction="right" className="lg:sticky lg:top-28">
            {/* Contained portrait card on a brand-tinted panel. The photo sets
                its own aspect ratio (see doctorPortrait in src/data/images.js),
                so this stays correct if a differently-shaped one replaces it. */}
            <div className="mx-auto max-w-sm overflow-hidden rounded-[2rem] bg-gradient-to-b from-primary-50 to-secondary-50 p-3 shadow-soft-lg">
              <SmartImage
                photo={photos.doctorPortrait}
                className="w-full rounded-[1.5rem] bg-white object-cover"
                loading="eager"
              />
              <div className="px-3 pb-2 pt-4 text-center">
                <p className="font-display font-bold text-ink-900">{doctor.name}</p>
                <p className="mt-0.5 text-sm text-primary-700">{doctor.role}</p>
              </div>
            </div>
          </Reveal>
          <Reveal direction="left">
            <span className="eyebrow">Founder & Chief Dental Surgeon</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {doctor.name}
            </h2>
            <p className="mt-1 font-semibold text-primary-700">
              {doctor.credentials} &middot; {doctor.registration}
            </p>
            <div className="mt-6 space-y-4 text-lg text-ink-600">
              {doctor.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {doctor.highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl bg-primary-50 p-4 text-sm font-medium text-primary-900"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Approach"
            title="What guides every treatment decision"
            description="Four principles that shape how we practice dentistry, every single day."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08} className="card p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display font-bold text-ink-900">{value.title}</h3>
                <p className="mt-2 text-sm text-ink-500">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NOTE: A "Our Team" section was removed deliberately — the clinic is
          currently a single-dentist practice, and a lone team card looks worse
          than no section at all. Re-add when there are associates to feature;
          the `team` array in src/data/site.js is still there and ready. */}

      {/* Gallery */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Inside Oracle Dental Care" title="A calm, modern clinic environment" />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {/* The clinic's own photo leads; the other three are still stock
                standing in for the real premises — replace them as real photos
                of the reception, surgery and consultation come in. */}
            {[photos.doctorInClinic, photos.clinicReception, photos.treatmentRoom, photos.clinicConsult].map(
              (photo, i) => (
                <Reveal key={photo.alt} delay={i * 0.06} className="overflow-hidden rounded-2xl">
                  <SmartImage photo={photo} className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105" />
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-gradient py-20">
        <div className="absolute inset-0 bg-brand-radial" />
        <div className="container-page relative text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Come and see us in person
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
              We'd love to welcome you to {clinic.name}. Reach out any time.
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
