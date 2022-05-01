import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, Text } from '@chakra-ui/react'

export default function LocaleSelectArea() {
  const router = useRouter()

  return (
    <StyledWrapper>
      <StyledLocaleBox tabIndex={1}>
        <Link href={router.pathname} locale="ko" prefetch={false} passHref>
          <StyledText as="a" isActive={router.locale === 'ko'}>
            KR
          </StyledText>
        </Link>
      </StyledLocaleBox>
      <StyledDivider />
      <StyledLocaleBox tabIndex={1}>
        <Link href={router.pathname} locale="en" prefetch={false} passHref>
          <StyledText as="a" isActive={router.locale === 'en'}>
            EN
          </StyledText>
        </Link>
      </StyledLocaleBox>
    </StyledWrapper>
  )
}

const StyledWrapper = styled(Box)`
  display: flex;
  margin-top: 55px;

  @media (min-width: 768px) {
    margin-top: 65px;
  }
`

const StyledLocaleBox = styled(Box)`
  height: 32px;
`

const StyledDivider = styled(Box)`
  height: 16px;
  margin: 2px 30px 0;
  border-left: 2px solid #000;

  @media (min-width: 768px) {
    height: 24px;
    margin: 2px 20px 0;
  }
`

const StyledText = styled(Text, {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'isActive',
})<{ isActive?: boolean }>`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.neueDisplay};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.black : theme.colors.gray.dark)};

  @media (min-width: 768px) {
    font-size: 30px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
