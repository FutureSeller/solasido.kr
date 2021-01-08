/** @jsx jsx */
import { ReactNode } from 'react'
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'

import { bp } from '../styles/responsive'

const LayoutFragment = styled.div`
  width: calc(100% - 6rem);
  height: 100%;
  padding: 25rem 15rem 15rem;

  ${bp.mq[bp.BreakPoint.LAPTOP]} {
    padding: 25rem 10rem 15rem;
  }

  ${bp.mq[bp.BreakPoint.TABLET]} {
    padding: 25rem 6rem 15rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    padding: 8rem 3rem;
  }
`

export default function Layout({ id, children }: {
  id: string
  children: ReactNode | ReactNode[]
}) {
  return <LayoutFragment id={id}>{children}</LayoutFragment>
}