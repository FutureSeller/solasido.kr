/** @jsx jsx */
import { ReactNode } from 'react'
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'

const IndentFragment = styled.div`
  padding-left: 1rem;
`

export default function Indent({ children }: { children: ReactNode | ReactNode[] }) {
  return <IndentFragment>{children}</IndentFragment>
}

