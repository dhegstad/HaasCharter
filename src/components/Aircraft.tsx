"use client";

import {
  GlobeHemisphereWest,
  Speedometer,
  AirplaneInFlight,
  UsersThree,
  ArrowsOutLineHorizontal,
  ArrowsOutLineVertical,
  WifiHigh,
  Suitcase,
} from "@phosphor-icons/react";
import { type ReactNode } from "react";

interface Spec {
  icon: ReactNode;
  label: string;
  value: string;
  unit?: string;
  detail?: string;
}

const specs: Spec[] = [
  {
    icon: <GlobeHemisphereWest size={28} className="text-gold mb-4" />,
    label: "Max Range",
    value: "6,750",
    unit: "NM",
    detail: "12,501 km",
  },
  {
    icon: <Speedometer size={28} className="text-gold mb-4" />,
    label: "Max Speed",
    value: "Mach 0.885",
    detail: "~585 mph",
  },
  {
    icon: <AirplaneInFlight size={28} className="text-gold mb-4" />,
    label: "Cruise Altitude",
    value: "51,000",
    unit: "FT",
    detail: "Above commercial traffic",
  },
  {
    icon: <UsersThree size={28} className="text-gold mb-4" />,
    label: "Capacity",
    value: "14",
    unit: "Passengers",
    detail: "Sleeps 6 comfortably",
  },
  {
    icon: <ArrowsOutLineHorizontal size={28} className="text-gold mb-4" />,
    label: "Cabin Length",
    value: "43' 11\"",
  },
  {
    icon: <ArrowsOutLineVertical size={28} className="text-gold mb-4" />,
    label: "Cabin Height",
    value: "6' 2\"",
  },
  {
    icon: <WifiHigh size={28} className="text-gold mb-4" />,
    label: "Connectivity",
    value: "Ka-Band",
    detail: "High-speed Satellite WiFi",
  },
  {
    icon: <Suitcase size={28} className="text-gold mb-4" />,
    label: "Baggage",
    value: "226",
    unit: "CU FT",
    detail: "Accessible in flight",
  },
];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2532&auto=format&fit=crop",
    label: "Main Cabin",
  },
  {
    src: "https://images.unsplash.com/photo-1561131668-f635d4bef946?q=80&w=2070&auto=format&fit=crop",
    label: "Fine Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1583413230540-ddf90681a8f8?q=80&w=2070&auto=format&fit=crop",
    label: "Flight Deck",
  },
];

export default function Aircraft() {
  return (
    <section id="aircraft" className="py-24 bg-charcoal relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-gold text-sm font-bold tracking-[0.3em] uppercase mb-2">
              The Machine
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-white">
              Gulfstream G550
            </h3>
          </div>
          <p className="text-gray-400 max-w-md text-right mt-4 md:mt-0">
            Defined by performance and comfort. Capable of intercontinental
            travel with a custom-configured luxury interior.
          </p>
        </div>

        {/* Specs grid with 1px dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="bg-charcoal p-8 group hover:bg-white/5 transition-colors duration-500"
            >
              {spec.icon}
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                {spec.label}
              </p>
              <p className="text-2xl font-light text-white">
                {spec.value}
                {spec.unit && (
                  <span className="text-sm text-gray-500 ml-1">
                    {spec.unit}
                  </span>
                )}
              </p>
              {spec.detail && (
                <p className="text-xs text-gray-500 mt-2">{spec.detail}</p>
              )}
            </div>
          ))}
        </div>

        {/* Photo gallery */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.label}
              className="relative h-64 overflow-hidden group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                alt={photo.label}
              />
              <div className="absolute bottom-4 left-4 text-white text-xs uppercase tracking-widest">
                {photo.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
