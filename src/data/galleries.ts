import type { GalleryItem } from '../components/work/AccordionGallery'

/* Screenshots are imported so Vite hashes and bundles them; the originals were
   re-encoded from PNG to WebP (9.1 MB → 0.92 MB) because even lazy-loaded they
   would otherwise dwarf every other asset on the page. */

import AB1 from '../assets/images/projects/AB1.webp'
import AB2 from '../assets/images/projects/AB2.webp'
import AB3 from '../assets/images/projects/AB3.webp'
import AB4 from '../assets/images/projects/AB4.webp'
import AB5 from '../assets/images/projects/AB5.webp'
import AB6 from '../assets/images/projects/AB6.webp'
import AB7 from '../assets/images/projects/AB7.webp'
import AB8 from '../assets/images/projects/AB8.webp'
import AB9 from '../assets/images/projects/AB9.webp'

import EG1 from '../assets/images/projects/EG1.webp'
import EG2 from '../assets/images/projects/EG2.webp'
import EG3 from '../assets/images/projects/EG3.webp'
import EG4 from '../assets/images/projects/EG4.webp'
import EG5 from '../assets/images/projects/EG5.webp'
import EG6 from '../assets/images/projects/EG6.webp'
import EG7 from '../assets/images/projects/EG7.webp'
import EG8 from '../assets/images/projects/EG8.webp'
import EG9 from '../assets/images/projects/EG9.webp'

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
 */
export const PROJECT_GALLERIES: Record<string, GalleryItem[]> = {
  eaglejeans: [
    { image: EG1, label: 'Sign-in', alt: 'EagleJeans staff sign-in screen with email and password fields' },
    { image: EG2, label: 'Owner dashboard', alt: 'EagleJeans owner dashboard showing total orders, active sewing processes, and work status cards' },
    { image: EG3, label: 'Production report', alt: 'EagleJeans production report page with monthly summary and completed order metrics' },
    { image: EG4, label: 'Order list', alt: 'EagleJeans order list page for tracking production notes by process and status' },
    { image: EG5, label: 'Order detail', alt: 'EagleJeans order detail page with item list, production status, and action buttons' },
    { image: EG6, label: 'Production ticket', alt: 'EagleJeans production ticket sheet with size breakdown, material info, and QR code' },
    { image: EG7, label: 'Scan barcode', alt: 'EagleJeans barcode scan interface for matching a production order to a QR code' },
    { image: EG8, label: 'Process history', alt: 'EagleJeans production history page showing product detail, stage updates, and process status' },
    { image: EG9, label: 'Welcome login', alt: 'EagleJeans welcome login screen for returning staff to the production tracking app' },
  ],

  arthabooks: [
    { image: AB1, label: 'Sign-in', alt: 'ArthaBooks sign-in screen with email and password fields' },
    { image: AB2, label: 'Dashboard overview', alt: 'ArthaBooks dashboard with financial summary cards and charts' },
    { image: AB3, label: 'Transactions', alt: 'ArthaBooks transaction list with filters, categories, and status badges' },
    { image: AB7, label: 'Chart of accounts', alt: 'ArthaBooks chart of accounts table for managing account codes and categories' },
    { image: AB8, label: 'Opening balance', alt: 'ArthaBooks opening balance page for setting initial asset and liability balances' },
    { image: AB6, label: 'Role & access', alt: 'ArthaBooks role and permission management screen for admin and owner access' },
    { image: AB4, label: 'Profit & loss', alt: 'ArthaBooks profit and loss report page with totals and account summaries' },
    { image: AB5, label: 'CALK', alt: 'ArthaBooks notes to the financial statements (CALK) report page' },
    { image: AB9, label: 'Balance sheet', alt: 'ArthaBooks balance sheet report showing assets, liabilities, and equity totals' },
  ],

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
