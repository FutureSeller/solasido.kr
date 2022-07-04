/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || 'https://solasido.design'
const config = {
  siteUrl,
  generateRobotsTxt: true,
  autoLastmod: true,
  exclude: ['/sitemap/*', '/*/project/*', '/project/*'],
  alternateRefs: [
    {
      href: `${siteUrl}/en`,
      hreflang: 'en',
    },
  ],
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/sitemap/project.xml`],
  },
}

module.exports = config
