import { useState, useRef } from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

import { titleFontStyle, BOTTOM_POSITON, STICKY_GUTTER } from './titleStyle'
import ClipBox from '../ClipBox'

import useEventListener from '../../hooks/useEventListener'
import { breakpoints } from '../../styles/responsive'

import type { ReactElement } from 'react'

const StyledTitleBox = styled(Box)`
  ${titleFontStyle};
  bottom: ${BOTTOM_POSITON}px;
  pointer-events: none;
  padding: 0 24px;

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
  coverImage: ReactElement<typeof Image>
  fixedTitleColor: string
  stickyTitleColor: string
}

export default function ProjectIntroSection({ title, coverImage, fixedTitleColor, stickyTitleColor }: Props) {
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
            {coverImage}
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
