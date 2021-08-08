import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Button } from '@chakra-ui/react'

import type { UseDisclosureReturn } from '@chakra-ui/react'

const STROKE_WIDTH = 2
const X_POSITION = 10
const INITIAL_VARIANT = 'closed'
const DEFAULT_DELAY_TIME = 0.2

interface Props {
  width?: number
  height?: number
  color?: string
  isOpen: UseDisclosureReturn['isOpen']
  onToggle: UseDisclosureReturn['onToggle']
}

export default function NavButton({ width = 36, height = 36, isOpen, onToggle, color = 'white' }: Props) {
  const variant = isOpen ? 'opened' : 'closed'
  const heightUnit = height / 3

  return (
    <StyledButton variant="link" onClick={onToggle} aria-label="페이지 목록 확인">
      <motion.svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        stroke={isOpen ? 'black' : color}
        strokeWidth={STROKE_WIDTH}
      >
        <motion.circle cx={width / 2} cy={height / 2} r={width / 2.5} fill="transparent" />
        <motion.line
          x1={X_POSITION}
          x2={width - X_POSITION}
          y1={heightUnit}
          y2={heightUnit}
          initial={INITIAL_VARIANT}
          animate={variant}
          variants={{
            closed: {
              rotate: 0,
              translateY: 0,
            },
            opened: {
              rotate: 45,
              translateY: 6,
            },
          }}
          transition={{ delay: DEFAULT_DELAY_TIME }}
        />
        <motion.line
          x1={X_POSITION}
          x2={width - X_POSITION}
          y1={height / 2}
          y2={height / 2}
          initial={INITIAL_VARIANT}
          animate={variant}
          variants={{
            closed: {
              opacity: 1,
            },
            opened: {
              opacity: 0,
            },
          }}
          transition={{ delay: DEFAULT_DELAY_TIME }}
        />
        <motion.line
          x1={X_POSITION}
          x2={width - X_POSITION}
          y1={heightUnit * 2}
          y2={heightUnit * 2}
          initial={INITIAL_VARIANT}
          animate={variant}
          variants={{
            closed: {
              rotate: 0,
              translateY: 0,
            },
            opened: {
              rotate: -45,
              translateY: -6,
            },
          }}
          transition={{ delay: DEFAULT_DELAY_TIME }}
        />
      </motion.svg>
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  z-index: ${({ theme }) => theme.zIndices.menuIcon};
  padding: 0;
`
