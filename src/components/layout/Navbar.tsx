"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 bg-white border-b border-gray-100 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* LEFT: LOGO */}
        <Link
          href="/"
          className="flex-shrink-0 transition-transform hover:scale-105"
        >
          <img
            src="/images/logo.jpg"
            alt="Shelter Care Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* CENTER: NAV LINKS with Underline Effect */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-underline-wrapper text-[15px] font-medium text-zinc-900 transition-colors hover:text-zinc-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* RIGHT: BUTTONS with Light Effect */}
        <div className="flex items-center gap-4">
          {/* Book a Call - Minimal Border Style */}
          <Link
            href="#book"
            className="premium-btn-shine hidden md:flex items-center justify-center border border-gray-200 text-[14px] font-semibold text-zinc-900 px-6 py-2.5 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all"
          >
            Book a Call
          </Link>

          {/* Get in Touch - Solid Black Style */}
          <button className="premium-btn-shine bg-black text-white px-7 py-2.5 rounded-full text-[14px] font-semibold transition-all hover:bg-zinc-800">
            <span className="relative z-10">Get in Touch</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
