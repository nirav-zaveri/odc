import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-ink-500">{description}</p>}
    </Reveal>
  )
}
