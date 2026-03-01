"use client";

import { useState, useMemo } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

type DayStatus = "available" | "booked" | "maintenance" | "past";

function getStatusForDate(date: Date, today: Date): DayStatus {
  if (date < today) return "past";
  const seed = date.getDate() + date.getMonth() * 31;
  if (seed % 11 === 0 || seed % 13 === 0) return "booked";
  if (seed % 23 === 0) return "maintenance";
  return "available";
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Calendar() {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const days: { date: Date; status: DayStatus }[] = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentYear, currentMonth, i);
    days.push({ date, status: getStatusForDate(date, today) });
  }

  return (
    <section id="availability" className="py-24 bg-darker relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <h2 className="text-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Availability
            </h2>
            <h3 className="text-3xl font-light text-white">
              Plan Your Journey
            </h3>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gold rounded-full" />
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-charcoal border border-white/10 rounded-full" />
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Booked
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-800 rounded-full" />
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Maintenance
              </span>
            </div>
          </div>
        </div>

        <div className="bg-charcoal border border-white/10 p-8 max-w-4xl mx-auto">
          {/* Month navigation */}
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
            <button
              onClick={prevMonth}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Previous month"
            >
              <CaretLeft size={20} />
            </button>
            <span className="text-xl font-light uppercase tracking-widest text-white">
              {MONTHS[currentMonth]} {currentYear}
            </span>
            <button
              onClick={nextMonth}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Next month"
            >
              <CaretRight size={20} />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-4 mb-4 text-center">
            {DAYS.map((d) => (
              <span
                key={d}
                className="text-xs text-gray-600 uppercase"
              >
                {d}
              </span>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-2 md:gap-4">
            {/* Empty cells for offset */}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}

            {days.map(({ date, status }) => (
              <div
                key={date.getDate()}
                className={`aspect-square flex items-center justify-center text-sm transition-colors ${
                  status === "available"
                    ? "bg-gold text-charcoal font-bold cursor-pointer hover:bg-white"
                    : status === "booked"
                    ? "bg-darker border border-white/5 text-gray-600 cursor-not-allowed"
                    : status === "maintenance"
                    ? "bg-orange-900/40 border border-orange-900 text-orange-500 cursor-help"
                    : "bg-darker border border-white/5 text-gray-600 cursor-not-allowed"
                }`}
                title={
                  status === "available"
                    ? "Available — Click to book"
                    : status === "booked"
                    ? "Booked"
                    : status === "maintenance"
                    ? "Scheduled Maintenance"
                    : ""
                }
              >
                {date.getDate()}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gold mt-6 uppercase tracking-widest text-xs">
          One Aircraft. Limited Availability. Book Early.
        </p>
      </div>
    </section>
  );
}
