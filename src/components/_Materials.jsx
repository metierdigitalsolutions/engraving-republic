export const materials = [
  "Metal (stainless steel, aluminium)",
  "Wood",
  "Acrylic",
  "Glass",
  "Leather",
  "Select plastics",
];


export default function Materials() {
  return (
    <section className="bg-[#070707] text-white py-20_" id="materials">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-semibold mb-12">
          Materials
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
          {materials.map((m) => (
            <div
              key={m}
              className="text-white/60 hover:text-white transition"
            >
              {m}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
