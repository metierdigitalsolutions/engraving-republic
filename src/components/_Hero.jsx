import { useEffect, useState } from "react"

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-[#070707] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,255,170,0.08),transparent_55%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        
        <p
          className={`uppercase tracking-[0.3em] text-xs text-white/40 mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Precision Craftsmanship
        </p>

        <h1
          className={`text-5xl md:text-6xl font-bold leading-[1.05] transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Engraving
          <br />
          <span className="text-brandGreen/90">Without Compromise</span>
        </h1>

        <p
          className={`mt-8 text-lg text-white/60 max-w-xl mx-auto transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Premium laser engraving for brands, events and individuals who value detail and durability.
        </p>
      </div>
    </section>
  )
}
