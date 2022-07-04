import Head from 'next/head'
import { useRouter } from 'next/router'

const DOAAIN = 'https://solasido.design'

const getCanonicalUrl = (router: ReturnType<typeof useRouter>) => {
  const locale = router.locale === 'ko' ? '' : `/${router.locale}`

  return `${DOAAIN}${locale}${router.pathname}`.replace(/\/+$/, '')
}

interface Props {
  title: string
  description: string
  imageUrl?: string
}

export default function Meta({ title, description, imageUrl }: Props) {
  const router = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={getCanonicalUrl(router)} />
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
