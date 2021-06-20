import { css } from '@emotion/react'

const neueDisplay = css`
  font-family: 'Neue Display';
  font-style: normal;
  font-weight: 900;
  line-height: 1.25;
`

const neueDisplay100 = css`
  ${neueDisplay}
  font-size: 100px;
`

const neueDisplay80 = css`
  ${neueDisplay}
  font-size: 80px;
`

const neueDisplay60 = css`
  ${neueDisplay}
  font-size: 60px;
`

const neueDisplay38 = css`
  ${neueDisplay}
  font-size: 38px;
`

const neueDisplay28 = css`
  ${neueDisplay}
  font-size: 28px;
`

const neueDisplay18 = css`
  ${neueDisplay}
  font-size: 18px;
`

const neueDisplay14 = css`
  ${neueDisplay}
  font-size: 18px;
`

const neueDisplay12 = css`
  ${neueDisplay}
  font-size: 12px;
`

const neueBold = css`
  font-family: 'Neue Bold';
  font-style: normal;
  font-weight: 700;
`

const neueBold30 = css`
  ${neueBold}
  font-size: 30px;
    line-height: 1;
`

const neueBold20 = css`
  ${neueBold}
  font-size: 20px;
`

const neueBold14 = css`
  ${neueBold}
  font-size: 14px;
`

const neue = css`
  font-family: 'Neue Black';
  font-weight: 900;
  font-style: normal;
  line-height: 1.3;
`

const notoSansKR = css`
  font-family: 'Noto Sans KR';
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.05em;
`

const notoSansKRBold = css`
  ${notoSansKR}
  font-weight: 700;
`

export {
  neueDisplay100,
  neueDisplay80,
  neueDisplay60,
  neueDisplay38,
  neueDisplay28,
  neueDisplay18,
  neueDisplay14,
  neueDisplay12,
  neueBold30,
  neueBold20,
  neueBold14,
  neue,
  notoSansKR,
  notoSansKRBold,
}
