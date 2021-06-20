import { useState, useEffect } from 'react'

export default function useScrollY() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (!window) {
      return
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollY
}