import { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Box, Flex, Heading, VisuallyHidden } from '@chakra-ui/react'
import fs from 'fs'

import Meta from '../components/Meta'
import NavBar from '../components/home/NavBar'
import Footer from '../components/home/Footer'
import { responsive } from '../styles/responsive'

import type { InferGetStaticPropsType } from 'next'

export default function IndexPage({ imageUrls }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [page, setPage] = useState(0)

  const requestRef = useRef()
  const previousTimeRef = useRef()

  const animate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current
      setPage(prevCount => ((prevCount + deltaTime * 0.001) % 100) % imageUrls.length)
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(requestRef.current)
    }

    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Meta title="Home | SOLASIDO" description="SOLASIDO's Portfolio" />
      <NavBar />
      <Box as="main" display="flex" flexDirection="column" width="100%" height="100%" backgroundColor="black">
        <VisuallyHidden>
          <Heading as="h1">Solasido&apos;s Portfolio</Heading>
        </VisuallyHidden>
        <Box position="relative" flex="1">
          <StyledSlogan>{`Better Design,\nBetter Life.`}</StyledSlogan>
          <Box
            position="absolute"
            top="0"
            width="100%"
            height="100%"
            background={`url(${imageUrls[Math.round(page)]}) no-repeat center`}
            _after={{
              display: 'block',
              content: '""',
              background: 'rgba(0,0,0,0.7)',
              zIndex: 1,
              height: '100%',
              width: '100%',
            }}
          />
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
  padding: 40px 55px;

  ${responsive.mdLte} {
    padding: 30px 24px;
  }

  ${responsive.smLte} {
    padding: 20px 24px;
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
  font-size: 33px;
  cursor: not-allowed;

  @media (min-width: 1920px) {
    font-size: 48px;
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
