"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const loadingWords = [
  "INITIALIZING",
  "STRUCTURAL ANALYSIS",
  "MOISTURE SCANNING",
  "CORE CALIBRATION",
  "SHELTER CARE CORE",
];

const companyName = "SHELTER CARE";

export default function Preloader() {
  const [counter, setCounter] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. ALWAYS-ON BACKGROUND SCANNER (Subtle)
      gsap.fromTo(
        ".scanner-bar",
        { yPercent: -100 },
        {
          yPercent: 600,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      );

      // 2. LOGO TYPING/REVEAL ANIMATION
      tl.fromTo(
        ".char",
        { opacity: 0, y: 15, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.07,
          ease: "expo.out",
        },
      );

      // 3. COUNTER & WORD CYCLING (0 to 100)
      const countObj = { val: 0 };
      gsap.to(countObj, {
        val: 100,
        duration: 3.5,
        ease: "power3.inOut",
        onUpdate: () => {
          const currentCount = Math.floor(countObj.val);
          setCounter(currentCount);
          const nextWord = Math.floor(
            (currentCount / 100) * (loadingWords.length - 1),
          );
          setWordIndex(nextWord);
        },
      });

      // 4. THE MOSAIC EXIT (Your favorite style - Random Tiles)
      tl.to(".loader-content", {
        opacity: 0,
        y: -30,
        duration: 0.8,
        delay: 1, // 100 എത്തിയ ശേഷമുള്ള ചെറിയൊരു പോസ്
        ease: "power4.in",
      })
        .to(".tile", {
          scale: 0,
          opacity: 0,
          duration: 1,
          stagger: {
            grid: [5, 10],
            from: "random", // ടൈലുകൾ റാൻഡം ആയി അപ്രത്യക്ഷമാകുന്നു
            amount: 0.8,
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
      <div className="absolute inset-0 grid grid-cols-5 md:grid-cols-10 grid-rows-5 pointer-events-auto bg-transparent">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="tile w-full h-full bg-[#050505] border-[0.5px] border-white/5"
          />
        ))}
      </div>

      {/* 🎨 TECHNICAL SCANNER BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] z-10">
        <div className="scanner-bar absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-transparent via-[#87001a] to-transparent"></div>
        <svg width="100%" height="100%" className="absolute inset-0">
          <line
            x1="20%"
            y1="0"
            x2="20%"
            y2="100%"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="80%"
            y1="0"
            x2="80%"
            y2="100%"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* 🎯 CENTER CONTENT */}
      <div className="loader-content relative z-[100] flex flex-col items-center">
        {/* LOGO TYPING AREA */}
        <div className="mb-14 flex items-center gap-1">
          {companyName.split("").map((char, i) => (
            <span
              key={i}
              className={`char inline-block text-3xl md:text-6xl font-black tracking-tighter text-white uppercase italic ${char === " " ? "mr-4" : ""}`}
            >
              {char}
            </span>
          ))}
          {/* Pulsing Accent Dot */}
          <div className="char w-2 h-2 bg-[#87001a] rounded-full ml-1 self-end mb-2 animate-pulse"></div>
        </div>

        {/* Minimal Kinetic Counter */}
        <div className="flex flex-col items-center gap-6">
          <div className="overflow-hidden">
            <span className="text-white text-7xl md:text-[140px] font-thin tracking-tighter block leading-none select-none italic">
              {counter}
            </span>
          </div>

          {/* Cycling Status Text */}
          <div className="h-6 overflow-hidden flex flex-col items-center">
            <span className="text-[#87001a] text-[10px] font-mono font-bold uppercase tracking-[1em] transition-all duration-300">
              {loadingWords[wordIndex]}
            </span>
          </div>

          {/* Technical Progress Bar */}
          <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-[#87001a] transition-all duration-300"
              style={{ width: `${counter}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* FOOTER DATA (Industrial Aesthetics) */}
      <div className="absolute bottom-10 left-10 z-[100] hidden md:flex flex-col gap-1 opacity-20 font-mono">
        <span className="text-[8px] text-white tracking-widest uppercase">
          Dubai_United_Arab_Emirates
        </span>
        <span className="text-[8px] text-white tracking-widest uppercase italic">
          Build_V2.0_Structural_Core
        </span>
      </div>
    </div>
  );
}
