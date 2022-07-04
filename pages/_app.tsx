import 'nprogress/nprogress.css'

import { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ApolloProvider } from '@apollo/client'
import Router from 'next/router'
import NProgress from 'nprogress'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { useApollo } from '../apollo/client'

import theme from '../styles/theme'

import Logo from '../components/pageLayout/Logo'
import MenuButton from '../components/pageLayout/MenuButton'

import type { AppProps } from 'next/app'

const NEXT_PUBLIC_GA_KEY = process.env.NEXT_PUBLIC_GA_KEY as string

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const apolloClient = useApollo({
    initialState: pageProps.initialApolloState,
  })

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const handleRouteChange = (url: URL) => {
        window.gtag('config', NEXT_PUBLIC_GA_KEY, {
          page_path: url,
        })
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <Global
          styles={`
          @font-face {
            font-family: 'Neue Display';
            src: url('/fonts/NeueDisplay.woff2') format('woff2');
            font-style: normal;
            font-weight: 900;
            font-display: swap;
          }

          @font-face {
            font-family: 'Gordita Bold';
            src: url('/fonts/gordita-bold-webfont.woff2') format('woff2');
            font-style: normal;
            font-weight: 700;
            font-display: swap;
          }

          @font-face {
            font-family: 'Gordita Regular';
            src: url('/fonts/gordita-regular-webfont.woff2') format('woff2');
            font-style: normal;
            font-weight: 400;
            font-display: swap;
          }

          @font-face {
            font-family: 'SUIT Bold';
            src: url('/fonts/SUIT-Bold.woff2') format('woff2');
            font-style: normal;
            font-weight: 700;
            font-display: swap;
          }

          @font-face {
            font-family: 'SUIT Medium';
            src: url('/fonts/SUIT-Medium.woff2') format('woff2');
            font-style: normal;
            font-weight: 700;
            font-display: swap;
          }

          @font-face {
            font-family: 'SUIT Regular';
            src: url('/fonts/SUIT-Regular.woff2') format('woff2');
            font-style: normal;
            font-weight: 400;
            font-display: swap;
          }

          html, body {
            min-width: 320px;
            height: 100%;
          }

          ul,
          ol {
            list-style: none;
          }

          #__next {
            height: 100%;
          }

          #nprogress .bar {
            background: var(--chakra-colors-primary);
            height: 4px;
          }

          #nprogress .peg {
            box-shadow: 0 0 10px var(--chakra-colors-primary), 0 0 5px var(--chakra-colors-primary);
          }          
        `}
        />
        <Logo />
        <MenuButton />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}
export default appWithTranslation(App)
