import '../styles/reset.css'
import '../styles/global.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
