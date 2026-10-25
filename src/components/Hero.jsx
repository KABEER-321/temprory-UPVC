import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Ruler, Wrench } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { ORIGINAL_IMAGES } from '../config/images';
import SafeImage from './SafeImage';

export default function Hero({ onOpenQuote }) {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_CONFIG.whatsappMessages.heroQuote
  )}`;

  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 bg-stone-50 overflow-hidden">
      {/* Subtle architectural grid pattern in background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#18181b 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 sm:px-3.5 rounded-full bg-stone-200/70 border border-stone-300/80 text-stone-800 w-fit max-w-full">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase truncate">
                Custom Fabrication & On-Site Installation
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-[1.15] sm:leading-[1.12] tracking-tight break-words">
              Precision-Crafted <span className="text-sky-900 underline decoration-sky-300 decoration-4 underline-offset-6 sm:underline-offset-8">UPVC Windows</span> & Doors
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Engineered for acoustic insulation, weatherproofing, and modern aesthetics.
              We fabricate bespoke UPVC frames in-house and provide precise, professional
              architectural installations for homes and commercial developments.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-white shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 min-h-[48px]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-stone-300 shrink-0" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-sm hover:shadow transition-all duration-200 min-h-[48px]"
              >
                <MessageCircle className="w-4.5 h-4.5 shrink-0" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Core Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-5 sm:pt-6 border-t border-stone-200">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">Weather-Tight</h4>
                  <p className="text-[12px] text-stone-500 leading-snug">Multi-point seals prevent rain & dust ingress</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <Ruler className="w-5 h-5 text-sky-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">Millimeter-Fit</h4>
                  <p className="text-[12px] text-stone-500 leading-snug">Custom manufactured to exact structural openings</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <Wrench className="w-5 h-5 text-sky-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">Direct Factory</h4>
                  <p className="text-[12px] text-stone-500 leading-snug">Manufactured in-house with certified install teams</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual from Original Photograph */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900">
              <SafeImage
                src={ORIGINAL_IMAGES.heroVisual.src}
                alt={ORIGINAL_IMAGES.heroVisual.alt}
                aspectRatio="aspect-4/3 sm:aspect-5/4 lg:aspect-4/3"
                priority={true}
                expectedFileHint={ORIGINAL_IMAGES.heroVisual.src}
                className="w-full h-full object-cover"
              />

              {/* Architectural Overlay Tag */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-stone-900/90 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-stone-700/60 text-white">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-sky-400 block truncate">
                      Actual Site Project
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-stone-100 truncate">
                      {ORIGINAL_IMAGES.heroVisual.title}
                    </p>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-stone-400 bg-stone-800/80 px-2 py-1 rounded shrink-0">
                    Fabrication + Install
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary Badge Card */}
            <div className="hidden md:flex items-center gap-3 absolute -bottom-5 left-4 lg:-left-5 bg-white p-3.5 rounded-xl shadow-xl border border-stone-200 z-10">
              <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-800 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900">Acoustic & Thermal Dampening</p>
                <p className="text-[11px] text-stone-500">Multi-chamber UPVC engineering</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
