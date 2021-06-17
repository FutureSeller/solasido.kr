import styled from '@emotion/styled'
import Link from 'next/link'

import { responsive } from '../../styles/responsive'
import { colors } from '../../styles/colors'
import { neue } from '../../styles/typography'

export default function Navigation() {
  return (
    <Container>
      <SloganWrapper>
        <SloganFont>
          <Link href="/" passHref>
            <a style={{ color: colors.red }}>Better design, Better Life.</a>
          </Link>
        </SloganFont>
      </SloganWrapper>
      <MenuWrapper>
        <MenuFont>
          <Menu>
            <MenuItem>
              <Link href="/#about" passHref>
                <a style={{ color: colors.black }}>About</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/#projects" passHref>
                <a style={{ color: colors.black }}>Projects</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/#contact" passHref>
                <a style={{ color: colors.black }}>Contact</a>
              </Link>
            </MenuItem>
          </Menu>
        </MenuFont>
      </MenuWrapper>
    </Container>
  )
}

const Container = styled.nav`
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

  ${responsive.smLte} {
    height: 40px;
  }
`

const SloganFont = styled.div`
  ${neue}
  font-size: 20px;
  letter-spacing: -0.01em;

  ${responsive.mdLte} {
    font-size: 18px;
  }

  ${responsive.smLte} {
    font-size: 16px;
  }
`

const SloganWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 165px;
  height: 100%;
  padding-left: 60px;

  ${responsive.mdLte} {
    padding-left: 30px;
  }

  ${responsive.smLte} {
    width: 100%;
    padding-left: 20px;
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

  ${responsive.smLte} {
    width: 100%;
    padding-right: 20px;
  }
`

const Menu = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`

const MenuItem = styled.li`
  margin-left: 50px;

  ${responsive.smLte} {
    margin: 0;
  }
`
