import { useRef } from 'react'

import Container from './common/Container'
import Heading from './common/Heading'
import Content from './common/Content'
import SectionHeader from './common/SectionHeader'
import NeueDisplay from './typography/NeueDisplay'
import SlideIn from './animation/SlideIn'
import WorkListContainer from './project/WorkListContainer'

import { DeviceTypeContextProvider } from '../context/DeviceTypeContext'

import useOnScreen from '../hooks/useOnScreen'

export default function Project() {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const isIntersecting = useOnScreen(headingRef)

  return (
    <Container>
      <Heading>
        <NeueDisplay>
          <SlideIn duration={1.8} isIntersecting={isIntersecting}>
            <SectionHeader title="projects" ref={headingRef} />
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
