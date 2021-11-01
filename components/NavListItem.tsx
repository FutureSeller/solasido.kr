import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { Flex } from '@chakra-ui/react'

import { responsive } from '../styles/responsive'

export default function NavListItem() {
  const router = useRouter()

  return (
    <StyledUl as="ul" flexDirection="column" alignItems="center" justifyContent="center" height="100%" color="black">
      <li>
        <Link href="/" passHref prefetch={false}>
          <StyledA isActive={router.asPath === '/'}>HOME</StyledA>
        </Link>
      </li>
      <li>
        <Link href="/about" passHref prefetch={false}>
          <StyledA isActive={router.asPath === '/about'}>ABOUT</StyledA>
        </Link>
      </li>
      <li>
        <Link href="/project" passHref prefetch={false}>
          <StyledA isActive={router.asPath === '/project'}>PROJECT</StyledA>
        </Link>
      </li>
    </StyledUl>
  )
}

const StyledUl = styled(Flex)`
  font-size: 60px;
  font-family: ${({ theme }) => theme.fonts.neueDisplay};

  & > :not(style) ~ :not(style) {
    margin-top: 16px;
  }

  ${responsive.smLte} {
    font-size: 50px;
  }
`

const StyledA = styled.a<{ isActive?: boolean }>`
  display: inline-block;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.black : theme.colors.gray.dark)};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
