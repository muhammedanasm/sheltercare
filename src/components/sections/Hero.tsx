"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  {
    id: "01",
    title: "Combo Waterproofing",
    desc: "Complete seamless insulation and multi-layer leak protection.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400",
  },
  {
    id: "02",
    title: "EIFS Insulation",
    desc: "External insulation & finishing system for modern facades.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400",
  },
  {
    id: "03",
    title: "Re-Waterproofing",
    desc: "Expert restoration and reinforcement of aging systems.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400",
  },
  {
    id: "04",
    title: "Membrane Works",
    desc: "Heavy-duty membrane solutions for maximum durability.",
    img: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=400",
  },
  {
    id: "05",
    title: "Wet Area Proofing",
    desc: "Specialized moisture protection for bathrooms & kitchens.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400",
  },
  {
    id: "06",
    title: "GRP Lining",
    desc: "Glass Reinforced Plastic lining for chemical resistance.",
    img: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=400",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#050505]">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10" />

      {/* Hero Content */}
      <div className="relative z-10 pl-8 md:pl-20">
        <p className=" text-white/60 font-bold tracking-[0.4em] uppercase text-xs mb-4">
          Licensed • Trusted • Transparent
        </p>
        <h1 className="text-6xl md:text-[96px] font-black leading-[0.9] tracking-tighter uppercase max-w-4xl">
          Modern <br /> <span className="text-gray-400">Waterproofing</span>{" "}
          <br /> Solutions
        </h1>
      </div>

      {/* Floating Right-Aligned Slider Section */}
      <div className="absolute bottom-12 right-0 w-full md:w-[40%] z-30">
        {/* Progress bar container */}
        <div className="max-w-[450px] px-8 md:px-0 mb-6 flex items-center gap-6 ml-auto md:mr-[40%]">
          <span className="text-[12px] font-mono text-white/50">
            0{activeIndex + 1}
          </span>
          <div className="h-[1px] flex-1 bg-white/10 relative">
            <div
              className="absolute h-full bg-white transition-all duration-700 ease-in-out"
              style={{
                width: `${100 / services.length}%`,
                left: `${(activeIndex * 100) / services.length}%`,
              }}
            />
          </div>
          <span className="text-[12px] font-mono text-white/50">
            0{services.length}
          </span>
        </div>

        {/* Swiper Wrapper to fix the "Left Bleeding" issue */}
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            loop={true}
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              1024: { slidesPerView: 1.4, spaceBetween: 25 }, // 1 full + 0.4 peek
            }}
            className="w-full !overflow-visible"
          >
            {services.map((s) => (
              <SwiperSlide key={s.id}>
                {/* EXACT PREMIUM GLASS CARD DESIGN */}
                <div className="flex items-center gap-6 p-6 md:p-3 rounded-[2rem] bg-white/[0.04] backdrop-blur-2xl border border-white/10 hover:bg-white/[0.07] transition-all duration-500 select-none">
                  {/* Image with matching rounded corners */}
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shrink-0 border border-white/5 bg-black/20">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover grayscale-[20%]"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 uppercase">
                      {s.title}
                    </h3>
                    <p className="text-[12px] md:text-sm text-gray-400 font-light leading-relaxed line-clamp-2">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
