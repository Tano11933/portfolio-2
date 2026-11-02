import { PROFILE } from './profile'

export const NAV_ITEMS = [
  { index: '01', label: 'Work', href: '#work' },
  { index: '02', label: 'About', href: '#about' },
  { index: '03', label: 'Contact', href: '#contact' },
] as const

export const WORDMARK = PROFILE.shortName
export const FULL_NAME = PROFILE.name
export const CONTACT = PROFILE.contact
