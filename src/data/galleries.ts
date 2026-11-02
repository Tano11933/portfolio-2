import type { GalleryItem } from '../components/work/AccordionGallery'

import EG2 from '../assets/images/projects/EG2.webp'
import EG5 from '../assets/images/projects/EG5.webp'
import eagle_scan from '../assets/images/projects/curated/eagle-scan.webp'
import eagle_scan_full from '../assets/images/projects/curated/eagle-scan-full.webp'
import eagle_login from '../assets/images/projects/curated/eagle-login.webp'
import eagle_login_full from '../assets/images/projects/curated/eagle-login-full.webp'
import EG3 from '../assets/images/projects/EG3.webp'
import AB2 from '../assets/images/projects/AB2.webp'
import AB3 from '../assets/images/projects/AB3.webp'
import AB4 from '../assets/images/projects/AB4.webp'
import AB5 from '../assets/images/projects/AB5.webp'
import AB9 from '../assets/images/projects/AB9.webp'
import BK1 from '../assets/images/projects/BK1.webp'
import BK4 from '../assets/images/projects/BK4.webp'
import BK8 from '../assets/images/projects/BK8.webp'
import BK6 from '../assets/images/projects/BK6.webp'
import reuse_storefront from '../assets/images/projects/curated/reuse-storefront.webp'
import reuse_storefront_full from '../assets/images/projects/curated/reuse-storefront-full.webp'
import reuse_checkout from '../assets/images/projects/curated/reuse-checkout.webp'
import reuse_checkout_full from '../assets/images/projects/curated/reuse-checkout-full.webp'
import reuse_warehouse from '../assets/images/projects/curated/reuse-warehouse.webp'
import reuse_warehouse_full from '../assets/images/projects/curated/reuse-warehouse-full.webp'
import reuse_report from '../assets/images/projects/curated/reuse-report.webp'
import reuse_report_full from '../assets/images/projects/curated/reuse-report-full.webp'
import reuse_mobile from '../assets/images/projects/curated/reuse-mobile.webp'
import reuse_mobile_full from '../assets/images/projects/curated/reuse-mobile-full.webp'
import gym_home from '../assets/images/projects/curated/gym-home.webp'
import gym_home_full from '../assets/images/projects/curated/gym-home-full.webp'
import gym_trainers from '../assets/images/projects/curated/gym-trainers.webp'
import gym_trainers_full from '../assets/images/projects/curated/gym-trainers-full.webp'
import gym_booking from '../assets/images/projects/curated/gym-booking.webp'
import gym_booking_full from '../assets/images/projects/curated/gym-booking-full.webp'
import gym_payment from '../assets/images/projects/curated/gym-payment.webp'
import gym_payment_full from '../assets/images/projects/curated/gym-payment-full.webp'
import gym_attendance from '../assets/images/projects/curated/gym-attendance.webp'
import gym_attendance_full from '../assets/images/projects/curated/gym-attendance-full.webp'
import tritis_home from '../assets/images/projects/curated/tritis-home.webp'
import tritis_home_full from '../assets/images/projects/curated/tritis-home-full.webp'
import tritis_profile from '../assets/images/projects/curated/tritis-profile.webp'
import tritis_profile_full from '../assets/images/projects/curated/tritis-profile-full.webp'
import tritis_potential from '../assets/images/projects/curated/tritis-potential.webp'
import tritis_potential_full from '../assets/images/projects/curated/tritis-potential-full.webp'
import tritis_gallery from '../assets/images/projects/curated/tritis-gallery.webp'
import tritis_gallery_full from '../assets/images/projects/curated/tritis-gallery-full.webp'

import melodia_home from '../assets/images/projects/curated/melodia-home.webp'
import melodia_home_full from '../assets/images/projects/curated/melodia-home-full.webp'
import melodia_search from '../assets/images/projects/curated/melodia-search.webp'
import melodia_search_full from '../assets/images/projects/curated/melodia-search-full.webp'
import melodia_playlist from '../assets/images/projects/curated/melodia-playlist.webp'
import melodia_playlist_full from '../assets/images/projects/curated/melodia-playlist-full.webp'
import melodia_admin from '../assets/images/projects/curated/melodia-admin.webp'
import melodia_admin_full from '../assets/images/projects/curated/melodia-admin-full.webp'
import melodia_mobile from '../assets/images/projects/curated/melodia-mobile.webp'
import melodia_mobile_full from '../assets/images/projects/curated/melodia-mobile-full.webp'

