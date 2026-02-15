import { motion } from "framer-motion";
{/* ================= FINAL CTA ================= */}
export default function CTA() {
  return (
    <main className="_bg-black _text-white">
      <section className="py-24 px-6 text-center">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-24 px-6 text-center"
        >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Engrave Something Special?
        </h2>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Whether it’s a single gift or a bulk corporate order - we’re ready.
        </p>

        <motion.a
          href="https://wa.me/2348026329577"
          className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-lg font-semibold transition"
        >
          Get a Quote on WhatsApp
        </motion.a>
        </motion.section>
      </section>
    </main>
  )
}