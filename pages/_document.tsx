import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          {/** TODO: NeueDisplay는 더 이상 쓰이지 않는 폰트라 지워져야함. */}
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
