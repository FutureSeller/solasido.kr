import fs from 'fs'
import path from 'path'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import Meta from '../../../components/common/Meta'
import AspectRatioImage from '../../../components/common/AspectRatioImage'
import ImageLinkButton from '../../../components/common/ImageLinkButton'
import StyledSlider from '../../../components/common/StyledSlider'
import ProjectItem from '../../../components/project/ProjectItem'
import Paging from '../../../components/animation/Paging'
import Modal from '../../../components/common/Modal'

import { colors } from '../../../styles/colors'
import { responsive } from '../../../styles/responsive'
import { neue, notoSansKR, notoSansKRBold } from '../../../styles/typography'
import { zIndex } from '../../../styles/zIndex'

import projectsJson from '../../../public/data/projects.json'

import type { Project, Image } from '../../../types/model'
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

interface Props {
  project: Project
  prevProjectSlug: string | null
  nextProjectSlug: string | null
  images: Omit<Image, 'alt'>[]
}

export default function ProjectPage({ project, prevProjectSlug, nextProjectSlug, images }: Props) {
  const [showModal, setShowModal] = useState(false)
  const [initialSlide, setInitialSlide] = useState(0)

  useEffect(() => {
    if (!window) {
      return
    }

    const $element = document.getElementById('projectItems')
    if ($element) {
      $element.scrollTop = 0
    }
  }, [project.slug])

  return (
    <Paging slug={project.slug}>
      <Container>
        <Modal
          title={project.title}
          show={showModal}
          onClose={() => setShowModal(false)}
        >
          <StyledSlider initialSlide={initialSlide}>
            {images.map(({ src, blurDataURL }, idx) => (
              <AspectRatioImage
                key={`modal-${project.title}-${idx}`}
                src={src}
                alt={`${project.title}의 ${idx}번째 이미지`}
                objectFit="contain"
                blurDataURL={blurDataURL}
              />
            ))}
          </StyledSlider>
        </Modal>
        <Meta
          title={project.title}
          description={project.summary.join(',')}
        />
        <Category>{project.category.toUpperCase()}</Category>
        <GobackToHome>
          <ImageLinkButton
            href="/#projects"
            src="/assets/back.svg"
            alt="다음 프로젝트로 이동합니다."
            size={30}
          />
        </GobackToHome>
        <Heading>
          <HeadingFont>
            <TitleFont>{project.title}</TitleFont>
            <Summary>{project.summary.join(', ')}</Summary>
          </HeadingFont>
        </Heading>
        <Content>
          <ContentFont>
            <Column>
              <ProjectItemList>
                <ProjectItem title="CLIENT" itemValue={project.client} />
                <ProjectItem title="TEAM" itemValue={project.team} />
                <ProjectItem
                  title="PERIOD"
                  itemValue={`${project.startDate.replace('.', '. ')} - ${project.endDate.replace('.', '. ')}`}
                />
                <ProjectItem title="ROLE" itemValue={project.role.join(', ')} />
              </ProjectItemList>
              {project.description.map((description, idx) => (
                <Paragraph key={`${project.title}의 ${idx}번째 문단입니다.`}>
                  {description}
                </Paragraph>
              ))}
            </Column>
            <ScrollableArea id="projectItems">
              <ul>
                {images.map(({ src, blurDataURL }, idx) => (
                  <li key={src} style={{ marginBottom: 20, position: 'relative' }}>
                    <AspectRatioImage
                      src={src}
                      alt={`${project.title}의 ${idx}번째 이미지`}
                      objectFit="contain"
                      blurDataURL={blurDataURL}
                    />
                    <ModalClick 
                      onClick={() => {
                        setInitialSlide(idx)
                        setShowModal(true)
                      }}
                    />
                  </li>
                ))}
              </ul>
            </ScrollableArea>
          </ContentFont>
        </Content>
        <Footer>
          <ImageLinkButton
            href={prevProjectSlug ? `/projects/${prevProjectSlug}` : null}
            src="/assets/arrow-left.svg"
            alt="이전 프로젝트로 이동합니다."
            size={24}
            rel="prev"
          />
          <FooterFont>{project.title}</FooterFont>
          <ImageLinkButton
            href={nextProjectSlug ? `/projects/${nextProjectSlug}` : null}
            src="/assets/arrow-right.svg"
            alt="다음 프로젝트로 이동합니다."
            size={24}
            rel="next"
          />
        </Footer>
      </Container>
    </Paging>
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
    fallback: false,
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

  const images = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), `/public/images/${context.params?.projectSlug}/imageMeta.json`), 'utf-8')
  )

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

