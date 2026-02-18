import Contributions from "./components/Contributions"
import Education from "./components/Education"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


const App = () => {
  return (
    <div className="min-h-[200vh]">
      <Navbar/>
      <Hero/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contributions/>
    </div>
  )
}

export default App
