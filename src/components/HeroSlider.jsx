import { useEffect, useState } from "react"

const slides = [
  {
    eyebrow: "Precision Craftsmanship",
    title: "Engraving Without Compromise",
    subtitle:
      "Premium laser engraving for metal, wood, acrylic and bespoke materials.",
  },
  {
    eyebrow: "Designed To Last",
    title: "Every Detail Matters",
    subtitle:
      "From corporate branding to personal pieces - executed flawlessly.",
  },
  {
    eyebrow: "Crafted With Purpose",
    title: "Identity, Etched In Time",
    subtitle:
      "Industrial-grade engraving with refined aesthetics.",
  },
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
    className="relative min-h-screen flex items-center text-white overflow-hidden bg-black"
    style={{
        backgroundImage: "url('/hero/engraving-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
    >
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

  {/* Vignette */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85))]" />

  {/* Accent glow */}
  <div className="relative_ max-w-5xl mx-auto px-6 text-center">

        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
            `}
          >
            <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-6">
              {slide.eyebrow}
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
              {slide.title}
            </h1>

            <p className="mt-8 text-lg text-white/60 max-w-xl mx-auto">
              {slide.subtitle}
            </p>

            <div className="mt-12 flex gap-6">
              <button className="px-8 py-4 rounded-full bg-brandGreen text-black font-medium shadow-xl shadow-brandGreen/20">
                Request a Quote
              </button>

              <button className="px-8 py-4 rounded-full border border-white/15 text-white/80 hover:border-white/30 transition">
                View Portfolio
              </button>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition
                ${i === index ? "bg-brandGreen" : "bg-white/30"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
