"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectList = [
  {
    id: 1,
    title: "Luxury Villa Rooftop",
    location: "Palm Jumeirah, Dubai",
    category: "Combo Waterproofing",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
  },
  {
    id: 2,
    title: "Industrial Warehouse",
    location: "Jebel Ali Freezone",
    category: "GRP Lining & Protection",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
  },
  {
    id: 3,
    title: "Commercial Complex",
    location: "Business Bay",
    category: "EIFS Finishing System",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
  },
  {
    id: 4,
    title: "Residential Tower",
    location: "Marina, Dubai",
    category: "Membrane Waterproofing",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !horizontalRef.current) return;

    let ctx = gsap.context(() => {
      const totalWidth = horizontalRef.current!.offsetWidth;
      const windowWidth = window.innerWidth;

      // Horizontal Scroll Animation
      gsap.to(horizontalRef.current, {
        x: -(totalWidth - windowWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Parallax Effect on inner images
      gsap.utils.toArray(".project-img").forEach((img: any) => {
        gsap.to(img, {
          x: 50,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            containerAnimation: gsap.getById("mainScroll"), // സിങ്ക് ചെയ്യാൻ
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#050505] overflow-hidden"
    >
      {/* Background Subtle Label */}
      <div className="absolute top-10 left-10 md:left-20 z-10">
        <span className="text-[#87001a] text-[10px] font-black uppercase tracking-[0.8em] flex items-center gap-4">
          <span className="w-12 h-[1px] bg-[#87001a]"></span> Featured Works
        </span>
      </div>

      {/* Main Horizontal Container */}
      <div
        ref={horizontalRef}
        className="flex h-full items-center px-[10vw] gap-[5vw] w-fit"
      >
        {/* Intro Heading Card */}
        <div className="flex flex-col justify-center min-w-[400px] md:min-w-[600px] pr-20">
          <h2 className="text-white text-7xl md:text-[120px] font-black uppercase tracking-tighter leading-[0.85]">
            Our <br /> <span className="text-white/20 italic">Legacy</span>{" "}
            <br /> Projects
          </h2>
          <p className="text-gray-500 text-lg mt-10 max-w-sm border-l border-[#87001a] pl-6 font-light">
            Each project is a testament to our precision and commitment to
            structural integrity across the UAE.
          </p>
        </div>

        {/* Project Cards Loop */}
        {projectList.map((project) => (
          <div
            key={project.id}
            className="relative flex-shrink-0 w-[80vw] md:w-[650px] group cursor-pointer"
          >
            {/* Project Number */}
            <span className="absolute -top-10 left-0 text-[100px] font-black text-white/5 font-mono select-none">
              0{project.id}
            </span>

            {/* Image Box with Parallax */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/5 bg-[#111]">
              <img
                src={project.img}
                alt={project.title}
                className="project-img w-[110%] h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Project Info */}
            <div className="mt-8 space-y-2">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[#87001a] text-[10px] font-bold uppercase tracking-[0.3em] mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter italic">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-light mt-1 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-gray-700"></span>{" "}
                    {project.location}
                  </p>
                </div>
                {/* View Project Button */}
                <div className="hidden md:flex w-14 h-14 rounded-full border border-white/10 items-center justify-center group-hover:bg-[#87001a] group-hover:border-[#87001a] transition-all duration-500">
                  <span className="text-white text-xl group-hover:rotate-45 transition-transform">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* End Card / Call to Action */}
        <div className="flex flex-col justify-center min-w-[400px] pl-20 pr-[10vw]">
          <h4 className="text-white text-4xl font-bold uppercase tracking-tighter">
            Your project could be <span className="text-[#87001a]">next.</span>
          </h4>
          <button className="mt-8 text-[12px] font-black uppercase tracking-[0.5em] text-gray-400 hover:text-white transition-colors flex items-center gap-4 group">
            Let's build together{" "}
            <span className="w-12 h-[1px] bg-gray-700 group-hover:w-20 group-hover:bg-[#87001a] transition-all duration-500"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
