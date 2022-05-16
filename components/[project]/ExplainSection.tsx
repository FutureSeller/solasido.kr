import styled from '@emotion/styled'
import { Box, Flex, Heading, Text, VisuallyHidden } from '@chakra-ui/react'
import Link from 'next/link'

import { titleFontStyle, BOTTOM_POSITON, STICKY_GUTTER } from './titleStyle'

import { breakpoints } from '../../styles/responsive'

import type { ProjectSlugPage_ProjectDetailQuery } from '../../__generated__/graphql'

const StyledFlex = styled(Flex)`
  flex-direction: column;

  @media (min-width: ${breakpoints['desktop']}) {
    flex-direction: row;
  }
`

const StyledBox = styled(Box)`
  padding: ${STICKY_GUTTER['mobile']}px 24px;

  @media (min-width: ${breakpoints['tablet']}) {
    padding: ${STICKY_GUTTER['tablet']}px 10vw;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    padding: ${STICKY_GUTTER['desktop']}px 10vw;
  }
`

const CategoryTitle = styled(Text)`
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fonts.suitRegular};
  font-weight: 400;
  font-size: 14px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 20px;
  }
`

const DescriptionBox = styled(Box)`
  width: 100%;
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  word-break: keep-all;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    width: 50%;
  }
`

const ColumnBox = styled(Flex)`
  font-weight: 700;
  font-size: 14px;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    justify-content: flex-end;
    width: 50%;
  }
`

const GhostBox = styled(Box)`
  ${titleFontStyle};

  margin-bottom: ${BOTTOM_POSITON}px;
  opacity: 0;
`

const StyledUl = styled.ul`
  & > :not(style) ~ :not(style) {
    margin-top: 4px;
  }
`

const MetaBox = styled(Box)`
  & > :not(style) ~ :not(style) {
    margin-top: 20px;
  }
`

interface Props {
  project: ProjectSlugPage_ProjectDetailQuery['project']
}

export default function ExplainSection({ project }: Props) {
  return (
    <StyledBox position="relative" backgroundColor={project?.backgroundColor} color={project?.color}>
      <GhostBox>{project?.title}</GhostBox>
      <VisuallyHidden>
        <Heading as="h2">Project Information</Heading>
      </VisuallyHidden>
      <StyledFlex>
        <DescriptionBox>
          <VisuallyHidden>
            <Heading as="h3">Summary</Heading>
          </VisuallyHidden>
          {project?.description.split('\n\n').map((desc, idx) => (
            <Text as="p" key={idx} marginBottom="20px" fontWeight="700" whiteSpace="pre-line">
              {desc}
            </Text>
          ))}
        </DescriptionBox>
        <ColumnBox>
          <Box width="50%">
            <Heading as="h3">
              <CategoryTitle>SCOPE</CategoryTitle>
            </Heading>
            <StyledUl>
              {project?.scope?.split('\n').map(scopeItem => (
                <li key={scopeItem}>{scopeItem}</li>
              ))}
            </StyledUl>
          </Box>
          <MetaBox>
            <Box>
              <Heading as="h3">
                <CategoryTitle>PERIOD</CategoryTitle>
              </Heading>
              {`${project?.startDate} - ${project?.endDate}`}
            </Box>
            <Box>
              <Heading as="h3">
                <CategoryTitle>{project?.work?.type.replace('_', ' ')}</CategoryTitle>
              </Heading>
              {project?.work?.value}
            </Box>
            {project?.link && (
              <Box>
                <Heading as="h3">
                  <CategoryTitle>WEBSITE</CategoryTitle>
                </Heading>
                <Link href={project.link} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    LINK
                  </a>
                </Link>
              </Box>
            )}
          </MetaBox>
        </ColumnBox>
      </StyledFlex>
    </StyledBox>
  )
}
