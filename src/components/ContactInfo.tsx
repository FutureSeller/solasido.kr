/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'

import { color } from '../styles/color'
import { bp } from '../styles/responsive'

const ContactInfoWrapper = styled.ul`
  display: flex;
  margin-top: 5.6rem;
  font-family: 'Source Sans Pro';

  & li:nth-of-type(2) {
    margin: 0 11rem;

    ${bp.mq[bp.BreakPoint.TABLET]} {
      margin: 1.4rem 0;
    }
  }

  ${bp.mq[bp.BreakPoint.TABLET]} {
    flex-direction: column;
    margin-top: 4.7rem;
  }
`

const Title = styled.h3`
  font-weight: 700;
  font-size: 1.8rem;
  color: ${color.solRed};

  ${bp.mq[bp.BreakPoint.TABLET]} {
    font-size: 1.6rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    font-size: 1.4rem;
  }
`

const Link = styled.a`
  font-weight: 400;
  font-size: 1.8rem;
  maring-top: 0.4rem;
  color: ${color.solGrey};

  ${bp.mq[bp.BreakPoint.TABLET]} {
    font-size: 1.6rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    font-size: 1.4rem;
  }
`

export default function ContactInfo() {
  const contactInfo = useStaticQuery<GatsbyTypes.ContactInfoQuery>(graphql`
    query ContactInfo {
      allContactJson {
        edges {
          node {
            id
            title
            link
            text
          }
        }
      }
    }
  `)

  return (
    <ContactInfoWrapper> 
      {contactInfo.allContactJson.edges.map(({ node: { id, title, link, text } }) => (
        <li key={id}>
          <Title>{title}</Title>
          <Link href={link} target="_blank" rel="noreferrer">{text}</Link>
        </li>
      ))}
    </ContactInfoWrapper>
  )
}