import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Box, Flex, Heading, VisuallyHidden, Fade } from '@chakra-ui/react'
import fs from 'fs'

import Meta from '../components/Meta'
import Footer from '../components/pageLayout/Footer'

import type { InferGetStaticPropsType } from 'next'

export default function IndexPage({ imageUrls }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [page, setPage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPage(page => (page + 1) % imageUrls.length)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Meta title="Home | SOLASIDO" description="SOLASIDO's Portfolio" />
      <Box as="main" display="flex" flexDirection="column" width="100%" height="100%" backgroundColor="black">
        <VisuallyHidden>
          <Heading as="h1">Solasido&apos;s Portfolio</Heading>
        </VisuallyHidden>
        <Box position="relative" flex="1">
          <StyledSlogan>{`Better Design,\nBetter Life.`}</StyledSlogan>
          {imageUrls.map((imgUrl, index) => (
            <Fade key={imgUrl} in={index === page}>
              <Box
                position="absolute"
                top="0"
                width="100%"
                height="100%"
                background={`url(${imgUrl}) no-repeat center`}
                backgroundSize="cover"
                transition=""
                _after={{
                  display: 'block',
                  content: '""',
                  background: 'rgba(0,0,0,0.7)',
                  zIndex: 1,
                  height: '100%',
                  width: '100%',
                }}
              />
            </Fade>
          ))}
        </Box>
      </Box>
      <Box>
        <StyledFlex
          position="relative"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          backgroundColor="black"
          color="white"
        >
          <ProjectCountBox>
            All Projects<sup>{imageUrls.length}</sup>
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
    </>
  )
}

const StyledFlex = styled(Flex)`
  padding: 20px 24px;

  @media (min-width: 768px) {
    padding: 24px 55px;
  }
`

const StyledSlogan = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: white;
  z-index: 2;
  text-align: center;
  font-family: Gordita Bold;
  font-size: 32px;
  line-height: 1.37;
  white-space: pre-wrap;

  @media (min-width: 768px) {
    font-size: 54px;
  }

  @media (min-width: 1920px) {
    font-size: 70px;
  }
`

const ProjectCountBox = styled(Box)`
  margin: 0;
  font-size: 24px;
  cursor: not-allowed;

  @media (min-width: 1920px) {
    font-size: 48px;
  }
`
const Img = styled(motion.img)`
  width: 65px;
  height: 40px;
`

export const getStaticProps = async () => {
  const baseDir = '/images/main'
  const mainImageUrls = fs.readdirSync(`./public${baseDir}`)

  mainImageUrls.sort((prev, cur) => {
    const prevIndex = parseInt(prev.split('_')[0], 10)
    const curIndex = parseInt(cur.split('_')[0], 10)

    if (prevIndex - curIndex > 0) {
      return -1
    }
    if (prevIndex - curIndex < 0) {
      return 1
    }
    return 0
  })

  return {
    props: {
      imageUrls: mainImageUrls.map(imageUrl => `${baseDir}/${imageUrl}`),
    },
  }
}
