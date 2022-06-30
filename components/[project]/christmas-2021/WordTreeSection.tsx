import { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { motion, useAnimation } from 'framer-motion'

import { SectionBox } from '../CommonLayout'
import { breakpoints } from '../../../styles/responsive'

const sleep = (n = 1000) => {
  return new Promise(resolve => setTimeout(resolve, n))
}

const START_INDEX = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55]
const TEXT = 'CHRISTMAS'

const StyledMotionSpan = styled(motion.span)`
  font-family: ${({ theme }) => theme.fonts.neueDisplay};
  font-size: 24px;
  opacity: 0;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 40px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    font-size: 80px;
  }
`

export default function WordTreeSection() {
  const controls = useAnimation()

  async function sequence() {
    await controls.start(i => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.01,
      },
    }))
    await controls.start(i => ({
      opacity: 0,
      transition: {
        delay: (TEXT.length * (TEXT.length - 1) - i) * 0.05,
        duration: 0.0001,
      },
    }))
    await sleep()

    sequence()
  }

  useEffect(() => {
    sequence()
  }, [])

  return (
    <SectionBox>
      <Box paddingLeft="50%" color="#000">
        {Array.from({ length: TEXT.length }).map((_, index) => {
          return (
            <Box key={`WordTreeRowIndex-${index}`}>
              {TEXT.slice(0, index + 1)
                .split('')
                .map((character, wordIndex) => (
                  <StyledMotionSpan
                    key={`WordTree-${index}-${wordIndex}`}
                    animate={controls}
                    custom={START_INDEX[index] + wordIndex}
                  >
                    {character}
                  </StyledMotionSpan>
                ))}
            </Box>
          )
        })}
      </Box>
    </SectionBox>
  )
}
