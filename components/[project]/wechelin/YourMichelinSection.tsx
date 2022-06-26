import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import { SectionBox, HeadingText, DescriptionText } from './CommonLayout'
import { breakpoints } from '../../../styles/responsive'

const StyledSectionBox = styled(SectionBox)`
  background: linear-gradient(#f82f62 80%, #f72f62, #a21f40);

  @media (min-width: ${breakpoints['desktop']}) {
    background: linear-gradient(#f82f62 50%, #fff 50%);
  }
`

const StyledDescriptionText = styled(DescriptionText)`
  @media (min-width: ${breakpoints['desktop']}) {
    margin-left: 23%;
  }
`

const StyledHeadingText = styled(HeadingText)`
  @media (min-width: ${breakpoints['desktop']}) {
    margin-left: 23%;
  }
`

const StyledBox = styled(Box)`
  width: 100%;
  padding-top: 100%;
  background: url(/projects/wechelin/yourmichelin_mobile.png) no-repeat;
  background-size: contain;
  background-position: left;

  @media (min-width: ${breakpoints['desktop']}) {
    background: url(/projects/wechelin/yourmichelin.png) no-repeat;
    background-size: contain;
    background-position: left;
  }
`

interface Props {
  title: string
  description: string
}

export default function YourMichelinSection({ title, description }: Props) {
  return (
    <StyledSectionBox>
      <StyledHeadingText color="#fff">{title}</StyledHeadingText>
      <StyledDescriptionText color="#fff" whiteSpace="pre-line">
        {description}
      </StyledDescriptionText>
      <StyledBox />
    </StyledSectionBox>
  )
}
