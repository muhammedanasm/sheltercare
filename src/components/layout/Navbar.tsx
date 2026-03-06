"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // സ്ക്രോൾ ചെയ്യുമ്പോൾ ബാക്ക്ഗ്രൗണ്ട് മാറാൻ
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-8 md:px-16 
      ${scrolled ? "py-4 backdrop-blur-md bg-black/50" : "py-6 bg-transparent"}`}
    >
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        {/* Logo Replacement */}
        <Link
          href="/"
          className="relative h-10 w-32 md:h-15 md:w-40 transition-transform hover:scale-105"
        >
          <img
            src="/images/logo.jpg"
            alt="Shelter Care Logo"
            className="h-full w-full object-contain object-left"
          />
        </Link>

        {/* Nav Links - Premium Look */}
        <div className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link hover:text-white transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Let's Talk Button - Minimal & Premium */}
        <button className="group relative px-6 py-2 overflow-hidden border border-white/20 rounded-full transition-all duration-500 hover:border-[#87001a] cursor:pointer">
          <span className="relative z-10 text-[11px] font-bold uppercase tracking-wider text-white group-hover:text-white transition-colors">
            Let's Talk
          </span>
          {/* Hover Slide Effect */}
          <div className="absolute inset-0 bg-[#87001a] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
