import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'

import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ApolloProvider } from '@apollo/client'

import { useApollo } from '../apollo/client'

import theme from '../styles/theme'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
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

          ul,
          ol {
            list-style: none;
          }
        `}
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}
export default MyApp
