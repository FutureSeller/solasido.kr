import { useState, useEffect, RefObject } from 'react'

import type { LottiePlayer } from 'lottie-web'

interface Props {
  element?: RefObject<Element> | Document | Window
  path: string
}

const isSSR = !(typeof window !== 'undefined' && window.document?.createElement)

export default function useLottieAnimation({ element = isSSR ? undefined : window, path }: Props) {
  const [lottie, setLottie] = useState<LottiePlayer | null>(null)

  useEffect(() => {
    import('lottie-web').then(Lottie => setLottie(Lottie.default))
  }, [])

  useEffect(() => {
    const target = element && 'current' in element ? element.current : element
    if (target == null) {
      return
    }

    if (lottie && target) {
      const animation = lottie.loadAnimation({
        container: target as Element,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        // path to your animation file, place it inside public folder
        path,
      })

      return () => {
        animation.destroy()
      }
    }

    // eslint-disable-next-line
  }, [lottie])
}
