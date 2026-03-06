// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const services = [
//   {
//     id: 1,
//     label: "Combo System",
//     title: "Combo",
//     highlight: "Waterproofing.",
//     desc: "Designing the structure of absolute protection with a 7-step seamless insulation system.",
//     subText:
//       "Every step is a module. Together, they form a system built to scale, protect and last.",
//     img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400",
//   },
//   {
//     id: 2,
//     label: "Insulation",
//     title: "EIFS",
//     highlight: "Finishing System.",
//     desc: "External Insulation & Finishing System designed for thermal excellence and aesthetics.",
//     subText:
//       "Energy-efficient facades through precision board fixing and mesh embedding.",
//     img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400",
//   },
//   {
//     id: 3,
//     label: "Restoration",
//     title: "Re",
//     highlight: "Waterproofing.",
//     desc: "Restoring the integrity of infrastructures through advanced restoration and reinforcement.",
//     subText:
//       "We breathe new life into existing foundations with precision and mastery.",
//     img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400",
//   },
//   {
//     id: 4,
//     label: "Heavy Duty",
//     title: "Membrane",
//     highlight: "Waterproofing.",
//     desc: "Industrial-grade torch-applied or self-adhesive membrane solutions for extreme durability.",
//     subText:
//       "A fortress against water ingress, built with high-performance materials.",
//     img: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=400",
//   },
//   {
//     id: 5,
//     label: "Internal",
//     title: "Wet Area",
//     highlight: "Proofing.",
//     desc: "Specialized moisture protection for bathrooms, kitchens, and critical water zones.",
//     subText:
//       "Invisible protection, unmatched reliability for your most critical zones.",
//     img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400",
//   },
//   {
//     id: 6,
//     label: "Resilience",
//     title: "GRP",
//     highlight: "Lining.",
//     desc: "Durable Glass Reinforced Plastic lining for chemical resistance and structural safety.",
//     subText:
//       "Industrial-grade resilience tailored for long-term structural safety.",
//     img: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=1200",
//   },
// ];

// export default function Services() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: `+=${services.length * 100}%`,
//           pin: true,
//           scrub: 0.2, // Snappy response
//         },
//       });

//       services.forEach((_, i) => {
//         if (i > 0) {
//           tl.to(
//             `.img-box-${i}`,
//             { clipPath: "inset(0% 0% 0% 0%)", duration: 1 },
//             i,
//           )
//             .to(`.content-${i}`, { opacity: 1, y: 0, duration: 1 }, i)
//             .to(`.content-${i - 1}`, { opacity: 0, y: -20, duration: 1 }, i)
//             .to(".blue-line", { y: i * 66, duration: 1 }, i)
//             .to(".label-roll", { y: -i * 40, duration: 1 }, i);
//         }
//       });
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="h-screen w-full bg-[#fbfbfb] text-[#1d1d1f] overflow-hidden font-sans"
//     >
//       <div className="max-w-[1600px] mx-auto h-full grid grid-cols-12 px-5 relative items-center">
//         {/* TOP LEFT: Label Roll */}
//         <div className="absolute top-[150px] left-20 z-50 h-[40px] overflow-hidden">
//           <div className="label-roll">
//             {services.map((s, i) => (
//               <span
//                 key={i}
//                 className="block text-2xl font-medium text-white h-[40px] tracking-tight"
//               >
//                 {s.label}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* LEFT CENTER: Exact Screenshot Scale Image */}
//         <div className="col-span-6 flex items-center justify-left pr-5">
//           <div className="relative w-full aspect-square max-w-[580px] bg-[#e5e5e7] rounded-sm overflow-hidden">
//             {services.map((s, i) => (
//               <div
//                 key={s.id}
//                 className={`img-box-${i} absolute inset-0 w-full h-full z-[${10 + i}]`}
//                 style={{
//                   clipPath:
//                     i === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
//                 }}
//               >
//                 <img
//                   src={s.img}
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT CENTER: Exact Typography */}
//         <div className="col-span-5 flex flex-col justify-between h-[65%] pl-10 relative">
//           {services.map((s, i) => (
//             <div
//               key={s.id}
//               className={`content-${i} absolute inset-0 flex flex-col justify-between py-4 ${
//                 i === 0 ? "opacity-100" : "opacity-0 translate-y-10"
//               }`}
//             >
//               <div>
//                 <h2 className="text-[44px] leading-[1.1] font-semibold tracking-tight max-w-[480px]">
//                   <span className="text-[#87001a]">{s.title}</span>{" "}
//                   {s.highlight} <br /> {s.desc}
//                 </h2>
//               </div>

