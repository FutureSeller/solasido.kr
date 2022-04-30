import styled from '@emotion/styled'
import { Box, Heading, Text, AspectRatio } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

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
        <StyledAspectRatio ratio={isPortrait ? 888 / 1108 : 888 / 592}>
          <HoverImage
            src={thumbnail}
            layout="fill"
            objectFit="cover"
            alt={title}
            placeholder="blur"
            blurDataURL={placeholder}
          />
        </StyledAspectRatio>
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

const StyledAspectRatio = styled(AspectRatio)`
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`

const Title = styled(Text)`
  margin-bottom: 4px;
  font-family: Gordita Regular;
  font-weight: 400;
  font-size: 10px;

  @media (min-width: 768px) {
    margin-bottom: 6px;
    font-size: 14px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 10px;
    font-size: 16px;
  }
`

const Summary = styled(Text)`
  margin: 0;
  font-family: Gordita Bold;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 26px;
  }

  @media (min-width: 1920px) {
    font-size: 40px;
  }
`

const StyledBox = styled(Box)`
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`

const HoverImage = styled(Image)`
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`
