import { useEffect, useState } from "react"
import Hero from "../components/HeroSlider"
import Services from "../pages/Services"
import TrustBar from "../components/TrustBar"
import HowItWorks from "../components/HowItWorks"
import WhyChooseUs from "../components/WhyChooseUs"
import CTA from "../components/CTA"
import Portfolio from "../components/Portfolio"

export default function Home() {
  return ( 
     <div className="bg-brandDark text-white">
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
        {/* <StickyActions /> */}
    </div>
  )
}