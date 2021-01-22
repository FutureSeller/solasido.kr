/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useLocation, navigate } from '@reach/router'
import { GatsbyLinkProps } from 'gatsby'
import styled from '@emotion/styled'

import { useScrollYPosition } from 'react-use-scroll-position'
import useHashHeights from '../hooks/useHashHeights'

import { getIndex, PageName } from '../utils/height'
import { color } from '../styles/color'
import { bp } from '../styles/responsive'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 3rem;
  width: 3rem;
  height: calc(100% - 6rem);
  margin: 3rem 0;
  writing-mode: vertical-rl;

  ${bp.mq[bp.BreakPoint.LAPTOP]} {
    display: none;
  }
`

const Navigator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8.6rem;
`

const MarkedLink = ({ to, enabled }: GatsbyLinkProps<{ to: string }> & { enabled: boolean }) => (
  <button
    css={{
      display: 'inline-block',
      textAlign: 'center',
      height: 12,
      width: 12,
      backgroundColor: enabled ? color.solRed : color.solWhite,
      border: `0.2rem solid ${color.solRed}`,
      borderRadius: '100%',
    }}
    onClick={() => navigate(to)}
  />
)

export default function LeftSidebar() {
  const { pathname } = useLocation()
  const heights = useHashHeights()
  const scrollY = useScrollYPosition()

  return pathname === '/' ? (
    <Nav>
      <Navigator>
        <MarkedLink to="/#main" enabled={getIndex(scrollY, heights) === PageName.MAIN} />
        <MarkedLink to="/#about" enabled={getIndex(scrollY, heights) === PageName.ABOUT} />
        <MarkedLink to="/#projects" enabled={getIndex(scrollY, heights) === PageName.PROJECTS} />
        <MarkedLink to="/#contact" enabled={getIndex(scrollY, heights) === PageName.CONTACT} />
      </Navigator>
    </Nav>
  ) : null
}