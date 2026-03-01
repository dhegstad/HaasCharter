"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  AirplaneTakeoff,
  AirplaneLanding,
  Calculator,
} from "@phosphor-icons/react";
import { Airport, searchAirports, calculateDistance } from "@/data/airports";

const HOURLY_RATE = 10000;
const CRUISE_SPEED_KTS = 460;

export default function PricingCalculator() {
  const [departureQuery, setDepartureQuery] = useState("");
  const [arrivalQuery, setArrivalQuery] = useState("");
  const [departure, setDeparture] = useState<Airport | null>(null);
  const [arrival, setArrival] = useState<Airport | null>(null);
  const [passengers, setPassengers] = useState(4);
  const [showDepResults, setShowDepResults] = useState(false);
  const [showArrResults, setShowArrResults] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [calculating, setCalculating] = useState(false);

  const depRef = useRef<HTMLDivElement>(null);
  const arrRef = useRef<HTMLDivElement>(null);

  const depResults = searchAirports(departureQuery);
  const arrResults = searchAirports(arrivalQuery);

  const distance =
    departure && arrival
      ? calculateDistance(departure.lat, departure.lon, arrival.lat, arrival.lon)
      : null;

  const flightTimeHours = distance ? distance / CRUISE_SPEED_KTS : null;
  const estimatedCost = flightTimeHours
    ? Math.ceil(flightTimeHours * 10) / 10 * HOURLY_RATE
    : null;

  const formatTime = (hours: number) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}m`;
  };

  const handleCalculate = () => {
    if (!departure || !arrival) return;
    setCalculating(true);
    setTimeout(() => {
      setCalculated(true);
      setCalculating(false);
    }, 800);
  };

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (depRef.current && !depRef.current.contains(e.target as Node))
      setShowDepResults(false);
    if (arrRef.current && !arrRef.current.contains(e.target as Node))
      setShowArrResults(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <section id="pricing" className="py-24 bg-charcoal border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Transparent Pricing
          </h2>
          <h3 className="text-5xl font-light text-white mb-6">
            $10,000 <span className="text-2xl text-gray-500">/ Hour</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            No hidden fees. No fuel surcharges. No membership dues. Calculate
            your exact flight cost instantly based on flight time.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-darker p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left — Inputs */}
            <div className="space-y-8">
              {/* Departure */}
              <div ref={depRef} className="relative">
                <label className="block text-xs uppercase tracking-widest text-gold mb-2">
                  Departure
                </label>
                <div className="relative">
                  <AirplaneTakeoff
                    size={16}
                    className="absolute left-0 top-3 text-gray-500"
                  />
                  <input
                    type="text"
                    value={departureQuery}
                    onChange={(e) => {
                      setDepartureQuery(e.target.value);
                      setDeparture(null);
                      setCalculated(false);
                      setShowDepResults(true);
                    }}
                    onFocus={() => setShowDepResults(true)}
                    placeholder="e.g. New York (KTEB)"
                    className="w-full bg-transparent border-b border-white/20 py-3 pl-8 text-white focus:border-gold focus:outline-none transition-colors uppercase font-light"
                  />
                </div>
                {showDepResults && depResults.length > 0 && (
                  <div className="absolute z-20 top-full mt-1 w-full bg-charcoal border border-white/10 shadow-xl max-h-60 overflow-y-auto">
                    {depResults.map((a) => (
                      <button
                        key={a.icao}
                        onClick={() => {
                          setDeparture(a);
                          setDepartureQuery(`${a.city} (${a.code})`);
                          setShowDepResults(false);
                          setCalculated(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 text-sm"
                      >
                        <span className="font-semibold text-gold">
                          {a.code}
                        </span>
                        <span className="text-gray-500 mx-2">&middot;</span>
                        <span className="text-white">{a.name}</span>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {a.city}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Destination */}
              <div ref={arrRef} className="relative">
                <label className="block text-xs uppercase tracking-widest text-gold mb-2">
                  Destination
                </label>
                <div className="relative">
                  <AirplaneLanding
                    size={16}
                    className="absolute left-0 top-3 text-gray-500"
                  />
                  <input
                    type="text"
                    value={arrivalQuery}
                    onChange={(e) => {
                      setArrivalQuery(e.target.value);
                      setArrival(null);
                      setCalculated(false);
                      setShowArrResults(true);
                    }}
                    onFocus={() => setShowArrResults(true)}
                    placeholder="e.g. London (EGLL)"
                    className="w-full bg-transparent border-b border-white/20 py-3 pl-8 text-white focus:border-gold focus:outline-none transition-colors uppercase font-light"
                  />
                </div>
                {showArrResults && arrResults.length > 0 && (
                  <div className="absolute z-20 top-full mt-1 w-full bg-charcoal border border-white/10 shadow-xl max-h-60 overflow-y-auto">
                    {arrResults.map((a) => (
                      <button
                        key={a.icao}
                        onClick={() => {
                          setArrival(a);
                          setArrivalQuery(`${a.city} (${a.code})`);
                          setShowArrResults(false);
                          setCalculated(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 text-sm"
                      >
                        <span className="font-semibold text-gold">
                          {a.code}
                        </span>
                        <span className="text-gray-500 mx-2">&middot;</span>
                        <span className="text-white">{a.name}</span>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {a.city}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Date & passengers */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-gold focus:outline-none transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold mb-2">
                    Passengers
                  </label>
                  <div className="flex items-center gap-4 py-3 border-b border-white/20">
                    <input
                      type="range"
                      min="1"
                      max="14"
                      value={passengers}
                      onChange={(e) => setPassengers(Number(e.target.value))}
                      className="w-full accent-gold h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-white font-mono">{passengers}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCalculate}
                disabled={!departure || !arrival || calculating}
                className="w-full py-4 bg-white/5 border border-gold/50 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 uppercase tracking-widest font-bold text-sm mt-4 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {calculating
                  ? "Calculating..."
                  : calculated
                  ? "Recalculate"
                  : "Calculate Trip Cost"}
              </button>
            </div>

            {/* Right — Results */}
            <div className="bg-charcoal p-8 border border-white/5 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Calculator size={120} className="text-white" />
              </div>

              {!calculated ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 italic">
                    Enter flight details to see estimated cost.
                  </p>
                </div>
              ) : distance && flightTimeHours && estimatedCost ? (
                <div className="space-y-8 relative z-10 animate-fade-in">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-widest text-gray-500">
                      Est. Distance
                    </span>
                    <span className="text-2xl font-light text-white">
                      {Math.round(distance).toLocaleString()} NM
                    </span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-xs uppercase tracking-widest text-gray-500">
                      Flight Time
                    </span>
                    <span className="text-2xl font-light text-white">
                      {formatTime(flightTimeHours)}
                    </span>
                  </div>
                  <div className="pt-4">
                    <span className="block text-xs uppercase tracking-widest text-gold mb-1">
                      Estimated Total Cost
                    </span>
                    <span className="text-5xl font-light text-white">
                      ${Math.round(estimatedCost).toLocaleString()}
                    </span>
                    <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-wide">
                      *Includes fuel. Excludes FET &amp; Intl fees.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="block w-full text-center py-3 bg-gold text-charcoal font-bold uppercase tracking-wider hover:bg-white hover:text-charcoal transition-colors"
                  >
                    Request This Flight
                  </a>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-8 text-[10px] text-gray-500 uppercase tracking-wider leading-relaxed text-center">
            Note: Pricing is an estimate based on Great Circle distance +
            routing factor. Actual flight time may vary due to winds and ATC.
            Domestic flights subject to 7.5% FET. Landing fees and international
            handling billed at cost.
          </div>
        </div>
      </div>
    </section>
  );
}
