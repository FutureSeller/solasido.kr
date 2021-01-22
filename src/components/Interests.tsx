/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'

import { color } from '../styles/color'
import { bp } from '../styles/responsive'

const Wrapper = styled.div<{ pathname: string }>`
  margin-top: ${({ pathname }) => pathname === 'main' ? '5.1rem' : '2.8rem'};

  ${bp.mq[bp.BreakPoint.TABLET]} {
    margin-top: 5rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    margin-top: ${({ pathname }) => pathname === 'main' ? '10rem' : '2.8rem'};
  }
`

const Interest = styled.p`
  font-family: 'lovelo';
  font-size: 3.6rem;
  font-weight: 900;
  line-height: 3.6rem;
  width: 29rem;
  border-bottom: 0.4rem solid ${color.solBlack};
  padding-top: 2.4rem;

  ${bp.mq[bp.BreakPoint.TABLET]} {
    width: 25.5rem;
    font-size: 3.2rem;
    line-height: 3.2rem;
    padding-top: 1.8rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    width: 18rem;
    font-size: 2.2rem;
    line-height: 2.2rem;
    border-bottom: 0.3rem solid ${color.solBlack};
    padding-top: 0.8rem;
  }
`

export default function Interests({ pathname }: { pathname: string}) {
  return (
    <Wrapper pathname={pathname}>
      <Interest>Branding</Interest>
      <Interest>Identity Design</Interest>
    </Wrapper>
  )
}