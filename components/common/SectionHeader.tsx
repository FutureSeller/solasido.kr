import { forwardRef } from 'react'
import styled from '@emotion/styled'

import { colors } from '../../styles/colors'

interface Props {
  title: string
}

export default forwardRef<HTMLHeadingElement, Props>(function SectionHeader({ title }, ref) {
  return (
    <Container>
      <ScreenTextLink id={title}>{title}</ScreenTextLink>
      <h2 ref={ref} style={{ color: colors.red }}>
        {title}
      </h2>
    </Container>
  )
})

const Container = styled.div`
  position: relative;
`

const ScreenTextLink = styled.div`
  position: absolute;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: no-wrap;
  top: -100px;
`
