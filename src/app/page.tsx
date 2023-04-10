import Contact from '~/components/Contact'
import Experience from '~/components/Experience'
import Intro from '~/components/Intro'
import Projects from '~/components/Projects'
import Techs from '~/components/Techs'

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
