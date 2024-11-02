import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Nav from "../components/Nav"

function LandingPage() {
  return (
    <div className="bg-white text-gray-800">
        <Header />
        <Nav />
        <Hero />
        <Footer />
    </div>
  )
}

export default LandingPage