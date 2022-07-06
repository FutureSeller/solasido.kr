import styled from '@emotion/styled'
import { AspectRatio, Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Meta from '../../components/Meta'
import Footer from '../../components/pageLayout/Footer'

import BottomPageNavigator from '../../components/[project]/BottomPageNavigator'
import ProjectIntroSection from '../../components/[project]/ProjectIntroSection'
import NewExplainSection from '../../components/[project]/NewExplainSection'

import { breakpoints } from '../../styles/responsive'

import type { GetServerSideProps } from 'next'

const CategoryTitle = styled(Text)`
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fonts.suitRegular};
  font-weight: 400;
  font-size: 14px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 20px;
  }
`

const GENERATED_PLACE_HOLDER =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbElEQVQ4jd2U206DQBCG9/3fxlStV00rPRlNW9vE1BZoKexhZmd3QV9AYSMSkJh4aTIXhH++3X8OwHKrW1E4AplGx3142Efh63H/gooXjrqZzBIYrZrhDJ7jcPe8Xs6Dh8UsmIySU+gMttIsAdMglEj7QvKLj66kQbCumW4VfRJzBv8c7N/AeU97foF9kiVozU+DsATdI75hj/nZgsyMVqg4KG4JQGayOsVWR7Th3GpCKbJEg6gtaBCgeJ2tQYgsIZT1G9YkLZXPzmDh6C03pJVG+Z6bwpFPcwabfLlhlkBkSS1bglN0iKNDmsRpEifn8Bwfa4Ou4r3/Epb80jRjCTbrp+vBVTAe3Q1vhreD7WZVq/mXzRImlJJfWm3cbdfTYDyf3i8Xs9l0slk9toYiq/uYEmnzWh+oOKEEmYHivu0tmFAqkZaw/4ZbcuGIUKISP26I0aqEu55rXoPAxqi6zsua+1bX/2T61M+aPwDj/UcGSaBf+wAAAABJRU5ErkJggg=='

export default function There() {
  const { t } = useTranslation(['common', 'there'])

  return (
    <>
      <Meta title={t('there:title')} description="Here, There and Everywhere" imageUrl="/projects/there/main.png" />
      <Box as="main" position="relative" width="100%" height="100%" minHeight="100vh">
        <ProjectIntroSection
          title={t('there:title')}
          fixedTitleColor="white"
          stickyTitleColor="black"
          coverImage={
            <Image
              src="/projects/there/main.png"
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              blurDataURL={GENERATED_PLACE_HOLDER}
              aria-hidden
            />
          }
        />
        <NewExplainSection
          backgroundColor="white"
          color="black"
          title={t('there:title')}
          descriptions={t('there:summary.descriptions', { returnObjects: true })}
          scopes={t('there:summary.scope', { returnObjects: true })}
          metaItems={
            <>
              <Box>
                <Heading as="h3">
                  <CategoryTitle>PERIOD</CategoryTitle>
                </Heading>
                {t('there:summary.period')}
              </Box>
              <Box>
                <Heading as="h3">
                  <CategoryTitle>{t('there:summary.work.type')}</CategoryTitle>
                </Heading>
              </Box>
            </>
          }
        />
        <AspectRatio ratio={3000 / 1907}>
          <Box background="url(/projects/there/there_01.gif) no-repeat center" backgroundSize="contain" aria-hidden />
        </AspectRatio>
        <AspectRatio ratio={3000 / 1907}>
          <Box background="url(/projects/there/there_02.png) no-repeat center" backgroundSize="contain" aria-hidden />
        </AspectRatio>
        <AspectRatio ratio={3000 / 1528}>
          <Box background="url(/projects/there/there_03.gif) no-repeat center" backgroundSize="contain" aria-hidden />
        </AspectRatio>
        <AspectRatio ratio={3000 / 2795}>
          <Box background="url(/projects/there/there_04.png) no-repeat center" backgroundSize="contain" aria-hidden />
        </AspectRatio>
        <AspectRatio ratio={3000 / 4332}>
          <Box background="url(/projects/there/there_05.png) no-repeat center" backgroundSize="contain" aria-hidden />
        </AspectRatio>
        <AspectRatio ratio={3000 / 1588}>
          <Box background="url(/projects/there/there_06.png) no-repeat center" backgroundSize="contain" aria-hidden />
        </AspectRatio>
        <AspectRatio ratio={3000 / 7414}>
          <Box background="url(/projects/there/there_07.png) no-repeat center" backgroundSize="contain" aria-hidden />
        </AspectRatio>
        <BottomPageNavigator
          prev={{
            title: 'christmas 2021',
            slug: 'christmas-2021',
          }}
          next={{
            title: 'HI&D',
            slug: 'hind',
          }}
        />
        <Footer />
      </Box>
    </>
  )
}

export const getStaticProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale!, ['common', 'there'])),
    },
  }
}
