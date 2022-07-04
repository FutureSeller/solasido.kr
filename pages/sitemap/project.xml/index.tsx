import { getServerSideSitemap } from 'next-sitemap'
import fs from 'fs'

import { generateSitemap } from '../../../utils/sitemapBuilder'

import type { GetServerSideProps } from 'next'

const SLUG_REGEX = /^\d{0,3}_(\S+)\.(jpg|png)$/

export const getServerSideProps: GetServerSideProps = async ctx => {
  console.log('[Sitemap] generating start!')

  const mainImageUrls = fs.readdirSync('./public/images/main')
  const pathanames = mainImageUrls
    .map(url => {
      const matched = url.match(SLUG_REGEX)
      if (!matched || matched.length < 2) {
        return undefined
      }

      return `/${matched[1]}`
    })
    .filter(Boolean)

  ctx.res.setHeader('Cache-Control', 'public, maxage=60, stale-while-revalidate=600')

  return {
    ...getServerSideSitemap(
      ctx,
      pathanames.map(pathname => generateSitemap(pathname!))
    ),
  }
}

// Default export to prevent next.js errors
export default function ProjectSitemap() {}
