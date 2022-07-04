import Head from 'next/head'
import { useRouter } from 'next/router'

const DOMAIN = 'https://solasido.design'

const getLinkUrl = ({ pathname, lang }: { pathname: string; lang?: string }) => {
  const urls = [DOMAIN, lang || '', pathname.slice(1).replace(/\/+$/, '')].filter(Boolean)

  return urls.join('/').replace(/\/+$/, '')
}

interface Props {
  title: string
  description: string
  imageUrl?: string
}

export default function Meta({ title, description, imageUrl }: Props) {
  const router = useRouter()
  const { defaultLocale, locale, locales, pathname } = router

  return (
    <Head>
      <title>{title}</title>
      <link
        rel="canonical"
        href={getLinkUrl({
          lang: locale !== defaultLocale ? locale : '',
          pathname,
        })}
      />
      {locales?.map(lang => (
        <link key={lang} rel="alternate" href={getLinkUrl({ lang, pathname })} hrefLang={lang} />
      ))}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </Head>
  )
}
