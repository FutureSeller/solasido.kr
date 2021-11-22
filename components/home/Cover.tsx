import { useRef, useEffect } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Box, Heading, Text } from '@chakra-ui/react'

import ClipBox from '../ClipBox'

import { responsive } from '../../styles/responsive'

import type { ImageProps } from 'next/image'

const INVISIBLE = '0.9'
const VISIBLE = '1'

interface Props {
  title: string
  summary: string
  src: string
  alt: string
  placeholder: string
  objectPosition?: ImageProps['objectPosition']
}

export default function Cover({ title, summary, src, alt, placeholder, objectPosition = 'center' }: Props) {
  const clipBoxRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!clipBoxRef.current) {
      return
    }
    const boxRef = clipBoxRef.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        boxRef.style.opacity = VISIBLE
      } else {
        boxRef.style.opacity = INVISIBLE
      }
    })

    observer.observe(boxRef)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <Box position="relative" width="100%" height="100%" overflow="hidden" zIndex="hide">
      <ClipBox ref={clipBoxRef}>
        <TitleBox>
          <Heading as="h2">
            <Title>{title}</Title>
          </Heading>
          <StyledText>{summary}</StyledText>
        </TitleBox>
        <Box position="relative" width="100%" height="100%" zIndex="hide">
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={placeholder}
            objectPosition={objectPosition}
          />
        </Box>
      </ClipBox>
    </Box>
  )
}

const TitleBox = styled(Box)`
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  text-align: center;
  color: white;
  z-index: ${({ theme }) => theme.zIndices.bloatTitle};
  transform: translate(-50%, -50%) translateZ(0);

  ${responsive.mdLte} {
    left: 0;
    padding: 0 24px;
    text-align: left;
    transform: translateY(-50%) translateZ(0);
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
