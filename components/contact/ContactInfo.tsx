import Link from 'next/link'
import styled from '@emotion/styled'

import { responsive } from '../../styles/responsive'
import { colors } from '../../styles/colors'
import { neueDisplay12, neueDisplay18, notoSansKR } from '../../styles/typography'

interface Props {
  title: string
  link: string
  value: string
}

export default function ContactInfo({ title, link, value }: Props) {
  return (
    <Container>
      <TitleFont>
        <Title>{title}</Title>
      </TitleFont>
      <ContentFont>
        <LinkWrapper>
          <Link href={link} passHref>
            <a>{value}</a>
          </Link>
        </LinkWrapper>
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

const TitleFont = styled.div`
  ${neueDisplay18}

  ${responsive.mdLte} {
    ${neueDisplay12}
  }
`

const Title = styled.div`
  color: ${colors.red};

  ${responsive.mdLte} {
    padding-top: 40px;
  }
`

const ContentFont = styled.div`
  ${notoSansKR}

  ${responsive.mdLte} {
    font-size: 14px;
  }
`

const LinkWrapper = styled.div`
  padding-top: 16px;

  ${responsive.mdLte} {
    padding-top: 12px;
  }
`