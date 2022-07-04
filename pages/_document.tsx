import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const NEXT_PUBLIC_GA_KEY = process.env.NEXT_PUBLIC_GA_KEY

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          {process.env.NODE_ENV === 'production' && (
            <>
              {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
              <Script id="google-analytics" src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_KEY}`} />
              <Script
                id="google-analytics-data-layer"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-233528864-1');
              `,
                }}
              />
            </>
          )}
          <link rel="preload" href="/fonts/NeueDisplay.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link
            rel="preload"
            href="/fonts/gordita-regular-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/gordita-medium-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/gordita-bold-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="preload" href="/fonts/SUIT-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/SUIT-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/SUIT-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
