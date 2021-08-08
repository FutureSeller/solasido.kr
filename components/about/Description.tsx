import styled from '@emotion/styled'

import { responsive } from '../../styles/responsive'

export default function Description() {
  return (
    <Box>
      <Text>
        디자인이란 사람들에게 이야기하고자 하는 바를 시각적으로 어떻게 전달하는 것이 효율적인가를 따지는 실속 문학이라고
        합니다.
      </Text>
      <Text>
        그리고 브랜드 디자인은 브랜드의 철학과 가치를 녹여낸 시각적인 작업물, 나아가 브랜드와 소비자 사이에서 일어나는
        모든 커뮤니케이션입니다.
      </Text>
      <Text>현상을 이해하여 브랜드의 가치를 시각화하고, 브랜드 디자인을 통해 가치 있는 실속 문학을 하고자 합니다.</Text>
    </Box>
  )
}

const Box = styled.div`
  width: 60%;
  padding-bottom: 9vw;

  ${responsive.lgLte} {
    width: 100%;
  }

  ${responsive.smLte} {
    padding-bottom: 60px;
  }

  & > :not(style) ~ :not(style) {
    margin-bottom: 48px;

    ${responsive.mdLte} {
      margin-bottom: 24px;
    }

    ${responsive.smLte} {
      margin-bottom: 18px;
    }
  }
`

const Text = styled.p`
  font-weight: 700;
  font-size: 2vw;
  line-height: 1.375;
  word-break: keep-all;

  ${responsive.lgLte} {
    font-size: 3vw;
  }

  ${responsive.mdLte} {
    font-size: 3.5vw;
  }

  ${responsive.smLte} {
    font-size: 5.5vw;
  }
`
