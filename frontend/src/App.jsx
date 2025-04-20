import LandingPage from "./pages/LandingPage.jsx"
import About from "./components/About.jsx"
import Navbar from "./components/Navbar.jsx"
import SkillsSection from "./components/SkillsSection.jsx"
import Projects from "./components/Projects.jsx"
import ContactSection from "./components/ContactSection.jsx"


function App() {

  return (
    <div className="bg-black ">
      <Navbar/>
      <LandingPage/>
      <About/>
      <SkillsSection/>
      <Projects/>
      <ContactSection/>
    </div>
  )
}

export default App
