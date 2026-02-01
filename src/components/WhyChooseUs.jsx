
{/* ================= WHY US ================= */}
export default function whyChooseUs() {
  return (
    <main className="bg-black text-white">
      <section id="why-choose-us" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Engraving Republic?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "High-precision laser engraving",
            "Professional support from start to finish",
            "Flexible order sizes - from one piece to bulk",
            "Clean, sharp, long-lasting finish",
            "No rushed jobs, full attention",
            "Fast turnaround times",
            "Strict quality assurance",
            "On-site engraving convenience",
          ].map((point, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-neutral-900 p-6 rounded-xl"
            >
              <span className="text-green-500 text-xl">✔</span>
              <p className="text-gray-300">{point}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

