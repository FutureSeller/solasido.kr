/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'

import { bp } from '../styles/responsive'

export default function Logo() {
  const data = useStaticQuery<GatsbyTypes.LogoQuery>(graphql`
    query Logo {
      logo: file(relativePath: { eq: "logo.svg" }) {
        extension
        publicURL
      }
    }
  `)
  
  return data?.logo && data?.logo?.extension === 'svg'
    ? <img
      src={data?.logo?.publicURL}
      alt="logo"
      css={css`
        margin-top: 14rem;
        ${bp.mq[bp.BreakPoint.MOBILE]} {
          width: 4rem;
          margin-top: 11rem;
      }`} />
    : null
}
