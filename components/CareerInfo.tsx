import styled from '@emotion/styled'

import { colors } from '../styles/colors'
import { responsive } from '../styles/responsive'
import { notoSansKR } from '../styles/typography'

import type { Career } from '../types/model'

interface Props {
  career: Career
}

export default function CareerInfo({ career }: Props) {
  const { title, items } = career

  return (
    <ContentFont>
      <Title>{title}</Title>
      {items.map(({ date, subTitle, description}, idx) => (
        <ListWrapper key={`${title}-${idx}`}>
          <li>{date}</li>
          <li>{subTitle}</li>
          <li>
            {description.map((text, idx) => (
              <div key={`${title}-description-${idx}`}>{text}</div>
            ))}
          </li>
        </ListWrapper>
      ))}
    </ContentFont>
  )
}

const ContentFont = styled.div`
  ${notoSansKR}
  font-size: 16px;
  line-height: 1.5;

  ${responsive.mdLte} {
    font-size: 14px;
  }

  ${responsive.smLte} {
    font-size: 12px;
  }
`

const Title = styled.h3`
  display: inline-block;
  border-bottom: 2px solid ${colors.black};
  font-weight: 700;

  ${responsive.smLte} {
    border-bottom: 1.5px solid ${colors.black};
  }
`

const ListWrapper = styled.ul`
  padding-top: 24px;

  ${responsive.mdLte} {
    padding-top: 20px;
  }

  ${responsive.smLte} {
    padding-top: 18px;
  }

  &:nth-of-type(1) {
    padding-top: 16px;

    ${responsive.mdLte} {
      padding-top: 14px;
    }

    ${responsive.smLte} {
      padding-top: 12.5px;
    }
  }
`