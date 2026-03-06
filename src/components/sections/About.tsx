"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx = gsap.context(() => {
      // 1. Technical Drawing Animation
      gsap.fromTo(
        ".draw-path",
        { strokeDashoffset: 1500, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 0.2,
          duration: 3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1,
          },
        },
      );

      // 2. Content Staggered Reveal
      gsap.from(".reveal-up", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".content-trigger",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen w-full bg-[#050505] py-32 px-8 md:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* 🎨 ANIMATED TECHNICAL ILLUSTRATOR BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
        >
          {/* Subtle Grid */}
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="white"
                strokeWidth="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Architectural Drawing Lines */}
          <path
            className="draw-path"
            d="M100,100 L1100,100 L1100,700 L100,700 Z"
            stroke="white"
            strokeWidth="0.5"
            strokeDasharray="1500"
          />
          <path
            className="draw-path"
            d="M300,100 V700 M800,100 V700"
            stroke="white"
            strokeWidth="0.3"
            strokeDasharray="1000"
          />
          <path
            className="draw-path"
            d="M100,400 H1100"
            stroke="#87001a"
            strokeWidth="0.8"
            strokeDasharray="1000"
          />

          {/* Data Points */}
          <circle
            cx="300"
            cy="400"
            r="4"
            fill="#87001a"
            className="animate-ping"
          />
          <text
            x="315"
            y="390"
            fill="white"
            fontSize="9"
            className="font-mono opacity-30 uppercase tracking-[0.4em]"
          >
            Struct_Ref_DUBAI_2017
          </text>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto content-trigger">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT: HEADING & EXPERIENCE (Sticky on Desktop) */}
          {/* LEFT: HEADING & EXPERIENCE */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32 h-fit">
            <div className="reveal-up space-y-2">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1px] bg-[#87001a]"></span>
                <span className="text-[#87001a] text-[10px] font-black uppercase tracking-[0.5em] block">
                  Our Heritage
                </span>
              </div>
              <h2 className="text-6xl md:text-[90px] font-black uppercase tracking-tighter leading-[0.8] text-white">
                BORN IN <br />
                <span
                  className="text-white/20 italic"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
                >
                  DUBAI
                </span>{" "}
                <br />
                EST. 2017
              </h2>
            </div>

            <div className="reveal-up relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200"
                alt="Dubai Architecture"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Technical Label on Image */}
              <div className="absolute bottom-4 left-4 flex flex-col">
                <span className="text-[8px] font-mono text-white/40 tracking-widest uppercase">
                  Location Reference
                </span>
                <span className="text-[10px] font-mono text-white uppercase tracking-wider italic">
                  25.2048° N, 55.2708° E
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: DETAILED CONTENT */}
          <div className="lg:col-span-7 space-y-16 lg:pt-10">
            {/* Mission Statement */}
            <div className="reveal-up space-y-6">
              <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight italic uppercase">
                "Superior Quality at an Affordable Rate"
              </h3>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                We Shelter Care Technical Services L.L.C. were established with
                an aim of providing superior quality waterproofing systems in
                the United Arab Emirates. We are growing as a leading applicator
                with reliable waterproofing and insulation systems with good
                quality chemical and coatings from leading manufacturers in
                U.A.E. and other GCC countries.
              </p>
            </div>

            {/* Specialization Grid */}
            <div className="reveal-up grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
              <div className="space-y-4">
                <h4 className="text-[#87001a] text-xs font-black uppercase tracking-[0.3em]">
                  Advanced PU Roofing
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Operated from Dubai, we specialize in the application of
                  weatherproofing systems with PU-based products for villas,
                  residential, commercial buildings, and industrial sheds.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#87001a] text-xs font-black uppercase tracking-[0.3em]">
                  Structural Solutions
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our expertise extends to wet area treatments with
                  two-component cementitious compounds, floor coatings,
                  self-leveling compounds, and specialized injection
                  waterproofing for basements.
                </p>
              </div>
            </div>

            {/* Specialized ETICS Badge */}
            <div className="reveal-up bg-white/[0.03] p-8 md:p-12 rounded-[2rem] border border-white/10 flex flex-col md:flex-row gap-8 items-center group hover:bg-white/[0.05] transition-all">
              <div className="text-center md:text-left shrink-0">
                <span className="text-[10px] font-bold text-[#87001a] uppercase tracking-widest">
                  Global Standards
                </span>
                <h4 className="text-white text-4xl font-black italic tracking-tighter mt-2">
                  ETICS
                </h4>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed border-l border-white/10 md:pl-8">
                We are expertly trained to apply{" "}
                <strong className="text-white font-medium">
                  ETICS (Exterior Thermal Insulation Composite System)
                </strong>{" "}
                on external walls, ensuring maximum energy efficiency and
                thermal protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
