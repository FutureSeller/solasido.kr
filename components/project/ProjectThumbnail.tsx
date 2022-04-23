import styled from '@emotion/styled'
import { Box, Heading, Text, AspectRatio } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

import { responsive } from '../../styles/responsive'
import projectsData from '../../public/data/projects.json'

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never
type FigureType = ArrayElement<typeof projectsData>

interface Props {
  figure: FigureType
}

export default function ProjectThumbnail({ figure }: Props) {
  const { slug, title, summary, thumbnail, isPortrait, placeholder } = figure

  return (
    <Link href={`/project/${slug}`} key={title} passHref prefetch={false}>
      <a>
        <AspectRatio ratio={isPortrait ? 888 / 1108 : 888 / 592} marginBottom="16px">
          <HoverImage
            src={thumbnail}
            layout="fill"
            objectFit="cover"
            alt={title}
            placeholder="blur"
            blurDataURL={placeholder}
          />
        </AspectRatio>
        <StyledBox>
          <Heading as="h2">
            <Title>{title}</Title>
          </Heading>
          <Summary>{summary}</Summary>
        </StyledBox>
      </a>
    </Link>
  )
}

const Title = styled(Text)`
  margin-bottom: 10px;
  font-family: Gordita Regular;
  font-weight: 400;
  font-size: 16px;
`

const Summary = styled(Text)`
  margin: 0;
  font-family: Gordita Bold;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 26px;
  }

  @media (min-width: 1920px) {
    font-size: 50px;
  }
`

const StyledBox = styled(Box)`
  margin-bottom: 50px;

  ${responsive.mdLte} {
    margin-bottom: 30px;
  }
`

const HoverImage = styled(Image)`
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`
