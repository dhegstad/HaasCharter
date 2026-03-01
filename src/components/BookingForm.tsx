"use client";

import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-charcoal border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center py-16 bg-darker border border-gold/20">
              <CheckCircle size={64} className="text-gold mx-auto mb-6" />
              <h3 className="text-2xl text-white font-light mb-2">
                Request Received
              </h3>
              <p className="text-gray-400 max-w-md mx-auto mb-8">
                We have received your flight request. Our team will review the
                flight plan and contact you within 2 hours with a confirmed
                itinerary and invoice.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-gold uppercase tracking-widest text-xs border-b border-gold pb-1 hover:text-white hover:border-white transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-charcoal border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">
              Request Flight
            </h2>
            <p className="text-white text-3xl font-light">
              Secure Your Travel
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-darker p-10 border border-white/5"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-charcoal border border-white/10 p-4 text-white focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-charcoal border border-white/10 p-4 text-white focus:border-gold focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full bg-charcoal border border-white/10 p-4 text-white focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Passengers
                </label>
                <select className="w-full bg-charcoal border border-white/10 p-4 text-white focus:border-gold focus:outline-none transition-colors">
                  <option>1-4 Passengers</option>
                  <option>5-8 Passengers</option>
                  <option>9-14 Passengers</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Departure
                </label>
                <input
                  type="text"
                  placeholder="ICAO Code or City"
                  className="w-full bg-charcoal border border-white/10 p-4 text-white focus:border-gold focus:outline-none transition-colors placeholder-gray-600"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="ICAO Code or City"
                  className="w-full bg-charcoal border border-white/10 p-4 text-white focus:border-gold focus:outline-none transition-colors placeholder-gray-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                Special Requests
              </label>
              <textarea
                rows={4}
                className="w-full bg-charcoal border border-white/10 p-4 text-white focus:border-gold focus:outline-none transition-colors placeholder-gray-600"
                placeholder="Catering, ground transport, pets..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-gold text-charcoal font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300"
            >
              Submit Request
            </button>
            <p className="text-center text-xs text-gray-600 mt-4">
              By submitting, you agree to our terms. This is a request, not a
              confirmed booking.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
