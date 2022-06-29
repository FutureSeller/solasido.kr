import styled from '@emotion/styled'
import { AspectRatio, Box } from '@chakra-ui/react'
import { SectionBox } from '../CommonLayout'

import { breakpoints } from '../../../styles/responsive'

const StyledLogoBox = styled(AspectRatio)`
  max-width: 1280px;
  margin: 0 auto 70px;

  @media (min-width: ${breakpoints['tablet']}) {
    margin-bottom: 120px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    margin-bottom: 200px;
  }
`

const StyledLogoGridBox = styled(AspectRatio)`
  max-width: 768px;
  margin: 0 auto;

  @media (min-width: ${breakpoints['desktop']}) {
    margin-left: 50%;
  }
`

export default function LogoImageSection() {
  return (
    <SectionBox>
      <StyledLogoBox ratio={4 / 1}>
        <Box
          background={'url(/projects/national-patriots-and-veterans/logo.png) no-repeat center'}
          backgroundSize="contain"
        />
      </StyledLogoBox>
      <StyledLogoGridBox ratio={3 / 1}>
        <Box
          background={'url(/projects/national-patriots-and-veterans/logos.png) no-repeat center'}
          backgroundSize="contain"
        />
      </StyledLogoGridBox>
    </SectionBox>
  )
}
