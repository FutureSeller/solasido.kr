import { useEffect, RefObject } from 'react'

interface Props {
  type: keyof WindowEventMap
  listener: () => void
  handleBeforeListen?: () => void
  element?: RefObject<Element> | Document | Window
  options?: AddEventListenerOptions
}

const isSSR = !(typeof window !== 'undefined' && window.document?.createElement)

export default function useEventListener({
  type,
  listener,
  element = isSSR ? undefined : window,
  handleBeforeListen,
  options,
}: Props) {
  useEffect(() => {
    const target = element && 'current' in element ? element.current : element
    if (target == null) {
      return
    }

    handleBeforeListen?.()

    target.addEventListener(type, listener, options)
    return () => {
      target.removeEventListener(type, listener)
    }
    // eslint-disable-next-line
  }, [type, element, options, listener])
}
