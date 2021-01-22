import React from 'react'
import styled from '@emotion/styled'

import { useScrollYPosition } from 'react-use-scroll-position'
import useHashHeights from '../hooks/useHashHeights'

import { getIndex, PageName } from '../utils/height'
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
  const heights = useHashHeights()
  const scrollY = useScrollYPosition()

  return getIndex(scrollY, heights) === PageName.MAIN ? null : <Aside>Better design, Better Life.</Aside>
}