import { useRef } from 'react'
import styled from '@emotion/styled'

import Container from './common/Container'
import Content from './common/Content'
import SectionHeader from './common/SectionHeader'
import NameCard from './contact/NameCard'
import ContactInfo from './contact/ContactInfo'
import NeueDisplay from './typography/NeueDisplay'
import SlideIn from './animation/SlideIn'

import useOnScreen from '../hooks/useOnScreen'

import { responsive } from '../styles/responsive'
import { colors } from '../styles/colors'

import contactJson from '../public/data/contact.json'

export default function Contact() {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const isIntersecting = useOnScreen(headingRef)

  return (
    <ContactInfoContainer>
      <Heading>
        <NeueDisplay>
          <SlideIn duration={1.8} isIntersecting={isIntersecting}>
            <SectionHeader title="contact" ref={headingRef} />
          </SlideIn>
        </NeueDisplay>
      </Heading>
      <Content>
        <NameCardWrapper>
          <NameCard name="정한솔" strength="브랜드 아이덴티티" position="그래픽 디자이너" />
          <NameCard name="HANSOL CHUNG" strength="Brand Identity" position="Graphic Designer" />
        </NameCardWrapper>
        <ContactInfoWrapper>
          {
            contactJson.map(({ title, link, value }) => (
              <ContactInfo key={title} title={title} link={link} value={value} />
            ))
          }
        </ContactInfoWrapper>
      </Content>
    </ContactInfoContainer>
  )
}

const ContactInfoContainer = styled(Container)`
  background-color: ${colors.black};
  margin-top: 400px;
  padding-bottom: 90px;

  ${responsive.mdLte} {
    padding-bottom: 50px;
  }

  ${responsive.smLte} {
    margin-top: 200px;
  }
`

const Heading = styled.div`
  padding-top: 130px;

  ${responsive.mdLte} {
    font-size: 14px;
    line-height: 12px;
  }
`

const NameCardWrapper = styled.div`
  display: flex;
  padding-top: 100px;

  ${responsive.mdLte} {
    padding-top: 70px;
  }

  ${responsive.smLte} {
    justify-content: space-between;
    padding-top: 40px;
  }
`

const ContactInfoWrapper = styled.div`
  display: flex;
  padding-top: 150px;

  ${responsive.lgLte} {
    padding-top: 100px;
  }

  ${responsive.mdLte} {
    flex-direction: column;
    padding-top: 60px;
  }

  ${responsive.smLte} {
    padding-top: 30px;
  }
`
