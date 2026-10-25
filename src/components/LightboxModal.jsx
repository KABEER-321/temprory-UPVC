import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SafeImage from './SafeImage';

export default function LightboxModal({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onNavigate
}) {
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scroll while modal is active
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Minimum swipe threshold (50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left -> Next
        onNavigate((currentIndex + 1) % items.length);
      } else {
        // Swiped right -> Previous
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    }
    setTouchStartX(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/92 backdrop-blur-md p-3 sm:p-6 transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button with accessible 44px touch target */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-30 min-w-[44px] min-h-[44px] p-2.5 rounded-full bg-stone-900/90 text-stone-200 hover:text-white hover:bg-stone-800 border border-stone-700/60 transition-colors flex items-center justify-center"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Desktop/Tablet Prev button */}
      {items.length > 1 && (
        <button
          onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
          aria-label="Previous photograph"
          className="hidden sm:flex absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 min-w-[44px] min-h-[44px] p-3 rounded-full bg-stone-900/80 text-stone-200 hover:text-white hover:bg-stone-800 border border-stone-800 transition-all items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Main image container */}
      <div className="max-w-5xl w-full max-h-[92vh] flex flex-col items-center overflow-y-auto px-1">
        <div className="w-full relative rounded-lg overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl">
          <SafeImage
            src={currentItem.src}
            alt={currentItem.alt}
            aspectRatio="aspect-16/10"
            containerClassName="w-full max-h-[55vh] sm:max-h-[70vh] bg-stone-900"
            className="w-full h-full object-contain"
            expectedFileHint={currentItem.src}
          />
        </div>

        {/* Caption & Metadata & Mobile Controls */}
        <div className="w-full mt-3 sm:mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-stone-300 gap-3 px-1 sm:px-2">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-sky-400 bg-sky-950/80 border border-sky-800 px-2 py-0.5 rounded">
                {currentItem.badge || currentItem.category}
              </span>
              <h4 className="text-sm sm:text-base font-semibold text-white truncate">
                {currentItem.title}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {currentItem.caption}
            </p>
          </div>

          {/* Navigation Controls: Mobile Bottom Bar / Desktop Counter */}
          <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
            {/* Mobile Prev / Next buttons */}
            {items.length > 1 && (
              <div className="flex sm:hidden items-center gap-1.5 mr-2">
                <button
                  onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
                  aria-label="Previous photograph"
                  className="min-w-[40px] min-h-[40px] p-2 rounded-lg bg-stone-800/90 text-stone-200 active:bg-stone-700 border border-stone-700/50 flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate((currentIndex + 1) % items.length)}
                  aria-label="Next photograph"
                  className="min-w-[40px] min-h-[40px] p-2 rounded-lg bg-stone-800/90 text-stone-200 active:bg-stone-700 border border-stone-700/50 flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            <div className="text-xs font-mono text-stone-400 bg-stone-900 px-3 py-1.5 rounded-md border border-stone-800 shrink-0">
              {currentIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Next button */}
      {items.length > 1 && (
        <button
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          aria-label="Next photograph"
          className="hidden sm:flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 min-w-[44px] min-h-[44px] p-3 rounded-full bg-stone-900/80 text-stone-200 hover:text-white hover:bg-stone-800 border border-stone-800 transition-all items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
