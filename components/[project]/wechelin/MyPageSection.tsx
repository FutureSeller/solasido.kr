import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import { SectionBox, HeadingText, DescriptionText } from '../CommonLayout'
import { breakpoints } from '../../../styles/responsive'

const StyledBox = styled(Box)`
  background: url(/projects/wechelin/my_mobile.png) no-repeat center;
  background-size: contain;
  padding-top: 100%;

  @media (min-width: ${breakpoints['tablet']}) {
    background-position: right;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    background-position: center;
    padding-top: 80%;
  }
`

interface Props {
  title: string
  description: string
}

export default function MyPageSection({ title, description }: Props) {
  return (
    <SectionBox background="#E9E4DE">
      <HeadingText>{title}</HeadingText>
      <DescriptionText whiteSpace="pre-line">{description}</DescriptionText>
      <StyledBox />
    </SectionBox>
  )
}
