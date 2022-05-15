import { useEffect } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import isPropValid from '@emotion/is-prop-valid'
import { Button, Box, Drawer, DrawerBody, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import LocaleSelectArea from './LocaleSelectArea'
import NavListItem from './NavListItem'

import type { CustomTheme } from '../../styles/theme'

export const MENU_BUTTON_SIZE = {
  mobile: 24,
  tablet: 28,
  desktop: 34,
}
const STOROKE_WIDTH = 2

export default function MenuButton() {
  const router = useRouter()
  const { isOpen, onClose, onToggle } = useDisclosure()

  useEffect(() => {
    onClose()
  }, [router.pathname, onClose])

  return (
    <>
      <StyledBox>
        <Button variant="link" onClick={onToggle} aria-label="페이지 목록 확인">
          <StyledHamburger>
            <HamburgerBox isOpen={isOpen}>
              <HamburgerInner width="16px" isOpen={isOpen} />
            </HamburgerBox>
          </StyledHamburger>
        </Button>
      </StyledBox>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          {/* NOTE: Modal spec을 지키기위해 같은 포지션에 ghost button을 그려둠 */}
          <StyledBox>
            <Button css={hamburgerSizeStyle()} variant="ghost" aria-label="목록 닫기" onClick={onClose} />
          </StyledBox>
          <DrawerBody backgroundColor="gray.light">
            <Box display="flex" flexDirection="column" height="100%" justifyContent="center" alignItems="center">
              <NavListItem />
              <LocaleSelectArea />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const StyledBox = styled(Box)`
  position: fixed;
  top: 22px;
  right: 24px;
  z-index: ${({ theme }) => theme.zIndices.menuIcon};

  @media (min-width: 768px) {
    right: 55px;
  }

  @media (min-width: 1920px) {
    top: 33px;
  }
`

const hamburgerSizeStyle = () => css`
  width: ${MENU_BUTTON_SIZE['mobile']}px;
  height: ${MENU_BUTTON_SIZE['mobile']}px;

  @media (min-width: 768px) {
    width: ${MENU_BUTTON_SIZE['tablet']}px;
    height: ${MENU_BUTTON_SIZE['tablet']}px;
  }

  @media (min-width: 1920px) {
    width: ${MENU_BUTTON_SIZE['desktop']}px;
    height: ${MENU_BUTTON_SIZE['desktop']}px;
  }
`

const StyledHamburger = styled(Box)`
  ${hamburgerSizeStyle()};
  display: inline-block;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  &:hover {
    opacity: 0.7;
  }
`

// 출처: https://github.com/jonsuh/hamburgers
const HamburgerBox = styled(Box, {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'isOpen',
})<{ isOpen: boolean }>`
  ${hamburgerSizeStyle()};
  position: relative;
  display: inline-block;
  border: ${STOROKE_WIDTH}px solid ${({ theme, isOpen }) => (isOpen ? theme.colors.black : theme.colors.primary)};
  border-radius: 50%;
`

const hamburgerBaseLineStyle = ({ theme, isOpen }: { theme: CustomTheme; isOpen: boolean }) => css`
  position: absolute;
  display: block;
  height: ${STOROKE_WIDTH}px;
  background-color: ${isOpen ? theme.colors.black : theme.colors.primary};
  border-radius: 4px;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
  width: 12px;

  @media (min-width: 768px) {
    width: 14px;
  }

  @media (min-width: 1920px) {
    width: 16px;
  }
`

const hamburgerGutterStyle = (isBefore?: boolean) => css`
  width: 100%;
  content: '';

  ${isBefore
    ? css`
        top: -4px;

        @media (min-width: 768px) {
          top: -5px;
        }

        @media (min-width: 1920px) {
          top: -6px;
        }
      `
    : css`
        bottom: -4px;

        @media (min-width: 768px) {
          bottom: -5px;
        }

        @media (min-width: 1920px) {
          bottom: -6px;
        }
      `}
`

const HamburgerInner = styled(Box, {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'isOpen',
})<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => hamburgerBaseLineStyle({ theme, isOpen })};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: translate(-50%, -50%) rotate(225deg);
          transition-delay: 0.12s;
          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        `
      : css`
          transition-duration: 0.22s;
          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        `}

  &::before {
    ${({ theme, isOpen }) => hamburgerBaseLineStyle({ theme, isOpen })};
    ${hamburgerGutterStyle(true)};

    ${({ isOpen }) =>
      isOpen
        ? css`
            top: 0 !important;
            opacity: 0;
            transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
          `
        : css`
            transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
          `}
  }

  &::after {
    ${({ theme, isOpen }) => hamburgerBaseLineStyle({ theme, isOpen })};
    ${hamburgerGutterStyle()};

    ${({ isOpen }) =>
      isOpen
        ? css`
            bottom: 0 !important;
            transform: rotate(-90deg);
            transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
          `
        : css`
            transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
          `}
  }
`
