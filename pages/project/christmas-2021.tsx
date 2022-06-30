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
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEWUlEQVQ4jUXTy1NaZxgG8DOTtmmT1lbTIcRUjU0wKsgdOcCBcwQRBUXxkiAXRVRuAoaLggJClIsgokWxoLHWJmrSaNIY7aSj6dh0TDLVtNlkla6ySldZtasuOoBT/4DfvM/7fc8L/Aug/j6R/+79grcni998hHl9qvTVJ7jfPyU+z6P+8jl9B8XaQsP38rlrBTXLhaL54obZi5LJS22hEpmvTAH8cyL/3QcFbz8sfnMK8/p06auctHz6GWUvj/bTGXATBa2j4ZV83jdfCJKFoq+KxBNftgQwUg+m3VGqBNIzs/LjsrTMwT/Ppe7nI0+KhY8xTY9KWzfLpesV8jVi5zJJvUDVzNB0QUJPGLJch6zAXyeP5YscwsFZ6AVGclCheEZW/0zs2KqQ3yeq7lC6b9K0i3RDktU/xTD7yLpg1ZAHGQLSex7NJByeQ16WSw/xyn1Cxx5F/YisukfsvEPpvkXTLoL6JMschyyTsD3Edfqq3U6eG/gzu2cO4QDFell29aBCkZW7dO0DinqV0PEtuXueqknQDTHQFGZZRjl2N8fh4LrNXA+QfdtnuZTDS40HeOU+sXOPot6p1PzI6NsA9SugfhkyL3Ass7A9xnWE+W4v12Vm2JyioFkYBP7IyF9RrN9wsqfH0vADy7SOWFer7Al63zhJ4yPrh6nGQdDSz7R3V9p6YLcc8QLp/zxT+RgNZ9P+L+/ClhXEFsV1ejBSL0njZVocDKuObFQSjFKKVUK1C+lDwJNsE85ydnGyXVC3DR7J29WOGZp+BNMeYdum68cmmkLB5oi7KdIFDUtoAw2MYT5rBNhBsbbR8Ma5qu8viB7Sejc5/RtVtjXuYArq916W+2l9cbE/3BAYaxz3SKLDV6bNzVMNDBefOQKzrwMPUex1NLJ6vnrpvGD+gvgGTpEkdcfwXSMlMhdOHRWMRMRBf9P4SHPU2TplvRI3ts+JeQE2y8fgBICtYtF9jOT25dblcukNrGIWp4wR1H6capSqj9Z6JxpDx/Jq3Cid08hSAv44HfKTkTCwjVc8oKjXK7WroGGJaZpnX5urGgiA5lG23S/w+er93pZJZ2ssIxNaeUouTTLhIBkJY3lR4C62fY3YOV/WniL3JOiGKdAUgawumsnBsDq4rkGhf6gtk1aa6JWlujoWq+tiRM44jhfF8KeBNaLqVqVuBqtM0A1xtjWabt+Qk2G1cRwDtX6rOJKVGnlK1bFYJ46T4CNZKJgFviN3L4GGJNOU7W2wyjnK91igQSPi6hcGzc2xfnlSk0lbLZwiweNYbloW1cyi65LAUVqGOcyyjHHsHtjp5Hn0kLMHdvcKQ8q6cJtwQiiIMJEgkRPKzkzL2q9zRQtA4GKbpyR92ZbyLgOupwevy3TIIqHa62hOHuiCmF465CchmbTV00WCtMwTLZxuWAKulyqGsV22il4TQasl9ako19ppthb6YD1juIaVbgIDDpCRcFYWZtLmZuR74pv/AeWfzZGiNuO6AAAAAElFTkSuQmCC'

export default function Christmas2021() {
  const { t } = useTranslation(['common', 'christmas-2021'])

  return (
    <>
      <Meta
        title={t('christmas-2021:title')}
        description="Thank you for serving our country."
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
