/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import Logo from '../components/Logo'
import TitleSlideIn from '../components/TitleSlideIn'

import { color } from '../styles/color'
import { bp } from '../styles/responsive'

const Title = styled.h1`
  position: relative;
  font-family: 'lovelo';
  font-size: 11.4rem;
  font-weight: 900;

  ${bp.mq[bp.BreakPoint.TABLET]} {
    font-size: 9rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    font-size: 5rem;
  }
`

const Subtitle = styled.p <{ isAbove?: boolean }>`
  font-family: 'lovelo';
  font-size: 3.6rem;
  font-weight: 900;
  width: 29rem;
  border-bottom: 0.4rem solid ${color.solBlack};
  margin-top: ${({ isAbove }) => isAbove ? '7.5rem' : '2.4rem'};

  ${bp.mq[bp.BreakPoint.TABLET]} {
    width: 26rem;
    font-size: 3.2rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    width: 16rem;
    font-size: 2rem;
    border-bottom: 0.3rem solid ${color.solBlack};
    margin-top: ${({ isAbove }) => isAbove ? '13rem' : '0.8rem'};
  }
`

const Slogan = styled.p`
  font-family: 'Sources Sans Pro';
  font-size: 2.6rem;
  font-weight: 600;
  margin-top: 5.2rem;
  margin-bottom: 7.8rem;

  ${bp.mq[bp.BreakPoint.TABLET]} {
    font-size: 2.2rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    font-size: 1.8rem;
    margin-top: 2rem;
  }
`

export default function MainPage() {
  return (
    <Layout>
      <Title>
        Porfolio
        <TitleSlideIn />
      </Title>
      <Subtitle isAbove>Branding</Subtitle>
      <Subtitle>Identity Design</Subtitle>
      <Logo customCss={css`
        margin-top: 17rem;

        ${bp.mq[bp.BreakPoint.MOBILE]} {
          width: 4rem;
          margin-top: 11rem;
        }
      `} />
      <Slogan>Better Design, Better Life.</Slogan>
    </Layout>
  )
}