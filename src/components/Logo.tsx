/** @jsx jsx */
// import React from 'react'
import { jsx } from '@emotion/react'
import { Interpolation, Theme } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  style?: { [key: string]: string | number }
  customCss?: Interpolation<Theme>
}

export default function Logo({ style, customCss }: Props) {
  const data = useStaticQuery<GatsbyTypes.LogoQuery>(graphql`
    query Logo {
      logo: file(relativePath: { eq: "logo.svg" }) {
        extension
        publicURL
      }
    }
  `)
  
  return data?.logo && data?.logo?.extension === 'svg'
    ? <img src={data?.logo?.publicURL} alt="logo" style={style} css={customCss}/>
    : null
}
