"use client";
import { useState, useEffect, useRef } from "react";
import { Plus, X } from "lucide-react";
import gsap from "gsap"; // ഇത് വിട്ടുപോയിട്ടുണ്ടാകും
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ഇതും

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "001",
    label: "Combo Waterproofing",
    title: "Combo Waterproofing",
    desc: "A comprehensive 7-step system providing high-performance thermal insulation and absolute leak protection for concrete rooftops.",
    img: "/images/combowater.webp",
    steps: [
      "Polyurethane Foam Application",
      "UV Protection Coating",
      "Slope Preparation with Reinforcement",
      "Concrete Screed with Fiber",
      "Sealant Application",
      "Angle Fillet Formation",
      "Final Waterproofing Coat",
    ],
  },
  {
    id: "002",
    label: "EIFS Insulation",
    title: "Operational Excellence (EIFS)",
    desc: "External Insulation & Finishing System (ETICS). A multi-layered exterior wall system for energy efficiency and aesthetics.",
    img: "/images/operation.webp",
    steps: [
      "Surface Preparation",
      "Primer Application",
      "Adhesive Application",
      "Insulation Board Fixing",
      "Mechanical Fixing",
      "Base Coat Application",
      "Fiberglass Mesh Embedding",
      "Second Base Coat",
      "Curing Time",
      "Primer for Finish Coat",
      "Finish Coat (Texture)",
      "Sealant & Detailing",
    ],
  },
  {
    id: "003",
    title: "Re-Waterproofing Works",
    desc: "Expert restoration of aging structural waterproofing systems using hybrid cementitious coatings and geotextile layers.",
    img: "/images/rewater.jpeg",
    steps: [
      "First Coat – Cementitious",
      "Second Coat – Cementitious",
      "Geotextile Layer Integration",
      "Final Coat – Hybrid Finish",
    ],
  },
  {
    id: "004",
    title: "Industrial Lining & Membrane",
    desc: "High-durability GRP lining and heavy-duty membrane systems for basements, tanks, and industrial wet areas.",
    img: "/images/instustrial.webp",
    steps: [
      "Substrate Priming",
      "Membrane Torch/Self-Adhesive",
      "GRP Fiber Integration",
      "Final Leak Testing",
    ],
  },
];

