import Header from "./components/Header"
import Hero from "./components/HeroSlider"
import TrustBar from "./components/TrustBar"
import Services from "./components/Services"
import Materials from "./components/Materials"
import HowItWorks from "./components/HowItWorks"
import Gallery from "./components/Gallery"
// import CTA from "./components/CTA"
// import Footer from "./components/Footer"
import StickyActions from "./components/StickyActions"

export default function App() {
  return (
    <div className="bg-brandDark text-white">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Materials />
      <HowItWorks />
      <Gallery />
      {/* <CTA /> */}
      {/* <Footer /> */}
      <StickyActions />
    </div>
  )
}
