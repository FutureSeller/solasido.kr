import styled from '@emotion/styled'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import { responsive } from '../../styles/responsive'

import { useAwardsQuery, useCareersQuery, useOutsourcingsQuery } from '../../__generated__/graphql'

export default function Experience() {
  const { data: awardsData } = useAwardsQuery()
  const { data: careersData } = useCareersQuery()
  const { data: outsourcingsData } = useOutsourcingsQuery()

  return (
    <Box as="section">
      <ContentBox>
        <Heading as="h2">
          <Title>Experience</Title>
        </Heading>
      </ContentBox>
      <ContentBox>
        <A>
          <SubTitle as="h3">Work</SubTitle>
          <Flex as="ul" width="100%" flexWrap="wrap">
            {careersData?.careers?.map(career => (
              <StyledLiBox as="li" key={career?.company}>
                <StyledDateBox>
                  {career?.startYear} - {career?.endYear ?? 'NOW'}
                </StyledDateBox>
                <StyledText>{career?.company}</StyledText>
                <StyledText>{career?.position}</StyledText>
              </StyledLiBox>
            ))}
          </Flex>
        </A>
      </ContentBox>
      <ContentBox>
        <A>
          <SubTitle as="h3">Outsourcing</SubTitle>
          <Flex as="ul" width="100%" flexWrap="wrap">
            {outsourcingsData?.outsourcings?.map(outsourcing => (
              <StyledLiBox as="li" key={outsourcing?.title}>
                <StyledDateBox>
                  {outsourcing?.startYear} {outsourcing?.endYear && `- ${outsourcing?.endYear}`}
                </StyledDateBox>
                <StyledText>{outsourcing?.title}</StyledText>
                <StyledText>{outsourcing?.description}</StyledText>
              </StyledLiBox>
            ))}
          </Flex>
        </A>
      </ContentBox>
      <ContentBox>
        <A>
          <SubTitle as="h3">Awards</SubTitle>
          <Flex as="ul" width="100%" flexWrap="wrap">
            {awardsData?.awards?.map(award => (
              <StyledLiBox as="li" key={award?.title}>
                <StyledDateBox>{award?.startYear}</StyledDateBox>
                <StyledText>{award?.title}</StyledText>
                <StyledText>{award?.category}</StyledText>
                <StyledText>{award?.prize}</StyledText>
              </StyledLiBox>
            ))}
          </Flex>
        </A>
      </ContentBox>
    </Box>
  )
}

const ContentBox = styled(Box)`
  padding-left: 55px;
  border-top: 1px solid black;

  ${responsive.mdLte} {
    padding-left: 24px;
  }
`

const Title = styled(Text)`
  padding: 24px 0;
  font-weight: 700;
  font-size: 1.6vw;

  ${responsive.xlLte} {
    font-size: 2vw;
  }

  ${responsive.mdLte} {
    padding: 18px 0;
    font-size: 3vw;
  }

  ${responsive.smLte} {
    padding: 12px 0;
    font-size: 4vw;
  }
`

const StyledDateBox = styled(Box)`
  font-weight: 700;
  font-size: 1.4vw;

  ${responsive.xlLte} {
    font-size: 1.8vw;
  }

  ${responsive.mdLte} {
    font-size: 2.8vw;
  }

  ${responsive.smLte} {
    font-size: 3.8vw;
  }
`

const StyledLiBox = styled(Box)`
  width: 33.3%;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid black;

  & > * {
    margin-bottom: 8px;

    ${responsive.mdLte} {
      margin-bottom: 6px;
    }

    ${responsive.smLte} {
      margin-bottom: 4px;
    }
  }

  ${responsive.mdGte} {
    &:nth-last-of-type(-n + 3):nth-of-type(3n + 1),
    &:nth-last-of-type(-n + 3):nth-of-type(3n + 1) ~ li {
      margin: 0;
      padding: 0;
      border: none;
    }
  }

  ${responsive.mdLte} {
    width: 100%;
    padding-bottom: 10px;
    margin-bottom: 18px;
  }

  ${responsive.smLte} {
    margin-bottom: 12px;
    padding-bottom: 12px;

    &:last-of-type {
      margin: 0;
      padding: 0;
      border: none;
    }
  }
`

const StyledText = styled(Text)`
  font-size: 1.2vw;

  ${responsive.xlLte} {
    font-size: 1.6vw;
  }

  ${responsive.mdLte} {
    font-size: 2.6vw;
  }

  ${responsive.smLte} {
    font-size: 3.6vw;
  }
`

const SubTitle = styled(Box)`
  width: 30%;
  font-weight: 700;
  font-size: 1.6vw;

  ${responsive.xlLte} {
    font-size: 2vw;
  }

  ${responsive.mdLte} {
    width: 50%;
    font-size: 3vw;
  }

  ${responsive.smLte} {
    width: 60%;
    font-size: 4vw;
  }
`

const A = styled(Flex)`
  width: 100%;
  padding: 24px 0;

  ${responsive.mdLte} {
    padding: 18px 0;
  }

  ${responsive.smLte} {
    padding: 12px 0;
  }
`
