import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, Flex, Box, useDisclosure } from '@chakra-ui/react'

import { customTheme } from '../../styles/theme'

import NavButton from '../NavButton'
import NavListItem from '../NavListItem'

export default function NavBar() {
  const { isOpen, onClose, onToggle } = useDisclosure()

  return (
    <StyledHeader>
      <Flex alignItems="center" justifyContent="space-between" color={customTheme.colors.primary}>
        <Link href="/" passHref shallow>
          <StyledBox as="a" aria-label="홈으로">
            <Image src="/assets/logo.svg" alt="" layout="fill" aria-hidden />
          </StyledBox>
        </Link>
        <StyledNavButton color={customTheme.colors.primary} isOpen={isOpen} onToggle={onToggle} />
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody backgroundColor="gray.light">
            <StyledHeader>
              <Flex justifyContent="flex-end">
                <StyledNavButton color={customTheme.colors.primary} isOpen={isOpen} onToggle={onToggle} />
              </Flex>
            </StyledHeader>
            <NavListItem />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </StyledHeader>
  )
}

const StyledHeader = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.header};
  width: 100%;
  padding: 22px 24px 18px;

  @media (min-width: 768px) {
    padding: 22px 55px 18px;
  }

  @media (min-width: 1920px) {
    padding: 33px 55px 23px;
  }
`

const StyledBox = styled(Box)`
  position: relative;
  display: inline-block;
  width: 108px;
  height: 16px;

  @media (min-width: 768px) {
    width: 135px;
    height: 20px;
  }

  @media (min-width: 1920px) {
    width: 188px;
    height: 28px;
  }
`

const StyledNavButton = styled(NavButton)`
  width: 24px;
  height: 24px;
  color: ${customTheme.colors.primary};

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }

  @media (min-width: 1920px) {
    width: 34px;
    height: 34px;
  }
`
