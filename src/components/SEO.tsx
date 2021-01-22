import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  title?: string
  description?: string
  lang?: string
}

export default function SEO({ description, title, lang = 'ko' }: Props) {
  const { site } = useStaticQuery<GatsbyTypes.SiteSEOQueryQuery>(
    graphql`
      query SiteSEOQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaTitle = title ?? site?.siteMetadata?.title ?? ''
  const metaDescription = description ?? site?.siteMetadata?.description ?? ''

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]}
    />
  )
}
