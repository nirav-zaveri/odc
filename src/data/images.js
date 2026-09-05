// ---------------------------------------------------------------------------
// IMAGERY. Three of these are the clinic's own photographs — `heroClinic`,
// `doctorPortrait` and `doctorInClinic`, cropped from originals kept in
// public/images/uploads/ so a different crop can be cut later without asking
// for the photos again. The rest is still stock imagery standing in for the
// real premises. To swap any entry for a real one, with no changes anywhere
// else: drop the file in src/assets/, import it, and set it as `src`. Local
// imports need no `fallback` — they cannot fail to load the way a hotlinked
// stock URL can.
// ---------------------------------------------------------------------------

import doctorPortraitImg from '../assets/dr-konika-portrait.jpg'
import clinicHeroImg from '../assets/clinic-hero.jpg'
import doctorInClinicImg from '../assets/clinic-treatment-room.jpg'

const unsplash = (id, w, h) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&h=${h}&auto=format&fit=crop&ixlib=rb-4.0.3`

const pexels = (id, w, h) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&dpr=2`

export const photos = {
  // The hero image, and the first thing anyone sees: Dr. Konika in the clinic's
  // own treatment room. Cropped to exactly 5:6 so it fills the hero frame
  // uncropped at `sm:aspect-[5/6]`, and crops only left-to-right at the 4:5
  // mobile aspect — never top-to-bottom, which would cut her head or feet.
  heroClinic: {
    src: clinicHeroImg,
    alt: 'Dr. Konika Chhajed Zaveri in the treatment room at Oracle Dental Care, Navsari',
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
  // Dr. Konika at her consultation desk. Square rather than the usual 4:5,
  // because the source is a landscape frame: cropping square keeps 750px of
  // real detail where a 4:5 crop would have kept 600 and filled a third of the
  // frame with empty desk. The cards that use it set no aspect ratio, so the
  // shape here is the shape on the page.
  doctorPortrait: {
    src: doctorPortraitImg,
    alt: 'Dr. Konika Chhajed Zaveri, BDS — Founder & Chief Dental Surgeon, Oracle Dental Care',
  },
  // Leads the "Inside Oracle Dental Care" gallery on the About page. Square to
  // match the tile, framed to keep the dental chair and delivery unit in shot.
  doctorInClinic: {
    src: doctorInClinicImg,
    alt: 'Dr. Konika Chhajed Zaveri beside the dental chair in the treatment room at Oracle Dental Care',
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
