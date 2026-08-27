import { MessageCircle, Phone } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import Reveal from '../components/Reveal'
import { clinic, services } from '../data/site'

export default function Services() {
  return (
    <>
      <SEO
        title="Services & Treatments"
        description="Explore Oracle Dental Care's full range of dental treatments in Navsari — from general dentistry to implants, orthodontics, and full mouth rehabilitation."
        path="/services"
      />
      <PageHero
        eyebrow="Our Treatments"
        title="Comprehensive dental care for every stage of life"
        description="Nine specialities, one trusted clinic — modern equipment and a gentle approach for every member of your family."
      />

      <section className="py-20 sm:py-24">
        <div className="container-page">
          {/* The grid sits directly under the page h1 with no visible section
              heading, so this keeps the outline from jumping h1 -> h3. */}
          <h2 className="sr-only">All treatments we offer</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-100 py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Not sure which treatment you need?
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Tell us what's bothering you and we'll recommend the right next step — no guesswork
              required.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${clinic.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent w-full sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" /> Ask on WhatsApp
              </a>
              <a href={`tel:${clinic.phoneDial}`} className="btn-outline w-full sm:w-auto">
                <Phone className="h-5 w-5" /> Call {clinic.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
