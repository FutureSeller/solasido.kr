import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import { HeadingText, DescriptionText } from './CommonLayout'
import { breakpoints } from '../../../styles/responsive'

const StyledBox = styled(Box)`
  display: none;

  @media (min-width: ${breakpoints['desktop']}) {
    display: block;
  }
`

interface Props {
  title: string
  description: string
}

export default function FeedSection({ title, description }: Props) {
  return (
    <StyledBox background="#E9E4DE">
      <Box marginLeft="50%">
        <HeadingText>{title}</HeadingText>
        <DescriptionText width="100% !important" whiteSpace="pre-line" margin="0 !important">
          {description}
        </DescriptionText>
      </Box>
      <Box background="#E9E4DE" padding="120px 0">
        <StyledBox
          background={`url(/projects/wechelin/feed.png) no-repeat center`}
          paddingTop="40%"
          backgroundSize="contain"
        />
      </Box>
    </StyledBox>
  )
}
