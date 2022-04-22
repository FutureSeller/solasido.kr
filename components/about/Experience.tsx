import styled from '@emotion/styled'
import { Box, Text } from '@chakra-ui/react'

const AWARDS = [
  {
    title: 'Adobe Design Achievement Awards',
    category: 'Print Communications Category',
    prize: 'Semi Finalist',
    startYear: 2015,
  },
  {
    title: '제3회 삼성모바일디스플레이',
    category: 'OLED 아이디어 공모전',
    prize: '광고 디자인 부문 Finalist',
    startYear: 2011,
  },
  {
    title: '한국차문화협회 차의 세계화전',
    category: '제2회 대한민국 차 패키지디자인 공모전',
    prize: '패키지 디자인 특선',
    startYear: 2010,
  },
]

const FREELANCE = [
  {
    title: 'InkTec',
    description: 'Amazon 입점 상세페이지 디자인',
    startYear: 2021,
    endYear: null,
  },
  {
    title: 'HWAYEON',
    description: '브랜드 디자인, 패키지 디자인',
    startYear: 2020,
    endYear: null,
  },
  {
    title: '제9회 젊은 의사 포럼',
    description: '행사 아이덴티티, 그래픽 디자인',
    startYear: 2019,
    endYear: null,
  },
  {
    title: '서울특별시 사회적경제지원센터',
    description: '위메프 입점 제품, 상세페이지 및 배너 디자인',
    startYear: 2018,
    endYear: null,
  },
  {
    title: 'CHEMSTREE',
    description: '브랜드 디자인',
    startYear: 2017,
    endYear: null,
  },
  {
    title: 'OVIS',
    description: '브랜드 디자인',
    startYear: 2015,
    endYear: 2016,
  },
  {
    title: '대한민국 대학생 교육기부단',
    description: '브랜드 디자인 리뉴얼',
    startYear: 2012,
    endYear: null,
  },
]

export default function Experience() {
  return (
    <Box as="section" background="#fff">
      <ContentBox as="article">
        <Title>IN-HOUSE</Title>
        <ExperienceList as="ul">
          <ExperienceItem as="li">
            <DateBox>{`2021 \u2794 NOW`}</DateBox>
            <StyledText>주식회사 하이앤디</StyledText>
            <StyledText>브랜드 디자이너</StyledText>
          </ExperienceItem>
          <ExperienceItem as="li">
            <DateBox>2020</DateBox>
            <StyledText>고려대학교 디자인혁신센터</StyledText>
            <StyledText>브랜드 디자이너</StyledText>
          </ExperienceItem>
        </ExperienceList>
      </ContentBox>
      <ContentBox>
        <Title as="h2">FREELANCE</Title>
        <ExperienceList as="ul" flexWrap="wrap">
          {FREELANCE.map(freelanceItem => (
            <ExperienceItem as="li" key={freelanceItem.title}>
              <DateBox>
                {freelanceItem.startYear} {freelanceItem.endYear && `\u2794 ${freelanceItem.endYear}`}
              </DateBox>
              <StyledText>{freelanceItem.title}</StyledText>
              <StyledText>{freelanceItem.description}</StyledText>
            </ExperienceItem>
          ))}
        </ExperienceList>
      </ContentBox>
      <ContentBox>
        <Title as="h2">AWARDS</Title>
        <ExperienceList as="ul" widthflexWrap="wrap">
          {AWARDS.map(award => (
            <ExperienceItem as="li" key={award.title}>
              <DateBox>{award.startYear}</DateBox>
              <StyledText>{award.title}</StyledText>
              <StyledText>{award.category}</StyledText>
              <StyledText>{award.prize}</StyledText>
            </ExperienceItem>
          ))}
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

  @media (min-width: 1920px) {
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

  @media (min-width: 1920px) {
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

  @media (min-width: 1920px) {
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
`
