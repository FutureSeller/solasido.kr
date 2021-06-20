import styled from '@emotion/styled'

import Menu from './Menu'

import { responsive } from '../../styles/responsive'
import { colors } from '../../styles/colors'
import { neue } from '../../styles/typography'

interface Props {
  scrollY: number
  offsets: number[]
  clientHeights: number[]
}

export default function Navigation({ scrollY, offsets, clientHeights }: Props) {
  return (
    <Container>
      <SloganWrapper onClick={() => window.scrollTo(0, 0)}>
        <SloganFont>
          Better design, Better Life.
        </SloganFont>
      </SloganWrapper>
      <MenuWrapper>
        <MenuFont>
          <Menu
            scrollY={scrollY}
            offsets={offsets}
            clientHeights={clientHeights}
          />
        </MenuFont>
      </MenuWrapper>
    </Container >
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: white;
  height: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, .2);

  ${responsive.mdLte} {
    height: 60px;
  }
`

const SloganFont = styled.div`
  ${neue}
  font-size: 20px;
  letter-spacing: -0.01em;

  ${responsive.mdLte} {
    font-size: 18px;
  }
`

const SloganWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 165px;
  height: 100%;
  padding-left: 60px;
  color: ${colors.red};
  cursor: pointer;

  ${responsive.mdLte} {
    padding-left: 30px;
  }
`

const MenuFont = styled.div`
  ${neue}
  font-size: 15px;
`

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 60px;

  ${responsive.mdLte} {
    padding-right: 30px;
  }
`
