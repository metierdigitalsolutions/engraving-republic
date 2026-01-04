const steps = [
  "Share your idea",
  "Design consultation",
  "Precision engraving",
  "Pickup, delivery or on-site",
]

export default function HowItWorks() {
  return (
    <section className="bg-[#0b0b0b] text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        
        <h2 className="text-3xl font-semibold mb-12">
          Our Process
        </h2>

        <ol className="space-y-8">
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
        </ol>
      </div>
    </section>
  )
}
