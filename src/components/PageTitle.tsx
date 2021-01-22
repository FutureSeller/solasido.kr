/** @jsx jsx */
import { Fragment, ReactNode, useRef } from 'react'
import { jsx, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import useOnScreen from '../hooks/useOnScreen'

import { color } from '../styles/color'
import { bp } from '../styles/responsive'

const Title = styled.h2`
  font-family: 'Source Sans Pro';
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: 20rem;

  ${bp.mq[bp.BreakPoint.TABLET]} {
    font-size: 1.8rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    font-size: 1.6rem;
  }
`

const slideIn = (isIntersection: boolean) => isIntersection ? keyframes`
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
` : ''

const SlideinUnderline = styled.div<{ isIntersection: boolean }>`
  width: 8rem;
  height: 0.8rem;
  background-color: ${color.solRed};
  animation: ${({ isIntersection }) => slideIn(isIntersection)} 1s forwards;

  ${bp.mq[bp.BreakPoint.TABLET]} {
    width: 7rem;
  }
`

export default function PageTitle({ children }: { children: ReactNode | ReactNode[] }) {
  const ref = useRef<HTMLHeadingElement | null>(null)
  const isIntersection = useOnScreen(ref)

  return (
    <Fragment>
      <Title ref={ref}>{children}</Title>
      <SlideinUnderline isIntersection={isIntersection}/>
    </Fragment>
  )
}