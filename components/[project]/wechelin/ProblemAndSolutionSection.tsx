import styled from '@emotion/styled'
import { Box, Text, AspectRatio } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { SectionBox, HeadingText, DescriptionText } from '../CommonLayout'
import { IntersectionObserver } from '../../../contexts/IntersectionObserver'
import { TFunction } from 'next-i18next'
import { breakpoints } from '../../../styles/responsive'

const CIRCLE_HEIGHT = 436

const StyledSectionBox = styled(SectionBox)`
  @media (min-width: ${breakpoints['largeScreen']}) {
    padding-bottom: calc(100% / 6 + 120px);
  }
`

const StyledRow = styled(Box)`
  & > div {
    flex: 0 0 ${CIRCLE_HEIGHT / 2}px;

    @media (min-width: ${breakpoints['largeScreen']}) {
      flex: 1 1 calc(100% / 6);
    }
  }
`

const StyledMotionRowArea = styled(motion(Box))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;

  @media (min-width: ${breakpoints['largeScreen']}) {
    height: 100%;
  }
`

const StyledCirclesArea = styled(Box)`
  position: relative;
  height: ${CIRCLE_HEIGHT}px;
  overflow-x: scroll;
  overflow-y: hidden;

  @media (min-width: ${breakpoints['largeScreen']}) {
    width: 100%;
    height: 100%;
    overflow: unset;
  }
`

const StyledCircles = styled(motion(Box))`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px;
  border-radius: 50%;
  color: #fff;
  border: 1px solid #f82f62;
  background: #f82f62;
  text-align: center;
`

const StyledCircleTextContent = styled(Text)`
  font-size: 12px;
  white-space: pre-line;

  @media (min-width: ${breakpoints['largeScreen']}) {
    font-size: 18px;
  }
`

interface Props {
  title: string
  description: string
  t: TFunction
}

export default function ProblemAndSolutionSection({ title, description, t }: Props) {
  return (
    <StyledSectionBox background="#f2f2f2">
      <HeadingText>{title}</HeadingText>
      <DescriptionText>{description}</DescriptionText>
      <StyledCirclesArea>
        <IntersectionObserver>
          <Box>
            <StyledRow display="flex">
              <Text display="flex" alignItems="center" fontSize="40px" flex="0 0 200px">
                Problem
                <br />
                {`\u27F6`}
              </Text>
              {Array.from({ length: 4 }).map((_, index) => (
                <AspectRatio key={`topcircle-${index.toString()}`} ratio={1} marginRight={index === 3 ? '200px' : ''}>
                  <StyledCircles
                    border="1px solid #f82f62"
                    animate={{ background: 'transparent', color: '#F82F62' }}
                    transition={{ ease: 'easeOut', duration: 1 }}
                  >
                    <StyledCircleTextContent>
                      <>{t(`wechelin:problemAndSolutionSection.topCircles.${index}`)}</>
                    </StyledCircleTextContent>
                  </StyledCircles>
                </AspectRatio>
              ))}
            </StyledRow>
          </Box>
          <StyledMotionRowArea
            opacity={0}
            animate={{ opacity: 1, y: '100%' }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
          >
            <StyledRow display="flex">
              {Array.from({ length: 4 }).map((_, index) => (
                <AspectRatio key={`bottomcircle-${index.toString()}`} ratio={1} marginLeft={index === 0 ? '200px' : ''}>
                  <StyledCircles>
                    <StyledCircleTextContent>
                      <>{t(`wechelin:problemAndSolutionSection.bottomCircles.${index}`)}</>
                    </StyledCircleTextContent>
                  </StyledCircles>
                </AspectRatio>
              ))}
              <Text
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                flex="0 0 200px"
                fontSize="40px"
                textAlign="right"
              >
                Solution
                <br />
                {`\u27F5`}
              </Text>
            </StyledRow>
          </StyledMotionRowArea>
        </IntersectionObserver>
      </StyledCirclesArea>
    </StyledSectionBox>
  )
}
