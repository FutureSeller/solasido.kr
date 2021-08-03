import { useEffect } from 'react'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import NeueDisplay from './typography/NeueDisplay'
import Typing from './animation/Typing'

import { responsive } from '../styles/responsive'
import { colors } from '../styles/colors'

export default function Main() {
  useEffect(() => {
    // !HACK: https://css-tricks.com/the-trick-to-viewport-units-on-mobile
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [])

  return (
    <Container>
      <HidedTitle>Solasido&apos;s Portfolio</HidedTitle>
      <Content>
        <NeueDisplay>
          <Typing duration={1.2}>Better Design,</Typing>
          <Typing duration={1.2} delay={3}>Better Life.</Typing>
          <StrikeThrough />
        </NeueDisplay>
      </Content>
    </Container>
  )
}

const Container = styled.section`
  position: relative;

  background-color: ${colors.black};
  color: ${colors.white};

  width: 100%;
  padding: 500px 60px;

  ${responsive.mdLte} {
    padding: 400px 30px;
  }

  ${responsive.smLte} {
    padding: 400px 20px;
  }
`

const HidedTitle = styled.h1`
  position: absolute;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
`

const Content = styled.div`
  display: inline-block;
`

const mimicStrikeThrough = keyframes`
  from {
    width: 0;
  }
  to {
    width: calc(100% + 60px);
  }
`

const StrikeThrough = styled.div`
  position: relative;

  &::before {
    position: absolute;
    left: -60px;
    top: 30%;
    content: '';
    border-bottom: 25px solid ${colors.red};
    animation: ${mimicStrikeThrough} 1s forwards;
    animation-delay: 4.5s;

    ${responsive.lgLte} {
      border-bottom: 22px solid ${colors.red};
    }

    ${responsive.mdLte} {
      border-bottom: 16px solid ${colors.red};
    }

    ${responsive.smLte} {
      border-bottom: 10.5px solid ${colors.red};
    }

    ${responsive.xsLte} {
      border-bottom: 7px solid ${colors.red};
    }
  }
`
