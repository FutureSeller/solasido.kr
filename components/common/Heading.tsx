import styled from '@emotion/styled'
import { responsive } from '../../styles/responsive'

const Heading = styled.div<{ isMainSection?: boolean }>`
  display: inline-block;
  padding-top: ${({ isMainSection }) => isMainSection ? '280px' : '600px'};

  ${responsive.mdLte} {
    padding-top: ${({ isMainSection }) => isMainSection ? '380px' : '450px'};
  }

  ${responsive.smLte} {
    padding-top: ${({ isMainSection }) => isMainSection ? '200px' : '400px'};
  }
`

export default Heading