import styled from '@emotion/styled'

import { neueDisplay100, neueDisplay28, neueDisplay38, neueDisplay60, neueDisplay80 } from '../../styles/typography'
import { responsive } from '../../styles/responsive'

interface Props {
  children: React.ReactNode
}

export default function NeueDisplayHeading({ children }: Props) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  ${neueDisplay100}
  
  ${responsive.lgLte} {
    ${neueDisplay80}
  }

  ${responsive.mdLte} {
    ${neueDisplay60}
  }

  ${responsive.smLte} {
    ${neueDisplay38}
  }

  ${responsive.xsLte} {
    ${neueDisplay28}
  }
`