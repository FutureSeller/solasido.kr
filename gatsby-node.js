/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const projectResults = await graphql(`
    {
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
    }
  `)

  const projects = projectResults.data.allProjectsJson.edges
  const details = await Promise.all(projects.map(async project => {
    return await graphql(`
      query DetailSlide($pathname: String!) {
        detail: file(relativePath: { eq: $pathname }) {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    `, { pathname: `detail/${project.node.pathname.replace('-thumbnail', '')}` })
  }))

  projects.forEach(async project => {
    createPage({
      path: `/${project.node.pathname.split('.')[0].replace('-thumbnail', '')}`,
      component: path.resolve(__dirname, 'src/templates/ModalPage.tsx'),
      context: {
        detailPage: details.find(
          detail => detail.data.detail.childImageSharp.fluid.src.endsWith(project.node.pathname.replace('-thumbnail', ''))
        )
      },
    })
  })
}
