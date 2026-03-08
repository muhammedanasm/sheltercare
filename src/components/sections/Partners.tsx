"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { MoveLeft, MoveRight, Quote } from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const clientLogos = [
  "/images/client.png",
  "/images/client1.png",
  "/images/client.png",
  "/images/client1.png",
  "/images/client.png",
];

const testimonials = [
  {
    id: "01",
    quote:
      "Shelter Care redefined our structural integrity. Their technical approach to Combo Waterproofing is unmatched in the UAE market.",
    name: "Ahmad Al-Maktoum",
    position: "Project Manager, Emaar Properties",
    img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800",
  },
  {
    id: "02",
    quote:
      "The precision they showed in the EIFS installation was surgical. Our building's thermal efficiency improved significantly.",
    name: "James Wilson",
    position: "Lead Architect, Signature Towers",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  },
  {
    id: "03",
    quote:
      "Reliability is hard to find in waterproofing, but Shelter Care delivered exactly what they promised. Professional and efficient.",
    name: "Sarah Hussain",
    position: "Facility Manager, Dubai Marina Heights",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
  },
];

export default function Partners() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // അനന്തമായി നീങ്ങുന്ന സ്മൂത്ത് അനിമേഷൻ
      gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white font-sans">
      {/* 1. CINEMATIC VIDEO SECTION (Light Theme Wrapper) */}
      <div className=" px-3 md:px-3">
        <div className=" relative w-full aspect-video md:aspect-[21/9] rounded-t-[13px] md:rounded-t-[13px] rounded-b-none overflow-hidden bg-zinc-100 shadow-2xl">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
          >
            <source src="/videos/partner.mp4" type="video/mp4" />
          </video>

          {/* Overlay Content (Exact Match) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12 z-10">
            <h2 className="text-white text-4xl md:text-[72px] font-medium tracking-tighter leading-none mb-8 max-w-4xl">
              Building structural safety <br /> that drives lasting value
            </h2>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["TRUSTED EXPERTS", "UAE COMPLIANT", "LONG-TERM PROTECTION"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-bold tracking-widest text-white uppercase"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <p className="text-white/80 text-sm md:text-[18px] font-normal leading-relaxed max-w-2xl mb-10">
              We collaborate with developers and architects to protect
              infrastructures with technical precision. Our sustainable approach
              ensures structures remain secure against time and climate,
              creating measurable growth for your projects.
            </p>

            <button className="bg-white text-black px-10 py-3.5 rounded-full text-sm font-bold hover:bg-[#87001a] hover:text-white transition-all duration-500">
              Consult an Expert
            </button>
          </div>

          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* 2. INFINITE LOGO MARQUEE (Dark Theme Section - Exact Screenshot Style) */}
        <div
          className="bg-[#050505] py-15 overflow-hidden relative rounded-bl-[13px] rounded-br-[13px]"
          ref={marqueeRef}
        >
          {/* Side Fades - പ്രീമിയം ലുക്കിനായി */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20"></div>

          <div className="marquee-track flex items-center w-fit">
            {/* ലൂപ്പ് കൃത്യമാകാൻ ആവർത്തിക്കുന്നു */}
            {[
              ...clientLogos,
              ...clientLogos,
              ...clientLogos,
              ...clientLogos,
            ].map((logo, i) => (
              <div
                key={i}
                className={`flex-shrink-0 flex items-center justify-center 
              w-[240px] h-[140px]           
             
              
                              
              transition-all duration-500 group
              ${
                i % 2 === 0
                  ? " border-b rounded-b-[24px]" // Open Top (ബോർഡർ താഴെ മാത്രം)
                  : " border-t rounded-t-[24px]" // Open Bottom (ബോർഡർ മുകളിൽ മാത്രം)
              }
            `}
              >
                {/* Logo - Exact white style from screenshot */}
                <img
                  src={logo}
                  alt="Partner"
                  className="w-28 h-auto opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
