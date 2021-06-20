import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/react'

const mimicSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10%);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

const SlideIn = styled.div<{ duration: number, isIntersecting: boolean }>`
  opacity: 0;
  animation: ${({ duration, isIntersecting }) => isIntersecting ? css`${mimicSlideIn} ${duration}s forwards` : null};
`

export default SlideIn
