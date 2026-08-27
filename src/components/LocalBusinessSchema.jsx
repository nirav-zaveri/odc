import { Helmet } from 'react-helmet-async'
import { clinic, doctor, services } from '../data/site'

/**
 * schema.org JSON-LD for the clinic. This is what lets Google show the
 * correct address, opening hours, and phone number in search results and
 * Maps panels. Rendered once, on the homepage.
 *
 * Deliberately omits aggregateRating: Google requires that to be genuinely
 * sourced and visible on the page, and self-reported ratings can trigger a
 * structured-data penalty. The Google Business Profile supplies the real
 * rating already.
 */
export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${clinic.website}/#clinic`,
    name: clinic.name,
    description: `${clinic.taglineLong} in ${clinic.address.city}, ${clinic.address.state}, led by ${doctor.name} (${doctor.credentials}).`,
    url: clinic.website,
    telephone: clinic.phoneDial,
    email: clinic.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.pincode,
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:30',
        closes: '19:30',
      },
    ],
    sameAs: [clinic.social.instagram, clinic.social.facebook],
    founder: {
      '@type': 'Person',
      name: doctor.name,
      jobTitle: doctor.role,
      description: `${doctor.credentials} — ${doctor.registration}`,
    },
    medicalSpecialty: 'Dentistry',
    availableService: services.map((service) => ({
      '@type': 'MedicalProcedure',
      name: service.title,
      description: service.short,
    })),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
