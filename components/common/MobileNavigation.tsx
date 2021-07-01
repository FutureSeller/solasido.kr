import { useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

import Menu from './Menu'

import { colors } from '../../styles/colors'
import { neue } from '../../styles/typography'
import { zIndex } from '../../styles/zIndex'

interface Props {
  scrollY: number
  offsets: number[]
  clientHeights: number[]
}

export default function MobileNavigation({ scrollY, offsets, clientHeights }: Props) {
  const [isVisibleMenuItems, setVisibleMenuItems] = useState(false)

  return (
    <Container>
      <Row>
        <SloganWrapper onClick={() => window.scrollTo(0, 0)}>
          <SloganFont>
            Better design, Better Life.
          </SloganFont>
        </SloganWrapper>
        <MenuButton onClick={() => setVisibleMenuItems(visible => !visible)}>
          {isVisibleMenuItems ?
            (
              <Image
                src="/assets/close.svg"
                alt="close-menu"
                layout="fill"
              />
            )
            : (
              <Image
                src="/assets/hamburger.svg"
                alt="open-menu"
                layout="fill"
              />
            )
          }
        </MenuButton>
      </Row>
      <MenuWrapper isVisibleMenuItems={isVisibleMenuItems}>
        <MenuFont>
          <Menu
            scrollY={scrollY}
            offsets={offsets}
            clientHeights={clientHeights}
            isMobileMenu
          />
        </MenuFont>
      </MenuWrapper>
    </Container >
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndex.navigation};
  background-color: white;
  width: 100%;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  justify-content: space-between;
`

const SloganFont = styled.div`
  ${neue}
  letter-spacing: -0.01em;
  font-size: 16px;
`

const SloganWrapper = styled.div`
  color: ${colors.red};
  cursor: pointer;
`

const MenuButton = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`

const MenuFont = styled.div`
  ${neue}
  font-size: 15px;
`

const MenuWrapper = styled.div<{ isVisibleMenuItems: boolean }>`
  ${({ isVisibleMenuItems }) => isVisibleMenuItems ? null : 'display: none'}
`
