"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: "01",
    quote:
      "Shelter Care redefined our structural integrity. Their technical approach to Combo Waterproofing is unmatched in the UAE market.",
    name: "Ahmad Al-Maktoum",
    position: "Project Manager, Emaar Properties",
    img: "/images/roof.jpeg",
  },
  {
    id: "02",
    quote:
      "The precision they showed in the EIFS installation was surgical. Our building's thermal efficiency improved significantly.",
    name: "James Wilson",
    position: "Lead Architect, Signature Towers",
    img: "/images/rewater.jpeg",
  },
  {
    id: "03",
    quote:
      "Reliability is hard to find in waterproofing, but Shelter Care delivered exactly what they promised. Professional and efficient.",
    name: "Sarah Hussain",
    position: "Facility Manager, Dubai Marina Heights",
    img: "/images/instustrial.webp",
  },
];

export default function Testimonials() {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 🎨 Always-on Technical Illustrator Animation
      gsap.to(".blueprint-axis", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "linear",
      });

      gsap.fromTo(
        ".scanner-line",
        { y: -100 },
        { y: 800, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#fdfdfd] flex items-center overflow-hidden font-sans border-t border-zinc-100"
    >
      {/* 🎨 KINETIC ARCHITECTURAL BACKGROUND (Grid Removed - Illustrator Preserved) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          fill="none"
          className="scale-125 origin-center"
        >
          {/* Rotating Blueprint Elements */}
          <g className="blueprint-axis" transform="translate(600, 400)">
            <circle
              r="400"
              stroke="#87001a"
              strokeWidth="0.5"
              strokeDasharray="10 20"
            />
            <circle
              r="250"
              stroke="black"
              strokeWidth="0.2"
              strokeDasharray="5 5"
            />
            <path
              d="M-500,0 L500,0 M0,-500 L0,500"
              stroke="black"
              strokeWidth="0.1"
            />
          </g>

          <line
            className="scanner-line"
            x1="0"
            y1="0"
            x2="1200"
            y2="0"
            stroke="#87001a"
            strokeWidth="1.5"
          />

          {/* Data Labels */}
          <text
            x="50"
            y="50"
            fill="black"
            fontSize="9"
            className="font-mono uppercase tracking-[0.5em]"
          >
            Auth: Structural_Feedback_DXB
          </text>
          <text
            x="1000"
            y="750"
            fill="black"
            fontSize="9"
            className="font-mono uppercase tracking-[0.5em]"
          >
            Status: Validated
          </text>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: TEXT CONTENT AREA */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#87001a] block">
                Success Narrative
              </span>
              <h2 className="text-4xl md:text-[68px] font-black tracking-tighter text-zinc-900 leading-[0.9] uppercase italic">
                Trusted by <br />{" "}
                <span className="text-zinc-300 not-italic">UAE's Finest.</span>
              </h2>
            </div>

            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              autoplay={{ delay: 6000 }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              navigation={{ prevEl, nextEl }}
              className="h-fit"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="space-y-10">
                    <h3 className="text-zinc-900 text-2xl md:text-[44px] font-medium leading-[1.2] tracking-tight max-w-2xl">
                      "{item.quote}"
                    </h3>

                    <div className="flex items-center gap-6">
                      <div className="w-12 h-[1px] bg-[#87001a]"></div>
                      <div className="flex flex-col">
                        <p className="text-zinc-900 text-lg font-bold uppercase tracking-widest">
                          {item.name}
                        </p>
                        <p className="text-[#87001a] text-[9px] font-bold uppercase tracking-[0.4em]">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* MINIMAL NAVIGATION */}
            <div className="flex gap-4 pt-4">
              <button
                ref={(node) => setPrevEl(node)}
                className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-900 hover:bg-[#87001a] hover:border-[#87001a] hover:text-white transition-all duration-500 cursor-pointer"
              >
                <MoveLeft size={24} strokeWidth={1} />
              </button>
              <button
                ref={(node) => setNextEl(node)}
                className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-900 hover:bg-[#87001a] hover:border-[#87001a] hover:text-white transition-all duration-500 cursor-pointer"
              >
                <MoveRight size={24} strokeWidth={1} />
              </button>
            </div>
          </div>

          {/* RIGHT: THE ART GALLERY IMAGE FRAME */}
          <div className="lg:col-span-5 relative flex justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-zinc-100 shadow-2xl border border-zinc-100 group">
              {testimonials.map((item, index) => (
                <img
                  key={`img-${index}`}
                  src={item.img}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
                   ${activeIndex === index ? "opacity-100 scale-100 grayscale-0" : "opacity-0 scale-110 grayscale"}`}
                />
              ))}

              {/* Technical Overlay */}
              <div className="absolute top-6 left-6 z-20">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-sm text-[8px] font-mono text-white/80 uppercase tracking-widest border border-white/10">
                  Proj_Reference: UAE_STR_{activeIndex + 1}
                </span>
              </div>

              {/* Kinetic Index Counter */}
              <div className="absolute bottom-8 right-8 z-20 bg-white/90 backdrop-blur-xl w-24 h-24 rounded-full flex items-center justify-center border border-zinc-100 shadow-xl">
                <span className="text-zinc-900 font-black text-3xl tracking-tighter italic">
                  0{activeIndex + 1}
                </span>
                <div className="absolute inset-0 rounded-full border border-[#87001a] opacity-20 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FIXED SIDE LABELS */}
      <div className="absolute bottom-10 left-10 hidden md:block opacity-20">
        <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-[1em] rotate-90 origin-left">
          Data_Integrity_Locked
        </span>
      </div>
    </section>
  );
}
