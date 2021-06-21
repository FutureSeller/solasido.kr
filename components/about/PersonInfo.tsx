import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { colors } from '../../styles/colors'
import { responsive } from '../../styles/responsive'
import { notoSansKR, notoSansKRBold } from '../../styles/typography'

import type { Person } from '../../types/model'

interface Props {
  person: Person
}

export default function PersonInfo({ person }: Props) {
  const { lang, name, position, ma, ba, objectives } = person

  return (
    <ContentFont>
      <PersonInfoItems lang={lang}>
        <Name>
          <TitleFont>{name}</TitleFont>
        </Name>
        <Position>
          {position.map((positionItem, idx) => (
            <TitleFont key={`${lang}-position-${idx}`}>{positionItem}</TitleFont>
          ))}
        </Position>
        <School lang={lang}>
          {ma.school?.map((schoolItem, idx) => (
            <div key={`${lang}-school-ma-${idx}`}>{schoolItem}</div>
          ))}
          <div>{ma.major}</div>
          <div>{`${ma.startDate} - ${ma.endDate}`}</div>
        </School>
        <School lang={lang}>
          {ba.school?.map((schoolItem, idx) => (
            <div key={`${lang}-school-ba-${idx}`}>{schoolItem}</div>
          ))}
          <div>{ba.major}</div>
          <div>{`${ba.startDate} - ${ba.endDate}`}</div>
        </School>
        <Objective lang={lang}>
          {objectives.map((objectivesItem, idx) => (
            <div key={`${lang}-objectives-${idx}`}>{objectivesItem}</div>
          ))}
        </Objective>
      </PersonInfoItems>
    </ContentFont>
  )
}

const PersonInfoItems = styled.ul<{ lang: string }>`
  ${({ lang }) => lang === 'ko'
    ? css`
        padding-right: 115px;

        ${responsive.xlLte} {
          padding-right: 75px;
        }

        ${responsive.lgLte} {
          padding-right: 45px;
        }

        ${responsive.smLte} {
          width: 50%;
          padding-right: 10px;
        }
      `
    : null
  }
`

const TitleFont = styled.div`
  ${notoSansKRBold}
  font-size: 24px;
  line-height: 1.5;

  ${responsive.mdLte} {
    font-size: 20px;
  }

  ${responsive.smLte} {
    font-size: 14px;
  }
`

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

const Name = styled.li`
  display: inline-block;
  border-bottom: 3px solid ${colors.black};

  ${responsive.smLte} {
    border-bottom: 1.5px solid ${colors.black};
  }
`

const Position = styled.li`
  padding-top: 34px;

  ${responsive.mdLte} {
    padding-top: 30px;
  }

  ${responsive.smLte} {
    padding-top: 20px;
  }
`

const School = styled.li<{ lang: string }>`
  padding-top: ${({ lang }) => lang === 'ko' ? '54px' : '49px'};

  ${responsive.smLte} {
    display: none;
  }

  &:nth-of-type(2n) {
    padding-top: ${({ lang }) => lang === 'ko' ? '54px' : '34px'};;
  }
`

const Objective = styled.li<{ lang: string }>`
  padding-top: ${({ lang }) => lang === 'ko' ? '60px' : '35px'};

  ${responsive.smLte} {
    display: none;
  }
`