"use client";

import { useState } from "react";
import { AirplaneTilt, List, X } from "@phosphor-icons/react";

const navLinks = [
  { href: "#aircraft", label: "The Aircraft" },
  { href: "#range", label: "Range" },
  { href: "#pricing", label: "Pricing" },
  { href: "#crew", label: "Crew" },
  { href: "#availability", label: "Availability" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-gradient-to-b from-black/80 to-transparent py-6">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <AirplaneTilt size={28} weight="regular" className="text-gold" />
          <span className="text-2xl font-light tracking-widest uppercase text-white">
            Haas<span className="font-bold text-gold">Charter</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Book Flight
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm tracking-widest uppercase text-gray-300 hover:text-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 px-6 py-3 border border-gold text-gold text-center text-sm tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Book Flight
          </a>
        </div>
      )}
    </nav>
  );
}
