import Hero from "./Hero"
import Intro from "./Intro"
import styles from '../app/page.module.css'
import About from "./About"

const HomePage = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Intro />
    </main>
  )
}

export default HomePage