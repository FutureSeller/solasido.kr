import { useState, useEffect } from 'react'

import useDeviceType from './useDeviceType'

export default function useSectionYOffset() {
  const deviceType = useDeviceType()
  const [offsets, setOffsets] = useState<number[]>([])
  const [clientHeights, setClientHeights] = useState<number[]>([])

  useEffect(() => {
    if (!window) {
      return
    }

    const pageYOffset = window.pageYOffset

    setClientHeights(
      Array.from(document.querySelectorAll('section'))
        .map(section => section.clientHeight)
        .map((s => (v: number) => s += v)(0))
        .slice(1)
    )

    setOffsets([
      Math.round(document.querySelector('#about')?.getBoundingClientRect().top ?? 0),
      Math.round(document.querySelector('#projects')?.getBoundingClientRect().top ?? 0),
      Math.round(document.querySelector('#contact')?.getBoundingClientRect().top ?? 0),
    ].map(top => pageYOffset + top))
  }, [deviceType])

  return { offsets, clientHeights }
}
