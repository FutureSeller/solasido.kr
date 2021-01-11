/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

export default function SloganImage() {
  const data = useStaticQuery<GatsbyTypes.SloganQuery>(graphql`
    query Slogan {
      mobileImage: file(relativePath: { eq: "branding-mobile.png"}) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100, srcSetBreakpoints: [ 450, 768 ]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sloganImage: file(relativePath: { eq: "branding.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100, srcSetBreakpoints: [ 1024, 1440 ]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  if (!data.sloganImage?.childImageSharp
    || !data.mobileImage?.childImageSharp
  ) {
    return null
  }

  const sources = [
    data.sloganImage.childImageSharp.fluid,
    {
      ...data.mobileImage.childImageSharp.fluid,
      media: '(max-width: 768px)'
    },
  ]

  return (
    <div style={{ marginTop : '50px' }}>
      <Img fluid={sources as FluidObject[]} />
    </div>
  )
}

