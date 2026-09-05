// ---------------------------------------------------------------------------
// IMAGERY. `doctorPortrait` is the clinic's own photograph. Everything else is
// still stock placeholder imagery pending real clinic photos (interior, team,
// patients) — swap any entry here for a real one with no changes elsewhere:
// drop the file in src/assets/, import it, and set it as `src`.
// ---------------------------------------------------------------------------

import doctorPortraitImg from '../assets/doctor.jpg'

const unsplash = (id, w, h) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&h=${h}&auto=format&fit=crop&ixlib=rb-4.0.3`

const pexels = (id, w, h) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&dpr=2`

export const photos = {
  heroClinic: {
    src: unsplash('1629909613654-28e377c37b09', 2400, 1600),
    fallback: pexels('3845810', 2400, 1600),
    alt: 'Modern, bright dental clinic interior',
  },
  clinicConsult: {
    src: unsplash('1582750433449-648ed127bb54', 1400, 1000),
    fallback: pexels('6812540', 1400, 1000),
    alt: 'Dentist consulting with a patient',
  },
  clinicReception: {
    src: unsplash('1576091160399-112ba8d25d1f', 1400, 1000),
    fallback: pexels('4173251', 1400, 1000),
    alt: 'Welcoming dental clinic reception area',
  },
  // The clinic's own photograph of Dr. Konika Chhajed Zaveri. Native size is modest
  // (380x475), so it is displayed in a contained portrait card rather than a
  // full-bleed image, which keeps it sharp. If a higher-resolution original
  // becomes available, replace src/assets/doctor.jpg and nothing else changes.
  doctorPortrait: {
    src: doctorPortraitImg,
    alt: 'Dr. Konika Chhajed Zaveri, BDS — Founder & Chief Dental Surgeon, Oracle Dental Care',
  },
  teamMember: {
    src: unsplash('1612349317150-e413f6a5b16d', 700, 700),
    fallback: pexels('3845810', 700, 700),
    alt: 'Oracle Dental Care team member',
  },
  treatmentRoom: {
    src: unsplash('1609840114035-3c981b782dfe', 1400, 1000),
    fallback: pexels('3845810', 1400, 1000),
    alt: 'Fully-equipped dental treatment room',
  },
  dentalTools: {
    src: unsplash('1606811841689-23dfddce3e95', 900, 700),
    fallback: pexels('3845810', 900, 700),
    alt: 'Sterilized modern dental instruments',
  },
  dentalChair: {
    src: unsplash('1588776814546-1ffcf47267a5', 900, 700),
    fallback: pexels('3845810', 900, 700),
    alt: 'Comfortable dental treatment chair',
  },
  smileCare: {
    src: unsplash('1559757148-5c350d0d3c56', 1200, 900),
    fallback: pexels('4173251', 1200, 900),
    alt: 'Patient with a healthy, confident smile',
  },
}

export const avatars = {
  testimonial1: unsplash('1507003211169-0a1dd7228f2d', 150, 150),
  testimonial2: unsplash('1494790108755-2616b612b786', 150, 150),
  testimonial3: unsplash('1472099645785-5658abf4ff4e', 150, 150),
}
