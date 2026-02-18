import ContactSection from "./components/ContactSection"
import Contributions from "./components/Contributions"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contributions/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App