export default function Offers() {
  const [active, setActive] = useState<string | null>(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. 🖼️ IMAGE MASK REVEAL (ഇമേജ് താഴെ നിന്ന് പതുക്കെ തെളിയാൻ)
      gsap.utils.toArray<HTMLElement>(".reveal-mask").forEach((img) => {
        gsap.fromTo(
          img,
          { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // 2. 🪜 STEPS STAGGERED ENTRANCE (ഓരോ സ്റ്റെപ്പും വരിവരിയായി വരാൻ)
      gsap.utils.toArray<HTMLElement>(".group-card-reveal").forEach((grid) => {
        gsap.from(grid.querySelectorAll(".group\\/card"), {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
          },
        });
      });

      // 3. 💨 KINETIC TEXT PARALLAX (ബാക്ക്ഗ്രൗണ്ട് ടെക്സ്റ്റ് പതുക്കെ നീങ്ങാൻ)
      gsap.utils.toArray<HTMLElement>(".kinetic-text").forEach((text) => {
        gsap.to(text, {
          xPercent: -20,
          scrollTrigger: {
            trigger: text,
            scrub: 1,
          },
        });
      });
    }, containerRef); // containerRef നിങ്ങളുടെ മെയിൻ സെക്ഷൻ ref ആണെന്ന് ഉറപ്പുവരുത്തുക

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="services"
      className="bg-white py-32 px-5 md:px-10 font-sans text-zinc-900 pt-0"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* 1. EXACT GRID LAYOUT: LABEL LEFT | CONTENT RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-24">
          <div className="md:col-span-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-[9px] font-bold uppercase tracking-widest text-black">
              / WHAT WE OFFER
            </span>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl md:text-[54px] font-medium tracking-tighter leading-[1.05] max-w-4xl">
              Helping structures succeed through <br />
              strategy and execution
            </h2>
          </div>
        </div>

        {/* 2. THE IMMERSIVE TECHNICAL EXHIBITION (Awwwards Style) */}
        <div className="relative mt-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative min-h-screen flex flex-col justify-center border-t border-zinc-100 py-32 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative z-10">
                {/* LEFT COLUMN: Sticky Content */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32 space-y-10">
                    <div className="space-y-6">
                      <div className="overflow-hidden">
                        <span className="text-[11px] font-mono font-black text-[#87001a] tracking-[1em] block mb-4 animate-pulse uppercase">
                          PROTOCOL_REF_{service.id}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-[46px] font-black tracking-tighter leading-[0.85] text-zinc-900 uppercase italic">
                        {service.title.split(" ")[0]} <br />
                        <span className="text-zinc-200 not-italic">
                          {service.title.split(" ").slice(1).join(" ")}
                        </span>
                      </h3>
                      <p className="text-zinc-500 text-base md:text-lg font-light leading-relaxed max-w-sm">
                        {service.desc}
                      </p>
                    </div>

                    {/* TECHNICAL AUDIT BOX */}
                    <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-3xl space-y-5 max-w-sm shadow-sm">
                      <div className="flex justify-between items-center border-b border-zinc-200 pb-3">
                        <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">
                          Engineering_Audit
                        </span>
                        <span className="text-[10px] font-bold text-green-600 uppercase italic">
                          Verified
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-[10px] font-bold text-zinc-800 uppercase italic">
                            Structural_Efficiency
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400">
                            OPTIMAL
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[10px] font-bold text-zinc-800 uppercase italic">
                            Material_Grade
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400">
                            INDUSTRIAL_A+
                          </span>
                        </div>
                        <div className="flex justify-between border-t border-zinc-200 pt-3">
                          <span className="text-[10px] font-bold text-zinc-800 uppercase italic">
                            Building_Compliance
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400">
                            UAE_CODE_2026
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Mini Image with Reveal Animation */}
                    <div className="reveal-mask hidden lg:block w-full aspect-video rounded-2xl overflow-hidden opacity-50 hover:opacity-100 transition-all">
                      <img
                        src={service.img}
                        className="w-full h-full object-cover"
                        alt="Detail"
                      />
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: 3-Column Steps Grid */}
                <div className="lg:col-span-8">
                  {/* Main Image with Reveal Animation */}
                  <div className="reveal-mask relative w-full aspect-video rounded-[3rem] overflow-hidden mb-12 shadow-2xl border border-zinc-100 bg-zinc-50">
                    <img
                      src={service.img}
                      className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1px] bg-zinc-100 border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-sm">
                    {service.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-8 flex flex-col justify-between min-h-[180px] hover:bg-zinc-50 transition-all duration-500 group/card"
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-mono text-zinc-400 font-black group-hover/card:text-[#87001a] transition-colors tracking-widest">
                            PHASE_0{idx + 1}
                          </span>
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-100 group-hover/card:bg-[#87001a] transition-all"></div>
                        </div>
                        <h4 className="text-[13px] md:text-[15px] font-bold text-zinc-800 leading-tight tracking-tight uppercase mt-5">
                          {step}
                        </h4>
                      </div>
                    ))}

                    <div className="bg-[#87001a] p-10 flex flex-col items-center justify-center text-center">
                      <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.5em] mb-3">
                        Integrity_System
                      </span>
                      <p className="text-white text-base font-black italic tracking-tighter uppercase leading-none">
                        Certified <br /> Protection
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Kinetic Text */}
              <div className="absolute bottom-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none z-0">
                <span className="text-[99px] font-black uppercase tracking-tighter whitespace-nowrap block">
                  {service.title} • {service.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM SECTION: IMPACT & CONFIDENCE (Exact Screenshot Match) --- */}
        <div className="mt-40">
          {/* Header & Intro Text */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4"></div>
            <div className="md:col-span-8 space-y-8">
              <h2 className="text-[24px] md:text-[28px] font-medium tracking-tight leading-none text-zinc-900">
                Delivering structural impact with confidence
              </h2>
              <p className="text-zinc-500 text-lg md:text-[17px] font-normal leading-relaxed max-w-2xl">
                At Shelter Care, every service is designed to create measurable
                results while maintaining the highest standards of technical
                integrity. We value your structural assets and handle all
                projects with engineered precision in accordance with our{" "}
                <span className="underline underline-offset-4 cursor-pointer text-zinc-900 font-medium">
                  Quality Policy
                </span>
                .
              </p>
            </div>
          </div>

          {/* Large Rounded Image Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="aspect-[16/11] rounded-[2.5rem] overflow-hidden bg-zinc-100 shadow-sm border border-zinc-100">
              <img
                src="/images/waterproof.jpeg"
                alt="Structural Work"
                className="w-full h-full object-cover grayscale-[0.1] hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="aspect-[16/11] rounded-[2.5rem] overflow-hidden bg-zinc-100 shadow-sm border border-zinc-100">
              <img
                src="/images/roof.jpeg"
                alt="Engineering Team"
                className="w-full h-full object-cover grayscale-[0.1] hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>

          {/* Call to Action Grid (2 Columns) */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 px-2">
            {/* Left Column */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-[28px] font-semibold tracking-tight text-zinc-900">
                Protect your structural investments today
              </h3>
              <p className="text-zinc-500 text-[16px] leading-relaxed font-normal">
                Shelter Care combines technical mastery and innovation to help
                infrastructures grow stronger and more durable. Explore how our
                systems unlock long-term structural safety for your project.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#87001a] transition-all duration-500 shadow-lg shadow-black/5">
                Learn More
              </button>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-[28px] font-semibold tracking-tight text-zinc-900">
                Partner with technical experts you can trust
              </h3>
              <p className="text-zinc-500 text-[16px] leading-relaxed font-normal">
                Our team works closely with developers to deliver reliable
                waterproofing results while maintaining the highest standards of
                precision and accountability. Discover the value Shelter Care
                brings to every site.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#87001a] transition-all duration-500 shadow-lg shadow-black/5">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
