import { useState } from "react"

const images = [
  "/gallery/laser-1.png",
  "/gallery/laser-2.png",
  "/gallery/metal-engraving.png",
  "/gallery/wood-engraving.png",
  "/gallery/acrylic.png",
  "/gallery/event-engraving.png",
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="px-4 py-10 bg-black text-white">
      <h2 className="text-xl font-bold mb-4">Our Work</h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-3">
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => setActiveIndex(index)}
            className="relative aspect-square overflow-hidden rounded-xl bg-white/5"
          >
            <img
              src={src}
              alt="Engraving work"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          
          {/* Close */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 text-white text-3xl"
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev */}
          {activeIndex > 0 && (
            <button
              onClick={() => setActiveIndex(activeIndex - 1)}
              className="absolute left-4 text-white text-4xl"
            >
              ‹
            </button>
          )}

          {/* Image */}
          <img
            src={images[activeIndex]}
            alt="Engraving preview"
            className="max-h-[85vh] max-w-[90vw] rounded-xl"
          />

          {/* Next */}
          {activeIndex < images.length - 1 && (
            <button
              onClick={() => setActiveIndex(activeIndex + 1)}
              className="absolute right-4 text-white text-4xl"
            >
              ›
            </button>
          )}
        </div>
      )}
    </section>
  )
}
