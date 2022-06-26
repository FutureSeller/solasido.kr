import styled from '@emotion/styled'
import { Box, Flex, Heading, Text, VisuallyHidden } from '@chakra-ui/react'

import { titleFontStyle, BOTTOM_POSITON, STICKY_GUTTER } from '../titleStyle'

import { breakpoints } from '../../../styles/responsive'

import type { ReactNode } from 'react'
import type { BoxProps } from '@chakra-ui/react'

const StyledFlex = styled(Flex)`
  flex-direction: column;

  @media (min-width: ${breakpoints['desktop']}) {
    flex-direction: row;
  }
`

const StyledBox = styled(Box)`
  padding: ${STICKY_GUTTER['mobile']}px 24px;

  @media (min-width: ${breakpoints['tablet']}) {
    padding: ${STICKY_GUTTER['tablet']}px 10vw;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    padding: ${STICKY_GUTTER['desktop']}px 10vw;
  }
`

const CategoryTitle = styled(Text)`
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fonts.suitRegular};
  font-weight: 400;
  font-size: 14px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 20px;
  }
`

const DescriptionBox = styled(Box)`
  width: 100%;
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  word-break: keep-all;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    width: 50%;
  }
`

const ColumnBox = styled(Flex)`
  font-weight: 700;
  font-size: 14px;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    justify-content: flex-end;
    width: 50%;
  }
`

const GhostBox = styled(Box)`
  ${titleFontStyle};

  margin-bottom: ${BOTTOM_POSITON}px;
  opacity: 0;
`

const StyledUl = styled.ul`
  & > :not(style) ~ :not(style) {
    margin-top: 4px;
  }
`

const MetaBox = styled(Box)`
  & > :not(style) ~ :not(style) {
    margin-top: 20px;
  }
`

interface Props extends BoxProps {
  title: string
  descriptions: string[]
  scopes: string[]
  metaItems: ReactNode
}

export default function NewExplainSection({ descriptions, title, scopes, metaItems, ...rest }: Props) {
  return (
    <StyledBox position="relative" {...rest}>
      <GhostBox>{title}</GhostBox>
      <VisuallyHidden>
        <Heading as="h2">{title}</Heading>
      </VisuallyHidden>
      <StyledFlex>
        <DescriptionBox>
          {descriptions.map((description, index) => (
            <Text
              as="p"
              key={`Description-${index.toString()}`}
              marginBottom="20px"
              fontWeight="700"
              whiteSpace="pre-line"
            >
              {description}
            </Text>
          ))}
        </DescriptionBox>
        <ColumnBox>
          <Box width="50%">
            <Heading as="h3">
              <CategoryTitle>SCOPE</CategoryTitle>
            </Heading>
            <StyledUl>
              {scopes.map(scope => (
                <li key={scope}>{scope}</li>
              ))}
            </StyledUl>
          </Box>
          <MetaBox>{metaItems}</MetaBox>
        </ColumnBox>
      </StyledFlex>
    </StyledBox>
  )
}
