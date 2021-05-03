import '../styles/reset.scss'

import { AppProps } from 'next/app'
import { DeviceTypeContextProvider } from '../context/DeviceTypeContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DeviceTypeContextProvider>
      <Component {...pageProps} />
    </DeviceTypeContextProvider>
  )
}
