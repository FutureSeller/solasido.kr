import styled from '@emotion/styled'
import { Box, Text } from '@chakra-ui/react'
import { TFunction } from 'next-i18next'
import { SectionBox, HeadingText, DescriptionText } from '../CommonLayout'
import { breakpoints } from '../../../styles/responsive'

const StyledSectionBox = styled(SectionBox)`
  padding-top: 70px;
  padding-bottom: 30px;

  @media (min-width: ${breakpoints['tablet']}) {
    padding-top: 80px;
    padding-bottom: 60px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    padding-top: 120px;
    padding-bottom: 100px;
  }
`

const StyledGoalList = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${breakpoints['desktop']}) {
    flex-direction: row;
  }

  & > li {
    width: 100%;
    padding: 30px 16px;
    border-top: 0.5px solid #818181;

    &:last-of-type {
      margin-bottom: 20px;
    }

    @media (min-width: ${breakpoints['tablet']}) {
      padding: 30px 60px;
    }

    @media (min-width: ${breakpoints['desktop']}) {
      padding: 50px 90px;
      border-right: 0.5px solid #818181;

      &:last-of-type {
        margin-bottom: 70px;
      }
    }
  }
`

const StyledGoalNumber = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.suitMeidum};
  font-size: 22px;
  margin-bottom: 10px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 30px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    font-size: 40px;
  }
`

const StyledText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.suitMeidum};
  font-size: 18px;
  line-height: 26px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 20px;
    line-height: 32px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    font-size: 30px;
    line-height: 42px;
  }
`

interface Props {
  title: string
  description: string
  t: TFunction
}

export default function ProjectGoalSection({ title, description, t }: Props) {
  return (
    <>
      <StyledSectionBox>
        <HeadingText>{title}</HeadingText>
        <DescriptionText>{description}</DescriptionText>
      </StyledSectionBox>
      <StyledGoalList as="ul">
        {Array.from({ length: 3 }).map((_, index) => (
          <Box as="li" key={`project-goal-${index.toString}`}>
            <StyledGoalNumber>{index + 1}</StyledGoalNumber>
            <StyledText fontFamily="SUIT Medium" fontSize="30px" whiteSpace="pre-line">
              <>{t(`wechelin:projectGoalSection.goals.${index}`)}</>
            </StyledText>
          </Box>
        ))}
      </StyledGoalList>
    </>
  )
}
