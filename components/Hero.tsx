'use client';
import { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';
import { Phone, MessageCircle } from "lucide-react";

const SLIDESHOW_IMAGES = [
  'https://images.unsplash.com/photo-1558617320-e695f0d420de',
  'https://images.pexels.com/photos/193667/pexels-photo-193667.jpeg',
  'https://images.unsplash.com/photo-1611739893884-0636a7309fee',
  'https://images.pexels.com/photos/5410923/pexels-photo-5410923.jpeg',
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {SLIDESHOW_IMAGES.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-blue-800/85"></div>
          </div>
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Professional Water Delivery Services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Reliable Bulk Water Delivery Across Gauteng
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Expert water tank filling, pool filling, and emergency water supply services for residential, commercial, and industrial needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us Now
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Phone className="w-6 h-6" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-blue-100">Same-day and emergency delivery available 24/7</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="text-lg font-semibold text-white mb-2">Clean & Safe</h3>
              <p className="text-blue-100">SANS standard compliant water quality</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-semibold text-white mb-2">Best Prices</h3>
              <p className="text-blue-100">Competitive rates, no hidden costs</p>
            </div>
          </div>
        </div>
      </div>
      {/* Slideshow Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {SLIDESHOW_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}