export const PROJECT_GALLERIES: Record<string, GalleryItem[]> = {
  'spotify-clone': [
    { image: melodia_home, fullImage: melodia_home_full, label: 'Home & discovery', alt: 'Melodia home with popular artists, new album covers and a playback bar', kind: 'web' },
    { image: melodia_search, fullImage: melodia_search_full, label: 'Search results', alt: 'Melodia search results for hujan, with matching songs and the Arsip Hujan and Sinyal Hutan albums', kind: 'web' },
    { image: melodia_playlist, fullImage: melodia_playlist_full, label: 'Playlist detail', alt: 'Melodia Fokus Ngoding playlist with a track list, add-song selector and a playback bar', kind: 'web' },
    { image: melodia_admin, fullImage: melodia_admin_full, label: 'Catalog management', alt: 'Melodia admin catalog with Artist, Album, Lagu and Genre tabs, an artist list and an add-artist form', kind: 'web' },
    { image: melodia_mobile, fullImage: melodia_mobile_full, label: 'Mobile album', alt: 'Melodia mobile Ruang Tunggu album by Senja Kolektif, with a play button, track durations, bottom navigation and player controls', kind: 'phone', device: true, aspectRatio: '780 / 1688', screenFit: 'contain', screenTheme: 'dark' },
  ],
  'eaglejeans': [
    { image: EG2, label: 'Owner dashboard', alt: 'EagleJeans owner dashboard showing total orders, active sewing processes, and work status cards', kind: 'web' },
    { image: EG5, label: 'Order detail', alt: 'EagleJeans order detail page with item list, production status, and action buttons', kind: 'web' },
    { image: EG3, label: 'Production report', alt: 'EagleJeans production report with monthly summary and completed order metrics', kind: 'web' },
    { image: eagle_scan, fullImage: eagle_scan_full, label: 'Scan barcode', alt: 'EagleJeans mobile scan screen with QR scanning area and manual code entry', kind: 'phone', device: true, aspectRatio: '271 / 592' },
    { image: eagle_login, fullImage: eagle_login_full, label: 'Staff sign-in', alt: 'EagleJeans complete mobile sign-in screen with account fields and support information', kind: 'phone', device: true, aspectRatio: '267 / 591' },
  ],
  'arthabooks': [
    { image: AB2, label: 'Dashboard overview', alt: 'ArthaBooks dashboard with financial summary cards and charts', kind: 'web' },
    { image: AB3, label: 'Transactions', alt: 'ArthaBooks transaction list with filters, categories, and status badges', kind: 'web' },
    { image: AB4, label: 'Profit & loss', alt: 'ArthaBooks profit and loss report page with totals and account summaries', kind: 'web' },
    { image: AB5, label: 'CALK', alt: 'ArthaBooks notes to the financial statements (CALK) report page', kind: 'web' },
    { image: AB9, label: 'Balance sheet', alt: 'ArthaBooks balance sheet report showing assets, liabilities, and equity totals', kind: 'web' },
  ],
  'bookhive': [
    { image: BK1, label: 'Landing page', alt: 'BookHive landing page', kind: 'web' },
    { image: BK4, label: 'Member dashboard', alt: 'BookHive member dashboard with new arrivals and borrowing stats', kind: 'web' },
    { image: BK8, label: 'Borrowing approvals', alt: 'BookHive borrowing request approval queue', kind: 'web' },
    { image: BK6, label: 'Borrowing records', alt: 'BookHive borrowing records table with return status', kind: 'web' },
  ],
  'reusemart': [
    { image: reuse_storefront, fullImage: reuse_storefront_full, label: 'Storefront', alt: 'ReuseMart storefront with search, categories and second-hand listings', kind: 'web' },
    { image: reuse_checkout, fullImage: reuse_checkout_full, label: 'Checkout', alt: 'ReuseMart checkout with delivery selection and order summary', kind: 'web' },
    { image: reuse_warehouse, fullImage: reuse_warehouse_full, label: 'Warehouse inventory', alt: 'ReuseMart consignment inventory with statuses and actions', kind: 'web' },
    { image: reuse_report, fullImage: reuse_report_full, label: 'Owner report', alt: 'ReuseMart owner commission report with product revenue totals', kind: 'web' },
    { image: reuse_mobile, fullImage: reuse_mobile_full, label: 'Buyer app', alt: 'ReuseMart Flutter buyer home with points and available items', kind: 'phone', device: true, statusInset: 0.035, aspectRatio: '1180 / 2556' },
  ],
  't2kav-gym': [
    { image: gym_home, fullImage: gym_home_full, label: 'Home', alt: 'T2KAV Gym home with recommended classes and services', kind: 'phone', device: true, statusInset: 0.035, aspectRatio: '1180 / 2556' },
    { image: gym_trainers, fullImage: gym_trainers_full, label: 'Trainers', alt: 'T2KAV Gym trainers with specialities and session prices', kind: 'phone', device: true, statusInset: 0.035, aspectRatio: '1180 / 2556' },
    { image: gym_booking, fullImage: gym_booking_full, label: 'Class booking', alt: 'T2KAV Gym booking form with session date and time', kind: 'phone', device: true, statusInset: 0.035, aspectRatio: '1180 / 2556' },
    { image: gym_payment, fullImage: gym_payment_full, label: 'Payment', alt: 'T2KAV Gym payment methods with GoPay, DANA and OVO', kind: 'phone', device: true, statusInset: 0.035, aspectRatio: '1180 / 2556' },
    { image: gym_attendance, fullImage: gym_attendance_full, label: 'QR attendance', alt: 'T2KAV Gym attendance screen with a QR scan action', kind: 'phone', device: true, statusInset: 0.035, aspectRatio: '1180 / 2556' },
  ],
  'padukuhan-tritis': [
    { image: tritis_home, fullImage: tritis_home_full, label: 'Village home', alt: 'Padukuhan Tritis village website with landscape hero and introduction', kind: 'web' },
    { image: tritis_profile, fullImage: tritis_profile_full, label: 'Village profile', alt: 'Padukuhan Tritis history and village profile', kind: 'web' },
    { image: tritis_potential, fullImage: tritis_potential_full, label: 'Local products & culture', alt: 'Padukuhan Tritis local products, crafts and culture', kind: 'web' },
    { image: tritis_gallery, fullImage: tritis_gallery_full, label: 'Community gallery', alt: 'Padukuhan Tritis photographs of village activities and community life', kind: 'web' },
  ],
}
