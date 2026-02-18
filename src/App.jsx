import Education from "./components/Education"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div className="min-h-[200vh]">
      <Navbar/>
      <Hero/>
      <Education/>
    </div>
  )
}

export default App
