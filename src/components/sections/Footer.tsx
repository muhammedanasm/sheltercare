"use client";
import Link from "next/link";
import { Mail, Instagram, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] text-white pt-32 pb-10 px-6 md:px-20 font-sans border-t border-white/5">
      <div className="max-w-[1700px] mx-auto">
        {/* 1. TOP SECTION: CTA (Exact Screenshot Style) */}
        <div className="text-center mb-40">
          <h2 className="text-5xl md:text-[90px] font-medium tracking-tighter leading-none mb-10">
            Secure longevity with <br />
            <span className="text-white/20 ">technical precision</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Partner with Shelter Care for advanced structural protection
            systems. Engineered to safeguard your infrastructure against time
            and climate.
          </p>

          {/* Action Button (Replacing Input Field) */}
          <div className="mt-12">
            <button className="bg-white curesor-pointer text-black px-10 py-4 rounded-full text-sm font-bold hover:bg-[#87001a] hover:text-white transition-all duration-500">
              Start a Project
            </button>
          </div>
        </div>

        {/* 2. MIDDLE SECTION: NAVIGATION & CONTACT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-10 pb-20 border-b border-white/5 relative">
          {/* COMPANY LINKS */}
          <div className="md:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">
              Company
            </h4>
            <div className="flex flex-col gap-4 text-[15px] font-medium text-white/60">
              <Link
                href="#about"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Process
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Projects
              </Link>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="md:col-span-5 space-y-8">
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">
              Contact
            </h4>
            <div className="space-y-4 text-[15px] font-medium text-white/60 leading-relaxed">
              <p className="max-w-[300px]">
                Shelter Care Technical Services L.L.C <br />
                Dubai, United Arab Emirates
              </p>
              <p className="hover:text-white transition-colors">
                info@sheltercareuae.com
              </p>
            </div>
          </div>

          {/* SOCIAL & BACK TO TOP */}
          <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end gap-10">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-pointer group"
            >
              Back to Top{" "}
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>

            <div className="flex gap-4">
              {[
                {
                  icon: <Mail size={18} />,
                  href: "mailto:info@sheltercareuae.com",
                },
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:bg-white hover:text-black transition-all duration-500"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 3. BOTTOM SECTION: COPYRIGHT */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <p className="text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} SHELTER CARE TECHNICAL. ALL RIGHTS
            RESERVED.
          </p>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
