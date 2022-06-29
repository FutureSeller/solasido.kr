import { useRef } from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

import { SectionBox, HeadingText, DescriptionText } from '../CommonLayout'
import { SplashElement } from './SplashElement'

import useLottieAnimation from '../../../hooks/useLottieAnimation'
import { breakpoints } from '../../../styles/responsive'

const StyledSectionBox = styled(SectionBox)`
  display: none;

  @media (min-width: ${breakpoints['largeScreen']}) {
    display: block;
  }
`

const splashBgImages = [
  '/projects/wechelin/bg_splash_01.jpg',
  '/projects/wechelin/bg_splash_02.jpg',
  '/projects/wechelin/bg_splash_03.jpg',
  '/projects/wechelin/bg_splash_04.jpg',
]

const splashImages = [
  '/projects/wechelin/img_splash_01.png',
  '/projects/wechelin/img_splash_02.png',
  '/projects/wechelin/img_splash_03.png',
  '/projects/wechelin/img_splash_04.png',
]

interface Props {
  title: string
  description: string
}

export default function SplashSection({ title, description }: Props) {
  const divRef = useRef<HTMLDivElement>(null)

  useLottieAnimation({
    element: divRef,
    path: '/projects/wechelin/splash.json',
  })

  return (
    <StyledSectionBox position="relative" height="100%">
      <HeadingText position="absolute" zIndex="1">
        {title}
      </HeadingText>
      <DescriptionText position="absolute" marginTop="80px" zIndex="1" whiteSpace="pre-line">
        {description}
      </DescriptionText>
      {splashBgImages.map((splashImage, index) => (
        <Box
          key={`splashImage-${index}`}
          display="flex"
          justifyContent="center"
          position="absolute"
          width="25%"
          height="100%"
          top="0"
          left={`${index * 25}%`}
          background={`url(${splashImage}) no-repeat center`}
          backgroundSize="cover"
        >
          <SplashElement
            url={splashImages[index]}
            bottom={index % 3 === 0 ? '200px' : `${200 + (3 - index) * 150}px`}
          />
        </Box>
      ))}
    </StyledSectionBox>
  )
}
