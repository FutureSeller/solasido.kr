import styled from '@emotion/styled'
import { responsive } from '../../styles/responsive'

const Content = styled.div`
  padding: 0 90px;

  ${responsive.mdLte} {
    padding: 0 50px;
  }

  ${responsive.smLte} {
    padding: 0 20px;
  }

  ${responsive.xsLte} {
    padding: 0;
  }
`

export default Content