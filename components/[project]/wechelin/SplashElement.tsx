import { useRef } from 'react'
import { Box } from '@chakra-ui/react'

import useLottieAnimation from '../../../hooks/useLottieAnimation'
import styled from '@emotion/styled'

const StyledPhoneArea = styled(Box)`
  & > svg {
    margin-left: -20px;
  }
`

interface Props {
  url: string
  bottom: string
}

export function SplashElement({ url, bottom }: Props) {
  const divRef = useRef<HTMLDivElement>(null)

  useLottieAnimation({
    element: divRef,
    path: '/projects/wechelin/splash.json',
  })

  return (
    <Box position="relative" width="300px" height="100%" top="0" left="30px">
      <StyledPhoneArea
        position="absolute"
        ref={divRef}
        width="300px"
        height="580px"
        bottom={bottom}
        background={`url(${url}) no-repeat center`}
        backgroundSize="contain"
      />
    </Box>
  )
}
