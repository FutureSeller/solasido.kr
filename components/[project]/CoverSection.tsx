import { useState, useRef } from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

import ClipBox from '../ClipBox'

import useEventListener from '../../hooks/useEventListener'

import { breakpoints } from '../../styles/responsive'

interface Props {
  title: string
  src: string
  alt: string
  placeholder: string
  fixedTitleColor: string
  stickyTitleColor: string
}

export default function CoverSection({ title, src, alt, placeholder, fixedTitleColor, stickyTitleColor }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState(0)

  const handleResize = () => setHeight(ref.current?.offsetHeight ?? 0)

  useEventListener({
    type: 'resize',
    listener: handleResize,
    handleBeforeListen: handleResize,
  })

  return (
    <Box position="relative">
      <Box ref={ref} position="relative" zIndex="bloatTitle" minHeight="100vh" paddingTop="100%" overflow="hidden">
        <ClipBox>
          <Box position="relative" width="100%" height="100%">
            <Image
              key={src}
              src={src}
              layout="fill"
              objectFit="cover"
              alt={alt}
              placeholder="blur"
              blurDataURL={placeholder}
            />
          </Box>
          <FixedTitleBox>
            <StyledHeadingBox color={fixedTitleColor}>{title}</StyledHeadingBox>
          </FixedTitleBox>
        </ClipBox>
      </Box>
      <Box position="absolute" zIndex="stickyTitle" top="0" left="0" width="100%">
        <StickyWhiteSpace height={height}></StickyWhiteSpace>
        <StickyTitleBox>
          <StyledHeadingBox as="h1" color={stickyTitleColor}>
            {title}
          </StyledHeadingBox>
        </StickyTitleBox>
      </Box>
    </Box>
  )
}

const FixedTitleBox = styled(Box)`
  position: fixed;
  bottom: 50px;
  margin: 0;
  padding: 0 24px;
  pointer-events: none;

  @media (min-width: ${breakpoints['tablet']}) {
    padding: 0 10vw;
  }
`

const StyledHeadingBox = styled(Box)`
  font-weight: 700;
  font-size: 36px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 4vw;
  }
`

const StickyTitleBox = styled(Box)`
  position: sticky;
  bottom: 50px;
  padding: 0 24px;

  @media (min-width: ${breakpoints['tablet']}) {
    padding: 0 10vw;
  }
`

const StickyWhiteSpace = styled(Box)`
  margin-bottom: 60px;

  @media (min-width: ${breakpoints['tablet']}) {
    margin-bottom: 80px;
  }

  @media (min-width: ${breakpoints['largeScreen']}) {
    margin-bottom: 120px;
  }
`
