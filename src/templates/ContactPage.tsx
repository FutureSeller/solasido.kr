/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import Indent from '../components/Indent'
import PageTitle from '../components/PageTitle'
import ContactInfo from '../components/ContactInfo'
import Interests from '../components/Interests'

import { bp } from '../styles/responsive'

const KoreanName = styled.p`
  font-family: 'Noto Sans KR';
  font-weight: 500;
  font-size: 2.4rem;
  margin-top: 14rem;
  line-height: 2.4rem;

  ${bp.mq[bp.BreakPoint.TABLET]} {
    font-size: 2.2rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    font-size: 2rem;
    margin-top: 8rem;
  }
`

const EnglishName = styled.p`
  font-family: 'Source Sans Pro';
  font-weight: 400;
  font-size: 2.4rem;
  margin-top: 1.4rem;
  line-height: 2.4rem;

  ${bp.mq[bp.BreakPoint.TABLET]} {
    font-size: 2.2rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    font-size: 2rem;
    margin-top: 0.8rem;
  }
`

export default function ContactPage() {
  return (
    <Layout id="contact">
      <div css={css`
        padding-top: 10rem;
        padding-bottom: 5rem;
      `}>
        <PageTitle>Contact</PageTitle>
        <Indent >
          <Interests pathname="contact" />
          <KoreanName>정한솔</KoreanName>
          <EnglishName>Chung Hansol</EnglishName>
          <ContactInfo />
        </Indent>
      </div>
    </Layout>
  )
}