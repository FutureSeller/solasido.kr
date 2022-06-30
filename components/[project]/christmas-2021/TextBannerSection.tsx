import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { breakpoints } from '../../../styles/responsive'
import { SectionBox } from '../CommonLayout'

const StyledBanner = styled(Box)`
  background: url(/projects/christmas-2021/text_banner_small.jpg) no-repeat center;
  height: 150px;
  background-size: contain;

  @media (min-width: ${breakpoints['tablet']}) {
    height: 100px;
    background: url(/projects/christmas-2021/text_banner_large.jpg) no-repeat center;
    background-size: contain;
  }
`

export default function TextBannerSection() {
  return (
    <SectionBox>
      <StyledBanner />
    </SectionBox>
  )
}
