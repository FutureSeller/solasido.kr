/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'

import SEO from '../components/SEO'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import MainPage from './MainPage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'


const Layout = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`

export default function IndexPage() {
  return (
    <Fragment>
      <SEO title="Portfolio" />
      <Layout>
        <LeftSidebar />
        <MainPage />
        <AboutPage />
        <ContactPage />
        <RightSidebar />
      </Layout>
    </Fragment>
  )
}
