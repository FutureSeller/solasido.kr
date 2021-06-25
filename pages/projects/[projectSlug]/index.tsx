import fs from 'fs'
import path from 'path'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

import Meta from '../../../components/common/Meta'
import Container from '../../../components/common/Container'
import Content from '../../../components/common/Content'
import AspectRatioImage from '../../../components/common/AspectRatioImage'

import { colors } from '../../../styles/colors'
import { responsive } from '../../../styles/responsive'
import { notoSansKR, notoSansKRBold } from '../../../styles/typography'

import projectsJson from '../../../public/data/projects.json'

import type { Project } from '../../../types/model'
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

interface Props {
  project: Project
  prevProjectSlug: string | null
  nextProjectSlug: string | null
  images: string[]
}

export default function ProjectPage({ project, prevProjectSlug, nextProjectSlug, images }: Props) {
  return (
    <Container>
      <Meta title={project.title} description={project.summary.join(',')} />
      <Content>
        <BackToProjectsButton>
          <Link href="/#projects" passHref>
            All Projects
          </Link>
        </BackToProjectsButton>
        <h1>{project.title}</h1>
        <ul>
          {project.category.map(cat => (<li>{cat}</li>))}
        </ul>
        <div>
          {project.summary.map(sum => (<div>{sum}</div>))}
        </div>
        <ContentFont>
          <div style={{ position: 'relative', minHeight: '100vh' }}>
            <div style={{ width: '45%' }}>
              <ul>
                <li>{project.client}</li>
                <li>{project.team}</li>
                <li>{project.startDate} ~ {project.endDate}</li>
                <li>{project.role.join(', ')}</li>
              </ul>
              {project.description.map(desc => (<p>{desc}</p>))}
            </div>
            <div style={{
              width: '45%',
              overflow: 'scroll',
              position: 'absolute',
              left: '50%',
              top: 0,
              right: 0,
              bottom: 0
            }}>
              <ul>
                {images.map((filename, idx) => (
                  <li style={{ marginBottom: 20 }}>
                    <AspectRatioImage
                      src={`/images/${project.slug}/${filename}`}
                      alt={`${project.title}의 ${idx}번째 이미지`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ContentFont>
        <Footer>
          <div style={{ width: 24, position: 'relative' }}>
            {prevProjectSlug && (
              <Image
                src={`/assets/arrow-left.svg`}
                alt="이전 프로젝트로 이동합니다."
                layout="fill"
              />
            )}
          </div>
          <div>{project.title}</div>
          <div style={{ width: 24, position: 'relative' }}>
            {nextProjectSlug && (
              <Image
                src={`/assets/arrow-right.svg`}
                alt="다음 프로젝트로 이동합니다."
                layout="fill"
              />
            )}
          </div>
        </Footer>
      </Content>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projectSlugs = projectsJson
    .filter(project => project.description.length > 0)
    .map(project => ({
      params: {
        projectSlug: project.slug
      }
    }))

  return {
    paths: projectSlugs,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const projects = projectsJson.filter(project => project.description.length > 0)
  const projectIndex = projects.findIndex(project => project.slug === context.params?.projectSlug)
  if (projectIndex < 0) {
    return {
      notFound: true
    }
  }

  const images = fs
    .readdirSync(path.join(process.cwd(), `/public/images/${context.params?.projectSlug}/`))
    .filter(filename => !filename.includes('thumbnail'))

  const prevProjectSlug = projectIndex === 0 ? null : projects[projectIndex - 1].slug
  const nextProjectSlug = projectIndex === projects.length - 1 ? null : projects[projectIndex + 1].slug

  return {
    props: {
      project: projects[projectIndex],
      prevProjectSlug,
      nextProjectSlug,
      images,
    }
  }
}

const BackToProjectsButton = styled.button`
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  background-color: ${colors.red};
`

const ContentFont = styled.div`
  ${notoSansKR}
  font-size: 16px;
  line-height: 1.5;

  ${responsive.smLte} {
    font-size: 12px;
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  margin-top: 80px;
  border-top: 1px solid ${colors.black};
`
