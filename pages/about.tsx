import styled from '@emotion/styled'
import { Box as ChakraBox, Flex } from '@chakra-ui/react'

import DeviceContextProvider from '../contexts/DeviceProvider'

import Meta from '../components/Meta'
import NavBar from '../components/NavBar'
import ContentBox from '../components/ContentBox'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'

import Description from '../components/about/Description'
import Experience from '../components/about/Experience'

import { responsive } from '../styles/responsive'
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
    <ChakraBox as="main" height="100%">
      <Meta title="About | SOLASIDO" description="Better Design, Better Life." />
      <NavBar color="white" backgroundColor="black" alwaysVisible />
      <ContentBox as="section" backgroundColor="black" color="white">
        <PageTitle>About</PageTitle>
        <Stack>
          <Box>HANSOL CHUNG</Box>
          <Box>Brand + Visual Designer</Box>
        </Stack>
        <Description />
      </ContentBox>
      <DeviceContextProvider>
        <Experience />
      </DeviceContextProvider>
      <Footer color="white" backgroundColor="black" />
    </ChakraBox>
  )
}

const Stack = styled(Flex)`
  margin-bottom: 6vw;

  ${responsive.mdLte} {
    flex-direction: column;
    margin-bottom: 60px;
  }

  & > :not(style) ~ :not(style) {
    margin-inline-start: 100px;

    ${responsive.mdLte} {
      margin: 0;
      margin-top: 16px;
    }
  }
`

const Box = styled.div`
  font-weight: 700;
  font-size: 2vw;

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
