import styled from '@emotion/styled'
import { Box, Flex } from '@chakra-ui/react'

import ExternalLink from '../ExternalLink'

interface Props {
  color?: string
  backgroundColor?: string
}

export default function Footer({ color = 'black', backgroundColor = 'white' }: Props) {
  return (
    <StyledFlex as="footer" justifyContent="space-between" backgroundColor={backgroundColor}>
      <StyledBox color={color}>{`© ${new Date().getFullYear()} SOLASIDO All rights reserved.`}</StyledBox>
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
  padding: 16px 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 16px 55px;
  }
`

const StyledBox = styled(Box)`
  margin-bottom: 14px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

const StyledHStack = styled(Flex)`
  & > :not(style) ~ :not(style) {
    margin-inline-start: 30px;
  }
`
