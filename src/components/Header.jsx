import { useState } from "react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Materials", href: "#materials" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-[#070707]/80 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/logo.png"
            alt="Engraving Republic logo"
            className="w-40 md:w-72 hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-sm text-white/60">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="mailto:engraver@engravingrepublic.com"
            className="px-6 py-2 rounded-full border border-white/20 text-sm text-white hover:border-white/40 transition"
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden text-white/70"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#070707] border-t border-white/5 px-6 py-6 space-y-4 text-white/70">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block hover:text-white transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="mailto:engraver@engravingrepublic.com"
            onClick={() => setOpen(false)}
            className="block pt-4 border-t border-white/10 text-white"
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  )
}
