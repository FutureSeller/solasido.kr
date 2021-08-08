import Image from 'next/image'
import styled from '@emotion/styled'
import { Box, Heading, Text } from '@chakra-ui/react'

import ClipBox from '../ClipBox'

import { responsive } from '../../styles/responsive'

import type { ImageProps } from 'next/image'

interface Props {
  title: string
  summary: string
  src: string
  alt: string
  placeholder: string
  objectPosition?: ImageProps['objectPosition']
}

export default function Cover({ title, summary, src, alt, placeholder, objectPosition = 'center' }: Props) {
  return (
    <Box position="relative" width="100%" height="100%" overflow="hidden">
      <ClipBox>
        <TitleBox position="fixed" width="100%" margin="0" zIndex="bloatTitle" color="white">
          <Heading as="h2">
            <Title>{title}</Title>
          </Heading>
          <StyledText>{summary}</StyledText>
        </TitleBox>
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={placeholder}
          objectPosition={objectPosition}
        />
      </ClipBox>
    </Box>
  )
}

const TitleBox = styled(Box)`
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);

  ${responsive.mdLte} {
    left: 0;
    padding: 0 24px;
    text-align: left;
    transform: translateY(-50%);
  }
`

const Title = styled(Text)`
  margin-bottom: 32px;
  font-weight: 400;
  font-size: 24px;

  ${responsive.mdLte} {
    margin-bottom: 20px;
    font-size: 18px;
  }

  ${responsive.smLte} {
    margin-bottom: 14px;
    font-size: 14px;
  }
`

const StyledText = styled(Text)`
  font-weight: 700;
  font-size: 3vw;

  ${responsive.lgLte} {
    font-size: 4vw;
  }

  ${responsive.mdLte} {
    font-size: 5.5vw;
  }

  ${responsive.smLte} {
    font-size: 7vw;
  }
`
