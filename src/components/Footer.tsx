"use client";

import {
  AirplaneTilt,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <AirplaneTilt size={20} className="text-gold" />
              <span className="text-xl font-light tracking-widest uppercase text-white">
                Haas<span className="font-bold text-gold">Charter</span>
              </span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              HaasCharter is a dedicated single-aircraft operator committed to
              safety, transparency, and luxury.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-gold transition-colors">
                +1 (888) 555-0123
              </li>
              <li className="hover:text-gold transition-colors">
                concierge@haascharter.com
              </li>
              <li className="hover:text-gold transition-colors">
                KTEB &middot; Teterboro, NJ
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-6">
              Legal
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-gold transition-colors cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-gold transition-colors cursor-pointer">
                Terms of Carriage
              </li>
              <li className="hover:text-gold transition-colors cursor-pointer">
                Safety Records
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest mb-6">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all rounded-full"
                aria-label="Instagram"
              >
                <InstagramLogo size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all rounded-full"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; 2026 HaasCharter. All rights reserved.
          </p>
          <p className="text-gray-600 text-[10px] uppercase tracking-wider">
            Operated under FAA Part 135 Certificate #999XX
          </p>
        </div>
      </div>
    </footer>
  );
}
