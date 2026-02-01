import Header from "./components/Header"
import Hero from "./components/HeroSlider"
import TrustBar from "./components/TrustBar"
import Services from "./components/Services"
import HowItWorks from "./components/HowItWorks"
import WhyChooseUs from "./components/WhyChooseUs"
import CTA from "./components/CTA"
import Portfolio from "./components/Portfolio"
// import About from "./components/About"
// import Materials from "./components/Materials"
// import Gallery from "./components/Gallery"
// import StickyActions from "./components/StickyActions"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-brandDark text-white">
      <Header />
      <Hero />
      <Services />
      <TrustBar />
      <HowItWorks />
      <WhyChooseUs />
      <Portfolio />
      <CTA />

      {/* <About />
      <Materials />
      <Gallery /> */}
      <Footer />
      {/* <StickyActions /> */}
    </div>
  )
}
