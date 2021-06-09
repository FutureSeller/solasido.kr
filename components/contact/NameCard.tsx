import styled from '@emotion/styled'

import { responsive } from '../../styles/responsive'
import { colors } from '../../styles/colors'
import { notoSansKRBold } from '../../styles/typography'

interface Props {
  name: string
  strength: string
  position: string
}

export default function NameCard({ name, strength, position }: Props) {
  return (
    <Container>
      <ContentFont>
        <Name>{name}</Name>
        <div style={{ paddingTop: 34 }}>
          {strength}{','}
        </div>
        <br />
        <div>{position}</div>
      </ContentFont>
    </Container>
  )
}

const Container = styled.div`
  width: 185px;
  padding-right: 148px;

  ${responsive.xlLte} {
    padding-right: 100px;
  }

  ${responsive.lgLte} {
    padding-right: 88px;
  }

  ${responsive.mdLte} {
    padding-right: 44px;
  }

  ${responsive.smLte} {
    padding-right: 0;
  }
}
`

const ContentFont = styled.div`
  ${notoSansKRBold}
  line-height: 0.83;
  font-size: 24px;
  color: ${colors.white}

  ${responsive.mdLte} {
    font-size: 20px;
  }

  ${responsive.smLte} {
    font-size: 14px;
  }
`

const Name = styled.div`
  display: inline-block;
  padding-bottom: 4px;
  border-bottom: 3px solid ${colors.white};

  ${responsive.mdLte} {
    font-size: 20px;
    border-bottom: 2.5px solid ${colors.white};
  }

  ${responsive.smLte} {
    font-size: 14px;
    border-bottom: 1.5px solid ${colors.white};
  }
`
