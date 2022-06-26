import styled from '@emotion/styled'
import { Box, AspectRatio, Heading, Text, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import IcRightArrow from '../../public/assets/right-arrow.svg'

import Meta from '../../components/Meta'
import Footer from '../../components/pageLayout/Footer'

import ProjectIntroSection from '../../components/[project]/wechelin/ProjectIntroSection'
import NewExplainSection from '../../components/[project]/wechelin/NewExplainSection'
import BrandIdentitySection from '../../components/[project]/wechelin/BrandIdentitySection'
import BackgroundAndIssueSection from '../../components/[project]/wechelin/BackgroundAndIssueSection'
import UserResearchSection from '../../components/[project]/wechelin/UserResearchSection'
import MissionSection from '../../components/[project]/wechelin/MissionSection'
import ProblemAndSolutionSection from '../../components/[project]/wechelin/ProblemAndSolutionSection'
import ProjectGoalSection from '../../components/[project]/wechelin/ProjectGoalSection'
import FlowChartSection from '../../components/[project]/wechelin/FlowChartSection'
import SplashSection from '../../components/[project]/wechelin/SplashSection'
import OnBoardingSection from '../../components/[project]/wechelin/OnBoardingSection'
import FindingSection from '../../components/[project]/wechelin/FindingSection'
import MyChelinSection from '../../components/[project]/wechelin/MyChelinSection'
import YourMichelinSection from '../../components/[project]/wechelin/YourMichelinSection'
import MyPageSection from '../../components/[project]/wechelin/MyPageSection'
import DesignElementSection from '../../components/[project]/wechelin/DesignElementSection'
import FeedSection from '../../components/[project]/wechelin/FeedSection'

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
const StyledIcRightArrow = styled(IcRightArrow)`
  color: #fff;
  padding-right: 24px;
  width: 10vw;

  @media (min-width: ${breakpoints['tablet']}) {
    width: 6vw;
  }
`

const StyledBox = styled(Flex)`
  padding: 30px 24px;

  @media (min-width: ${breakpoints['tablet']}) {
    padding: 95px 24px;
  }
`

const VerticalLine = styled.div`
  border-right: 1px solid white;
`

const NextBox = styled(Box)`
  display: inline-block;
  vertical-align: middle;
  padding-inline-end: 3vw;
`

const Label = styled(Box)`
  margin-bottom: 8px;
  font-size: 14px;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 18px;
  }
`

const Value = styled(Box)`
  font-weight: 700;
  font-size: 4vw;
  text-transform: uppercase;

  @media (min-width: ${breakpoints['tablet']}) {
    font-size: 3vw;
  }
`

const GENERATED_PLACE_HOLDER =
  'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAECAwQGB//EACMQAAICAQQCAgMAAAAAAAAAAAECAAMRBAUhMRIUBmEiMkH/xAAYAQACAwAAAAAAAAAAAAAAAAAABQEEB//EABsRAAIDAQEBAAAAAAAAAAAAAAECAAMhEUGR/9oADAMBAAIRAxEAPwCl+l0tOiLPcVexfFLD0GPWB/Zo+vqaql9ml0cKC3HAz9zILRZTVp7TisWK3mP2TBByPsHmd3um5bLX8U3HQbXuNur1N5Qlr8+T/ko7IA4EV33vUyqq96fk1q666i5QFLBs9zRp8E89iSwKsVPYOIluNJEsnDqR3mIhCHGHMREJAn//2Q=='

interface Props {
  locale: string
}

export default function WechelinPage({ locale }: Props) {
  const { t } = useTranslation(['common', 'wechelin'])

  return (
    <>
      <Meta title={t('wechelin:title')} description="Our Michelin Guide" imageUrl="/projects/wechelin/main.jpg" />
      <Box as="main" position="relative" width="100%" height="100%" minHeight="100vh">
        <ProjectIntroSection
          title={t('wechelin:title')}
          fixedTitleColor="white"
          stickyTitleColor="black"
          coverImage={
            <Image
              src="/projects/wechelin/main.jpg"
              alt={t('wechelin:title')}
              layout="fill"
              objectFit="cover"
              objectPosition="left"
              placeholder="blur"
              blurDataURL={GENERATED_PLACE_HOLDER}
            />
          }
        />
        <NewExplainSection
          backgroundColor="white"
          color="black"
          title={t('wechelin:title')}
          descriptions={t('wechelin:summary.descriptions', { returnObjects: true })}
          scopes={['Brand Design', 'Design Guidelines', 'UXUI', 'Mobile App']}
          metaItems={
            <>
              <Box>
                <Heading as="h3">
                  <CategoryTitle>{t('wechelin:summary.work.type')}</CategoryTitle>
                </Heading>
                {t('wechelin:summary.work.value')}
              </Box>
              <Box>
                <Heading as="h3">
                  <CategoryTitle>PERIOD</CategoryTitle>
                </Heading>
                {t('wechelin:summary.period')}
              </Box>
            </>
          }
        />
        <AspectRatio ratio={768 / 330}>
          <Box
            background={`url(/projects/wechelin/slogan.jpg)`}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
          />
        </AspectRatio>
        <BrandIdentitySection
          title={t('wechelin:biSection.title')}
          descriptions={t('wechelin:biSection.descriptions', { returnObjects: true })}
        />
        <BackgroundAndIssueSection
          title={t('wechelin:backgroundSection.title')}
          description={t('wechelin:backgroundSection.description')}
        />
        <UserResearchSection
          title={t('wechelin:userResearchSection.title')}
          description={t('wechelin:userResearchSection.description')}
          questions={t('wechelin:userResearchSection.questions', { returnObjects: true })}
          t={t}
        />
        <MissionSection
          title={t('wechelin:missionSection.title')}
          description={t('wechelin:missionSection.description')}
        />
        <ProblemAndSolutionSection
          title={t('wechelin:problemAndSolutionSection.title')}
          description={t('wechelin:problemAndSolutionSection.description')}
          t={t}
        />
        <ProjectGoalSection
          title={t('wechelin:projectGoalSection.title')}
          description={t('wechelin:projectGoalSection.description')}
          t={t}
        />
        <AspectRatio ratio={1920 / 336}>
          <Box
            background={`url(/projects/wechelin/banner-${locale}.jpg) no-repeat center`}
            backgroundSize="contain"
            aria-hidden
          />
        </AspectRatio>
        <FlowChartSection
          title={t('wechelin:flowchartSection.title')}
          description={t('wechelin:flowchartSection.description')}
        />
        <SplashSection
          title={t('wechelin:flowchartSection.title')}
          description={t('wechelin:flowchartSection.description')}
        />
        <OnBoardingSection
          title={t('wechelin:onboardingSection.title')}
          description={t('wechelin:onboardingSection.description')}
        />
        <FindingSection
          title={t('wechelin:findingSection.title')}
          description={t('wechelin:findingSection.description')}
        />
        <MyChelinSection
          title={t('wechelin:myMichelinSection.title')}
          description={t('wechelin:myMichelinSection.description')}
        />
        <YourMichelinSection
          title={t('wechelin:yourMichelinSection.title')}
          description={t('wechelin:yourMichelinSection.description')}
        />
        <MyPageSection title={t('wechelin:mySection.title')} description={t('wechelin:mySection.description')} />
        <FeedSection title={t('wechelin:feedSection.title')} description={t('wechelin:feedSection.description')} />
        <DesignElementSection
          title={t('wechelin:designElementSection.title')}
          description={t('wechelin:designElementSection.description')}
        />
        <Flex justifyContent="space-between" backgroundColor="black" color="white">
          <StyledBox width="50%" />
          <VerticalLine />
          <StyledBox width="50%" flex="1" justifyContent="flex-end">
            <NextBox textAlign="right">
              <Label>NEXT PROJECT</Label>
              <Value>National Patriots And Veterans</Value>
            </NextBox>
            <Link href={`/project/national-patriots-and-veterans`} passHref prefetch={false}>
              <a aria-label={`national patriots and veterans 페이지로 이동`} rel="next">
                <StyledIcRightArrow alt="이동" />
              </a>
            </Link>
          </StyledBox>
        </Flex>
        <Footer />
      </Box>
    </>
  )
}

export const getStaticProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale!, ['common', 'wechelin'])),
    },
  }
}
