import React from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../config/images';
import SafeImage from './SafeImage';

export default function ProjectsGallery({ onOpenLightbox }) {
  return (
    <section id="projects" className="py-14 sm:py-20 lg:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Portfolio of Authentic Work
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Executed Projects & Installed Works
          </h2>
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Browse actual photographs of our completed residential and commercial buildings,
            installed UPVC sliding systems, and shop-floor manufacturing.
          </p>
        </div>

        {/* Gallery Grid - All photographs under single heading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden border border-stone-200 bg-stone-100 hover:shadow-xl transition-all duration-300 cursor-pointer min-w-0 touch-manipulation"
              onClick={() => onOpenLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenLightbox(index);
                }
              }}
              aria-label={`View ${item.title}`}
            >
              <SafeImage
                src={item.src}
                alt={item.alt}
                aspectRatio="aspect-4/3"
                expectedFileHint={item.src}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover / Active Overlay */}
              <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 sm:p-5 text-white">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-sky-900/90 text-sky-200 px-2.5 py-1 rounded truncate">
                    {item.badge}
                  </span>
                  <div className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1 truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity Guarantee Note */}
        <div className="mt-8 sm:mt-12 text-center px-2">
          <p className="text-xs text-stone-500 font-medium">
            * All gallery visuals represent authentic, completed fabrication and installation work. No stock or AI images are used.
          </p>
        </div>

      </div>
    </section>
  );
}
