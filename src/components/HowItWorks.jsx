import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";

const steps = [
  "Share your idea",
  "Design consultation",
  "Precision engraving",
  "Pickup, delivery or on-site service",
]

{/* ================= HOW IT WORKS ================= */}
export default function HowItWorks() {
  return (
    <section id="process" className="bg-red-100 py-20 px-6_">
        {/* <section className="bg-[#0b0b0b] text-white py-20" id="work"> */}
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-semibold text-gray-700 mb-12">
          Our Process
        </h2>

        {/* <ol className="space-y-8">
          {steps.map((step, i) => (
            <li key={step} className="flex gap-6">
              <span className="text-brandGreen/70 font-semibold">
                0{i + 1}
              </span>
              <span className="text-white/60">
                {step}
              </span>
            </li>
          ))}
        </ol> */}
        
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // className="grid md:grid-cols-3 gap-10 text-center"
            >
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                step: "1",
                title: "Share Your Idea",
                desc: "Send your design, logo, or concept via WhatsApp.",
              },
              {
                step: "2",
                title: "We Prepare & Confirm",
                desc: "Mockups, pricing, and timeline confirmation.",
              },
              {
                step: "3",
                title: "We Engrave & Deliver",
                desc: "Precision engraving and delivery or pickup.",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
              <div key={i}>
                <div className="text-green-500 text-5xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-green-600 text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-900">{item.desc}</p>
              </div>
              </motion.div>
            ))}
          </div>
            </motion.div>
          
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/234XXXXXXXXXX"
              className="inline-block bg-green-700 hover:bg-green-600 text-white/90 px-10 py-4 rounded-lg font-semibold transition"
            >
              Start on WhatsApp
            </a>
          </div>
      </div>
    </section>

  )
}
