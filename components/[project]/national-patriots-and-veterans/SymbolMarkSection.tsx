import { useRef } from 'react'
import styled from '@emotion/styled'
import { AspectRatio, Box } from '@chakra-ui/react'

import useIntersection from '../../../hooks/useIntersection'
import { breakpoints } from '../../../styles/responsive'

const StyledSectionBox = styled(Box)`
  margin: 0 auto;
  width: 50%;
  min-width: 284px;
  max-width: 748px;
  padding-bottom: 80px;

  & > * {
    margin-bottom: 40px;

    @media (min-width: ${breakpoints['tablet']}) {
      margin-bottom: 60px;
    }
  }
`

const StyledBox = styled(Box, { shouldForwardProp: props => props !== 'isVisible' })<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: all 1s ease-out;
`

export default function SymbolMarkSection() {
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 1,
  })

  return (
    <StyledSectionBox>
      <AspectRatio ratio={748 / 110}>
        <StyledBox
          isVisible={!!intersection && intersection.intersectionRatio > 0}
          background={`url('/projects/national-patriots-and-veterans/symbol_red.png') no-repeat center`}
          backgroundSize="contain"
        />
      </AspectRatio>
      <AspectRatio ratio={748 / 677}>
        <Box
          ref={intersectionRef}
          background={`url('/projects/national-patriots-and-veterans/symbol_main.png') no-repeat center`}
          backgroundSize="contain"
        />
      </AspectRatio>
      <AspectRatio ratio={748 / 110}>
        <StyledBox
          isVisible={!!intersection && intersection.intersectionRatio > 0}
          background={`url('/projects/national-patriots-and-veterans/symbol_blue.png') no-repeat center`}
          backgroundSize="contain"
        />
      </AspectRatio>
    </StyledSectionBox>
  )
}
