import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-[#070707]/80 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="font-semibold tracking-wide text-white text-lg">
          {/* Engraving<span className="text-brandGreen/80">Republic</span> */}
          <img
              src="/logo.png"
              alt="Engraving republic logo"
              className="w-40 h-10 md:w-80 md:h-20 hover:scale-105 transition-transform"
            />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-sm text-white/60">
          {["Services", "Materials", "Work", "Process"].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-white transition"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="px-6 py-2 rounded-full border border-white/20 text-sm text-white hover:border-white/40 transition">
            Request Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/70"
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#070707] border-t border-white/5 px-6 py-6 space-y-4 text-white/70">
          {["Services", "Materials", "Work", "Process"].map(link => (
            <a key={link} href="#" className="block">
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
