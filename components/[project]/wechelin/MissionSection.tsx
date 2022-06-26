import { AspectRatio, Box } from '@chakra-ui/react'
import { SectionBox, HeadingText, DescriptionText } from './CommonLayout'

interface Props {
  title: string
  description: string
}

export default function MissionSection({ title, description }: Props) {
  return (
    <SectionBox>
      <Box display="flex" flexDirection="column">
        <HeadingText as="h2" display="inline-block">
          {title}
        </HeadingText>
        <DescriptionText display="inline-block" whiteSpace="pre-line">
          {description}
        </DescriptionText>
      </Box>
      <AspectRatio width="100%" ratio={11 / 7}>
        <Box background={`url(/projects/wechelin/mission.jpg) no-repeat center`} backgroundSize="contain" />
      </AspectRatio>
    </SectionBox>
  )
}
