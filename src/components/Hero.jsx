export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#070707] text-white overflow-hidden">

      {/* Subtle Grain / Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,255,170,0.08),transparent_55%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        
        <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-6">
          Precision Craftsmanship
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-[1.05]">
          Engraving
          <br />
          <span className="text-brandGreen/90">Without Compromise</span>
        </h1>

        <p className="mt-8 text-lg text-white/60 max-w-xl mx-auto">
          Premium laser engraving for brands, events and individuals who value detail, durability and identity.
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <button className="px-8 py-4 rounded-full bg-brandGreen text-black font-medium hover:scale-[1.02] transition shadow-xl shadow-brandGreen/20">
            Request a Quote
          </button>

          <button className="px-8 py-4 rounded-full border border-white/15 text-white/80 hover:border-white/30 transition">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}
