import React, { useState } from 'react';
import { Send, Phone, MessageCircle, MapPin, Clock, Mail, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export default function QuoteForm({ initialProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    productType: initialProduct || 'UPVC Sliding Windows',
    quantity: '1 - 5 Windows',
    projectDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const productOptions = [
    'UPVC Sliding Windows',
    'UPVC Casement Windows',
    'UPVC Sliding Doors',
    'UPVC French / Casement Doors',
    'Custom Window & Partition Combo',
    'Full House / Project Package',
    'Site Measurement Consultation'
  ];

  const quantityOptions = [
    '1 - 3 Units',
    '4 - 8 Units',
    '9 - 15 Units',
    '15+ Units (Villa / Commercial Building)',
    'Need Site Measurement First'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    const text = `*New UPVC Quote Request*\n\n` +
      `*Customer Name:* ${formData.name || 'Not specified'}\n` +
      `*Phone Number:* ${formData.phone || 'Not specified'}\n` +
      `*Project Location:* ${formData.location || 'Not specified'}\n` +
      `*Product Required:* ${formData.productType}\n` +
      `*Estimated Quantity:* ${formData.quantity}\n` +
      (formData.projectDetails ? `*Additional Notes:* ${formData.projectDetails}\n` : '') +
      `\nPlease share pricing, profile options, and schedule a measurement if required.`;

    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    setSubmitted(true);
    // Automatically open WhatsApp with prefilled message
    window.open(generateWhatsAppMessage(), '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-3">
            Direct Pricing & Measurement Consultation
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Request an Estimate or Schedule a Site Visit
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
            Fill in your project requirements below. We will provide an estimate or coordinate
            an on-site technician to measure your window and door openings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Business Contact Information */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 bg-white p-5 sm:p-8 lg:p-10 rounded-2xl border border-stone-200 shadow-sm min-w-0">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                Factory & Consultation Office
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Reach out to us directly for urgent quotations, architectural blueprint reviews, or site visit coordination.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6 pt-4 border-t border-stone-100">
              {/* Phone */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 rounded-lg bg-sky-50 text-sky-900 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Phone Inquiries
                  </p>
                  <a
                    href={`tel:${BUSINESS_CONFIG.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-bold text-stone-900 hover:text-sky-800 transition-colors block break-words"
                  >
                    {BUSINESS_CONFIG.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Instant WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      BUSINESS_CONFIG.whatsappMessages.generalEnquiry
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-stone-900 hover:text-emerald-700 transition-colors inline-block"
                  >
                    Chat on WhatsApp
                  </a>
                  <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">Quick responses during working hours</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 rounded-lg bg-stone-100 text-stone-800 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Email
                  </p>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email}`}
                    className="text-xs sm:text-sm font-medium text-stone-900 hover:text-sky-800 transition-colors block break-all"
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 rounded-lg bg-stone-100 text-stone-800 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Workshop & Service Area
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-stone-900 leading-snug">
                    {BUSINESS_CONFIG.workshopAddress}
                  </p>
                  <p className="text-xs text-stone-500">
                    {BUSINESS_CONFIG.city}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 rounded-lg bg-stone-100 text-stone-800 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Operating Hours
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-stone-900 leading-snug">
                    {BUSINESS_CONFIG.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 lg:p-10 rounded-2xl border border-stone-200 shadow-sm min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-5 sm:mb-6">
              Project Specification & Quote Form
            </h3>

            {submitted ? (
              <div className="p-5 sm:p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-emerald-950">
                  Quote Request Ready!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Your WhatsApp message has been generated. If WhatsApp didn't open automatically, click the button below to send your details.
                </p>
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors shadow min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open in WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-800/40 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 sm:mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 00000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-800/40 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 sm:mb-2">
                    Project Location / Area
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g. Whitefield, Indiranagar, or City"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-800/40 focus:bg-white transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Product Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 sm:mb-2">
                      Product Type
                    </label>
                    <select
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-800/40 focus:bg-white transition-all"
                    >
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Quantity */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 sm:mb-2">
                      Estimated Quantity
                    </label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-800/40 focus:bg-white transition-all"
                    >
                      {quantityOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 sm:mb-2">
                    Additional Project Notes or Dimensions (Optional)
                  </label>
                  <textarea
                    name="projectDetails"
                    rows="3"
                    placeholder="Provide window opening dimensions, floor level, acoustic glass requirements, or preferred delivery timeline..."
                    value={formData.projectDetails}
                    onChange={handleChange}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-800/40 focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-white shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 min-h-[48px]"
                >
                  <Send className="w-4 h-4 text-stone-300 shrink-0" />
                  <span>Submit & Send via WhatsApp</span>
                </button>

                <p className="text-[11px] text-stone-500 text-center leading-normal">
                  We respect your privacy. Your contact details are strictly used to coordinate your estimate and site measurements.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
