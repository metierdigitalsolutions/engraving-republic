const items = [
  "24–48 Hour Turnaround",
  "Industrial-Grade Lasers",
  "Corporate & Private Clients",
  "On-Site & Studio Engraving",
]

export default function TrustBar() {
  return (
    <section className="bg-[#070707] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item}
            className="text-sm text-white/60 text-center"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
