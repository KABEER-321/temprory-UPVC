import React from 'react';
import { Ruler, Factory, Hammer, Wrench, Shield, Check } from 'lucide-react';
import { ORIGINAL_IMAGES } from '../config/images';
import SafeImage from './SafeImage';

export default function Services({ onOpenQuote }) {
  const serviceHighlights = [
    {
      title: '1. Precision Site Measurement',
      desc: 'Our technicians visit your site to take millimeter-precise measurements of window and door masonry openings, inspecting wall level, lintel clearances, and sill gradients.'
    },
    {
      title: '2. In-House Factory Fabrication',
      desc: 'UPVC profiles are cut, steel-reinforced, and seamlessly heat-welded using specialized fabrication machinery in our dedicated workshop facility.'
    },
    {
      title: '3. Professional On-Site Installation',
      desc: 'Fastened securely with heavy-duty anchor fasteners, followed by expanding polyurethane foam and exterior silicone sealant for absolute waterproofing.'
    },
    {
      title: '4. Quality Handover & Maintenance',
      desc: 'Final roller alignment, multi-point lock testing, sash friction calibration, and protective film removal with instructions for effortless long-term care.'
    }
  ];

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-28 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Full-Cycle Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            From Raw Profiles to Certified On-Site Installation
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
            Unlike mere retailers or third-party resellers, we handle both end-to-end in-house fabrication
            and direct on-site installation with our own trained technicians.
          </p>
        </div>

        {/* Visual Comparison: Workshop Machinery vs On-Site Installation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          
          {/* Card 1: Custom Fabrication (Machinery Photo) */}
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between min-w-0">
            <div>
              <div className="relative">
                <SafeImage
                  src={ORIGINAL_IMAGES.fabricationMachinery.src}
                  alt={ORIGINAL_IMAGES.fabricationMachinery.alt}
                  aspectRatio="aspect-16/10"
                  expectedFileHint={ORIGINAL_IMAGES.fabricationMachinery.src}
                />
                <span className="absolute bottom-3 left-3 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-stone-950/85 text-stone-200 rounded">
                  In-House Fabrication Workshop
                </span>
              </div>
              <div className="p-5 sm:p-6 lg:p-8">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <Factory className="w-5 h-5 text-sky-800 shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 break-words">Custom UPVC Fabrication</h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  Using high-precision miter cutters, water-slot routing, and multi-point corner welding
                  machinery, our workshop produces welded joints that resist air and water leakage.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-2" />
                    <span>Internal galvanized steel reinforcement in all structural chambers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-2" />
                    <span>Clean 45-degree automated miter cutting & temperature-controlled fusion welding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-2" />
                    <span>Pre-installation hardware fitment & rigorous sash squareness check</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Professional Installation (Installation Photo) */}
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col justify-between min-w-0">
            <div>
              <div className="relative">
                <SafeImage
                  src={ORIGINAL_IMAGES.installationWork.src}
                  alt={ORIGINAL_IMAGES.installationWork.alt}
                  aspectRatio="aspect-16/10"
                  expectedFileHint={ORIGINAL_IMAGES.installationWork.src}
                />
                <span className="absolute bottom-3 left-3 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-stone-950/85 text-stone-200 rounded">
                  On-Site Installation Team
                </span>
              </div>
              <div className="p-5 sm:p-6 lg:p-8">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <Hammer className="w-5 h-5 text-sky-800 shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 break-words">Certified Site Installation</h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  Even the best fabricated window fails if installed incorrectly. Our on-site specialists
                  fasten frames using precision spirit levels and perimeter weatherproofing sealants.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-2" />
                    <span>Anchored securely into brick, concrete, or stone substrates with zinc-plated screws</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-2" />
                    <span>Acoustic PU foam backfilling for enhanced noise reduction & thermal insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-2" />
                    <span>UV-resistant exterior silicone sealing against heavy rainfall & wind pressure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Step Process Timeline */}
        <div className="bg-white rounded-2xl border border-stone-200 p-5 sm:p-8 lg:p-10">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
            <Ruler className="w-5 h-5 text-sky-800 shrink-0" />
            <span>Our Systematic Execution Workflow</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {serviceHighlights.map((step, idx) => (
              <div key={idx} className="relative p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200/80 min-w-0">
                <div className="text-xs font-mono font-bold text-sky-800 mb-1.5">
                  PHASE 0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-stone-900 mb-1.5 break-words">
                  {step.title.replace(/^\d+\.\s*/, '')}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