//               <div className="space-y-8">
//                 <div className="space-y-2">
//                   <p className="text-[#86868B] text-[15px] font-semibold">
//                     Every service is a module.
//                   </p>
//                   <p className="text-[#86868B] text-[15px] leading-relaxed max-w-[340px]">
//                     {s.subText}
//                   </p>
//                 </div>
//                 <button className="flex items-center gap-1 text-[15px] font-medium text-[#1D1D1F]">
//                   Know more <span className="text-xl">↗</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* FAR RIGHT: Thumbnails with Blue Line */}
//         <div className="col-span-1 flex flex-col items-end justify-center gap-4 relative">
//           <div className="blue-line absolute right-[88px] top-[10px] w-[2px] h-[62px] bg-[#87001a] z-20 transition-all duration-300"></div>
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className="w-20 h-20 bg-white rounded-sm overflow-hidden border border-gray-100"
//             >
//               <img src={s.img} className="w-full h-full object-cover" alt="" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    label: "Combo System",
    title: "Combo",
    highlight: "Waterproofing.",
    desc: "Designing the structure of absolute protection with a 7-step seamless insulation system.",
    subText:
      "Every step is a module. Together, they form a system built to scale, protect and last.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400",
  },
  {
    id: 2,
    label: "Insulation",
    title: "EIFS",
    highlight: "Finishing System.",
    desc: "External Insulation & Finishing System designed for thermal excellence and aesthetics.",
    subText:
      "Energy-efficient facades through precision board fixing and mesh embedding.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400",
  },
  {
    id: 3,
    label: "Restoration",
    title: "Re",
    highlight: "Waterproofing.",
    desc: "Restoring the integrity of infrastructures through advanced restoration and reinforcement.",
    subText:
      "We breathe new life into existing foundations with precision and mastery.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400",
  },
  {
    id: 4,
    label: "Heavy Duty",
    title: "Membrane",
    highlight: "Waterproofing.",
    desc: "Industrial-grade torch-applied or self-adhesive membrane solutions for extreme durability.",
    subText:
      "A fortress against water ingress, built with high-performance materials.",
    img: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=400",
  },
  {
    id: 5,
    label: "Internal",
    title: "Wet Area",
    highlight: "Proofing.",
    desc: "Specialized moisture protection for bathrooms, kitchens, and critical water zones.",
    subText:
      "Invisible protection, unmatched reliability for your most critical zones.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400",
  },
  {
    id: 6,
    label: "Resilience",
    title: "GRP",
    highlight: "Lining.",
    desc: "Durable Glass Reinforced Plastic lining for chemical resistance and structural safety.",
    subText:
      "Industrial-grade resilience tailored for long-term structural safety.",
    img: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=1200",
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${services.length * 100}%`,
          pin: true,
          scrub: 0.3,
        },
      });

      services.forEach((_, i) => {
        if (i > 0) {
          tl.to(
            `.img-box-${i}`,
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1 },
            i,
          )
            // Ambient Light Sync
            .to(`.glow-${i}`, { opacity: 0.4, duration: 1 }, i)
            .to(`.glow-${i - 1}`, { opacity: 0, duration: 1 }, i)
            // Content Transition (Fixing Overlap)
            .to(
              `.content-${i}`,
              { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.8 },
              i,
            )
            .to(
              `.content-${i - 1}`,
              { opacity: 0, y: -30, pointerEvents: "none", duration: 0.8 },
              i,
            )
            // Blue Line Fix (Distance calculated: Thumb 80px + Gap 16px = 96px)
            .to(".blue-line", { y: i * 96, duration: 1 }, i)
            .to(".label-roll", { y: -i * 40, duration: 1 }, i);
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen w-full bg-[#fbfbfb] text-[#1d1d1f] overflow-hidden font-sans relative"
    >
      <div className="max-w-[1600px] mx-auto h-full grid grid-cols-12 px-5 relative items-center">
        {/* TOP LEFT: Label Roll */}
        <div className="absolute top-[150px] left-15 z-50 h-[40px] overflow-hidden">
          <div className="label-roll">
            {services.map((s, i) => (
              <span
                key={i}
                className="block text-2xl font-medium text-white h-[40px] tracking-tight"
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* AMBIENT LIGHT EFFECT (YouTube Style) */}
        <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
          {services.map((s, i) => (
            <div
              key={`glow-${i}`}
              className={`glow-${i} absolute inset-0 blur-[120px] rounded-full transition-opacity duration-1000 ${i === 0 ? "opacity-40" : "opacity-0"}`}
              style={{
                background: `radial-gradient(circle, #87001a 0%, transparent 70%)`,
              }}
            ></div>
          ))}
        </div>

        {/* LEFT CENTER: Main Image Container */}
        <div className="col-span-6 flex items-center justify-left pr-5 z-10">
          <div className="relative w-full aspect-square max-w-[580px] bg-[#e5e5e7] rounded-xl overflow-hidden shadow-2xl">
            {services.map((s, i) => (
              <div
                key={s.id}
                className={`img-box-${i} absolute inset-0 w-full h-full z-[${10 + i}]`}
                style={{
                  clipPath:
                    i === 0 ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
                }}
              >
                <img
                  src={s.img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CENTER: Typography Area */}
        <div className="col-span-5 flex flex-col justify-between h-[65%] pl-10 relative z-10">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`content-${i} absolute inset-0 flex flex-col justify-between py-4 ${
                i === 0
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 translate-y-10 pointer-events-none"
              }`}
            >
              <div>
                <h2 className="text-[44px] leading-[1.1] font-semibold tracking-tight max-w-[480px] text-gray-900">
                  <span className="text-[#87001a]">{s.title}</span>{" "}
                  {s.highlight} <br />
                  <span className="text-gray-800">{s.desc}</span>
                </h2>
              </div>

              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-gray-500 font-semibold text-[15px] uppercase tracking-wider">
                    Every service is a module.
                  </p>
                  <p className="text-gray-400 text-[15px] leading-relaxed max-w-[340px]">
                    {s.subText}
                  </p>
                </div>
                <button className="flex items-center gap-2 text-[15px] font-bold text-gray-900 group">
                  Know more{" "}
                  <span className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAR RIGHT: Thumbnails with Blue Line (Fixed) */}
        <div className="col-span-1 flex flex-col items-end justify-center gap-4 relative">
          <div className="blue-line absolute right-[88px] top-[10px] w-[2px] h-[62px] bg-[#87001a] z-20 transition-all duration-300 ease-out"></div>
          {services.map((s, i) => (
            <div
              key={i}
              className="w-20 h-20 bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm transition-all duration-300"
            >
              <img
                src={s.img}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
