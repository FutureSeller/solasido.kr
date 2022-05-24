import { useMemo } from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import type { MotionValue, MotionProps } from 'framer-motion'

const StyledMotionBox = styled(motion(Box))`
  position: absolute;
  width: 100%;
  height: 100%;
`

interface CarouselItemProps {
  index: number
  x: MotionValue
  // eslint-disable-next-line no-unused-vars
  renderCarouselItem: (props: { index: number }) => JSX.Element
  onDragEnd: MotionProps['onDragEnd']
}

export function CarouselItem({ index, x, renderCarouselItem, onDragEnd }: CarouselItemProps) {
  const child = useMemo(() => renderCarouselItem({ index }), [index, renderCarouselItem])

  return (
    <StyledMotionBox
      style={{
        x,
        left: `${index * 100}%`,
        right: `${index * 100}%`,
      }}
      draggable
      drag="x"
      dragElastic={1}
      onDragEnd={onDragEnd}
    >
      {child}
    </StyledMotionBox>
  )
}
