import styled from '@emotion/styled'
import { Box, Flex } from '@chakra-ui/react'

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
          <Stack>
            <StyledNameBox>HANSOL CHUNG</StyledNameBox>
            <StyledNameBox>Brand + Visual Designer</StyledNameBox>
          </Stack>
          <StyledDescription>
            {`디자인이란 사람들에게 이야기하고자 하는 바를 시각적으로 어떻게 전달하는 것이\n효율적인가를 따지는 실속 문학이라고 합니다.\n브랜드의 가치를 시각화하고 브랜드와 소비자, 온라인과 오프라인을 연결하여\n가치있는 실속 문학을 하고자합니다.`}
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

const Stack = styled(Flex)`
  margin-bottom: 60px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const StyledNameBox = styled.div`
  font-weight: 700;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 26px;

    &:first-of-type {
      margin-right: 40px;
    }
  }

  @media (min-width: 1920px) {
    font-size: 40px;

    &:first-of-type {
      margin-right: 50px;
    }
  }
`

const Divider = styled.hr`
  color: #fff;
  height: 2px;
`

const StyledDescription = styled(Box)`
  font-size: 22px;
  line-height: 34px;
  white-space: pre-wrap;
  margin-bottom: 20px;
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
