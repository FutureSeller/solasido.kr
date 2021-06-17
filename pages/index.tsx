import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Navigation from '../components/common/Navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>SOLASIDO design</title>
        <meta name="description" content="SOLASIDO's Portfolio" />
        <meta name="og:title" content="SOLASIDO design" />
        <meta name="og:description" content="SOLASIDO's Portfolio" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="SOLASIDO design" />
        <meta name="twitter:description" content="SOLASIDO's Portfolio" />
      </Head>
      <main>
        <Navigation />
        <Main />
        <About />
        <Project />
        <Contact />
      </main>
    </>
  )
}
