"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";

const services = [
  {
    id: "001",
    label: "Combo Waterproofing",
    title: "Combo Waterproofing",
    desc: "A comprehensive 7-step system providing high-performance thermal insulation and absolute leak protection for concrete rooftops.",
    img: "/images/combo.jpeg",
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

  return (
    <section className="bg-white py-32 px-5 md:px-10 font-sans text-zinc-900 pt-0">
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

        {/* 2. ACCORDION LIST */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Spacing to match label on top */}
          <div className="md:col-span-3"></div>

          <div className="md:col-span-9 border-t border-zinc-100">
            {services.map((service) => (
              <div
                key={service.id}
                className="border-b border-zinc-100 overflow-hidden"
              >
                <div
                  onClick={() =>
                    setActive(active === service.id ? null : service.id)
                  }
                  className="flex items-center justify-between py-5 cursor-pointer group hover:bg-zinc-50/50 px-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-10 md:gap-20">
                    <span className="text-[12px] font-mono font-bold text-black/70">
                      / {service.id}
                    </span>
                    <h3 className="text-[20px] md:text-[26px] font-medium tracking-tight text-zinc-900 group-hover:translate-x-1 transition-transform">
                      {service.title}
                    </h3>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${active === service.id ? "bg-[#87001a] text-white rotate-45" : "bg-zinc-900 text-white"}`}
                  >
                    {active === service.id ? (
                      <X size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </div>
                </div>

                {/* EXPANDABLE CONTENT */}
                <div
                  className={`transition-all duration-700 ease-in-out ${active === service.id ? "max-h-[1200px] opacity-100 pb-20" : "max-h-0 opacity-0"}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-2">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
                      <img
                        src={service.img}
                        alt=""
                        className="w-full h-full object-cover grayscale-[0.2]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-zinc-500 text-lg leading-relaxed font-light mb-10">
                        {service.desc}
                      </p>

                      {/* DETAILED STEPS LIST */}
                      <div className="space-y-4">
                        <p className="text-[10px] font-bold text-[#87001a] uppercase tracking-[0.3em] mb-4">
                          Technical Process
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                          {service.steps.map((step, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-4 text-xs font-medium text-zinc-600 border-b border-zinc-50 pb-2"
                            >
                              <span className="text-[9px] font-mono text-zinc-300">
                                0{idx + 1}
                              </span>
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
