import { useParams } from "react-router-dom";
import { services } from "../data/services";
import { motion } from "framer-motion";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <div className="p-10 text-center">Service not found.</div>;
  }

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            {service.title}
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            {service.intro}
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-6">
          {service.description.map((text, i) => (
            <p key={i} className="text-gray-300 leading-relaxed">
              {text}
            </p>
          ))}
        </div>

        {/* USE CASES */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Common Use Cases
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {service.useCases.map((item, i) => (
              <li
                key={i}
                className="bg-neutral-900 p-4 rounded-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/2348026329577"
            className="inline-block bg-green-500 text-black px-10 py-4 rounded-lg font-semibold"
          >
            Request a Quote on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
