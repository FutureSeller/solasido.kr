import fs from 'fs'
import path from 'path'
import Image from 'next/image'

import Meta from '../../../components/common/Meta'
import Container from '../../../components/common/Container'

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
    <>
      <Meta title={project.title} description={project.summary.join(',')} />
      <Container>
        <button>All Projects</button>
        <h1>{project.title}</h1>
        <ul>
          {project.category.map(cat => (<li>{cat}</li>))}
        </ul>
        <div>
          {project.summary.map(sum => (<div>{sum}</div>))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '45%' }}>
            <ul>
              <li>{project.client}</li>
              <li>{project.team}</li>
              <li>{project.startDate} ~ {project.endDate}</li>
              <li>{project.role.join(', ')}</li>
            </ul>
            {project.description.map(desc => (<p>{desc}</p>))}
          </div>
          <div style={{ width: '45%' }}>
            <ul>
              {images.map(filename => (
                <li style={{ width: 530, height: 353, position: 'relative' }}>
                  <Image
                    src={`/images/${project.slug}/${filename}`}
                    alt="close-menu"
                    layout="fill"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <footer>
          {prevProjectSlug && '<-'}
          {project.title}
          {nextProjectSlug && '->'}
        </footer>
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projectSlugs = projectsJson
    .filter(project => project.description.length > 0)
    .map(project => ({ params: { projectSlug: project.slug } }))

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

  const images = fs.readdirSync(path.join(process.cwd(), `/public/images/${context.params?.projectSlug}/`))
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