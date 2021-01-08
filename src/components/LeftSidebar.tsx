/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useLocation } from '@reach/router'
import { Link, GatsbyLinkProps } from 'gatsby'
import styled from '@emotion/styled'

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

const MarkedLink = ({ to, relativePath }: GatsbyLinkProps<{to: string}> & { relativePath: string }) => (
  <Link
    to={to}
    css={{
      display: 'inline-block',
      textAlign: 'center',
      height: 12,
      width: 12,
      backgroundColor: to === relativePath ? color.solRed : color.solWhite,
      border: `0.2rem solid ${color.solRed}`,
      borderRadius: '100%',
    }}
  />
)

export default function LeftSidebar() {
  const { pathname, hash } = useLocation()
  const relativePath = `${pathname}${hash}`

  return (
    <Nav>
      <Navigator>
        <MarkedLink to="/" relativePath={relativePath} />
        <MarkedLink to="/#about" relativePath={relativePath} />
        <MarkedLink to="/#projects" relativePath={relativePath} />
        <MarkedLink to="/#contact" relativePath={relativePath} />
      </Navigator>
    </Nav>
  )
}