const Container = styled.main`
  padding: 0 150px;

  ${responsive.lgLte} {
    padding: 0 80px;
  }

  ${responsive.mdLte} {
    padding: 0 60px;
  }

  ${responsive.smLte} {
    padding: 0 40px;
  }

  ${responsive.xsLte} {
    padding: 0 20px;
  }
`

const Heading = styled.div`
  position: relative;
  margin-top: 16px;
`

const Content = styled.div`
  position: relative;
  min-height: 100vh;
  margin-top: 80px;

  ${responsive.smLte} {
    margin-top: 60px;
  }
`

const Column = styled.div`
  width: 45%;

  ${responsive.lgLte} {
    width: 100%;
  }
`

const HeadingFont = styled.div`
  ${notoSansKRBold}
  font-size: 22px;
  line-height: 1.5;

  ${responsive.lgLte} {
    font-size: 20px;
  }

  ${responsive.smLte} {
    font-size: 14px;
  }
`

const TitleFont = styled.h1`
  font-size: 50px;

  ${responsive.lgLte} {
    font-size: 42px;
    line-height: 1.3;
  }

  ${responsive.smLte} {
    font-size: 20px;
  }
`

const GobackToHome = styled.div`
  position: fixed;
  top: 20px;
  right: 150px;
  cursor: pointer;
  z-index: ${zIndex.navigation};

  ${responsive.lgLte} {
    right: 80px;
  }

  ${responsive.mdLte} {
    right: 60px;
  }

  ${responsive.smLte} {
    right: 40px;
  }

  ${responsive.xsLte} {
    right: 20px;
  }
`

const Summary = styled.h2`
  padding-top: 4px;

  ${responsive.mdLte} {
    padding-top: 16px;
  }
`

const Category = styled.div`
  ${neue}
  font-size: 12px;
  display: inline-block;
  padding: 16px 20px 10px;
  margin: 20px 0;
  color: white;
  background-color: ${colors.red};
  border: none;

  ${responsive.smLte} {
    padding: 8px;
  }
`

const ContentFont = styled.div`
  ${notoSansKR}
  font-weight: 300;
  font-size: 18px;
  line-height: 1.6;

  ${responsive.lgLte} {
    font-weight: 400;
  }

  ${responsive.smLte} {
    font-size: 12px;
  }
`

const ProjectItemList = styled.ul`
  padding-bottom: 50px;

  > li:nth-of-type(1) {
    padding-top: 0;
  }
`

const Paragraph = styled.p`
  padding-bottom: 30px;
  
  ${responsive.smLte} {
    padding-bottom: 16px;
  }
`

const ScrollableArea = styled(Column)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  
  ${responsive.lgLte} {
    position: static;
    margin-top: 70px;
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  margin-top: 80px;
  border-top: 1px solid ${colors.black};

  ${responsive.lgLte} {
    padding: 20px 0;
    margin-top: 60px;
  }

  ${responsive.smLte} {
    padding: 14px 0;
    margin-top: 40px;
  }
`

const FooterFont = styled.div`
  ${notoSansKR}
  font-size: 18px;
  line-height: 1.5;

  ${responsive.mdLte} {
    font-size: 16px;
  }

  ${responsive.smLte} {
    font-size: 12px;
  }
`

const ModalClick = styled.div`
  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

    ${responsive.lgLte} {
      display: none;
    }
  }
`
