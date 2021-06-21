import Container from '../../../components/common/Container'

import projectsJson from '../../../public/data/projects.json'

import type { Project } from '../../../types/model'
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

interface Props {
  project: Project
  prevProjectSlug: string | null
  nextProjectSlug: string | null
}

export default function ProjectPage({ project, prevProjectSlug, nextProjectSlug }: Props) {
  return (
    <Container>
      <pre>
        {JSON.stringify(project, null, 2)}
      </pre>
      {`prev : ${prevProjectSlug}`}
      {`next : ${nextProjectSlug}`}
    </Container>
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

  const prevProjectSlug = projectIndex === 0 ? null : projects[projectIndex - 1].slug
  const nextProjectSlug = projectIndex === projects.length - 1 ? null : projects[projectIndex + 1].slug

  return {
    props: {
      project: projects[projectIndex],
      prevProjectSlug,
      nextProjectSlug,
    }
  }
}