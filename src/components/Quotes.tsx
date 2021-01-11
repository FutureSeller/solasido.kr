/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'

import { bp } from '../styles/responsive'

const QuotesFragment = styled.div`
  ${bp.mq[bp.BreakPoint.DESKTOP]} {
    display: flex;
    flex-direction: column;
    float: right;
  }

  ${bp.mq[bp.BreakPoint.LAPTOP]} {
    float: none;
  }
`

const QuoteEnglish = styled.p`
  font-family: 'Source Sans Pro';
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.2rem;
  word-wrap: break-word;
  width: 100%;

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`

const QuoteKorean = styled.p`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 1.8rem;
  margin-top: 0.8rem;
  line-height: 2.6rem;
  width: 100%;

  ${bp.mq[bp.BreakPoint.TABLET]} {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  ${bp.mq[bp.BreakPoint.MOBILE]} {
    font-size: 1.2rem;
    line-height: 1.7rem;
    margin-top: 0.2rem;
  }
`

const ClearFixWrapper = styled.div`
  &:after {
    clear: both;
    content: '';
    display: block;
  }
`
  
export default function Quotes() {
  return (
    <ClearFixWrapper>
      <QuotesFragment>
        <QuoteEnglish>If you can’t explain it simply, you don’t understand it well enough.</QuoteEnglish>
        <QuoteKorean>단순하게 설명할 수 없다면, 충분히 잘 이해하지 못하고 있다는 것이다.</QuoteKorean>
      </QuotesFragment>
    </ClearFixWrapper>
  )
}