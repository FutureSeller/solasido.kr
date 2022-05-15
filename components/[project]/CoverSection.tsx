import { useState, useRef } from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

import { titleFontStyle, BOTTOM_POSITON, STICKY_GUTTER } from './titleStyle'

import ClipBox from '../ClipBox'

import useEventListener from '../../hooks/useEventListener'

import { breakpoints } from '../../styles/responsive'

const StyledTitleBox = styled(Box)`
  ${titleFontStyle};
  bottom: ${BOTTOM_POSITON}px;
  font-weight: 700;
  padding: 0 24px;
  pointer-events: none;

  @media (min-width: ${breakpoints['tablet']}) {
    padding: 0 10vw;
  }
`

const StickyWhiteSpace = styled(Box)`
  margin-bottom: ${STICKY_GUTTER['mobile']}px;

  @media (min-width: ${breakpoints['tablet']}) {
    margin-bottom: ${STICKY_GUTTER['tablet']}px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    margin-bottom: ${STICKY_GUTTER['desktop']}px;
  }
`

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
          <StyledTitleBox position="fixed" color={fixedTitleColor}>
            {title}
          </StyledTitleBox>
        </ClipBox>
      </Box>
      <Box position="absolute" zIndex="stickyTitle" top="0" left="0" width="100%">
        <StickyWhiteSpace height={height} />
        <StyledTitleBox position="sticky" as="h1" color={stickyTitleColor}>
          {title}
        </StyledTitleBox>
      </Box>
    </Box>
  )
}
