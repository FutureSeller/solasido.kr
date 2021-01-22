/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import ProjectThumbnail from '../components/Thumbnail'

import { bp } from '../styles/responsive'

const GridLayout = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 2.5rem;
  margin-top: 5rem;

  ${bp.mq[bp.BreakPoint.LARGE_LAPTOP]} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${bp.mq[bp.BreakPoint.LAPTOP]} {
    grid-gap: 1.4rem;
  }

  ${bp.mq[bp.BreakPoint.TABLET]} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.8rem;
  }
`

export default function ProjectsPage() {
  const projects = useStaticQuery<GatsbyTypes.ProjectInfoQuery>(graphql`
    query ProjectInfo {
      allProjectsJson {
        edges {
          node {
            id
            title
            category
            pathname
          }
        }
      }
      allFile(filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "thumbnail" }
      }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  
  const projectNodes = projects.allProjectsJson.edges.map(projectEdge => projectEdge.node)
  const thumbnailNodes = projects.allFile.edges.map(fileEdge => fileEdge.node)

  return (
    <Layout id="projects">
      <PageTitle>Projects</PageTitle>
      <GridLayout>
        {
          projectNodes.map(({ id, title, category, pathname }) => (
            <ProjectThumbnail
              key={id}
              title={title}
              category={category}
              pathname={pathname}
              thumbnail={
                thumbnailNodes
                  .find(({ childImageSharp }) => childImageSharp?.fluid?.src.endsWith(pathname!))
                  ?.childImageSharp?.fluid
              }
            />
          ))
        }
      </GridLayout>
    </Layout>
  )
}