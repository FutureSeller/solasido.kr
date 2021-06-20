import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const mimicBlink = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Blink = styled.div<{ duration: number, delay: number }>`
  opacity: 0;
  backface-visibility: hidden;
  animation: ${mimicBlink} ${({ duration }) => `${duration}s`} forwards;
  animation-delay: ${({ delay }) => `${delay}s`};
`

export default Blink