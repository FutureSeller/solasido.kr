import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

const ClipBox = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`

export default ClipBox
