import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from 'next/link'
import { Flex, Box } from '@chakra-ui/react'

import IcRightArrow from '../../public/assets/right-arrow.svg'

import { breakpoints } from '../../styles/responsive'

const StyledIcRightArrow = styled(IcRightArrow, { shouldForwardProp: props => props !== 'isRight' })<{
  isRight?: boolean
}>`
  width: 30px;
  color: #fff;
  ${({ isRight }) =>
    isRight
      ? css`
          margin-left: 16px;
        `
      : css`
          margin-right: 16px;
        `}

  @media (min-width: ${breakpoints['tablet']}) {
    width: 4vw;

    ${({ isRight }) =>
      isRight
        ? css`
            margin-left: 3vw;
          `
        : css`
            margin-right: 3vw;
          `}
  }
`

const StyledBox = styled(Flex)`
  padding: 30px 16px;

  @media (min-width: ${breakpoints['tablet']}) {
    padding: 95px 24px;
  }
`

const VerticalLine = styled.div`
  border-right: 1px solid white;
`

const PrevBox = styled(Box)`
  vertical-align: middle;
`

const NextBox = styled(Box)`
  vertical-align: middle;
`

const Label = styled(Box)`
  margin-bottom: 8px;
  font-size: 14px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 18px;
  }
`

const Value = styled(Box)`
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 3vw;
  }
`

interface BottomPageNavigateItemProps {
  title: string
  slug: string
}

interface Props {
  prev?: BottomPageNavigateItemProps | null
  next?: BottomPageNavigateItemProps | null
}

export default function BottomPageNavigator({ prev, next }: Props) {
  return (
    <Flex justifyContent="space-between" backgroundColor="#000" color="#fff" minWidth="320px">
      <StyledBox width="calc(50% - 1px)">
        {prev && (
          <>
            <Link href={`/project/${prev.slug}`} passHref prefetch={false}>
              <a aria-label={`${prev.title} 페이지로 이동`} rel="prev">
                <StyledIcRightArrow style={{ transform: 'rotate(180deg)' }} aria-hidden />
              </a>
            </Link>
            <PrevBox>
              <Label>PREVIOUS PROJECT</Label>
              <Value>{prev.title}</Value>
            </PrevBox>
          </>
        )}
      </StyledBox>
      <VerticalLine />
      <StyledBox width="calc(50% - 1px)" justifyContent="flex-end">
        {next && (
          <>
            <NextBox textAlign="right">
              <Label>NEXT PROJECT</Label>
              <Value>{next.title}</Value>
            </NextBox>
            <Box>
              <Link href={`/project/${next.slug}`} passHref prefetch={false}>
                <a aria-label={`${next.title} 페이지로 이동`} rel="next">
                  <StyledIcRightArrow isRight aria-hidden />
                </a>
              </Link>
            </Box>
          </>
        )}
      </StyledBox>
    </Flex>
  )
}
