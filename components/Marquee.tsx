import React, { Fragment, useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import { css, keyframes } from '@emotion/react'

const scroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`

const MarqueeBox = styled(Box)<{ duration: string; delay: string; direction: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;

  ${({ duration, delay, direction }) => css`
    animation: ${scroll} ${duration} linear ${delay} infinite;
    animation-delay: ${delay};
    animation-direction: ${direction};
  `}
`

interface MarqueeProps {
  className?: string
  direction?: 'left' | 'right'
  speed?: number
  delay?: number
  children?: React.ReactNode
}

const Marquee: React.FC<MarqueeProps> = ({ className = '', direction = 'left', speed = 20, delay = 0, children }) => {
  const [containerWidth, setContainerWidth] = useState(0)
  const [marqueeWidth, setMarqueeWidth] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  const calculateWidth = () => {
    // Find width of container and width of marquee
    if (marqueeRef.current && containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width)
      setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width)
    }

    if (marqueeWidth < containerWidth) {
      setDuration(containerWidth / speed)
    } else {
      setDuration(marqueeWidth / speed)
    }
  }

  useEffect(() => {
    calculateWidth()

    // Rerender on window resize
    window.addEventListener('resize', calculateWidth)
    return () => {
      window.removeEventListener('resize', calculateWidth)
    }
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <Fragment>
      {!isMounted ? null : (
        <Box ref={containerRef} className={className} display="flex" flexDirection="row" width="100%" overflow="hidden">
          <MarqueeBox
            ref={marqueeRef}
            direction={direction === 'left' ? 'normal' : 'reverse'}
            duration={`${duration}s`}
            delay={`${delay}s`}
          >
            {children}
          </MarqueeBox>
          <MarqueeBox
            direction={direction === 'left' ? 'normal' : 'reverse'}
            duration={`${duration}s`}
            delay={`${delay}s`}
          >
            {children}
          </MarqueeBox>
        </Box>
      )}
    </Fragment>
  )
}

export default Marquee
