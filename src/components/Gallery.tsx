"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const galleryImages = [
  { src: '/assets/image2.jpg', alt: 'Featured salon transformation — image2', category: 'Hair' },
  { src: '/assets/image3.jpg', alt: 'Featured salon transformation — image3', category: 'Styling' },
  { src: '/assets/image4.jpg', alt: 'Featured salon transformation — image4', category: 'Grooming' },
  { src: '/assets/image5.jpg', alt: 'Featured salon transformation — image5', category: 'Makeup' },
  { src: '/assets/IMG_1962.JPG', alt: 'Hair styling transformation — salon result (IMG_1962)', category: 'Hair' },
  { src: '/assets/IMG_3028@1647591925.JPG', alt: 'Braiding and styling result — salon work (IMG_3028)', category: 'Braids' },
  { src: '/assets/IMG_3788.JPG', alt: 'Makeup application — client result (IMG_3788)', category: 'Makeup' },
  { src: '/assets/IMG_1823@962415802.JPG', alt: 'Manicure and nail art — salon result (IMG_1823)', category: 'Nails' },
  { src: '/assets/IMG_9631@271771341.JPG', alt: 'Frontal installation — styled salon result (IMG_9631)', category: 'Hair' },
  { src: '/assets/IMG_9828@2024614199.JPG', alt: 'Beard grooming and styling result — salon service (IMG_9828)', category: 'Grooming' },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAt = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((i) => (i + 1) % galleryImages.length);
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <section id="gallery" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Subtle light leaks */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-tan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Artistry in Motion
          </span>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Our Work
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            See the transformations we create every day. Each masterpiece is a testament to our dedication to beauty and style.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openAt(index)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-2xl transition-smooth hover:-translate-y-2 ${
                index % 4 === 0 ? 'md:row-span-2' : ''
              } ${index % 5 === 0 ? 'md:col-span-2' : ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-smooth group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-end p-8">
                <span className="text-gold text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-smooth delay-75">
                  {image.category}
                </span>
                <div className="flex items-center justify-between">
                  <h4 className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-smooth delay-100">
                    View Transformation
                  </h4>
                  <Maximize2 className="text-white/70 h-5 w-5 transform translate-y-4 group-hover:translate-y-0 transition-smooth delay-150" />
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-gold/30 rounded-2xl transition-smooth" />
            </div>
          ))}
        </div>
      </div>

      {/* Premium Lightbox */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10" 
          role="dialog" 
          aria-modal="true"
          onClick={close}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]" 
            onClick={close}
          >
            <X className="h-10 w-10" />
          </button>

          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[110]" 
            onClick={showPrev}
          >
            <ChevronLeft className="h-12 w-12 md:h-16 md:w-16" />
          </button>

          <div 
            className="relative w-full max-w-6xl aspect-[4/5] md:aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={galleryImages[currentIndex].src} 
              alt={galleryImages[currentIndex].alt} 
              fill 
              className="object-contain md:object-cover" 
              priority
              sizes="90vw" 
            />
            
            {/* Lightbox Info */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-gold text-sm uppercase tracking-[0.2em] mb-2 block">
                {galleryImages[currentIndex].category}
              </span>
              <h3 className="text-white text-2xl md:text-3xl font-playfair font-bold">
                {galleryImages[currentIndex].alt.split('—')[0]}
              </h3>
            </div>
          </div>

          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[110]" 
            onClick={showNext}
          >
            <ChevronRight className="h-12 w-12 md:h-16 md:w-16" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-8 text-white/40 text-sm tracking-widest font-light">
            {currentIndex + 1} <span className="mx-2">/</span> {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
