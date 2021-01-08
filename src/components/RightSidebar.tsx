import React from 'react'
import { useLocation } from '@reach/router'
import styled from '@emotion/styled'
import { isEmpty } from 'lodash'

import { color } from '../styles/color'
import { bp } from '../styles/responsive'

const Aside = styled.aside`
  position: fixed;
  top: 0;
  right: 3rem;
  width: 3rem;
  height: calc(100% - 6rem);
  margin: 3rem 0;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  color: ${color.solRed};
  font-size: 1.4rem;
  font-weight: 600;

  ${bp.mq[bp.BreakPoint.TABLET]} {
    display: none;
  }
`

export default function RightSidebar() {
  const { hash } = useLocation()

  return isEmpty(hash) ? null : <Aside>Better design, Better Life.</Aside>
}