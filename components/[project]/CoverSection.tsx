import { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

import ClipBox from '../ClipBox'

import useEventListener from '../../hooks/useEventListener'

import { responsive } from '../../styles/responsive'

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
          <Image
            key={src}
            src={src}
            layout="fill"
            objectFit="cover"
            alt={alt}
            placeholder="blur"
            blurDataURL={placeholder}
          />
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
  left: 10vw;
  margin: 0;
  padding-right: 10vw;
  pointer-events: none;

  ${responsive.mdLte} {
    left: 24px;
    padding-right: 24px;
  }
`

const StyledHeadingBox = styled(Box)`
  color: ${({ color }) => color};
  font-weight: 700;
  font-size: 4vw;
  letter-spacing: -0.03em;

  ${responsive.lgLte} {
    font-size: 5vw;
  }

  ${responsive.mdLte} {
    font-size: 36px;
  }
`

const StickyTitleBox = styled(Box)`
  position: sticky;
  bottom: 50px;
  padding: 0 10vw;

  ${responsive.mdLte} {
    padding: 0 24px;
  }
`

const StickyWhiteSpace = styled(Box)`
  margin-bottom: 120px;

  ${responsive.mdLte} {
    margin-bottom: 80px;
  }

  ${responsive.smLte} {
    margin-bottom: 60px;
  }
`
