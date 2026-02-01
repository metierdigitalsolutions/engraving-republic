const services = [
  {
    title: "Laser Engraving",
    description:
      "High-precision engraving on metal, wood, acrylic, leather, and glass. Suitable for surface or deep engraving with permanent, high-resolution results.",
  },
  {
    title: "Laser Marking",
    description:
      "Ideal for barcodes, QR codes, serial numbers, and identification plates. Fast, clean, and perfect for industrial and promotional applications.",
  },
  {
    title: "Custom & Bulk Orders",
    description:
      "From a single personalized piece to large production runs. Branded merchandise, corporate gifts, and bespoke projects handled with consistency.",
  },
  {
    title: "On-Site Event Engraving",
    description:
      "Live mobile engraving for corporate events, exhibitions, weddings, and brand activations — delivered wherever your event takes place.",
  },
  {
    title: "Laser Cutting (Wood & Acrylic)",
    description:
      "Advanced CO₂ laser cutting for intricate designs and precise edges using the latest generation laser equipment.",
  },
  {
    title: "Express Engraving",
    description:
      "Rapid turnaround for urgent requests. Many designs engraved same-day or within 24–48 hours depending on complexity.",
  },
]


import useRevealOnScroll from "../hooks/useRevealOnScroll"

export default function Services() {
  
  const ref = useRevealOnScroll()

  return (
    <section className="bg-[#070707] text-white py-24" id="services">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl font-semibold mb-4">
            Services & Capabilities
          </h2>
          <p className="text-white/60">
            Precision laser engraving and cutting services designed for individuals,
            brands, and events — delivered with speed, accuracy, and consistency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, description }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/10">
      <h3 className="text-xl font-semibold text-white mb-4">
        {title}
      </h3>

      <p className="text-white/60 leading-relaxed">
        {description}
      </p>
    </div>
  )
}




