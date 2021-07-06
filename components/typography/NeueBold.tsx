import styled from '@emotion/styled'

import { neueBold30, neueBold20, neueBold14 } from '../../styles/typography'
import { responsive } from '../../styles/responsive'

interface Props {
  children: React.ReactNode
}

export default function NeueBoldTitle({ children }: Props) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  ${neueBold30}
  
  ${responsive.mdLte} {
    ${neueBold20}
  }
  ${responsive.smLte} {
    ${neueBold14}
  }
`
