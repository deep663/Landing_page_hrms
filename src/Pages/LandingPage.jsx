import ContactUs from "../components/ContactUs"
import Hero from "../components/Hero"
import Nav from "../components/Nav"

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