import ContactUs from "../components/landingpage/ContactUs"
import Hero from "../components/landingpage/Hero"
import Nav from "../components/landingpage/Nav"
import Header from "../components/common/Header"

function LandingPage() {
  return (
    <>
     <Header />
    <div className="bg-white text-gray-800">
        <Nav />
        <Hero />
        <ContactUs/>    
    </div>
    </>
  )
}

export default LandingPage