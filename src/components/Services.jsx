const services = [
  "Express Engraving",
  "On-Site Event Engraving",
  "Custom Engraving",
  "Laser Cutting (Wood & Acrylic)",
  "Plastic Engraving",
]

import useRevealOnScroll from "../hooks/useRevealOnScroll"

export default function Services() {
  
  const ref = useRevealOnScroll()

  return (
    <section className="bg-[#0b0b0b] text-white py-20">
      <div
        // ref={ref}
        className="max-w-6xl mx-auto px-6 reveal reveal-slow"
      >
        
        <h2 className="text-3xl font-semibold mb-12">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div key={service} className="group">
              <h3 className="text-xl font-medium group-hover:text-brandGreen transition">
                {service}
              </h3>
              <p className="mt-3 text-white/50 max-w-md">
                Meticulously executed laser engraving designed to last and impress.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


