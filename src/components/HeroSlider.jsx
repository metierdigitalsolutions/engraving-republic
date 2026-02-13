import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "../animations";

const slides = [
  {
    eyebrow: "Precision Craftsmanship",
    title: "Engraving Without Compromise",
    subtitle:
      "Premium laser engraving for metal, wood, acrylic and bespoke materials.",
    image: "/images/hero/hero1.svg",
  },
  {
    eyebrow: "Designed To Last",
    title: "Every Detail Matters",
    subtitle:
      "From corporate branding to personal pieces - executed flawlessly.",
    image: "/images/hero/hero2.svg",
  },
  {
    eyebrow: "Crafted With Purpose",
    title: "Identity, Etched In Time",
    subtitle:
      "Industrial-grade engraving with refined aesthetics.",
    image: "/images/hero/hero3.svg",
  },
  {
    eyebrow: "On-Site & Studio Services",
    title: "Engraving Wherever You Are",
    subtitle:
      "Express turnaround, bulk orders, and live event engraving for brands and individuals.",
    image: "/images/hero/hero4.svg",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden bg-black _text-white">

      {/* BACKGROUND IMAGE SLIDER */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slide.image}
          src={slide.image}
          initial={{ opacity: 10, scale: 1.05 }}
          animate={{ opacity: 0.35, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* CONTENT */}
      <motion.div
        key={slide.title}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl text-center"
      >
        <p className="uppercase tracking-widest text-green-500 mb-4">
          {slide.eyebrow}
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {slide.title}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          {slide.subtitle}
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
      </motion.div>

      {/* DOT NAVIGATION */}
      <div className="absolute bottom-8 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-green-500" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
