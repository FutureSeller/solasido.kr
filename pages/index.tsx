import styled from '@emotion/styled'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Box, Flex, Heading, VisuallyHidden } from '@chakra-ui/react'

import Meta from '../components/Meta'
import NavBar from '../components/NavBar'
import Slogan from '../components/home/Slogan'
import Cover from '../components/home/Cover'
import Footer from '../components/Footer'

import { responsive } from '../styles/responsive'
import { initializeApollo } from '../apollo/client'
import { IndexPage_MainThumbnailDocument } from '../__generated__/graphql'
import type { IndexPage_MainThumbnailQuery } from '../__generated__/graphql'
import type { InferGetStaticPropsType } from 'next'

export default function Home({ covers }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Box as="main" height="100vh" width="100%" backgroundColor="black">
      <Meta title="Home | SOLASIDO" description="SOLASIDO's Portfolio" />
      <VisuallyHidden>
        <Heading as="h1">Solasido&apos;s Portfolio</Heading>
      </VisuallyHidden>
      <NavBar color="white" backgroundColor="black" alwaysVisible />
      <Slogan />
      {covers?.map(cover => (
        <Cover
          key={cover?.slug}
          title={cover?.title!}
          summary={cover?.summary!}
          src={cover?.thumbnail?.source?.url!}
          alt={cover?.thumbnail?.alt!}
          placeholder={cover?.thumbnail?.placeholder!}
        />
      ))}
      <StyledFlex
        as="footer"
        position="relative"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        backgroundColor="black"
        color="white"
      >
        <ProjectCountBox>
          All Projects<sup>15</sup>
        </ProjectCountBox>
        <Link href="/project" passHref>
          <a aria-label="Projects 페이지로 이동">
            <Img
              src="/assets/right-arrow.svg"
              whileHover={{
                x: 10,
                transition: { duration: 0.1 },
              }}
              alt="Projects 페이지로 이동"
            />
          </a>
        </Link>
      </StyledFlex>
      <Footer />
    </Box>
  )
}

const StyledFlex = styled(Flex)`
  padding: 40px 55px;

  ${responsive.mdLte} {
    padding: 30px 24px;
  }

  ${responsive.smLte} {
    padding: 20px 24px;
  }
`

const ProjectCountBox = styled(motion(Box))`
  margin: 0;
  font-size: 2.5vw;
  cursor: not-allowed;

  ${responsive.xlLte} {
    font-size: 3vw;
  }

  ${responsive.lgLte} {
    font-size: 3.5vw;
  }

  ${responsive.mdLte} {
    font-size: 4vw;
  }

  ${responsive.smLte} {
    font-size: 5vw;
  }
`
const Img = styled(motion.img)`
  width: 5vw;

  ${responsive.mdLte} {
    width: 6vw;
  }

  ${responsive.smLte} {
    width: 7vw;
  }
`

export const getStaticProps = async () => {
  const apolloClient = initializeApollo({})

  const { data } = await apolloClient.query<IndexPage_MainThumbnailQuery>({
    query: IndexPage_MainThumbnailDocument,
  })

  return {
    props: {
      covers: data.mainThumbnail?.projectThumbnail,
    },
  }
}
