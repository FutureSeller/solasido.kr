import { useRef } from 'react'

import Container from './layout/Container'
import Heading from './layout/Heading'
import Content from './layout/Content'
import NeueDisplay from './typography/NeueDisplay'
import SlideIn from './animation/SlideIn'
import WorkListContainer from './project/WorkListContainer'

import { DeviceTypeContextProvider } from '../context/DeviceTypeContext'

import useOnScreen from '../hooks/useOnScreen'

import { colors } from '../styles/colors'

export default function Project() {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const isIntersecting = useOnScreen(headingRef)

  return (
    <Container>
      <Heading>
        <NeueDisplay>
          <SlideIn duration={1.8} isIntersecting={isIntersecting}>
            <h2 ref={headingRef} style={{ color: colors.red }}>
              Project
            </h2>
          </SlideIn>
        </NeueDisplay>
      </Heading>
      <Content>
        <DeviceTypeContextProvider> 
          <WorkListContainer />
        </DeviceTypeContextProvider>
      </Content>
    </Container>
  )
}
