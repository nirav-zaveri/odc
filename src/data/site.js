// ---------------------------------------------------------------------------
// SITE DATA — the single source of truth for clinic content.
//
// Everything the pages render (address, phone numbers, services, team,
// testimonials, hours) lives here. To update the website's content, edit
// this file — no other file needs to change.
//
// Fields marked "PLACEHOLDER" are mock data and should be confirmed with
// the clinic before launch. Fields taken directly from the clinic's real
// letterhead/signage are marked "REAL".
// ---------------------------------------------------------------------------

export const clinic = {
  name: 'Oracle Dental Care', // REAL — from logo & letterhead
  tagline: 'Multi-Speciality Dental Clinic', // REAL — from logo
  // REAL — from prescription letterhead
  address: {
    line1: 'Shop No. G 7, Harmony Apt.',
    line2: 'Nr. Sushrusha Hospital, Maneklal Road',
    city: 'Navsari',
    state: 'Gujarat',
    pincode: '396445',
    country: 'India',
  },
  phone: '+91 94289 09216', // REAL — from letterhead
  phoneDial: '+919428909216',
  whatsapp: '919428909216', // REAL number, WhatsApp deep-link format
  email: 'info@oracledentalcare.in', // PLACEHOLDER — confirm real inbox
  website: 'https://oracledentalcare.in', // PLACEHOLDER — confirm/buy domain
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Sushrusha+Hospital+Maneklal+Road+Navsari+Gujarat+396445&output=embed', // PLACEHOLDER — swap for the clinic's exact Google Business Profile pin
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Sushrusha+Hospital+Maneklal+Road+Navsari+Gujarat+396445',
  // PLACEHOLDER — confirm actual clinic hours
  hours: [
    { days: 'Monday – Saturday', time: '10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM' },
    { days: 'Sunday', time: 'By appointment only' },
  ],
  social: {
    // PLACEHOLDER — add real handles
    instagram: 'https://instagram.com/oracledentalcare',
    facebook: 'https://facebook.com/oracledentalcare',
  },
  founded: 2011, // PLACEHOLDER — confirm year clinic opened, used for "X years" stat
}

export const doctor = {
  name: 'Dr. Konica Chhajed', // REAL — from letterhead
  credentials: 'BDS (Bachelor of Dental Surgery)', // REAL
  registration: 'Gujarat Dental Council Reg. No. A-20039', // REAL
  role: 'Founder & Chief Dental Surgeon',
  photo: null, // PLACEHOLDER — drop a real photo at src/assets/doctor.jpg and reference it here
  bio: [
    // PLACEHOLDER — replace with the doctor's real story, philosophy, further training etc.
    'Dr. Konica Chhajed founded Oracle Dental Care with a simple goal: make world-class dental care feel calm, personal, and accessible for every family in Navsari.',
    'She combines a gentle chairside manner with modern, minimally-invasive techniques — so routine visits stay comfortable and complex treatments stay predictable.',
  ],
  highlights: [
    'Bachelor of Dental Surgery (BDS)',
    'Gujarat Dental Council Registered — A-20039',
    'Focus on gentle, patient-first dentistry',
    'Advanced, hygienic, sterilization-first clinic protocols',
  ],
}

// PLACEHOLDER team — add real associates/hygienists if the clinic has them.
export const team = [
  {
    name: 'Dr. Konica Chhajed',
    role: 'Founder & Chief Dental Surgeon',
    credentials: 'BDS',
    photo: null,
  },
]

