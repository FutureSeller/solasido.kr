import React, { Fragment, useState, useCallback } from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import { css, keyframes } from '@emotion/react'

import useCallbackRef from '../hooks/useCallbackRef'
import useEventListener from '../hooks/useEventListener'

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

export default function Marquee({ className = '', direction = 'left', speed = 20, delay = 0, children }: MarqueeProps) {
  const [containerWidth, setContainerWidth] = useState(0)
  const [marqueeWidth, setMarqueeWidth] = useState(0)
  const [duration, setDuration] = useState(0)

  const containerCallbackRef = useCallbackRef((node: HTMLDivElement | null) => {
    if (!node) {
      return
    }
    setContainerWidth(node.getBoundingClientRect().width)
  })

  const marqueeCallbackRef = useCallbackRef((node: HTMLDivElement | null) => {
    if (!node) {
      return
    }
    setMarqueeWidth(node.getBoundingClientRect().width)
  })

  const calculateWidth = useCallback(() => {
    if (marqueeWidth < containerWidth) {
      setDuration(Math.round(containerWidth / speed))
    } else {
      setDuration(Math.round(marqueeWidth / speed))
    }
  }, [marqueeWidth, containerWidth])

  useEventListener({
    type: 'resize',
    handleBeforeListen: calculateWidth,
    listener: calculateWidth,
  })

  return (
    <Fragment>
      <Box
        ref={containerCallbackRef}
        className={className}
        display="flex"
        flexDirection="row"
        width="100%"
        overflow="hidden"
      >
        <MarqueeBox
          ref={marqueeCallbackRef}
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
    </Fragment>
  )
}
