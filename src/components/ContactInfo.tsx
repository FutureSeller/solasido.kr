/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'

import { color } from '../styles/color'
import { bp } from '../styles/responsive'

const ContactInfoWrapper = styled.ul`
  display: flex;
  margin-top: 5.6rem;
  font-family: 'Source Sans Pro';

  & li:first-of-type {
    margin-right: 11rem;

    ${bp.mq[bp.BreakPoint.TABLET]} {
      margin-bottom: 1.4rem;
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

const CONTACT_INFO = [
  { title: 'Mail me at', link: 'mailto:sol_asido_@naver.com' },
  { title: 'About me', link: 'https://www.linkedin.com/in/solasido' }
]

export default function ContactInfo() {
  return (
    <ContactInfoWrapper> 
      {CONTACT_INFO.map(({ title, link }) => (
        <li key={title}>
          <Title>{title}</Title>
          <Link href={link} target="_blank" rel="noreferrer">{link.replace(/(mailto:|https:\/\/)/, '')}</Link>
        </li>
      ))}
    </ContactInfoWrapper>
  )
}