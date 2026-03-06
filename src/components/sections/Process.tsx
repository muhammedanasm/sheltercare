"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const comboSteps = [
  {
    id: "01",
    title: "PU Foam Application",
    desc: "Creation of a seamless thermal barrier and base insulation layer to fill structural gaps.",
  },
  {
    id: "02",
    title: "UV Protection Shield",
    desc: "Specialized weather-resistant coating applied to protect against intense solar radiation.",
  },
  {
    id: "03",
    title: "Slope Engineering",
    desc: "Precision drainage gradients engineered using reinforced mortar and specialized Geotextile.",
  },
  {
    id: "04",
    title: "Concrete Fiber-Screed",
    desc: "Application of reinforced screed to drastically increase structural strength and crack resistance.",
  },
  {
    id: "05",
    title: "Precision Sealant",
    desc: "Meticulous application of approved sealants to all structural joints and penetrations.",
  },
  {
    id: "06",
    title: "Angle Fillet Formation",
    desc: "Creating radius fillets at junctions to ensure uninterrupted waterproofing continuity.",
  },
  {
    id: "07",
    title: "Final Protective Coat",
    desc: "Multi-layer hybrid finish that provides the ultimate impenetrable shield for the structure.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // പേജ് ലോഡ് ആകുമ്പോൾ സ്ക്രോൾ പൊസിഷൻ റീസെറ്റ് ചെയ്യാൻ
    ScrollTrigger.refresh();

    let ctx = gsap.context(() => {
      // 1. ALWAYS-ON BACKGROUND ANIMATION (ഇത് എപ്പോഴും കറങ്ങിക്കൊണ്ടിരിക്കും)
      //   gsap.to(".blueprint-spin", {
      //     rotate: 360,
      //     duration: 30,
      //     repeat: -1,
      //     ease: "linear",
      //   });

      // 2. SCANNING LINE ANIMATION (മുകളിൽ നിന്ന് താഴേക്ക് എപ്പോഴും മൂവ് ചെയ്യും)
      gsap.fromTo(
        ".scanning-bar",
        { y: 0 },
        { y: 1000, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" },
      );

      // 3. BOTTOM VERTICAL LINE ANIMATION
      gsap.fromTo(
        lineRef.current,
        { height: "20px", opacity: 0.2 },
        {
          height: "120px",
          opacity: 0.8,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#f8f9fb] py-32 px-6 md:px-20 overflow-hidden font-sans min-h-screen"
    >
      {/* 🎨 ALWAYS-ON TECHNICAL ILLUSTRATOR BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 1000"
          fill="none"
          className="scale-150 origin-center"
        >
          <pattern
            id="gridPattern"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="black"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />

          {/* <g className="blueprint-spin" transform="translate(600, 500)">
            <circle
              r="400"
              stroke="#87001a"
              strokeWidth="0.5"
              strokeDasharray="15 15"
            />
            <circle
              r="250"
              stroke="black"
              strokeWidth="0.2"
              strokeDasharray="5 5"
            />
            <line
              x1="-500"
              y1="0"
              x2="500"
              y2="0"
              stroke="black"
              strokeWidth="0.1"
            />
            <line
              x1="0"
              y1="-500"
              x2="0"
              y2="500"
              stroke="black"
              strokeWidth="0.1"
            />
          </g> */}

          <line
            className="scanning-bar"
            x1="0"
            y1="0"
            x2="1200"
            y2="0"
            stroke="#87001a"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-[#87001a]"></span>
              <span className="text-[#87001a] text-[10px] font-black uppercase tracking-[0.6em]">
                Methodology Protocol
              </span>
            </div>
            <h2 className="text-6xl md:text-[100px] font-black tracking-tighter text-[#1d1d1f] leading-[0.85] uppercase">
              Combo <br />{" "}
              <span className="text-gray-300 italic">Waterproofing</span>
            </h2>
          </div>
          <div className="max-w-xs border-l-2 border-[#87001a] pl-6 mb-4">
            <p className="text-gray-400 font-medium text-[10px] uppercase tracking-[0.3em] leading-relaxed">
              A precise seven-layer technical methodology ensuring 100%
              structural resilience.
            </p>
          </div>
        </div>

        {/* 7-STEP CARDS GRID (Default Visible) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comboSteps.map((step) => (
            <div
              key={step.id}
              className="bg-white/80 backdrop-blur-md p-10 rounded-sm border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#87001a]/20 transition-all duration-500 flex flex-col min-h-[350px] group"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-mono font-bold text-gray-300 tracking-widest uppercase italic group-hover:text-[#87001a]">
                  Step_{step.id}
                </span>
                <div className="w-2 h-2 rounded-full bg-[#87001a] animate-pulse"></div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-[#1d1d1f] mb-6 leading-tight uppercase italic group-hover:text-[#87001a] transition-colors">
                {step.title}
              </h3>

              <p className="text-gray-500 text-[15px] leading-relaxed font-light mb-auto">
                {step.desc}
              </p>

              <div className="pt-8 border-t border-gray-50 flex items-center justify-between mt-8">
                <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest">
                  Sector_Validated
                </span>
                <span className="text-[18px] font-black text-gray-200 italic group-hover:text-[#87001a]/10 transition-colors">
                  {step.id}
                </span>
              </div>
            </div>
          ))}

          {/* FINAL RED CARD */}
          <div className="bg-[#87001a] p-12 rounded-sm shadow-2xl flex flex-col justify-center items-center text-center group relative overflow-hidden min-h-[350px]">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700"></div>
            <h4 className="text-white text-3xl font-black italic tracking-tighter uppercase mb-4 leading-none">
              Engineering <br /> Verified.
            </h4>
            <p className="text-white/50 text-[10px] uppercase tracking-widest leading-relaxed">
              All protocols strictly comply with <br /> UAE high-performance
              standards.
            </p>
            <div className="w-16 h-[1px] bg-white/20 mt-12 group-hover:w-24 transition-all"></div>
          </div>
        </div>
      </div>

      {/* 🚀 ANIMATED BOTTOM LINE SECTION */}
      <div className="mt-40 flex flex-col items-center">
        <span className="text-[9px] font-bold tracking-[0.8em] uppercase text-gray-300 mb-8">
          Structural Continuity
        </span>
        <div
          ref={lineRef}
          className="w-[1.5px] bg-gradient-to-b from-[#87001a] to-transparent origin-top"
        ></div>
      </div>
    </section>
  );
}
