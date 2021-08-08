import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Flex, Text } from '@chakra-ui/react'

import { responsive } from '../../styles/responsive'

const BASE_DELAY_TIME = 0.4
const ADDITIONAL_DELAY_TIME = 0.3

const letter = {
  hidden: {
    width: 0,
  },
  visible: (idx: number) => ({
    width: '100%',
    transition: {
      duration: 1,
      delay: idx >= 2 ? idx * BASE_DELAY_TIME + ADDITIONAL_DELAY_TIME : idx * BASE_DELAY_TIME,
    },
  }),
}

const hideletter = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 4 * BASE_DELAY_TIME + ADDITIONAL_DELAY_TIME,
    },
  },
}

const colorLetter = {
  hidden: {
    color: 'var(--chakra-colors-white)',
  },
  visible: {
    color: 'var(--chakra-colors-primary)',
    transition: {
      delay: 4 * BASE_DELAY_TIME + 2 * ADDITIONAL_DELAY_TIME,
    },
  },
}

export default function Slogan() {
  return (
    <StyledFlex alignItems="center" overflow="hidden" width="100%" height="100%" color="white" whiteSpace="nowrap">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
      >
        <MotionText variants={letter} custom={0}>
          <MotionSpan variants={hideletter}>Better</MotionSpan>
        </MotionText>
        <MotionText variants={letter} custom={1}>
          <MotionSpan variants={colorLetter}>Design</MotionSpan>
          <MotionSpan variants={hideletter}>{','}</MotionSpan>
        </MotionText>
        <MotionText variants={letter} custom={2}>
          <MotionSpan variants={hideletter}>Bett</MotionSpan>
          <MotionSpan variants={colorLetter}>er</MotionSpan>
        </MotionText>
        <MotionText variants={letter} custom={3}>
          <MotionSpan variants={hideletter}>Life</MotionSpan>
          <MotionSpan variants={colorLetter}>{'.'}</MotionSpan>
        </MotionText>
      </motion.div>
    </StyledFlex>
  )
}

const StyledFlex = styled(Flex)`
  padding: 0 60px;
  font-size: 8vw;
  font-family: ${({ theme }) => theme.fonts.neueDisplay};
  line-height: ${({ theme }) => theme.lineHeights.base};

  ${responsive.xlLte} {
    font-size: 10vw;
  }

  ${responsive.mdLte} {
    padding: 0 24px;
    font-size: 12vw;
  }

  ${responsive.smLte} {
    padding: 0 12px;
  }
`

const MotionText = styled(motion(Text))`
  overflow: hidden;
`

const MotionSpan = styled(motion.span)`
  display: inline-block;
  line-height: 1.25;
`
