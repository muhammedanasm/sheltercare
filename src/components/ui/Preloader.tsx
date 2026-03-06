"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [counter, setCounter] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const startLoading = () => {
      const countObj = { val: 0 };
      gsap.to(countObj, {
        val: 100,
        duration: 7.5, // വീഡിയോ തീരുന്നതിന് തൊട്ടുമുമ്പ് 100 എത്തും
        ease: "none",
        onUpdate: () => setCounter(Math.floor(countObj.val)),
      });

      // 2. മെയിൻ ടൈംലൈൻ (8 സെക്കൻഡ് വെയിറ്റിംഗ്)
      tl.to(".loader-inner", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
      })
        .to(".loader-inner", {
          opacity: 0,
          y: -20,
          duration: 0.8,
          delay: 7, // വീഡിയോ തീരാൻ ഏകദേശം 8 സെക്കൻഡ് വരെ കാത്തിരിക്കുന്നു
          ease: "power4.in",
        })
        .to(".shutter-panel", {
          yPercent: -100,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.inOut",
        })
        .to(preloaderRef.current, {
          display: "none",
        });
    };

    if (videoRef.current) {
      videoRef.current.onplay = startLoading;
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* 🏗️ PREMIUM MINIMAL SHUTTER PANELS */}
      <div className="absolute inset-0 flex pointer-events-auto">
        <div className="shutter-panel w-full h-full bg-[#0a0a0a] relative z-30 border-r border-white/[0.03]" />
        <div className="shutter-panel w-full h-full bg-[#070707] relative z-20 border-r border-white/[0.03]" />
        <div className="shutter-panel w-full h-full bg-[#050505] relative z-10" />
      </div>

      {/* 🎯 CENTER CONTENT */}
      <div className="loader-inner opacity-0 translate-y-10 relative z-[100] flex flex-col items-center">
        {/* Logo Animation Video (8 Seconds) */}
        <div className="w-64 md:w-[450px] aspect-video overflow-hidden mb-12 relative">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-contain"
          >
            <source src="/videos/logo-animation.mp4" type="video/mp4" />
          </video>
          {/* Subtle line under video to ground it */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#87001a]/50 to-transparent"></div>
        </div>

        {/* Minimal Progress Info */}
        <div className="flex flex-col items-center gap-4">
          <div className="overflow-hidden">
            <span className="text-white text-5xl md:text-7xl font-extralight tracking-tighter block leading-none select-none italic">
              {counter}
              <span className="text-sm not-italic opacity-20 ml-2">%</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-1 h-1 bg-[#87001a] rounded-full animate-ping"></div>
            <span className="text-[9px] uppercase tracking-[0.8em] text-white/30 font-mono">
              Initializing_System
            </span>
          </div>
        </div>
      </div>

      {/* TECHNICAL REFERENCE LABELS */}
      <div className="absolute bottom-10 left-10 z-[100] hidden md:flex flex-col gap-1 opacity-20">
        <span className="text-[8px] font-mono text-white tracking-widest uppercase">
          Ref: SC_DXB_CORE
        </span>
        <span className="text-[8px] font-mono text-white tracking-widest uppercase">
          Status: Validating_Assets...
        </span>
      </div>
    </div>
  );
}
