import { useState } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, Flex, useDisclosure } from '@chakra-ui/react'

import useEventListener from '../hooks/useEventListener'

import NavButton from './NavButton'
import NavListItem from './NavListItem'

import { responsive } from '../styles/responsive'

import type { UseDisclosureReturn } from '@chakra-ui/react'

interface BodyProps extends Pick<UseDisclosureReturn, 'isOpen' | 'onClose' | 'onToggle'> {
  color: string
}

const INITIAL_Y_POSITION = -150

interface Props {
  color: string
  backgroundColor?: string
  alwaysVisible?: boolean
}

export default function NavBar({ color, backgroundColor = 'inherit', alwaysVisible = false }: Props) {
  const [isScrollUp, setIsScrollUp] = useState(false)
  const { isOpen, onClose, onToggle } = useDisclosure()
  const [lastScrollY, setLastScrollY] = useState(0)

  const animateProps = alwaysVisible
    ? null
    : {
        initial: { opacity: 0, y: INITIAL_Y_POSITION },
        animate: { opacity: isScrollUp ? 1 : 0, y: isScrollUp ? 0 : INITIAL_Y_POSITION },
        transition: { duration: 0.2 },
      }

  const handleScroll = () => {
    const scrollY = window?.pageYOffset ?? -1
    if (scrollY < 0) {
      return
    }

    const isScrollingUp = scrollY < lastScrollY

    setIsScrollUp(isScrollingUp)
    setLastScrollY(scrollY)
  }

  useEventListener({
    type: 'scroll',
    listener: handleScroll,
  })

  return (
    <StyledHeader backgroundColor={backgroundColor} {...animateProps}>
      <NavBody color={color} isOpen={isOpen} onClose={onClose} onToggle={onToggle} />
    </StyledHeader>
  )
}

const StyledHeader = styled(motion.header)<{ backgroundColor: string }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.header};
  width: 100%;
  padding: 20px 54px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-family: ${({ theme }) => theme.fonts.neueDisplay};

  ${responsive.mdLte} {
    padding: 24px;
  }

  ${responsive.smLte} {
    padding: 16px 24px;
  }
`

const NavBody = ({ color, isOpen, onClose, onToggle }: BodyProps) => {
  return (
    <>
      <Flex justifyContent="space-between" color={color}>
        <Link href="/" passHref shallow>
          <a aria-label="홈으로">
            Better Design <br />
            Better Life.
          </a>
        </Link>
        <NavButton color={color} isOpen={isOpen} onToggle={onToggle} />
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody backgroundColor="gray.light">
            <StyledHeader backgroundColor="transparent">
              <Flex justifyContent="flex-end">
                <NavButton color={color} isOpen={isOpen} onToggle={onToggle} />
              </Flex>
            </StyledHeader>
            <NavListItem />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
