import { useEffect, useState } from "react"

import { motion } from "framer-motion";
import { fadeUp } from "../animations";


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
  {
    eyebrow: "On-Site & Studio Services",
    title: "Engraving Wherever You Are",
    subtitle:
      "Express turnaround, bulk orders, and live event engraving for brands and individuals.",
  },
]

{/* ================= HERO ================= */}
export default function HeroSlider() {
  return ( 
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="relative max-w-4xl_ text-center"
    >
      <main className="bg-black text-white mt-20">
        <section className="relative min-h-[90vh] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-[url('/images/hero/engraving-bg.jpg')] bg-cover bg-center opacity-30"></div>

          <div className="relative max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Premium Custom Engraving for Gifts, Brands & Businesses
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300">
              From one-off personalized gifts to large corporate orders, we engrave
              with precision, speed, and lasting quality.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2348026329577"
                className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-semibold transition"
              >
                Get a Quote on WhatsApp
              </a>

              <a
                href="#portfolio"
                className="border border-white/30 hover:border-white px-8 py-4 rounded-lg transition"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  )
}
