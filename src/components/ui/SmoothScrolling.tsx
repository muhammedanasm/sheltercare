"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// GSAP Plugin Register ചെയ്യാൻ മറക്കരുത്
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // പേജ് മാറുമ്പോൾ ടോപ്പിലേക്ക് പോകാൻ
      lenis.scrollTo(0, { immediate: true });

      // GSAP അനിമേഷനുകൾ സ്മൂത്ത് സ്ക്രോളിംഗുമായി സിങ്ക് ചെയ്യാൻ
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname, lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      {children as any}
    </ReactLenis>
  );
}
