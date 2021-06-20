import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import Container from './common/Container'
import Heading from './common/Heading'
import Content from './common/Content'
import NeueDisplay from './typography/NeueDisplay'
import NeueBold from './typography/NeueBold'
import Blink from './animation/Blink'

import { responsive } from '../styles/responsive'
import { colors } from '../styles/colors'

export default function Main() {
  return (
    <Container>
      <HidedTitle>Solasido&apos;s Portfolio</HidedTitle>
      <Heading isMainSection>
        <NeueDisplay>
          <Blink duration={1.8} delay={0.5}>
            <div>Better Design,</div>
            <div>Better Life.</div>
          </Blink>
          <Blink duration={1.8} delay={1}>
            <StrikeThrough>Portfolio</StrikeThrough>
          </Blink>
        </NeueDisplay>
      </Heading>
      <Content>
        <NeueBold>
          <Blink duration={0.5} delay={1.5}>
            <SubjectWrapper>
              <Subject>BRANDING</Subject>
              <Subject>IDENTITY DESIGN</Subject>
            </SubjectWrapper>
          </Blink>
        </NeueBold>
      </Content>
    </Container>
  )
}

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
    top: 28%;
    content: '';
    border-bottom: 25px solid ${colors.red};
    animation: ${mimicStrikeThrough} 1s forwards;
    animation-delay: 1.5s;

    ${responsive.lgLte} {
      border-bottom: 20px solid ${colors.red};
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

const SubjectWrapper = styled.div`
  display: inline-block;
  padding-top: 240px;

  ${responsive.mdLte} {
    padding-top: 244px;
  }

  ${responsive.smLte} {
    padding-top: 194px;
  }
`

const Subject = styled.div`
  border-bottom: 4px solid ${colors.black};
  padding-top: 20px;

  ${responsive.mdLte} {
    border-bottom: 2.5px solid ${colors.black};
    padding-top: 12.5px;
  }

  ${responsive.smLte} {
    border-bottom: 2px solid ${colors.black};
    padding-top: 10px;
  }
`

const HidedTitle = styled.h1`
  position: absolute;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
`
