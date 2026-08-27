import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import Logo from './Logo'
import { clinic, nav, services } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-primary-950 text-primary-100">
      <div className="absolute inset-0 bg-brand-radial opacity-40" />
      <div className="container-page relative py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo variant="full" tone="dark" className="h-12" />
            <p className="mt-5 max-w-md text-primary-200">
              {clinic.tagline} in the heart of Navsari — advanced dentistry, delivered with a gentle,
              personal touch for your whole family.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={clinic.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={clinic.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h2>
            <ul className="mt-5 space-y-1">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="inline-block py-1 text-primary-200 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="inline-block py-1 text-primary-200 transition-colors hover:text-white">
                  All Treatments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h2>
            <ul className="mt-5 space-y-4 text-primary-200">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary-300" />
                <span>
                  {clinic.address.line1}, {clinic.address.line2}, {clinic.address.city},{' '}
                  {clinic.address.state} {clinic.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-secondary-300" />
                <a href={`tel:${clinic.phoneDial}`} className="inline-block py-1.5 hover:text-white">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-secondary-300" />
                <a href={`mailto:${clinic.email}`} className="inline-block py-1.5 hover:text-white">
                  {clinic.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary-300" />
                <span>
                  {clinic.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-primary-300">
          {services.slice(0, 6).map((s) => (
            <Link key={s.slug} to={`/services#${s.slug}`} className="inline-block py-1.5 hover:text-white">
              {s.title}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-primary-300 sm:flex-row">
          <p>© {year} {clinic.name}. All rights reserved.</p>
          <p>Multi-Speciality Dental Clinic, Navsari, Gujarat</p>
        </div>
      </div>
    </footer>
  )
}
