export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#070707]/80 backdrop-blur-2xl border-b border-white/5">
      <div className="flex items-center justify-between px-6 h-18 max-w-7xl mx-auto">
        
        <span className="font-semibold tracking-wide text-white text-lg">
          Engraving<span className="text-brandGreen/80">Republic</span>
        </span>

        <button className="text-white/70 hover:text-white transition">
          Menu
        </button>
      </div>
    </header>
  )
}
