import styled from '@emotion/styled'
import { Box, Heading, VisuallyHidden } from '@chakra-ui/react'

import DeviceContextProvider from '../contexts/DeviceProvider'

import Meta from '../components/Meta'
import ContentBox from '../components/ContentBox'
import Marquee from '../components/Marquee'
import NavBar from '../components/home/NavBar'
import Footer from '../components/home/Footer'

import Experience from '../components/about/Experience'

import { initializeApollo } from '../apollo/client'
import {
  AboutPage_AwardsDocument,
  AboutPage_CareersDocument,
  AboutPage_OutsourcingsDocument,
} from '../__generated__/graphql'
import type {
  AboutPage_AwardsQuery,
  AboutPage_CareersQuery,
  AboutPage_OutsourcingsQuery,
} from '../__generated__/graphql'

export default function AboutPage() {
  return (
    <>
      <Meta title="About | SOLASIDO" description="Better Design, Better Life." />
      <Box as="main" height="100%" backgroundColor="black" minWidth="320px">
        <NavBar />
        <StyledContentBox as="section" backgroundColor="black" color="white">
          <VisuallyHidden>
            <Heading as="h1">HANSOL CHUNG</Heading>
          </VisuallyHidden>
          <StyledNameBox>{`HANSOL CHUNG\nBrand + Visual Designer`}</StyledNameBox>
          <StyledDescription>
            {`브랜드의 가치를 시각화하고 브랜드와 소비자,\n온라인과 오프라인을 연결하여\n명확하고, 매력적이며, 유쾌하고, 직관적인\n브랜드와 경험을 디자인합니다.`}
          </StyledDescription>
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

export const getStaticProps = async () => {
  const apolloClient = initializeApollo({})

  await apolloClient.query<AboutPage_AwardsQuery>({
    query: AboutPage_AwardsDocument,
  })

  await apolloClient.query<AboutPage_CareersQuery>({
    query: AboutPage_CareersDocument,
  })

  await apolloClient.query<AboutPage_OutsourcingsQuery>({
    query: AboutPage_OutsourcingsDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
