/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'

import SEO from '../components/SEO'
import Navigation from '../components/Navigation'
import MainPage from './MainPage'
import Aside from '../components/Aside'

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
        <Navigation />
        <MainPage />
        <Aside />
      </Layout>
    </Fragment>
  )
}
