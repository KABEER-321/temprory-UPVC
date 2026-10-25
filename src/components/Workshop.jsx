import React from 'react';
import { Factory, Cog, ShieldCheck, Flame, Scissors, CheckCircle } from 'lucide-react';
import { ORIGINAL_IMAGES } from '../config/images';
import SafeImage from './SafeImage';

export default function Workshop() {
  const machinerySteps = [
    {
      icon: Scissors,
      title: "Automated Profile Miter Cutting",
      description: "Dual-head saws execute exact 45° and 90° miter cuts to guarantee clean corner mating and accurate overall frame diagonals."
    },
    {
      icon: Cog,
      title: "Steel Chamber Reinforcement",
      description: "Corrosion-resistant galvanized steel sections are screwed inside the main chambers to provide wind-load resistance and rigidity."
    },
    {
      icon: Flame,
      title: "Seamless Fusion Corner Welding",
      description: "Thermostatically controlled welding blocks melt and fuse UPVC profile corners into a monolithic, leak-proof joint."
    },
    {
      icon: ShieldCheck,
      title: "Corner Cleaning & Drainage Routing",
      description: "CNC corner trimmers cleanly dress the weld bead, while automated routers create concealed weep-holes for water drainage."
    }
  ];

  return (
    <section id="workshop" className="py-14 sm:py-20 lg:py-28 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-3">
            In-House Manufacturing Facility
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Our Fabrication Machinery & Workshop
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
            Take a transparent look inside our fabrication facility. Every frame is manufactured
            on specialized industrial machinery using high-grade multi-chamber UPVC profiles.
          </p>
        </div>

        {/* Dual Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Workshop Machinery Photo */}
          <div className="lg:col-span-7 min-w-0">
            <div className="rounded-2xl overflow-hidden border-2 border-stone-200 shadow-xl bg-stone-900">
              <SafeImage
                src={ORIGINAL_IMAGES.fabricationMachinery.src}
                alt={ORIGINAL_IMAGES.fabricationMachinery.alt}
                aspectRatio="aspect-16/10"
                expectedFileHint={ORIGINAL_IMAGES.fabricationMachinery.src}
              />
              <div className="p-3.5 sm:p-4 bg-stone-900 text-stone-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0">
                <span className="font-semibold text-white">Workshop Shop Floor Machinery</span>
                <span className="text-stone-400 font-mono text-[11px] sm:text-xs">Precision Profile Processing</span>
              </div>
            </div>
          </div>

          {/* Fabrication Standards List */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 min-w-0">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                Quality Engineering
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1 break-words">
                Zero Compromise on Joint Integrity
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2.5 sm:mt-3 leading-relaxed">
                Poorly made UPVC frames sag, leak rainwater, and jam when sliding. By maintaining complete
                control over raw profile cutting, welding temperatures, and hardware fitting in our workshop,
                we ensure each frame delivers decades of trouble-free operation.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-3.5">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-stone-700 leading-snug">
                  <strong>Galvanized Core Reinforcement:</strong> Steel inserts fastened throughout sashes and outer frames for structural stability.
                </p>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-stone-700 leading-snug">
                  <strong>Controlled Heat Welding:</strong> Calibrated plate temperatures create unified molecular bonds at every corner seam.
                </p>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle className="w-5 h-5 text-sky-700 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-stone-700 leading-snug">
                  <strong>Pre-Delivery Fitment Checks:</strong> Hardware, rollers, friction hinges, and locks are fully tested prior to site transport.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Machinery Workflow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {machinerySteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-xl border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow min-w-0"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-900 flex items-center justify-center mb-3 sm:mb-4 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-1.5 sm:mb-2 break-words">
                  {step.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
