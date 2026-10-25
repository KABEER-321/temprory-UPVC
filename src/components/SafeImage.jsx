import React, { useState } from 'react';
import { Camera, ImageOff, ShieldAlert } from 'lucide-react';

/**
 * SafeImage Component
 * Strictly adheres to the rule:
 * "Use ONLY original photographs uploaded by the business owner.
 *  Do not use stock images, external website images, AI-generated images, or placeholder photographs."
 *
 * If the original image file is present in /public/images/, it renders with crisp styling,
 * object-fit, and smooth loading.
 * If the image file has not yet been placed in the folder, it renders a clean, authentic
 * architectural slot indicator specifying the exact file path expected, without substituting
 * any fake or stock imagery.
 */
export default function SafeImage({
  src,
  alt = "UPVC Fabrication Photograph",
  className = "",
  containerClassName = "",
  expectedFileHint = "",
  aspectRatio = "aspect-4/3",
  onClick = null,
  priority = false
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-stone-100 ${aspectRatio} ${containerClassName} ${
        onClick ? 'cursor-pointer group' : ''
      }`}
      onClick={onClick}
    >
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
            } ${onClick ? 'group-hover:scale-105' : ''} ${className}`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-stone-100 animate-pulse text-stone-400">
              <Camera className="w-8 h-8 stroke-1 text-stone-300" />
            </div>
          )}
        </>
      ) : (
        /* Architectural Slot Indicator: Preserves authenticity without fake stock imagery */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-stone-100 border border-dashed border-stone-300">
          <div className="w-12 h-12 rounded-lg bg-stone-200/80 flex items-center justify-center text-stone-500 mb-3 shadow-inner">
            <Camera className="w-6 h-6 stroke-1.5" />
          </div>
          <p className="text-xs font-semibold tracking-wider uppercase text-stone-600 mb-1">
            Original Photograph Slot
          </p>
          <p className="text-xs text-stone-500 max-w-xs font-mono bg-stone-200/60 px-2 py-1 rounded mb-2 break-all">
            {expectedFileHint || src}
          </p>
          <p className="text-[11px] text-stone-400 max-w-xs leading-relaxed">
            Awaiting owner's authentic photo. No stock or AI images will be substituted.
          </p>
        </div>
      )}
    </div>
  );
}
