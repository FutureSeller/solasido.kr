import styled from '@emotion/styled'
import { Box, useMediaQuery } from '@chakra-ui/react'

import ProjectThumbnail from './ProjectThumbnail'

import projectsData from '../../public/data/projects.json'

import { breakpoints } from '../../styles/responsive'

export default function ProjectThumbnailList() {
  const [isLargerThanTablet] = useMediaQuery(`(min-width: ${breakpoints['tablet']})`)

  const leftColumn = projectsData.filter((_, idx) => idx % 2 === 0)
  const rightColumn = projectsData.filter((_, idx) => idx % 2 === 1)

  return isLargerThanTablet ? (
    <Flex>
      <StyledBox>
        {leftColumn.map(figure => figure && <ProjectThumbnail key={figure.slug} figure={figure} />)}
      </StyledBox>
      <StyledBox>
        {rightColumn.map(figure => figure && <ProjectThumbnail key={figure.slug} figure={figure} />)}
      </StyledBox>
    </Flex>
  ) : (
    <Box paddingBottom="80px">
      {projectsData.map(figure => figure && <ProjectThumbnail key={figure.slug} figure={figure} />)}
    </Box>
  )
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 120px;
`

const StyledBox = styled.div`
  width: calc(50% - 16px);
`
