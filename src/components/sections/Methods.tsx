"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveUpRight, Zap, Target, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const methods = [
  {
    icon: <Target size={40} strokeWidth={1} />,
    tag: "TECHNICAL AUDIT",
    title:
      "We base every project on deep technical insights and structural audits",
    desc: "Shelter Care uses advanced site analysis to guide waterproofing strategies and deliver tangible long-term protection.",
  },
  {
    icon: <Zap size={40} strokeWidth={1} />,
    tag: "PRECISION DRIVEN",
    title:
      "We work closely with project teams to turn technical plans into real results",
    desc: "Our expert applicators ensure that every layer of insulation and coating is applied with surgical precision.",
  },
  {
    icon: <ShieldCheck size={40} strokeWidth={1} />,
    tag: "FUTURE READY",
    title: "We help structures withstand extreme climate and scale longevity",
    desc: "We apply high-grade coatings designed to adapt to the harsh UAE weather while supporting sustainable building growth.",
  },
];

export default function Methods() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".method-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-32 px-6 md:px-12 font-sans text-zinc-900"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* TOP LABEL */}
        <div className="mb-20">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            / OUR METHODS
          </span>
        </div>

        {/* MAIN HEADLINE (Exact Typography) */}
        <h2 className="text-5xl md:text-[84px] font-medium tracking-tighter leading-[1] max-w-5xl mb-24">
          Bridging engineering, precision <br />
          and delivering tangible <br />
          structural protection
        </h2>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {methods.map((method, i) => (
            <div
              key={i}
              className="method-card bg-[#f1f3f6] rounded-[32px] p-10 md:p-12 min-h-[550px] flex flex-col justify-between hover:bg-[#ebedf0] transition-colors duration-500"
            >
              {/* TOP: ICON */}
              <div className="text-zinc-800 opacity-90">{method.icon}</div>

              {/* BOTTOM: CONTENT */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white text-[10px] font-bold uppercase tracking-wider text-zinc-500 border border-zinc-100 mb-6">
                    {method.tag}
                  </span>
                  <h3 className="text-2xl md:text-[34px] font-semibold tracking-tight leading-[1.15] text-zinc-900">
                    {method.title}
                  </h3>
                </div>
                <p className="text-zinc-500 text-lg font-normal leading-relaxed max-w-[320px]">
                  {method.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
