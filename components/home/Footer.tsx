import styled from '@emotion/styled'
import { Box, Flex } from '@chakra-ui/react'

import ExternalLink from '../ExternalLink'

import { responsive } from '../../styles/responsive'

interface Props {
  color?: string
  backgroundColor?: string
}

export default function Footer({ color = 'black', backgroundColor = 'white' }: Props) {
  return (
    <StyledFlex as="footer" justifyContent="space-between" backgroundColor={backgroundColor}>
      <StyledBox color={color}>© 2022 SOLASIDO All rights reserved.</StyledBox>
      <StyledHStack as="ul" color={color} fontWeight="700">
        <li>
          <ExternalLink href="mailto:sol_asido_@naver.com">E-Mail</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.linkedin.com/in/solasido">LinkedIn</ExternalLink>
        </li>
      </StyledHStack>
    </StyledFlex>
  )
}

const StyledFlex = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.gorditaBold};
  font-size: 14px;
  flex-direction: column;
  padding: 16px 55px 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (max-width: 768px) {
    padding: 16px 24px 10px;
  }
`

const StyledBox = styled(Box)`
  @media (max-width: 768px) {
    margin-bottom: 14px;
  }
`

const StyledHStack = styled(Flex)`
  & > :not(style) ~ :not(style) {
    margin-inline-start: 24px;

    ${responsive.lgLte} {
      margin-inline-start: 12px;
    }

    ${responsive.smLte} {
      margin-inline-start: 8px;
    }
  }
`
