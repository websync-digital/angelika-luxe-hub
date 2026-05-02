"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    image: '/assets/hero-haircut.jpg',
    title: 'Redefine Your Look with Confidence',
    alt: 'Professional barber service at De Angelika Beauty Lounge'
  },
  {
    image: '/assets/hero-braiding.jpg',
    title: 'Luxury Beauty & Grooming for Men and Women',
    alt: 'Hair braiding and styling services'
  },
  {
    image: '/assets/hero-nails.jpg',
    title: "Book, Relax, and Let's Pamper You",
    alt: 'Professional nail services at De Angelika Beauty Lounge'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);


  const handleBooking = () => {
    window.open('https://wa.me/2349138616079?text=Hi, I would like to book an appointment', '_blank');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tan/40 via-tan/20 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl">
                <h1 className="mb-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg leading-tight">
                  {slide.title}
                </h1>
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                  <Button
                    onClick={handleBooking}
                    className="w-full sm:w-auto bg-tan hover:bg-tan-dark text-white font-bold rounded-full px-10 py-7 text-lg shadow-lg transition-smooth hover:scale-105 active:scale-95"
                  >
                    Book Appointment
                  </Button>
                  <Button
                    onClick={handleBooking}
                    variant="outline"
                    className="w-full sm:w-auto bg-white/25 backdrop-blur-lg border-white/50 text-white hover:bg-white/40 rounded-full px-10 py-7 text-lg transition-smooth hover:scale-105 active:scale-95 group"
                  >
                    <MessageCircle className="h-6 w-6 mr-3 text-white group-hover:scale-110 transition-smooth" />
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}


      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
