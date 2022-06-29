import styled from '@emotion/styled'
import { AspectRatio, Box } from '@chakra-ui/react'
import { SectionBox, HeadingText, DescriptionText } from '../CommonLayout'
import { breakpoints } from '../../../styles/responsive'

const StyledSectionBox = styled(SectionBox)`
  padding-top: 70px;
  padding-bottom: 30px;

  @media (min-width: ${breakpoints['tablet']}) {
    padding-top: 80px;
    padding-bottom: 60px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    padding-top: 120px;
    padding-bottom: 100px;
  }
`

interface Props {
  title: string
  description: string
}

export default function DesignElementSection({ title, description }: Props) {
  return (
    <>
      <StyledSectionBox>
        <HeadingText>{title}</HeadingText>
        <DescriptionText whiteSpace="pre-line">{description}</DescriptionText>
      </StyledSectionBox>
      <Box display="flex">
        <AspectRatio ratio={1 / 1} width="50%">
          <Box background={`url(/projects/wechelin/design_01.jpg) no-repeat center`} backgroundSize="contain" />
        </AspectRatio>
        <AspectRatio ratio={1 / 1} width="50%">
          <Box background={`url(/projects/wechelin/design_02.jpg) no-repeat center`} backgroundSize="contain" />
        </AspectRatio>
      </Box>
      <AspectRatio ratio={7 / 3}>
        <Box background={`url(/projects/wechelin/design_font.jpg) no-repeat center`} backgroundSize="contain" />
      </AspectRatio>
      <AspectRatio ratio={768 / 480}>
        <Box background={`url(/projects/wechelin/design_color.jpg) no-repeat center`} backgroundSize="cover" />
      </AspectRatio>
    </>
  )
}
