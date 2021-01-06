/** @jsx jsx */
import { ReactNode } from 'react'
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'

import { bp } from '../styles/responsive'

const Wrapper = styled.div`
  width: calc(100% - 6rem);
  height: 100vh;
  padding: 25rem 15rem 0;

  ${bp.mq[bp.BreakPoint.LAPTOP]} {
    padding: 25rem 10rem;
  }

  ${bp.mq[bp.BreakPoint.TABLET]} {
    padding: 25rem 6rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    padding: 15rem 3rem;
  }
`

interface Props {
  children: ReactNode | ReactNode[]
}

export default function Layout({ children }: Props) {
  return <Wrapper>{children}</Wrapper>
}