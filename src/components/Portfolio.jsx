import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Portfolio() {
    {/* ================= PORTFOLIO ================= */}
  return (
      
    <section id="portfolio" className="_bg-neutral-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Work Speaks for Itself
            </h2>

            <p className="text-gray-400 mb-10">
            Every piece is engraved with care - no shortcuts.
            </p>

            <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="pb-10"
            >
            {[
                "acrylic.png",
                "event-engraving.png",
                "laser-1.png",
                "laser-2.png",
                "metal-engraving.png",
                "wood-engraving.png",
            ].map((img, i) => (
                <SwiperSlide key={i}>
                <div className="rounded-xl overflow-hidden">
                    <motion.img
                    src={`/images/portfolio/${img}`}
                    alt="Engraved product"
                    initial={{ opacity: 0, scale: 0.95 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="h-72 w-full object-cover hover:scale-105 transition"
                    />
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </section>


  );
}
