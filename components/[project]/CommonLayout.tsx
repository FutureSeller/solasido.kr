import styled from '@emotion/styled'
import { Box, Text } from '@chakra-ui/react'

import { breakpoints } from '../../styles/responsive'

export const SectionBox = styled(Box)`
  padding: 50px 16px;

  @media (min-width: ${breakpoints['tablet']}) {
    padding: 80px 60px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    padding: 120px 100px;
  }
`

export const HeadingText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.suitBold};
  font-size: 22px;
  margin-bottom: 30px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 28px;
    margin-bottom: 66px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    font-size: 40px;
  }
`

export const DescriptionText = styled(Box)`
  font-family: ${({ theme }) => theme.fonts.suitMeidum};
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 50px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 80px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    width: 50%;
    font-size: 18px;
    line-height: 28px;
  }
`
