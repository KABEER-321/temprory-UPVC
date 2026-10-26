import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3.5 sm:space-y-4 min-w-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-stone-800 border border-stone-700 flex items-center justify-center text-white font-bold tracking-tight shrink-0">
                <span className="font-mono text-base sm:text-lg text-sky-400">O</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-white truncate">
                  {BUSINESS_CONFIG.brandName}
                </span>
                <span className="text-[10px] font-medium tracking-wider uppercase text-stone-400 truncate">
                  {BUSINESS_CONFIG.brandSubtitle}
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Specialized in custom UPVC window & door fabrication, galvanized steel reinforcement,
              and professional on-site architectural installations.
            </p>

            <div className="pt-1 sm:pt-2">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  BUSINESS_CONFIG.whatsappMessages.generalEnquiry
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white transition-colors min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3 min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors py-1 inline-block">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors py-1 inline-block">Products</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors py-1 inline-block">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors py-1 inline-block">Project Gallery</a>
              </li>
              <li>
                <a href="#workshop" className="hover:text-white transition-colors py-1 inline-block">Workshop & Machinery</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors py-1 inline-block">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors py-1 inline-block">Get a Quote</a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3 space-y-3 min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Fabricated Systems
            </p>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>UPVC Sliding Windows (2 & 3 Track)</li>
              <li>UPVC Casement Openable Windows</li>
              <li>Sliding Balcony Doors & Partitions</li>
              <li>French & Casement Entry Doors</li>
              <li>Acoustic Glazed Window Frames</li>
              <li>Top-Hung & Ventilator Systems</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3 min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Workshop Contact
            </p>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{BUSINESS_CONFIG.workshopAddress}, {BUSINESS_CONFIG.city}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-white transition-colors break-all">
                  {BUSINESS_CONFIG.email}
                </a>
              </li>
              <li className="text-[11px] text-stone-500 pt-1">
                Hours: {BUSINESS_CONFIG.workingHours}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3 text-center sm:text-left">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} {BUSINESS_CONFIG.brandName}. All rights reserved. Authentic Fabrication & Installation.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 active:bg-stone-600 text-stone-300 hover:text-white transition-colors min-h-[40px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
