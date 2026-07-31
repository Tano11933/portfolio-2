/** DESIGN-SYSTEM §4.1 — three numbered nav entries, mono index before label. */
export const NAV_ITEMS = [
  { index: '01', label: 'Work', href: '#work' },
  { index: '02', label: 'About', href: '#about' },
  { index: '03', label: 'Contact', href: '#contact' },
] as const

export const WORDMARK = 'Gabriel Gaetano'

/** PRD §7 — every CTA is a real, working link. */
export const CONTACT = {
  email: 'tanobaskara21@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gabrielgaetanoonenbaskara',
  linkedinLabel: 'linkedin.com/in/gabrielgaetanoonenbaskara',
  // 0822 2356 2389 in international form, as wa.me requires.
  whatsapp: 'https://wa.me/6282223562389',
  whatsappLabel: '+62 822 2356 2389',
} as const
