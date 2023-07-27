import Hero from "./Hero"
import Intro from "./Intro"
import About from "./About"
import Projects from "./Projects"
import Team from "./Team"

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Intro />
      <Projects />
      <Team />
    </main>
  )
}

export default HomePage