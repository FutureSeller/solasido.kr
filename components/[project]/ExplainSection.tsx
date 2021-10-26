import styled from '@emotion/styled'
import { Box, Flex, Heading, Text, VisuallyHidden } from '@chakra-ui/react'
import Link from 'next/link'

import { responsive } from '../../styles/responsive'

import type { ProjectSlugPage_ProjectDetailQuery } from '../../__generated__/graphql'

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
          <ScopeBox>
            <Heading as="h3">
              <CategoryTitle>SCOPE</CategoryTitle>
            </Heading>
            <StyledUl>
              {project?.scope?.split('\n').map(scopeItem => (
                <li key={scopeItem}>{scopeItem}</li>
              ))}
            </StyledUl>
          </ScopeBox>
          <MetaBox>
            <Box>
              <Heading as="h3">
                <CategoryTitle>PERIOD</CategoryTitle>
              </Heading>
              {`${project?.startDate} - ${project?.endDate}`}
            </Box>
            <Box>
              <Heading as="h3">
                <CategoryTitle>{project?.work?.type}</CategoryTitle>
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

const StyledFlex = styled(Flex)`
  ${responsive.lgLte} {
    flex-direction: column;
  }
`

const StyledBox = styled(Box)`
  padding: 120px 10vw;

  ${responsive.mdLte} {
    padding: 80px 24px;
  }

  ${responsive.smLte} {
    padding: 60px 24px;
  }
`

const CategoryTitle = styled(Text)`
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 20px;

  ${responsive.mdLte} {
    font-size: 14px;
  }
`

const DescriptionBox = styled(Box)`
  width: 41%;
  margin-right: 9%;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  word-break: keep-all;

  ${responsive.lgLte} {
    width: 100%;
    margin: 0;
    margin-bottom: 40px;
  }

  ${responsive.mdLte} {
    font-size: 16px;
  }
`

const ColumnBox = styled(Flex)`
  justify-content: space-around;
  width: 50%;
  font-weight: 700;
  font-size: 20px;

  ${responsive.lgLte} {
    justify-content: flex-start;
    width: 100%;
  }

  ${responsive.mdLte} {
    font-size: 14px;
  }
`

const GhostBox = styled(Box)`
  margin-bottom: 50px;
  font-size: 4vw;
  opacity: 0;

  ${responsive.lgLte} {
    font-size: 5vw;
  }

  ${responsive.mdLte} {
    margin-bottom: 30px;
    font-size: 36px;
  }
`

const StyledUl = styled.ul`
  & > :not(style) ~ :not(style) {
    margin-top: 4px;
  }
`

const ScopeBox = styled(Box)`
  ${responsive.lgLte} {
    width: 50%;
  }
`

const MetaBox = styled(Box)`
  & > :not(style) ~ :not(style) {
    margin-top: 20px;
  }
`
