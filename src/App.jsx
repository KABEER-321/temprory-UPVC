import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import ProjectsGallery from './components/ProjectsGallery';
import Workshop from './components/Workshop';
import WhyChooseUs from './components/WhyChooseUs';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { GALLERY_ITEMS } from './config/images';

export default function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleOpenLightbox = (index) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleScrollToQuote = (productName = '') => {
    if (productName) {
      setSelectedProduct(productName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-900 pb-20 sm:pb-0 overflow-x-hidden min-w-0 w-full">
      {/* Top sticky navigation */}
      <Navbar onOpenQuote={() => handleScrollToQuote()} />

      <main className="flex-grow min-w-0 w-full">
        {/* Hero Section */}
        <Hero onOpenQuote={() => handleScrollToQuote()} />

        {/* Product Cards */}
        <Products onSelectProduct={(prodName) => handleScrollToQuote(prodName)} />

        {/* Fabrication & Installation Services */}
        <Services onOpenQuote={() => handleScrollToQuote()} />

        {/* Interactive Gallery with Lightbox */}
        <ProjectsGallery onOpenLightbox={handleOpenLightbox} />

        {/* In-House Workshop & Machinery */}
        <Workshop />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Contact & Custom Quote Form */}
        <QuoteForm key={selectedProduct} initialProduct={selectedProduct} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox for Authentic Project & Installation Photographs */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
        items={GALLERY_ITEMS}
        currentIndex={activePhotoIndex}
        onNavigate={(newIndex) => setActivePhotoIndex(newIndex)}
      />

      {/* Floating WhatsApp trigger & Mobile Sticky CTA */}
      <FloatingWhatsApp onOpenQuote={() => handleScrollToQuote()} />
    </div>
  );
}
