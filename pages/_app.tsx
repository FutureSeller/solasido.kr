import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import 'nprogress/nprogress.css'

import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ApolloProvider } from '@apollo/client'
import Router from 'next/router'
import NProgress from 'nprogress'

import { useApollo } from '../apollo/client'

import theme from '../styles/theme'

import type { AppProps } from 'next/app'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo({
    initialState: pageProps.initialApolloState,
  })

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
            font-family: 'SUIT Regular';
            src: url('/fonts/SUIT-Regular.woff2') format('woff2');
            font-style: normal;
            font-weight: 400;
            font-display: swap;
          }

          html {
            height: -webkit-fill-available;
          }

          body {
            min-height: 100vh;
            min-height: -webkit-fill-available;
          }

          ul,
          ol {
            list-style: none;
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
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}
export default App
