import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Workshop', href: '#workshop' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-2.5 sm:py-3.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-stone-100 py-3 sm:py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo & Title */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group min-w-0 shrink">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-stone-900 flex items-center justify-center text-white font-bold tracking-tight shadow-sm group-hover:bg-sky-950 transition-colors shrink-0">
              <span className="font-mono text-base sm:text-lg text-sky-400">O</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-stone-900 group-hover:text-sky-950 transition-colors truncate">
                {BUSINESS_CONFIG.brandName}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-stone-500 truncate">
                {BUSINESS_CONFIG.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-sky-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 lg:gap-3.5 shrink-0">
            <a
              href={`tel:${BUSINESS_CONFIG.phone.replace(/\s+/g, '')}`}
              className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-stone-950 px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors min-h-[40px]"
            >
              <Phone className="w-3.5 h-3.5 text-sky-700 shrink-0" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-stone-900 hover:bg-stone-800 text-white shadow-sm hover:shadow transition-all duration-200 active:scale-98 min-h-[40px]"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-300 shrink-0" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors flex items-center justify-center touch-manipulation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-white/98 backdrop-blur-md border-b border-stone-200 px-4 pt-3 pb-6 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto overscroll-contain transition-all duration-200"
          role="dialog"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-stone-700 hover:text-stone-950 active:bg-stone-100 px-3.5 py-3 rounded-lg hover:bg-stone-50 transition-colors min-h-[44px] flex items-center"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-stone-100 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-stone-800 bg-stone-100 active:bg-stone-200 transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-sky-700" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-semibold uppercase tracking-wider bg-stone-900 active:bg-stone-800 text-white shadow min-h-[44px]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-stone-300" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
