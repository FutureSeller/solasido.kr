import { AspectRatio } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { SectionBox, HeadingText, DescriptionText } from '../CommonLayout'

const StyledBackgroundDiv = styled(SectionBox)`
  align-items: baseline;
  justify-content: baseline;
  background: url(/projects/wechelin/finding.png) no-repeat center;
  background-size: contain;
`

const StyledDescriptionText = styled(DescriptionText)`
  margin-bottom: 0 !important;
`

interface Props {
  title: string
  description: string
}

export default function FindingSection({ title, description }: Props) {
  return (
    <SectionBox background="#f2f2f2">
      <HeadingText>{title}</HeadingText>
      <StyledDescriptionText whiteSpace="pre-line">{description}</StyledDescriptionText>
      <AspectRatio ratio={3 / 4}>
        <StyledBackgroundDiv />
      </AspectRatio>
    </SectionBox>
  )
}
