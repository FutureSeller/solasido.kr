import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Box, Text } from '@chakra-ui/react'

import { Trans, TFunction } from 'next-i18next'

import { SectionBox, HeadingText, DescriptionText } from './CommonLayout'

import { IntersectionObserver } from '../../../contexts/IntersectionObserver'
import { breakpoints } from '../../../styles/responsive'

const StyledUL = styled.ul`
  & > :not(:last-of-type) {
    margin-bottom: 16px;

    @media (min-width: ${breakpoints['tablet']}) {
      margin-bottom: 20px;
    }

    @media (min-width: ${breakpoints['desktop']}) {
      margin-bottom: 30px;
    }
  }
`

const StyledLi = styled.li`
  margin-bottom: 44px;

  @media (min-width: ${breakpoints['tablet']}) {
    margin-bottom: 60px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    margin-bottom: 90px;
  }
`

const StyledQuestionTitle = styled(Box)`
  margin-bottom: 30px;
  font-size: 15px;
  line-height: 21px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 20px;
    line-height: 28px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    font-size: 30px;
    line-height: 42px;
  }
`

const StyledSpan = styled.span`
  color: #b4b4b4;
  font-size: 12px;
  margin-left: 8px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 16px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    font-size: 18px;
  }
`

const StyledAnswerTitle = styled(Text)`
  font-size: 10px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 14px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    font-size: 18px;
  }
`

const StyledMotionGraph = styled(motion(Box))``

const StyledMotionPortion = styled(motion(Box))`
  font-size: 15px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 20px;
  }
`

interface Props {
  title: string
  description: string
  questions: Array<{
    title: string
    answers: Array<{
      title: string
      portion: string
      background: string
    }>
  }>
  t: TFunction
}

export default function UserResearchSection({ title, description, questions, t }: Props) {
  return (
    <SectionBox background="#f2f2f2">
      <HeadingText as="h2">{title}</HeadingText>
      <DescriptionText>{description}</DescriptionText>
      <ul>
        {questions.map((question, index) => (
          <StyledLi key={index}>
            <StyledQuestionTitle display="flex" fontSize="30px">
              <Text as="span" marginRight="14px">
                {`Q${index + 1}`}.
              </Text>
              <Text as="h3" whiteSpace="pre-wrap">
                <Trans i18nKey={`wechelin:userResearchSection.questions.${index}.title`} t={t}>
                  {/** @ts-ignore */}
                  <StyledSpan>{{ subwords: t('multipleResponses') }}</StyledSpan>
                </Trans>
              </Text>
            </StyledQuestionTitle>
            <StyledUL>
              {question.answers.map(answer => (
                <li key={answer.title}>
                  <StyledAnswerTitle marginBottom="14px">{answer.title}</StyledAnswerTitle>
                  <IntersectionObserver>
                    <Box position="relative">
                      <Box display="flex" alignItems="center">
                        <StyledMotionGraph
                          minWidth="32px"
                          width="32px"
                          height="32px"
                          borderRadius="15px"
                          border="1px solid black"
                          overflow="hidden"
                          zIndex="2"
                          animate={{ width: answer.portion }}
                          transition={{ ease: 'easeOut', duration: 1 }}
                        />
                        <StyledMotionPortion
                          marginLeft="10px"
                          opacity="0"
                          animate={{ opacity: 1 }}
                          transition={{ ease: 'easeOut', delay: 1, duration: 1 }}
                        >
                          {answer.portion}
                        </StyledMotionPortion>
                      </Box>
                      <StyledMotionGraph
                        position="absolute"
                        left="4px"
                        top="4px"
                        minWidth="32px"
                        width="32px"
                        height="32px"
                        borderRadius="15px"
                        overflow="hidden"
                        opacity="0.5"
                        background={answer.background}
                        animate={{ width: answer.portion }}
                        transition={{ ease: 'easeOut', duration: 1 }}
                      />
                    </Box>
                  </IntersectionObserver>
                </li>
              ))}
            </StyledUL>
          </StyledLi>
        ))}
      </ul>
    </SectionBox>
  )
}
