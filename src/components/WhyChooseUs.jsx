import React from 'react';
import { Hammer, Factory, Ruler, VolumeX, Shield, UserCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Factory,
      title: "Direct In-House Fabrication",
      description: "We manufacture every frame in our own workshop. This gives us complete control over profile quality, corner weld strength, and hardware specifications without middleman markups."
    },
    {
      icon: Hammer,
      title: "Dedicated On-Site Installation",
      description: "Installation is never outsourced to untrained third-party daily laborers. Our skilled technicians handle anchor fastening, plumb leveling, and weatherproof silicone sealing."
    },
    {
      icon: Ruler,
      title: "Tailored Architectural Customization",
      description: "No standard one-size-fits-all frames. Every window and door is fabricated to your site's specific structural openings, architectural drawings, and preferred glass specifications."
    },
    {
      icon: VolumeX,
      title: "Acoustic Comfort & Monsoon Resistance",
      description: "Multi-chamber UPVC engineering combined with multi-point locking mechanisms and double EPDM gasket seals keeps urban street noise out and withstands heavy monsoon downpours."
    },
    {
      icon: Shield,
      title: "Steel-Reinforced Profile Rigidity",
      description: "We fit corrosion-treated galvanized steel inserts into critical frame and sash chambers, preventing profile warping, sagging, or bending under heavy wind pressures."
    },
    {
      icon: UserCheck,
      title: "Direct Consultative Service",
      description: "From honest on-site measurement consultations to after-install hardware adjustments, you work directly with people who build and stand behind their craftsmanship."
    }
  ];

  return (
    <section id="why-us" className="py-14 sm:py-20 lg:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Our Workmanship & Standards
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Why Partner With Us For Your UPVC Project
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
            Honest engineering, transparent fabrication, and reliable on-site execution.
            We focus on what genuinely matters: precision joints, smooth hardware, and airtight installation.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 lg:p-8 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-stone-300 hover:bg-stone-50/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-w-0"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-950 text-white flex items-center justify-center mb-4 sm:mb-6 shadow-sm shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-1.5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 sm:mb-3 break-words">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-stone-200/60 flex items-center gap-2 text-xs font-semibold text-sky-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                  <span>Engineered Execution</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
