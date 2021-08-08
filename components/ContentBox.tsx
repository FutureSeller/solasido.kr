import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

import { responsive } from '../styles/responsive'

const ContentBox = styled(Box)`
  padding: 0 55px;

  ${responsive.mdLte} {
    padding: 0 24px;
  }
`

export default ContentBox
