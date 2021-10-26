import styled from '@emotion/styled'
import { Box, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

import { responsive } from '../../styles/responsive'

import type { Projects_ThumbnailsFragment } from '../../__generated__/graphql'

interface Props {
  figure: Projects_ThumbnailsFragment
}

export default function ProjectThumbnail({ figure }: Props) {
  const { slug, title, summary, thumbnail } = figure

  return (
    <Link href={`/project/${slug}`} key={title} passHref prefetch={false}>
      <a>
        <Figure isPortrait={thumbnail?.source?.height! > thumbnail?.source?.width!}>
          <HoverImage
            src={thumbnail?.source?.url!}
            layout="fill"
            objectFit="cover"
            alt={title}
            placeholder="blur"
            blurDataURL={thumbnail?.placeholder!}
          />
        </Figure>
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
  font-weight: 400;
  font-size: 16px;

  ${responsive.smLte} {
    margin-bottom: 4px;
  }
`

const Summary = styled(Text)`
  margin: 0;
  font-weight: 700;
  font-size: 2vw;

  ${responsive.lgLte} {
    font-size: 3vw;
  }

  ${responsive.mdLte} {
    font-size: 4vw;
  }

  ${responsive.smLte} {
    font-size: 4.5vw;
  }
`

const StyledBox = styled(Box)`
  margin-bottom: 50px;

  ${responsive.mdLte} {
    margin-bottom: 30px;
  }
`

const Figure = styled.figure<{ isPortrait?: boolean }>`
  position: relative;
  display: inline-block;
  width: 100%;
  margin: 0;
  margin-bottom: 16px;
  padding-top: ${({ isPortrait }) => (isPortrait ? '124.8%' : '66.6%')};
`

const HoverImage = styled(Image)`
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`
