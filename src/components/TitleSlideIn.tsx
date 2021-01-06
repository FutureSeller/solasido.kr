/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react'

import { color } from '../styles/color'
import { bp } from '../styles/responsive'

const slideIn = keyframes`
  0% {
    transform: translateX(-900px);
  }
  100% { 
    transform: translateX(0);
  }
`

export default function TitleSlideIn() {
  return (
    <div css={css`
      position: absolute;
      top: calc(50% - 1.3rem);
      left: -20rem;
      width: 90rem;
      height: 1.8rem;
      background-color: ${color.solRed};
      animation: ${slideIn} 1s forwards;

      ${bp.mq[bp.BreakPoint.TABLET]} {
        width: 73rem;
        height: 1.5rem;
      }

      ${bp.mq[bp.BreakPoint.MOBILE]} {
        width: 48rem;
        height: 0.9rem;
        top: calc(50% - 1rem);
      }
    `}/>
  )
}