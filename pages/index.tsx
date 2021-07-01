import Meta from '../components/common/Meta'
import Main from '../components/Main'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/Contact'
import NavigationContainer from '../components/common/NavigationContainer'
import { DeviceTypeContextProvider } from '../context/DeviceTypeContext'

export default function Home() {
  return (
    <>
      <Meta title="SOLASIDO design" description="SOLASIDO's Portfolio" />
      <main>
        <DeviceTypeContextProvider>
          <NavigationContainer />
        </DeviceTypeContextProvider>
        <Main />
        <About />
        <Project />
        <Contact />
      </main>
    </>
  )
}
