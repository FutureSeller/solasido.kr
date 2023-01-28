import React, { Fragment, useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import { css, keyframes } from '@emotion/react'

const scroll = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`

const MarqueeBox = styled(Box)<{ duration: string; delay: string; direction: string }>`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  align-items: center;
  z-index: 1;
  min-width: 100%;

  ${({ duration, delay, direction }) => css`
    animation: ${scroll} ${duration} linear ${delay} infinite;
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

export default function Marquee({ className = '', direction = 'left', speed = 20, delay = 0, children }: MarqueeProps) {
  const [containerWidth, setContainerWidth] = useState(0)
  const [marqueeWidth, setMarqueeWidth] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isMounted) return

    const calculateWidth = () => {
      if (marqueeRef.current && containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width)
        setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width)
      }
    }

    calculateWidth()

    window.addEventListener('resize', calculateWidth)
    return () => {
      window.removeEventListener('resize', calculateWidth)
    }
  }, [isMounted])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const duration = marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed

  return (
    <Fragment>
      <Box
        ref={containerRef}
        className={className}
        display="flex"
        flexDirection="row"
        width="100%"
        position="relative"
        overflow="hidden"
      >
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
          aria-hidden
        >
          {children}
        </MarqueeBox>
      </Box>
    </Fragment>
  )
}
