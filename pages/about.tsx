import styled from '@emotion/styled'
import { Box, Heading, VisuallyHidden } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import DeviceContextProvider from '../contexts/DeviceProvider'

import Meta from '../components/Meta'
import ContentBox from '../components/ContentBox'
import Marquee from '../components/Marquee'
import Footer from '../components/pageLayout/Footer'

import Experience from '../components/about/Experience'

import type { GetServerSideProps } from 'next'

export default function AboutPage() {
  const { t } = useTranslation('about')

  return (
    <>
      <Meta title="About | SOLASIDO" description="Better Design, Better Life." />
      <Box as="main" height="100%" backgroundColor="black" minWidth="320px">
        <StyledContentBox as="section" backgroundColor="black" color="white">
          <VisuallyHidden>
            <Heading as="h1">HANSOL CHUNG</Heading>
          </VisuallyHidden>
          <StyledNameBox>{`HANSOL CHUNG\nBrand + Visual Designer`}</StyledNameBox>
          <StyledDescription>{t('description')}</StyledDescription>
        </StyledContentBox>
        <StyledMarqueeBox>
          <Marquee speed={400}>
            <StyledMotionDiv>BRAND DESIGNER + VISUAL DESIGNER +&nbsp;</StyledMotionDiv>
          </Marquee>
          <Divider />
          <Marquee speed={300} direction="right">
            <StyledMotionDiv>SEOUL BASED DESIGNER&nbsp;</StyledMotionDiv>
          </Marquee>
          <Divider />
          <Marquee speed={400}>
            <StyledMotionDiv>FOCUS ON - BASIC - CLEARNESS - IDENTITY - &nbsp;</StyledMotionDiv>
          </Marquee>
        </StyledMarqueeBox>
        <DeviceContextProvider>
          <Experience />
        </DeviceContextProvider>
        <Footer color="white" backgroundColor="black" />
      </Box>
    </>
  )
}

const StyledMotionDiv = styled(Box)`
  display: inline-block;
  font-family: Gordita Bold;
  font-size: 70px;
  background: #000;
  color: #000;
  white-space: nowrap;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
  margin: 20px 0;

  @media (min-width: 768px) {
    font-size: 100px;
  }

  @media (min-width: 1920px) {
    font-size: 120px;
  }
`

const StyledContentBox = styled(ContentBox)`
  padding-top: 76px;

  @media (min-width: 768px) {
    padding-top: 90px;
  }

  @media (min-width: 1920px) {
    padding-top: 128px;
  }
`

const StyledNameBox = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
  white-space: pre-wrap;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    font-size: 26px;
  }

  @media (min-width: 1920px) {
    font-size: 40px;
  }
`

const Divider = styled.hr`
  color: #fff;
  height: 2px;
`

const StyledDescription = styled(Box)`
  font-family: SUIT Bold;
  font-size: 18px;
  line-height: 26px;
  white-space: pre-wrap;
  word-break: keep-all;
  margin-bottom: 150px;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 34px;
    margin-bottom: 204px;
  }

  @media (min-width: 1920px) {
    font-size: 28px;
    line-height: 44px;
    margin-bottom: 180px;
  }
`

const StyledMarqueeBox = styled(Box)`
  background: #000;
  padding-bottom: 64px;

  @media (min-width: 768px) {
    padding-bottom: 120px;
  }

  @media (min-width: 1920px) {
    padding-bottom: 0;
  }
`

export const getStaticProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!)),
    },
  }
}
