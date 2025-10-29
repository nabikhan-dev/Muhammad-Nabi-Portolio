
import NavBar from "../src/components/navBar"
import HeroSection from '../src/sections/hero-Section'
import AboutSection from "./sections/project-Section"
import ServicesSection from "./sections/services-Section"
import ProcessSection from "./sections/workprocess-Section"
import TechSection from "./sections/tech-Section"
import ContactSection from "./sections/contact-Section"
import FooterSection from "./sections/footer-Section"
function App() {
  return (
   
      <div className="min-h-screen bg-bg text-desc scroll-smooth">

        <NavBar />
        <HeroSection />
        <AboutSection/>
        <ServicesSection />
        <ProcessSection />
        <TechSection />
        <ContactSection />
        <FooterSection />
      </div>

  )
}
export default App