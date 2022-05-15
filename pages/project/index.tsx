import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

import ScreenWidthProvider from '../../contexts/ScreenWidthProvider'

import Meta from '../../components/Meta'
import ContentBox from '../../components/ContentBox'
import Footer from '../../components/pageLayout/Footer'
import ProjectThumbnailList from '../../components/project/ProjectThumbnailList'

export default function ProjectsPage() {
  return (
    <>
      <Meta title="Projects | SOLASIDO" description="Design brands and user experiences." />
      <Main>
        <StyledContentBox>
          <StyledPageHeader as="h1">{`ARCHIVE OF WORK\n2012 \u2794 ${new Date().getFullYear()}`}</StyledPageHeader>
          <ScreenWidthProvider>
            <ProjectThumbnailList />
          </ScreenWidthProvider>
        </StyledContentBox>
        <Footer color="white" backgroundColor="black" />
      </Main>
    </>
  )
}

const Main = styled.main`
  position: relative;
  height: 100%;
  min-height: 100vh;
`

const StyledPageHeader = styled(Box)`
  font-family: Gordita Bold;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  white-space: pre-wrap;

  @media (min-width: 768px) {
    font-size: 26px;
  }

  @media (min-width: 1920px) {
    font-size: 40px;
  }
`

const StyledContentBox = styled(ContentBox)`
  margin-top: 77px;
`

export const getStaticProps = async () => {
  return {
    props: {},
  }
}
