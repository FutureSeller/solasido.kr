import { getServerSideSitemap } from 'next-sitemap'

import { generateSitemap } from '../../../utils/sitemapBuilder'

import type { GetServerSideProps } from 'next'

const SLUGS = [
  'korean-folk-village',
  'ed',
  'korean-traditional-pattern',
  'welivearth',
  'ovis',
  'chemstree',
  'citizen-politics-society',
  'young-doctors-forum',
  'ku-farm',
  'ku-innovation',
  'ku-40th-sejong-campus',
  'ku-115th',
  'hwayeon',
  'lavida',
  'global-order',
  'hind',
  'there',
  'christmas-2021',
  'national-patriots-and-veterans',
  'wechelin',
]

export const getServerSideProps: GetServerSideProps = async ctx => {
  console.log('[Sitemap] generating start!')

  ctx.res.setHeader('Cache-Control', 'public, maxage=60, stale-while-revalidate=600')

  return {
    ...getServerSideSitemap(
      ctx,
      SLUGS.map(slug => generateSitemap(`/project/${slug}`))
    ),
  }
}

// Default export to prevent next.js errors
export default function ProjectSitemap() {}
