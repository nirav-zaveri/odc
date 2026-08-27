import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { clinic } from '../data/site'

const contactCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: [
      clinic.address.line1,
      clinic.address.line2,
      `${clinic.address.city}, ${clinic.address.state} ${clinic.address.pincode}`,
    ],
    action: { label: 'Get Directions', href: clinic.mapsDirectionsUrl, icon: Navigation },
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: [clinic.phone],
    action: { label: `Call Now`, href: `tel:${clinic.phoneDial}`, icon: Phone },
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Us',
    lines: ['Fastest way to reach our front desk'],
    action: { label: 'Chat on WhatsApp', href: `https://wa.me/${clinic.whatsapp}`, icon: MessageCircle, external: true },
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [clinic.email],
    action: { label: 'Send an Email', href: `mailto:${clinic.email}`, icon: Mail },
  },
]

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact & Location"
        description="Visit Oracle Dental Care in Navsari, Gujarat. Call, WhatsApp, or get directions to our clinic near Sushrusha Hospital, Maneklal Road."
        path="/contact"
      />
      <PageHero
        eyebrow="Get In Touch"
        title="We'd love to see you smile"
        description="Call, WhatsApp, or stop by — whichever is easiest for you."
      />

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08} className="card flex flex-col items-center gap-4 p-7 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  <card.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink-900">{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-ink-500">
                      {line}
                    </p>
                  ))}
                </div>
                <a
                  href={card.action.href}
                  target={card.action.external ? '_blank' : undefined}
                  rel={card.action.external ? 'noopener noreferrer' : undefined}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800"
                >
                  <card.action.icon className="h-4 w-4" />
                  {card.action.label}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-100 bg-surface py-20 sm:py-24">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal direction="right" className="overflow-hidden rounded-[1.5rem] shadow-soft-lg">
            <iframe
              title="Oracle Dental Care location map"
              src={clinic.mapsEmbedUrl}
              className="h-96 w-full lg:h-full lg:min-h-[420px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal direction="left" className="flex flex-col justify-center">
            <span className="eyebrow">Clinic Hours</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink-900">When to find us</h2>
            <div className="mt-6 space-y-4">
              {clinic.hours.map((slot) => (
                <div key={slot.days} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-soft">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" />
                  <div>
                    <p className="font-display font-semibold text-ink-900">{slot.days}</p>
                    <p className="text-sm text-ink-500">{slot.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-primary-950 p-6 text-white">
              <p className="font-display font-bold">Dental emergency?</p>
              <p className="mt-1 text-sm text-primary-200">
                Call us directly — we always try to accommodate urgent cases the same day.
              </p>
              <a href={`tel:${clinic.phoneDial}`} className="btn-accent mt-4 w-full sm:w-auto">
                <Phone className="h-4 w-4" /> {clinic.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
