import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

import { MENU_BUTTON_SIZE } from './MenuButton'

export default function Logo() {
  return (
    <StyledBox>
      <Link href="/" passHref shallow>
        <StyledLinkBox as="a" aria-label="홈으로">
          <Image src="/assets/logo.svg" alt="" layout="fill" aria-hidden />
        </StyledLinkBox>
      </Link>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  position: fixed;
  top: 22px;
  left: 24px;

  display: flex;
  align-items: center;
  height: ${MENU_BUTTON_SIZE['mobile']}px;

  z-index: ${({ theme }) => theme.zIndices.logo};

  @media (min-width: 768px) {
    left: 55px;
    height: ${MENU_BUTTON_SIZE['tablet']}px;
  }

  @media (min-width: 1920px) {
    top: 33px;
    height: ${MENU_BUTTON_SIZE['desktop']}px;
  }
`

const StyledLinkBox = styled(Box)`
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
