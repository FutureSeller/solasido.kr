// Reference: https://github.com/koenvg/infinite-carousel-with-framer-motion
import { useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import { animate, motion, useMotionValue } from 'framer-motion'

import { CarouselItem } from './CarouselItem'

import type { MotionProps, AnimationOptions } from 'framer-motion'

const range = [-1, 0, 1]

const transition: AnimationOptions<unknown> = {
  type: 'spring',
  bounce: 0,
}

const StyledMotionBox = styled(motion(Box))`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

interface CarouselProps {
  className?: string
  autoplay?: boolean
  interval?: number
  customAnimate?: typeof animate
  // eslint-disable-next-line no-unused-vars
  renderCarouselItem: (props: { index: number }) => JSX.Element
  // eslint-disable-next-line no-unused-vars
  renderBottomNavigation?: (props: { index: number; handleNext: () => void }) => JSX.Element
}

export function Carousel({ className, autoplay, interval, renderCarouselItem, renderBottomNavigation }: CarouselProps) {
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0)

  const handlePrev = () => {
    setIndex(index => index - 1)
  }

  const handleNext = () => {
    setIndex(index => index + 1)
  }

  const handleEndDrag: MotionProps['onDragEnd'] = (_, dragProps) => {
    const clientWidth = containerRef.current?.clientWidth || 0

    const { offset } = dragProps

    if (offset.x > clientWidth / 4) {
      handlePrev()
    } else if (offset.x < -clientWidth / 4) {
      handleNext()
    } else {
      animate(x, calculateNewX(), transition)
    }
  }

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition)
    return controls.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  useEffect(() => {
    if (!autoplay) {
      return
    }
    const timer = setInterval(() => handleNext(), interval)
    return () => {
      clearInterval(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box className={className}>
      <StyledMotionBox ref={containerRef}>
        {range.map(rangeValue => {
          return (
            <CarouselItem
              key={rangeValue + index}
              index={rangeValue + index}
              renderCarouselItem={renderCarouselItem}
              x={x}
              onDragEnd={handleEndDrag}
            />
          )
        })}
      </StyledMotionBox>
      {renderBottomNavigation ? renderBottomNavigation({ index, handleNext }) : null}
    </Box>
  )
}
