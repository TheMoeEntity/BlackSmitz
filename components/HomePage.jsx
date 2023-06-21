import Hero from "./Hero"
import Intro from "./Intro"
import styles from '../app/page.module.css'
import About from "./About"
import Projects from "./Projects"

const HomePage = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Intro />
      <Projects />
    </main>
  )
}

export default HomePage