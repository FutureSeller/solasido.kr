/** @jsx jsx */
import { Fragment, ReactNode } from 'react'
import { jsx, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { color } from '../styles/color'
import { bp } from '../styles/responsive'

const Title = styled.h2`
  font-family: 'Source Sans Pro';
  font-size: 2.2rem;
  font-weight: 700;

  ${bp.mq[bp.BreakPoint.TABLET]} {
    font-size: 1.8rem;
    margin-top: 23rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    font-size: 1.6rem;
    margin-top: 8.2rem;
  }
`

const slideIn = keyframes`
  0% {
    width: 0;
  }
  100% { 
    ${bp.mq[bp.BreakPoint.DESKTOP]} {
      width: 9rem;
    }

    ${bp.mq[bp.BreakPoint.TABLET]} {
      width: 7rem;
    }
  }
`

const SlideinUnderline = styled.div`
  width: 8rem;
  height: 0.8rem;
  background-color: ${color.solRed};
  animation: ${slideIn} 1s forwards;

  ${bp.mq[bp.BreakPoint.TABLET]} {
    width: 7rem;
  }
`

export default function PageTitle({ children }: { children: ReactNode | ReactNode[]}) {
  return (
    <Fragment>
      <Title>{children}</Title>
      <SlideinUnderline />
    </Fragment>
  )
}