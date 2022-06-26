import styled from '@emotion/styled'
import Image from 'next/image'
import { Box, Text, AspectRatio, useMediaQuery } from '@chakra-ui/react'

import { HeadingText, DescriptionText } from './CommonLayout'

import { Carousel } from '../../carousel'
import IcRightArrow from '../../../public/assets/right-arrow.svg'

import { breakpoints } from '../../../styles/responsive'

const BI_IMAGE_COUNT = 7

const StyledTextBox = styled(Box)`
  padding: 50px 16px 0;

  @media (min-width: ${breakpoints['tablet']}) {
    padding: 80px 66px 0;
  }
`

const StyledDescriptionWrapper = styled(DescriptionText)`
  width: 100%;
  margin-bottom: 50px;

  @media (min-width: ${breakpoints['tablet']}) {
    width: 75%;
    margin-bottom: 60px;

    & > :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`

const StyledCarousel = styled(Carousel)`
  display: flex;
  flex-direction: column;
`

const StyleCarouselDescription = styled(Box)`
  display: flex;
  width: 100%;
  padding: 24px 16px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 26px 40px;
  }
`

const StyledPageInfo = styled(Box)`
  padding-right: 20px;

  @media (min-width: ${breakpoints.tablet}) {
    padding-right: 42px;
  }
`

const StyledIcRightArrow = styled(IcRightArrow)`
  width: 70px;
  color: #000;
  transform: scale(0.8);

  @media (min-width: ${breakpoints.tablet}) {
    transform: scale(1);
  }
`

interface Props {
  title: string
  descriptions: string[]
}

export default function BrandIdentitySection({ title, descriptions }: Props) {
  const [isLargerThanDesktop] = useMediaQuery(`(min-width: ${breakpoints['desktop']})`)

  return (
    <Box background="#ebe8e1">
      <StyledTextBox>
        <HeadingText as="h2">{title}</HeadingText>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <StyledDescriptionWrapper>
            {descriptions.map((text, index) => (
              <Text
                key={`BISection-text-${index.toString()}`}
                fontFamily="SUIT Medium"
                fontSize="14px"
                lineHeight="20px"
                whiteSpace="pre-line"
              >
                {text}
              </Text>
            ))}
          </StyledDescriptionWrapper>
          {isLargerThanDesktop &&
            Array.from({ length: 7 }).map((_, index) => (
              <AspectRatio
                key={`BISection-Image-FlexWrap-${index + 1}`}
                ratio={840 / 564}
                width="calc(50% - 20px)"
                marginBottom="40px"
              >
                <Image
                  src={`/projects/wechelin/bi_0${index + 1}.jpg`}
                  alt=""
                  layout="fill"
                  draggable={false}
                  aria-hidden
                />
              </AspectRatio>
            ))}
        </Box>
      </StyledTextBox>
      {!isLargerThanDesktop && (
        <AspectRatio ratio={1 / 1}>
          <StyledCarousel
            renderCarouselItem={({ index }) => {
              const modulo = index % BI_IMAGE_COUNT
              const imageIndex = modulo < 0 ? BI_IMAGE_COUNT + modulo : modulo

              return (
                <Image
                  src={`/projects/wechelin/bi_${(imageIndex + 1).toString().padStart(2, '0')}.jpg`}
                  alt=""
                  layout="fill"
                  draggable={false}
                  aria-hidden
                />
              )
            }}
            renderBottomNavigation={({ index, handleNext }) => {
              const modulo = index % BI_IMAGE_COUNT
              const imageIndex = modulo < 0 ? BI_IMAGE_COUNT + modulo : modulo

              return (
                <StyleCarouselDescription>
                  <Box display="flex">
                    <StyledPageInfo>{`${imageIndex + 1} / ${BI_IMAGE_COUNT}`}</StyledPageInfo>
                    <Box flex="1">Brand Guidelines of Wechelin</Box>
                  </Box>
                  <button type="button" onClick={handleNext}>
                    <StyledIcRightArrow alt="이동" />
                  </button>
                </StyleCarouselDescription>
              )
            }}
          />
        </AspectRatio>
      )}
    </Box>
  )
}
