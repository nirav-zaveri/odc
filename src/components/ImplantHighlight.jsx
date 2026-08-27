import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight, ScanLine, Anchor, Crown, Smile } from 'lucide-react'
import Reveal from './Reveal'
import SmartImage from './SmartImage'
import { clinic } from '../data/site'
import { photos } from '../data/images'

const steps = [
  {
    icon: ScanLine,
    title: 'Digital assessment',
    detail: 'A digital X-ray and bone assessment map out exactly where the implant should sit.',
  },
  {
    icon: Anchor,
    title: 'Implant placement',
    detail: 'The titanium post is placed under local anaesthesia — usually a single appointment.',
  },
  {
    icon: Smile,
    title: 'Healing & integration',
    detail: 'Over 3–6 months the implant fuses with your jawbone, becoming a permanent root.',
  },
  {
    icon: Crown,
    title: 'Your final crown',
    detail: 'A custom ceramic crown is fitted — matched to your natural teeth in shape and shade.',
  },
]

export default function ImplantHighlight() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-28">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="eyebrow">Our Speciality</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Navsari&apos;s dedicated <span className="text-primary-700">dental implant centre</span>
            </h2>
            <p className="mt-5 text-lg text-ink-500">
              Missing a tooth changes how you eat, speak, and smile. Implants are the closest thing
              modern dentistry has to giving you your own tooth back — and they are what we do most.
            </p>
            <p className="mt-4 text-ink-500">
              Our implant patients tell us the same thing again and again: the procedure was smoother
              and far less painful than they expected, and every step was explained before it
              happened.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${clinic.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                <MessageCircle className="h-5 w-5" /> Ask About Implants
              </a>
              <Link to="/services#dental-implants" className="btn-outline">
                Treatment details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal direction="left" className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-primary-100/60" />
            <div className="overflow-hidden rounded-[2rem] shadow-soft-lg">
              <SmartImage photo={photos.treatmentRoom} className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
        </div>

        {/* The four-step journey */}
        <div className="mt-16">
          <Reveal className="mb-10 text-center">
            <h3 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
              What getting an implant actually involves
            </h3>
          </Reveal>

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line on desktop */}
            <div
              className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-primary-200 via-secondary-300 to-primary-200 lg:block"
              aria-hidden="true"
            />
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary-700 shadow-soft ring-2 ring-primary-100">
                  <step.icon className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h4 className="mt-5 font-display font-bold text-ink-900">{step.title}</h4>
                <p className="mt-2 text-sm text-ink-500">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
