/**
 * CONTENT-STRATEGY §5 — case studies in the fixed
 * Problem → Role & Stack → Key Features → What it demonstrates format.
 *
 * Display order is §5's priority order, not chronology. `features` is the
 * doc's comma-separated run split into list items (sentence case for display);
 * no wording is added.
 */
export type Project = {
  slug: string
  name: string
  problem: string
  role: string
  stack: string[]
  features: string[]
  demonstrates: string
}

export const FEATURED_PROJECTS: Project[] = [
  {
    slug: 'eaglejeans',
    name: 'EagleJeans',
    problem:
      'A garment manufacturing client needed a reliable way to track garments through 15 production stages and prevent bottlenecks, race conditions, and unauthorized access.',
    role: 'Backend developer. Built the Laravel/Livewire PWA backend, organized business logic into 8 dedicated services, and implemented role-based access for 12 user roles with custom middleware and policy-based authorization.',
    stack: ['Laravel', 'Livewire', 'PHP', 'MySQL', 'PWA'],
    features: [
      '15-step QR-code production workflow with transactional integrity, row-locking, and DB transactions',
      '558 automated tests across 49 test files for role-based access and production workflows',
      'Security audit fixes for stored XSS through unrestricted file upload and brute-forceable password reset',
      'Query-plan-driven optimization that reduced the busiest report page from 45 to 12 queries and eliminated N+1 patterns',
      'Shared validation rules and rate limiting for hardened file-upload and password-reset flows',
    ],
    demonstrates:
      'Ability to design, secure, test, and optimize a production system for a live business, including concurrency-safe QR scanning and measurable database performance improvements.',
  },
  {
    slug: 'arthabooks',
    name: 'ArthaBooks',
    problem:
      'Small businesses (UMKM) need proper double-entry bookkeeping without hiring an accountant.',
    role: 'Solo developer (undergraduate thesis). Laravel 13, PHP 8.4, MySQL, Bootstrap 5.',
    stack: ['Laravel 13', 'PHP 8.4', 'MySQL', 'Bootstrap 5'],
    features: [
      'Automated journal entries (resolveAkunPair())',
      'Role-based access — Admin/Staff/Owner, 13 permissions',
      '5 financial reports including CALK',
      'Payroll approval workflow and audit trail',
    ],
    demonstrates:
      'Deep understanding of both software architecture and domain rules (accounting standards, SAK EMKM) — validated through formal thesis defense.',
  },
  {
    slug: 'reusemart',
    name: 'ReuseMart',
    problem:
      'A second-hand marketplace needed to coordinate 9 distinct user roles across web and mobile.',
    role: 'Laravel + MySQL (web), Flutter + Dart (mobile).',
    stack: ['Laravel', 'MySQL', 'Flutter', 'Dart'],
    features: [
      'Role-based permissions for Owner, Buyer, Seller, Hunter, Customer Service, Admin, Warehouse, Organization and Courier',
      'Listing and ordering',
      'Logistics',
      'Sales reporting',
    ],
    demonstrates:
      'Comfort building complex multi-role systems across both platforms simultaneously.',
  },
  {
    slug: 'bookhive',
    name: 'BookHive',
    problem:
      'A library needed a simple online system for borrowing, donations, and room reservations.',
    role: 'Laravel & MySQL.',
    stack: ['Laravel', 'MySQL'],
    features: [
      'Admin/User/Guest roles',
      'Borrowing & donation approval flow',
      'Room reservation',
      'Book recommendations',
    ],
    demonstrates:
      'Clean, focused execution on a smaller-scope system — good contrast to the bigger case studies.',
  },
]

/** §5 — the remaining projects, shown in the smaller "More Work" grid. */
export const MORE_PROJECTS: Project[] = [
  {
    slug: 't2kav-gym',
    name: 'T2KAV Gym',
    problem: 'A gym needed a mobile app for class and trainer bookings.',
    role: 'Flutter & Dart.',
    stack: ['Flutter', 'Dart'],
    features: [
      'Class, equipment and trainer browsing',
      'Booking & cancellation',
      'Profile management',
    ],
    demonstrates: 'Mobile-only capability, independent of the Laravel-heavy stack.',
  },
  {
    slug: 'padukuhan-tritis',
    name: 'Padukuhan Tritis',
    problem:
      'A village needed a public-facing profile site to showcase its culture and tourism potential.',
    role: 'React.',
    stack: ['React'],
    features: [
      'Responsive design',
      'Gallery',
      'Dedicated sections for identity and local resources',
    ],
    demonstrates:
      'Frontend craft and content presentation for a non-technical, public audience — good visual portfolio piece.',
  },
]
