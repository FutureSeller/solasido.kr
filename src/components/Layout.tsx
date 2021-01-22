/** @jsx jsx */
import { ReactNode } from 'react'
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'

import { bp } from '../styles/responsive'

const LayoutFragment = styled.div`
  width: calc(100% - 6rem);
  height: 100%;
  min-height: 100vh;
  padding: 0 15rem;
  margin-top: 20rem;

  ${bp.mq[bp.BreakPoint.LAPTOP]} {
    min-height: 0;
    padding: 0 10rem;
    margin-bottom: 10rem;
  }

  ${bp.mq[bp.BreakPoint.TABLET]} {
    padding: 0 3rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    width: 100%;
    margin-top: 10rem;
    padding: 0 1rem;
  }
`

export default function Layout({ id, children }: {
  id?: string
  children: ReactNode | ReactNode[]
}) {
  return <LayoutFragment id={id}>{children}</LayoutFragment>
}