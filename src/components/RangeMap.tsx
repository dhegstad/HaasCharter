"use client";

import { Path, Clock } from "@phosphor-icons/react";

const cities = [
  { name: "London", position: "top-[20%] right-[20%]" },
  { name: "Dubai", position: "bottom-[30%] right-[15%]" },
  { name: "Anchorage", position: "top-[30%] left-[15%]", reverse: true },
  { name: "São Paulo", position: "bottom-[20%] left-[30%]", reverse: true },
  { name: "Tokyo", position: "top-[25%] right-[10%]" },
  { name: "Hawaii", position: "bottom-[35%] left-[18%]", reverse: true },
];

export default function RangeMap() {
  return (
    <section id="range" className="relative py-32 bg-darker overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left text */}
          <div className="md:col-span-5">
            <h2 className="text-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Range &amp; Performance
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-white leading-tight mb-8">
              The World within Reach.
              <br />
              <span className="text-gray-500">Nonstop.</span>
            </h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-gold rounded-full text-gold shrink-0">
                  <Path size={20} />
                </div>
                <div>
                  <h4 className="text-white text-xl font-light mb-1">
                    6,750 Nautical Miles
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Fly from New York to Tokyo, Los Angeles to London, or Dubai
                    to Cape Town without refueling.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 border border-gold rounded-full text-gold shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-white text-xl font-light mb-1">
                    13.5 Hours Endurance
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Long-range cruise capability allows you to sleep in one
                    continent and wake up in another.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — concentric circle visualization */}
          <div className="md:col-span-7 relative h-[500px] border border-white/10 rounded-full bg-charcoal/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
            {/* Concentric rings */}
            <div className="absolute w-[80%] h-[80%] border border-gold/20 rounded-full animate-pulse" />
            <div className="absolute w-[60%] h-[60%] border border-gold/40 rounded-full" />
            <div className="absolute w-[40%] h-[40%] border border-gold/60 rounded-full" />

            {/* Center point */}
            <div className="absolute w-4 h-4 bg-gold rounded-full shadow-[0_0_20px_#C9A96E]" />
            <div className="absolute mt-8 text-xs font-bold uppercase tracking-widest text-gold">
              New York (KTEB)
            </div>

            {/* Destination cities */}
            {cities.map((city) => (
              <div
                key={city.name}
                className={`absolute ${city.position} flex items-center gap-2`}
              >
                {city.reverse && (
                  <span className="text-xs text-white uppercase tracking-wider">
                    {city.name}
                  </span>
                )}
                <div className="w-2 h-2 bg-white rounded-full" />
                {!city.reverse && (
                  <span className="text-xs text-white uppercase tracking-wider">
                    {city.name}
                  </span>
                )}
              </div>
            ))}

            {/* Range label */}
            <div className="absolute bottom-10 px-4 py-1 bg-black/50 border border-gold/30 rounded text-gold text-[10px] uppercase tracking-widest">
              6,750 NM Radius
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
