import styled from '@emotion/styled'
import { responsive } from '../../styles/responsive'

const Container = styled.section`
  padding: 0 60px;

  ${responsive.mdLte} {
    padding: 0 30px;
  }

  ${responsive.smLte} {
    padding: 0 20px;
  }
`

export default Container