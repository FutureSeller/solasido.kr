import { useRef } from 'react'
import styled from '@emotion/styled'

import Container from './layout/Container'
import Heading from './layout/Heading'
import Content from './layout/Content'
import NeueDisplay from './typography/NeueDisplay'
import SlideIn from './animation/SlideIn'
import PersonInfo from './PersonInfo'
import CareerInfo from './CareerInfo'

import useOnScreen from '../hooks/useOnScreen'

import { responsive } from '../styles/responsive'
import { colors } from '../styles/colors'

import personJson from '../public/data/person.json'
import careerJson from '../public/data/career.json'

export default function About() {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const isIntersecting = useOnScreen(headingRef)
  const [work, award, outSourcing] = careerJson

  return (
    <Container>
      <Heading>
        <NeueDisplay>
          <SlideIn duration={1.8} isIntersecting={isIntersecting}>
            <h2 ref={headingRef} style={{ color: colors.red }}>
              ABOUT
            </h2>
          </SlideIn>
        </NeueDisplay>
      </Heading>
      <Content>
        <PersonInfoWrapper>
          {
            personJson.map(person => (
              <PersonInfo key={`${person.lang}-${person.name}`} person={person} />
            ))
          }
        </PersonInfoWrapper>
        <CareerWrapper>
          <WorkAwardPanel>
            <CareerInfo career={work} />
            <CareerInfo career={award} />
          </WorkAwardPanel>
          <CareerInfo career={outSourcing} />
        </CareerWrapper>
      </Content>
    </Container>
  )
}

const PersonInfoWrapper = styled.div`
  display: flex;
  padding-top: 100px;

  ${responsive.mdLte} {
    padding-top: 70px;
  }

  ${responsive.smLte} {
    padding-top: 40px;
  }
`

const CareerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 148px;

  ${responsive.mdLte} {
    padding-top: 90px;
  }

  ${responsive.smLte} {
    justify-content: flex-start;
    padding-top: 80px;
  }
`

const WorkAwardPanel = styled.div`
  display: flex;
  flex-direction: column;
  
  padding-right: 115px;

  ${responsive.xlLte} {
    padding-right: 75px;
  }

  ${responsive.lgLte} {
    padding-right: 45px;
  }

  ${responsive.smLte} {
    width: 50%;
    padding-right: 10px;
  }

  > div:last-child {
    padding-top: 60px;

    ${responsive.mdLte} {
      padding-top: 50px;
    }
  }
`
