import { useState, useEffect, RefObject } from 'react'

export default function useOnScreen(ref: RefObject<HTMLDivElement | HTMLUListElement>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )

    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}