export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Engraving Republic
            </h3>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Precision laser engraving for individuals, brands, and events.
              Crafted with accuracy, speed, and attention to detail.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-white/60">
              <li>Laser Engraving</li>
              <li>Laser Marking</li>
              <li>Custom & Bulk Orders</li>
              <li>On-Site Event Engraving</li>
              <li>Laser Cutting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-white/60">
              <li>
                📧{" "}
                <a
                  href="mailto:engraver@engravingrepublic.com"
                  className="hover:text-white transition"
                >
                  engraver@engravingrepublic.com
                </a>
              </li>
              <li>
                📞{" "}
                <a
                  href="tel:+2348026329577"
                  className="hover:text-white transition"
                >
                  +234 802 632 9577
                </a>
              </li>
              <li>
                📍 2B, Sunday Street, off Ikorodu Road, Palm Grove, Lagos
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>
            © {new Date().getFullYear()} Engraving Republic. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Website by{" "}
            <a
              href="https://www.metierdigitals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition underline underline-offset-2"
            >
              Métier Digital Solutions
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}
