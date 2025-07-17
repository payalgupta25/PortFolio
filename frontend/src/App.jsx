import About from "./components/About.jsx"
import Navbar from "./components/Navbar.jsx"
import SkillsSection from "./components/SkillsSection.jsx"
import Projects from "./components/Projects.jsx"
import ContactSection from "./components/ContactSection.jsx"
import CertificateSection from "./components/CertificateSection.jsx"
import Experience from "./components/Experience.jsx"

function App() {

  return (
    <div className="overflow-x-hidden bg-black">
      <Navbar/>
      <About/>
      <SkillsSection/>
      {/* <CertificateSection/> */}
      <Experience/>
      <Projects/>
      <ContactSection/>
    </div>
  )
}

export default App
