// ---------------------------------------------------------------------------
// SITE DATA — the single source of truth for clinic content.
//
// Everything the pages render (address, phone numbers, services, team,
// testimonials, hours) lives here. To update the website's content, edit
// this file — no other file needs to change.
//
// Fields marked "PLACEHOLDER" still need confirming with the clinic.
// Everything else is real data taken from the clinic's letterhead, logo,
// or Google Business Profile.
// ---------------------------------------------------------------------------

export const clinic = {
  name: 'Oracle Dental Care',
  tagline: 'Multi-Speciality Dental Clinic', // matches the logo lock-up
  taglineLong: 'Multi-Speciality Dental Clinic & Implant Centre',
  address: {
    line1: 'Shop No. G 7, Harmony Apt.',
    line2: 'Nr. Sushrusha Hospital, Maneklal Road',
    city: 'Navsari',
    state: 'Gujarat',
    pincode: '396445',
    country: 'India',
  },
  phone: '+91 94289 09216',
  phoneDial: '+919428909216',
  whatsapp: '919428909216',
  email: 'oracledentalho@gmail.com',
  website: 'https://oracledental.in',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Oracle+Dental+Care+Harmony+Complex+Maneklal+Road+Navsari&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Oracle+Dental+Care+Harmony+Complex+Maneklal+Road+Navsari+Gujarat+396445',
  // Link patients to the live Google listing to read all reviews / leave one.
  googleReviewsUrl: 'https://share.google/EnLnu941AAiTbFRrt',
  hours: [
    { days: 'Monday – Saturday', time: '9:30 AM – 7:30 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  hoursNote: 'Closed on Sundays and public holidays.',
  social: {
    instagram: 'https://www.instagram.com/oracle_dental_care/',
    facebook: 'https://www.facebook.com/drkonika.zaveri',
  },
  foundedDate: '2022-10-05', // the clinic opened on 5 October 2022
}

/**
 * Completed years since the clinic opened. Computed from the real founding
 * date rather than hard-coded, so the "X+ years" figure can never drift out
 * of date or overstate itself.
 */
export function yearsServing(now = new Date()) {
  const start = new Date(clinic.foundedDate)
  let years = now.getFullYear() - start.getFullYear()
  const beforeAnniversary =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())
  if (beforeAnniversary) years -= 1
  return Math.max(years, 0)
}

export const doctor = {
  name: 'Dr. Konika Chhajed Zaveri',
  shortName: 'Dr. Konika',
  credentials: 'BDS (Bachelor of Dental Surgery)',
  registration: 'Gujarat Dental Council Reg. No. A-20039',
  role: 'Founder & Chief Dental Surgeon',
  // The portrait itself lives in src/data/images.js as `photos.doctorPortrait`
  // so it is bundled and cache-hashed; this field is unused and kept null.
  photo: null,
  bio: [
    // Written for this project and factually accurate, but not the doctor's own
    // words — worth an edit pass in her voice when she has a moment.
    'Dr. Konika Chhajed Zaveri founded Oracle Dental Care with a simple goal: make world-class dental care feel calm, personal, and accessible for every family in Navsari.',
    'She combines a gentle chairside manner with modern, minimally-invasive techniques — so routine visits stay comfortable and complex treatments stay predictable. Patients most often mention the same two things: that she explains every step clearly, and that treatment was far less painful than they expected.',
  ],
  highlights: [
    'Bachelor of Dental Surgery (BDS)',
    'Gujarat Dental Council Registered — A-20039',
    'Dental implant & full-mouth rehabilitation focus',
    'Advanced, hygienic, sterilization-first clinic protocols',
  ],
}

// PLACEHOLDER team — add real associates/hygienists if the clinic has them.
export const team = [
  {
    name: 'Dr. Konika Chhajed Zaveri',
    role: 'Founder & Chief Dental Surgeon',
    credentials: 'BDS',
    photo: null,
  },
]

// `icon` is a lucide-react icon name (see https://lucide.dev/icons). If you
// use a new icon name here, also register it in src/components/DynamicIcon.jsx.
// Order matters — the homepage shows the first six.
export const services = [
  {
    slug: 'dental-implants',
    icon: 'Anchor',
    title: 'Dental Implants',
    short: 'Permanent, natural-looking replacements for missing teeth.',
    featured: true,
    description:
      'Titanium implants that look, feel, and function like natural teeth — a durable, long-term solution for one or more missing teeth, planned digitally and placed with a focus on comfort and fast healing.',
  },
  {
    slug: 'orthodontics',
    icon: 'AlignCenter',
    title: 'Braces & Clear Aligners',
    short: 'Straighter teeth at any age, with braces or invisible aligners.',
    description:
      'Traditional braces and modern clear aligners to correct crowding, gaps, and bite issues — with flexible treatment plans for children, teens, and adults.',
  },
  {
    slug: 'root-canal-treatment',
    icon: 'Activity',
    title: 'Root Canal Treatment',
    short: 'Painless, single-sitting RCT with modern rotary techniques.',
    description:
      'Advanced rotary endodontics for comfortable, efficient root canal treatment that saves your natural tooth and relieves pain fast — finished with a natural-looking ceramic crown.',
  },
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
    title: 'Oral Surgery & Extractions',
    short: 'Painless extractions, wisdom teeth, and minor surgical procedures.',
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
    slug: 'dentures',
    icon: 'Smile',
    title: 'Dentures & Partial Dentures',
    short: 'Comfortable, natural-looking removable tooth replacements.',
    description:
      'Complete dentures and removable partial dentures (RPD), designed for a precise, comfortable fit — with shade and alignment matched to your existing teeth so your smile still looks like your own.',
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

// Every figure here is verifiable: years is computed from the real founding
// date, the patient count was confirmed by the clinic, reviews are countable
// on the Google listing, and specialities are counted from the services list.
export const stats = [
  { label: 'Years serving Navsari', value: yearsServing(), suffix: '+' },
  { label: 'Patients treated', value: 1100, suffix: '+' }, // confirmed by the clinic
  { label: 'Five-star Google reviews', value: 40, suffix: '+' },
  { label: 'Dental specialities', value: services.length, suffix: '' },
]

// ---------------------------------------------------------------------------
// TESTIMONIALS — real 5-star Google reviews from the clinic's Google Business
// Profile. Reviewer names are shown as they appear publicly on Google, and the
// wording is the patients' own; only the doctor's name spelling has been
// normalised and minor punctuation/spelling tidied for readability.
//
// `featured: true` marks the reviews shown on the homepage. The full list is
// shown on the /testimonials wall. `category` drives the filter chips there —
// keep it to one of the CATEGORIES values below.
// ---------------------------------------------------------------------------

export const testimonialCategories = [
  'Dental Implants',
  'Root Canal',
  'Braces & Aligners',
  'Crowns & Dentures',
  'Extractions',
  'Cleaning & Whitening',
  'Kids',
  'General Care',
]

export const testimonials = [
  // ---------------------------------------------------------------- FEATURED
  {
    name: 'Yagna Vedia',
    role: 'Travelled from abroad for treatment',
    category: 'General Care',
    featured: true,
    quote:
      'I came to India a couple of months ago just to do my dental treatment, and I googled best clinics near me and found ORACLE DENTAL CARE. Dr. Konika immediately puts you at ease with her calm and sweet demeanor. She and her staff have a special way of making your visit personalized, comfortable, and stress-free. They really took the time necessary to do everything right. They don’t try to sell you services you don’t need like other dentists in town.',
    rating: 5,
  },
  {
    name: 'Prakashbhai Patel',
    role: 'Dental implant',
    category: 'Dental Implants',
    featured: true,
    quote:
      'Got my dental implant done here and I was honestly nervous. Dr. Konika made sure I was comfortable at every step. The procedure was smooth and healing was fast. Very happy with the final result.',
    rating: 5,
  },
  {
    name: 'Samiir Patel',
    role: 'Braces & aligners',
    category: 'Braces & Aligners',
    featured: true,
    quote:
      'I started my orthodontic treatment with Dr. Konika at Oracle Dental Care and I’m extremely happy with the progress. She explains each step clearly and is very supportive. The clinic uses modern techniques and equipment. Best place for braces and aligners in Navsari.',
    rating: 5,
  },
  {
    name: 'M.D. Anas',
    role: 'Root canal treatment',
    category: 'Root Canal',
    featured: true,
    quote:
      'The root canal treatment here is second to none. I was in pain for days before coming to Oracle, but they fixed my tooth without causing any further discomfort. Their expertise is evident.',
    rating: 5,
  },
  {
    name: 'CA. Viram Shah',
    role: 'Care for an elderly patient',
    category: 'General Care',
    featured: true,
    quote:
      'Dr. Konika went above and beyond for us by attending to my grandmother, who was in dental pain and couldn’t go outside. She was thorough, kind, and provided the right treatment. We are truly grateful for her dedication and care. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Bhavesh Chauhan',
    role: 'Routine check-up',
    category: 'General Care',
    featured: true,
    quote:
      'From the warm welcome at the reception to the thorough examination and treatment by Dr. Konika Chhajed Zaveri, every aspect of my visit was seamless and comfortable. The clinic’s modern facilities, state-of-the-art equipment, and strict hygiene protocols were truly impressive. What stood out most was the gentle, caring, and professional approach of the entire team.',
    rating: 5,
  },
  {
    name: 'Hitesh Chaudhary',
    role: 'Child’s check-up',
    category: 'Kids',
    featured: true,
    quote:
      'Took my child for a dental check-up here. Dr. Konika handled him very gently. The environment is friendly and calm. Perfect clinic for kids.',
    rating: 5,
  },

  // ------------------------------------------------------------ FULL WALL
  {
    name: 'Ronak Thakkar',
    role: 'Dental implants',
    category: 'Dental Implants',
    quote:
      'Getting dental implants at Oracle Dental Care was the best decision I ever made. The entire process was explained in detail, and was surprisingly comfortable. My implant feels secure and completely natural!',
    rating: 5,
  },
  {
    name: 'Chaudhary Bhikhabhai',
    role: 'Dental implant',
    category: 'Dental Implants',
    quote:
      'Oracle Dental Care provided me with the best dental implant experience. The procedure was so smooth and pain-free, and the implant feels just like my natural tooth. The team is highly skilled and professional!',
    rating: 5,
  },
  {
    name: 'Devika Dhamecha',
    role: 'Dental implant',
    category: 'Dental Implants',
    quote:
      'Got my dental implant done by Dr. Konika. The entire process was smooth and much less painful than I expected.',
    rating: 5,
  },
  {
    name: 'Jitu Gadhvi',
    role: 'Dental implant',
    category: 'Dental Implants',
    quote:
      'Dr. Konika explained the implant procedure very clearly and made me feel confident. Healing was good and I’m satisfied with the result.',
    rating: 5,
  },
  {
    name: 'Patel Sangita',
    role: 'Implant & dental crown',
    category: 'Dental Implants',
    quote:
      'Best dentist in Navsari. I have taken many treatments from Dr. Konika such as implant and dental crown, and I had a very good experience. I highly recommend Oracle Dental Care.',
    rating: 5,
  },
  {
    name: 'Dilsad Ansari',
    role: 'Root canal treatment',
    category: 'Root Canal',
    quote:
      'Had severe tooth pain and needed a root canal. The RCT was done very smoothly without pain. Excellent hygiene and very professional treatment at Oracle Dental Care.',
    rating: 5,
  },
  {
    name: 'Pinkesh Pinkesh',
    role: 'Root canal treatment',
    category: 'Root Canal',
    quote:
      'The root canal treatment I received here was truly remarkable. It was completely painless, and the dentist ensured I was comfortable the entire time. I highly recommend Oracle for anyone needing this procedure.',
    rating: 5,
  },
  {
    name: 'Kalpes Bagal',
    role: 'Root canal & crown',
    category: 'Root Canal',
    quote:
      'I had root canal and dental crown treatment from Oracle Dental Care at very affordable rates with very good facilities and technology. I really appreciate their work and concern towards the patient. I truly advise everyone to visit Oracle Dental Care for any tooth-related problem.',
    rating: 5,
  },
  {
    name: 'Kiriti Mahato',
    role: 'Ceramic crown',
    category: 'Crowns & Dentures',
    quote:
      'Got a ceramic cap placed after root canal. The crown looks exactly like a natural tooth and chewing feels normal. Very satisfied with the result.',
    rating: 5,
  },
  {
    name: 'Mukesh Patel',
    role: 'Dental crown',
    category: 'Crowns & Dentures',
    quote:
      'The dental crown I got at Oracle Dental Care is perfect! It feels and looks just like my natural teeth. The entire process was efficient and hassle-free.',
    rating: 5,
  },
  {
    name: 'Sagar Chaudhary',
    role: 'Dental crown',
    category: 'Crowns & Dentures',
    quote:
      'The dental crown I received at Oracle Dental Care is flawless. It blends perfectly with my other teeth, and the procedure was done efficiently. I couldn’t be happier with the outcome!',
    rating: 5,
  },
  {
    name: 'Pinal Jain',
    role: 'Partial denture (RPD)',
    category: 'Crowns & Dentures',
    quote:
      'I was nervous about getting a removable partial denture for my lower anterior teeth, but the team made the process smooth and stress-free. The fit and design are perfect, and it feels so comfortable and natural. They ensured the colour and alignment matched my existing teeth perfectly, which gave me the confidence to smile again.',
    rating: 5,
  },
  {
    name: 'Ajaruddin Ansary',
    role: 'Tooth extraction',
    category: 'Extractions',
    quote:
      'I got my tooth extraction done at Oracle Dental Care and it was completely painless. The procedure was quick and stress-free. Dr. Konika explained everything clearly and made me very comfortable.',
    rating: 5,
  },
  {
    name: 'Rajgor Piyush',
    role: 'Wisdom tooth extraction',
    category: 'Extractions',
    quote:
      'I had to get a wisdom tooth extracted, and Oracle Dental Care made it a breeze. The process was painless, and the staff was incredibly supportive throughout.',
    rating: 5,
  },
  {
    name: 'Paresh Dhamecha',
    role: 'Tooth extraction',
    category: 'Extractions',
    quote:
      'I had to get a tooth extracted, and I was amazed by how painless the procedure was. The dentist was incredibly gentle and explained every step beforehand. I would recommend Oracle to anyone!',
    rating: 5,
  },
  {
    name: 'Ajaruddin Ansari',
    role: 'Cleaning & polishing',
    category: 'Cleaning & Whitening',
    quote:
      'Best place for teeth cleaning and polishing in Navsari. My teeth feel fresh and bright. Very comfortable experience.',
    rating: 5,
  },
  {
    name: 'Mahendra Patel',
    role: 'Scaling & polishing',
    category: 'Cleaning & Whitening',
    quote: 'Very good experience for scaling and polishing. Teeth feel fresh and clean.',
    rating: 5,
  },
  {
    name: 'Bhavesh Panjwani',
    role: 'Teeth cleaning',
    category: 'Cleaning & Whitening',
    quote:
      'I went for my teeth cleaning — the process was very smooth and painless. The work done by Dr. Konika was very good. Thank you for the painless service!',
    rating: 5,
  },
  {
    name: 'Bhavesh Thakor',
    role: 'Teeth whitening',
    category: 'Cleaning & Whitening',
    quote:
      'Amazing teeth whitening results — my smile has never been brighter. Thanks to Oracle Dental Care for the best aesthetics.',
    rating: 5,
  },
  {
    name: 'Sujal Mistry',
    role: 'Smile makeover',
    category: 'Cleaning & Whitening',
    quote:
      'If you’re considering cosmetic dental work, Oracle Dental Care is the place to go. Their expertise in smile makeovers is outstanding, and they’ll help you achieve the smile you’ve always dreamed of.',
    rating: 5,
  },
  {
    name: 'Deven Joshi',
    role: 'Tooth filling',
    category: 'General Care',
    quote:
      'Got my tooth filling done in Navsari. No pain and perfect finish. Honest advice and reasonable charges.',
    rating: 5,
  },
  {
    name: 'Apexa Jain',
    role: 'General treatment',
    category: 'General Care',
    quote:
      'I had a truly wonderful experience with Dr. Konika. She was extremely patient, attentive, and thorough in understanding my concerns. She explained the condition in a very clear and reassuring manner. The clinic environment is clean, calm, and well-organized, and the staff is polite, supportive, and professional. Follow-ups were smooth, and every query was addressed with care and clarity.',
    rating: 5,
  },
  {
    name: 'Richa Rajpara',
    role: 'General treatment',
    category: 'General Care',
    quote:
      'I had an excellent experience at Oracle Dental Care. Dr. Konika was warm, welcoming, and extremely professional. She was not only knowledgeable but also took the time to explain every step of the treatment, making me feel comfortable and well-informed. The clinic is clean, well-equipped with modern technology, and follows strict hygiene protocols. Highly recommended for anyone looking for quality dental care.',
    rating: 5,
  },
  {
    name: 'Romit Bhavsar',
    role: 'General treatment',
    category: 'General Care',
    quote:
      'I must commend Dr. Konika Zaveri for her exceptional expertise, meticulous approach, and unwavering commitment to patient care. Her diagnostic acumen and treatment methodologies reflect a perfect blend of advanced dental science and compassionate care, ensuring optimal results with minimal discomfort. She upholds the highest standards of hygiene, employs cutting-edge techniques, and tailors treatments to each patient’s specific needs.',
    rating: 5,
  },
  {
    name: 'Malav Desai',
    role: 'General treatment',
    category: 'General Care',
    quote:
      'Had a great experience with Dr. Konika and her staff. Very professional, gentle, and explained everything clearly. The treatment was smooth and painless. Really happy with the work and highly recommend!',
    rating: 5,
  },
  {
    name: 'Rahul Patel',
    role: 'Implant, root canal & cleaning',
    category: 'General Care',
    quote:
      'Oracle Dental Care is my go-to place for all dental needs. Whether it’s an implant, root canal, or even a simple cleaning, their professionalism and advanced techniques are unmatched.',
    rating: 5,
  },
  {
    name: 'Pramod Sharma',
    role: 'General treatment',
    category: 'General Care',
    quote:
      'Clean clinic. Pain-free treatment. Experienced dentist. Best dental care. Oracle Dental Care — Dr. Konika is simply the best!',
    rating: 5,
  },
  {
    name: 'Nidhi Lodhiya',
    role: 'General treatment',
    category: 'General Care',
    quote:
      'Best dentist in Navsari — I highly recommend this clinic! The staff are very welcoming and kind, and Dr. Konika gives the best advice to patients. Her nature is also too good.',
    rating: 5,
  },
  {
    name: 'C & C',
    role: 'Nervous patient',
    category: 'General Care',
    quote:
      'I was scared of dental treatment earlier, but Dr. Konika handled everything very gently. Clean and calm clinic.',
    rating: 5,
  },
  {
    name: 'Ramesh Kansaliwal',
    role: 'Treatment advice',
    category: 'General Care',
    quote: 'Oracle Dental Care gives honest advice for cosmetic vs functional treatment.',
    rating: 5,
  },
  {
    name: 'Yaksh Mistry',
    role: 'General treatment',
    category: 'General Care',
    quote:
      'Very smooth experience at Oracle Dental Care. Dr. Konika explains the treatment properly and makes you feel comfortable.',
    rating: 5,
  },
  {
    name: 'Nilesh Shah',
    role: 'General treatment',
    category: 'General Care',
    quote:
      'I am very much satisfied with the doctor’s approach and their treatment. The support staff is also very cooperative, and the clinic is very clean and hygienic.',
    rating: 5,
  },
  {
    name: 'Chirag Parmar',
    role: 'General treatment',
    category: 'General Care',
    quote: 'The doctor and staff are kind and supportive. I am happy with their work.',
    rating: 5,
  },
]

export const featuredTestimonials = testimonials.filter((t) => t.featured)

export const faqs = [
  {
    question: 'Do I need an appointment, or can I walk in?',
    answer:
      'We recommend calling or messaging us on WhatsApp ahead of time so we can reserve the right amount of chair time for your treatment, but urgent concerns are always accommodated where possible.',
  },
  {
    question: 'Will my treatment be painful?',
    answer:
      'This is the question we hear most — and the one our patients most often mention afterwards. We use modern anaesthesia and minimally-invasive techniques so that extractions, root canals, and implant placement stay genuinely comfortable. If you are anxious, tell us: we will go slower and talk you through every step.',
  },
  {
    question: 'How long does a dental implant take?',
    answer:
      'Implant placement itself is usually a single appointment. The implant then integrates with the bone over roughly three to six months before the final crown is fitted. We will give you a clear, personalised timeline at your consultation.',
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
      'Absolutely — our pediatric approach is built around making young patients feel calm, safe, and even excited about their visit.',
  },
]

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Reviews', to: '/testimonials' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]
