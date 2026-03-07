"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [counter, setCounter] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 2. COUNTER LOGIC (0 to 100)
      const countObj = { val: 0 };
      gsap.to(countObj, {
        val: 100,
        duration: 3,
        ease: "power4.inOut",
        onUpdate: () => setCounter(Math.floor(countObj.val)),
      });

      // 3. LOGO REVEAL (Blur-to-Sharp)
      tl.fromTo(
        ".loader-logo",
        { opacity: 0, filter: "blur(20px)", scale: 0.9 },
        {
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          duration: 1.5,
          ease: "expo.out",
        },
      );

      // 4. THE MOSAIC EXIT (The Awwwards Secret)
      // 100 എത്തിയ ശേഷം ടൈലുകൾ ഓരോന്നായി സ്കെയിൽ ഡൗൺ ആകും
      tl.to(".loader-inner", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        delay: 1.5,
      })
        .to(".tile", {
          scale: 0,
          duration: 0.8,
          stagger: {
            grid: [5, 10],
            from: "random", // ഓരോ തവണയും ഓരോ രീതിയിൽ തുറക്കും
            amount: 0.6,
          },
          ease: "power4.inOut",
        })
        .to(preloaderRef.current, {
          display: "none",
        });
    }, preloaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* 🧩 MOSAIC TILES GRID (Reveals the site) */}
      <div className="absolute inset-0 grid grid-cols-5 md:grid-cols-10 grid-rows-5 pointer-events-auto">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="tile w-full h-full bg-[#0a0a0a] border-[0.5px] border-white/5"
          />
        ))}
      </div>

      {/* 🎯 CENTER CONTENT */}
      <div className="loader-inner relative z-[100] flex flex-col items-center">
        {/* Fixed Logo Image */}
        <div className="loader-logo mb-12 w-48 md:w-64">
          <img
            src="/images/logo.jpg"
            alt="Shelter Care"
            className="w-full h-auto object-contain brightness-110"
          />
        </div>

        {/* Minimal Kinetic Counter */}
        <div className="flex flex-col items-center">
          <span className="text-white text-7xl md:text-[130px] font-black tracking-tighter block leading-none select-none italic">
            {counter}
          </span>
          <div className="flex items-center gap-4 mt-6">
            <span className="w-12 h-px bg-[#87001a]"></span>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.8em]">
              Initializing
            </span>
            <span className="w-12 h-px bg-[#87001a]"></span>
          </div>
        </div>
      </div>

      {/* TECHNICAL DATA ON CORNER */}
      <div className="absolute bottom-10 right-10 z-[100] text-right hidden md:block opacity-20">
        <div className="text-[9px] font-mono text-white flex flex-col gap-1 tracking-widest uppercase">
          <span>SC_DXB_SYSTEM_V.1</span>
          <span>BUILD: 2026_PROTOTYPE</span>
        </div>
      </div>
    </div>
  );
}
