import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import { SectionBox, HeadingText, DescriptionText } from '../CommonLayout'
import { breakpoints } from '../../../styles/responsive'

const StyledBox = styled(Box)`
  position: absolute;
  background: url(/projects/wechelin/mymichelin_02_mobile.png) no-repeat center;
  background-size: contain;
  width: 100%;
  padding-top: 100%;
  bottom: 6%;
  z-index: 2;

  @media (min-width: ${breakpoints['tablet']}) {
    background: url(/projects/wechelin/mymichelin_02_tablet.png) no-repeat center;
    background-size: contain;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    background: url(/projects/wechelin/mymichelin_02.png) no-repeat center;
    background-size: contain;
  }
`

interface Props {
  title: string
  description: string
}

export default function MyMichelin({ title, description }: Props) {
  return (
    <Box position="relative" paddingBottom="100%">
      <SectionBox
        position="relative"
        background={`url(/projects/wechelin/mymichelin_01.jpg) no-repeat center`}
        backgroundSize="cover"
      >
        <HeadingText>{title}</HeadingText>
        <DescriptionText whiteSpace="pre-line">{description}</DescriptionText>
      </SectionBox>
      <StyledBox />
    </Box>
  )
}
