/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import Indent from '../components/Indent'
import PageTitle from '../components/PageTitle'
import Quotes from '../components/Quotes'
import SloganImage from '../components/SloganImage'

import { color } from '../styles/color'
import { bp } from '../styles/responsive'

const WhoAmI = styled.p`
  width: 35rem;
  font-family: 'Noto Sans KR';
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.6rem;

  ${bp.mq[bp.BreakPoint.TABLET]} {
    font-size: 2rem;
    line-height: 3.2rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    width: 24rem;
    font-size: 1.6rem;
    margin-top: 4.8rem;
    line-height: 2.6rem;
  }
`

const Moto = styled.p`
  display: inline-block;
  font-family: 'lovelo';
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 3.5rem;
  margin-top: 5.2rem;
  border-bottom: 0.4rem solid ${color.solBlack};

  ${bp.mq[bp.BreakPoint.TABLET]} {
    font-size: 3.2rem;
    line-height: 3.2rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    font-size: 2.2rem;
    line-height: 2.2rem;
    margin-top: 3rem;
    border-bottom: 0.3rem solid ${color.solBlack};
  }
`

const Panel = styled.div`
  display: flex;
  margin-top: 5.2rem;

  ${bp.mq[bp.BreakPoint.DESKTOP]} {
    flex-direction: column;
  }
`

const SloganWrapper = styled.div`
  width: 100%;
  margin-left: 5.2rem;
  padding-top: 12rem;
  
  ${bp.mq[bp.BreakPoint.DESKTOP]} {
    display: block;
    margin-left: 0;
    padding-top: 4rem;
  }
`

export default function AboutPage() {
  return (
    <Layout id="about">
      <PageTitle>About</PageTitle>
      <Indent>
        <Panel>
          <div>
            <WhoAmI>브랜드의 핵심 가치와 아이덴티티를 명료하게 전달하는 디자이너</WhoAmI>
            <Moto>Simple is the best.</Moto>
          </div>
          <SloganWrapper>
            <Quotes />
            <SloganImage />
          </SloganWrapper>
        </Panel>
      </Indent>
    </Layout>
  )
}