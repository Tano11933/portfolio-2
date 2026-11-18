import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const origin = 'https://gabrielgaetano.tech/'
const read = path => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8')
const html = await read('index.html')
assert.ok(!html.includes('__PROFILE_'), 'Metadata placeholders must be resolved')
assert.ok(!html.includes('gabrielgaetano-portfolio.pages.dev'), 'HTML must use the new domain')
assert.ok(html.includes(`<link rel="canonical" href="${origin}"`))
for (const field of ['og:url', 'twitter:url']) {
  assert.match(html, new RegExp(`(?:property|name)="${field}" content="https://gabrielgaetano\\.tech/"`))
}
assert.ok(html.includes('property="og:site_name" content="Gabriel Gaetano"'))
assert.ok(html.includes('name="robots" content="index, follow, max-image-preview:large"'))
const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]))
for (const type of ['WebSite', 'Person']) {
  const schema = schemas.find(item => item['@type'] === type)
  assert.ok(schema, `${type} structured data must exist`)
  assert.equal(schema.url, origin)
}
assert.equal(schemas.find(item => item['@type'] === 'WebSite').name, 'Gabriel Gaetano')
const robots = await read('robots.txt')
assert.ok(robots.includes(`Sitemap: ${origin}sitemap.xml`))
assert.ok(!robots.includes('Disallow: /'))
const sitemap = await read('sitemap.xml')
assert.ok(sitemap.includes(`<loc>${origin}</loc>`))
assert.ok(sitemap.includes('<lastmod>2026-11-18</lastmod>'))
for (const path of ['robots.txt', 'sitemap.xml', 'index.md', 'llms.txt']) {
  const content = await read(path)
  assert.ok(content.includes(origin), `${path} must reference the new domain`)
  assert.ok(!content.includes('gabrielgaetano-portfolio.pages.dev'), `${path} must not reference the old domain`)
}
console.log('PASS: canonical, social metadata, site name, JSON-LD, crawl rules, sitemap and summaries use gabrielgaetano.tech.')
