import styled from '@emotion/styled'
import { Box, Flex } from '@chakra-ui/react'

import ExternalLink from './ExternalLink'

import { responsive } from '../styles/responsive'

interface Props {
  color?: string
  backgroundColor?: string
}

export default function Footer({ color = 'black', backgroundColor = 'white' }: Props) {
  return (
    <StyledFlex as="footer" justifyContent="space-between" backgroundColor={backgroundColor}>
      <StyledBox color={color}>solasido</StyledBox>
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
  padding: 16px 55px 10px;

  ${responsive.mdLte} {
    padding: 16px 24px 10px;
  }
`

const StyledBox = styled(Box)`
  font-family: ${({ theme }) => theme.fonts.neueDisplay};
  line-height: 1.5;
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

    &::before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.gray.dark};
      margin-inline-end: 24px;

      ${responsive.lgLte} {
        margin-inline-end: 12px;
      }

      ${responsive.smLte} {
        margin-inline-end: 8px;
      }
    }
  }
`
