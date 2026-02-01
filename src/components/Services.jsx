import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";

const services = [
  {
    title: "Personalized Gifts",
    // img: "/images/services/gifts.jpg",
    img: "/images/services/design-1.svg",
    desc: "Birthdays, weddings, anniversaries, keepsakes.",
  },
  {
    title: "Corporate & Promotional Items",
    // img: "/images/services/corporate.jpg",
    img: "/images/services/design-2.svg",
    desc: "Branded gifts, plaques, awards, souvenirs.",
  },
  {
    title: "Brand & Logo Engraving",
    // img: "/images/services/logo.png",
    img: "/images/services/design-3.svg",
    desc: "Clean, professional engraving for your brand.",
  },
  {
    title: "Custom & Bulk Orders",
    // img: "/images/services/bulk.jpg",
    img: "/images/services/design-4.svg",
    desc: "One piece or one thousand — same quality.",
  },
  // {
  //   title: "Laser Engraving",
  //   description:
  //     "High-precision engraving on metal, wood, acrylic, leather, and glass. Suitable for surface or deep engraving with permanent, high-resolution results.",
  // },
  // {
  //   title: "Laser Marking",
  //   description:
  //     "Ideal for barcodes, QR codes, serial numbers, and identification plates. Fast, clean, and perfect for industrial and promotional applications.",
  // },
  // {
  //   title: "Custom & Bulk Orders",
  //   description:
  //     "From a single personalized piece to large production runs. Branded merchandise, corporate gifts, and bespoke projects handled with consistency.",
  // },
  // {
  //   title: "On-Site Event Engraving",
  //   description:
  //     "Live mobile engraving for corporate events, exhibitions, weddings, and brand activations — delivered wherever your event takes place.",
  // },
  // {
  //   title: "Laser Cutting (Wood & Acrylic)",
  //   description:
  //     "Advanced CO₂ laser cutting for intricate designs and precise edges using the latest generation laser equipment.",
  // },
  // {
  //   title: "Express Engraving",
  //   description:
  //     "Rapid turnaround for urgent requests. Many designs engraved same-day or within 24–48 hours depending on complexity.",
  // },
]


import useRevealOnScroll from "../hooks/useRevealOnScroll"

{/* ================= SERVICES ================= */}
export default function Services() {
  
  const ref = useRevealOnScroll()

  return (
    <section className="bg-[#070707] text-white py-24" id="services">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl font-semibold mb-4">
            {/* Services & Capabilities */}
            What We Engrave
          </h2>
          <p className="text-white/60">
            Precision laser engraving and cutting services designed for individuals,
            brands, and events - delivered with speed, accuracy, and consistency.
          </p>
        </div>

        <div>
          <motion.div
  variants={stagger}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  // className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>
          {services.map(service => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-xl overflow-hidden bg-neutral-900"
            >
              <ServiceCard
                key={service.title}
                img={service.img}
                title={service.title}
                description={service.desc}
              />
            </motion.div>
          ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ img, title, description }) {
  return (
    <div
      // key={i}
      className="rounded-xl overflow-hidden bg-neutral-900"
    >
     <img
        src={img}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}




