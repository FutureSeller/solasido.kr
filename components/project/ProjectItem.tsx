import styled from '@emotion/styled'

import { responsive } from '../../styles/responsive'
import { colors } from '../../styles/colors'
import { notoSansKRBold, notoSansKR } from '../../styles/typography'

interface Props {
  title: string
  itemValue: string
}

// TODO: 해당 컴포넌트의 이름을 좀 더 적절한 것으로 바꿔야한다.
export default function ProjectItem({ title, itemValue }: Props) {
  if (itemValue.length < 1) {
    return null
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{itemValue}</Content>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  ${notoSansKR}
  font-size: 18px;
  font-weight: 400;
  padding-top: 28px;

  ${responsive.smLte} {
    font-size: 12px;
    padding-top: 20px;
  }
`

const Title = styled.h3`
  ${notoSansKRBold}
  display: inline-block;
  border-bottom: 2px solid ${colors.black};

  ${responsive.smLte} {
    border-bottom: 1px solid ${colors.black};
  }
`

const Content = styled.div`
  padding-top: 10px;

  ${responsive.smLte} {
    padding-top: 6px;
  }
`
