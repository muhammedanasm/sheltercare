"use client";
import { useEffect, useState, useRef } from "react";
import { Star } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeLayer, setActiveLayer] = useState(0); // 0: Hybrid, 1: PU, 2: Concrete

  const trustImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop",
  ];

  useEffect(() => {
    import("gsap").then(({ gsap }) => {
      // 1. Scanning Beam Animation
      gsap.fromTo(
        ".scanner-beam",
        { top: "0%" },
        {
          top: "100%",
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      );

      // 2. Layers subtle entrance
      gsap.from(".layer-item", {
        x: -50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".layer-item",
          start: "top 80%",
        },
      });
      // 💡 3. NEW: Always-on pulsing animation for the status dots
      // ഇത് ഡോട്ടുകളെ ലോഗോ കളറിൽ (#87001a) പതുക്കെ മിന്നിക്കും
      gsap.to(".active-dot", {
        opacity: 0.3,
        scale: 0.8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.3,
          from: "random",
        },
      });
    });
  }, []);

  useEffect(() => {
    // വീഡിയോ ഇതിനകം റെഡി ആണോ എന്ന് ചെക്ക് ചെയ്യുന്നു
    const checkVideo = () => {
      if (videoRef.current && videoRef.current.readyState >= 3) {
        setIsLoaded(true);
      }
    };

    checkVideo();

    // കൂടുതൽ സുരക്ഷയ്ക്ക് വേണ്ടി ഒരു വിൻഡോ ലോഡ് ലിസണർ കൂടി
    window.addEventListener("load", checkVideo);
    return () => window.removeEventListener("load", checkVideo);
  }, []);

  const layers = [
    {
      id: "03",
      name: "HYBRID SHIELD",
      specs: "Final Waterproofing Coat | UV-R8 Protection",
      details:
        "A multi-layer hybrid finish that serves as the ultimate impenetrable shield for the entire structure.",
      stats: { temp: "24.2°C", strength: "High" },
    },
    {
      id: "02",
      name: "PU FOAM INSULATION",
      specs: "45kg/m³ Density | Seamless Thermal Barrier",
      details:
        "High-density Polyurethane foam creates a seamless insulation base layer to eliminate structural vulnerabilities.",
      stats: { temp: "28.5°C", strength: "Medium" },
    },
    {
      id: "01",
      name: "CONCRETE SUBSTRATE",
      specs: "Structural Slab | Cleaned & Primed",
      details:
        "The foundation layer is thoroughly cleaned and treated with structural primers to ensure maximum bonding.",
      stats: { temp: "30.1°C", strength: "Base" },
    },
  ];

  useEffect(() => {
    // Scanner beam automation logic can go here if needed
  }, [activeLayer]);

  return (
    <section className="bg-white pt-22 pb-10 px-3 md:px-3">
      {/* The Floating Dark Container */}
      <div className="relative w-full min-h-[90vh] bg-[#0d0d0d] rounded-[1rem] md:rounded-[13px] overflow-hidden flex flex-col justify-between  py-20">
        <div className="px-8 md:px-20">
          {/* Content Wrap */}
          <div className="max-w-[1400px] z-10">
            {/* Label Tag */}
            <div className="mb-12">
              <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
                / Precision Structural Protection
              </span>
            </div>

            {/* Exact Screenshot Typography & Color */}
            <h1 className="text-5xl md:text-[80px] font-semibold tracking-tight text-[#f2f2f2] leading-[1] max-w-5xl mb-24">
              Protecting structures to <br /> endure smarter and <br /> longer
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end w-full mb-20">
              {/* Description Color Update */}
              <p className="text-white/70 text-lg md:text-[16px] font-normal leading-relaxed max-w-sm">
                Shelter Care partners with leading developers to redefine
                structural safety. We translate technical engineering into
                reliable waterproofing and insulation solutions using
                high-quality coatings across the UAE and GCC.
              </p>

              {/* Exact Trusted By Design Match */}
              <div className="flex flex-col items-start md:items-end gap-3 self-end">
                <div className="flex -space-x-3">
                  {trustImages.map((src, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-[10px] border-2 border-[#0d0d0d] bg-gray-800 overflow-hidden shadow-lg"
                    >
                      <img
                        src={src}
                        alt={`Trusted client ${i + 1}`}
                        className="w-full h-full object-cover grayscale-[0.2]"
                      />
                    </div>
                  ))}
                </div>
                <div className="md:text-right">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#f2f2f2] mb-1">
                    Trusted by 100+ Businesses
                  </p>
                  <div className="flex items-center md:justify-end gap-[2px] text-white/90">
                    <div className="flex gap-[2px]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} strokeWidth={1} />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-[#f2f2f2] ml-1">
                      / 5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/5 z-10 shadow-2xl bg-[#0a0a0a]">
            {/* 1. YOUTUBE STYLE SKELETON LOADER */}
            {!isLoaded && (
              <div className="absolute inset-0 z-20 bg-[#121212]">
                {/* Moving Shimmer Light Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skeleton-shimmer"></div>

                {/* Center Loading Indicator (Optional but Premium) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-12 h-12 border-2 border-white/20 border-t-white/80 rounded-full animate-spin"></div>
                </div>

                {/* Minimal Bottom Label */}
                <div className="absolute bottom-8 left-8 flex items-center gap-2 opacity-20">
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-white">
                    Initialising_Stream
                  </span>
                </div>
              </div>
            )}

            {/* 2. THE VIDEO */}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setIsLoaded(true)}
              className={`relative z-10 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                isLoaded
                  ? "opacity-100 grayscale-0 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* Subtle Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 z-11 pointer-events-none"></div>
          </div>

          {/* --- ULTRA-PREMIUM STRUCTURAL SCAN SECTION --- */}
          <div className="mt-40 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center overflow-hidden pb-40">
            {/* Left Side: Animated Layer Scanner */}
            <div className="lg:col-span-6 relative h-[600px] flex items-center justify-center">
              {/* Background Grid */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              ></div>

              <div className="relative w-full max-w-sm flex flex-col gap-4 perspective-1000">
                {/* Dynamic Scanning Beam - Moves based on active layer */}
                <div
                  className="scanner-beam absolute left-[-10%] w-[120%] h-[1.5px] bg-[#87001a] z-50 shadow-[0_0_15px_#87001a] transition-all duration-700 ease-in-out"
                  style={{ top: `${activeLayer * 32 + 15}%` }}
                ></div>

                {layers.map((layer, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveLayer(index)}
                    className={`relative group cursor-pointer transition-all duration-500 rounded-2xl border backdrop-blur-3xl p-6 flex items-center
                  ${
                    activeLayer === index
                      ? "bg-white/[0.08] border-[#87001a]/50 shadow-[0_0_40px_rgba(135,0,26,0.15)] scale-105"
                      : "bg-white/[0.02] border-white/5 opacity-40 hover:opacity-100"
                  }`}
                  >
                    {/* Layer Number & Line */}
                    <div
                      className={`w-1 h-10 rounded-full mr-6 transition-all duration-500 ${activeLayer === index ? "bg-[#87001a]" : "bg-white/20"}`}
                    ></div>

                    <div className="flex-1">
                      <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
                        Phase_{layer.id}
                      </p>
                      <h4 className="text-white text-lg font-black tracking-tight uppercase transition-colors group-hover:text-white">
                        {layer.name}
                      </h4>
                      {/* Tiny Specs (Shown when active) */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${activeLayer === index ? "max-h-10 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                      >
                        <p className="text-[10px] font-mono text-[#87001a] font-bold italic">
                          {layer.specs}
                        </p>
                      </div>
                    </div>

                    {/* Active Indicator Pulse */}
                    {activeLayer === index && (
                      <div className="absolute right-6 w-2 h-2 bg-[#87001a] rounded-full animate-ping"></div>
                    )}
                  </div>
                ))}

                {/* Technical Detail Card (Appears on the side) */}
                <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-40 hidden xl:block">
                  <div className="p-4 bg-[#111] border border-white/10 rounded-xl shadow-2xl animate-fade-in">
                    <p className="text-[8px] font-mono text-white/40 uppercase mb-2">
                      Live_Diagnostics
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-[8px] text-white/60">TEMP</span>
                        <span className="text-[9px] text-white font-bold">
                          {layers[activeLayer].stats.temp}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[8px] text-white/60">STATUS</span>
                        <span className="text-[9px] text-green-500 font-bold uppercase">
                          Optimal
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Content Block */}
            <div className="lg:col-span-6 space-y-12 pl-10" id="about">
              <div className="space-y-6">
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/80">
                  / Who We Are
                </span>
                <h2 className="text-5xl md:text-[56px] font-medium tracking-tighter text-[#f2f2f2] leading-[1] pt-3">
                  Technical precision, Redefining structural longevity.
                </h2>
              </div>

              <div className="space-y-8">
                <p className="text-white/40 text-lg md:text-[18px] font-normal leading-relaxed max-w-xl">
                  We Shelter Care Technical Services L.L.C. established in 2017
                  with an aim of providing superior quality waterproofing
                  systems at an affordable rate in the United Arab Emirates.
                </p>

                <div className="flex flex-col gap-4">
                  {[
                    "High-grade industrial coatings",
                    "Expert structural audits",
                    "Trained ETICS Application",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-1 h-1 bg-[#87001a] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button className="group relative px-10 py-4 bg-white text-black rounded-full text-[14px] font-bold overflow-hidden transition-all duration-500 hover:text-white">
                <span className="relative z-10">Book a Call</span>
                <div className="absolute inset-0 bg-[#87001a] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </div>
          </div>

          {/* Optional Background Subtle Gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 blur-[120px] pointer-events-none"></div>
        </div>
        {/* --- PREMIUM STATISTICS GRID (Exact Screenshot Match) --- */}
        <div className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              val: "500+",
              label: "successful structural projects completed",
              dots: 1,
            },
            {
              val: "12",
              label: "GCC cities served with premium coatings",
              dots: 2,
            },
            {
              val: "100%",
              label: "high-performance structural reliability",
              dots: 3,
            },
            {
              val: "07+",
              label: "years of technical engineering expertise",
              dots: 4,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="stat-card bg-[#13181e] border border-white/[0.05] rounded-[32px] p-10 h-40 flex flex-col justify-between transition-all duration-500 hover:bg-[#111] group"
            >
              {/* Top Section: Dots Pattern */}
              <div className="flex justify-end">
                <div className="grid grid-cols-2 gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                  {[...Array(4)].map((_, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`w-1.5 h-1.5 rounded-sm transition-all duration-500 ${
                        dotIdx < stat.dots
                          ? "bg-white active-dot shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                          : "bg-white/10"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Middle Section: Big Number */}
              <div>
                <h3 className="text-white text-4xl font-medium tracking-tighter leading-none">
                  {stat.val}
                </h3>
              </div>

              {/* Bottom Section: Description */}
              <div className="flex justify-end pt-4">
                <p className="text-white/70 text-[11px] font-normal uppercase tracking-widest text-right max-w-[250px] leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