// `icon` is a lucide-react icon name (see https://lucide.dev/icons). If you
// use a new icon name here, also register it in src/components/DynamicIcon.jsx.
export const services = [
  {
    slug: 'general-dentistry',
    icon: 'Stethoscope',
    title: 'General Dentistry',
    short: 'Cleanings, fillings, and preventive treatments for lifelong oral wellness.',
    description:
      'Comprehensive checkups, professional cleanings, cavity fillings, and preventive care designed to catch problems early and keep your whole family smiling.',
  },
  {
    slug: 'cosmetic-dentistry',
    icon: 'Sparkles',
    title: 'Cosmetic Dentistry',
    short: 'Veneers, whitening, and smile makeovers for confident smiles.',
    description:
      'From professional whitening to porcelain veneers and smile design, we help you achieve a natural, confident smile tailored to your face and goals.',
  },
  {
    slug: 'orthodontics',
    icon: 'AlignCenter',
    title: 'Orthodontics',
    short: 'Braces and clear aligners for straighter teeth at any age.',
    description:
      'Traditional braces and modern clear aligners to correct crowding, gaps, and bite issues — with flexible plans for kids, teens, and adults.',
  },
  {
    slug: 'root-canal-treatment',
    icon: 'Activity',
    title: 'Root Canal Treatment',
    short: 'Painless, single-sitting RCT with modern rotary techniques.',
    description:
      'Advanced rotary endodontics for comfortable, efficient root canal treatment that saves your natural tooth and relieves pain fast.',
  },
  {
    slug: 'dental-implants',
    icon: 'Anchor',
    title: 'Dental Implants',
    short: 'Permanent, natural-looking replacements for missing teeth.',
    description:
      'Titanium implants that look, feel, and function like natural teeth — a durable, long-term solution for one or more missing teeth.',
  },
  {
    slug: 'pediatric-dentistry',
    icon: 'Baby',
    title: 'Pediatric Dentistry',
    short: 'Gentle, friendly care that makes kids love the dentist.',
    description:
      'A calm, playful approach to children’s dental visits — building healthy habits and positive dental experiences from the very first tooth.',
  },
  {
    slug: 'oral-surgery',
    icon: 'Scissors',
    title: 'Oral & Maxillofacial Surgery',
    short: 'Extractions, wisdom teeth, and minor surgical procedures.',
    description:
      'Safe, precise surgical care for wisdom tooth removal, extractions, and other oral surgical needs, performed with a focus on comfort and quick recovery.',
  },
  {
    slug: 'periodontics',
    icon: 'HeartPulse',
    title: 'Gum Care (Periodontics)',
    short: 'Deep cleaning and treatment for healthy, disease-free gums.',
    description:
      'Scaling, root planing, and gum disease management to protect the foundation of your smile and prevent tooth loss.',
  },
  {
    slug: 'full-mouth-rehabilitation',
    icon: 'Layers',
    title: 'Full Mouth Rehabilitation',
    short: 'Complete restoration for worn, damaged, or missing teeth.',
    description:
      'A coordinated treatment plan combining restorative, cosmetic, and surgical care to rebuild function and aesthetics across the whole mouth.',
  },
]

export const stats = [
  // PLACEHOLDER — confirm real numbers with the clinic
  { label: 'Years serving Navsari', value: 13, suffix: '+' },
  { label: 'Happy patients treated', value: 5000, suffix: '+' },
  { label: 'Patient satisfaction', value: 98, suffix: '%' },
  { label: 'Dental specialities', value: 9, suffix: '' },
]

export const testimonials = [
  // PLACEHOLDER — replace with real patient reviews (with permission) once available
  {
    name: 'Rajesh Patel',
    role: 'Father of 2',
    quote:
      'Dr. Chhajed made my children’s first dental visit so comfortable. Patient, gentle, and explained everything in a way my kids could understand.',
    rating: 5,
  },
  {
    name: 'Priya Shah',
    role: 'Marketing Professional',
    quote:
      'The cosmetic dentistry work exceeded my expectations. My smile transformation boosted my confidence tremendously — comfortable and professional throughout.',
    rating: 5,
  },
  {
    name: 'Amit Desai',
    role: 'Business Owner',
    quote:
      'Needed urgent care and the team fit me in the same day. Excellent treatment, modern equipment, and a genuinely caring approach.',
    rating: 5,
  },
]

export const faqs = [
  {
    question: 'Do I need an appointment, or can I walk in?',
    answer:
      'We recommend calling or messaging us on WhatsApp ahead of time so we can reserve the right amount of chair time for your treatment, but urgent concerns are always accommodated where possible.',
  },
  {
    question: 'Do you treat dental emergencies?',
    answer:
      'Yes — call us directly and we will guide you on immediate care and the fastest way to be seen.',
  },
  {
    question: 'Is the clinic hygienic and safe?',
    answer:
      'Oracle Dental Care follows strict sterilization and single-use protocols for every instrument and patient, in line with Gujarat Dental Council guidelines.',
  },
  {
    question: 'Do you treat children?',
    answer:
      'Absolutely — our pediatric dentistry approach is built around making young patients feel calm, safe, and even excited about their visit.',
  },
]

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]
