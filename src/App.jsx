import Education from "./components/Education"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"


const App = () => {
  return (
    <div className="min-h-[200vh]">
      <Navbar/>
      <Hero/>
      <Education/>
      <Skills/>
    </div>
  )
}

export default App
