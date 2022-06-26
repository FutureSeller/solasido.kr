import React, { useEffect, useState } from 'react'
import useIntersection from '../hooks/useIntersection'

export const IntersectionContext = React.createContext({ inView: false })

export const IntersectionObserver = ({
  children,
  reset = false, // if value set to true - observed element will reappear every time it shows up on the screen
}: {
  children: React.ReactNode
  reset?: boolean
}) => {
  const [inView, setInView] = useState(false)
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 1,
  })

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0
    if (inViewNow) {
      return setInView(inViewNow)
    } else if (reset) {
      return setInView(false)
    }
  }, [intersection, reset])

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div ref={intersectionRef}>{inView ? children : null}</div>
    </IntersectionContext.Provider>
  )
}
