import Contact from './Contact'
import Experience from './Experience'
import Intro from './Intro'
import Projects from './Projects'
import Techs from './Techs'

export default function Page() {
  return (
    <main>
      <Intro />
      <Contact />
      <Techs />
      <Experience />
      <Projects />
      <div className="h-20" />
    </main>
  )
}
