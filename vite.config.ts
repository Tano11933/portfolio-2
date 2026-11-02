import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { PROFILE } from './src/data/profile.ts'

const escapeHtml = (value: string) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const json = (value: unknown) => JSON.stringify(value).replaceAll('<', '\\u003c')

export default defineConfig({
  plugins: [
    {
      name: 'portfolio-profile-metadata',
      transformIndexHtml: {
        order: 'pre',
        handler(html) {
          const person = {
            '@context': 'https://schema.org', '@type': 'Person', name: PROFILE.name,
            alternateName: [PROFILE.shortName, 'Gabriel Tano', 'Tano'],
            url: PROFILE.siteUrl, image: `${PROFILE.siteUrl}og-image.webp`, jobTitle: PROFILE.role,
            description: PROFILE.description,
            address: { '@type': 'PostalAddress', addressLocality: PROFILE.city, addressCountry: 'ID' },
            alumniOf: { '@type': 'CollegeOrUniversity', name: PROFILE.education.institution },
            knowsAbout: PROFILE.focus, sameAs: [PROFILE.contact.linkedin, PROFILE.contact.github],
          }
          const website = {
            '@context': 'https://schema.org', '@type': 'WebSite', name: `${PROFILE.shortName} Portfolio`,
            url: PROFILE.siteUrl, inLanguage: 'en', author: { '@type': 'Person', name: PROFILE.name },
          }
          const fields: Record<string, string> = {
            TITLE: `${PROFILE.name} | ${PROFILE.role}`, NAME: PROFILE.name, ROLE: PROFILE.role,
            URL: PROFILE.siteUrl, DESCRIPTION: PROFILE.description, SUMMARY: PROFILE.summary,
            EMAIL: PROFILE.contact.email, CV: PROFILE.cv,
          }
          let result = html
          for (const [key, value] of Object.entries(fields)) result = result.replaceAll(`__PROFILE_${key}__`, escapeHtml(value))
          return result.replace('__PROFILE_PERSON_JSON__', json(person)).replace('__PROFILE_WEBSITE_JSON__', json(website))
        },
      },
    },
    react(), tailwindcss(),
  ],
})
