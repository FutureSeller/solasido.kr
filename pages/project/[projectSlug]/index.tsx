import { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import Meta from '../../../components/Meta'
import Footer from '../../../components/pageLayout/Footer'

import BottomPageNavigator from '../../../components/[project]/BottomPageNavigator'
import CoverSection from '../../../components/[project]/CoverSection'
import ExplainSection from '../../../components/[project]/ExplainSection'

import { breakpoints } from '../../../styles/responsive'
import type {
  ProjectSlugPage_ProjectDetailQuery,
  ProjectSlugPage_ProjectLinkQuery,
} from '../../../__generated__/graphql'
import type { GetStaticProps, InferGetStaticPropsType, GetStaticPathsResult } from 'next'

import fs from 'fs'
import PROJECT_LIST_JSON from '../../../public/data/projects.json'

const EXCLUDE_PAGE_SLUGS = ['national-patriots-and-veterans', 'christmas-2021', 'there', 'wechelin']
const isVideoUrl = (url: string) => url.endsWith('.mp4')

interface ProjectDetailPageJSONType {
  project: ProjectSlugPage_ProjectDetailQuery['project']
  next: ProjectSlugPage_ProjectLinkQuery['next']
  prev: ProjectSlugPage_ProjectLinkQuery['prev']
}

export default function ProjectSlugPage({ project, next, prev }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [nextProject] = next ?? []
  const [prevProject] = prev ?? []
  const [projectDetail] = project?.projectDetails ?? []

  // TODO: Video 관련 로직을 따로 분리해야한다.
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return
    }

    const handleMove = () => {
      if (video.currentTime >= video.duration - 0.5) {
        video.currentTime = 0.0
      }
    }
    video.addEventListener('timeupdate', handleMove)

    return () => {
      video.removeEventListener('timeupdate', handleMove)
    }
  }, [])

  return (
    <>
      <Meta
        title={project?.title ?? 'SOLASIDO'}
        description={project?.summary ?? 'Project Details'}
        imageUrl={project?.mainCoverImage?.source?.url}
      />
      <Box as="main" position="relative" width="100%" height="100vh" minHeight="100vh">
        <CoverSection
          src={project?.mainCoverImage?.source?.url!}
          alt={project?.mainCoverImage?.alt!}
          placeholder={project?.mainCoverImage?.placeholder!}
          title={project?.title!}
          fixedTitleColor={project?.fixedTitleColor!}
          stickyTitleColor={project?.stickyTitleColor!}
        />
        <ExplainSection project={project} />
        <Box overflow="hidden">
          {projectDetail?.content?.map((detail, index) => {
            if (detail?.__typename === 'ComponentCommonImage') {
              const url = detail.source?.url

              if (!url) {
                return null
              }

              // TODO: Video 관련 로직을 따로 분리해야한다.
              if (isVideoUrl(url)) {
                return (
                  <Box key={`${detail.__typename}-${index}`} margin="8px 0" width="100%">
                    <video ref={videoRef} src={url} muted autoPlay playsInline />
                  </Box>
                )
              }

              return (
                <Box
                  key={`${detail.__typename}-${index}`}
                  position="relative"
                  textAlign="center"
                  fontSize={0}
                  margin="8px 0"
                  width="100%"
                  paddingTop={`${(detail.source?.height! * 100) / detail.source?.width!}%`}
                >
                  <Image
                    key={detail.source?.url!}
                    src={detail.source?.url!}
                    layout="fill"
                    objectFit={detail.source?.width! < 3000 ? 'scale-down' : 'cover'}
                    alt={detail.alt}
                    placeholder="blur"
                    blurDataURL={detail.placeholder}
                  />
                </Box>
              )
            } else {
              return (
                <Description
                  key={`${detail?.__typename}-${index}`}
                  justifyContent={detail?.isRight ? 'flex-end' : 'flex-start'}
                  color={project?.color}
                  backgroundColor={project?.backgroundColor}
                >
                  <StyledText>{detail?.description}</StyledText>
                </Description>
              )
            }
          })}
        </Box>
        <BottomPageNavigator prev={prevProject} next={nextProject} />
        <Footer />
      </Box>
    </>
  )
}

const Description = styled(Flex)<{ isRight?: boolean }>`
  padding: 60px 24px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.5;
  word-break: keep-all;

  @media (min-width: ${breakpoints['tablet']}) {
    padding: 80px 10vw;
    font-size: 20px;
  }

  @media (min-width: ${breakpoints['desktop']}) {
    padding: 8vw 10vw;
    font-size: 26px;
  }
`

const StyledText = styled(Text)`
  width: 100%;
  white-space: pre-line;

  @media (min-width: ${breakpoints['desktop']}) {
    width: 55%;
  }
`

export const getStaticPaths = async () => {
  const locales = ['ko', 'en']
  const paths: GetStaticPathsResult['paths'] = []

  PROJECT_LIST_JSON.forEach(project => {
    if (EXCLUDE_PAGE_SLUGS.includes(project.slug)) {
      return
    }

    locales.forEach(locale => {
      paths.push({
        params: {
          projectSlug: project.slug,
        },
        locale,
      })
    })
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<ProjectDetailPageJSONType, { projectSlug: string }> = async ({
  params,
}) => {
  if (params?.projectSlug == null) {
    return {
      notFound: true,
    }
  }

  try {
    const res = fs.readFileSync(`public/projects/${params.projectSlug}/data.json`, 'utf-8')
    const data = JSON.parse(res) as ProjectDetailPageJSONType
    return {
      props: {
        ...data,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}
