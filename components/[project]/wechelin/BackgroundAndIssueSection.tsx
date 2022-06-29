import Image from 'next/image'
import { AspectRatio } from '@chakra-ui/react'

import { SectionBox, HeadingText, DescriptionText } from '../CommonLayout'

interface Props {
  title: string
  description: string
}

export default function BackgroundAndIssueSection({ title, description }: Props) {
  return (
    <SectionBox>
      <HeadingText as="h2">{title}</HeadingText>
      <DescriptionText>{description}</DescriptionText>
      <AspectRatio ratio={1720 / 344}>
        <Image src="/projects/wechelin/issue.jpg" alt="" layout="fill" aria-hidden />
      </AspectRatio>
    </SectionBox>
  )
}
