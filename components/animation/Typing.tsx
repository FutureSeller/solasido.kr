import { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

interface Props {
  duration: number
  delay?: number
  children: React.ReactNode
}

export default function Typing({ duration, delay, children }: Props) {
  const divRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!divRef.current) {
      return
    }

    const typingDiv = divRef.current

    const handleAnimationEnd = () => {
      const style = typingDiv.style
      if (!style) {
        return
      }
      style.whiteSpace = 'normal'
      style.overflow = 'visible'
    }

    typingDiv.addEventListener('animationend', handleAnimationEnd)

    return () => {
      typingDiv.removeEventListener('animationend', handleAnimationEnd)
    }
  }, [])

  return (
    <TypingWrapper duration={duration} delay={delay} ref={divRef}>
      {children}
    </TypingWrapper>
  )
}

const mimicType = keyframes`
  from { 
    width: 0;
  }
  to { 
    width: 100%;
  }
`

const TypingWrapper = styled.div<{ duration: number, delay?: number }>`
  overflow: hidden;
  white-space: nowrap;
  animation: ${mimicType} ${({ duration }) => `${duration}s`} steps(40) 1s 1 normal both;
  animation-delay: ${({ delay }) => delay ? `${delay}s` : null};
`
