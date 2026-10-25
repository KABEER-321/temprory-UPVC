import React from 'react';
import { ArrowRight, CheckCircle2, Sliders, Maximize, DoorClosed, Grid } from 'lucide-react';
import { ORIGINAL_IMAGES } from '../config/images';
import SafeImage from './SafeImage';

export default function Products({ onSelectProduct }) {
  const products = [
    {
      id: 'sliding-windows',
      name: 'UPVC Sliding Windows',
      image: ORIGINAL_IMAGES.slidingWindow,
      icon: Sliders,
      tag: 'Most Popular',
      description: 'Engineered for smooth horizontal gliding with nylon rollers, stainless steel tracks, and integrated mosquito mesh options.',
      features: [
        '2-Track & 3-Track configurations',
        'Multi-point locking for heightened security',
        'Wool pile & EPDM weather seals to block dust',
        'Accommodates single and double acoustic glazing'
      ],
      idealFor: 'Balconies, bedrooms, living rooms, and scenic views.'
    },
    {
      id: 'casement-windows',
      name: 'UPVC Casement Windows',
      image: ORIGINAL_IMAGES.casementWindow,
      icon: Maximize,
      tag: 'Maximum Ventilation',
      description: 'Hinged windows opening inward or outward to maximize fresh air intake and ensure acoustic and thermal insulation.',
      features: [
        'Full 90-degree opening for unrestricted airflow',
        'Continuous compression gasket sealing against rain',
        'Heavy-duty friction stays to hold window in wind',
        'Multi-point locking handles around entire sash'
      ],
      idealFor: 'Bedrooms, study rooms, dining areas, and high-wind elevations.'
    },
    {
      id: 'upvc-doors',
      name: 'UPVC Doors & Sliding Partitions',
      image: ORIGINAL_IMAGES.upvcDoors,
      icon: DoorClosed,
      tag: 'Heavy-Duty Strength',
      description: 'Reinforced multi-chamber UPVC doors designed for high-traffic entry points, balconies, and wide panoramic patio partitions.',
      features: [
        'Galvanized steel core reinforcement inside profiles',
        'Smooth glide sliding patio doors & French casement doors',
        'Low threshold options for seamless floor transitions',
        'Weather-tight gaskets preventing water seepage'
      ],
      idealFor: 'Balcony exits, patio entries, terraces, and interior dividers.'
    },
    {
      id: 'custom-solutions',
      name: 'Custom Window & Frame Solutions',
      image: ORIGINAL_IMAGES.framesReady,
      icon: Grid,
      tag: 'Bespoke Fabrication',
      description: 'Custom-built window systems fabricated to match non-standard architectural designs, bay spaces, and combination openings.',
      features: [
        'Fixed panoramic glass windows with structural frames',
        'Top-hung and tilt-and-turn ventilators for bathrooms',
        'Combination slider + fixed glass configurations',
        'Custom mitered angles and precision corner welding'
      ],
      idealFor: 'Architectural villas, stairwells, skylights, and custom facades.'
    }
  ];

  return (
    <section id="products" className="py-14 sm:py-20 lg:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Architectural Product Range
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Engineered UPVC Window & Door Systems
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
            Every unit is custom fabricated to exact architectural drawings and site measurements,
            utilizing high-grade UPVC profiles designed for durability, acoustic comfort, and weather resistance.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group flex flex-col rounded-2xl overflow-hidden border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-stone-300 hover:shadow-xl transition-all duration-300 min-w-0"
              >
                {/* Product Image using Original Photograph */}
                <div className="relative overflow-hidden bg-stone-100">
                  <SafeImage
                    src={product.image.src}
                    alt={product.image.alt}
                    aspectRatio="aspect-16/10"
                    expectedFileHint={product.image.src}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 sm:px-3 py-1 rounded-md bg-stone-900/90 text-white backdrop-blur-sm shadow-sm">
                      {product.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 lg:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5">
                      <div className="p-2 rounded-lg bg-sky-100/70 text-sky-900 shrink-0">
                        <Icon className="w-5 h-5 stroke-2" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900 break-words">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5 sm:mb-6">
                      {product.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-5 sm:mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                        Key Engineering Highlights:
                      </p>
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-stone-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="text-xs text-stone-500 bg-stone-100/80 px-3.5 py-2.5 rounded-lg mb-5 sm:mb-6">
                      <strong className="text-stone-700">Recommended For: </strong>
                      {product.idealFor}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-xs text-stone-500 font-medium">
                      Custom sizes manufactured
                    </span>
                    <button
                      onClick={() => onSelectProduct(product.name)}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-900 hover:text-sky-700 active:text-sky-950 group-hover:translate-x-1 transition-all min-h-[44px] py-1"
                    >
                      <span>Get Quote for This</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
