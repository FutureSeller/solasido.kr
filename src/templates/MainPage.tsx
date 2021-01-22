/** @jsx jsx */
import { jsx, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import Logo from '../components/Logo'
import Interests from '../components/Interests'

import { color } from '../styles/color'
import { bp } from '../styles/responsive'

const Title = styled.h1`
  position: relative;
  font-family: 'lovelo';
  font-size: 11.4rem;
  font-weight: 900;
  margin-top: 20rem;

  ${bp.mq[bp.BreakPoint.TABLET]} {
    font-size: 9rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    font-size: 5rem;
  }
`

const slideIn = keyframes`
  0% {
    transform: translateX(-900px);
  }
  100% { 
    transform: translateX(0);
  }
`

const SlideinUnderline = styled.div`
  position: absolute;
  top: calc(50% - 1.3rem);
  left: -20rem;
  width: 90rem;
  height: 1.9rem;
  background-color: ${color.solRed};
  animation: ${slideIn} 1s forwards;

  ${bp.mq[bp.BreakPoint.TABLET]} {
    width: 73rem;
    height: 1.5rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    width: 48rem;
    height: 1rem;
    top: calc(50% - 0.7rem);
  }
`

const Slogan = styled.p`
  font-family: 'Source Sans Pro';
  font-size: 2.6rem;
  font-weight: 600;
  margin-top: 5.2rem;

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
    <Layout id="main">
      <Title>
        <span>Porfolio</span>
        <SlideinUnderline />
      </Title>
      <Interests pathname="main" />
      <Logo />
      <Slogan>Better Design, Better Life.</Slogan>
    </Layout>
  )
}