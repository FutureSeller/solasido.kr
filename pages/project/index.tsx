import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

import DeviceProviderProvider from '../../contexts/DeviceProvider'

import Meta from '../../components/Meta'
import ContentBox from '../../components/ContentBox'
import NavBar from '../../components/home/NavBar'
import Footer from '../../components/home/Footer'
import ProjectThumbnailList from '../../components/project/ProjectThumbnailList'

import { initializeApollo } from '../../apollo/client'
import { ProjectPage_ProjectsDocument } from '../../__generated__/graphql'
import type { ProjectPage_ProjectsQuery } from '../../__generated__/graphql'

export default function ProjectsPage() {
  return (
    <>
      <Meta title="Projects | SOLASIDO" description="Design brands and user experiences." />
      <Main>
        <NavBar />
        <StyledContentBox>
          <StyledPageHeader as="h1">{`ARCHIVE OF WORK\n2012 → 2022`}</StyledPageHeader>
          <DeviceProviderProvider>
            <ProjectThumbnailList />
          </DeviceProviderProvider>
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
  min-width: 320px;
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
  const apolloClient = initializeApollo({})

  await apolloClient.query<ProjectPage_ProjectsQuery>({
    query: ProjectPage_ProjectsDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
