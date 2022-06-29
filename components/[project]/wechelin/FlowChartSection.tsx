import styled from '@emotion/styled'
import { AspectRatio, Box } from '@chakra-ui/react'
import { SectionBox, HeadingText, DescriptionText } from '../CommonLayout'
import { breakpoints } from '../../../styles/responsive'

const StyledAspectRatio = styled(AspectRatio)`
  @media (min-width: ${breakpoints['largeScreen']}) {
    margin-top: -180px;
  }
`
interface Props {
  title: string
  description: string
}

export default function FlowChartSection({ title, description }: Props) {
  return (
    <SectionBox background="#eBe8e1">
      <HeadingText>{title}</HeadingText>
      <DescriptionText whiteSpace="pre-line">{description}</DescriptionText>
      <StyledAspectRatio width="100%" ratio={11 / 7}>
        <Box background={`url(/projects/wechelin/flowchart.png) no-repeat center`} backgroundSize="contain" />
      </StyledAspectRatio>
    </SectionBox>
  )
}
