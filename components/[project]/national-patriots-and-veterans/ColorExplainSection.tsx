import { Box, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import type { TFunction } from 'next-i18next'
import { breakpoints } from '../../../styles/responsive'

const StyledBox = styled(Box)<{ isRight?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.suitMeidum};
  padding: 50px 16px;
  background: #f2f2f2;
  font-size: 12px;
  line-height: 20px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 14px;
    line-height: 22px;
    white-space: pre-line;
    padding: 90px 60px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    font-size: 20px;
    line-height: 28px;
    padding: 174px 150px;

    ${({ isRight }) =>
      isRight &&
      css`
        text-align: right;
      `};
  }
`

const StyledMobileUl = styled(Box)`
  background: #f2f2f2;

  & > :not(:last-of-type) {
    margin-bottom: 8px;
  }

  @media (min-width: ${breakpoints['tablet']}) {
    display: none;
  }
`

const StyledColorBox = styled(Box)`
  display: none;

  @media (min-width: ${breakpoints['tablet']}) {
    display: flex;
    align-items: center;
    color: #fff;
  }
`

const StyledLi = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  font-size: 11px;
  color: #fff;
  text-align: center;
`

const StyledColorName = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.suitBold};
  margin-bottom: 2px;
  font-size: 12px;

  @media (min-width: ${breakpoints['tablet']}) {
    margin-bottom: 10px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    font-size: 22px;
    margin-bottom: 10px;
  }
`

const StyledColorMetaInfo = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.suitMeidum};
  font-size: 10px;

  @media (min-width: ${breakpoints['desktop']}) {
    font-size: 20px;
  }
`

const StyledWord = styled(Box)`
  height: 40px;
  margin-bottom: 40px;
  background: url(/projects/national-patriots-and-veterans/color_word.png) no-repeat center;
  background-size: contain;

  @media (min-width: ${breakpoints['tablet']}) {
    height: 64px;
    margin-bottom: 90px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    height: 110px;
    margin-bottom: 180px;
  }
`

const StyledHorizontalColorBox = styled(Box)`
  display: flex;
  height: 72px;

  @media (min-width: ${breakpoints['desktop']}) {
    height: 180px;
  }
`

const colors = ['#f00029', '#0050a5', '#595a5b']

const renderVerticalColors = (t: TFunction) => {
  return (
    <StyledMobileUl as="ul">
      {Array.from({ length: 3 }).map((_, index) => (
        <StyledLi as="li" key={index.toString()} background={colors[index]}>
          <Box>
            <StyledColorName marginBottom="2px">
              <>{t(`national-patriots-and-veterans:colors.palette.${index}.name`)}</>
            </StyledColorName>
            <StyledColorMetaInfo>
              <>{t(`national-patriots-and-veterans:colors.palette.${index}.value`)}</>
            </StyledColorMetaInfo>
          </Box>
        </StyledLi>
      ))}
    </StyledMobileUl>
  )
}

const renderHorizontalColors = (t: TFunction) => {
  return (
    <StyledColorBox>
      <StyledHorizontalColorBox
        width="66%"
        background="transparent linear-gradient(270deg, #0050A5 0%, #F00029 100%) 0% 0% no-repeat"
      >
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="50%">
          <StyledColorName>
            <>{t(`national-patriots-and-veterans:colors.palette.0.name`)}</>
          </StyledColorName>
          <StyledColorMetaInfo>
            <>{t(`national-patriots-and-veterans:colors.palette.0.value`)}</>
          </StyledColorMetaInfo>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="50%">
          <StyledColorName>
            <>{t(`national-patriots-and-veterans:colors.palette.1.name`)}</>
          </StyledColorName>
          <StyledColorMetaInfo>
            <>{t(`national-patriots-and-veterans:colors.palette.1.value`)}</>
          </StyledColorMetaInfo>
        </Box>
      </StyledHorizontalColorBox>
      <StyledHorizontalColorBox
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="34%"
        background="#595a5b"
      >
        <StyledColorName>
          <>{t(`national-patriots-and-veterans:colors.palette.2.name`)}</>
        </StyledColorName>
      </StyledHorizontalColorBox>
    </StyledColorBox>
  )
}

interface Props {
  t: TFunction
}

export default function ColorExplainSection({ t }: Props) {
  return (
    <>
      <StyledBox>
        <>{t('national-patriots-and-veterans:colors.descriptions.0')}</>
      </StyledBox>
      {renderVerticalColors(t)}
      {renderHorizontalColors(t)}
      <StyledBox isRight>
        <StyledWord />
        <>{t('national-patriots-and-veterans:colors.descriptions.1')}</>
      </StyledBox>
    </>
  )
}
