/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'

import SEO from '../components/SEO'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import MainPage from '../templates/MainPage'
import AboutPage from '../templates/AboutPage'
import ProjectsPage from '../templates/ProjectsPage'
import ContactPage from '../templates/ContactPage'

const Layout = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`

export default function IndexPage() {
  return (
    <Fragment>
      <SEO />
      <Layout>
        <LeftSidebar />
        <MainPage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
        <RightSidebar />
      </Layout>
    </Fragment>
  )
}
