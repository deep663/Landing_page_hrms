import ContactUs from "../components/landingpage/ContactUs"
import Hero from "../components/landingpage/Hero"
import Nav from "../components/landingpage/Nav"

function LandingPage() {
  return (
    <div className="bg-white text-gray-800">
        <Nav />
        <Hero />
        <ContactUs/>    
    </div>
  )
}

export default LandingPage