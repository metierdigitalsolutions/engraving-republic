const items = [
  "⭐ Trusted by businesses across Nigeria",
  "⚡ Fast turnaround",
  "🎯 Precision engraving",
  "🛠 On-Site & Studio Engraving",
  "Corporate & Private Clients",
  // "24–48 Hour Turnaround",
  // "Industrial-Grade Lasers",
  // "Premium materials",
  "",
]

{/* ================= TRUST STRIP ================= */}
export default function TrustBar() {
  return (
    <section className="bg-green-900 py-6 border-t border-white/5 rounded rounded-lg">
    {/* // <section className="bg-[#070707] border-t border-white/5"> */}
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
      {/* <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6"> */}
        {items.map((item) => (
          <span
            key={item}
            className="text-sm text-white text-center"
          >
            {item}
          </span>
        ))}
      </div>
    </section>

  )
}
