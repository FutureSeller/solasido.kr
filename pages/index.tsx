import styles from './index.module.scss'

import Main from '../components/Main'
import About from '../components/About'

export default function Home() {
  return (
    <main className={styles.Home}>
      <Main />
      <About />
    </main>
  )
}
