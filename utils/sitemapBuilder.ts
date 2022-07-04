import type { ISitemapField } from 'next-sitemap'

const SITE_URL = 'https://solasido.design'

export const generateSitemap = (pathname: string): ISitemapField => {
  return {
    loc: `${SITE_URL}${pathname}`,
    lastmod: new Date().toISOString(),
    priority: 1,
    alternateRefs: [
      {
        href: `${SITE_URL}/en${pathname}`,
        hreflang: 'en',
      },
    ],
  }
}
