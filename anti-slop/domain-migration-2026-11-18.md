# Custom domain migration

Primary URL: https://gabrielgaetano.tech/
Preferred site name: Gabriel Gaetano.

## Repository changes

- Updated the shared profile URL and modification date.
- Aligned WebSite structured data and Open Graph site name with the visible brand. Person and page title retain the full name.
- Generate robots.txt alongside sitemap.xml and the text summaries from the shared profile URL.
- Updated the public website links in README.
- Added `scripts/check-seo.mjs` to validate the production HTML and crawl discovery files.

## Cloudflare steps after deploying this commit

1. Confirm the custom domain serves the new canonical and sitemap.
2. At account level, create a Bulk Redirect list and enable its rule: source `gabrielgaetano-portfolio.pages.dev`, target `https://gabrielgaetano.tech`, status 301. Enable Preserve query string, Subpath matching and Preserve path suffix. Keep preview hostnames separate unless redirecting them is explicitly intended.
3. Verify the old homepage and a PDF path redirect to the matching new URLs without a loop. Avoid a path-only catch-all in public/_redirects: it would also affect the custom domain.
4. If www is desired, attach www.gabrielgaetano.tech to Pages and redirect it to the apex while preserving path and query.

## Search Console steps

1. Add the Domain property gabrielgaetano.tech and verify the supplied DNS TXT record in Cloudflare.
2. Submit https://gabrielgaetano.tech/sitemap.xml and inspect the homepage live.
3. Once permanent redirects are working, submit Change of Address from the old URL-prefix property. Keep the old property and redirect available, generally at least a year.
4. Update portfolio links on professional profiles and future CV versions.

Hosting activation is distinct from deployment of these repository changes. The new domain returned HTTPS 200 during inspection, before metadata deployment. Google chooses the final displayed site name and indexing timing; neither is guaranteed by metadata alone.

## Validation

- PASS: TypeScript and production build completed.
- PASS: production metadata checks with `node scripts/check-seo.mjs`.
- PASS: no old hostname remains in current public discovery files, metadata templates, shared profile or README.
- Live inspection: new domain returns 200; live canonical still uses pages.dev until deployment. Old production hostname returns 200, so its permanent redirect is still outstanding.
