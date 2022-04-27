import styled from '@emotion/styled'
import { Box, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

export default function Experience() {
  const { t } = useTranslation('about')

  return (
    <Box as="section" background="#fff">
      <ContentBox as="article">
        <Title>IN-HOUSE</Title>
        <ExperienceList as="ul">
          <ExperienceItem as="li">
            <DateBox>{`2021 \u2794 NOW`}</DateBox>
            <StyledText>{t('about:inhouse.0.company')}</StyledText>
            <StyledText>{t('about:inhouse.0.position')}</StyledText>
          </ExperienceItem>
          <ExperienceItem as="li">
            <DateBox>2020</DateBox>
            <StyledText>{t('about:inhouse.1.company')}</StyledText>
            <StyledText>{t('about:inhouse.1.position')}</StyledText>
          </ExperienceItem>
        </ExperienceList>
      </ContentBox>
      <ContentBox>
        <Title as="h2">FREELANCE</Title>
        <ExperienceList as="ul" flexWrap="wrap">
          {Array.from({ length: 8 }).map((_, index) => (
            <ExperienceItem as="li" key={`freelance-${index.toString()}}`}>
              <DateBox>
                {t(`about:freelance.${index}.startYear`)}
                {t(`about:freelance.${index}.endYear`) && ` \u2794 ${t(`about:freelance.${index}.endYear`)}`}
              </DateBox>
              <StyledText>{t(`about:freelance.${index}.title`)}</StyledText>
              <StyledText>{t(`about:freelance.${index}.description`)}</StyledText>
            </ExperienceItem>
          ))}
        </ExperienceList>
      </ContentBox>
      <ContentBox>
        <Title as="h2">AWARDS</Title>
        <ExperienceList as="ul" flexWrap="wrap">
          {/* {AWARDS.map(award => ( */}
          {Array.from({ length: 3 }).map((_, index) => (
            <ExperienceItem as="li" key={`awards-${index.toString()}`}>
              <DateBox>{t(`about:awards.${index}.startYear`)}</DateBox>
              <StyledText>{t(`about:awards.${index}.title`)}</StyledText>
              <StyledText>{t(`about:awards.${index}.category`)}</StyledText>
              <StyledText>{t(`about:awards.${index}.prize`)}</StyledText>
            </ExperienceItem>
          ))}
          {/* ))} */}
        </ExperienceList>
      </ContentBox>
    </Box>
  )
}

const Title = styled(Box)`
  min-width: 160px;
  font-family: Gordita Bold;
  font-weight: 700;
  font-size: 14px;
  border-right: 2px solid black;
  padding-left: 24px;
  padding-right: 38px;
  padding-top: 20px;

  @media (min-width: 768px) {
    min-width: 185px;
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    min-width: 220px;
    font-size: 23px;
  }
`

const ContentBox = styled(Box)`
  display: flex;

  &:nth-of-type(n-1) {
    border-bottom: 2px solid black;
  }
`

const ExperienceList = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > :not(:last-of-type) {
    border-bottom: 2px solid black;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`

const ExperienceItem = styled(Box)`
  width: 100%;
  padding-left: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
    padding-left: 20px;
    padding-bottom: 15px;
  }

  @media (min-width: 1440px) {
    width: 33.3%;

    &:nth-last-of-type(-n + 3):nth-of-type(3n + 1),
    &:nth-last-of-type(-n + 3):nth-of-type(3n + 1) ~ li {
      border: none;
    }
  }
`

const DateBox = styled(Box)`
  font-family: Gordita Bold;
  margin-bottom: 5px;
`

const StyledText = styled(Text)`
  font-family: SUIT Regular;
  white-space: pre-wrap;
`
