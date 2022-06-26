import styled from '@emotion/styled'
import { AspectRatio, Box } from '@chakra-ui/react'
import { SectionBox, HeadingText, DescriptionText } from './CommonLayout'

const StyledDescriptionText = styled(DescriptionText)`
  margin-bottom: 0 !important;
`

interface Props {
  title: string
  description: string
}

export default function OnBoardingSection({ title, description }: Props) {
  return (
    <SectionBox>
      <HeadingText>{title}</HeadingText>
      <StyledDescriptionText className="OnBoardingSection--Text" whiteSpace="pre-line">
        {description}
      </StyledDescriptionText>
      <AspectRatio>
        <Box background={`url(/projects/wechelin/onboarding.jpg) no-repeat center`} backgroundSize="contain"></Box>
      </AspectRatio>
    </SectionBox>
  )
}
