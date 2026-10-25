import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, FileText } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function FloatingWhatsApp({ onOpenQuote }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 280);
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsappMessages.generalEnquiry
  )}`;

  return (
    <>
      {/* Floating WhatsApp Bubble for Desktop & Tablet */}
      <div
        className={`hidden sm:block fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire on WhatsApp"
          className="group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-emerald-600/30 transition-all active:scale-95 min-h-[48px]"
        >
          <MessageCircle className="w-6 h-6 stroke-2 shrink-0" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold tracking-wide">
            Chat with Fabricator
          </span>
        </a>
      </div>

      {/* Mobile Sticky Quick Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] flex items-center gap-2 shadow-lg">
        <a
          href={`tel:${BUSINESS_CONFIG.phone.replace(/\s+/g, '')}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-1 rounded-lg bg-stone-100 active:bg-stone-200 text-stone-900 text-xs font-bold min-h-[44px] transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-sky-800 shrink-0" />
          <span className="truncate">Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-1 rounded-lg bg-emerald-600 active:bg-emerald-700 text-white text-xs font-bold shadow-sm min-h-[44px] transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        <button
          onClick={onOpenQuote}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-1 rounded-lg bg-stone-900 active:bg-stone-800 text-white text-xs font-bold min-h-[44px] transition-colors"
        >
          <FileText className="w-3.5 h-3.5 text-stone-300 shrink-0" />
          <span className="truncate">Get Quote</span>
        </button>
      </div>
    </>
  );
}
