import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ fontFamily: 'lovelo' }}>Hi people</h1>
    <p style={{ fontFamily: 'Source Sans Pro'}}>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
    <Link to="/404/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
