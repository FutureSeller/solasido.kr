import styled from '@emotion/styled'

import DeviceProviderProvider from '../../contexts/DeviceProvider'

import Meta from '../../components/Meta'
import NavBar from '../../components/NavBar'
import ContentBox from '../../components/ContentBox'
import Footer from '../../components/Footer'
import PageTitle from '../../components/PageTitle'
import ProjectThumbnailList from '../../components/project/ProjectThumbnailList'

import { initializeApollo } from '../../apollo/client'
import { ProjectsDocument } from '../../__generated__/graphql'
import type { ProjectsQuery } from '../../__generated__/graphql'

export default function Projects() {
  return (
    <>
      <Meta title="Projects | SOLASIDO" description="SOLASIDO의 작업 목록" />
      <Main>
        <NavBar color="black" backgroundColor="white" alwaysVisible />
        <ContentBox>
          <PageTitle>Projects</PageTitle>
          <DeviceProviderProvider>
            <ProjectThumbnailList />
          </DeviceProviderProvider>
        </ContentBox>
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

export const getStaticProps = async () => {
  const apolloClient = initializeApollo({})

  await apolloClient.query<ProjectsQuery>({
    query: ProjectsDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
