export default function StickyActions() {
  return (
    <div className="fixed bottom-0 w-full bg-black flex">
      <a
        href="tel:+2348026329577"
        className="flex-1 text-center py-3 bg-brandGreen"
      >
        Call
      </a>
      <a
        href="https://wa.me/2348026329577"
        className="flex-1 text-center py-3 bg-brandRed"
      >
        WhatsApp
      </a>
      <button className="flex-1 py-3 border-t border-white/20">
        Quote
      </button>
    </div>
  )
}
