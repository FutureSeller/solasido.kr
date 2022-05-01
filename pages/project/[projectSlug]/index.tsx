import { useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import { Box, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import Meta from '../../../components/Meta'
import Footer from '../../../components/pageLayout/Footer'
import CoverSection from '../../../components/[project]/CoverSection'
import ExplainSection from '../../../components/[project]/ExplainSection'

import { responsive } from '../../../styles/responsive'

import { initializeApollo } from '../../../apollo/client'
import {
  ProjectSlugPage_ProjectIdDocument,
  ProjectSlugPage_ProjectDetailDocument,
  ProjectSlugPage_ProjectSlugsDocument,
  ProjectSlugPage_ProjectLinkDocument,
  useProjectSlugPage_ProjectLinkQuery,
} from '../../../__generated__/graphql'
import type {
  ProjectSlugPage_ProjectIdQuery,
  ProjectSlugPage_ProjectDetailQuery,
  ProjectSlugPage_ProjectSlugsQuery,
  ProjectSlugPage_ProjectLinkQuery,
} from '../../../__generated__/graphql'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

const isVideoUrl = (url: string) => url.endsWith('.mp4')

export default function ProjectSlugPage({ project }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useProjectSlugPage_ProjectLinkQuery({
    variables: {
      order: project?.order ?? -1,
    },
  })
  const [next] = data?.next ?? []
  const [prev] = data?.prev ?? []
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
        <Flex as="footer" justifyContent="space-between" backgroundColor="black" color="white">
          <StyledBox width="50%" padding="95px 24px">
            {prev && (
              <>
                <Link href={`/project/${prev.slug}`} passHref>
                  <a aria-label={`${prev.title} 페이지로 이동`} rel="prev">
                    <Box width="8vw">
                      <Img
                        src="/assets/right-arrow.svg"
                        style={{
                          transform: 'rotate(180deg)',
                        }}
                        alt={`${prev.title} 페이지로 이동`}
                      />
                    </Box>
                  </a>
                </Link>
                <PrevBox>
                  <Label>PREVIOUS PROJECT</Label>
                  <Value>{prev.title}</Value>
                </PrevBox>
              </>
            )}
          </StyledBox>
          <VerticalLine />
          <StyledBox width="50%" padding="95px 24px" justifyContent="flex-end">
            {next && (
              <>
                <NextBox textAlign="right">
                  <Label>NEXT PROJECT</Label>
                  <Value>{next.title}</Value>
                </NextBox>
                <Link href={`/project/${next.slug}`} passHref>
                  <a aria-label={`${next.title} 페이지로 이동`} rel="next">
                    <Box width="8vw">
                      <Img src="/assets/right-arrow.svg" alt={`${next.title} 페이지로 이동`} />
                    </Box>
                  </a>
                </Link>
              </>
            )}
          </StyledBox>
        </Flex>
        <Footer />
      </Box>
    </>
  )
}

const Description = styled(Flex)<{ isRight?: boolean }>`
  padding: 8vw 10vw;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.5;
  word-break: keep-all;

  ${responsive.lgLte} {
    font-size: 20px;
  }

  ${responsive.mdLte} {
    padding: 80px 24px;
    font-size: 18px;
  }

  ${responsive.smLte} {
    padding: 60px 24px;
    font-size: 14px;
  }
`

const StyledText = styled(Text)`
  width: 55%;
  white-space: pre-line;

  ${responsive.lgLte} {
    width: 100%;
  }
`

const StyledBox = styled(Flex)`
  padding: 95px 24px;

  ${responsive.mdLte} {
    padding: 30px 24px;
  }
`

const PrevBox = styled(Box)`
  display: inline-block;
  vertical-align: middle;
  padding-inline-start: 3vw;
`

const NextBox = styled(Box)`
  display: inline-block;
  vertical-align: middle;
  padding-inline-end: 3vw;
`

const Img = styled(motion.img)`
  display: inline-block;
  width: 6vw;

  ${responsive.mdLte} {
    width: 10vw;
  }

  ${responsive.smLte} {
    width: 10vw;
  }
`

const Label = styled(Box)`
  margin-bottom: 8px;
  font-size: 18px;

  ${responsive.mdLte} {
    font-size: 14px;
  }
`

const Value = styled(Box)`
  font-weight: 700;
  font-size: 3vw;

  ${responsive.mdLte} {
    font-size: 4vw;
  }
`

const VerticalLine = styled.div`
  border-right: 1px solid white;
`

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo({})

  const { data } = await apolloClient.query<ProjectSlugPage_ProjectSlugsQuery>({
    query: ProjectSlugPage_ProjectSlugsDocument,
  })

  const paths = data.projects?.map(project => {
    if (project == null) {
      return null
    }

    return {
      params: {
        projectSlug: project.slug,
      },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<
  { project: ProjectSlugPage_ProjectDetailQuery['project'] },
  { projectSlug: string }
> = async ({ params }) => {
  if (params?.projectSlug == null) {
    return {
      notFound: true,
    }
  }

  const apolloClient = initializeApollo({})

  const { data } = await apolloClient.query<ProjectSlugPage_ProjectIdQuery>({
    query: ProjectSlugPage_ProjectIdDocument,
    variables: {
      slug: params.projectSlug,
    },
  })

  const [project] = data.projects ?? []
  if (project == null) {
    return {
      notFound: true,
    }
  }

  const { data: projectDetail } = await apolloClient.query<ProjectSlugPage_ProjectDetailQuery>({
    query: ProjectSlugPage_ProjectDetailDocument,
    variables: {
      id: project?.id,
    },
  })

  if (projectDetail?.project == null) {
    return {
      notFound: true,
    }
  }

  await apolloClient.query<ProjectSlugPage_ProjectLinkQuery>({
    query: ProjectSlugPage_ProjectLinkDocument,
    variables: {
      order: project?.order,
    },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      project: projectDetail.project,
    },
  }
}
