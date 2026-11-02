export type Project = {
  status?: string
  period?: string
  context?: string
  links?: { label: string; url: string }[]
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
    slug: 'eaglejeans', name: 'EagleJeans', period: 'Jun-Oct 2026', context: 'Client project',
    problem: 'A garment manufacturer needed to track production through 15 stages, with reliable access controls and concurrent QR-code scans.',
    role: 'Freelance backend developer. Worked with the business owner to define requirements and built the Laravel/Livewire backend, organizing business logic into eight services.',
    stack: ['Laravel', 'Livewire', 'PHP', 'MySQL', 'PWA'],
    features: [
      'Access controls for 12 roles using middleware and authorization policies',
      'Database transactions and row locking for QR-code generation and production scans',
      'Shared file-upload validation and password-reset rate limiting at six attempts per minute',
      'Query-plan analysis, N+1 fixes and targeted indexes reduced the busiest report from 45 to 12 queries',
    ],
    demonstrates: 'Used daily by 50-60 staff, processing approximately 60-100 production orders per day.',
  },
  {
    slug: 'arthabooks', name: 'ArthaBooks', period: 'Jun 2026', context: 'Undergraduate thesis',
    problem: 'A double-entry accounting application for Indonesian small businesses, supporting SAK EMKM reporting requirements.',
    role: 'Solo developer. Built the accounting workflow, role-based access, reports and payroll approvals as an undergraduate thesis project.',
    stack: ['Laravel 13', 'PHP 8.4', 'MySQL', 'Bootstrap 5'],
    features: [
      'Automated double-entry journal engine',
      'Three user roles with 13 permissions',
      'Five financial reports, including Catatan atas Laporan Keuangan (CALK)',
      'Payroll approval workflow and an audit trail',
    ],
    demonstrates: 'Evaluated through UAT with 32 respondents across 10 SMEs, with a mean score of 4.00/5.00.',
  },
  {
    slug: 'spotify-clone', name: 'Melodia (Spotify Clone)', status: 'In progress', period: '2026-present', context: 'Personal project',
    problem: 'A music streaming application with a responsive listening interface, catalog management and personal playlists. Screenshots use demo catalog data and accounts.',
    role: 'Solo developer. Developing the React/TypeScript frontend alongside a Go REST and WebSocket API.',
    stack: ['Go', 'Fiber', 'React', 'TypeScript', 'PostgreSQL', 'Redis'],
    features: [
      'Layered backend with Fiber v2 and GORM',
      'JWT access and refresh tokens, token rotation and bcrypt',
      'Redis-based rate limiting and catalog caching',
      'WebSocket hub for real-time features',
    ],
    demonstrates: 'Continuing work on the Go API and React interface. The application is a personal project in progress.',
    links: [
      { label: 'Backend repository', url: 'https://github.com/Tano11933/spotify-backend' },
      { label: 'Frontend repository', url: 'https://github.com/Tano11933/spotify-frontend' },
    ],
  },
]

export const MORE_PROJECTS: Project[] = [
  {
    slug: 'reusemart', name: 'ReuseMart', period: 'May 2025', context: 'Team project: 3 members',
    problem: 'A second-hand marketplace spanning web and mobile, with workflows for nine user roles.',
    role: 'Developer in a three-person team. My work covered buyer transactions, PDF reporting and role-based mobile workflows.',
    stack: ['Laravel', 'MySQL', 'Flutter', 'Dart'],
    features: [
      'Buyer checkout, delivery selection, reward-point redemption and payment verification',
      'Automatic cancellation with point refunds',
      'Three PDF reports: item donations, donation requests and consignor transactions',
      'Mobile login and role-based menus, courier profile and delivery tracking, plus sales and delivery push notifications',
    ],
    demonstrates: 'Contributions across transactions, reporting and mobile delivery workflows in a shared codebase.',
  },
  {
    slug: 'padukuhan-tritis', name: 'Padukuhan Tritis', period: 'Jul 2025', context: 'Village information website',
    problem: 'A public website presenting village information, tourism potential and community activities.',
    role: 'Frontend developer. Built the responsive React website and its content presentation.',
    stack: ['React', 'Vite', 'Bootstrap 5'],
    features: ['Village profile and information', 'Tourism and local products', 'Responsive media gallery'],
    demonstrates: 'Responsive interfaces for a public, non-technical audience.',
    links: [{ label: 'Website repository', url: 'https://github.com/Tano11933/dusun_tritis' }],
  },
  {
    slug: 'bookhive', name: 'BookHive',
    problem: 'A library web application for borrowing, donations and room reservations.',
    role: 'Laravel and MySQL application.',
    stack: ['Laravel', 'MySQL'],
    features: ['Admin, user and guest access', 'Borrowing and donation approvals', 'Room reservations and book recommendations'],
    demonstrates: 'Library administration and member workflows.',
  },
  {
    slug: 't2kav-gym', name: 'T2KAV Gym',
    problem: 'A mobile application for browsing gym services and booking classes or trainers.',
    role: 'Flutter and Dart application.',
    stack: ['Flutter', 'Dart'],
    features: ['Class, equipment and trainer browsing', 'Booking and cancellation', 'Profile management'],
    demonstrates: 'Mobile service browsing and booking workflows.',
  },
]
