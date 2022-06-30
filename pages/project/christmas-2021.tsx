import styled from '@emotion/styled'
import { Box, Heading, Text, AspectRatio } from '@chakra-ui/react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Meta from '../../components/Meta'
import Footer from '../../components/pageLayout/Footer'

import BottomPageNavigator from '../../components/[project]/BottomPageNavigator'
import ProjectIntroSection from '../../components/[project]/ProjectIntroSection'
import NewExplainSection from '../../components/[project]/NewExplainSection'
import WordTreeSection from '../../components/[project]/christmas-2021/WordTreeSection'
import TextBannerSection from '../../components/[project]/christmas-2021/TextBannerSection'

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
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLElEQVQ4jWN4aqJGED0xVXturPZBR+WBuXp3mXnKJLuQ+U7eS50ZiNH50lD1lo3GtnD9znJz51UubitdPJc5exHU/MhM7bW+6s4QPf9FTm4rXJxWu/gscfZeAtKJT/MTU7Vnxmpv9VQ/6qicdtcuarfxXuLsA9OGT/MTU7VXBqr3LNXXRxu0V1rkd9lEz3RA1oZT8xNTtdcGqkd8dWKn27utcHFc7eq8ysV9hTNRmh+bgvy5LUzPa6mzyyoXr6UIT3rh1/wY7NU3+qpftJTPu2r1lpiFz3b0WObsTYzmt/qqD83Vd4XoTSw0K2+xTpps77cIu7VeyJqfmKg9N1LdEGWQNMXefbmLwxpXp1UuriugUYpP8xNw8J5y13Ze5eoMjkzk+CRs81MTtbuW6s3VFl5Lnd2XE9DmBdf8BGKzoepHbZVXBqobowySJtvhCiQvZM1PTNVeGKm+1lc97aY9K8ukqMMmZoZD0AInT2JsfmGkettGo7XKwm+Rk+MaV+dVru7LXTyWgaKXsOZXhqo1jVbWG9y8iQskLxTNBqpT8s0c1ri6rnTxXkqafobnRmqXnLTmZRinTLLzWO7sAHK5iwc4tEFmLYYaB0JY/dxeaXHER+elISjfTiowK+i0CZvj6LPE2XWli/1aV4e1IONcV7qAw8LZCynNgKLqgbn6IzN1UO7VV3mvq/LURO2WrcZhX921sYazsk06KiwqWqyz+mzjpjmEznX0XYzQDAB2XOYyEge8PgAAAABJRU5ErkJggg=='

export default function Christmas2021() {
  const { t } = useTranslation(['common', 'christmas-2021'])

  return (
    <>
      <Meta
        title={t('christmas-2021:title')}
        description="Merry Christmas!"
        imageUrl="/projects/christmas-2021/main.png"
      />
      <Box as="main" position="relative" width="100%" height="100%" minHeight="100vh">
        <ProjectIntroSection
          title={t('christmas-2021:title')}
          fixedTitleColor="white"
          stickyTitleColor="black"
          coverImage={
            <Image
              src="/projects/christmas-2021/main.png"
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="left"
              placeholder="blur"
              blurDataURL={GENERATED_PLACE_HOLDER}
              aria-hidden
            />
          }
        />
        <NewExplainSection
          backgroundColor="white"
          color="black"
          title={t('christmas-2021:title')}
          descriptions={t('christmas-2021:summary.descriptions', { returnObjects: true })}
          scopes={t('christmas-2021:summary.scope', { returnObjects: true })}
          metaItems={
            <>
              <Box>
                <Heading as="h3">
                  <CategoryTitle>PERIOD</CategoryTitle>
                </Heading>
                {t('christmas-2021:summary.period')}
              </Box>
              <Box>
                <Heading as="h3">
                  <CategoryTitle>{t('christmas-2021:summary.work.type')}</CategoryTitle>
                </Heading>
              </Box>
            </>
          }
        />
        <WordTreeSection />
        <AspectRatio ratio={1920 / 1580}>
          <Box background={'url(/projects/christmas-2021/img_01.jpg) no-repeat center'} backgroundSize="contain" />
        </AspectRatio>
        <AspectRatio ratio={1920 / 1280}>
          <Box background={'url(/projects/christmas-2021/img_02.jpg) no-repeat center'} backgroundSize="contain" />
        </AspectRatio>
        <TextBannerSection />
        <AspectRatio ratio={1 / 1}>
          <Box background={'url(/projects/christmas-2021/img_03.png) no-repeat center'} backgroundSize="contain" />
        </AspectRatio>

        <AspectRatio ratio={1 / 1}>
          <Box background={'url(/projects/christmas-2021/img_04.png) no-repeat center'} backgroundSize="contain" />
        </AspectRatio>

        <AspectRatio ratio={1 / 1}>
          <Box background={'url(/projects/christmas-2021/img_05.png) no-repeat center'} backgroundSize="contain" />
        </AspectRatio>
        <BottomPageNavigator
          prev={{
            title: 'national patriots and veterans',
            slug: 'national-patriots-and-veterans',
          }}
          next={{
            title: '(T)HERE',
            slug: 'there',
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
      ...(await serverSideTranslations(locale!, ['common', 'christmas-2021'])),
    },
  }
}
