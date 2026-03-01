"use client";

import { ArrowDown } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2532&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-full bg-black/20 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">
              $10,000 / HR &middot; Gulfstream G550
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-light leading-tight mb-6">
            Private. <br />
            Transparent. <br />
            <span className="text-gold italic font-serif">Nonstop.</span>
          </h1>

          <p className="text-xl text-gray-300 font-light mb-10 max-w-xl border-l-2 border-gold pl-6">
            One aircraft. One crew. Total transparency. Experience the
            Gulfstream G550 with zero hidden fees and no membership required.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gold text-charcoal font-bold uppercase tracking-wider overflow-hidden inline-block"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Book Your Flight
              </span>
              <div className="absolute inset-0 h-full w-full bg-charcoal origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
            <a
              href="#aircraft"
              className="px-8 py-4 border border-white/20 text-white font-medium uppercase tracking-wider hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              View Specs <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="h-16 w-[1px] bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
