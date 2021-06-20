import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { colors } from '../../styles/colors'

const getEnabledSectionIndex = (scrollY: number, clientHeights: number[]) =>
  clientHeights.findIndex(height => height >= scrollY) ?? 0

const sections = ['About', 'Projects', 'Contact'] as const

interface Props {
  scrollY: number
  clientHeights: number[]
  offsets: number[]
  isMobileMenu?: boolean
}

export default function NavigationMenu({
  scrollY,
  clientHeights,
  offsets,
  isMobileMenu = false
}: Props) {
  return (
    <Menu isMobileMenu={isMobileMenu}>
      {
        sections.map((section, idx) => (
          <MenuItem
            key={section}
            isMobileMenu={isMobileMenu}
            enabled={getEnabledSectionIndex(scrollY, clientHeights) === idx}
            onClick={() => window.scrollTo(0, offsets[idx])}
          >
            {section}
          </MenuItem>
        ))
      }
    </Menu>
  )
}

const Menu = styled.ul<{ isMobileMenu: boolean }>`
  ${({ isMobileMenu }) => isMobileMenu
    ? css`
      display: flex;
      flex-direction: column;
    `
    : css`
      display: flex;
      align-items: center;
      height: 100%;
    `
  }
`

const MenuItem = styled.li <{ enabled: boolean, isMobileMenu: boolean }>`
  ${({ isMobileMenu }) => isMobileMenu
    ? css`
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
    `
    : css`
      margin-left: 50px;
    `
  }
  
  cursor: pointer;
  color: ${({ enabled }) => enabled ? colors.red : colors.black};
`
