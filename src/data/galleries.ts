import type { GalleryItem } from '../components/work/AccordionGallery'

/* Screenshots are imported so Vite hashes and bundles them; the originals were
   re-encoded from PNG to WebP (9.1 MB → 0.92 MB) because even lazy-loaded they
   would otherwise dwarf every other asset on the page. */

import BK1 from '../assets/images/projects/BK1.webp'
import BK2 from '../assets/images/projects/BK2.webp'
import BK3 from '../assets/images/projects/BK3.webp'
import BK4 from '../assets/images/projects/BK4.webp'
import BK6 from '../assets/images/projects/BK6.webp'
import BK7 from '../assets/images/projects/BK7.webp'
import BK8 from '../assets/images/projects/BK8.webp'

import KKN1 from '../assets/images/projects/KKN1.webp'
import KKN2 from '../assets/images/projects/KKN2.webp'
import KKN3 from '../assets/images/projects/KKN3.webp'
import KKN4 from '../assets/images/projects/KKN4.webp'

import RE1 from '../assets/images/projects/REUSE-1.webp'
import RE2 from '../assets/images/projects/REUSE-2.webp'
import RE3 from '../assets/images/projects/REUSE-3.webp'
import RE4 from '../assets/images/projects/REUSE-4.webp'
import RE5 from '../assets/images/projects/REUSE-5.webp'
import RE6 from '../assets/images/projects/REUSE-6.webp'

import T1 from '../assets/images/projects/T2KAV-1.webp'
import T2 from '../assets/images/projects/T2KAV-2.webp'
import T3 from '../assets/images/projects/T2KAV-3.webp'

/**
 * Per-project screenshots for the §4.9 gallery, keyed by the project slug in
 * `projects.ts`. Labels describe what each capture actually shows.
 *
 * EagleJeans and ArthaBooks are intentionally empty — the screenshots are being
 * supplied separately. The gallery renders nothing for an empty array, so the
 * cards stay correct until then; drop the images into
 * `src/assets/images/projects/` and fill the arrays in the same shape as below.
 */
export const PROJECT_GALLERIES: Record<string, GalleryItem[]> = {
  // TODO: add EagleJeans screenshots — same { image, label, alt } shape.
  // Example:
  //   { image: EJ1, label: 'QR scan per stage', alt: 'EagleJeans production stage scanner' },
  eaglejeans: [],

  // TODO: add ArthaBooks screenshots — same { image, label, alt } shape.
  arthabooks: [],

  reusemart: [
    { image: RE3, label: 'Marketplace home', alt: 'ReuseMart storefront with product categories' },
    { image: RE5, label: 'Product detail', alt: 'ReuseMart product page with rating and comments' },
    { image: RE6, label: 'Payment confirmation', alt: 'ReuseMart payment confirmation and order summary' },
    { image: RE2, label: 'Payment verification', alt: 'ReuseMart staff view listing payments awaiting verification' },
    { image: RE4, label: 'Web sign-in', alt: 'ReuseMart web login screen' },
    { image: RE1, label: 'Mobile app (Flutter)', alt: 'ReuseMart Flutter app login screen' },
  ],

  bookhive: [
    { image: BK1, label: 'Landing page', alt: 'BookHive landing page' },
    { image: BK4, label: 'Member dashboard', alt: 'BookHive member dashboard with new arrivals and borrowing stats' },
    { image: BK7, label: 'Admin dashboard', alt: 'BookHive admin dashboard with daily report' },
    { image: BK8, label: 'Borrowing approvals', alt: 'BookHive borrowing request approval queue' },
    { image: BK6, label: 'Borrowing records', alt: 'BookHive borrowing records table with return status' },
    { image: BK2, label: 'Library services', alt: 'BookHive services: lending, room reservation, donation, recommendations' },
    { image: BK3, label: 'Sign-in', alt: 'BookHive login screen' },
  ],

  't2kav-gym': [
    { image: T2, label: 'Home & trainers', alt: 'T2KAV Gym app home screen with trainers and recommendations' },
    { image: T3, label: 'Booking confirmation', alt: 'T2KAV Gym booking confirmation with session totals' },
    { image: T1, label: 'Splash screen', alt: 'T2KAV Gym app splash screen' },
  ],

  'padukuhan-tritis': [
    { image: KKN1, label: 'Landing page', alt: 'Padukuhan Tritis village site landing page' },
    { image: KKN3, label: 'Local UMKM & culture', alt: 'Village page showcasing local small businesses and culture' },
    { image: KKN2, label: 'Village history', alt: 'Village history timeline section' },
    { image: KKN4, label: 'About the village', alt: 'About section with village environment photography' },
  ],
}
